import { motion } from 'framer-motion'
import { 
  Tractor, 
  ShoppingCart, 
  Wallet, 
  MapPin, 
  Users, 
  Bot,
  Shield,
  Bell,
  Gamepad2,
  BarChart3,
  Truck,
  Leaf
} from 'lucide-react'

const features = [
  {
    icon: Tractor,
    title: 'Farm Management',
    description: 'Comprehensive tools for managing farm operations, land tracking, and agricultural workflows with real-time insights.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace',
    description: 'Connect directly with buyers and sellers. List products, manage inventory, and process orders seamlessly.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Wallet,
    title: 'Digital Wallet',
    description: 'Secure payment processing with Stripe integration, subscription management, and financial tracking.',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: MapPin,
    title: 'Land & Rental',
    description: 'Discover and manage land properties, rental agreements, and ownership transfers with smart contracts.',
    color: 'from-orange-500 to-amber-600'
  },
  {
    icon: Users,
    title: 'Multi-Role Platform',
    description: 'Tailored experiences for farmers, investors, workers, and customers with role-specific features.',
    color: 'from-pink-500 to-rose-600'
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Intelligent crop analysis, recommendations, and automated support powered by advanced AI technology.',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Secure & Verified',
    description: 'KYC verification, proof requests, and blockchain-powered security for transparent transactions.',
    color: 'from-red-500 to-rose-600'
  },
  {
    icon: Bell,
    title: 'Real-time Updates',
    description: 'Instant notifications, push alerts, and live chat to keep everyone connected and informed.',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    icon: Gamepad2,
    title: 'Gamified Experience',
    description: 'Engage with farming through interactive games, achievements, and immersive agricultural simulations.',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track performance metrics, generate reports, and make data-driven decisions for your farm.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Truck,
    title: 'Delivery Network',
    description: 'Integrated logistics system connecting vendors with delivery services for efficient fulfillment.',
    color: 'from-lime-500 to-green-600'
  },
  {
    icon: Leaf,
    title: 'Sustainability Focus',
    description: 'Promote eco-friendly practices with sustainability tracking and carbon footprint monitoring.',
    color: 'from-farmy-primary to-farmy-secondary'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-farmy-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-farmy-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farmy-primary/10 dark:bg-farmy-primary/20 mb-6"
          >
            <Leaf className="w-4 h-4 text-farmy-primary" />
            <span className="text-sm font-medium text-farmy-secondary dark:text-farmy-primary">
              Powerful Features
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Thrive</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Farmy Net combines cutting-edge technology with agricultural expertise to deliver 
            a comprehensive platform for the modern farming ecosystem.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full glass-card p-6 hover-lift overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-farmy-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            And many more features to discover
          </p>
          <motion.a
            href="#download"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Exploring
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
