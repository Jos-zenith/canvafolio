import { motion } from 'motion/react';
import { Sparkles, FileText, Download, ExternalLink, ArrowRight, Plus, Palette, Presentation, Video, Instagram, Code2, Trophy, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TemplateEditor } from './TemplateEditor';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export function HomePage({ setActiveTab }: HomePageProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
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

  const templates = [
    {
      id: 1,
      title: 'Skillrack Profile',
      category: 'Resume',
      icon: <FileText className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Competitive coding profile',
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=446603&key=f9045f93b0e369e843179049553d743fc9e36693',
      stats: {
        label: 'Global Rank',
        value: '50,000',
        subtext: 'Top Coder',
        icon: <Code2 className="w-5 h-5" />,
      }
    },
    {
      id: 2,
      title: 'Duolingo',
      category: 'Portfolio',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Language learning streak',
      link: 'https://www.duolingo.com/profile/jos_zen?via=share_profile_link',
      stats: {
        label: 'Day Streak',
        value: '500+',
        subtext: 'Days in a row',
        icon: <Sparkles className="w-5 h-5" />,
      }
    },
    {
      id: 3,
      title: 'Leetcode',
      category: 'Presentation',
      icon: <Presentation className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Problems solved',
      link: 'https://leetcode.com/u/Zenith_Joshua/',
      stats: {
        label: 'Problems',
        value: '60+',
        subtext: 'Solved',
        icon: <Code2 className="w-5 h-5" />,
      }
    },
    {
      id: 4,
      title: 'Unstop',
      category: 'Social',
      icon: <Instagram className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-500',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: 'Competition platform',
      link: 'https://unstop.com/u/zenitjos7470',
      stats: {
        label: 'Competitions',
        value: '25+',
        subtext: 'Participated',
        icon: <Trophy className="w-5 h-5" />,
      }
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

  const handleTemplateClick = (template: any) => {
    // If template has a link, open it in a new tab
    if (template.link) {
      window.open(template.link, '_blank');
    } else {
      setSelectedTemplate(template);
    }
  };

  return (
    <div>
      {/* Hero Background with Pattern */}
      <div className="min-h-[62vh] lg:min-h-[68vh] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_85%_12%,rgba(236,72,153,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(250,244,238,0.96))]">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(124,58,237,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-12 left-6 w-24 h-24 bg-violet-300 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-24 right-12 w-32 h-32 bg-fuchsia-300 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-14 left-1/3 w-28 h-28 bg-sky-300 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-24 right-6 w-20 h-20 bg-amber-300 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-8">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-start">
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl text-violet-700 px-4 py-2 rounded-full text-sm border border-white/70 shadow-[0_10px_30px_rgba(129,93,170,0.12)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Product leader available for high-impact roles</span>
              </motion.div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-6xl mb-4 tracking-tight">
                  <span className="block mb-2 text-slate-700">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent font-bold">
                    Zenith Joshua
                  </span>
                </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                    Product Leader & Technical Founder
                  </p>
                  <p className="text-base lg:text-lg text-gray-500 mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    I build measurable product outcomes by turning ambiguous problems into shipped hardware-software systems, aligned teams, and clear execution metrics.
                  </p>
              </div>

              {/* Key Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                {['IoT', 'Full-Stack Development', 'Team Leadership', 'Innovation'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm text-slate-700 px-3 py-1.5 rounded-full text-sm border border-white/70 shadow-sm hover:border-violet-200 hover:bg-violet-50 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 lg:gap-4 py-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-white/75 backdrop-blur-xl rounded-3xl p-4 border border-white/70 shadow-[0_20px_50px_rgba(120,76,151,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,76,151,0.14)] transition-all group"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 font-bold">
                    {counters.problems}+
                  </div>
                  <div className="text-xs lg:text-sm text-slate-600 uppercase tracking-[0.16em]">Problems Solved</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-white/75 backdrop-blur-xl rounded-3xl p-4 border border-white/70 shadow-[0_20px_50px_rgba(120,76,151,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,76,151,0.14)] transition-all group"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1 font-bold">
                    {counters.awards}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-600 uppercase tracking-[0.16em]">Awards Won</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-white/75 backdrop-blur-xl rounded-3xl p-4 border border-white/70 shadow-[0_20px_50px_rgba(120,76,151,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,76,151,0.14)] transition-all group"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 font-bold">
                    {counters.team}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-600 uppercase tracking-[0.16em]">Projects Completed</div>
                </motion.div>
              </div>

              {/* Focus Areas Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                {[
                  { title: 'Fast Prototyping', icon: '⚡', gradient: 'from-purple-500 to-pink-500' },
                  { title: 'Impact Engineering', icon: '🛠️', gradient: 'from-blue-500 to-cyan-500' },
                  { title: 'Product Leadership', icon: '🚀', gradient: 'from-green-500 to-emerald-500' },
                ].map((pill, idx) => (
                  <motion.div
                    key={pill.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + idx * 0.07 }}
                    className={`rounded-2xl p-3 border border-white/60 bg-gradient-to-r ${pill.gradient} text-white text-sm font-semibold shadow-[0_16px_32px_rgba(120,76,151,0.14)]`}
                  >
                    <span>{pill.icon}</span> <span>{pill.title}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={() => handleAction(action.action)}
                    className={`${
                      index === 0
                        ? 'bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/30'
                        : 'bg-white/90 backdrop-blur-sm text-slate-700 border border-white/70 hover:border-violet-200 hover:bg-violet-50'
                    } px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 font-medium`}
                  >
                    {action.icon}
                    <span>{action.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Profile & Templates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Profile Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white/75 backdrop-blur-2xl rounded-[2rem] p-6 lg:p-8 shadow-[0_25px_70px_rgba(120,76,151,0.12)] border border-white/70 text-center"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500 p-1 shadow-[0_18px_60px_rgba(217,70,239,0.22)]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-violet-500 to-rose-500 flex items-center justify-center text-white text-4xl lg:text-5xl font-bold shadow-inner">
                        ZJ
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Zenith Joshua</h3>
                  <p className="text-gray-600 mb-4">Product Leader & Technical Founder</p>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Remote Ready</span>
                  </div>
                </div>
              </motion.div>

              {/* Resume Card - Canva Template Style */}
              <div className="bg-white/75 backdrop-blur-2xl rounded-[2rem] p-6 lg:p-8 shadow-[0_25px_70px_rgba(120,76,151,0.12)] border border-white/70">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/25">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">My Resume</h3>
                      <p className="text-sm text-gray-500">Updated Jan 2026</p>
                    </div>
                  </div>
                  <a href="https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-violet-50 hover:bg-violet-100 flex items-center justify-center text-violet-700 transition-all hover:scale-110">
                    <Download className="w-5 h-5" />
                  </a>
                </div>

                {/* Resume Preview */}
                <div className="bg-[linear-gradient(135deg,rgba(250,250,252,1),rgba(244,238,255,0.92))] rounded-[1.5rem] p-6 space-y-4 border border-white/70 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-rose-500 flex items-center justify-center text-white text-xl font-bold shadow-md">
                      ZJ
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Zenith Joshua</div>
                      <div className="text-sm text-slate-600">Product Leader & Technical Founder</div>
                    </div>
                  </div>

                  <div className="grid gap-2 text-sm sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-slate-600 rounded-xl bg-white/80 px-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                      <span>Student @Loyola ICAM</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 rounded-xl bg-white/80 px-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                      <span>Team Lead @ EFWDC SAEISS</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 rounded-xl bg-white/80 px-3 py-2 sm:col-span-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                      <span>Co-Founder @ ParkinToday </span>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['IoT', 'Web Development', 'Leadership', 'Innovation'].map((skill) => (
                      <span key={skill} className="bg-white px-3 py-1 rounded-full text-xs text-slate-700 border border-white/70 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Full Resume Button */}
                <button
                  onClick={() => setActiveTab('about')}
                  className="mt-4 w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white py-3 rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-2 font-medium hover:scale-[1.02] shadow-[0_18px_50px_rgba(217,70,239,0.2)]"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Template Grid - Canva Style */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-800">Featured Signals</h3>
                  <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">View All</button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      onClick={() => handleTemplateClick(template)}
                      className="group bg-white/80 backdrop-blur-xl rounded-3xl p-4 border border-white/70 hover:border-violet-200 hover:shadow-[0_18px_45px_rgba(120,76,151,0.12)] transition-all cursor-pointer hover:-translate-y-1"
                    >
                      <div
                        className="w-full h-28 rounded-2xl mb-3 flex flex-col items-center justify-center relative overflow-hidden p-3 shadow-inner"
                        style={{ background: template.image }}
                      >
                        {/* Stats Display */}
                        <div className="text-white relative z-10 text-center">
                          <div className="flex items-center justify-center gap-1.5 mb-1 opacity-90">
                            {template.stats.icon}
                          </div>
                          <div className="text-2xl font-bold mb-0.5 tracking-tight">{template.stats.value}</div>
                          <div className="text-xs opacity-90">{template.stats.label}</div>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all">
                            <ExternalLink className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-sm font-semibold mb-1 text-slate-800">{template.title}</h4>
                      <p className="text-xs text-slate-500">{template.description}</p>
                    </motion.div>
                  ))}
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
                  <button
                    onClick={() => setActiveTab('projects')}
                    className="bg-white text-violet-700 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => setActiveTab('about')}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all hover:scale-105"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Template Editor Modal */}
      {selectedTemplate && (
        <TemplateEditor
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </div>
  );
}
