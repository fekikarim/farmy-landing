import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Download', href: '#download' },
    { label: 'Pricing', href: '#' }
  ],
  company: [
    { label: 'About Us', href: '#team' },
    { label: 'Our Team', href: '#team' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' }
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#faq' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Licenses', href: '#' }
  ]
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/fekikarim', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@farmy.net', label: 'Email' }
]

export default function Footer() {
  return (
    <footer className="relative bg-farmy-dark text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-farmy-dark to-black/50" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a href="#" className="flex items-center gap-3 mb-6">
              <img
                src="/logo-no-bg.png"
                alt="Farmy Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">Farmy</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering agriculture through innovation, management, and immersive experiences. 
              Join the future of farming today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-farmy-primary" />
                <span>contact@farmy.net</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-farmy-primary" />
                <span>Tunisia</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-farmy-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Farmy Net. All rights reserved. Made with{' '}
            <span className="text-red-500">❤</span> by the Be.net Team
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-farmy-primary/20 flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-farmy-primary" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
