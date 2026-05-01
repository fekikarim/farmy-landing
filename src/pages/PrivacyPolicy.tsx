import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, Database, Share2, UserCheck } from 'lucide-react'

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: [
      'Personal Information: Name, email address, phone number, and location when you register.',
      'Farm Data: Land details, crop information, production data, and inventory records.',
      'Usage Data: How you interact with our platform, features used, and session duration.',
      'Device Information: IP address, browser type, and device identifiers for security.'
    ]
  },
  {
    icon: Lock,
    title: 'How We Protect Your Data',
    content: [
      'End-to-end encryption for all sensitive farm and financial data.',
      'Regular security audits and penetration testing by certified professionals.',
      'Secure data centers with 99.9% uptime and automated backups.',
      'Strict access controls - only authorized personnel can access user data.'
    ]
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'To provide and improve our agricultural management services.',
      'To match farmers with investors and customers in our marketplace.',
      'To send important updates about your account and platform features.',
      'To analyze platform usage and develop new agricultural tools.'
    ]
  },
  {
    icon: Share2,
    title: 'Data Sharing & Third Parties',
    content: [
      'We never sell your personal data to third parties.',
      'Farm data is only shared with your explicit consent (e.g., to investors you choose).',
      'Anonymous aggregated data may be used for agricultural research.',
      'Legal compliance: We may disclose data if required by law or to protect our rights.'
    ]
  },
  {
    icon: UserCheck,
    title: 'Your Rights & Controls',
    content: [
      'Right to access: View all data we hold about you at any time.',
      'Right to correction: Update or correct inaccurate information.',
      'Right to deletion: Request complete removal of your account and data.',
      'Right to portability: Export your data in standard formats.',
      'Email us at contact.farmynet@gmail.com for any data requests.'
    ]
  }
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-farmy-light dark:bg-farmy-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-farmy-dark/80 backdrop-blur-xl shadow-sm">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-farmy-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
            <div className="flex items-center gap-3">
              <img src="/logo-no-bg.png" alt="Farmy" className="w-8 h-8 object-contain" />
              <span className="font-bold gradient-text">Farmy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farmy-primary/10 mb-6">
              <Shield className="w-5 h-5 text-farmy-primary" />
              <span className="text-sm font-medium text-farmy-primary">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              Last updated: May 1, 2026
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              Your privacy is our priority. Learn how we collect, use, and protect your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="section-padding max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-farmy-primary to-farmy-secondary flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-farmy-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Contact our Data Protection Officer for any privacy-related inquiries.
            </p>
            <a 
              href="mailto:contact.farmynet@gmail.com?subject=Privacy Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-farmy-dark text-white py-8">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Farmy Net. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
