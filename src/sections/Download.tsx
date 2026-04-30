import { motion } from 'framer-motion'
import { Apple, Play, Smartphone, Star, Download, Shield } from 'lucide-react'

const features = [
  { icon: Star, text: '4.9 Rating' },
  { icon: Download, text: '10K+ Downloads' },
  { icon: Shield, text: 'Secure & Private' }
]

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-farmy-primary/20 via-farmy-light to-farmy-secondary/20 dark:from-farmy-primary/10 dark:via-farmy-dark dark:to-farmy-secondary/10" />
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-farmy-primary/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-farmy-secondary/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm mb-6">
              <Smartphone className="w-4 h-4 text-farmy-primary" />
              <span className="text-sm font-medium text-farmy-secondary dark:text-farmy-primary">
                Mobile App
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Download <span className="gradient-text">Farmy Net</span> Today
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Take your farm management, marketplace access, and investment opportunities anywhere. 
              Available on iOS and Android devices.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm"
                >
                  <feature.icon className="w-4 h-4 text-farmy-primary" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:shadow-2xl transition-all"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:shadow-2xl transition-all"
              >
                <Play className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src="/farmy-net-preview.png"
                alt="Farmy Net App Preview"
                className="w-72 md:w-80 h-auto rounded-[2rem] shadow-2xl"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-farmy-primary/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-farmy-secondary/30 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
