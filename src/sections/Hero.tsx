import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Tractor, ShoppingCart, Users, Sprout } from 'lucide-react'

const floatingIcons = [
  { Icon: Tractor, delay: 0, x: '10%', y: '20%' },
  { Icon: ShoppingCart, delay: 0.5, x: '85%', y: '30%' },
  { Icon: Users, delay: 1, x: '15%', y: '70%' },
  { Icon: Sprout, delay: 1.5, x: '80%', y: '75%' },
]

export default function Hero({ onWatchDemo }: { onWatchDemo: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    // Create ambient particles
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(144, 165, 62, ${particle.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-start md:items-center justify-center overflow-hidden"
    >
      {/* Background Canvas for Particles */}
      <canvas
        id="hero-canvas"
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-farmy-light via-white to-farmy-primary/10 dark:from-farmy-dark dark:via-farmy-dark dark:to-farmy-primary/5" />
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-farmy-primary/20 blur-3xl"
          style={{ top: '-10%', left: '-10%' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-farmy-secondary/20 blur-3xl"
          style={{ bottom: '-10%', right: '-10%' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.3,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: { delay: delay + 0.5, duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="p-4 rounded-2xl bg-white/50 dark:bg-white/10 backdrop-blur-sm shadow-lg">
            <Icon className="w-6 h-6 text-farmy-primary" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-20 section-padding w-full max-w-7xl mx-auto pt-24 md:pt-0"
        style={{ y: ySpring, opacity, scale }}
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-farmy-primary/10 dark:bg-farmy-primary/20 border border-farmy-primary/20 mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4 text-farmy-primary" />
            <span className="text-sm font-medium text-farmy-secondary dark:text-farmy-primary">
              Welcome to the Future of Agriculture
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6"
          >
            <span className="block text-gray-900 dark:text-white">Farmy</span>
            <span className="block gradient-text mt-2">Net</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Empowering agriculture through innovation, management, and immersive experiences
          </motion.p>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Connect with farmers, investors, workers, and customers in a seamless digital ecosystem
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 md:mt-0"
          >
            <motion.a
              href="#download"
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button
              className="btn-secondary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onWatchDemo}
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-16"
          >
            {[
              { value: '4', label: 'User Roles' },
              { value: '10+', label: 'Features' },
              { value: '100%', label: 'Secure' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-farmy-primary/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-farmy-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
