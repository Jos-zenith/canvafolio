import { motion } from 'motion/react';
import { ExternalLink, Github, Layers3 } from 'lucide-react';
import { PageHeader, PageShell, RevealSection } from './PageFrame';
import { GlassCard, TagPill } from './ui/portfolio-elements';

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
      techStack: ['SolidWorks', 'Electrical Systems', 'Team Ops'],
      color: 'purple',
      achievement: '🏆 3rd Place EFWDC\'25',
      liveLink: 'https://drive.google.com/drive/folders/1SVLk6qsWlZ-nsQEsMhuZbYVaBtXikEPL?usp=sharing',
      githubLink: 'https://github.com/Jos-zenith',
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
      techStack: ['React', 'Node.js', 'Figma'],
      color: 'green',
      achievement: '💡 Recognized as top 10 best innovative ideas in AI buildathon',
      liveLink: 'https://ebv-engineerfit-seven.vercel.app/',
      githubLink: 'https://github.com/Jos-zenith',
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
      techStack: ['PCB Design', 'Arduino', 'CAD'],
      color: 'cyan',
      achievement: '🏆 Hardware Hackathon 2.0',
      liveLink: 'https://github.com/Jos-zenith/sand-strom-resistant-rover',
      githubLink: 'https://github.com/Jos-zenith/sand-strom-resistant-rover',
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
      techStack: ['Web App', 'Product Storytelling', 'BioTech'],
      color: 'blue',
      achievement: '💡 Ramnad Hackathon (STARTUPTN)',
      liveLink: 'https://karuvelam.vercel.app/',
      githubLink: 'https://github.com/Jos-zenith',
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
      techStack: ['IoT Sensors', 'Dashboards', 'Pitch Design'],
      color: 'pink',
      achievement: '🥇 1st Place ECircle B-Pitch',
      liveLink: 'https://drive.google.com/drive/folders/1VZtImJUuUCpftdFahDbpq6ZtNqSo3CA7?usp=sharing',
      githubLink: 'https://github.com/Jos-zenith',
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
      techStack: ['React', 'Node.js', 'Civic UX'],
      color: 'green',
      achievement: '💡 Smart India hackathon',
      liveLink: 'https://e-jalodayam.vercel.app/',
      githubLink: 'https://github.com/Jos-zenith',
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
      techStack: ['React', 'Database', 'Workflow Design'],
      color: 'blue',
      achievement: '💡 Mini-Project',
      liveLink: 'https://github.com/Jos-zenith/E-Mart',
      githubLink: 'https://github.com/Jos-zenith/E-Mart',
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
      techStack: ['Arduino', 'Embedded C', 'Assistive Design'],
      color: 'orange',
      achievement: '🥇 1st Place Envision\'23 - ₹10,000',
      liveLink: 'https://www.canva.com/design/DAGP55P-uCM/cLoRZzEMPXmkLZiIfxTLug/edit?utm_content=DAGP55P-uCM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      githubLink: 'https://github.com/Jos-zenith',
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
      techStack: ['IoT', 'Arduino', 'UX Hardware'],
      color: 'purple',
      achievement: '🏅 4th Place ImpactX 2.0',
      githubLink: 'https://github.com/Jos-zenith',
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
      techStack: ['Healthcare IoT', 'Sensors', 'Rapid Prototyping'],
      color: 'cyan',
      achievement: '🥈 2nd Place INDIA@2047',
      githubLink: 'https://github.com/Jos-zenith',
    },
  ];

  const colorClasses = {
    purple: 'from-violet-500/22 to-violet-500/4',
    green: 'from-teal-500/22 to-teal-500/4',
    blue: 'from-slate-500/22 to-slate-500/4',
    orange: 'from-amber-500/20 to-amber-500/4',
    pink: 'from-fuchsia-500/20 to-fuchsia-500/4',
    cyan: 'from-cyan-500/20 to-cyan-500/4',
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Selected Work"
        title="Projects"
        intro="A curated set of product experiments, hardware systems, and startup bets designed to show execution, not just output."
        stats={[
          { value: '10', label: 'Built' },
          { value: '6', label: 'Won' },
          { value: '22', label: 'Led' },
        ]}
      />

      <RevealSection revealMode="mount">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project, index) => (
          <GlassCard
            key={project.id}
            delay={index * 0.06}
            interactive
            revealMode="mount"
            padding="none"
            className="group relative overflow-hidden min-h-[28rem]"
          >
            <div className="flex items-center justify-between border-b border-sand-100/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                <Layers3 className="h-3.5 w-3.5 text-violet-600" />
                Artboard
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} opacity-25`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,18,0.04),rgba(10,12,18,0.56))]" />

              <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm backdrop-blur-md">
                {project.category}
              </div>

              <div className="absolute inset-x-4 bottom-4 translate-y-2 rounded-[1.5rem] border border-white/70 bg-white/88 p-4 opacity-0 shadow-[0_20px_45px_rgba(15,15,25,0.18)] backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Tech stack</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Built as a layered Canva board</p>
                  </div>
                  {project.achievement ? (
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold text-violet-700 border border-violet-100">
                      {project.achievement}
                    </span>
                  ) : null}
                </div>

                <div className="mb-3 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <TagPill key={item}>{item}</TagPill>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.liveLink && (
                    <TagPill href={project.liveLink} className="bg-slate-900 text-white border-slate-900 hover:bg-slate-800 hover:text-white hover:border-slate-800">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live link
                    </TagPill>
                  )}
                  {project.githubLink && (
                    <TagPill href={project.githubLink}>
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </TagPill>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4 p-5 lg:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base lg:text-xl tracking-tight text-slate-900 group-hover:text-violet-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mt-1">{project.description}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-sand-50/80 border border-sand-100 px-4 py-3">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">Problem</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.problem}</p>
                </div>
                <div className="rounded-[1.25rem] bg-violet-50/75 border border-violet-100 px-4 py-3">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-violet-700 mb-1">Outcome</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TagPill
                    key={tag}
                    className="group-hover:border-violet-100 group-hover:bg-violet-50/70 group-hover:text-violet-700"
                  >
                    {tag}
                  </TagPill>
                ))}
              </div>
            </div>
          </GlassCard>
          ))}
        </div>
      </RevealSection>
    </PageShell>
  );
}
