import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  X,
  Download,
  Share2,
  Undo,
  Redo,
  Type,
  Image as ImageIcon,
  Square,
  Sparkles,
  Save,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Palette,
  ChevronDown,
  GripVertical,
  Layers3,
  FileText,
  Briefcase,
  GraduationCap,
  FolderKanban,
  BadgeInfo,
  Stars,
} from 'lucide-react';

interface TemplateEditorProps {
  template: {
    id: number;
    title: string;
    category: string;
    icon: ReactNode;
    color: string;
    image: string;
    description: string;
  } | null;
  onClose: () => void;
}

type ThemeId = 'minimal' | 'modern' | 'gradient' | 'classic';
type ToolId = 'text' | 'shapes' | 'images' | 'skills' | 'sections';
type Align = 'left' | 'center' | 'right';
type BlockType = 'text' | 'section' | 'skill' | 'image' | 'shape';
type SectionKey = 'Experience' | 'Skills' | 'Projects' | 'Education';

interface BlockStyle {
  fontSize: number;
  color: string;
  align: Align;
  spacing: number;
  opacity: number;
  radius: 'sm' | 'md' | 'lg' | 'xl' | 'pill';
  background: string;
  borderColor: string;
  fontFamily?: string;
}

interface EditorBlock {
  id: string;
  type: BlockType;
  title: string;
  content: string;
  bullets?: string[];
  sectionKey?: SectionKey;
  style: BlockStyle;
}

interface ThemePreset {
  id: ThemeId;
  label: string;
  canvasBackground: string;
  bodyFont: string;
  headingFont: string;
  accent: string;
  accentSoft: string;
}

const STORAGE_PREFIX = 'template-editor';
const ITEM_TYPE = 'EDITOR_BLOCK';
const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;

const THEMES: ThemePreset[] = [
  {
    id: 'minimal',
    label: 'Minimal',
    canvasBackground: 'linear-gradient(180deg, rgba(255,252,247,1) 0%, rgba(244,237,228,1) 100%)',
    bodyFont: '"Plus Jakarta Sans", sans-serif',
    headingFont: '"Fraunces", serif',
    accent: '#6d28d9',
    accentSoft: 'rgba(109,40,217,0.10)',
  },
  {
    id: 'modern',
    label: 'Modern',
    canvasBackground: 'linear-gradient(180deg, rgba(245,252,252,1) 0%, rgba(233,242,245,1) 100%)',
    bodyFont: '"Plus Jakarta Sans", sans-serif',
    headingFont: '"Plus Jakarta Sans", sans-serif',
    accent: '#0f766e',
    accentSoft: 'rgba(15,118,110,0.10)',
  },
  {
    id: 'gradient',
    label: 'Gradient',
    canvasBackground: 'linear-gradient(135deg, rgba(255,250,243,1) 0%, rgba(247,232,255,1) 45%, rgba(255,236,230,1) 100%)',
    bodyFont: '"Plus Jakarta Sans", sans-serif',
    headingFont: '"Fraunces", serif',
    accent: '#d946ef',
    accentSoft: 'rgba(217,70,239,0.10)',
  },
  {
    id: 'classic',
    label: 'Classic',
    canvasBackground: 'linear-gradient(180deg, rgba(255,250,243,1) 0%, rgba(241,228,207,1) 100%)',
    bodyFont: '"Georgia", serif',
    headingFont: '"Fraunces", serif',
    accent: '#7c2d12',
    accentSoft: 'rgba(124,45,18,0.10)',
  },
];

const TOOL_ITEMS: Array<{ id: ToolId; label: string; icon: ReactNode; description: string }> = [
  { id: 'text', label: 'Text', icon: <Type className="h-5 w-5" />, description: 'Insert heading or paragraph copy' },
  { id: 'shapes', label: 'Shapes', icon: <Square className="h-5 w-5" />, description: 'Add panels and visual blocks' },
  { id: 'images', label: 'Images', icon: <ImageIcon className="h-5 w-5" />, description: 'Insert a photo or mockup frame' },
  { id: 'skills', label: 'Skills', icon: <Sparkles className="h-5 w-5" />, description: 'Add editable skill chips' },
  { id: 'sections', label: 'Sections', icon: <Layers3 className="h-5 w-5" />, description: 'Add resume sections' },
];

