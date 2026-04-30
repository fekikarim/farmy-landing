import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Stats from './sections/Stats'
import Team from './sections/Team'
import FAQ from './sections/FAQ'
import Download from './sections/Download'
import Footer from './sections/Footer'
import './styles/animations.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 1500)
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-farmy-light dark:bg-farmy-dark"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.img
              src="/logo-no-bg.png"
              alt="Farmy Logo"
              className="w-24 h-24 object-contain drop-shadow-2xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-farmy-secondary dark:text-farmy-primary font-semibold text-lg tracking-wider">
                Farmy
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-farmy-light dark:bg-farmy-dark text-gray-900 dark:text-white overflow-x-hidden"
        >
          <Navigation scrollY={scrollY} />
          <main>
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <Team />
            <FAQ />
            <Download />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
