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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-farmy-light via-white to-farmy-primary/10 dark:from-farmy-dark dark:via-farmy-dark dark:to-farmy-primary/5"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full bg-farmy-primary/20 blur-3xl"
              style={{ top: '20%', left: '20%' }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-farmy-secondary/20 blur-3xl"
              style={{ bottom: '20%', right: '20%' }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Logo container with glow effect */}
            <motion.div
              className="relative"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute inset-0 bg-farmy-primary/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src="/logo-no-bg.png"
                alt="Farmy Logo"
                className="relative w-28 h-28 object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <h1 className="text-3xl font-bold gradient-text">Farmy Net</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Empowering Agriculture
              </p>
            </motion.div>

            {/* Loading progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 w-48"
            >
              <div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-farmy-primary to-farmy-secondary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
              <motion.p
                className="text-xs text-gray-400 text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Loading experience...
              </motion.p>
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
