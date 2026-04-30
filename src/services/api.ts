// Production Backend URL - Hardcoded for reliability
// Backend: https://farmy.giize.com
const PRODUCTION_API_URL = 'https://farmy.giize.com/api/v1'
const DEV_API_URL = 'http://localhost:3000/api/v1'

// Get API URL based on environment
const getApiUrl = (): string => {
  // Check for environment variable first
  const envUrl = import.meta.env.VITE_API_URL
  
  if (envUrl) {
    try {
      const url = new URL(envUrl)
      // Force HTTPS in production builds
      if (import.meta.env.PROD && url.protocol !== 'https:') {
        console.warn('[API] Insecure URL in production, using production URL')
        return PRODUCTION_API_URL
      }
      return envUrl
    } catch {
      console.error('[API] Invalid VITE_API_URL, using fallback')
    }
  }
  
  // Development mode
  if (import.meta.env.DEV) {
    return DEV_API_URL
  }
  
  // Production fallback
  return PRODUCTION_API_URL
}

const API_BASE_URL = getApiUrl()
// Log backend URL only in development
if (import.meta.env.DEV) {
  console.log('[API] Using backend:', API_BASE_URL)
}

// Default fallback stats (shown immediately while loading)
const DEFAULT_STATS: PlatformStats = {
  users: 10000,
  lands: 5000,
  productsSold: 25000,
  satisfactionRate: 98,
}

interface PlatformStats {
  users: number
  lands: number
  productsSold: number
  satisfactionRate: number
}

interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

type ApiError = {
  type: 'timeout' | 'network' | 'http' | 'parse' | 'unknown'
  message: string
  status?: number
}

class ApiService {
  private lastError: ApiError | null = null
  private maxRetries = 3

  private async fetchWithRetry<T>(
    endpoint: string,
    timeout = 5000,
    retries = 0
  ): Promise<ApiResponse<T>> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const url = `${API_BASE_URL}${endpoint}`
      if (import.meta.env.DEV) {
        console.log(`[API] Fetching: ${url} (attempt ${retries + 1})`)
      }

      const response = await fetch(url, {
        signal: controller.signal,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit',
        // Use cache busting via URL instead of headers to avoid CORS preflight
        cache: 'no-cache',
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw {
          type: 'http',
          message: `HTTP ${response.status}: ${response.statusText}`,
          status: response.status
        } as ApiError
      }

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw { type: 'parse', message: 'Invalid response type' } as ApiError
      }

      const data = await response.json()
      if (import.meta.env.DEV) {
        console.log(`[API] Success: ${endpoint}`, data)
      }
      this.lastError = null
      return data

    } catch (error) {
      clearTimeout(timeoutId)

      // Classify error
      let apiError: ApiError
      if (error instanceof TypeError && error.message.includes('fetch')) {
        apiError = { type: 'network', message: 'Network error - backend unreachable' }
      } else if (error instanceof DOMException && error.name === 'AbortError') {
        apiError = { type: 'timeout', message: 'Request timeout' }
      } else if (error && typeof error === 'object' && 'type' in error) {
        apiError = error as ApiError
      } else {
        apiError = { type: 'unknown', message: String(error) }
      }

      if (import.meta.env.DEV) {
        console.error(`[API] Error (${endpoint}):`, apiError)
      }
      this.lastError = apiError

      // Retry on network/timeout errors
      if ((apiError.type === 'network' || apiError.type === 'timeout') && retries < this.maxRetries) {
        if (import.meta.env.DEV) {
          console.log(`[API] Retrying... (${retries + 1}/${this.maxRetries})`)
        }
        await this.delay(1000 * (retries + 1)) // Exponential backoff
        return this.fetchWithRetry(endpoint, timeout, retries + 1)
      }

      throw apiError
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Initial load with retries
  async getPlatformStats(): Promise<{ data: PlatformStats; source: 'api' | 'fallback' }> {
    try {
      const response = await this.fetchWithRetry<PlatformStats>('/public/stats', 10000)
      
      return {
        data: response.data,
        source: 'api'
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn('[API] All retries failed, using fallback stats')
      }
      return {
        data: DEFAULT_STATS,
        source: 'fallback'
      }
    }
  }

  // Health check with quick timeout
  async checkHealth(): Promise<{ online: boolean; latency?: number }> {
    const start = performance.now()
    try {
      await this.fetchWithRetry('/health', 3000, 0)
      return { online: true, latency: Math.round(performance.now() - start) }
    } catch {
      return { online: false }
    }
  }

  // Get last error for debugging
  getLastError(): ApiError | null {
    return this.lastError
  }
}

export { DEFAULT_STATS }
export type { PlatformStats }

export const apiService = new ApiService()
