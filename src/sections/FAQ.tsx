import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is Farmy?',
    answer: 'Farmy is an all-in-one agricultural platform combining farm management tools, marketplace features, investment opportunities, and gamified experiences. It connects farmers, investors, workers, and customers in a seamless digital ecosystem designed to modernize agriculture.'
  },
  {
    question: 'Who is behind Farmy?',
    answer: 'Farmy was built by the Be.net Team - a group of passionate developers from Tunisia dedicated to transforming agriculture through technology. Our team includes Karim Feki (Lead Developer), Nesrine Derouiche, Mohamed Abidi, Oussema Issaoui, and Fatma Hidoussi.'
  },
  {
    question: 'What technologies are used?',
    answer: 'Farmy is built with Flutter for cross-platform mobile and web experiences, Node.js/TypeScript backend, Firebase for real-time features and notifications, MySQL database with TypeORM, Hedera blockchain for secure transactions, Stripe for payments, and integrates AI-powered features for crop analysis and recommendations.'
  },
  {
    question: 'How can I contribute or contact the team?',
    answer: 'You can reach out to our team through GitHub by contributing to our open-source projects, connect with us on LinkedIn, or visit our portfolio websites. We welcome feedback, suggestions, and collaboration opportunities! Check the Team section for individual contact links.'
  },
  {
    question: 'Is Farmy available on mobile?',
    answer: 'Yes! Farmy Net is available as a mobile app for both Android and iOS devices. You can download it from the Google Play Store and Apple App Store. The app offers the full experience with push notifications and native device features.'
  },
  {
    question: 'What roles can I have on Farmy?',
    answer: 'Farmy supports four main user roles: Farmers (manage lands, sell products, hire workers), Investors (discover and invest in agricultural projects), Workers (find jobs and manage contracts), and Customers (buy fresh products directly from farmers).'
  },
  {
    question: 'How secure are transactions on Farmy?',
    answer: 'Security is our top priority. We use Stripe for secure payment processing, implement KYC verification for users, use blockchain technology for transparent transactions, and employ industry-standard encryption for all data transfers and storage.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-farmy-light dark:from-farmy-dark dark:to-farmy-surface" />
      
      <div className="relative section-padding max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farmy-primary/10 dark:bg-farmy-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-farmy-primary" />
            <span className="text-sm font-medium text-farmy-secondary dark:text-farmy-primary">
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about Farmy Net and how it can help transform your agricultural experience.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'ring-2 ring-farmy-primary/30' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-farmy-primary" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-gray-200 dark:bg-white/10 mb-4" />
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <motion.a
            href="mailto:contact@farmy.net"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