const SECTION_BLOCKS: Array<{ key: SectionKey; icon: ReactNode; label: string }> = [
  { key: 'Experience', icon: <Briefcase className="h-4 w-4" />, label: 'Experience' },
  { key: 'Skills', icon: <Sparkles className="h-4 w-4" />, label: 'Skills' },
  { key: 'Projects', icon: <FolderKanban className="h-4 w-4" />, label: 'Projects' },
  { key: 'Education', icon: <GraduationCap className="h-4 w-4" />, label: 'Education' },
];

function createBlockStyle(theme: ThemePreset, overrides: Partial<BlockStyle> = {}): BlockStyle {
  return {
    fontSize: 18,
    color: '#1f1726',
    align: 'left',
    spacing: 1.45,
    opacity: 1,
    radius: 'xl',
    background: 'rgba(255,255,255,0.84)',
    borderColor: 'rgba(255,255,255,0.75)',
    fontFamily: theme.bodyFont,
    ...overrides,
  };
}

function createDefaultBlocks(theme: ThemePreset): EditorBlock[] {
  return [
    {
      id: 'intro',
      type: 'text',
      title: 'Zenith Joshua',
      content: 'Product Leader & Technical Founder\nTurning ambiguous problems into shipped systems, aligned teams, and measurable outcomes.',
      style: createBlockStyle(theme, { fontSize: 20, background: 'rgba(255,255,255,0.92)' }),
    },
    {
      id: 'experience',
      type: 'section',
      sectionKey: 'Experience',
      title: 'Experience',
      content: 'Team leadership, startup execution, and systems shipping across EV, IoT, and product work.',
      bullets: [
        'Led a 22-member multidisciplinary team through the electric 4-wheeler product lifecycle.',
        'Built product roadmaps, procurement flow, and milestone execution across hardware and software.',
        'Drove outcomes that resulted in podium finishes and real deployment-ready demos.',
      ],
      style: createBlockStyle(theme, { background: 'rgba(255,251,247,0.88)', borderColor: 'rgba(217,70,239,0.16)', fontSize: 18 }),
    },
    {
      id: 'skills',
      type: 'section',
      sectionKey: 'Skills',
      title: 'Skills',
      content: 'Python, Java, React, IoT, Embedded Systems, Product Strategy, Leadership',
      bullets: ['Python', 'Java', 'React', 'IoT', 'Leadership', 'Embedded Systems'],
      style: createBlockStyle(theme, { background: 'rgba(239,249,248,0.9)', borderColor: 'rgba(15,118,110,0.16)', fontSize: 18 }),
    },
    {
      id: 'projects',
      type: 'section',
      sectionKey: 'Projects',
      title: 'Projects',
      content: 'EngineerFit, Karuvelam, Jalodhyam, and ParkinToday highlight the product and execution range.',
      bullets: [
        'EngineerFit: a deployed decision-support product for engineers.',
        'Karuvelam: a sustainability concept shipped as a live web app.',
        'Jalodhyam: a civic utility product for community water data.',
      ],
      style: createBlockStyle(theme, { background: 'rgba(255,245,249,0.9)', borderColor: 'rgba(219,39,119,0.16)', fontSize: 18 }),
    },
    {
      id: 'education',
      type: 'section',
      sectionKey: 'Education',
      title: 'Education',
      content: 'Bachelor of Information Technology, Loyola ICAM College of Engineering and Technology.',
      bullets: ['CGPA: 7.0 (Current)', '2023 - 2027', 'Chennai, Tamil Nadu, India'],
      style: createBlockStyle(theme, { background: 'rgba(255,255,255,0.88)', borderColor: 'rgba(148,163,184,0.18)', fontSize: 18 }),
    },
  ];
}

