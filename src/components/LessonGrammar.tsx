import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Info, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Check, 
  Star 
} from "lucide-react";
import { Lesson, UnitItem } from "../types";

interface LessonGrammarProps {
  unit: UnitItem;
  lesson: Lesson;
  speakText: (text: string, voice?: string) => void;
  addPoints?: (amount: number) => void;
}

interface GrammarRule {
  title: string;
  titleAr: string;
  explanation: string;
  explanationAr: string;
  formula?: string;
  examples: Array<{ en: string; ar: string }>;
}

interface GrammarQuizQuestion {
  question: string;
  questionAr: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationAr: string;
}

// Pre-defined high-quality grammar rule database for SMILE Grade 9
const GRAMMAR_DATABASE: Record<string, { rule: GrammarRule; quiz: GrammarQuizQuestion[] }> = {
  // Unit 2 Lesson 2: National Dress
  "2-2": {
    rule: {
      title: "Relative Pronouns (that, which, who)",
      titleAr: "ضمائر الوصل (التي، الذي، الذين)",
      explanation: "We use 'who' to connect clauses about people, and 'which' or 'that' to connect clauses about animals and things.",
      explanationAr: "نستخدم (who) لربط الجمل التي تتحدث عن الأشخاص، ونستخدم (which) أو (that) للأشياء والحيوانات غير العاقلة.",
      formula: "Noun (Thing) + which / that + describing verb\nNoun (Person) + who + describing verb",
      examples: [
        { en: "It's a loose item of clothing which/that is usually white.", ar: "إنه ثوب فضفاض يكون عادةً أبيض اللون." },
        { en: "A novelist is a person who writes interesting books.", ar: "الروائي هو الشخص الذي يكتب كتباً ممتعة." }
      ]
    },
    quiz: [
      {
        question: "A Thobe is a traditional item of clothing _______ is worn by Arab men.",
        questionAr: "الثوب هو قطعة ملابس تقليدية _______ يرتديها الرجال العرب.",
        options: ["who", "which", "where", "whose"],
        correctAnswer: "which",
        explanation: "Since 'item of clothing' is a thing (non-human), we use 'which' or 'that'.",
        explanationAr: "بما أن 'قطعة ملابس' شيء غير عاقل، نستخدم (which) أو (that)."
      },
      {
        question: "Leila Aboulela is a famous Sudanese novelist _______ writes amazing stories.",
        questionAr: "ليلى أبو العلا هي كاتبة روائية سودانية مشهورة _______ تكتب قصصاً رائعة.",
        options: ["which", "who", "when", "that"],
        correctAnswer: "who",
        explanation: "Since 'novelist' refers to a person, we use 'who'.",
        explanationAr: "بما أن 'روائي' تشير إلى شخص عاقل، نستخدم (who)."
      },
      {
        question: "The Jallabiya is a loose dress _______ is white and comfortable.",
        questionAr: "الجلابية هي ثوب فضفاض _______ يتميز باللون الأبيض والراحة.",
        options: ["who", "whom", "that", "whose"],
        correctAnswer: "that",
        explanation: "We can use 'that' as a relative pronoun for non-human things like 'Jallabiya'.",
        explanationAr: "يمكن استخدام (that) كضمير وصل للأشياء غير العاقلة مثل 'الجلابية'."
      }
    ]
  },
  // Unit 3 Lesson 3: Famous Sudanese Writers
  "3-3": {
    rule: {
      title: "Before & After + Verb-ing (Gerund)",
      titleAr: "استخدام Before و After مع صيغة الفعل المستمر (-ing)",
      explanation: "When using 'before' or 'after' to describe sequences of events without a new subject, the verb that follows must end in '-ing'.",
      explanationAr: "عند استخدام before (قبل) أو after (بعد) لربط حدثين بدون تكرار الفاعل، يجب صياغة الفعل الذي يليهما بإضافة (-ing).",
      formula: "Action A + before / after + Verb-ing",
      examples: [
        { en: "I went to school before going to university.", ar: "ذهبتُ إلى المدرسة قبل الذهاب إلى الجامعة." },
        { en: "Leila started writing novels two years after moving to Scotland.", ar: "بدأت ليلى في كتابة الروايات بعد عامين من الانتقال إلى اسكتلندا." }
      ]
    },
    quiz: [
      {
        question: "Abdelrahman always washes his hands before _______ his lunch.",
        questionAr: "عبد الرحمن دائماً يغسل يديه قبل _______ وجبة الغداء.",
        options: ["eat", "eaten", "eating", "eats"],
        correctAnswer: "eating",
        explanation: "After the preposition 'before', the verb takes the gerund '-ing' form.",
        explanationAr: "بعد كلمة 'before'، يأخذ الفعل صيغة اسم المصدر المنتهي بـ (-ing)."
      },
      {
        question: "After _______ to London, the writer published his first book.",
        questionAr: "بعد _______ إلى لندن، نشر الكاتب كتابه الأول.",
        options: ["move", "moving", "moved", "moves"],
        correctAnswer: "moving",
        explanation: "After the preposition 'after', the verb takes the '-ing' form.",
        explanationAr: "بعد كلمة 'after'، يأخذ الفعل صيغة اسم المصدر المنتهي بـ (-ing)."
      },
      {
        question: "They rested for an hour after _______ hard in the farm.",
        questionAr: "استراحوا لمدة ساعة بعد _______ بجد في المزرعة.",
        options: ["work", "working", "worked", "works"],
        correctAnswer: "working",
        explanation: "The verb following 'after' should be in '-ing' format ('working').",
        explanationAr: "الفعل الذي يلي 'after' يجب أن يكون في صيغة (-ing) أي ('working')."
      }
    ]
  },
  // Unit 5 Lesson 5: Robinson Crusoe
  "5-5": {
    rule: {
      title: "Past Continuous with While & When",
      titleAr: "الماضي المستمر والماضي البسيط باستخدام (While و When)",
      explanation: "We use the Past Continuous (was/were + verb-ing) for a long action, and the Past Simple (regular/irregular past verb) for a short action that interrupts it.",
      explanationAr: "نستخدم الماضي المستمر للحدث الطويل الذي كان مستمراً في الماضي، والماضي البسيط للحدث القصير الذي قاطعه.",
      formula: "While + Subject + was/were + Verb-ing, Subject + Past Simple\nSubject + was/were + Verb-ing + when + Subject + Past Simple",
      examples: [
        { en: "While I was staying there, I built a house.", ar: "بينما كنت مقيماً هناك، قمتُ ببناء منزل." },
        { en: "I was walking on the beach when I saw some tracks.", ar: "كنت أمشي على الشاطئ عندما رأيتُ بعض الآثار." }
      ]
    },
    quiz: [
      {
        question: "While Robinson Crusoe _______ on the desert island, he farmed and hunted.",
        questionAr: "بينما روبنسون كروزو _______ على الجزيرة المهجورة، قام بالزراعة والصيد.",
        options: ["is staying", "was staying", "stayed", "stays"],
        correctAnswer: "was staying",
        explanation: "We use Past Continuous 'was staying' after 'While' to express an ongoing long action.",
        explanationAr: "نستخدم الماضي المستمر (was staying) بعد (While) للتعبير عن حدث طويل ومستمر."
      },
      {
        question: "I was walking home when suddenly it _______ to rain heavily.",
        questionAr: "كنت أسير عائداً إلى المنزل عندما _______ السماء تمطر بغزارة فجأة.",
        options: ["started", "was starting", "starts", "starting"],
        correctAnswer: "started",
        explanation: "We use Past Simple 'started' for the short interrupting action after 'when'.",
        explanationAr: "نستخدم الماضي البسيط (started) للحدث القصير المفاجئ الذي يأتي بعد (when)."
      },
      {
        question: "The phone rang while I _______ my homework.",
        questionAr: "رن الهاتف بينما كنت _______ واجبي المدرسي.",
        options: ["write", "wrote", "was writing", "written"],
        correctAnswer: "was writing",
        explanation: "While introduces the continuous action, so we use 'was writing'.",
        explanationAr: "كلمة (While) تقدم الحدث المستمر، لذلك نستخدم (was writing)."
      }
    ]
  },
  // Unit 5 Lesson 1: Sorghum / Agriculture
  "5-1": {
    rule: {
      title: "Countable vs Uncountable Nouns",
      titleAr: "الأسماء المعدودة وغير المعدودة",
      explanation: "Countable nouns are things we can count individually (e.g. cups, beans, apples). Uncountable nouns cannot be counted and are treated as singular (e.g. sorghum, butter, coffee, sugar, water).",
      explanationAr: "الأسماء المعدودة يمكن عدّها بصيغة المفرد والجمع، أما الأسماء غير المعدودة فلا يمكن عدّها وتعامل دائماً كالمفرد.",
      examples: [
        { en: "Countable: We have ten cups, five apples, and many beans.", ar: "معدود: لدينا عشرة أكواب، وخمس تفاحات، وحبات فاصوليا كثيرة." },
        { en: "Uncountable: We bought some sorghum, butter, and coffee.", ar: "غير معدود: اشترينا بعض الذرة، والزبدة، والقهوة." }
      ]
    },
    quiz: [
      {
        question: "Sorghum is a main Sudanese crop. It is an _______ noun.",
        questionAr: "الذرة الرفيعة محصول سوداني رئيسي. وهي اسم _______.",
        options: ["countable", "uncountable", "plural", "pronoun"],
        correctAnswer: "uncountable",
        explanation: "Sorghum (grain) cannot be counted individually, so it is uncountable.",
        explanationAr: "الذرة الرفيعة (حبوب) لا يمكن عدها بالواحدة، لذا فهي اسم غير معدود."
      },
      {
        question: "Which of these is a countable noun?",
        questionAr: "أي من هذه الأسماء يُعد اسماً معدوداً (Countable)؟",
        options: ["coffee", "butter", "apple", "sugar"],
        correctAnswer: "apple",
        explanation: "We can count apples (one apple, two apples), while coffee, butter, and sugar are uncountable.",
        explanationAr: "التفاح (apple) يمكن عده ومفرده تفاحة، بينما القهوة والزبدة والسكر غير معدودة."
      },
      {
        question: "We need three _______ of water to make tea.",
        questionAr: "نحتاج ثلاثة _______ من الماء لصنع الشاي.",
        options: ["water", "cups", "sugar", "sorghum"],
        correctAnswer: "cups",
        explanation: "We can make uncountable nouns countable by using containers like 'cups' or 'bottles'.",
        explanationAr: "يمكننا جعل الأسماء غير المعدودة قابلة للعد باستخدام العبوات مثل أكواب (cups) أو زجاجات."
      }
    ]
  },
  // Unit 7 Lesson 4: Ourselves / School Competition
  "7-4": {
    rule: {
      title: "Reflexive Pronouns",
      titleAr: "الضمائر الانعكاسية (Reflexive Pronouns)",
      explanation: "We use reflexive pronouns (myself, ourselves, yourself, itself, themselves) when the subject and the object of the verb are the same person or thing.",
      explanationAr: "نستخدم الضمائر الانعكاسية عندما يكون فاعل ومفعول الجملة هما نفس الشخص أو الشيء (مثال: بأنفسنا، بنفسي).",
      formula: "We ➔ ourselves\nI ➔ myself\nHe ➔ himself\nShe ➔ herself\nIt ➔ itself\nThey ➔ themselves",
      examples: [
        { en: "We can make high-quality wooden chairs ourselves.", ar: "يمكننا صنع كراسي خشبية عالية الجودة بأنفسنا." },
        { en: "The brain controls everything in our body by itself.", ar: "يتحكم الدماغ في كل شيء في جسمنا تلقائياً وبنفسه." }
      ]
    },
    quiz: [
      {
        question: "We painted the classroom walls _______ during the summer break.",
        questionAr: "لقد قمنا بطلاء جدران الفصل الدراسي _______ خلال العطلة الصيفية.",
        options: ["myself", "ourselves", "themselves", "himself"],
        correctAnswer: "ourselves",
        explanation: "For the subject 'We', the corresponding reflexive pronoun is 'ourselves'.",
        explanationAr: "بالنسبة للفاعل 'We' (نحن)، يكون الضمير الانعكاسي المناسب هو 'ourselves' (بأنفسنا)."
      },
      {
        question: "The little girl is dressing _______ for school today.",
        questionAr: "البنت الصغيرة ترتدي ملابسها _______ للمدرسة اليوم.",
        options: ["himself", "herself", "itself", "myself"],
        correctAnswer: "herself",
        explanation: "For a singular female subject ('The little girl' / 'She'), we use 'herself'.",
        explanationAr: "للضمير المؤنث المفرد ('She')، نستخدم (herself) (بنفسها)."
      },
      {
        question: "The robot can turn _______ off when the battery is low.",
        questionAr: "يمكن للروبوت أن يغلق _______ عندما تكون البطارية منخفضة.",
        options: ["itself", "myself", "themselves", "yourself"],
        correctAnswer: "itself",
        explanation: "For non-human singular subjects ('The robot' / 'It'), we use 'itself'.",
        explanationAr: "للجماد أو غير العاقل المفرد مثل 'الروبوت'، نستخدم (itself) (بنفسه)."
      }
    ]
  },
  // Unit 8 Lesson 2: Penicillin / Medical Discoveries
  "8-2": {
    rule: {
      title: "Past Simple Passive",
      titleAr: "المبني للمجهول في زمن الماضي البسيط",
      explanation: "We use the past passive (was / were + past participle) when we want to focus on the object or the action rather than who performed it.",
      explanationAr: "نستخدم صيغة المبني للمجهول في الماضي (was/were + التصريف الثالث للفعل) للتركيز على المفعول به والحدث نفسه بدلاً من الفاعل.",
      formula: "Object + was/were + Past Participle (V3)",
      examples: [
        { en: "Penicillin was discovered by Alexander Fleming in 1928.", ar: "تم اكتشاف البنسلين بواسطة ألكسندر فلمنج في عام 1928." },
        { en: "Many ancient cities were built along the river Nile.", ar: "بُنيت العديد من المدن القديمة على طول نهر النيل." }
      ]
    },
    quiz: [
      {
        question: "The incredible sand sculptures _______ destroyed by strong desert winds.",
        questionAr: "المنحوتات الرملية الرائعة _______ دُمرت بفعل رياح الصحراء القوية.",
        options: ["was", "were", "is", "are"],
        correctAnswer: "were",
        explanation: "Since 'sculptures' is a plural object, we use 'were' followed by the past participle.",
        explanationAr: "بما أن 'sculptures' مفعول به جمع، نستخدم (were) تليها صيغة التصريف الثالث للفعل."
      },
      {
        question: "The Holy Quran _______ traditionally written in Kufic script.",
        questionAr: "القرآن الكريم كُتب تَقْلِيدِيّاً بخط الكوفي.",
        options: ["was", "were", "has", "is"],
        correctAnswer: "was",
        explanation: "The Holy Quran is singular, so the past passive uses 'was' + written.",
        explanationAr: "القرآن الكريم مفرد، لذا تستخدم صيغة الماضي المبني للمجهول (was + written)."
      },
      {
        question: "The phone _______ invented by Alexander Graham Bell.",
        questionAr: "الهاتف _______ اختراعه بواسطة ألكسندر جراهام بيل.",
        options: ["is", "were", "was", "be"],
        correctAnswer: "was",
        explanation: "'The phone' is singular, so we use 'was' + past participle 'invented'.",
        explanationAr: "الهاتف مفرد، لذا نستخدم الفعل المساعد (was) متبوعاً بالتصريف الثالث (invented)."
      }
    ]
  }
};

