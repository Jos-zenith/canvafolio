import { useState } from 'react';
import { Home, Briefcase, User, Award, Mail, Plus, Bell, Menu } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ExperiencePage } from './components/ExperiencePage';
import { SkillsPage } from './components/SkillsPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'skills':
        return <SkillsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(244,114,182,0.12),transparent_24%),linear-gradient(180deg,#fbf7f2_0%,#f7f1ec_100%)] text-slate-900">
      <div className="pointer-events-none fixed inset-0 opacity-50">
        <div className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl" />
      </div>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-24 bg-white/70 backdrop-blur-2xl border-r border-white/60 z-50 shadow-[0_0_60px_rgba(120,76,151,0.08)]">
        <div className="flex flex-col items-center py-6 h-full">
          {/* Logo */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500 flex items-center justify-center mb-8 shadow-lg shadow-fuchsia-500/25">
            <span className="text-white text-xl">Z</span>
          </div>
          
          {/* Nav Items */}
          <div className="flex-1 flex flex-col gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                activeTab === 'home'
                  ? 'bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200/80 shadow-sm'
                  : 'text-slate-500 border-transparent hover:bg-white/90 hover:text-violet-600 hover:border-violet-100'
              }`}
              title="Home"
            >
              <Home className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('projects')}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200/80 shadow-sm'
                  : 'text-slate-500 border-transparent hover:bg-white/90 hover:text-violet-600 hover:border-violet-100'
              }`}
              title="Projects"
            >
              <Briefcase className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('experience')}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200/80 shadow-sm'
                  : 'text-slate-500 border-transparent hover:bg-white/90 hover:text-violet-600 hover:border-violet-100'
              }`}
              title="Experience"
            >
              <Award className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('skills')}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200/80 shadow-sm'
                  : 'text-slate-500 border-transparent hover:bg-white/90 hover:text-violet-600 hover:border-violet-100'
              }`}
              title="Skills"
            >
              <User className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setActiveTab('about')}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                activeTab === 'about'
                  ? 'bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200/80 shadow-sm'
                  : 'text-slate-500 border-transparent hover:bg-white/90 hover:text-violet-600 hover:border-violet-100'
              }`}
              title="Contact"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>

          {/* Profile */}
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 flex items-center justify-center text-white text-sm shadow-lg shadow-fuchsia-500/20">
            ZJ
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="relative z-10 lg:pl-24">
        {/* Header */}
        <div className="sticky top-0 z-40 border-b border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_8px_30px_rgba(112,76,145,0.06)]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600">
                <Menu className="w-5 h-5" />
              </button>

              {/* Desktop: Canva Logo Text */}
              <div className="hidden lg:block">
                <h1 className="text-xl tracking-wide">
                  <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">Zenith</span>
                  <span className="text-slate-700 ml-1">Portfolio</span>
                </h1>
              </div>
              
              {/* Spacer for centering */}
              <div className="flex-1"></div>

              {/* Right Actions */}
              <div className="flex items-center gap-2">
                <button className="hidden lg:flex w-10 h-10 items-center justify-center rounded-2xl hover:bg-white transition-all text-slate-600 border border-transparent hover:border-violet-100 hover:shadow-sm">
                  <Bell className="w-5 h-5" />
                </button>
                
                {/* Mobile Profile */}
                <div className="lg:hidden w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 flex items-center justify-center text-white text-xs shadow-md">
                  ZJ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="pb-28 lg:pb-8">
          {renderPage()}
        </main>
      </div>

      {/* Mobile Bottom Navigation (Canva-style) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 pb-safe">
        <div className="px-2 py-3">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'home'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-[10px] font-medium">Home</span>
            </button>
            
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'projects'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Briefcase className="w-6 h-6" />
              <span className="text-[10px] font-medium">Projects</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'experience'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Award className="w-6 h-6" />
              <span className="text-[10px] font-medium">Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'skills'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-[10px] font-medium">Skills</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[56px] ${
                activeTab === 'about'
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 active:bg-gray-100'
              }`}
            >
              <Mail className="w-6 h-6" />
              <span className="text-[10px] font-medium">Contact</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}