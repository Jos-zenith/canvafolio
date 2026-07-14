import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Share2, Undo, Redo, Type, Image as ImageIcon, Square, Circle, Sparkles, Save, ChevronDown, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Palette } from 'lucide-react';

interface TemplateEditorProps {
  template: {
    id: number;
    title: string;
    category: string;
    icon: React.ReactNode;
    color: string;
    image: string;
    description: string;
  } | null;
  onClose: () => void;
}

export function TemplateEditor({ template, onClose }: TemplateEditorProps) {
  const [name, setName] = useState('Zenith Joshua');
  const [title, setTitle] = useState('Product Leader & Technical Founder');
  const [email, setEmail] = useState('zenithjoshua.27ti@licet.ac.in');
  const [phone, setPhone] = useState('+91 7448343632');
  const [selectedElement, setSelectedElement] = useState<string | null>('name');
  const [fontSize, setFontSize] = useState(24);
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('left');
  const [textColor, setTextColor] = useState('#1f2937');

  if (!template) return null;

  const elements = [
    { id: 'name', label: 'Name', value: name, setValue: setName, type: 'text' },
    { id: 'title', label: 'Title', value: title, setValue: setTitle, type: 'text' },
    { id: 'email', label: 'Email', value: email, setValue: setEmail, type: 'text' },
    { id: 'phone', label: 'Phone', value: phone, setValue: setPhone, type: 'text' },
  ];

  const handleDownload = () => {
    console.log('Downloading template...');
    alert('Template downloaded! 📄');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="fixed inset-0 lg:inset-4 bg-white lg:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Top Toolbar - Canva Style */}
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div>
                <h2 className="text-sm font-medium">{template.title}</h2>
                <p className="text-xs text-gray-500">{template.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all text-sm">
                <Undo className="w-4 h-4" />
              </button>
              <button className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all text-sm">
                <Redo className="w-4 h-4" />
              </button>
              <div className="hidden lg:block w-px h-6 bg-gray-200" />
              <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all text-sm">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Left Sidebar - Tools */}
            <div className="hidden lg:flex flex-col w-20 bg-gray-50 border-r border-gray-200 py-4">
              <button className="flex flex-col items-center gap-2 py-3 px-2 text-purple-600 bg-purple-50 hover:bg-purple-100 transition-all">
                <Type className="w-5 h-5" />
                <span className="text-xs">Text</span>
              </button>
              <button className="flex flex-col items-center gap-2 py-3 px-2 text-gray-600 hover:bg-gray-100 transition-all">
                <ImageIcon className="w-5 h-5" />
                <span className="text-xs">Image</span>
              </button>
              <button className="flex flex-col items-center gap-2 py-3 px-2 text-gray-600 hover:bg-gray-100 transition-all">
                <Square className="w-5 h-5" />
                <span className="text-xs">Shape</span>
              </button>
              <button className="flex flex-col items-center gap-2 py-3 px-2 text-gray-600 hover:bg-gray-100 transition-all">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs">Magic</span>
              </button>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 bg-gray-100 p-4 lg:p-8 overflow-auto">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 aspect-[8.5/11] flex flex-col"
                  style={{ background: template.image }}
                >
                  {/* Editable Resume Content */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
                    {/* Profile Image */}
                    <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-4xl border-4 border-white shadow-lg">
                      👨‍💻
                    </div>

                    {/* Name */}
                    <div
                      onClick={() => setSelectedElement('name')}
                      className={`cursor-text transition-all ${
                        selectedElement === 'name' ? 'ring-2 ring-purple-500 ring-offset-2 rounded-lg px-3' : ''
                      }`}
                    >
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setSelectedElement('name')}
                        style={{
                          fontSize: selectedElement === 'name' ? `${fontSize}px` : '32px',
                          textAlign: textAlign,
                          color: selectedElement === 'name' ? textColor : '#ffffff',
                        }}
                        className="bg-transparent border-0 outline-none text-white font-bold text-center w-full"
                      />
                    </div>

                    {/* Title */}
                    <div
                      onClick={() => setSelectedElement('title')}
                      className={`cursor-text transition-all ${
                        selectedElement === 'title' ? 'ring-2 ring-purple-500 ring-offset-2 rounded-lg px-3' : ''
                      }`}
                    >
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onFocus={() => setSelectedElement('title')}
                        style={{
                          fontSize: selectedElement === 'title' ? `${fontSize}px` : '18px',
                          textAlign: textAlign,
                          color: selectedElement === 'title' ? textColor : 'rgba(255,255,255,0.9)',
                        }}
                        className="bg-transparent border-0 outline-none text-white/90 text-center w-full"
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 w-full max-w-md">
                      <div
                        onClick={() => setSelectedElement('email')}
                        className={`cursor-text transition-all ${
                          selectedElement === 'email' ? 'ring-2 ring-purple-500 ring-offset-2 rounded-lg px-3' : ''
                        }`}
                      >
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setSelectedElement('email')}
                          style={{
                            fontSize: selectedElement === 'email' ? `${fontSize}px` : '14px',
                            textAlign: textAlign,
                            color: selectedElement === 'email' ? textColor : 'rgba(255,255,255,0.8)',
                          }}
                          className="bg-transparent border-0 outline-none text-white/80 text-sm text-center w-full"
                        />
                      </div>
                      <div
                        onClick={() => setSelectedElement('phone')}
                        className={`cursor-text transition-all ${
                          selectedElement === 'phone' ? 'ring-2 ring-purple-500 ring-offset-2 rounded-lg px-3' : ''
                        }`}
                      >
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onFocus={() => setSelectedElement('phone')}
                          style={{
                            fontSize: selectedElement === 'phone' ? `${fontSize}px` : '14px',
                            textAlign: textAlign,
                            color: selectedElement === 'phone' ? textColor : 'rgba(255,255,255,0.8)',
                          }}
                          className="bg-transparent border-0 outline-none text-white/80 text-sm text-center w-full"
                        />
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['Python', 'Java', 'IoT', 'Next.js', 'Leadership'].map((skill) => (
                        <span key={skill} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Sidebar - Properties Panel */}
            {selectedElement && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                className="hidden lg:block w-80 bg-white border-l border-gray-200 overflow-y-auto"
              >
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Text Properties</h3>
                    
                    {/* Current Element */}
                    <div className="bg-purple-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-purple-600 mb-1">Editing</p>
                      <p className="text-sm font-medium capitalize">{selectedElement}</p>
                    </div>

                    {/* Font Size */}
                    <div className="mb-4">
                      <label className="text-xs text-gray-600 mb-2 block">Font Size</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="12"
                          max="72"
                          value={fontSize}
                          onChange={(e) => setFontSize(Number(e.target.value))}
                          className="flex-1"
                        />
                        <span className="text-sm font-medium w-12 text-right">{fontSize}px</span>
                      </div>
                    </div>

                    {/* Text Alignment */}
                    <div className="mb-4">
                      <label className="text-xs text-gray-600 mb-2 block">Alignment</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setTextAlign('left')}
                          className={`flex-1 p-2 rounded-lg border transition-all ${
                            textAlign === 'left' ? 'bg-purple-100 border-purple-500' : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <AlignLeft className="w-4 h-4 mx-auto" />
                        </button>
                        <button
                          onClick={() => setTextAlign('center')}
                          className={`flex-1 p-2 rounded-lg border transition-all ${
                            textAlign === 'center' ? 'bg-purple-100 border-purple-500' : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <AlignCenter className="w-4 h-4 mx-auto" />
                        </button>
                        <button
                          onClick={() => setTextAlign('right')}
                          className={`flex-1 p-2 rounded-lg border transition-all ${
                            textAlign === 'right' ? 'bg-purple-100 border-purple-500' : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <AlignRight className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </div>

                    {/* Text Style */}
                    <div className="mb-4">
                      <label className="text-xs text-gray-600 mb-2 block">Style</label>
                      <div className="flex gap-2">
                        <button className="flex-1 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
                          <Bold className="w-4 h-4 mx-auto" />
                        </button>
                        <button className="flex-1 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
                          <Italic className="w-4 h-4 mx-auto" />
                        </button>
                        <button className="flex-1 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
                          <Underline className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </div>

                    {/* Text Color */}
                    <div className="mb-4">
                      <label className="text-xs text-gray-600 mb-2 block">Text Color</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm"
                        />
                      </div>
                    </div>

                    {/* Quick Colors */}
                    <div className="mb-4">
                      <label className="text-xs text-gray-600 mb-2 block">Quick Colors</label>
                      <div className="grid grid-cols-6 gap-2">
                        {['#000000', '#ffffff', '#7c3aed', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'].map((color) => (
                          <button
                            key={color}
                            onClick={() => setTextColor(color)}
                            className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-purple-500 transition-all"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Mobile Bottom Toolbar */}
          <div className="lg:hidden bg-white border-t border-gray-200 p-3 flex gap-2 overflow-x-auto">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 text-purple-600 text-sm whitespace-nowrap">
              <Type className="w-4 h-4" />
              <span>Text</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 text-sm whitespace-nowrap">
              <Palette className="w-4 h-4" />
              <span>Color</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 text-sm whitespace-nowrap">
              <AlignCenter className="w-4 h-4" />
              <span>Align</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
