import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm mb-4 backdrop-blur-xl">
            Product + Execution
          </div>
          <h1 className="text-2xl lg:text-4xl mb-2 tracking-tight">Experience & Education</h1>
          <p className="text-sm lg:text-base text-slate-600 max-w-2xl">A track record of leading teams, shipping systems, and turning engineering work into visible outcomes.</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/70 bg-white/75 backdrop-blur-xl p-5 shadow-[0_18px_40px_rgba(120,76,151,0.08)]">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { value: '22', label: 'Led' },
              { value: '6', label: 'Wins' },
              { value: '2', label: 'Startups' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50/80 p-3">
                <div className="text-xl font-semibold text-violet-700">{item.value}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,#5b21b6,#be185d)] rounded-[2rem] p-6 lg:p-8 text-white shadow-[0_24px_60px_rgba(88,28,135,0.20)]"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl mb-2">{education.degree}</h3>
                <p className="text-purple-100">{education.institution}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-violet-100">CGPA: {education.cgpa}</span>
              <span className="text-purple-100">•</span>
              <span className="text-violet-100">{education.period}</span>
            </div>
          </motion.div>

          {/* Work Experience */}
          <div className="space-y-4 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-violet-300 before:to-transparent lg:before:left-7">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-[0_18px_40px_rgba(120,76,151,0.08)] border border-white/70 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,76,151,0.14)] transition-all ml-10 lg:ml-14"
              >
                <div className={`absolute -left-10 lg:-left-14 top-8 w-5 h-5 rounded-full border-4 border-white shadow-sm ${exp.color === 'purple' ? 'bg-violet-500' : exp.color === 'green' ? 'bg-emerald-500' : 'bg-sky-500'}`} />
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${
                    exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    exp.color === 'green' ? 'from-green-500 to-emerald-500' :
                    'from-blue-500 to-cyan-500'
                  } flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl mb-1 tracking-tight">{exp.title}</h3>
                    <p className="text-sm lg:text-base text-slate-600">{exp.organization}</p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 mb-4 text-violet-700">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-slate-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="grid gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                      <p className="text-sm text-slate-600 flex-1 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar - Certifications */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_18px_40px_rgba(120,76,151,0.08)] border border-white/70 sticky top-24"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-violet-600" />
              <h2 className="text-lg lg:text-xl">Certifications</h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-violet-50/80 transition-colors border border-transparent hover:border-violet-100">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-slate-700 flex-1">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
