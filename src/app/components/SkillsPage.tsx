import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Code, Cpu, Wrench, Trophy, Star, Search } from 'lucide-react';

export function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const skillCategories = [
    {
      id: 1,
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['Python', 'Java', 'C', 'React', 'SQL', 'Nextjs', 'Embedded C', 'Figma', 'Nodejs', 'TailwindCSS'],
    },
    {
      id: 2,
      title: 'Technologies',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['IoT', 'Embedded Systems (Arduino, ESP32, Pi)', 'MATLAB', 'Networks', 'Web Development'],
    },
    {
      id: 3,
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['Jira', 'Trello', 'MS Excel (Advanced)', 'Power BI', 'AutoCAD', 'NX CAD', 'Simulink'],
    },
    {
      id: 4,
      title: 'Core Competencies',
      icon: <Star className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Agile Project Management', 'Leadership', 'Hardware-Software Integration', 'Documentation'],
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Envision\'23 - 1st Place',
      description: 'Built an IoT-based gesture-controlled wheelchair; won ₹10,000',
      context: 'Assistive mobility',
      outcome: 'Prototype validated with competition win',
      icon: '🥇',
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 3,
      title: 'ECircle B-Pitch - 1st Place',
      description: 'Best pitch for real-time parking management solution',
      context: 'Urban parking',
      outcome: 'Pitch won on market clarity + execution',
      icon: '🎯',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 2,
      title: 'INDIA@2047 - 2nd Place',
      description: 'Built IoT-based glaucoma eye pressure measuring device',
      context: 'Healthcare IoT',
      outcome: 'Prototype translated technical depth into impact',
      icon: '🥈',
      color: 'from-green-400 to-emerald-500',
    },
    {
      id: 4,
      title: 'EFWDC\'25 - 3rd Place',
      description: 'Developed an energy-efficient electric vehicle; secured 3rd place under Chairman’s Special Award category',
      context: 'EV systems',
      outcome: 'Team delivery across mechanical + software scopes',
      icon: '⚡',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      id: 5,
      title: 'EFWDC\'24 - 4th Place',
      description: 'Designed an efficient electric 4-wheeler; won ₹10,000',
      context: 'EV platform',
      outcome: 'Practical execution under competition constraints',
      icon: '⚡',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      id: 6,
      title: 'ImpactX 2.0 - 4th Place',
      description: 'Developed a driver passenger interaction device for ride-hailing services',
      context: 'Mobility UX',
      outcome: 'Product concept framed for real-world usage',
      icon: '🚗',
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 7,
      title: 'KSR Innovative Business pitch - 5th Place',
      description: 'Pitch for IoT-based smart parking solution for Indian Tier-1 cities',
      context: 'Smart city planning',
      outcome: 'Business logic aligned to a city-scale problem',
      icon: '🏅',
      color: 'from-yellow-400 to-orange-500',
    }
  ];

  const filteredCategories = useMemo(() =>
    skillCategories.filter(category => {
      const query = searchQuery.toLowerCase();
      return (
        category.title.toLowerCase().includes(query) ||
        category.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }),
    [searchQuery]
  );

  const filteredAchievements = useMemo(() =>
    achievements.filter(achievement => {
      const query = searchQuery.toLowerCase();
      return (
        achievement.title.toLowerCase().includes(query) ||
        achievement.description.toLowerCase().includes(query)
      );
    }),
    [searchQuery]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm mb-4 backdrop-blur-xl">
            Capability Snapshot
          </div>
          <h1 className="text-2xl lg:text-4xl mb-2 tracking-tight">Skills & Achievements</h1>
          <p className="text-sm lg:text-base text-slate-600 max-w-2xl">Product-minded execution, technical depth, and measurable outcomes.</p>
        </div>

        <div className="relative w-full lg:w-80 lg:justify-self-end">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search skills or achievements"
            className="w-full rounded-2xl border border-white/70 bg-white/80 py-2.5 pl-10 pr-4 text-sm shadow-[0_12px_30px_rgba(120,76,151,0.08)] backdrop-blur-xl outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
          />
        </div>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/80 backdrop-blur-xl p-6 shadow-[0_18px_40px_rgba(120,76,151,0.08)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">Operating style</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              'Frame the problem before choosing the solution',
              'Align stakeholders around measurable outcomes',
              'Ship usable systems, not just impressive demos',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50/80 px-4 py-4 text-sm text-slate-600 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,#5b21b6,#be185d)] p-6 text-white shadow-[0_24px_60px_rgba(88,28,135,0.20)]">
          <p className="text-xs uppercase tracking-[0.18em] text-violet-100/90 font-semibold mb-3">What recruiters should notice</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: '22', label: 'Members led' },
              { value: '2', label: 'Startups' },
              { value: '6', label: 'Podium finishes' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/15 backdrop-blur-sm px-4 py-4 border border-white/10">
                <div className="text-2xl font-semibold">{item.value}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-violet-100 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 grid gap-3 lg:grid-cols-4">
        {[
          { value: '4', label: 'Skill domains' },
          { value: '22', label: 'Leadership scope' },
          { value: '450+', label: 'Problems solved' },
          { value: '6', label: 'Competition wins' },
        ].map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-white/70 bg-white/75 backdrop-blur-xl p-4 shadow-[0_18px_40px_rgba(120,76,151,0.08)]">
            <div className="text-2xl font-semibold text-violet-700">{item.value}</div>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Section */}
          <div className="space-y-4">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-[0_18px_40px_rgba(120,76,151,0.08)] border border-white/70 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,76,151,0.14)] transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm border border-slate-100 hover:bg-violet-50 hover:text-violet-700 hover:border-violet-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-xl lg:text-2xl mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-violet-600" />
              <span>Achievements</span>
            </h2>
            <div className="grid gap-4">
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group grid gap-4 md:grid-cols-[0.38fr_0.62fr] bg-white/80 backdrop-blur-xl rounded-[2rem] p-5 shadow-[0_16px_35px_rgba(120,76,151,0.08)] border border-white/70 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(120,76,151,0.14)] transition-all"
                >
                  <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(250,250,252,1),rgba(244,238,255,0.95))] p-4 border border-white/70">
                    <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}>
                      {achievement.icon}
                    </div>
                      <div className="flex-1">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">{achievement.context}</div>
                        <h3 className="text-sm mb-1 tracking-tight">{achievement.title}</h3>
                        <p className="text-xs text-slate-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-50/80 p-4 border border-slate-100 flex flex-col justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-violet-700 font-semibold">Outcome</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{achievement.outcome}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Stats */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,#5b21b6,#be185d)] rounded-[2rem] p-6 lg:p-8 text-white sticky top-24 shadow-[0_24px_60px_rgba(88,28,135,0.20)]"
          >
            <h3 className="text-lg lg:text-xl mb-6">Quick Stats</h3>
            <div className="space-y-4">
              <div className="bg-white/18 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl lg:text-4xl mb-2">450+</div>
                <div className="text-sm text-purple-100">Problems Solved</div>
                <div className="text-xs text-purple-200 mt-1">Skillrack Global Ranking</div>
              </div>
              <div className="bg-white/18 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl lg:text-4xl mb-2">6</div>
                <div className="text-sm text-purple-100">Competitions Won</div>
                <div className="text-xs text-purple-200 mt-1">National & College Level</div>
              </div>
              <div className="bg-white/18 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl lg:text-4xl mb-2">7+</div>
                <div className="text-sm text-purple-100">Certifications</div>
                <div className="text-xs text-purple-200 mt-1">Industry Recognized</div>
              </div>
              <div className="bg-white/18 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl lg:text-4xl mb-2">22</div>
                <div className="text-sm text-purple-100">Team Members Led</div>
                <div className="text-xs text-purple-200 mt-1">Cross-functional Teams</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {(filteredCategories.length === 0 && filteredAchievements.length === 0) && searchQuery && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No skills or achievements found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}