function createNewBlock(tool: ToolId, theme: ThemePreset, sectionKey?: SectionKey): EditorBlock {
  const id = `${tool}-${Date.now()}`;
  const baseStyle = createBlockStyle(theme, { fontSize: tool === 'text' ? 18 : 16 });

  if (tool === 'text') {
    return {
      id,
      type: 'text',
      title: 'New text block',
      content: 'Click to edit this copy directly on the canvas.',
      style: baseStyle,
    };
  }

  if (tool === 'shapes') {
    return {
      id,
      type: 'shape',
      title: 'Accent shape',
      content: 'Floating panel',
      style: createBlockStyle(theme, {
        fontSize: 14,
        background: 'linear-gradient(135deg, rgba(109,40,217,0.16), rgba(217,70,239,0.12))',
        borderColor: 'rgba(255,255,255,0.8)',
        radius: '2xl' as BlockStyle['radius'],
        opacity: 1,
      }),
    };
  }

  if (tool === 'images') {
    return {
      id,
      type: 'image',
      title: 'Image frame',
      content: 'Drop in a visual or keep this as a mockup placeholder.',
      style: createBlockStyle(theme, { background: 'rgba(15,23,42,0.04)', borderColor: 'rgba(148,163,184,0.2)', fontSize: 15 }),
    };
  }

  if (tool === 'skills') {
    return {
      id,
      type: 'skill',
      title: 'Skill chips',
      content: 'Strategy, Product, Systems, Execution',
      style: createBlockStyle(theme, { background: 'rgba(255,255,255,0.84)', borderColor: 'rgba(15,118,110,0.16)', fontSize: 15 }),
    };
  }

  return {
    id,
    type: 'section',
    sectionKey: sectionKey ?? 'Experience',
    title: sectionKey ?? 'Experience',
    content: 'Add section content and reorder blocks with drag and drop.',
    bullets: ['Edit this section inline.', 'Drag the grip to reorder it.'],
    style: createBlockStyle(theme, { background: 'rgba(255,255,255,0.88)', borderColor: 'rgba(109,40,217,0.14)', fontSize: 18 }),
  };
}

function moveItem<T>(items: T[], from: number, to: number): T[] {
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim();
}

