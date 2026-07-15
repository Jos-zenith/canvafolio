import { motion } from 'motion/react';
import { Download, ExternalLink, ArrowRight, Plus, Palette, Presentation, Video, Instagram, Code2, Trophy, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GlassCard, GradientButton, GhostButton, SectionHeader, StatChip, TagPill } from './ui/portfolio-elements';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export function HomePage({ setActiveTab }: HomePageProps) {
  const [counters, setCounters] = useState({ problems: 0, awards: 0, team: 0 });

  // Animate counters on mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    
    const targets = { problems: 500, awards: 6, team: 15 };
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        problems: Math.floor(targets.problems * progress),
        awards: Math.floor(targets.awards * progress),
        team: Math.floor(targets.team * progress),
      });
      
      if (step >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const proofOfWork = [
    {
      id: 1,
      title: 'EngineerFit',
      label: 'Live product',
      description: 'Career clarity for South Indian engineers with a deployed decision-support experience.',
      link: 'https://ebv-engineerfit-seven.vercel.app/',
      image: 'https://i.postimg.cc/rsHWf6Tb/mechanical-gears-integration-human-brain-silhouette-innovation-creativity-concept-1332469-219.jpg',
    },
    {
      id: 2,
      title: 'Karuvelam',
      label: 'Live product',
      description: 'Sustainable bio-preservative product system shipped as a deployed web experience.',
      link: 'https://karuvelam.vercel.app/',
      image: 'https://i.postimg.cc/hP9T95wZ/glass-beaker-with-green-leaf-inside-971713-5040.avif',
    },
    {
      id: 3,
      title: 'Jalodhyam',
      label: 'Live product',
      description: 'Community water data translated into a deployed civic utility product.',
      link: 'https://e-jalodayam.vercel.app/',
      image: 'https://i.postimg.cc/Y2Jqp2dF/A-digital-illustrati.png',
    },
    {
      id: 4,
      title: 'Open Projects',
      label: 'More work',
      description: 'Browse the full project collection and the supporting case studies.',
      link: 'projects',
      image: 'https://i.postimg.cc/P55smBJh/Whats-App-Image-2025-08-09-at-16-56-26-477fa066.jpg',
    },
  ];

  const quickActions = [
    { title: 'Download Resume', icon: <Download className="w-5 h-5" />, action: 'download' },
    { title: 'View Projects', icon: <ExternalLink className="w-5 h-5" />, action: 'projects' },
    { title: 'Contact Me', icon: <ArrowRight className="w-5 h-5" />, action: 'about' },
  ];

  const handleAction = (action: string) => {
    if (action === 'projects' || action === 'about') {
      setActiveTab(action);
    } else if (action === 'download') {
      // Handle resume download
      window.open('https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing', '_blank');
    }
  };

  return (
    <div>
      {/* Hero Background with Pattern */}
      <div className="relative overflow-hidden py-4 lg:py-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_85%_12%,rgba(236,72,153,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(250,244,238,0.96))]">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(124,58,237,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-12 left-6 w-24 h-24 bg-violet-300 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-24 right-12 w-32 h-32 bg-fuchsia-300 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-14 left-1/3 w-28 h-28 bg-sky-300 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-24 right-6 w-20 h-20 bg-amber-300 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid gap-6 2xl:grid-cols-[1.02fr_0.98fr] 2xl:gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 lg:space-y-5"
            >
              <div className="flex items-center justify-between gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="surface-subtle inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-violet-700"
                >
                  <span>Portfolio overview</span>
                </motion.div>
                <div className="surface-card inline-flex items-center gap-1 rounded-full p-1 text-sm">
                  <span className="rounded-full px-3 py-1.5 bg-white text-slate-800 shadow-sm">Featured work</span>
                </div>
              </div>

              <GlassCard
                elevation="lg"
                padding="lg"
                className="group relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,252,247,0.98),rgba(247,240,231,0.94))] text-left"
              >
                <div className="relative z-10 p-4 lg:p-5 space-y-4">
                  <div className="grid gap-4 2xl:grid-cols-[0.92fr_1.08fr] 2xl:items-center">
                    <div className="relative mx-auto lg:mx-0 h-48 w-48 lg:h-56 lg:w-56">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 p-1 shadow-[0_20px_50px_rgba(217,70,239,0.18)]">
                        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,239,225,0.94))] border border-white/80">
                          <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.8),transparent_40%),linear-gradient(135deg,rgba(244,230,208,0.84),rgba(237,249,248,0.86))]" />
                          <div className="absolute inset-7 rounded-full border border-dashed border-violet-200/80" />
                          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-inner">
                            <div className="text-center">
                              <Users className="mx-auto mb-1 h-8 w-8 text-violet-500" />
                              <div className="text-[11px] font-semibold uppercase tracking-[0.18em]">Profile</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -right-2 top-5 rounded-full border border-white/80 bg-white/95 px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">
                        Available
                      </div>
                      <div className="absolute -bottom-1 left-6 rounded-full border border-white/80 bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white shadow-lg">
                        Product leader
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h1 className="text-4xl lg:text-6xl mb-3 tracking-tight text-left">
                          <span className="block mb-2 text-slate-700">Hi, I'm</span>
                          <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent font-bold">
                            Zenith Joshua
                          </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                          Product Leader & Technical Founder
                        </p>
                        <p className="mt-4 max-w-2xl text-base lg:text-lg leading-relaxed text-slate-600">
                          I build measurable product outcomes by turning ambiguous problems into shipped hardware-software systems, aligned teams, and clear execution metrics.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        <StatChip icon={Trophy} value={counters.problems.toString() + '+'} label="Problems solved" />
                        <StatChip icon={Users} value={counters.team.toString()} label="Projects led" />
                        <StatChip icon={ArrowRight} value={counters.awards.toString()} label="Awards won" />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['IoT', 'Full-Stack', 'Leadership', 'Innovation'].map((skill) => (
                          <TagPill key={skill}>{skill}</TagPill>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        {quickActions.map((action, index) => (
                          <motion.div key={action.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.08 }}>
                            {index === 0 ? (
                              <GradientButton onClick={() => handleAction(action.action)}>
                                {action.icon}
                                <span>{action.title}</span>
                              </GradientButton>
                            ) : (
                              <GhostButton onClick={() => handleAction(action.action)}>
                                {action.icon}
                                <span>{action.title}</span>
                              </GhostButton>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-5">
                <GlassCard elevation="lg" padding="lg" className="bg-[linear-gradient(135deg,rgba(255,251,247,0.96),rgba(237,249,248,0.86))]">
                  <SectionHeader
                    eyebrow="Positioning statement"
                    title="Product leadership with a designer's eye and an engineer's bias for shipping."
                    subtitle="I work at the intersection of execution, systems thinking, and high-trust team coordination. The goal is simple: make the portfolio feel like a living canvas, not a static brochure."
                  />

                  <div className="surface-subtle rounded-2xl p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Focus</div>
                    <div className="mt-1 text-sm font-semibold text-slate-800">Product execution, hardware systems, and shipped outcomes</div>
                    <div className="mt-2 text-sm text-slate-600">A clean portfolio-first hero with no resume canvas or editor prompt.</div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <GhostButton onClick={() => setActiveTab('projects')}>Browse Projects</GhostButton>
                    <GhostButton onClick={() => setActiveTab('about')}>Contact Me</GhostButton>
                  </div>
                </GlassCard>

                <div>
                  <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
                    <SectionHeader eyebrow="Portfolio evidence" title="Proof of Work" subtitle="Live demos with hover-to-expand previews." accentClassName="from-violet-500 to-fuchsia-500" />
                    <GhostButton onClick={() => setActiveTab('projects')}>View all work</GhostButton>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    {proofOfWork.map((project, index) => (
                      <GlassCard
                        key={project.id}
                        delay={0.35 + index * 0.08}
                        interactive
                        padding="none"
                        className="group overflow-hidden rounded-[1.75rem] text-left"
                        onClick={() => {
                          if (project.link === 'projects') {
                            setActiveTab('projects');
                          } else {
                            window.open(project.link, '_blank');
                          }
                        }}
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,24,0.02),rgba(18,13,24,0.36))]" />
                          <div className="absolute left-3 top-3">
                            <TagPill>{project.label}</TagPill>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-sm">
                              Expand preview
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 p-4">
                          <h4 className="text-base font-semibold text-slate-900">{project.title}</h4>
                          <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>{project.link === 'projects' ? 'Open portfolio' : 'Open live demo'}</span>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,#5b21b6,#be185d)] rounded-[2rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-[0_30px_80px_rgba(88,28,135,0.22)]">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
                <p className="text-lg lg:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                  Let's collaborate on innovative solutions that make a real impact in the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GradientButton onClick={() => setActiveTab('projects')} className="bg-white text-violet-700 hover:bg-white/95">
                    View My Work
                  </GradientButton>
                  <GhostButton onClick={() => setActiveTab('about')} className="border-white/80 bg-transparent text-white hover:bg-white hover:text-violet-700">
                    Get In Touch
                  </GhostButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