// Simple rule template dictionary to automatically handle all other lessons elegantly
const DYNAMIC_RULES_BY_TYPE: Record<string, { rule: GrammarRule; quiz: GrammarQuizQuestion[] }> = {
  "conversation": {
    rule: {
      title: "Dialogues and Polite Questions",
      titleAr: "أسلوب الحوار وطرح الأسئلة المهذبة",
      explanation: "In conversations, we use helper verbs like 'could', 'would', or polite question forms to ask for help or divide tasks fairly.",
      explanationAr: "في المحادثات الحيوية، نستخدم الأفعال المساعدة المهذبة مثل (could) أو (would) لتقديم الطلبات أو تقسيم المهام بلطف.",
      formula: "Could / Would + Subject + verb in base form?",
      examples: [
        { en: "Hyena, could you divide the food between us?", ar: "يا ضبع، هل يمكنك تقسيم الطعام بيننا؟" },
        { en: "Could you repeat that lesson, please?", ar: "هل يمكنك تكرار ذلك الدرس من فضلك؟" }
      ]
    },
    quiz: [
      {
        question: "Excuse me, _______ you help me find my English book?",
        questionAr: "عذراً، هل _______ مساعدتي في العثور على كتاب الإنجليزي الخاص بي؟",
        options: ["could", "should", "does", "been"],
        correctAnswer: "could",
        explanation: "We use 'could' to make polite requests in English dialogue.",
        explanationAr: "نستخدم (could) لتقديم طلبات مهذبة ولطيفة في الحوار الإنجليزي."
      },
      {
        question: "Ahmed, could you _______ the apples between the students?",
        questionAr: "يا أحمد، هل يمكنك _______ التفاح بين الطلاب؟",
        options: ["divided", "divide", "dividing", "divides"],
        correctAnswer: "divide",
        explanation: "After 'could', the verb must be in its base/infinitive form ('divide').",
        explanationAr: "بعد الفعل المساعد 'could'، يجب أن يكون الفعل الأساسي مجرداً من أي إضافات أي (divide)."
      }
    ]
  },
  "song": {
    rule: {
      title: "Rhymes, Adjectives & Simple Sentences",
      titleAr: "القوافي، الصفات، وتكوين الجمل البسيطة",
      explanation: "Songs and poems help us practice English rhythm, adjectives (describing words), and present/past simple structures.",
      explanationAr: "تساعدنا الأناشيد والقصائد على التدرب على إيقاع اللغة الإنجليزية، والصفات (كلمات الوصف)، وصياغة الجمل البسيطة.",
      formula: "Subject + Describing Adjective + Noun\n(e.g., 'fingers fine', 'strong desert winds')",
      examples: [
        { en: "Draw on the sand with fingers fine.", ar: "ارسم على الرمال بأصابع رقيقة ودقيقة." },
        { en: "When strong desert winds come out to play.", ar: "عندما تهب رياح الصحراء القوية لتلعب." }
      ]
    },
    quiz: [
      {
        question: "In the poem, they draw on the sand with fingers _______.",
        questionAr: "في القصيدة، يرسمون على الرمل بأصابع _______.",
        options: ["finer", "fine", "finest", "finely"],
        correctAnswer: "fine",
        explanation: "We use the adjective 'fine' to describe the fingers in the poem.",
        explanationAr: "نستخدم الصفة 'fine' (رقيقة/جميلة) لوصف الأصابع في الأبيات الشعرية."
      },
      {
        question: "When strong desert winds _______ out to play, the sand art blows away.",
        questionAr: "عندما _______ رياح الصحراء القوية، يطير الفن الرملي بعيداً.",
        options: ["comes", "came", "come", "coming"],
        correctAnswer: "come",
        explanation: "Since 'winds' is plural, we use the present plural verb 'come'.",
        explanationAr: "بما أن 'winds' جمع، نستخدم الفعل المضارع الجمع الملائم وهو (come)."
      }
    ]
  },
  "vocab": {
    rule: {
      title: "Defining Vocabulary & Key Adjectives",
      titleAr: "تعريف المفردات واستخدام الصفات المناسبة",
      explanation: "We learn to define jobs and items using relative clauses and adjectives. This helps expand our dictionary and descriptive skills.",
      explanationAr: "نتعلم كيفية تعريف المهن والأشياء في المنهج باستخدام الجمل الوصفية والنعوت لتوسيع القاموس اللغوي.",
      formula: "Noun (Subject) + is + a/an + adjective + noun definition",
      examples: [
        { en: "Kufic is the oldest and one of the most difficult scripts.", ar: "الخط الكوفي هو الأقدم وواحد من أكثر الخطوط صعوبة." },
        { en: "Ibrahim El-Salahi is a world-famous Sudanese artist.", ar: "إبراهيم الصلاحي هو فنان سوداني مشهور عالمياً." }
      ]
    },
    quiz: [
      {
        question: "Kufic is one of the oldest _______ of Arabic writing.",
        questionAr: "الكوفي هو واحد من أقدم _______ في الكتابة العربية.",
        options: ["script", "scripts", "scripting", "scripted"],
        correctAnswer: "scripts",
        explanation: "We use plural 'scripts' after 'one of the oldest...'.",
        explanationAr: "نستخدم اسم الجمع (scripts) بعد التعبير 'one of the oldest...' (واحد من أقدم...)."
      },
      {
        question: "Ibrahim El-Salahi studied painting in _______ in 1954.",
        questionAr: "درس إبراهيم الصلاحي الرسم في _______ عام 1954.",
        options: ["Khartoum", "London", "Paris", "Cairo"],
        correctAnswer: "London",
        explanation: "According to the lesson biography, Ibrahim El-Salahi studied in London from 1954 to 1957.",
        explanationAr: "وفقاً للنص الوارد في الدرس، درس الفنان إبراهيم الصلاحي في لندن بين عامي 1954 و1957."
      }
    ]
  }
};