function DraggableBlock({
  block,
  index,
  selected,
  onSelect,
  onMove,
  onUpdate,
  theme,
}: {
  block: EditorBlock;
  index: number;
  selected: boolean;
  onSelect: (id: string) => void;
  onMove: (from: number, to: number) => void;
  onUpdate: (id: string, patch: Partial<EditorBlock>) => void;
  theme: ThemePreset;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id: block.id, index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }), [block.id, index]);
  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    hover: (item: { id: string; index: number }) => {
      if (!ref.current || item.index === index) return;
      onMove(item.index, index);
      item.index = index;
    },
  }), [index, onMove]);

  drag(drop(ref));

  const commonTextStyle: CSSProperties = {
    fontSize: `${block.style.fontSize}px`,
    color: block.style.color,
    textAlign: block.style.align,
    lineHeight: block.style.spacing,
    fontFamily: block.style.fontFamily ?? theme.bodyFont,
  };

  return (
    <div
      ref={ref}
      onClick={() => onSelect(block.id)}
      className={`group relative rounded-[1.5rem] border p-4 transition-all ${selected ? 'ring-2 ring-violet-300 shadow-[0_20px_40px_rgba(109,40,217,0.12)]' : 'hover:shadow-[0_14px_28px_rgba(24,13,43,0.08)]'} ${isDragging ? 'opacity-40' : 'opacity-100'}`}
      style={{
        background: block.style.background,
        borderColor: selected ? theme.accent : block.style.borderColor,
        borderRadius: block.style.radius === 'pill' ? 9999 : block.style.radius === '2xl' ? 24 : block.style.radius === 'xl' ? 20 : block.style.radius === 'lg' ? 16 : block.style.radius === 'md' ? 12 : 8,
      }}
    >
      <div className="mb-3 flex items-center justify-between gap-3 text-slate-500">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-sand-100 shadow-sm">
            <GripVertical className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em]">{block.type}</p>
            <p className="text-xs text-slate-500">Drag to reorder</p>
          </div>
        </div>
        {block.sectionKey && (
          <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700 border border-white/70 shadow-sm">
            {block.sectionKey}
          </span>
        )}
      </div>

      {block.type === 'text' && (
        <>
          <div
            contentEditable
            suppressContentEditableWarning
            onFocus={() => onSelect(block.id)}
            onBlur={(event) => onUpdate(block.id, { title: stripHtml(event.currentTarget.innerHTML) })}
            className="outline-none"
            style={{
              ...commonTextStyle,
              fontSize: `${Math.max(block.style.fontSize + 8, 22)}px`,
              fontFamily: block.style.fontFamily ?? theme.headingFont,
              fontWeight: 700,
              marginBottom: '0.35rem',
            }}
          >
            {block.title}
          </div>
          <div
            contentEditable
            suppressContentEditableWarning
            onFocus={() => onSelect(block.id)}
            onBlur={(event) => onUpdate(block.id, { content: stripHtml(event.currentTarget.innerHTML) })}
            className="outline-none"
            style={commonTextStyle}
          >
            {block.content}
          </div>
        </>
      )}

      {block.type === 'section' && (
        <>
          <div className="mb-3 flex items-start justify-between gap-3">
            <div
              contentEditable
              suppressContentEditableWarning
              onFocus={() => onSelect(block.id)}
              onBlur={(event) => onUpdate(block.id, { title: stripHtml(event.currentTarget.innerHTML) })}
              className="outline-none"
              style={{
                fontFamily: block.style.fontFamily ?? theme.headingFont,
                fontSize: `${Math.max(block.style.fontSize + 4, 20)}px`,
                fontWeight: 700,
                color: block.style.color,
                lineHeight: 1.2,
              }}
            >
              {block.title}
            </div>
            <span className="mt-2 h-2.5 w-2.5 rounded-full" style={{ background: theme.accent }} />
          </div>

          <div
            contentEditable
            suppressContentEditableWarning
            onFocus={() => onSelect(block.id)}
            onBlur={(event) => onUpdate(block.id, { content: stripHtml(event.currentTarget.innerHTML) })}
            className="mb-4 outline-none"
            style={commonTextStyle}
          >
            {block.content}
          </div>

          {block.bullets && (
            <div className="space-y-2">
              {block.bullets.map((bullet, bulletIndex) => (
                <div key={`${block.id}-bullet-${bulletIndex}`} className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 px-3 py-2.5 shadow-sm">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ background: theme.accent }} />
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    onFocus={() => onSelect(block.id)}
                    onBlur={(event) => {
                      const nextBullets = [...(block.bullets ?? [])];
                      nextBullets[bulletIndex] = stripHtml(event.currentTarget.innerHTML);
                      onUpdate(block.id, { bullets: nextBullets });
                    }}
                    className="min-w-0 flex-1 outline-none"
                    style={{
                      ...commonTextStyle,
                      fontSize: '14px',
                    }}
                  >
                    {bullet}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {block.type === 'skill' && (
        <div className="flex flex-wrap gap-2">
          {block.content.split(',').map((skill, skillIndex) => (
            <span
              key={`${block.id}-skill-${skillIndex}`}
              contentEditable
              suppressContentEditableWarning
              onFocus={() => onSelect(block.id)}
              onBlur={(event) => {
                const nextSkills = block.content.split(',').map((item) => item.trim());
                nextSkills[skillIndex] = stripHtml(event.currentTarget.innerHTML);
                onUpdate(block.id, { content: nextSkills.join(', ') });
              }}
              className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-sm text-violet-700 outline-none"
              style={{ fontFamily: block.style.fontFamily ?? theme.bodyFont }}
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      )}

      {block.type === 'image' && (
        <div className="space-y-3">
          <div className="flex h-40 items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-[linear-gradient(135deg,rgba(255,251,247,1),rgba(237,249,248,0.9))] text-slate-400 shadow-inner">
            <div className="text-center">
              <ImageIcon className="mx-auto mb-2 h-8 w-8 text-violet-500" />
              <div className="text-sm font-semibold">Image placeholder</div>
            </div>
          </div>
          <div
            contentEditable
            suppressContentEditableWarning
            onFocus={() => onSelect(block.id)}
            onBlur={(event) => onUpdate(block.id, { content: stripHtml(event.currentTarget.innerHTML) })}
            className="rounded-2xl border border-sand-100 bg-white/80 px-3 py-2 text-sm text-slate-600 outline-none"
            style={commonTextStyle}
          >
            {block.content}
          </div>
        </div>
      )}

      {block.type === 'shape' && (
        <div
          className="flex h-24 items-center justify-center rounded-[1.5rem] border shadow-inner"
          style={{
            background: block.style.background,
            borderColor: block.style.borderColor,
          }}
        >
          <div className="text-center text-slate-600">
            <Square className="mx-auto mb-2 h-8 w-8 text-violet-500" />
            <div className="text-sm font-semibold">{block.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function TemplateEditor({ template, onClose }: TemplateEditorProps) {
  const defaultTheme = THEMES[0];
  const [themeId, setThemeId] = useState<ThemeId>('minimal');
  const [blocks, setBlocks] = useState<EditorBlock[]>(() => createDefaultBlocks(defaultTheme));
  const [selectedBlockId, setSelectedBlockId] = useState<string>('intro');
  const [activeTool, setActiveTool] = useState<ToolId>('text');
  const [zoom, setZoom] = useState(1);
  const [hydrated, setHydrated] = useState(false);
  const canvasViewportRef = useRef<HTMLDivElement | null>(null);

  const currentTheme = useMemo(() => THEMES.find((item) => item.id === themeId) ?? defaultTheme, [themeId]);
  const storageKey = useMemo(() => `${STORAGE_PREFIX}:${template?.id ?? 'resume'}`, [template?.id]);
  const selectedBlock = useMemo(() => blocks.find((block) => block.id === selectedBlockId) ?? null, [blocks, selectedBlockId]);

  useEffect(() => {
    if (!template) return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<{ themeId: ThemeId; blocks: EditorBlock[]; selectedBlockId: string; zoom: number }>;
        if (parsed.themeId) setThemeId(parsed.themeId);
        if (parsed.blocks?.length) setBlocks(parsed.blocks);
        if (parsed.selectedBlockId) setSelectedBlockId(parsed.selectedBlockId);
        if (typeof parsed.zoom === 'number') setZoom(parsed.zoom);
      } else {
        const nextBlocks = createDefaultBlocks(defaultTheme);
        setBlocks(nextBlocks);
        setSelectedBlockId(nextBlocks[0].id);
      }
    } catch {
      const nextBlocks = createDefaultBlocks(defaultTheme);
      setBlocks(nextBlocks);
      setSelectedBlockId(nextBlocks[0].id);
    }
    setHydrated(true);
  }, [storageKey, template]);

  useEffect(() => {
    if (!hydrated || !template) return;
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        themeId,
        blocks,
        selectedBlockId,
        zoom,
      }),
    );
  }, [blocks, hydrated, selectedBlockId, storageKey, template, themeId, zoom]);

  useEffect(() => {
    if (blocks.length > 0 && !blocks.some((block) => block.id === selectedBlockId)) {
      setSelectedBlockId(blocks[0].id);
    }
  }, [blocks, selectedBlockId]);

  if (!template) return null;

  const updateBlock = (id: string, patch: Partial<EditorBlock>) => {
    setBlocks((current) => current.map((block) => (block.id === id ? { ...block, ...patch } : block)));
  };

  const moveBlock = (from: number, to: number) => {
    setBlocks((current) => moveItem(current, from, to));
  };

  const addBlock = (tool: ToolId, sectionKey?: SectionKey) => {
    const nextBlock = createNewBlock(tool, currentTheme, sectionKey);
    setBlocks((current) => {
      const selectedIndex = current.findIndex((block) => block.id === selectedBlockId);
      if (selectedIndex < 0) return [...current, nextBlock];
      const next = [...current];
      next.splice(selectedIndex + 1, 0, nextBlock);
      return next;
    });
    setSelectedBlockId(nextBlock.id);
  };

  const handleDownload = () => {
    window.print();
  };

  const handleFitZoom = () => {
    const viewportWidth = canvasViewportRef.current?.clientWidth ?? 1200;
    const viewportHeight = canvasViewportRef.current?.clientHeight ?? 900;
    const nextZoom = clamp(Math.min((viewportWidth - 96) / PAGE_WIDTH, (viewportHeight - 96) / PAGE_HEIGHT), 0.58, 1);
    setZoom(Number(nextZoom.toFixed(2)));
  };

  const canvasStyle: CSSProperties = {
    background: currentTheme.canvasBackground,
    fontFamily: currentTheme.bodyFont,
    ['--editor-accent' as any]: currentTheme.accent,
    ['--editor-accent-soft' as any]: currentTheme.accentSoft,
    ['--editor-heading-font' as any]: currentTheme.headingFont,
    ['--editor-body-font' as any]: currentTheme.bodyFont,
  };

  const selectedStyle = selectedBlock?.style;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="template-editor-shell fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-md"
        onClick={onClose}
      >
        <DndProvider backend={HTML5Backend}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={(event) => event.stopPropagation()}
            className="template-editor-shell fixed inset-0 flex flex-col overflow-hidden surface-modal"
          >
            <div className="template-editor-topbar flex flex-shrink-0 items-center justify-between border-b border-sand-100 bg-white/92 px-4 py-3 lg:px-5">
              <div className="flex items-center gap-4">
                <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-violet-50 transition-all">
                  <X className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Canva-style editor</p>
                  <h2 className="text-sm font-semibold text-slate-900 lg:text-base">{template.title}</h2>
                </div>
              </div>

              <div className="hidden items-center gap-2 lg:flex">
                <div className="surface-subtle flex items-center gap-1 rounded-full p-1">
                  {THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setThemeId(theme.id)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${themeId === theme.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      {theme.label}
                    </button>
                  ))}
                </div>

                <button className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-violet-50 transition-all lg:flex">
                  <Undo className="h-4 w-4" />
                </button>
                <button className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-violet-50 transition-all lg:flex">
                  <Redo className="h-4 w-4" />
                </button>
                <button className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-violet-50 transition-all lg:flex">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 px-4 py-2 text-sm text-white shadow-lg shadow-fuchsia-500/20 transition-all hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4" />
                  <span>Print / PDF</span>
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 overflow-hidden">
              <aside className="template-editor-rail hidden w-24 flex-shrink-0 flex-col border-r border-sand-100 bg-white/70 py-4 lg:flex">
                {TOOL_ITEMS.map((tool) => (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => setActiveTool(tool.id)}
                    className={`mx-2 mb-2 rounded-2xl border px-2 py-3 text-left transition-all ${
                      activeTool === tool.id
                        ? 'border-violet-200 bg-violet-50 text-violet-700 shadow-sm'
                        : 'border-transparent text-slate-600 hover:border-violet-100 hover:bg-white'
                    }`}
                  >
                    <div className="mb-1 flex justify-center">{tool.icon}</div>
                    <div className="text-center text-[11px] font-semibold uppercase tracking-[0.16em]">{tool.label}</div>
                  </button>
                ))}

                <div className="mt-3 px-2">
                  <div className="rounded-2xl border border-sand-100 bg-white/80 p-2 shadow-sm">
                    <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Insert</p>
                    {activeTool === 'sections' ? (
                      <div className="space-y-1">
                        {SECTION_BLOCKS.map((section) => (
                          <button
                            key={section.key}
                            type="button"
                            onClick={() => addBlock('sections', section.key)}
                            className="flex w-full items-center gap-2 rounded-xl px-2 py-2 text-left text-[11px] font-medium text-slate-700 hover:bg-violet-50"
                          >
                            <span className="text-violet-700">{section.icon}</span>
                            <span>{section.label}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addBlock(activeTool)}
                        className="flex w-full items-center gap-2 rounded-xl bg-violet-50 px-2 py-2 text-left text-[11px] font-semibold text-violet-700 hover:bg-violet-100"
                      >
                        <Sparkles className="h-4 w-4" />
                        Add {TOOL_ITEMS.find((tool) => tool.id === activeTool)?.label}
                      </button>
                    )}
                  </div>
                </div>
              </aside>

              <div className="template-editor-stage relative flex min-w-0 flex-1 overflow-hidden bg-sand-50/50">
                <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-sand-100 bg-[linear-gradient(180deg,rgba(255,251,247,0.95),rgba(243,232,219,0.92))]">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={`left-ruler-${index}`} className="relative h-[93px] border-b border-dashed border-sand-100/80">
                      <span className="absolute left-1 top-1 text-[10px] text-slate-400">{index * 100}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute left-12 right-0 top-0 h-8 border-b border-sand-100 bg-[linear-gradient(90deg,rgba(255,251,247,0.95),rgba(243,232,219,0.92))]">
                  <div className="flex h-full">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <div key={`top-ruler-${index}`} className="relative flex-1 border-r border-dashed border-sand-100/80">
                        <span className="absolute left-1 top-1 text-[10px] text-slate-400">{index * 50}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div ref={canvasViewportRef} className="relative min-h-0 flex-1 overflow-auto p-4 pt-10 lg:p-8 lg:pt-12">
                  <div className="mx-auto flex justify-center">
                    <div
                      className="relative origin-top"
                      style={{
                        width: `${PAGE_WIDTH * zoom}px`,
                        height: `${PAGE_HEIGHT * zoom}px`,
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.08 }}
                        className="relative overflow-hidden rounded-[28px] border border-white/80 shadow-[0_35px_90px_rgba(24,13,43,0.18)]"
                        style={{
                          width: `${PAGE_WIDTH}px`,
                          height: `${PAGE_HEIGHT}px`,
                          transform: `scale(${zoom})`,
                          transformOrigin: 'top center',
                          background: currentTheme.canvasBackground,
                          fontFamily: currentTheme.bodyFont,
                          ['--editor-accent' as any]: currentTheme.accent,
                          ['--editor-accent-soft' as any]: currentTheme.accentSoft,
                          ['--editor-heading-font' as any]: currentTheme.headingFont,
                          ['--editor-body-font' as any]: currentTheme.bodyFont,
                        }}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(148,163,184,0.08)_0,rgba(148,163,184,0.08)_1px,transparent_1px,transparent_24px),repeating-linear-gradient(90deg,rgba(148,163,184,0.08)_0,rgba(148,163,184,0.08)_1px,transparent_1px,transparent_24px)]" />
                        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(109,40,217,0.10),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(217,70,239,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.10),transparent_20%)]" />

                        <div className="relative z-10 h-full overflow-auto p-8">
                          <div className="mx-auto flex min-h-full max-w-[680px] flex-col gap-5">
                            {blocks.map((block, index) => (
                              <DraggableBlock
                                key={block.id}
                                block={block}
                                index={index}
                                selected={selectedBlockId === block.id}
                                onSelect={setSelectedBlockId}
                                onMove={moveBlock}
                                onUpdate={updateBlock}
                                theme={currentTheme}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="template-editor-zoom absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 p-2 shadow-lg backdrop-blur-sm">
                    <button type="button" onClick={() => setZoom((value) => Number(clamp(value - 0.1, 0.55, 1.4).toFixed(2)))} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-violet-50">
                      -
                    </button>
                    <button type="button" onClick={handleFitZoom} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-violet-50">
                      Fit
                    </button>
                    <button type="button" onClick={() => setZoom((value) => Number(clamp(value + 0.1, 0.55, 1.4).toFixed(2)))} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-violet-50">
                      +
                    </button>
                    <span className="min-w-[64px] text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{Math.round(zoom * 100)}%</span>
                  </div>
                </div>
              </div>

              <aside className="template-editor-properties hidden w-80 flex-shrink-0 overflow-y-auto border-l border-sand-100 bg-white/92 lg:block">
                <div className="space-y-6 p-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Properties</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">{selectedBlock ? selectedBlock.title : 'Canvas settings'}</h3>
                  </div>

                  {selectedBlock ? (
                    <>
                      <div className="rounded-2xl border border-sand-100 bg-sand-50/70 p-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Selected element</div>
                        <div className="text-sm font-semibold text-slate-800">{selectedBlock.type}</div>
                        <div className="text-sm text-slate-600">{selectedBlock.sectionKey ?? selectedBlock.content}</div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Font family</label>
                        <select
                          value={selectedBlock.style.fontFamily ?? currentTheme.bodyFont}
                          onChange={(event) => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, fontFamily: event.target.value } })}
                          className="w-full rounded-xl border border-sand-100 bg-white px-3 py-2 text-sm outline-none"
                        >
                          <option value='"Plus Jakarta Sans", sans-serif'>Plus Jakarta Sans</option>
                          <option value='"Fraunces", serif'>Fraunces</option>
                          <option value='"Georgia", serif'>Georgia</option>
                          <option value='"Times New Roman", serif'>Times New Roman</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Font size</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min="12"
                            max="44"
                            value={selectedBlock.style.fontSize}
                            onChange={(event) => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, fontSize: Number(event.target.value) } })}
                            className="flex-1 accent-violet-600"
                          />
                          <span className="w-12 text-right text-sm font-semibold text-slate-700">{selectedBlock.style.fontSize}px</span>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Alignment</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { align: 'left' as Align, icon: <AlignLeft className="h-4 w-4 mx-auto" /> },
                            { align: 'center' as Align, icon: <AlignCenter className="h-4 w-4 mx-auto" /> },
                            { align: 'right' as Align, icon: <AlignRight className="h-4 w-4 mx-auto" /> },
                          ].map((option) => (
                            <button
                              key={option.align}
                              type="button"
                              onClick={() => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, align: option.align } })}
                              className={`rounded-xl border px-3 py-2 transition-all ${selectedBlock.style.align === option.align ? 'border-violet-300 bg-violet-50 text-violet-700' : 'border-sand-100 bg-white text-slate-700 hover:bg-sand-50'}`}
                            >
                              {option.icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Text color</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={selectedBlock.style.color}
                            onChange={(event) => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, color: event.target.value } })}
                            className="h-10 w-12 rounded-lg border border-sand-100"
                          />
                          <input
                            type="text"
                            value={selectedBlock.style.color}
                            onChange={(event) => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, color: event.target.value } })}
                            className="flex-1 rounded-lg border border-sand-100 px-3 py-2 text-sm outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Spacing</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min="1"
                            max="2"
                            step="0.05"
                            value={selectedBlock.style.spacing}
                            onChange={(event) => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, spacing: Number(event.target.value) } })}
                            className="flex-1 accent-violet-600"
                          />
                          <span className="w-12 text-right text-sm font-semibold text-slate-700">{selectedBlock.style.spacing.toFixed(2)}</span>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Radius</label>
                        <div className="grid grid-cols-5 gap-2">
                          {(['sm', 'md', 'lg', 'xl', 'pill'] as const).map((radius) => (
                            <button
                              key={radius}
                              type="button"
                              onClick={() => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, radius } })}
                              className={`rounded-xl border px-2 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all ${selectedBlock.style.radius === radius ? 'border-violet-300 bg-violet-50 text-violet-700' : 'border-sand-100 bg-white text-slate-600 hover:bg-sand-50'}`}
                            >
                              {radius}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Background</label>
                        <input
                          type="text"
                          value={selectedBlock.style.background}
                          onChange={(event) => updateBlock(selectedBlock.id, { style: { ...selectedBlock.style, background: event.target.value } })}
                          className="w-full rounded-xl border border-sand-100 px-3 py-2 text-sm outline-none"
                        />
                      </div>

                      {selectedBlock.type === 'skill' && (
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Skill chips</label>
                          <div className="rounded-2xl border border-sand-100 bg-sand-50/70 p-3 text-sm text-slate-600">Edit chip labels inline on the canvas. Add more skills via the content field.</div>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="rounded-2xl border border-sand-100 bg-sand-50/70 p-4 text-sm text-slate-600">Adjust canvas-wide settings, zoom, and theme from the top bar. Select an element to edit typography and spacing.</div>
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Theme</label>
                        <div className="grid gap-2">
                          {THEMES.map((theme) => (
                            <button
                              key={theme.id}
                              type="button"
                              onClick={() => setThemeId(theme.id)}
                              className={`rounded-xl border px-3 py-2 text-left transition-all ${themeId === theme.id ? 'border-violet-300 bg-violet-50 text-violet-700' : 'border-sand-100 bg-white text-slate-700 hover:bg-sand-50'}`}
                            >
                              <div className="text-sm font-semibold">{theme.label}</div>
                              <div className="text-xs text-slate-500">{theme.bodyFont.replace(/\"/g, '')} + {theme.headingFont.replace(/\"/g, '')}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 px-4 py-3 text-white transition-all hover:shadow-lg">
                    <Save className="h-4 w-4" />
                    <span>Saved locally</span>
                  </button>
                </div>
              </aside>
            </div>

            <div className="lg:hidden border-t border-sand-100 bg-white/95 p-3">
              <div className="flex gap-2 overflow-x-auto">
                {TOOL_ITEMS.map((tool) => (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => setActiveTool(tool.id)}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ${activeTool === tool.id ? 'bg-violet-50 text-violet-700 border border-violet-100' : 'text-slate-600 hover:bg-sand-50'}`}
                  >
                    {tool.icon}
                    <span>{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </DndProvider>
      </motion.div>
    </AnimatePresence>
  );
}
