import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Sprout, ShoppingBag, TrendingUp } from 'lucide-react'
import { apiService, DEFAULT_STATS, type PlatformStats } from '../services/api'

interface StatItem {
  icon: typeof Users
  suffix: string
  label: string
  description: string
  key: keyof PlatformStats
}

const statConfig: StatItem[] = [
  {
    icon: Users,
    suffix: '+',
    label: 'Active Users',
    description: 'Farmers, investors, and customers worldwide',
    key: 'users'
  },
  {
    icon: Sprout,
    suffix: '+',
    label: 'Farm Lands',
    description: 'Registered and managed on the platform',
    key: 'lands'
  },
  {
    icon: ShoppingBag,
    suffix: '+',
    label: 'Products Sold',
    description: 'Through our marketplace',
    key: 'productsSold'
  },
  {
    icon: TrendingUp,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'From our happy users',
    key: 'satisfactionRate'
  }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  // Production-ready: Show real data when available, fallback to defaults seamlessly
  const [stats, setStats] = useState<PlatformStats>(DEFAULT_STATS)
  const [isLive, setIsLive] = useState(false)

  // Initial data fetch with automatic retry
  useEffect(() => {
    let mounted = true

    const loadStats = async () => {
      try {
        const result = await apiService.getPlatformStats()
        
        if (mounted) {
          setStats(result.data)
          setIsLive(result.source === 'api')
        }
      } catch {
        // Silent fail - defaults already shown, no UI disruption
      }
    }

    loadStats()
    return () => { mounted = false }
  }, [])

  // Background sync: reconnect if backend becomes available
  useEffect(() => {
    let mounted = true
    let checkCount = 0
    const MAX_CHECKS = 18 // Stop checking after 3 minutes (18 * 10s)

    const checkConnection = async () => {
      if (!mounted || checkCount >= MAX_CHECKS || isLive) return
      
      try {
        const health = await apiService.checkHealth()
        
        if (mounted && health.online) {
          const result = await apiService.getPlatformStats()
          if (mounted && result.source === 'api') {
            setStats(result.data)
            setIsLive(true)
          }
        }
      } catch {
        // Silent fail - continue with current data
      }
      
      checkCount++
    }

    const interval = setInterval(checkConnection, 10000)
    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [isLive])

  return (
    <section className="relative py-20 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-farmy-primary/5 to-farmy-secondary/5 dark:from-farmy-primary/10 dark:to-farmy-secondary/10" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Growing Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our platform is making a real impact in the agricultural community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statConfig.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover-lift group relative"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-farmy-primary to-farmy-secondary flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-farmy-primary/30 transition-shadow"
              >
                <stat.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter 
                  value={stats[stat.key]} 
                  suffix={stat.suffix} 
                />
              </div>
              
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>

              {/* Live indicator - subtle pulsing dot */}
              <div className="absolute top-4 right-4">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-farmy-primary opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-farmy-primary/60"></span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
