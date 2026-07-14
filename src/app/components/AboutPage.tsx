import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink } from 'lucide-react';

export function AboutPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'zenithjoshua.27it@licet.ac.in',
      link: 'mailto:zenithjoshua.27it@licet.ac.in',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7448343632',
      link: 'tel:+917448343632',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin',
      link: 'https://www.linkedin.com/in/zenith-joshua-7178a623a/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github',
      link: 'https://github.com/Jos-zenith',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  const interests = [
    { emoji: '🚀', text: 'Team Leadership' },
    { emoji: '💡', text: 'Innovation' },
    { emoji: '🔧', text: 'IoT & Embedded' },
    { emoji: '🌐', text: 'Business Development' },
    { emoji: '♿', text: 'Healthcare Tech' },
    { emoji: '📊', text: 'Data Analytics' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,#5b21b6,#be185d)] rounded-[2rem] p-8 lg:p-10 text-white text-center relative overflow-hidden shadow-[0_24px_60px_rgba(88,28,135,0.20)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 lg:w-28 lg:h-28 bg-white/18 backdrop-blur-sm rounded-[1.5rem] flex items-center justify-center mx-auto mb-5 border border-white/15"
              >
                <span className="text-5xl lg:text-6xl">👨‍💻</span>
              </motion.div>
              <h1 className="text-3xl lg:text-4xl mb-3">Zenith Joshua</h1>
              <p className="text-purple-100 text-lg lg:text-xl mb-2">Product Leader & Technical Founder</p>
              <p className="text-purple-100/80 text-sm lg:text-base">
                Product-minded builder with a track record of shipping scalable solutions across IoT, AI, and automotive systems.
                I focus on turning technical effort into measurable outcomes, tighter execution, and better user impact.
              </p>
            </div>
          </motion.div>

          {/* About Me */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4">About Me</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-[0_18px_40px_rgba(120,76,151,0.08)] border border-white/70"
            >
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">
                I thrive at the intersection of product thinking, engineering, and execution. My work is driven by a simple lens: identify the highest-leverage problem, align the team around outcomes, and ship solutions that move real metrics. Whether I’m leading a 22-member team to build an electric vehicle from the chassis up or architecting IoT systems to optimize urban infrastructure, I focus on building products that work for people and for the business.</p>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                Currently pursuing my Bachelor's in Information Technology while actively working on multiple projects
              </p>
            </motion.div>
          </div>

          {/* Interests */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4">Interests & Passions</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_18px_40px_rgba(120,76,151,0.08)] border border-white/70"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-slate-50/80 rounded-2xl p-4 text-center hover:bg-violet-50 transition-colors border border-transparent hover:border-violet-100"
                  >
                    <div className="text-3xl mb-2">{interest.emoji}</div>
                    <div className="text-xs lg:text-sm text-slate-700">{interest.text}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4">Get in Touch</h2>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="block bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-5 shadow-[0_16px_35px_rgba(120,76,151,0.08)] border border-white/70 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(120,76,151,0.14)] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500 mb-1 uppercase tracking-[0.16em]">{contact.label}</div>
                      <div className="text-sm lg:text-base text-slate-900 group-hover:text-violet-700 transition-colors">{contact.value}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-[0_18px_40px_rgba(120,76,151,0.08)] border border-white/70"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-base lg:text-lg mb-2">Location</h3>
                <p className="text-sm text-slate-600 mb-1">Chennai, Tamil Nadu, India</p>
                <p className="text-xs text-slate-500">Loyola ICAM College of Engineering and Technology</p>
              </div>
            </div>
          </motion.div>

          {/* Download Resume CTA */}
          <motion.a
            href="https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-[1.5rem] p-5 lg:p-6 shadow-[0_18px_50px_rgba(217,70,239,0.2)] hover:shadow-[0_24px_60px_rgba(217,70,239,0.28)] transition-all flex items-center justify-center gap-3 text-base lg:text-lg group active:scale-95"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </motion.a>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center py-4"
          >
            <p className="text-xs lg:text-sm text-slate-400">
              Designed with intention, not templates
            </p>
            <p className="text-xs lg:text-sm text-slate-400 mt-1">
              Developed by Jos_zenith
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
