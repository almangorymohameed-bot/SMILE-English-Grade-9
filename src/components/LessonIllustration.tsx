import React from "react";
import { motion } from "motion/react";
import { 
  Beaker, Atom, Brain, Ruler, Thermometer, Compass, Leaf, Flower, 
  Building, Wrench, Settings, Puzzle, Gamepad2, BookOpen, Shirt, FileText, 
  Sparkles, Languages, HelpCircle, Trophy, Globe, MapPin, Map, Plane, 
  Smile, Coins, HelpCircle as QuestionIcon, Landmark, ShoppingBag, 
  ShoppingCart, Tag, Megaphone, PiggyBank, Briefcase, Stethoscope, 
  GraduationCap, Play, Target, Apple, Flame, Activity, Palette, 
  Camera, Gift, Heart, UserCheck, Shield, Award, PenTool, Sprout, Smartphone, Scissors, Receipt
} from "lucide-react";

interface LessonIllustrationProps {
  unitId: number;
  lessonId: number;
  title: string;
}

export default function LessonIllustration({ unitId, lessonId, title }: LessonIllustrationProps) {
  // Common container classes: highly polished card with a gorgeous gradient background,
  // dark border to match the app's aesthetic, and responsive dimensions.
  const containerStyle = "relative w-full h-56 sm:h-72 rounded-[32px] overflow-hidden border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center justify-center p-4 bg-gradient-to-br";

  const renderIllustration = () => {
    const key = `${unitId}-${lessonId}`;

    switch (key) {
      // ==========================================
      // UNIT 1: People and Science
      // ==========================================
      case "1-1": // What is Science?
        return (
          <div className={`${containerStyle} from-sky-500 to-indigo-600 text-white`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
            <motion.div 
              animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex items-center gap-6 z-10"
            >
              <div className="relative">
                <Beaker className="w-24 h-24 stroke-[1.5]" />
                <motion.div 
                  animate={{ y: [-10, -30], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                  className="absolute top-2 left-6 text-xl"
                >🫧</motion.div>
                <motion.div 
                  animate={{ y: [-10, -35], opacity: [0, 1, 0], scale: [0.4, 1.1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
                  className="absolute top-2 right-6 text-lg"
                >🫧</motion.div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-black tracking-wider border border-white/30 uppercase">
                  <Atom className="w-3.5 h-3.5 animate-spin" /> Chemistry
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-black tracking-wider border border-white/30 uppercase text-center">
                  🧬 Biology
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-black tracking-wider border border-white/30 uppercase text-center">
                  🍎 Physics
                </div>
              </div>
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/45 backdrop-blur-xs py-1.5 px-3 rounded-xl border border-white/10 text-center">
              <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase">Zero Conditional • General Facts</span>
            </div>
          </div>
        );

      case "1-2": // Famous Scientists
        return (
          <div className={`${containerStyle} from-teal-500 to-emerald-600 text-white`}>
            <div className="grid grid-cols-2 gap-3 w-full max-w-md z-10 text-center">
              <div className="bg-white/15 p-2 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                <span className="text-2xl mb-1">📞</span>
                <span className="text-[10px] sm:text-xs font-black tracking-wider block leading-tight">A. G. BELL</span>
                <span className="text-[9px] text-teal-100 font-bold">Telephone</span>
              </div>
              <div className="bg-white/15 p-2 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                <span className="text-2xl mb-1">🧪</span>
                <span className="text-[10px] sm:text-xs font-black tracking-wider block leading-tight">L. PASTEUR</span>
                <span className="text-[9px] text-teal-100 font-bold">Vaccinations</span>
              </div>
              <div className="bg-white/15 p-2 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                <span className="text-2xl mb-1">⚛️</span>
                <span className="text-[10px] sm:text-xs font-black tracking-wider block leading-tight">MARIE CURIE</span>
                <span className="text-[9px] text-teal-100 font-bold">Nobel Prize</span>
              </div>
              <div className="bg-white/15 p-2 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                <span className="text-2xl mb-1">🍏</span>
                <span className="text-[10px] sm:text-xs font-black tracking-wider block leading-tight">I. NEWTON</span>
                <span className="text-[9px] text-teal-100 font-bold">Gravity</span>
              </div>
            </div>
          </div>
        );

      case "1-3": // Bones
        return (
          <div className={`${containerStyle} from-indigo-500 to-purple-600 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <motion.div 
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="bg-white/10 p-4 rounded-3xl border-2 border-white/20 shadow-md flex items-center justify-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-5xl filter drop-shadow">💀</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100 mt-2 bg-indigo-950/45 px-2 py-0.5 rounded-full">SKELETON</span>
                </div>
              </motion.div>
              <div className="flex flex-col gap-2.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span className="bg-amber-400 text-slate-900 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-black">1</span>
                  <span>Adults: 206 Bones</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-white">
                  <span className="bg-amber-400 text-slate-900 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-black">2</span>
                  <span>Skull protects Brain 🧠</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-white">
                  <span className="bg-amber-400 text-slate-900 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-black">3</span>
                  <span>70% Calcium (strong) 🥛</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "1-4": // How to Measure
        return (
          <div className={`${containerStyle} from-cyan-500 to-blue-600 text-white`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg z-10">
              <div className="bg-white/10 p-2.5 rounded-2xl border border-white/15 flex flex-col items-center justify-center text-center">
                <Thermometer className="w-10 h-10 stroke-[1.5] text-amber-300 mb-1" />
                <span className="text-[11px] font-black uppercase tracking-wider block leading-tight">Thermometer</span>
                <span className="text-[9px] text-cyan-100">Temperature</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-2xl border border-white/15 flex flex-col items-center justify-center text-center">
                <Ruler className="w-10 h-10 stroke-[1.5] text-amber-300 mb-1" />
                <span className="text-[11px] font-black uppercase tracking-wider block leading-tight">Tape Measure</span>
                <span className="text-[9px] text-cyan-100">Distance</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-2xl border border-white/15 flex flex-col items-center justify-center text-center">
                <span className="text-3xl mb-1">🏺</span>
                <span className="text-[11px] font-black uppercase tracking-wider block leading-tight">Measuring Jug</span>
                <span className="text-[9px] text-cyan-100">Liquids</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-2xl border border-white/15 flex flex-col items-center justify-center text-center">
                <span className="text-3xl mb-1">⏱️</span>
                <span className="text-[11px] font-black uppercase tracking-wider block leading-tight">Speedometer</span>
                <span className="text-[9px] text-cyan-100">Speed</span>
              </div>
            </div>
          </div>
        );

      case "1-5": // Traditional Medicine
        return (
          <div className={`${containerStyle} from-rose-500 to-orange-500 text-white`}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 z-10 w-full justify-center">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 w-48 justify-start">
                <span className="text-3xl">☕</span>
                <div>
                  <span className="text-xs font-black uppercase block">Hibiscus (الكركديه)</span>
                  <span className="text-[10px] text-rose-100 font-bold">Flowers • Stress relief</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 w-48 justify-start">
                <span className="text-3xl">🫘</span>
                <div>
                  <span className="text-xs font-black uppercase block">Fenugreek (الحلبة)</span>
                  <span className="text-[10px] text-rose-100 font-bold">Seeds • Stomach & Sleep</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 w-48 justify-start">
                <span className="text-3xl">🌿</span>
                <div>
                  <span className="text-xs font-black uppercase block">Rosemary (إكليل الجبل)</span>
                  <span className="text-[10px] text-rose-100 font-bold">Cooking • Skin & Memory</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "1-6": // Wonders of Engineering
        return (
          <div className={`${containerStyle} from-blue-600 to-sky-700 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-white/10 p-3 rounded-2xl border border-white/20 shadow-lg"
              >
                <Building className="w-16 h-16 stroke-[1.2] text-amber-300" />
              </motion.div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-amber-300">Engineering Roles</h4>
                <div className="text-xs font-bold flex flex-col gap-1 text-sky-100">
                  <span className="text-white">📐 Architect:</span> Draws floor plans & views
                  <span className="text-white">👷 Engineer:</span> Instructs, selects materials
                  <span className="text-white">⚙️ Worker:</span> Builds structures with machines
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 right-4 text-[10px] font-black tracking-widest text-sky-300 bg-sky-950/50 px-2 py-0.5 rounded">
              OMDURMAN MOSQUE BLUEPRINT
            </div>
          </div>
        );

      case "1-7": // Puzzles and Games
        return (
          <div className={`${containerStyle} from-amber-500 to-orange-600 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="text-6xl filter drop-shadow-md"
              >
                🧩
              </motion.div>
              <div className="flex flex-col gap-2 max-w-xs">
                <span className="text-xs font-black uppercase tracking-widest text-amber-200">Rubik's Cube Toy</span>
                <p className="text-xs sm:text-sm font-bold leading-relaxed text-white">
                  "If you look, you will find puzzles around you. If you work hard, you will solve them."
                </p>
                <span className="text-[10px] text-amber-100 font-black">— ERNO RUBIK, 1974</span>
              </div>
            </div>
          </div>
        );

      case "1-8": // Revision: Science
        return (
          <div className={`${containerStyle} from-violet-600 to-purple-800 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <div className="flex flex-col items-center">
                <span className="text-5xl animate-pulse">🧫</span>
                <span className="text-[10px] font-black mt-2 tracking-widest uppercase text-violet-200">MICROBIOLOGY</span>
              </div>
              <div className="flex flex-col gap-2 text-xs">
                <div className="bg-emerald-500/30 border border-emerald-400 px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <span className="text-lg">🟢</span>
                  <div>
                    <span className="font-black block leading-none">Good Bacteria</span>
                    <span className="text-[10px] text-emerald-200">Help digest food & grow</span>
                  </div>
                </div>
                <div className="bg-rose-500/30 border border-rose-400 px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <span className="text-lg">🔴</span>
                  <div>
                    <span className="font-black block leading-none">Bad Bacteria</span>
                    <span className="text-[10px] text-rose-200">Cause decay & illnesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==========================================
      // UNIT 2: Arts and Literature
      // ==========================================
      case "2-1": // A Traditional Story
        return (
          <div className={`${containerStyle} from-emerald-600 to-green-800 text-white`}>
            <div className="flex flex-col items-center justify-center text-center z-10 gap-3">
              <div className="flex gap-4 items-center justify-center">
                <span className="text-4xl">🦁</span>
                <span className="text-4xl">🐺</span>
                <span className="text-4xl">🦊</span>
              </div>
              <div className="bg-emerald-950/60 p-3 rounded-2xl border border-emerald-500 max-w-sm">
                <span className="text-[10px] font-black tracking-widest uppercase block text-emerald-300 mb-1">Traditional Storybook Characters</span>
                <p className="text-xs sm:text-sm font-bold text-white">The Royal Lion, Greedy Hyena & Wise Clever Fox in the African Savanna.</p>
              </div>
            </div>
          </div>
        );

      case "2-2": // National Dress
        return (
          <div className={`${containerStyle} from-amber-400 to-rose-500 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <div className="bg-white/15 p-3 rounded-2xl border border-white/20 flex flex-col items-center justify-center w-28">
                <span className="text-4xl mb-1">👳🏾‍♂️</span>
                <span className="text-[11px] font-black uppercase block tracking-wider text-center">Jallabiya</span>
                <span className="text-[9px] text-amber-100 font-bold">& Emama (Men)</span>
              </div>
              <div className="bg-white/15 p-3 rounded-2xl border border-white/20 flex flex-col items-center justify-center w-28">
                <span className="text-4xl mb-1">👩🏾‍🦱</span>
                <span className="text-[11px] font-black uppercase block tracking-wider text-center">Thobe</span>
                <span className="text-[9px] text-amber-100 font-bold">Colorful Wrap (Women)</span>
              </div>
            </div>
          </div>
        );

      case "2-3": // Famous Sudanese Writers
        return (
          <div className={`${containerStyle} from-indigo-600 to-pink-600 text-white`}>
            <div className="flex items-center gap-4 z-10">
              <BookOpen className="w-16 h-16 text-amber-300 animate-bounce" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest uppercase text-pink-200">Sudanese Writers</span>
                <h4 className="text-sm font-black leading-tight text-white">Leila Aboulela</h4>
                <p className="text-xs text-indigo-100 font-bold italic">Author of "The Translator" & award-winning stories of culture and home.</p>
              </div>
            </div>
          </div>
        );

      case "2-4": // Sand Art
        return (
          <div className={`${containerStyle} from-amber-500 to-yellow-600 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <div className="relative bg-white/20 p-4 rounded-3xl border border-white/30 shadow-inner flex items-center justify-center w-20 h-28">
                <div className="absolute inset-x-2 bottom-2 top-8 bg-amber-900/30 rounded-b-xl flex flex-col justify-end overflow-hidden">
                  <div className="h-6 bg-amber-800" />
                  <div className="h-6 bg-yellow-700" />
                  <div className="h-6 bg-amber-600" />
                </div>
                <span className="text-3xl z-10">🏺</span>
              </div>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest uppercase text-amber-100">Colored Sand Bottle Art</span>
                <h4 className="text-sm font-black text-white">Sand Art (فن الرسم بالرمل)</h4>
                <p className="text-xs text-amber-50 font-bold">Sudanese youngsters craft mesmerizing colored sand layers inside bottles depicting Sahara sunset scenes.</p>
              </div>
            </div>
          </div>
        );

      case "2-5": // Robinson Crusoe
        return (
          <div className={`${containerStyle} from-sky-400 to-blue-500 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <div className="text-5xl filter drop-shadow animate-bounce">🏝️</div>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest uppercase text-sky-100">Literary Classic Novel</span>
                <h4 className="text-sm font-black text-white">Robinson Crusoe</h4>
                <p className="text-xs text-blue-50 font-bold">The shipwreck adventurer on a desert island who built a fortress and found companionship with Friday.</p>
              </div>
            </div>
          </div>
        );

      case "2-6": // Calligraphy
        return (
          <div className={`${containerStyle} from-violet-700 to-indigo-800 text-white`}>
            <div className="flex flex-col items-center justify-center z-10 gap-3">
              <span className="text-4xl">✒️</span>
              <div className="bg-indigo-950/60 p-3 rounded-2xl border border-indigo-500 text-center max-w-sm">
                <span className="text-[10px] font-black tracking-widest uppercase block text-indigo-300 mb-1">Traditional Script Styles</span>
                <p className="text-xs sm:text-sm font-bold text-white">Arabic Calligraphy: Kufic (الخط الكوفي) & Ruq'ah (خط الرقعة) Penmanship.</p>
              </div>
            </div>
          </div>
        );

      case "2-7": // A Sudanese Artist
        return (
          <div className={`${containerStyle} from-rose-500 to-purple-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Palette className="w-16 h-16 text-amber-300" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest uppercase text-rose-100">Legendary Art Pioneer</span>
                <h4 className="text-sm font-black text-white">Ibrahim El-Salahi</h4>
                <p className="text-xs text-rose-50 font-bold">Starting with drawing calligraphy on wooden slates (Loh) in Sudanese Khalwas, he became an international master.</p>
              </div>
            </div>
          </div>
        );

      case "2-8": // Revision: Words and Pictures
        return (
          <div className={`${containerStyle} from-slate-700 to-slate-900 text-white`}>
            <div className="grid grid-cols-2 gap-3 w-full max-w-md z-10 text-center">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex flex-col items-center">
                <span className="text-2xl mb-1">✍️</span>
                <span className="text-[10px] font-black uppercase">Words (الكلمات)</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex flex-col items-center">
                <span className="text-2xl mb-1">🎨</span>
                <span className="text-[10px] font-black uppercase">Pictures (الرسوم)</span>
              </div>
            </div>
          </div>
        );

      // ==========================================
      // UNIT 3: Geography and Travel
      // ==========================================
      case "3-1": // Where is Sudan?
        return (
          <div className={`${containerStyle} from-emerald-500 to-teal-600 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <div className="text-5xl">🇸🇩</div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="text-[10px] font-black tracking-widest text-emerald-200 uppercase">Geographical Context</span>
                <span className="text-white font-bold block">• Boundaries: 7 Neighboring countries</span>
                <span className="text-white font-bold block">• Hydrology: White & Blue Nile confluence</span>
                <span className="text-white font-bold block">• Coastline: The beautiful Red Sea 🌊</span>
              </div>
            </div>
          </div>
        );

      case "3-2": // Countries Quiz
        return (
          <div className={`${containerStyle} from-indigo-500 to-sky-600 text-white`}>
            <div className="flex flex-col items-center justify-center z-10 text-center gap-3">
              <span className="text-4xl animate-bounce">🌍</span>
              <div className="bg-indigo-950/60 px-4 py-2 rounded-2xl border border-indigo-400">
                <span className="text-[10px] font-black tracking-widest text-sky-300 block uppercase">Geography Quiz Showdown</span>
                <p className="text-xs sm:text-sm font-bold text-white">Interactive Trivia: Superlatives, capitals, and countries around the globe.</p>
              </div>
            </div>
          </div>
        );

      case "3-3": // Two Interesting Places
        return (
          <div className={`${containerStyle} from-amber-600 to-orange-600 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <div className="text-5xl">📐</div>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-amber-200 uppercase">National Treasure Site</span>
                <h4 className="text-sm font-black text-white">Pyramids of Meroë (أهرامات البجراوية)</h4>
                <p className="text-xs text-amber-50 font-bold">More than 200 ancient Nubian pyramids towering beautifully over the golden desert sands of Sudan.</p>
              </div>
            </div>
          </div>
        );

      case "3-4": // Saudi Arabia
        return (
          <div className={`${containerStyle} from-green-600 to-emerald-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <div className="text-4xl">🕋</div>
              <div className="flex flex-col gap-1 max-w-xs text-xs">
                <span className="text-[10px] font-black tracking-widest text-green-200 uppercase">Kingdom of Saudi Arabia</span>
                <span className="text-white font-bold">• Capital city: Riyadh 🏙️</span>
                <span className="text-white font-bold">• Spiritual heart: Makkah & Madinah 🕌</span>
                <span className="text-white font-bold">• Nature: Camel caravans & desert dunes 🐪</span>
              </div>
            </div>
          </div>
        );

      case "3-5": // Marco Polo
        return (
          <div className={`${containerStyle} from-amber-700 to-yellow-800 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Compass className="w-16 h-16 text-amber-300 animate-spin" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-amber-200 uppercase">Historical Travelers</span>
                <h4 className="text-sm font-black text-white">Marco Polo</h4>
                <p className="text-xs text-amber-100 font-bold">The legendary Venice explorer who traveled the silk road for 24 years to meet Kublai Khan in China.</p>
              </div>
            </div>
          </div>
        );

      case "3-6": // A Trip of a Lifetime
        return (
          <div className={`${containerStyle} from-cyan-600 to-sky-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Plane className="w-16 h-16 text-amber-300" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-cyan-200 uppercase">Holiday Adventure Planning</span>
                <h4 className="text-sm font-black text-white">Trip of a Lifetime</h4>
                <p className="text-xs text-cyan-50 font-bold">Dreaming, budgeting, packing suitcases, booking transport, and setting off on a breathtaking flight path.</p>
              </div>
            </div>
          </div>
        );

      case "3-7": // Friendly People
        return (
          <div className={`${containerStyle} from-orange-400 to-rose-500 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">☕</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-orange-100 uppercase">Sudanese Hospitality</span>
                <h4 className="text-sm font-black text-white">Genuine Generosity (الكرم السوداني)</h4>
                <p className="text-xs text-orange-50 font-bold">Welcoming travelers with fresh tea, traditional coffee (Jabana), sweet dates, and unmatched smiles.</p>
              </div>
            </div>
          </div>
        );

      case "3-8": // Revision: An Arab Adventure
        return (
          <div className={`${containerStyle} from-indigo-700 to-purple-800 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-4xl">🐪</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-indigo-200 uppercase">Ibn Battuta's Odyssey</span>
                <h4 className="text-sm font-black text-white">Arab Adventure</h4>
                <p className="text-xs text-indigo-100 font-bold">The world-famous scholar who traveled over 117,000 kilometers over 29 years on pilgrimages and voyages.</p>
              </div>
            </div>
          </div>
        );

      // ==========================================
      // UNIT 4: Work and Hobbies
      // ==========================================
      case "4-1": // Jobs, Jobs, Jobs
        return (
          <div className={`${containerStyle} from-sky-500 to-blue-600 text-white`}>
            <div className="grid grid-cols-3 gap-3 w-full max-w-md z-10 text-center">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex flex-col items-center">
                <Stethoscope className="w-8 h-8 text-amber-300 mb-1" />
                <span className="text-[10px] font-black uppercase leading-none">Doctor</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex flex-col items-center">
                <GraduationCap className="w-8 h-8 text-amber-300 mb-1" />
                <span className="text-[10px] font-black uppercase leading-none">Teacher</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex flex-col items-center">
                <Wrench className="w-8 h-8 text-amber-300 mb-1" />
                <span className="text-[10px] font-black uppercase leading-none">Engineer</span>
              </div>
            </div>
          </div>
        );

      case "4-2": // Teachers
        return (
          <div className={`${containerStyle} from-teal-500 to-emerald-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">👩🏾‍🏫</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-teal-100 uppercase">Noble Profession</span>
                <h4 className="text-sm font-black text-white">The Teacher (المعلم)</h4>
                <p className="text-xs text-teal-50 font-bold">Educating the next generation of doctors and citizens in friendly classroom spaces with dedication.</p>
              </div>
            </div>
          </div>
        );

      case "4-3": // Children and Work
        return (
          <div className={`${containerStyle} from-amber-400 to-orange-500 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">🌳</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-amber-100 uppercase">Childhood and Tasks</span>
                <h4 className="text-sm font-black text-white">Daily Balance</h4>
                <p className="text-xs text-amber-950 font-black">Studying at school, doing homework under trees, and helping parents around the warm home.</p>
              </div>
            </div>
          </div>
        );

      case "4-4": // Learning for a Job
        return (
          <div className={`${containerStyle} from-purple-500 to-indigo-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Wrench className="w-12 h-12 text-amber-300" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-purple-200 uppercase">Vocational Training</span>
                <h4 className="text-sm font-black text-white">Learning Practical Skills</h4>
                <p className="text-xs text-purple-100 font-bold">Acquiring hands-on training to repair motor vehicles, operate complex lathes, or manage networks.</p>
              </div>
            </div>
          </div>
        );

      case "4-5": // My Hobby and My Job
        return (
          <div className={`${containerStyle} from-pink-500 to-rose-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">🏺</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-pink-100 uppercase">Creative Expressions</span>
                <h4 className="text-sm font-black text-white">Hobby to Profession</h4>
                <p className="text-xs text-pink-50 font-bold">Turning creative talents like sculpting beautiful clay pottery vases or playing guitar into rewarding jobs.</p>
              </div>
            </div>
          </div>
        );

      case "4-6": // Who Gets Paid the Most?
        return (
          <div className={`${containerStyle} from-emerald-600 to-green-700 text-white`}>
            <div className="flex items-center gap-6 z-10">
              <Coins className="w-16 h-16 text-yellow-300 animate-pulse" />
              <div className="flex flex-col gap-1 max-w-xs text-xs">
                <span className="text-[10px] font-black tracking-widest text-emerald-200 uppercase">Salary and Compensation</span>
                <span className="text-white font-bold">• Educational impact on salaries</span>
                <span className="text-white font-bold">• Hard tasks earn higher wages</span>
                <span className="text-white font-bold">• Saving portion for future emergencies</span>
              </div>
            </div>
          </div>
        );

      case "4-7": // Work in the Future
        return (
          <div className={`${containerStyle} from-cyan-500 to-indigo-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl animate-spin">🤖</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-cyan-200 uppercase">Technological Horizon</span>
                <h4 className="text-sm font-black text-white">Future of Work</h4>
                <p className="text-xs text-cyan-50 font-bold">Collaborating with automated artificial intelligence bots, neural processors, and aerospace systems.</p>
              </div>
            </div>
          </div>
        );

      case "4-8": // Revision: Hard Work
        return (
          <div className={`${containerStyle} from-slate-600 to-slate-800 text-white`}>
            <div className="flex flex-col items-center justify-center z-10 text-center gap-3">
              <span className="text-4xl">📚</span>
              <div className="bg-slate-900/60 px-4 py-2 rounded-2xl border border-slate-600">
                <span className="text-[10px] font-black tracking-widest text-slate-300 block uppercase">Continuous Diligence</span>
                <p className="text-xs sm:text-sm font-bold text-white">Reviewing school chapters, staying organized, and building strong study schedules for excellence.</p>
              </div>
            </div>
          </div>
        );

      // ==========================================
      // UNIT 5: Food and Health
      // ==========================================
      case "5-1": // Chocolate
        return (
          <div className={`${containerStyle} from-amber-800 to-amber-950 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">🍫</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase">Delightful Sweets</span>
                <h4 className="text-sm font-black text-white">Cacao to Chocolate</h4>
                <p className="text-xs text-amber-100 font-bold">How golden cacao beans are harvested, processed, ground, and sweetened into delicious chocolate blocks.</p>
              </div>
            </div>
          </div>
        );

      case "5-2": // Growing Food
        return (
          <div className={`${containerStyle} from-green-500 to-emerald-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Sprout className="w-16 h-16 text-yellow-300 animate-bounce" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-green-100 uppercase">Self-Sufficiency</span>
                <h4 className="text-sm font-black text-white">Growing Food at Home</h4>
                <p className="text-xs text-green-50 font-bold">Sowing fresh seeds in organic soil, watering them, and harvesting nutritious fruits and vegetables.</p>
              </div>
            </div>
          </div>
        );

      case "5-3": // Sudanese Crops
        return (
          <div className={`${containerStyle} from-yellow-500 to-amber-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">🌾</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-yellow-100 uppercase">Agricultural Wealth</span>
                <h4 className="text-sm font-black text-white">Sorghum & Crops (الذرة والسمسم)</h4>
                <p className="text-xs text-yellow-950 font-black">Growing traditional Sudanese staple sorghum grains, golden sesame seeds, and harvesting sweet dates.</p>
              </div>
            </div>
          </div>
        );

      case "5-4": // A Healthy Diet
        return (
          <div className={`${containerStyle} from-rose-500 to-red-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Apple className="w-16 h-16 text-amber-300" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-rose-100 uppercase">Nutrition Guidelines</span>
                <h4 className="text-sm font-black text-white">Balanced Meals (الغذاء الصحي)</h4>
                <p className="text-xs text-rose-50 font-bold">Eating vital vitamins, high fiber vegetables, fresh fruits, proteins, and keeping sugar or salt minimal.</p>
              </div>
            </div>
          </div>
        );

      case "5-5": // The Greenhouse
        return (
          <div className={`${containerStyle} from-teal-600 to-green-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">🏡</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-teal-200 uppercase">Modern Farming Tech</span>
                <h4 className="text-sm font-black text-white">Greenhouse Gardening</h4>
                <p className="text-xs text-teal-50 font-bold">Creating warm glass nurseries that protect tender crop plants from harsh desert winds and conserve water.</p>
              </div>
            </div>
          </div>
        );

      case "5-6": // Honey
        return (
          <div className={`${containerStyle} from-amber-400 to-orange-500 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl animate-bounce">🐝</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-amber-950 uppercase">Sweet Remedies</span>
                <h4 className="text-sm font-black text-slate-900">Acacia Honey (العسل)</h4>
                <p className="text-xs text-amber-900 font-bold">Sweet golden honeycombs harvested from acacia forest bee farms, curing stomach upsets and throat coughs.</p>
              </div>
            </div>
          </div>
        );

      case "5-7": // Healthy Habits
        return (
          <div className={`${containerStyle} from-cyan-500 to-blue-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Activity className="w-14 h-14 text-amber-300 animate-pulse" />
              <div className="flex flex-col gap-1 max-w-xs text-xs">
                <span className="text-[10px] font-black tracking-widest text-cyan-200 uppercase">Wellness Disciplines</span>
                <span className="text-white font-bold">• Active running & physical sport daily</span>
                <span className="text-white font-bold">• Drinking plenty of clean water 💧</span>
                <span className="text-white font-bold">• Sleeping 8 hours for fresh mind</span>
              </div>
            </div>
          </div>
        );

      case "5-8": // Revision: Food Facts
        return (
          <div className={`${containerStyle} from-violet-600 to-indigo-700 text-white`}>
            <div className="flex flex-col items-center justify-center z-10 text-center gap-3">
              <span className="text-4xl">🍎</span>
              <div className="bg-indigo-950/60 px-4 py-2 rounded-2xl border border-indigo-400">
                <span className="text-[10px] font-black tracking-widest text-indigo-200 block uppercase">Nutrition Facts Summary</span>
                <p className="text-xs sm:text-sm font-bold text-white">How calories, fresh vitamins, and minerals build energetic immune systems and block illnesses.</p>
              </div>
            </div>
          </div>
        );

      // ==========================================
      // UNIT 6: Money and Shopping
      // ==========================================
      case "6-1": // Shopping
        return (
          <div className={`${containerStyle} from-pink-500 to-rose-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <ShoppingCart className="w-14 h-14 text-amber-300 animate-bounce" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-pink-100 uppercase">Market Transactions</span>
                <h4 className="text-sm font-black text-white">Smart Shopping</h4>
                <p className="text-xs text-pink-50 font-bold">Comparing prices, looking for discount tags, and choosing high-quality items over unnecessary luxes.</p>
              </div>
            </div>
          </div>
        );

      case "6-2": // Adverts
        return (
          <div className={`${containerStyle} from-purple-600 to-indigo-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Megaphone className="w-14 h-14 text-amber-300" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-purple-200 uppercase">Creative Media</span>
                <h4 className="text-sm font-black text-white">Advertising Tactics</h4>
                <p className="text-xs text-purple-100 font-bold">How posters, TV commercials, and digital ads persuade customers to buy and trust popular brands.</p>
              </div>
            </div>
          </div>
        );

      case "6-3": // Saving for a Rainy Day!
        return (
          <div className={`${containerStyle} from-cyan-600 to-indigo-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <PiggyBank className="w-16 h-16 text-yellow-300 animate-pulse" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-cyan-200 uppercase">Financial Wisdom</span>
                <h4 className="text-sm font-black text-white">Saving for a Rainy Day</h4>
                <p className="text-xs text-cyan-50 font-bold">Setting aside coins in piggy banks to stay protected when unforeseen medical bills or events pop up.</p>
              </div>
            </div>
          </div>
        );

      case "6-4": // Young Business People
        return (
          <div className={`${containerStyle} from-amber-400 to-orange-500 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">🍋</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-amber-100 uppercase">Youth Startups</span>
                <h4 className="text-sm font-black text-amber-950">Young Business Ventures</h4>
                <p className="text-xs text-amber-950 font-bold">Making homemade lemonade or Hibiscus juice to sell in the neighborhood and learn micro-economics.</p>
              </div>
            </div>
          </div>
        );

      case "6-5": // The Gold Rush
        return (
          <div className={`${containerStyle} from-yellow-600 to-amber-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">⛏️</span>
              <div className="flex flex-col gap-1 max-w-xs text-xs">
                <span className="text-[10px] font-black tracking-widest text-yellow-200 uppercase">Sudan Mineral Wealth</span>
                <span className="text-white font-bold">• Gold mining hills & exploration</span>
                <span className="text-white font-bold">• Tanning & panning sparkling nuggets</span>
                <span className="text-white font-bold">• Safe machinery for modern extraction</span>
              </div>
            </div>
          </div>
        );

      case "6-6": // Omdurman Market
        return (
          <div className={`${containerStyle} from-orange-500 to-red-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl animate-pulse">🌶️</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-orange-200 uppercase">Historic Souqs</span>
                <h4 className="text-sm font-black text-white">Souq Omdurman (سوق أم درمان)</h4>
                <p className="text-xs text-orange-50 font-bold">Vibrant streets packed with red chili towers, incense, silver bracelets, and traditional handcrafts.</p>
              </div>
            </div>
          </div>
        );

      case "6-7": // Paying for it!
        return (
          <div className={`${containerStyle} from-teal-500 to-emerald-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Smartphone className="w-14 h-14 text-amber-300 animate-bounce" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-teal-100 uppercase">E-Banking Solutions</span>
                <h4 className="text-sm font-black text-white">Fintech Payments</h4>
                <p className="text-xs text-teal-50 font-bold">Tapping cards, sending mobile transfers with bank apps, and counting micro bills digitally instantly.</p>
              </div>
            </div>
          </div>
        );

      case "6-8": // Revision: The Cost of Shopping
        return (
          <div className={`${containerStyle} from-slate-700 to-slate-900 text-white`}>
            <div className="flex flex-col items-center justify-center z-10 text-center gap-3">
              <Receipt className="w-12 h-12 text-amber-300" />
              <div className="bg-slate-800/60 px-4 py-2 rounded-2xl border border-slate-600">
                <span className="text-[10px] font-black tracking-widest text-slate-300 block uppercase">Shopping Cost Summary</span>
                <p className="text-xs sm:text-sm font-bold text-white">Analyzing item pricing, tax receipts, calculating balance change, and financial planning.</p>
              </div>
            </div>
          </div>
        );

      // ==========================================
      // UNIT 7: Learning and Education
      // ==========================================
      case "7-1": // Learning a Lesson
        return (
          <div className={`${containerStyle} from-indigo-500 to-purple-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Brain className="w-14 h-14 text-yellow-300 animate-pulse" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-indigo-200 uppercase">Study Habits</span>
                <h4 className="text-sm font-black text-white">Diligence and Study</h4>
                <p className="text-xs text-indigo-50 font-bold">Allocating quiet reading times, highlighting important points, and solving textbook queries.</p>
              </div>
            </div>
          </div>
        );

      case "7-2": // Learning for a Competition
        return (
          <div className={`${containerStyle} from-yellow-500 to-amber-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Trophy className="w-14 h-14 text-slate-950 animate-bounce" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-yellow-100 uppercase">School Tournaments</span>
                <h4 className="text-sm font-black text-slate-950">English Debates & Contests</h4>
                <p className="text-xs text-yellow-950 font-black">Competing in school-wide cultural quizzes, public speaking contests, and winning golden cups.</p>
              </div>
            </div>
          </div>
        );

      case "7-3": // University of Khartoum
        return (
          <div className={`${containerStyle} from-red-600 to-rose-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">🏛️</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-red-200 uppercase">Historical Institution</span>
                <h4 className="text-sm font-black text-white">University of Khartoum (جامعة الخرطوم)</h4>
                <p className="text-xs text-red-100 font-bold">The legendary red-brick campus and academic library, which fostered generations of prominent researchers.</p>
              </div>
            </div>
          </div>
        );

      case "7-4": // Doing Things Yourself
        return (
          <div className={`${containerStyle} from-cyan-600 to-teal-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Wrench className="w-12 h-12 text-amber-300" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-cyan-200 uppercase">DIY Craftsmanship</span>
                <h4 className="text-sm font-black text-white">Doing It Yourself</h4>
                <p className="text-xs text-cyan-50 font-bold">Working with wood panels, hammers, saws, and measuring guides to build chairs or repair household items.</p>
              </div>
            </div>
          </div>
        );

      case "7-5": // Learning isn't Easy
        return (
          <div className={`${containerStyle} from-blue-700 to-indigo-800 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl animate-bounce">🧗🏾‍♂️</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-blue-200 uppercase">Academic Perseverance</span>
                <h4 className="text-sm font-black text-white">No Shortcuts to Success</h4>
                <p className="text-xs text-blue-100 font-bold">Dealing with hard vocabulary chapters and complex grammar, staying patient, and building mastery over time.</p>
              </div>
            </div>
          </div>
        );

      case "7-6": // The Brain
        return (
          <div className={`${containerStyle} from-purple-600 to-violet-800 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Brain className="w-16 h-16 text-yellow-300 animate-pulse" />
              <div className="flex flex-col gap-1 max-w-xs text-xs">
                <span className="text-[10px] font-black tracking-widest text-purple-200 uppercase">Neurological Marvel</span>
                <span className="text-white font-bold">• Frontal Lobe: Logical reasoning 🧠</span>
                <span className="text-white font-bold">• Temporal Lobe: Memory & languages</span>
                <span className="text-white font-bold">• Visual Lobe: Image processing 👁️</span>
              </div>
            </div>
          </div>
        );

      case "7-7": // Test Your Knowledge
        return (
          <div className={`${containerStyle} from-teal-600 to-emerald-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Award className="w-14 h-14 text-yellow-300 animate-bounce" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-teal-200 uppercase">Evaluation Checkpoint</span>
                <h4 className="text-sm font-black text-white">Test Your Knowledge</h4>
                <p className="text-xs text-teal-50 font-bold">Sitting for exams confidently, ticking correct questions, and checking excellent scores with smiles.</p>
              </div>
            </div>
          </div>
        );

      case "7-8": // Revision: Test Your Learning
        return (
          <div className={`${containerStyle} from-slate-600 to-slate-850 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Target className="w-14 h-14 text-rose-500 animate-pulse" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">Targeting Mastery</span>
                <h4 className="text-sm font-black text-white">Full Revision Block</h4>
                <p className="text-xs text-slate-200 font-bold">Summarizing the whole unit material, clearing final checkpoints, and achieving school goals.</p>
              </div>
            </div>
          </div>
        );

      // ==========================================
      // UNIT 8: The World of English
      // ==========================================
      case "8-1": // Protecting Animals
        return (
          <div className={`${containerStyle} from-emerald-600 to-green-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Shield className="w-14 h-14 text-yellow-300 animate-bounce" />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-emerald-200 uppercase">Dinder National Park</span>
                <h4 className="text-sm font-black text-white">Protecting Wildlife</h4>
                <p className="text-xs text-emerald-50 font-bold">Shielding wild animals, protecting rare birds, and preventing hunting in national savanna reserves.</p>
              </div>
            </div>
          </div>
        );

      case "8-2": // Sports Time
        return (
          <div className={`${containerStyle} from-cyan-500 to-blue-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl animate-pulse">🏅</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-cyan-200 uppercase">Championship Events</span>
                <h4 className="text-sm font-black text-white">Running & Tracks</h4>
                <p className="text-xs text-cyan-50 font-bold">Winning international sprint running relays, raising high medals, and training physical stamina.</p>
              </div>
            </div>
          </div>
        );

      case "8-3": // A Matter of Science
        return (
          <div className={`${containerStyle} from-indigo-950 to-blue-900 text-white`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent)]" />
            <div className="flex items-center gap-5 z-10">
              <Atom className="w-14 h-14 text-cyan-300 animate-spin" />
              <div className="flex flex-col gap-1 max-w-xs text-xs">
                <span className="text-[10px] font-black tracking-widest text-indigo-300 uppercase">Cosmology & Astronomy</span>
                <span className="text-white font-bold">• Planets orbiting the warm sun ☀️</span>
                <span className="text-white font-bold">• Solar system galaxies & stars</span>
                <span className="text-white font-bold">• Physics research on space travel 🚀</span>
              </div>
            </div>
          </div>
        );

      case "8-4": // Stories
        return (
          <div className={`${containerStyle} from-fuchsia-600 to-purple-700 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl animate-bounce">📖</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-fuchsia-200 uppercase">Imaginary Horizons</span>
                <h4 className="text-sm font-black text-white">Unlocking Magical Stories</h4>
                <p className="text-xs text-fuchsia-50 font-bold">Entering worlds of old folklore, traveling with sailors, and learning high wisdom in literature.</p>
              </div>
            </div>
          </div>
        );

      case "8-5": // Discovering the World
        return (
          <div className={`${containerStyle} from-blue-500 to-indigo-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Globe className="w-14 h-14 text-amber-300 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-blue-200 uppercase">Global Voyagers</span>
                <h4 className="text-sm font-black text-white">Exploring the Map</h4>
                <p className="text-xs text-blue-50 font-bold">Mapping unknown seas, discovering constellations, and reading global maps with high compasses.</p>
              </div>
            </div>
          </div>
        );

      case "8-6": // A Time for Tea
        return (
          <div className={`${containerStyle} from-orange-400 to-rose-500 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <span className="text-5xl">☕</span>
              <div className="flex flex-col gap-1 max-w-xs">
                <span className="text-[10px] font-black tracking-widest text-orange-100 uppercase">Warm Traditions</span>
                <h4 className="text-sm font-black text-white">Tea with Milk (شاي الصباح)</h4>
                <p className="text-xs text-orange-50 font-bold">Pouring warm tea with milk in glass cups, chewing sweet dates, and hosting families with joy.</p>
              </div>
            </div>
          </div>
        );

      case "8-7": // Food and Health
        return (
          <div className={`${containerStyle} from-rose-500 to-red-600 text-white`}>
            <div className="flex items-center gap-5 z-10">
              <Apple className="w-14 h-14 text-yellow-300" />
              <div className="flex flex-col gap-1 max-w-xs text-xs">
                <span className="text-[10px] font-black tracking-widest text-rose-200 uppercase">Healthy Diet Overview</span>
                <span className="text-white font-bold">• High vitamins protect body cells</span>
                <span className="text-white font-bold">• Sport strengthens heart valves</span>
                <span className="text-white font-bold">• Avoiding fatty foods & high sugar</span>
              </div>
            </div>
          </div>
        );

      case "8-8": // Learning for Life
        return (
          <div className={`${containerStyle} from-emerald-500 to-teal-600 text-white`}>
            <div className="flex flex-col items-center justify-center z-10 text-center gap-3">
              <span className="text-4xl animate-bounce">🎓</span>
              <div className="bg-emerald-950/60 px-4 py-2 rounded-2xl border border-emerald-400">
                <span className="text-[10px] font-black tracking-widest text-emerald-200 block uppercase">Graduation & Beyond</span>
                <p className="text-xs sm:text-sm font-bold text-white">Completing Grade 9 SMILE English, wearing graduation bands, and stepping into the future.</p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${containerStyle} from-indigo-500 to-purple-600 text-white`}>
            <BookOpen className="w-16 h-16 stroke-[1.2] mb-3 text-amber-300" />
            <span className="text-sm font-black uppercase tracking-widest mb-1">Grade 9 SMILE Syllabus</span>
            <span className="text-xs font-bold text-indigo-100 text-center px-4">{title}</span>
          </div>
        );
    }
  };

  return (
    <div className="w-full relative">
      {renderIllustration()}
    </div>
  );
}
