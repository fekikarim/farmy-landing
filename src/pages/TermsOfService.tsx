import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Scale, CheckCircle, AlertTriangle, Users, Globe } from 'lucide-react'

const sections = [
  {
    icon: CheckCircle,
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using Farmy Net, you agree to be bound by these Terms of Service.',
      'If you do not agree to these terms, please do not use our platform.',
      'We reserve the right to modify these terms at any time with 30 days notice.',
      'Continued use after changes constitutes acceptance of the updated terms.'
    ]
  },
  {
    icon: Users,
    title: 'User Accounts & Responsibilities',
    content: [
      'You must be 18 years or older to create an account on Farmy Net.',
      'You are responsible for maintaining the confidentiality of your account credentials.',
      'You agree to provide accurate and complete information when registering.',
      'You are solely responsible for all activities that occur under your account.',
      'Notify us immediately of any unauthorized use of your account.'
    ]
  },
  {
    icon: Globe,
    title: 'Platform Use & Restrictions',
    content: [
      'Farmy Net is a platform connecting agricultural stakeholders - farmers, investors, workers, and customers.',
      'You agree to use the platform only for lawful purposes related to agriculture.',
      'Prohibited activities: fraud, misrepresentation, spam, malware distribution, data scraping.',
      'We may suspend or terminate accounts violating these terms without notice.',
      'All transactions and agreements are between users - Farmy Net is not a party to these agreements.'
    ]
  },
  {
    icon: Scale,
    title: 'Intellectual Property',
    content: [
      'Farmy Net and its content are protected by copyright, trademark, and other laws.',
      'You retain ownership of content you upload (farm data, photos, descriptions).',
      'By uploading content, you grant Farmy Net a license to display and distribute it on the platform.',
      'You may not copy, modify, or distribute our platform code or design without permission.',
      'Third-party trademarks are property of their respective owners.'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    content: [
      'Farmy Net is provided "as is" without warranties of any kind, express or implied.',
      'We do not guarantee crop yields, investment returns, or marketplace transactions.',
      'We are not liable for disputes between users (farmers, investors, workers, customers).',
      'Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.',
      'We are not responsible for losses due to factors beyond our control (natural disasters, market conditions).'
    ]
  },
  {
    icon: FileText,
    title: 'Dispute Resolution',
    content: [
      'Any disputes shall first be attempted to be resolved through good-faith negotiation.',
      'If negotiation fails, disputes will be resolved through binding arbitration in Tunisia.',
      'Arbitration will be conducted in English or Arabic, as agreed by the parties.',
      'Class action lawsuits and jury trials are waived by both parties.',
      'You may opt out of arbitration within 30 days of account creation by emailing us.'
    ]
  }
]

export default function TermsOfService() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farmy-secondary/10 mb-6">
              <FileText className="w-5 h-5 text-farmy-secondary" />
              <span className="text-sm font-medium text-farmy-secondary">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              Last updated: May 1, 2026
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              Please read these terms carefully before using Farmy Net.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-farmy-secondary to-farmy-primary flex items-center justify-center">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-farmy-secondary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Agreement Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-8 bg-gradient-to-br from-farmy-primary/5 to-farmy-secondary/5"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Agreement
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              By using Farmy Net, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/privacy" className="btn-primary text-center">
                Privacy Policy
              </a>
              <a 
                href="mailto:contact.farmynet@gmail.com?subject=Legal Question"
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:scale-105 active:scale-95 transition-all text-center inline-block"
              >
                Contact Legal Team
              </a>
            </div>
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
