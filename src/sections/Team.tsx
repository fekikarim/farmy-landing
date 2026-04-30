import { motion } from 'framer-motion'
import { Github, Linkedin, Globe, Code2 } from 'lucide-react'

const teamMembers = [
  {
    name: 'Karim Feki',
    role: 'Lead Developer',
    bio: 'Full-stack developer passionate about building scalable agricultural solutions.',
    github: 'https://github.com/fekikarim',
    linkedin: 'https://www.linkedin.com/in/karimfeki/',
    portfolio: 'https://karimfeki.is-a.dev',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Nesrine Derouiche',
    role: 'Developer',
    bio: 'Creative developer focused on user experience and frontend excellence.',
    github: 'https://github.com/nesrine-derouiche',
    linkedin: 'https://www.linkedin.com/in/nesrine-derouiche/',
    portfolio: 'https://nesrine-derouiche.is-a.dev',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Mohamed Abidi',
    role: 'Developer',
    bio: 'Backend specialist with expertise in database design and API development.',
    github: 'https://github.com/HamaBTW',
    linkedin: 'https://www.linkedin.com/in/med-abidi/',
    portfolio: null,
    color: 'from-orange-500 to-amber-500'
  },
  {
    name: 'Oussema Issaoui',
    role: 'Developer',
    bio: 'Mobile development expert bringing Farmy to iOS and Android platforms.',
    github: 'https://github.com/oussemissaoui',
    linkedin: '',
    portfolio: null,
    color: 'from-teal-500 to-emerald-500'
  },
  {
    name: 'Fatma Hidoussi',
    role: 'Developer',
    bio: 'Quality assurance and testing specialist ensuring a bug-free experience.',
    github: 'https://github.com/fatmahidouss',
    linkedin: 'https://www.linkedin.com/in/fatma-hidoussi-497052236/',
    portfolio: null,
    color: 'from-rose-500 to-pink-500'
  }
]

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

export default function Team() {
  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-farmy-light to-white dark:from-farmy-surface dark:to-farmy-dark" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farmy-primary/10 dark:bg-farmy-primary/20 mb-6">
            <Code2 className="w-4 h-4 text-farmy-primary" />
            <span className="text-sm font-medium text-farmy-secondary dark:text-farmy-primary">
              The Be.net Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A group of passionate developers from Tunisia dedicated to transforming agriculture through technology. 
            Together, we built Farmy to bridge the gap between traditional farming and modern innovation.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover-lift relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 shadow-lg mx-auto`}
                >
                  <span className="text-3xl font-bold text-white">
                    {getInitials(member.name)}
                  </span>
                </motion.div>
                
                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-farmy-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-farmy-primary/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.a>
                    
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-farmy-primary/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.a>
                    )}
                    
                    {member.portfolio && (
                      <motion.a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-farmy-primary/20 transition-colors"
                      >
                        <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 glass-card p-10 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              To revolutionize agriculture by creating a connected ecosystem where farmers, investors, 
              workers, and consumers collaborate seamlessly through innovative technology solutions.
            </p>
            <div className="inline-flex items-center gap-2 text-farmy-primary">
              <span className="text-sm font-medium">Made with</span>
              <span className="text-red-500">❤</span>
              <span className="text-sm font-medium">by the Be.net Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
