import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink, Sparkles } from 'lucide-react';
import { PageHeader, PageShell, RevealSection } from './PageFrame';

export function AboutPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'zenithjoshua.27it@licet.ac.in',
      link: 'mailto:zenithjoshua.27it@licet.ac.in',
      color: 'bg-violet-50 text-violet-700 border-violet-100',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7448343632',
      link: 'tel:+917448343632',
      color: 'bg-teal-50 text-teal-700 border-teal-100',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin',
      link: 'https://www.linkedin.com/in/zenith-joshua-7178a623a/',
      color: 'bg-slate-50 text-slate-700 border-slate-100',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github',
      link: 'https://github.com/Jos-zenith',
      color: 'bg-sand-50 text-slate-700 border-sand-100',
    },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      value: 'Profile',
      link: 'https://www.linkedin.com/in/zenith-joshua-7178a623a/',
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      label: 'GitHub',
      value: 'Source',
      link: 'https://github.com/Jos-zenith',
      icon: <Github className="w-4 h-4" />,
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
    <PageShell>
      <PageHeader
        eyebrow="About the builder"
        title="About"
        intro="Product-minded builder with a track record of shipping scalable solutions across IoT, AI, and automotive systems."
        stats={[
          { value: '22', label: 'Members led' },
          { value: '6', label: 'Awards' },
          { value: '2', label: 'Startups' },
        ]}
      />

      <RevealSection>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(91,33,182,0.96),rgba(190,24,93,0.92))] p-6 lg:p-8 text-white shadow-[0_24px_60px_rgba(88,28,135,0.20)]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10" />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Editable canvas
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-5xl tracking-tight">Zenith Joshua</h2>
                <p className="text-lg lg:text-xl text-purple-100">Product Leader & Technical Founder</p>
                <p className="max-w-2xl text-sm lg:text-base leading-relaxed text-purple-50/90">
                  I work at the intersection of product thinking, engineering, and execution. The focus is always the same: identify the highest-leverage problem, align the team around outcomes, and ship solutions that move real metrics.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {interests.map((interest) => (
                  <div key={interest.text} className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
                    <div className="text-3xl">{interest.emoji}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-purple-100/80">{interest.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group block rounded-[1.5rem] border border-dashed border-white/25 bg-white/10 p-4 shadow-[0_16px_40px_rgba(34,18,58,0.12)] backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/15 ${contact.color}`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-purple-100/80">{contact.label}</div>
                      <div className="mt-1 text-sm lg:text-base text-white/95">{contact.value}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/45 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </motion.a>
              ))}

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="group rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-4 text-white shadow-[0_12px_30px_rgba(34,18,58,0.10)] backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-purple-100/80">{social.label}</div>
                        <div className="mt-1 text-sm font-medium text-white">{social.value}</div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10">
                        {social.icon}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-card rounded-[2rem] border border-white/70 p-6 lg:p-8 shadow-[0_16px_40px_rgba(34,18,58,0.08)]">
            <h3 className="text-xl lg:text-2xl tracking-tight mb-4">About Me</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">
              I thrive at the intersection of product thinking, engineering, and execution. Whether I’m leading a 22-member team to build an electric vehicle from the chassis up or architecting IoT systems to optimize urban infrastructure, I focus on building products that work for people and for the business.
            </p>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
              Currently pursuing my Bachelor's in Information Technology while actively working on multiple projects.
            </p>
          </div>

          <div className="space-y-4">
            <div className="surface-card rounded-[2rem] border border-white/70 p-6 lg:p-8 shadow-[0_16px_40px_rgba(34,18,58,0.08)]">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-sand-100 bg-sand-50 text-amber-700 shadow-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base lg:text-lg mb-2">Location</h3>
                  <p className="text-sm text-slate-600 mb-1">Chennai, Tamil Nadu, India</p>
                  <p className="text-xs text-slate-500">Loyola ICAM College of Engineering and Technology</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="group flex items-center justify-center gap-3 rounded-[1.5rem] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 p-5 text-white shadow-[0_18px_50px_rgba(217,70,239,0.2)] transition-all hover:shadow-[0_24px_60px_rgba(217,70,239,0.28)] active:scale-95"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span className="text-base lg:text-lg">Download Resume</span>
            </motion.a>
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <div className="text-center py-2">
          <p className="text-xs lg:text-sm text-slate-400">Designed with intention, not templates</p>
          <p className="text-xs lg:text-sm text-slate-400 mt-1">Developed by Jos_zenith</p>
        </div>
      </RevealSection>
    </PageShell>
  );
}