export default function LessonGrammar({ 
  unit, 
  lesson, 
  speakText, 
  addPoints 
}: LessonGrammarProps) {
  const key = `${unit.id}-${lesson.id}`;
  
  // Decide which grammar structure to show (Handcrafted database or fallbacks by type)
  const data = GRAMMAR_DATABASE[key] || DYNAMIC_RULES_BY_TYPE[lesson.type] || DYNAMIC_RULES_BY_TYPE["vocab"];
  const { rule, quiz } = data;

  // Active step: "explain" (study grammar) or "quiz" (active practice)
  const [activeStep, setActiveStep] = useState<"explain" | "quiz">("explain");
  
  // Quiz specific states
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answersStatus, setAnswersStatus] = useState<boolean[]>([]);

  // Reset states when the selected lesson/unit changes
  useEffect(() => {
    setActiveStep("explain");
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setAnswersStatus([]);
  }, [unit.id, lesson.id]);

  const currentQuestion = quiz[currentQuestionIdx];

  const handleSelectOption = (option: string) => {
    if (hasSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || hasSubmitted) return;
    
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setHasSubmitted(true);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setAnswersStatus(prev => [...prev, true]);
      if (addPoints) {
        addPoints(10); // Reward 10 points for a correct grammar answer
      }
      speakText("Correct! Well done!", "Kore");
    } else {
      setAnswersStatus(prev => [...prev, false]);
      speakText("Not quite right. Let's look at the correct rule.", "Zephyr");
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setHasSubmitted(false);
    
    if (currentQuestionIdx + 1 < quiz.length) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
      speakText(`Congratulations! You finished the lesson quiz with score ${score} out of ${quiz.length}!`, "Kore");
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setAnswersStatus([]);
    speakText("Let's try the grammar quiz again!", "Kore");
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50/40 to-white p-5 sm:p-7 rounded-[32px] border-2 border-indigo-100 flex flex-col gap-5 text-right w-full mt-6" dir="rtl">
      
      {/* Visual Header */}
      <div className="border-b-2 border-dashed border-indigo-100 pb-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 bg-indigo-600 text-white rounded-2xl shadow-sm">
            <BookOpen className="w-5 h-5 animate-pulse" />
          </div>
          <div className="text-right">
            <h4 className="text-md sm:text-lg font-black text-indigo-950 flex items-center gap-1.5 leading-tight">
              <span>قواعد واستخراج تراكيب الدرس</span>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                Grammar Corner
              </span>
            </h4>
            <p className="text-[11px] font-bold text-slate-500 mt-0.5">
              استكشف القواعد اللغوية من كتاب الصف التاسع وطبّق ما تعلمته في اختبار فوري!
            </p>
          </div>
        </div>

        {/* Navigation Mode Selector */}
        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => {
              setActiveStep("explain");
              speakText("Grammar Explanation", "Kore");
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeStep === "explain"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-200"
            }`}
          >
            📖 شرح القاعدة
          </button>
          <button
            onClick={() => {
              setActiveStep("quiz");
              speakText("Grammar Quiz", "Kore");
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeStep === "quiz"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-200"
            }`}
          >
            ✏️ اختبار القواعد
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1: GRAMMAR RULE EXPLANATION */}
        {activeStep === "explain" && (
          <motion.div
            key="explain"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-4 text-right"
          >
            {/* The Rule Card */}
            <div className="bg-white p-5 rounded-[24px] border border-indigo-100/60 shadow-xs flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute left-3 top-3 opacity-10">
                <Sparkles className="w-16 h-16 text-indigo-600" />
              </div>

              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[10px] font-black uppercase text-indigo-600 tracking-wider">قاعدة الدرس الرئيسية • Active Grammar</span>
                  <h5 className="text-md sm:text-lg font-black text-indigo-950 mt-1 leading-snug">
                    {rule.title}
                  </h5>
                  <h6 className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">
                    {rule.titleAr}
                  </h6>
                </div>
              </div>

              <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/40 text-xs text-slate-700 leading-relaxed font-semibold mt-1">
                <p className="text-left font-black text-indigo-950 text-[13px] mb-1.5" dir="ltr">
                  💡 {rule.explanation}
                </p>
                <p className="border-t border-indigo-100 pt-1.5 font-bold text-slate-600">
                  {rule.explanationAr}
                </p>
              </div>

              {/* Structural Formula if available */}
              {rule.formula && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center font-mono text-xs text-indigo-900 mt-1" dir="ltr">
                  <span className="text-[9px] block font-black text-slate-400 uppercase tracking-widest text-center mb-1">صيغة التركيب اللغوي (Formula)</span>
                  <pre className="font-extrabold whitespace-pre-wrap leading-tight select-all text-center">{rule.formula}</pre>
                </div>
              )}
            </div>

            {/* Sentence Examples section */}
            <div>
              <span className="text-xs font-black text-indigo-900 flex items-center gap-1 mb-2.5">
                🌟 جمل تطبيقية مستخرجة وموضحة (Interactive Examples):
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {rule.examples.map((ex, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-4 rounded-xl border border-slate-100 shadow-xs flex flex-col gap-1 text-right"
                  >
                    <div className="flex justify-between items-start w-full gap-2">
                      <span className="text-[9px] font-black text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full uppercase leading-none">مثال {index + 1}</span>
                      <button
                        onClick={() => speakText(ex.en, "Kore")}
                        className="text-slate-400 hover:text-indigo-600 transition-colors p-1"
                        title="انطق الجملة"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-extrabold text-indigo-950 text-left text-sm mt-1" dir="ltr">
                      {ex.en}
                    </p>
                    <p className="text-xs text-slate-500 font-bold border-t border-slate-50 pt-1 mt-1">
                      {ex.ar}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action to proceed to quiz */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setActiveStep("quiz");
                speakText("Let's start the quiz!", "Kore");
              }}
              className="mt-2 w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 transform transition-all"
            >
              <span>ابدأ اختبار القواعد للتحقق من فهمك! ✏️</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* STEP 2: GRAMMAR QUIZ */}
        {activeStep === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-4 text-right"
          >
            {/* If Quiz is in progress */}
            {!quizFinished ? (
              <div className="flex flex-col gap-4">
                {/* Score and Progress Meter */}
                <div className="flex justify-between items-center text-xs font-black text-indigo-950">
                  <span>السؤال {currentQuestionIdx + 1} من {quiz.length}</span>
                  <span className="bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full">
                    مجموع النقاط: {score} / {quiz.length} 🌟
                  </span>
                </div>

                {/* Question Box */}
                <div className="bg-white p-5 rounded-[24px] border border-indigo-100 shadow-xs flex flex-col gap-2 text-center relative overflow-hidden">
                  <div className="absolute right-3 top-3 opacity-5">
                    <HelpCircle className="w-16 h-16 text-indigo-600" />
                  </div>

                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">اختر الإجابة الصحيحة للقواعد</p>
                  
                  {/* English Question (Left aligned for English language study) */}
                  <h5 className="text-[16px] sm:text-[18px] font-black text-indigo-950 text-left leading-snug mt-1" dir="ltr">
                    {currentQuestion.question}
                  </h5>

                  {/* Arabic translation of the question */}
                  <p className="text-xs sm:text-sm font-bold text-slate-500 border-t border-slate-50 pt-2 mt-1">
                    {currentQuestion.questionAr}
                  </p>
                </div>

                {/* Answer Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectOption = option === currentQuestion.correctAnswer;
                    
                    let btnStyle = "bg-white border-slate-200 hover:bg-slate-50 text-slate-700";
                    if (isSelected) {
                      btnStyle = "bg-indigo-50 border-indigo-500 text-indigo-950 ring-2 ring-indigo-600/30";
                    }
                    if (hasSubmitted) {
                      if (isCorrectOption) {
                        btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/20";
                      } else {
                        btnStyle = "bg-slate-50 border-slate-150 text-slate-400 cursor-not-allowed";
                      }
                    }

                    return (
                      <motion.button
                        key={option}
                        onClick={() => handleSelectOption(option)}
                        disabled={hasSubmitted}
                        whileHover={{ scale: hasSubmitted ? 1 : 1.015 }}
                        whileTap={{ scale: hasSubmitted ? 1 : 0.985 }}
                        className={`py-3.5 px-5 rounded-xl border-2 font-black text-sm uppercase tracking-wide transition-all text-left cursor-pointer flex items-center justify-between gap-2 ${btnStyle}`}
                        dir="ltr"
                      >
                        <span>{option}</span>
                        {hasSubmitted && isCorrectOption && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {hasSubmitted && isSelected && !isCorrectOption && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Submission Action */}
                <div className="mt-1">
                  {!hasSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={!selectedAnswer}
                      className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        selectedAnswer
                          ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md"
                          : "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>تحقق من صحة القاعدة (Verify Grammar)</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>السؤال التالي (Next Question)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Explanation Banner when checked */}
                <AnimatePresence>
                  {hasSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className={`p-4 rounded-xl border-2 flex flex-col gap-1 text-right mt-1 ${
                        selectedAnswer === currentQuestion.correctAnswer
                          ? "bg-emerald-50/50 border-emerald-100 text-emerald-950"
                          : "bg-rose-50/50 border-rose-100 text-rose-950"
                      }`}
                    >
                      <span className="text-[11px] font-black uppercase text-slate-500 flex items-center gap-1">
                        <Info className="w-4 h-4" /> توضيح القاعدة وشرح الإجابة:
                      </span>
                      <p className="text-xs font-black text-left mt-0.5" dir="ltr">
                        {currentQuestion.explanation}
                      </p>
                      <p className="text-xs font-bold text-slate-600 border-t border-slate-100/50 pt-1 mt-1">
                        {currentQuestion.explanationAr}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* If Quiz is finished, show total results */
              <div className="bg-white p-6 rounded-[28px] border-2 border-indigo-100 text-center flex flex-col items-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-yellow-500/5 to-transparent pointer-events-none" />

                <motion.div
                  initial={{ scale: 0.5, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white mt-2"
                >
                  <Award className="w-10 h-10" />
                </motion.div>

                <div className="text-center">
                  <h5 className="text-lg font-black text-indigo-950 uppercase tracking-wide">أحسنت! لقد أكملت اختبار القواعد</h5>
                  <p className="text-xs font-bold text-slate-500 mt-0.5">
                    Excellent Grammar Study! Keep up the brilliant progress.
                  </p>
                </div>

                {/* Score Counter Widget */}
                <div className="bg-indigo-50/50 py-3.5 px-6 rounded-2xl border border-indigo-100 flex flex-col items-center gap-0.5 min-w-[200px]">
                  <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">النتيجة النهائية</span>
                  <span className="text-2xl font-black text-indigo-950">{score} من {quiz.length}</span>
                  <span className="text-[11px] font-bold text-slate-500">({Math.round((score / quiz.length) * 100)}% إجابات صحيحة)</span>
                </div>

                {/* Score breakdown visual indicator */}
                <div className="flex gap-2.5 my-1">
                  {answersStatus.map((status, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        status ? "bg-emerald-500" : "bg-rose-500"
                      }`}
                      title={`سؤال ${index + 1}`}
                    >
                      {status ? (
                        <Check className="w-2.5 h-2.5 text-white stroke-[4]" />
                      ) : (
                        <span className="text-[8px] font-bold text-white">X</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full mt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="py-3 px-4 rounded-xl font-black text-xs uppercase bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>إعادة المحاولة</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveStep("explain");
                      speakText("Let's review the grammar rules again", "Kore");
                    }}
                    className="py-3 px-4 rounded-xl font-black text-xs uppercase bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>مراجعة القواعد</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
