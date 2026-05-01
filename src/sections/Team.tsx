import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Globe, Mail, Code2, Loader2 } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  github: string
  linkedin: string
  portfolio: string | null
  email: string
  color: string
  image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Karim Feki',
    role: 'Lead Full-Stack Developer',
    bio: 'Architects the entire application ecosystem. Manages frontend, backend, API design, and deployment infrastructure with DevOps practices.',
    github: 'https://github.com/fekikarim',
    linkedin: 'https://www.linkedin.com/in/karimfeki',
    portfolio: 'https://karimfeki.is-a.dev',
    email: 'feki.karim28@gmail.com',
    color: 'from-blue-500 to-cyan-500',
    image: '/assets/karim.png'
  },
  {
    name: 'Nesrine Derouiche',
    role: 'Frontend Developer',
    bio: 'Crafts pixel-perfect user interfaces and interactive experiences. Specializes in React, TypeScript, responsive design, and UI/UX implementation.',
    github: 'https://github.com/nesrine-derouiche',
    linkedin: 'https://linkedin.com/in/nesrine-derouiche',
    portfolio: 'https://nesrine-derouiche.is-a.dev',
    email: 'nesrine.derouiche15@gmail.com',
    color: 'from-purple-500 to-pink-500',
    image: '/assets/nesrine.png'
  },
  {
    name: 'Mohamed Abidi',
    role: 'Backend Developer',
    bio: 'Builds robust server-side architecture and database systems. Expert in Node.js, TypeORM, REST APIs, authentication, and cloud services integration.',
    github: 'https://github.com/hamabtw',
    linkedin: 'https://www.linkedin.com/in/med-abidi',
    portfolio: 'https://hamabtw.github.io/portfolio',
    email: 'abidi.mohamed.business@gmail.com',
    color: 'from-orange-500 to-amber-500',
    image: '/assets/mohamed.png'
  },
  {
    name: 'Oussema Issaoui',
    role: 'Mobile Developer',
    bio: 'Develops cross-platform mobile applications using Flutter. Handles iOS/Android deployment, native features integration, and mobile UI optimization.',
    github: 'https://github.com/oussemissaoui',
    linkedin: '',
    portfolio: null,
    email: '',
    color: 'from-teal-500 to-emerald-500',
    image: '/assets/oussema.png'
  },
  {
    name: 'Fatma Hidoussi',
    role: 'Marketing & QA Specialist',
    bio: 'Drives brand awareness and user acquisition strategies. Supports light frontend tasks while leading quality assurance, testing, and product optimization.',
    github: 'https://github.com/fatmahidouss',
    linkedin: 'https://www.linkedin.com/in/fatma-hidoussi-497052236',
    portfolio: null,
    email: 'hidoussifatma01@gmail.com',
    color: 'from-rose-500 to-pink-500',
    image: '/assets/fatma.jpeg'
  }
]

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

// Team Member Avatar with loading and error handling
function TeamMemberAvatar({ member }: { member: TeamMember }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // If no image or error, show initials fallback
  if (!member.image || hasError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 shadow-lg mx-auto relative overflow-hidden`}
      >
        <span className="text-3xl font-bold text-white">
          {getInitials(member.name)}
        </span>
        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    )
  }

  return (
    <motion.div
      className="relative w-28 h-28 mx-auto mb-6"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg z-10`}
          >
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Container */}
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg relative">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
        
        {/* Hover Overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-3"
        >
          <span className="text-white text-xs font-medium opacity-90">{member.role}</span>
        </motion.div>
      </div>

      {/* Decorative Ring on Hover */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1 
        }}
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${member.color} opacity-20 blur-sm -z-10`}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
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
                
                {/* Avatar with Image */}
                <TeamMemberAvatar member={member} />
                
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
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-farmy-primary/20 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-farmy-primary/20 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </a>
                    )}
                    
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-farmy-primary/20 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </a>
                    )}
                    
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-farmy-primary/20 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </a>
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
