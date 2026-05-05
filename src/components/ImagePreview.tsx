import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon, AlertCircle, RefreshCcw } from 'lucide-react'

interface ImagePreviewProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function ImagePreview({ src, alt, className = '', priority = false }: ImagePreviewProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    setStatus('loading')
    const img = new Image()
    img.src = src
    img.onload = () => setStatus('loaded')
    img.onerror = () => setStatus('error')
  }, [src, retryCount])

  const handleRetry = (e: React.MouseEvent) => {
    e.stopPropagation()
    setRetryCount(prev => prev + 1)
  }

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <AnimatePresence mode="wait">
        {status === 'loading' && (
          <motion.div
            key="shimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 dark:bg-white/5"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-gray-400 animate-pulse" />
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/10 rounded-[2rem] p-6 text-center"
          >
            <AlertCircle className="w-10 h-10 text-red-500 mb-3" />
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Failed to load image
            </p>
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-4 py-2 bg-farmy-primary/10 hover:bg-farmy-primary/20 text-farmy-primary rounded-full transition-colors text-xs font-semibold"
            >
              <RefreshCcw className="w-3 h-3" />
              Retry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        animate={{ 
          opacity: status === 'loaded' ? 1 : 0,
          scale: status === 'loaded' ? 1 : 1.05,
          filter: status === 'loaded' ? 'blur(0px)' : 'blur(10px)'
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
          status === 'loaded' ? 'visible' : 'invisible'
        }`}
        loading={priority ? 'eager' : 'lazy'}
      />

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
    </div>
  )
}
