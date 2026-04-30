import { motion } from 'framer-motion'
import { UserPlus, Search, ShieldCheck, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up and choose your role - Farmer, Investor, Worker, or Customer. Complete your profile and verification.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Search,
    title: 'Explore & Connect',
    description: 'Browse farm lands, products, investment opportunities, or find skilled workers. Use our AI assistant for recommendations.',
    color: 'from-farmy-primary to-green-500'
  },
  {
    icon: ShieldCheck,
    title: 'Transact Securely',
    description: 'Make deals with confidence using our secure payment system, smart contracts, and verified user profiles.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Grow Together',
    description: 'Track your progress, manage operations, and scale your agricultural business with data-driven insights.',
    color: 'from-orange-500 to-amber-500'
  }
]

const roles = [
  {
    title: 'Farmers',
    description: 'Manage your farm, list products, find workers, and connect with investors',
    features: ['Land Management', 'Product Listings', 'Worker Hiring', 'Investment Opportunities']
  },
  {
    title: 'Investors',
    description: 'Discover and invest in promising agricultural ventures with transparency',
    features: ['Land Investment', 'Portfolio Tracking', 'Verified Projects', 'ROI Analytics']
  },
  {
    title: 'Workers',
    description: 'Find agricultural jobs, manage contracts, and build your career',
    features: ['Job Matching', 'Contract Management', 'Skill Verification', 'Payment Protection']
  },
  {
    title: 'Customers',
    description: 'Buy fresh products directly from farmers at fair prices',
    features: ['Direct Purchase', 'Quality Assurance', 'Delivery Tracking', 'Secure Payments']
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-farmy-light dark:from-farmy-dark dark:to-farmy-surface" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Getting started with Farmy Net is simple. Follow these steps to join our agricultural ecosystem.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-32">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-farmy-primary to-orange-500 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card p-8 h-full hover-lift relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-farmy-primary to-farmy-secondary flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* User Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your <span className="gradient-text">Role</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Farmy Net serves multiple stakeholders in the agricultural ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover-lift group"
            >
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-farmy-primary transition-colors">
                {role.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {role.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {role.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 text-sm rounded-full bg-farmy-primary/10 text-farmy-secondary dark:text-farmy-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
