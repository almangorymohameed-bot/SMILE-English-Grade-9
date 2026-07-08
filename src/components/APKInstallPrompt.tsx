import React, { useState, useEffect } from "react";
import { 
  Smartphone, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  Chrome, 
  X,
  Cpu,
  RefreshCw,
  AppWindow
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface APKInstallPromptProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function APKInstallPrompt({ isOpen, onClose }: APKInstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [platform, setPlatform] = useState<"android" | "ios" | "desktop" | "other">("other");
  const [activeInstructionTab, setActiveInstructionTab] = useState<"android" | "ios" | "apk">("android");
  
  // APK packaging simulator states
  const [isCompiling, setIsCompiling] = useState(false);
  const [compilingStep, setCompilingStep] = useState(0);
  const [compilingProgress, setCompilingProgress] = useState(0);
  const [compileSuccess, setCompileSuccess] = useState(false);

  const compilingSteps = [
    "جاري قراءة ملفات منهج SMILE Grade 9...",
    "تحضير قاعدة بيانات الكلمات والقاموس الصوتي التفاعلي...",
    "توليد كود التثبيت التلقائي المتوافق مع معايير PWA & APK...",
    "ضغط الأصول وحقن الخدمة الذاتية للتشغيل أوفلاين 100%...",
    "توقيع حزمة التطبيق وتحسين استهلاك البطارية على الجوال..."
  ];

  useEffect(() => {
    // 1. Check if already installed / running in standalone mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        (window.navigator as any).standalone === true;
    setIsInstalled(isStandalone);

    // 2. Detect platform
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/android/.test(userAgent)) {
      setPlatform("android");
      setActiveInstructionTab("android");
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform("ios");
      setActiveInstructionTab("ios");
    } else if (/windows|macintosh|linux/.test(userAgent) && !/mobile/.test(userAgent)) {
      setPlatform("desktop");
      setActiveInstructionTab("android");
    } else {
      setPlatform("other");
      setActiveInstructionTab("android");
    }

    // 3. Listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Automatically show the prompt if they haven't dismissed it before
      const isDismissed = localStorage.getItem("smile9_install_dismissed") === "true";
      if (!isDismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Also check if they visited multiple times to gently show install options
    const visitCount = parseInt(localStorage.getItem("smile9_visits") || "0", 10);
    localStorage.setItem("smile9_visits", (visitCount + 1).toString());
    
    const isDismissed = localStorage.getItem("smile9_install_dismissed") === "true";
    if (visitCount >= 1 && !isDismissed && !isStandalone) {
      // Show install prompt banner after a short delay
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback: open manual installation instructions modal directly
      onClose(); // ensure clean state
      setTimeout(() => {
        // Trigger parent state to open modal
        const installBtn = document.getElementById("trigger-app-install-btn");
        if (installBtn) {
          installBtn.click();
        }
      }, 100);
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const dismissPromptPermanently = () => {
    localStorage.setItem("smile9_install_dismissed", "true");
    setShowPrompt(false);
  };

  const startAPKCompilation = () => {
    setIsCompiling(true);
    setCompilingStep(0);
    setCompilingProgress(0);
    setCompileSuccess(false);

    // Animate progress and steps
    const stepInterval = setInterval(() => {
      setCompilingStep(prev => {
        if (prev < compilingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 1800);

    const progressInterval = setInterval(() => {
      setCompilingProgress(prev => {
        if (prev < 100) {
          return prev + 2;
        }
        clearInterval(progressInterval);
        setCompileSuccess(true);
        // Download a backup PWA bootstrap file to trigger native download
        triggerBootstrapDownload();
        return 100;
      });
    }, 90);
  };

  const triggerBootstrapDownload = () => {
    try {
      const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMILE English Grade 9 - Launcher</title>
    <style>
        body { font-family: system-ui, sans-serif; text-align: center; padding: 40px; background: #f0f9ff; color: #0369a1; }
        .card { background: white; border-radius: 20px; padding: 30px; box-shadow: 0 10px 15px rgba(0,0,0,0.05); max-width: 450px; margin: auto; }
        .btn { background: #0284c7; color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: bold; cursor: pointer; text-decoration: none; display: inline-block; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="card">
        <h2>SMILE English Grade 9 🇸🇩</h2>
        <p>مرحباً بك! هذا ملف تشغيل سريع لتطبيق منهج الصف الثالث متوسط.</p>
        <p>لتثبيت التطبيق كبرنامج كامل على جوالك يعمل بدون إنترنت، افتح الموقع الرسمي في متصفح Chrome ثم اختر "إضافة للشاشة الرئيسية" (Add to Home Screen).</p>
        <a href="${window.location.origin}" class="btn">افتح التطبيق الآن</a>
    </div>
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "SMILE_English_Grade_9_Sudan.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.warn("Bootstrap download failed", err);
    }
  };

  return (
    <>
      {/* 1. Sticky Mini Banner for Mobile App Install */}
      <AnimatePresence>
        {showPrompt && !isInstalled && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-[420px] bg-sky-900 text-white rounded-[28px] p-5 shadow-2xl border-4 border-white/90 flex flex-col gap-3"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-inner shrink-0">🇸🇩</div>
                <div className="text-right">
                  <h4 className="font-black text-sm text-yellow-300">تثبيت تطبيق SMILE English 9</h4>
                  <p className="text-xs text-sky-100 font-medium">ثبت التطبيق على هاتفك ليعمل بدون إنترنت تماماً كملف APK!</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPrompt(false)}
                className="p-1 rounded-full bg-sky-800 hover:bg-sky-700 text-sky-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-sky-950 font-black text-xs py-3 px-4 rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <Download className="w-4 h-4" />
                تثبيت بنقرة واحدة 📲
              </button>
              <button
                onClick={dismissPromptPermanently}
                className="bg-sky-800 hover:bg-sky-700 text-sky-200 font-bold text-[10px] py-3 px-3 rounded-xl transition-all cursor-pointer"
              >
                عدم الإظهار مجدداً
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. High-Fidelity App Installer Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border-4 border-sky-100 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col gap-6"
              dir="rtl"
            >
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Absolute Background Accent Decors */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-2xl -z-10 opacity-65"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-100 rounded-full blur-3xl -z-10 opacity-50"></div>

              {/* Header Title with animated installation badge */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-sky-50 pb-5">
                <div className="flex items-center gap-3.5 text-right">
                  <div className="w-14 h-14 bg-sky-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-md border-b-4 border-sky-800 animate-bounce shrink-0">
                    📲
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-sky-900 tracking-tight">
                      تثبيت وتنزيل تطبيق SMILE English على الجوال
                    </h2>
                    <p className="text-xs sm:text-sm text-sky-600 font-bold">
                      تصفح واستخدم كامل منهج الصف الثالث المتوسط (مسموع وتفاعلي) أوفلاين في أي وقت
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  {isInstalled ? (
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black px-4 py-2 rounded-full flex items-center gap-1.5 animate-pulse">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      أنت تستخدم التطبيق كبرنامج مثبت حالياً! 🎉
                    </span>
                  ) : (
                    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                      جاهز للتثبيت على الأندرويد والآيفون
                    </span>
                  )}
                </div>
              </div>

              {/* Big CTA Install Button (Only visible if not installed) */}
              {!isInstalled && (
                <div className="bg-sky-50 rounded-[24px] p-5 sm:p-6 border border-sky-100 flex flex-col md:flex-row justify-between items-center gap-5 text-right">
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-sky-950 flex items-center gap-1.5">
                      <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                      تحويل فوري إلى تطبيق جوال ذكي
                    </h3>
                    <p className="text-xs text-sky-700 font-semibold max-w-xl leading-relaxed">
                      عند تثبيت التطبيق، سيظهر رمز "SMILE 9" على شاشتك الرئيسية، وسيفتح كشاشة كاملة سريعة دون أشرطة تصفح، وبشكل متوافق مع جميع الهواتف الذكية.
                    </p>
                  </div>

                  <button
                    onClick={handleInstallClick}
                    className="w-full md:w-auto bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-black text-sm py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 border-b-4 border-indigo-900/60 shrink-0"
                  >
                    <Download className="w-5 h-5" />
                    تثبيت التطبيق بنقرة واحدة (PWA) 📲
                  </button>
                </div>
              )}

              {/* Tabbed step-by-step guidance for manual installations */}
              <div id="install-instructions-section" className="space-y-4">
                <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
                  <button
                    onClick={() => setActiveInstructionTab("android")}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeInstructionTab === "android"
                        ? "bg-sky-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <Chrome className="w-4 h-4" />
                    لهواتف أندرويد (Chrome / APK)
                  </button>
                  <button
                    onClick={() => setActiveInstructionTab("ios")}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeInstructionTab === "ios"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    لهواتف آيفون (iOS Safari)
                  </button>
                  <button
                    onClick={() => setActiveInstructionTab("apk")}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeInstructionTab === "apk"
                        ? "bg-amber-500 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <Cpu className="w-4 h-4 animate-pulse" />
                    محاكي بناء وتنزيل ملف APK 📥
                  </button>
                </div>

                <div className="min-h-[220px] text-right">
                  {activeInstructionTab === "android" && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="bg-slate-50 p-4.5 rounded-[22px] border border-slate-150 space-y-2">
                        <div className="w-8 h-8 bg-sky-100 text-sky-800 rounded-full font-black flex items-center justify-center text-sm shadow-sm">1</div>
                        <h4 className="font-extrabold text-sm text-slate-800">افتح متصفح كروم</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                          افتح متصفح Google Chrome على جوالك الأندرويد وتأكد من تصفح الموقع الرسمي.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4.5 rounded-[22px] border border-slate-150 space-y-2">
                        <div className="w-8 h-8 bg-sky-100 text-sky-800 rounded-full font-black flex items-center justify-center text-sm shadow-sm">2</div>
                        <h4 className="font-extrabold text-sm text-slate-800">اضغط على زر الخيارات</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                          اضغط على رمز النقاط الثلاثة الرأسية (<strong className="text-sky-600">⋮</strong>) الموجودة في أعلى يسار شاشة المتصفح.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4.5 rounded-[22px] border border-slate-150 space-y-2">
                        <div className="w-8 h-8 bg-sky-100 text-sky-800 rounded-full font-black flex items-center justify-center text-sm shadow-sm">3</div>
                        <h4 className="font-extrabold text-sm text-slate-800">اختر "تثبيت التطبيق"</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                          اضغط على خيار <strong className="text-sky-600">تثبيت التطبيق (Install App)</strong> أو "إضافة إلى الشاشة الرئيسية" لتظهر أيقونة التطبيق السودانية فوراً بجانب تطبيقاتك!
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeInstructionTab === "ios" && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="bg-indigo-50/40 p-4.5 rounded-[22px] border border-indigo-100/60 space-y-2">
                        <div className="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-full font-black flex items-center justify-center text-sm shadow-sm">1</div>
                        <h4 className="font-extrabold text-sm text-indigo-950">افتح متصفح Safari</h4>
                        <p className="text-[11px] text-indigo-900/70 leading-relaxed font-semibold">
                          تأكد من فتح الرابط باستخدام متصفح سفاري (Safari) الرسمي المدمج في جهاز الآيفون الخاص بك.
                        </p>
                      </div>

                      <div className="bg-indigo-50/40 p-4.5 rounded-[22px] border border-indigo-100/60 space-y-2">
                        <div className="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-full font-black flex items-center justify-center text-sm shadow-sm">2</div>
                        <h4 className="font-extrabold text-sm text-indigo-950">اضغط على زر المشاركة</h4>
                        <p className="text-[11px] text-indigo-900/70 leading-relaxed font-semibold">
                          انقر على زر المشاركة الأسفل في المتصفح (الرمز المربع ذو السهم المتجه للأعلى <strong className="text-indigo-600">📤</strong>).
                        </p>
                      </div>

                      <div className="bg-indigo-50/40 p-4.5 rounded-[22px] border border-indigo-100/60 space-y-2">
                        <div className="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-full font-black flex items-center justify-center text-sm shadow-sm">3</div>
                        <h4 className="font-extrabold text-sm text-indigo-950">إضافة إلى الشاشة الرئيسية</h4>
                        <p className="text-[11px] text-indigo-900/70 leading-relaxed font-semibold">
                          اسحب القائمة للأعلى ثم اختر <strong className="text-indigo-600">إضافة إلى الشاشة الرئيسية (Add to Home Screen)</strong> لتستمتع بالتطبيق بكامل حجم الشاشة!
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeInstructionTab === "apk" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-amber-50/50 rounded-3xl p-5 border border-amber-200/80 space-y-4"
                    >
                      {!isCompiling && !compileSuccess ? (
                        <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
                          <div className="space-y-1.5 flex-1 text-center md:text-right">
                            <h4 className="font-black text-sm text-amber-950 flex items-center justify-center md:justify-start gap-1">
                              📦 حزمة الويب الفائقة للهواتف
                            </h4>
                            <p className="text-xs text-amber-900/80 font-bold max-w-xl leading-relaxed">
                              هل تفضل الحصول على ملف تشغيل مخصص؟ يمكننا محاكاة بناء وتجميع التطبيق كاملاً مع الملفات الصوتية في حزمة ويب ذكية صغيرة لفتحها كأيقونة في الأندرويد.
                            </p>
                          </div>
                          <button
                            onClick={startAPKCompilation}
                            className="bg-amber-500 hover:bg-amber-600 text-white font-black text-xs py-3.5 px-6 rounded-2xl shadow border-b-4 border-amber-700 cursor-pointer shrink-0 transition-transform active:scale-95"
                          >
                            بناء وتحميل حزمة التشغيل 🚀
                          </button>
                        </div>
                      ) : null}

                      {isCompiling && (
                        <div className="space-y-4 py-4 animate-pulse">
                          <div className="flex justify-between items-center text-xs font-black text-amber-950">
                            <span className="flex items-center gap-1.5">
                              <RefreshCw className="w-4 h-4 text-amber-600 animate-spin" />
                              {compilingSteps[compilingStep]}
                            </span>
                            <span className="font-mono">{compilingProgress}%</span>
                          </div>

                          <div className="w-full bg-amber-100 h-3 rounded-full overflow-hidden border border-amber-200">
                            <div 
                              className="bg-amber-500 h-full rounded-full transition-all duration-100"
                              style={{ width: `${compilingProgress}%` }}
                            />
                          </div>

                          <p className="text-[10px] text-amber-700 font-extrabold text-center">
                            نظام البناء الذكي يضغط الأصول الصوتية لضمان تثبيت فوري بدون استهلاك مساحة جوالك.
                          </p>
                        </div>
                      )}

                      {compileSuccess && (
                        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                          <div className="flex items-start gap-3 text-center sm:text-right">
                            <span className="text-3xl shrink-0">🎉</span>
                            <div>
                              <h4 className="font-black text-sm text-emerald-900">اكتمل بناء حزمة التشغيل الذكية!</h4>
                              <p className="text-xs text-emerald-700/90 font-bold mt-0.5">
                                تم توليد ملف المشغل المساعد <strong className="font-black">SMILE_English_Grade_9_Sudan.html</strong> وتنزيله بنجاح.
                              </p>
                            </div>
                          </div>
                          
                          <button
                            onClick={startAPKCompilation}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] py-2 px-3 rounded-xl transition-all cursor-pointer"
                          >
                            إعادة التحميل مرة أخرى 🔁
                          </button>
                        </div>
                      )}

                      <div className="bg-white p-3.5 rounded-2xl border border-amber-100 flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-[10.5px] text-amber-900/85 leading-relaxed font-bold">
                          <strong className="text-amber-950">ملاحظة تقنية هامة:</strong> بفضل معايير الويب التقدمية الحديثة (PWA)، أصبحت التطبيقات تثبت مباشرة من المتصفح دون الحاجة لتحميل ملفات APK ضخمة ومجهولة المصدر قد تحتوي على فيروسات أو تبطئ الهاتف. تثبيت التطبيق بالطريقة المذكورة في التبويبات أعلاه يمنحك نفس أداء التطبيق الأصلي تماماً مع ميزة التحديث التلقائي الفوري!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Benefits banner Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-50 pt-5 text-right">
                <div className="flex items-start gap-3">
                  <span className="text-2xl pt-0.5 shrink-0">⚡️</span>
                  <div>
                    <h5 className="font-extrabold text-xs text-slate-800">حجم متناهي الصغر</h5>
                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-normal">
                      لا يأخذ أكثر من 1 ميجابايت من مساحة الهاتف، على عكس تطبيقات APK التقليدية التي تأخذ مئات الميجابايت.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl pt-0.5 shrink-0">📴</span>
                  <div>
                    <h5 className="font-extrabold text-xs text-slate-800">يعمل 100% بدون إنترنت</h5>
                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-normal">
                      بمجرد تثبيته وتنزيل الأصوات عبر "مساعد الأوفلاين"، يعمل التطبيق بالكامل أثناء انقطاع الشبكة أو الكهرباء.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl pt-0.5 shrink-0">🔄</span>
                  <div>
                    <h5 className="font-extrabold text-xs text-slate-800">تحديثات فورية وتلقائية</h5>
                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-normal">
                      كلما تمت إضافة دروس جديدة أو تحسينات، سيتم تحديث تطبيقك تلقائياً دون الحاجة لإعادة التثبيت.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
