import { motion } from 'motion/react';
import { Code, Cpu, Wrench, Trophy, Users } from 'lucide-react';
import { PageHeader, PageShell, RevealSection } from './PageFrame';
import { GlassCard } from './ui/portfolio-elements';

export function SkillsPage() {
  const skillMatrix = [
    {
      id: 1,
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      accent: 'from-violet-500/18 to-fuchsia-500/8',
      border: 'border-violet-100',
      note: 'Core coding lanes and problem-solving tools.',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 88 },
        { name: 'C', level: 82 },
        { name: 'SQL', level: 84 },
      ],
    },
    {
      id: 2,
      title: 'Frameworks',
      icon: <Cpu className="w-6 h-6" />,
      accent: 'from-sky-500/16 to-teal-500/8',
      border: 'border-teal-100',
      note: 'Product interfaces and shipping layers.',
      skills: [
        { name: 'React', level: 92 },
        { name: 'Node.js', level: 87 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 82 },
      ],
    },
    {
      id: 3,
      title: 'Hardware',
      icon: <Wrench className="w-6 h-6" />,
      accent: 'from-amber-500/16 to-orange-500/8',
      border: 'border-amber-100',
      note: 'Physical systems, prototyping, and embedded work.',
      skills: [
        { name: 'IoT', level: 93 },
        { name: 'Embedded C', level: 88 },
        { name: 'Arduino / ESP32', level: 90 },
        { name: 'CAD / PCB design', level: 84 },
      ],
    },
    {
      id: 4,
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      accent: 'from-emerald-500/16 to-cyan-500/8',
      border: 'border-emerald-100',
      note: 'How the work gets aligned and shipped.',
      skills: [
        { name: 'Leadership', level: 96 },
        { name: 'Communication', level: 89 },
        { name: 'Product thinking', level: 91 },
        { name: 'Agile delivery', level: 85 },
      ],
    },
  ];

  const proofPoints = [
    {
      id: 1,
      title: 'Envision\'23 - 1st Place',
      description: 'Built an IoT-based gesture-controlled wheelchair; won ₹10,000',
      context: 'Assistive mobility',
      outcome: 'Prototype validated with competition win',
      icon: '🥇',
      color: 'bg-violet-50 text-violet-700 border-violet-100',
    },
    {
      id: 3,
      title: 'ECircle B-Pitch - 1st Place',
      description: 'Best pitch for real-time parking management solution',
      context: 'Urban parking',
      outcome: 'Pitch won on market clarity + execution',
      icon: '🎯',
      color: 'bg-slate-50 text-slate-700 border-slate-100',
    },
    {
      id: 2,
      title: 'INDIA@2047 - 2nd Place',
      description: 'Built IoT-based glaucoma eye pressure measuring device',
      context: 'Healthcare IoT',
      outcome: 'Prototype translated technical depth into impact',
      icon: '🥈',
      color: 'bg-teal-50 text-teal-700 border-teal-100',
    },
  ];

  return (
    <PageShell>
      <PageHeader
        eyebrow="Capability Snapshot"
        title="Skills & Achievements"
        intro="A matrix of technical depth, hardware fluency, and collaborative delivery that maps directly to shipped outcomes."
        stats={[
          { value: '4', label: 'Skill lanes' },
          { value: '22', label: 'Members led' },
          { value: '6', label: 'Podiums' },
        ]}
      />

      <RevealSection>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            'Frame the problem before choosing the solution',
            'Align stakeholders around measurable outcomes',
            'Ship usable systems, not just impressive demos',
            'Keep the work editable, visual, and collaborative',
          ].map((item) => (
            <GlassCard key={item} elevation="sm" padding="sm" className="bg-white/70 text-sm leading-relaxed text-slate-600">
              {item}
            </GlassCard>
          ))}
        </div>
      </RevealSection>

      <RevealSection>
        <div className="grid gap-6 lg:grid-cols-2">
          {skillMatrix.map((category, index) => (
            <GlassCard
              key={category.id}
              delay={index * 0.05}
              elevation="md"
              padding="none"
              className={`overflow-hidden ${category.border} bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(247,240,231,0.86))] backdrop-blur-xl`}
            >
              <div className={`border-b border-white/70 bg-gradient-to-br ${category.accent} p-6 lg:p-7`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-violet-700 shadow-sm">
                    {category.icon}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Skill lane</p>
                    <h3 className="mt-1 text-xl lg:text-2xl tracking-tight text-slate-900">{category.title}</h3>
                  </div>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">{category.note}</p>
              </div>

              <div className="space-y-4 p-6 lg:p-7">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </RevealSection>

      <RevealSection>
        <GlassCard elevation="md" padding="lg" className="bg-[linear-gradient(135deg,rgba(255,251,247,0.96),rgba(237,249,248,0.84))] text-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-violet-600" />
            <h2 className="text-xl lg:text-2xl tracking-tight">Selected proof points</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {proofPoints.map((proof) => (
              <GlassCard key={proof.id} elevation="sm" padding="md" className="bg-white/85">
                <div className="flex items-start gap-3">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-2xl border ${proof.color}`}>{proof.icon}</div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{proof.context}</p>
                    <h3 className="mt-1 text-sm tracking-tight text-slate-900">{proof.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{proof.description}</p>
                <div className="mt-4 rounded-2xl border border-sand-100 bg-sand-50/70 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-violet-700 font-semibold">Outcome</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{proof.outcome}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </GlassCard>
      </RevealSection>
    </PageShell>
  );
}