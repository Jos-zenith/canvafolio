import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { PageHeader, PageShell, RevealSection } from './PageFrame';
import { GlassCard } from './ui/portfolio-elements';

export function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Team Lead',
      organization: 'Electric Four Wheeler Design Club (SAEISS)',
      period: 'February - November 2025',
      description: 'Led a 22-member cross-functional engineering team (Mechanical, Electrical, Electronics, IT) to design and develop an electric 4-wheeler prototype',
      achievements: [
        'Spearheaded a multidisciplinary engineering squad of 22 members (Mechanical, Electrical, IT) through the full product development lifecycle of an electric vehicle.',
        'Orchestrated complex project roadmaps, procurement logistics and milestone tracking to ensure seamless integration of hardware and software',
        'Secured a National Podium Finish (3rd Place) at EFWDC\'25, outperforming dozens of top-tier engineering institutions across India',
      ],
      color: 'purple',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 2,
      type: 'work',
      title: 'Founder & Developer',
      organization: 'Panjaayathu - Wellness Startup',
      period: 'October 2025 - Present',
      description: 'Designing and developing a digital mental-health platform integrating with therapeutic CBT frameworks',
      achievements: [
        'Engineering the end-to-end technical stack, focusing on a user-centric interface and a secure, HIPAA-compliant architecture for sensitive data',
        'Managing the full product lifecycle, from initial wireframing and database design to user onboarding and feedback loop',
      ],
      color: 'green',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 3,
      type: 'work',
      title: 'ParkinToday - Co-Founder & CTO',
      organization: 'IoT-based Smart Parking Startup',
      period: 'September 2024 - current',
      description: 'Co-founded an IoT startup providing real-time parking management solutions for urban areas',
      achievements: [
        'Engineered the backend infrastructure to process live data streams, significantly reducing the time spent by users searching for parking',
        'Architecting a high-concurrency IoT ecosystem for real-time urban parking management, integrating sensor data with cloud-based analytics',
        'Awarded 1st Place at the ECircle B-Pitch Competition, recognized for technical innovation and a viable business model',
      ],
      color: 'blue',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 4,
      type: 'internship',
      title: 'AI & Machine Learning Intern',
      organization: 'Edunet Foundation (Under AICTE)',
      period: 'June 2025 - July 2025',
      description: 'Completed a structured internship in AI & Machine Learning under AICTE\'s Edunet program',
      achievements: [
        'Developed ML models including regression-based salary predictor',
        'Worked with Python, NumPy, Pandas, Scikit-learn',
        'Applied ML algorithms to real-world datasets',
      ],
      color: 'blue',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const education = {
    degree: 'Bachelor of Information Technology',
    institution: 'Loyola ICAM College of Engineering and Technology',
    cgpa: '7.0 (Current)',
    period: '2023 - 2027',
  };

  const certifications = [
    'Agile Business Analysis - Udemy',
    'Networks & Network security - Coursera',
    'Foundations of cybersecurity - Coursera',
    'Security risk management - Coursera',
    'C, Mysql, Java & Python Programming - Skillrack (Hands-on)',
    'AI Fundamentals - IBM skillsbuild',
    'Ports & Protocols - Springboard',
  ];

  return (
    <PageShell>
      <PageHeader
        eyebrow="Product + Execution"
        title="Experience & Education"
        intro="A track record of leading teams, shipping systems, and turning engineering work into visible outcomes."
        stats={[
          { value: '22', label: 'Led' },
          { value: '6', label: 'Wins' },
          { value: '2', label: 'Startups' },
        ]}
      />

      <RevealSection>
        <GlassCard elevation="lg" padding="lg" className="bg-[linear-gradient(135deg,rgba(51,20,99,0.98),rgba(118,29,72,0.96))] text-white">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/18 text-white backdrop-blur-sm">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl text-white">{education.degree}</h2>
                <p className="mt-1 text-purple-100">{education.institution}</p>
                <p className="mt-3 max-w-2xl text-sm lg:text-base leading-relaxed text-purple-50/95">
                  Structured learning with consistent delivery in product, hardware, and systems work.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:min-w-[280px]">
              {[
                { value: education.cgpa, label: 'CGPA' },
                { value: education.period, label: 'Timeline' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-white/18 bg-white/12 p-4 backdrop-blur-sm text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="text-lg font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-purple-50/85">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </RevealSection>

      <RevealSection>
        <div className="relative pl-8 lg:pl-0">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-300 via-violet-200 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
          <div className="space-y-6 lg:space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] lg:items-start"
                >
                  <div className={`${isLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-3'}`}>
                    <GlassCard interactive elevation="md" padding="lg" className="transition-transform">
                      <div className="mb-4 flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border shadow-sm ${
                            exp.color === 'purple'
                              ? 'bg-violet-50 text-violet-700 border-violet-100'
                              : exp.color === 'green'
                                ? 'bg-teal-50 text-teal-700 border-teal-100'
                                : 'bg-slate-50 text-slate-700 border-slate-100'
                          }`}
                        >
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{exp.type}</p>
                          <h3 className="mt-1 text-lg lg:text-xl tracking-tight text-slate-900">{exp.title}</h3>
                          <p className="text-sm lg:text-base text-slate-600">{exp.organization}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center gap-2 text-violet-700">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      <p className="mb-4 text-sm lg:text-base leading-relaxed text-slate-600">{exp.description}</p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <div key={achievement} className="rounded-2xl border border-sand-100 bg-sand-50/70 px-4 py-3">
                            <p className="text-sm leading-relaxed text-slate-600">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>

                  <div className="order-2 flex items-start justify-start lg:justify-center">
                    <div className="relative mt-8 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-violet-500 shadow-[0_10px_24px_rgba(109,40,217,0.22)]">
                      <div className="h-3 w-3 rounded-full bg-white" />
                      <div className="absolute inset-0 rounded-full border border-violet-200/70 animate-pulse" />
                    </div>
                  </div>

                  <div className={`${isLeft ? 'hidden lg:block lg:order-3' : 'hidden lg:block lg:order-1'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <GlassCard elevation="md" padding="lg">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-violet-600" />
            <h2 className="text-lg lg:text-xl">Certifications</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-3 rounded-2xl border border-sand-100 bg-sand-50/70 p-4 transition-colors hover:border-violet-100 hover:bg-violet-50/60">
                <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <p className="text-sm leading-relaxed text-slate-700">{cert}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </RevealSection>
    </PageShell>
  );
}
