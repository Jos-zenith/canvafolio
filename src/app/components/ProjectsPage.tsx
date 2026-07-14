import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Electric 4-Wheeler Prototype',
      category: 'Engineering',
      description: 'Designed and developed an electric 4-wheeler prototype with a 22-member team',
      problem: 'Need for an integrated EV prototype',
      outcome: 'Led cross-functional execution to podium finish',
      image: 'https://i.postimg.cc/P55smBJh/Whats-App-Image-2025-08-09-at-16-56-26-477fa066.jpg',
      tags: ['Team Leadership', 'Engineering', 'EV Design'],
      color: 'purple',
      achievement: '🏆 3rd Place EFWDC\'25',
      link: 'https://drive.google.com/drive/folders/1SVLk6qsWlZ-nsQEsMhuZbYVaBtXikEPL?usp=sharing',
    },
    {
      id: 2,
      title: 'EngineerFit',
      category: 'Web development',
      description: 'Turning psychometrics into career clarity for South Indian engineers',
      problem: 'Career ambiguity for engineers',
      outcome: 'Shipped a decision-support product concept',
      image: 'https://i.postimg.cc/rsHWf6Tb/mechanical-gears-integration-human-brain-silhouette-innovation-creativity-concept-1332469-219.jpg',
      tags: ['Full Stack', 'Health Tech', 'UX Design'],
      color: 'green',
      achievement: '💡 Recognized as top 10 best innovative ideas in AI buildathon',
      link: 'https://ebv-engineerfit-seven.vercel.app/',
    },
    {
      id: 3,
      title: 'Storm-Resilient Mars Rover',
      category: 'PCB design',
      description: 'Designed a storm-resilient Mars rover with advanced navigation systems',
      problem: 'Robust navigation under hostile conditions',
      outcome: 'Demonstrated systems thinking under pressure',
      image: 'https://i.postimg.cc/9F4NCCDC/Screenshot-2026-01-10-102544.png',
      tags: ['PCB design', 'Embedded Systems', 'CAD design'],
      color: 'cyan',
      achievement: '🏆 Hardware Hackathon 2.0',
      link: 'https://github.com/Jos-zenith/sand-strom-resistant-rover',
    },
    {
      id: 4,
      title: 'Karuvelam',
      category: 'Web development',
      description: 'Turning invasive weeds into world-class bio-preservatives',
      problem: 'Convert waste biomass into value',
      outcome: 'Positioned sustainability as a commercial opportunity',
      image: 'https://i.postimg.cc/hP9T95wZ/glass-beaker-with-green-leaf-inside-971713-5040.avif',
      tags: ['fullstack', 'Green Innovation', 'AgriTech'],
      color: 'blue',
      achievement: '💡 Ramnad Hackathon (STARTUPTN)',
      link: 'https://karuvelam.vercel.app/',
    },
    {
      id: 5,
      title: 'Parkintoday',
      category: 'IoT',
      description: 'Best pitch for real-time parking management solution',
      problem: 'Urban parking discovery friction',
      outcome: 'Validated a city-scale mobility pitch',
      image: 'https://i.postimg.cc/rmN2Gc1X/Screenshot-2026-01-10-102110.png',
      tags: ['IoT', 'Web Dev', 'infra Design'],
      color: 'pink',
      achievement: '🥇 1st Place ECircle B-Pitch',
      link: 'https://drive.google.com/drive/folders/1VZtImJUuUCpftdFahDbpq6ZtNqSo3CA7?usp=sharing',
    },
    {
      id: 6,
      title: 'Jalodhyam',
      category: 'web development',
      description: 'Turning village water data into community power for Kerala villages',
      problem: 'Local water data is fragmented',
      outcome: 'Framed data into a community utility',
      image: 'https://i.postimg.cc/Y2Jqp2dF/A-digital-illustrati.png',
      tags: ['Fullstack', 'React', 'Node.js'],
      color: 'green',
      achievement: '💡 Smart India hackathon',
      link: 'https://e-jalodayam.vercel.app/',
    },
    {
      id: 7,
      title: 'E-Mart Inventory Management System',
      category: 'web development',
      description: 'A sleek, full-stack shopping experience online',
      problem: 'Inventory operations need a cleaner workflow',
      outcome: 'Built a usable internal commerce system',
      image: 'https://i.postimg.cc/QtFh3v1d/computer.png',
      tags: ['Full Stack', 'Inventory Management', 'Web App'],
      color: 'blue',
      achievement: '💡 Mini-Project',
      link: 'https://github.com/Jos-zenith/E-Mart',
    },
    {
      id: 8,
      title: 'IoT Gesture Wheelchair',
      category: 'IoT',
      description: 'Built IoT-based gesture-controlled wheelchair for differently-abled individuals',
      problem: 'Hands-free mobility control',
      outcome: 'Won first place for assistive hardware impact',
      image: 'https://i.postimg.cc/d04Vv8f7/Screenshot-2026-01-10-110642.png',
      tags: ['Arduino', 'IoT', 'Embedded C', 'CAD design'],
      color: 'orange',
      achievement: '🥇 1st Place Envision\'23 - ₹10,000',
      link: 'https://www.canva.com/design/DAGP55P-uCM/cLoRZzEMPXmkLZiIfxTLug/edit?utm_content=DAGP55P-uCM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      id: 9,
      title: 'Raid-hailing Driver-Passenger Interaction Device',
      category: 'IoT',
      description: 'Developed a driver passenger interaction device for ride-hailing services',
      problem: 'Improve in-cab interaction',
      outcome: 'Explored a more seamless mobility experience',
      image: 'https://i.postimg.cc/8zYZY3pP/Screenshot-2026-01-10-105536.png',
      tags: ['IoT', 'Embedded Systems', 'Arduino'],
      color: 'purple',
      achievement: '🏅 4th Place ImpactX 2.0',
    },
    
    
    {
      id: 10,
      title: 'Glaucoma Pressure Monitor',
      category: 'Healthcare IoT',
      description: 'IoT-based glaucoma eye pressure measuring device',
      problem: 'Early-stage healthcare diagnostics',
      outcome: 'Applied IoT to a clinical-use case',
      image: 'https://i.postimg.cc/3JRCHBb1/Screenshot-2026-01-10-105932.png',
      tags: ['IoT', 'Healthcare', 'Prototype'],
      color: 'cyan',
      achievement: '🥈 2nd Place INDIA@2047',
    },
  ];

  const colorClasses = {
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-cyan-500',
    orange: 'from-orange-500 to-red-500',
    pink: 'from-pink-500 to-rose-500',
    cyan: 'from-cyan-500 to-blue-500',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm mb-4 backdrop-blur-xl">
            Selected Work
          </div>
          <h1 className="text-2xl lg:text-4xl mb-2 tracking-tight">Projects</h1>
          <p className="text-sm lg:text-base text-slate-600 max-w-2xl">
            A curated set of product experiments, hardware systems, and startup bets designed to show execution, not just output.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: '10', label: 'Built' },
            { value: '6', label: 'Won' },
            { value: '22', label: 'Led' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/70 bg-white/75 backdrop-blur-xl p-4 text-center shadow-[0_18px_40px_rgba(120,76,151,0.08)]">
              <div className="text-2xl font-semibold text-violet-700">{item.value}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(120,76,151,0.10)] transition-all cursor-pointer hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,76,151,0.16)]"
          >
            {/* Project Image */}
            <div className="relative h-48 lg:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} opacity-25`} />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm">
                  {project.category}
                </span>
              </div>
              {project.achievement && (
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex max-w-full rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                    {project.achievement}
                  </div>
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-5 lg:p-6 space-y-4">
              <div className="flex items-start justify-between mb-2 gap-3">
                <h3 className="text-base lg:text-lg flex-1 group-hover:text-violet-700 transition-colors tracking-tight">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-violet-50 flex items-center justify-center text-violet-700 hover:bg-violet-100 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50/80 border border-slate-100 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">Problem</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{project.problem}</p>
                </div>
                <div className="rounded-2xl bg-violet-50/70 border border-violet-100 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-violet-700 mb-1">Outcome</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-slate-100/80 text-slate-600 px-3 py-1 rounded-full text-xs hover:bg-violet-100 hover:text-violet-700 transition-colors border border-transparent hover:border-violet-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
