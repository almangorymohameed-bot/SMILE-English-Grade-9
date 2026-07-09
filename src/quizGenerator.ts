import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ConfiguredQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
  unitId: number;
  lessonId: number | null; // null means general unit question
  type: "trivia" | "vocabulary" | "spelling" | "phonics";
}

const HANDCRAFTED_TRIVIA: ConfiguredQuestion[] = [
  // --- UNIT 1 ---
  {
    question: "What are the three core subjects that school science consists of in Book 9?",
    answers: ["Chemistry, Physics, and Biology", "Maths, Geography, and History", "Art, Music, and Drama", "English, Arabic, and French"],
    correctAnswer: "Chemistry, Physics, and Biology",
    unitId: 1,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Who discovered gravity and invented an important kind of maths (calculus)?",
    answers: ["Isaac Newton", "Marie Curie", "Louis Pasteur", "Alexander Graham Bell"],
    correctAnswer: "Isaac Newton",
    unitId: 1,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "How many bones do adults have compared to newborn babies?",
    answers: ["Adults have 206, babies have 270", "Adults have 270, babies have 206", "Adults have 300, babies have 100", "Adults have 150, babies have 150"],
    correctAnswer: "Adults have 206, babies have 270",
    unitId: 1,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Which traditional Sudanese herb is mixed with honey to help stomach aches and reduce blood sugar?",
    answers: ["Fenugreek", "Hibiscus", "Rosemary", "Mint"],
    correctAnswer: "Fenugreek",
    unitId: 1,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "In what year did Erno Rubik invent the famous Magic Cube (Rubik's Cube)?",
    answers: ["1974", "1985", "1960", "1999"],
    correctAnswer: "1974",
    unitId: 1,
    lessonId: 7,
    type: "trivia"
  },

  // --- UNIT 2 ---
  {
    question: "How did the wise fox divide the hunted food for the hungry lion?",
    answers: [
      "Donkey for breakfast, gazelle for lunch, rabbit for dinner",
      "Donkey for the lion, gazelle for the hyena, rabbit for the fox",
      "Gave all the animals to the hyena",
      "Divided all the animals into three equal pieces"
    ],
    correctAnswer: "Donkey for breakfast, gazelle for lunch, rabbit for dinner",
    unitId: 2,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "What is the traditional white loose cotton garment worn by Arab men for special occasions?",
    answers: ["Jallabiya", "Sari", "Kimono", "Kilt"],
    correctAnswer: "Jallabiya",
    unitId: 2,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Which award-winning novel was written by the famous Sudanese author Leila Aboulela?",
    answers: ["Lyrics Alley", "The Carrier", "Robinson Crusoe", "Parker Bilal"],
    correctAnswer: "Lyrics Alley",
    unitId: 2,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "What is the oldest and most difficult Arabic calligraphy script used to write the Holy Quran?",
    answers: ["Kufic", "Thuluth", "Riq'ah", "Sini"],
    correctAnswer: "Kufic",
    unitId: 2,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "Where did famous Sudanese artist Ibrahim El-Salahi paint wooden slates as a young boy?",
    answers: ["In the Khalwa", "In London", "In New York", "In Khartoum Airport"],
    correctAnswer: "In the Khalwa",
    unitId: 2,
    lessonId: 7,
    type: "trivia"
  },

  // --- UNIT 3 ---
  {
    question: "How many African countries share borders with Sudan in Book 9?",
    answers: ["Seven countries", "Nine countries", "Five countries", "Eleven countries"],
    correctAnswer: "Seven countries",
    unitId: 3,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Which country is the second largest in the world (with Sudan being the third largest in Africa)?",
    answers: ["Canada", "Russia", "China", "Kuwait"],
    correctAnswer: "Canada",
    unitId: 3,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "What is the largest sand desert in the world, located in Saudi Arabia?",
    answers: ["Rub' al Khali", "Sahara", "Gobi", "Kalahari"],
    correctAnswer: "Rub' al Khali",
    unitId: 3,
    lessonId: 4,
    type: "trivia"
  },
  {
    question: "For how many years did the famous Arab traveler Ibn Battuta explore the world?",
    answers: ["29 years", "10 years", "50 years", "5 years"],
    correctAnswer: "29 years",
    unitId: 3,
    lessonId: 8,
    type: "trivia"
  },

  // --- UNIT 4 ---
  {
    question: "What is a worker who learns a practical skill like repairing car engines called?",
    answers: ["An apprentice", "A pilot", "An engineer", "A novelist"],
    correctAnswer: "An apprentice",
    unitId: 4,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "In what year was the United Nations Convention on the Rights of the Child agreed?",
    answers: ["1990", "2005", "1974", "1956"],
    correctAnswer: "1990",
    unitId: 4,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Who has been a pilot for Sudan Air since the year 1999?",
    answers: ["Captain Bakri", "Abdelrahman", "Ibrahim El-Salahi", "Huda"],
    correctAnswer: "Captain Bakri",
    unitId: 4,
    lessonId: 6,
    type: "trivia"
  },

  // --- UNIT 5 ---
  {
    question: "Which main Sudanese crop is used to make traditional bread or Kissra?",
    answers: ["Sorghum", "Sunflowers", "Wheat", "Bananas"],
    correctAnswer: "Sorghum",
    unitId: 5,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "What percentage of Sudan's population has jobs in the agricultural sector?",
    answers: ["Three-quarters (75%)", "One-quarter (25%)", "Half (50%)", "Ten percent (10%)"],
    correctAnswer: "Three-quarters (75%)",
    unitId: 5,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How many different types of bees work inside a single active beehive?",
    answers: ["Three types (one queen, male drones, female workers)", "Only one type (worker bees)", "Ten different types", "Two types (queen and king bees)"],
    correctAnswer: "Three types (one queen, male drones, female workers)",
    unitId: 5,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "Approximately how many years ago did farming begin in the Middle East?",
    answers: ["12,000 years ago", "1,000 years ago", "50,000 years ago", "500 years ago"],
    correctAnswer: "12,000 years ago",
    unitId: 5,
    lessonId: 8,
    type: "trivia"
  },

  // --- UNIT 6 ---
  {
    question: "According to the clothes shop notice, how long do customers have to refund clothes?",
    answers: ["Fourteen days", "Two days", "One year", "No refunds allowed"],
    correctAnswer: "Fourteen days",
    unitId: 6,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Where is the Mango Melts candy radio advert broadcasted in Sudan?",
    answers: ["In Kassala", "In Khartoum", "In Port Sudan", "In Nyala"],
    correctAnswer: "In Kassala",
    unitId: 6,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Omdurman market is famous throughout Africa for selling what?",
    answers: ["Traditional handicrafts of ebony, silver, gold, and leather", "Modern computers", "Imported spaceships", "Wheat harvesting machines"],
    correctAnswer: "Traditional handicrafts of ebony, silver, gold, and leather",
    unitId: 6,
    lessonId: 6,
    type: "trivia"
  },

  // --- UNIT 7 ---
  {
    question: "What sport does Azza play in the school sports competition?",
    answers: ["Volleyball", "Running", "Archery", "Swimming"],
    correctAnswer: "Volleyball",
    unitId: 7,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "What was the previous name of the University of Khartoum before 1956?",
    answers: ["Gordon Memorial College", "Sankore University", "Bologna College", "Khartoum School"],
    correctAnswer: "Gordon Memorial College",
    unitId: 7,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "How much does the average adult human brain weigh?",
    answers: ["1.5 kg (using 20% of our energy)", "5 kg (using 50% of our energy)", "0.5 kg (using 5% of our energy)", "3 kg (using 10% of our energy)"],
    correctAnswer: "1.5 kg (using 20% of our energy)",
    unitId: 7,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "Which is the oldest active university in the world, founded in Morocco in 859?",
    answers: ["University of Karaouine", "University of Nalanda", "University of Bologna", "University of Khartoum"],
    correctAnswer: "University of Karaouine",
    unitId: 7,
    lessonId: 8,
    type: "trivia"
  },

  // --- UNIT 8 ---
  {
    question: "Who won the Olympic gold medal barefoot in Rome in 1960?",
    answers: ["Abebe Bikila", "Alexander Fleming", "Vasco da Gama", "Ibn Majid"],
    correctAnswer: "Abebe Bikila",
    unitId: 8,
    lessonId: 2,
    type: "trivia"
  },
  {
    question: "Who discovered the first life-saving antibiotic, penicillin, by accident in 1928?",
    answers: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"],
    correctAnswer: "Alexander Fleming",
    unitId: 8,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Which famous Arab sailor was known as the 'Lion of the Seas'?",
    answers: ["Ibn Majid", "Ibn Battuta", "Sulaiman Al-Mahri", "Ibn Al-Masudi"],
    correctAnswer: "Ibn Majid",
    unitId: 8,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "What was Juha doing under the bright streetlamp in the funny Arabic story?",
    answers: ["Searching for a gold coin lost in a dark street", "Drinking hot mint tea", "Reading a science encyclopedia", "Selling traditional leather shoes"],
    correctAnswer: "Searching for a gold coin lost in a dark street",
    unitId: 8,
    lessonId: 8,
    type: "trivia"
  }
];

export function generateQuiz(
  scope: "all" | "unit" | "lesson",
  targetUnitId: number,
  targetLessonId: number,
  limit: number
): { question: string; answers: string[]; correctAnswer: string; badge: string }[] {
  
  let pool: ConfiguredQuestion[] = [];

  if (scope === "all") {
    pool = HANDCRAFTED_TRIVIA.filter((t) => SMILE_UNITS.some(u => u.id === t.unitId));
  } else if (scope === "unit") {
    pool = HANDCRAFTED_TRIVIA.filter((t) => t.unitId === targetUnitId);
  } else if (scope === "lesson") {
    pool = HANDCRAFTED_TRIVIA.filter(
      (t) => t.unitId === targetUnitId && (t.lessonId === targetLessonId || t.lessonId === null)
    );
  }

  const finalQuestions: { question: string; answers: string[]; correctAnswer: string; badge: string }[] = pool.map((item) => ({
    question: item.question,
    answers: item.answers,
    correctAnswer: item.correctAnswer,
    badge: `UNIT ${item.unitId} • LESSON ${item.lessonId || "Book"}`
  }));

  const activeUnitIds = scope === "all" 
    ? SMILE_UNITS.map(u => u.id) 
    : [targetUnitId];

  const targetWords = SMILE_UNITS
    .filter(u => activeUnitIds.includes(u.id))
    .flatMap(u => u.words);

  // Dynamic Generator Type A: Image emoji matching
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 60) return;
    
    const allDistractors = targetWords
      .filter((w) => w.word !== wordObj.word)
      .map((w) => w.word);
    
    const uniqueDistractors = Array.from(new Set(allDistractors));
    const randomDistractors = uniqueDistractors.sort(() => Math.random() - 0.5).slice(0, 3);
    
    const answers = [wordObj.word, ...randomDistractors].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Which Book 9 intermediate vocabulary word matches this emoji: ${wordObj.image}?`,
        answers,
        correctAnswer: wordObj.word,
        badge: `VOCAB • UNIT ${wordObj.unit}`
      });
    }
  });

  // Dynamic Generator Type B: First letter spelling match
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 100) return;

    const firstLetter = wordObj.word.charAt(0).toUpperCase();
    const otherWordsWithDifferentStarts = targetWords
      .filter((w) => w.word.charAt(0).toUpperCase() !== firstLetter)
      .map((w) => w.word);

    const uniqueOthers = Array.from(new Set(otherWordsWithDifferentStarts));
    const randomOthers = uniqueOthers.sort(() => Math.random() - 0.5).slice(0, 3);

    const answers = [wordObj.word, ...randomOthers].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Identify the textbook word starting with letter '${firstLetter}' (hint: ${wordObj.image}):`,
        answers,
        correctAnswer: wordObj.word,
        badge: `SPELLING • UNIT ${wordObj.unit}`
      });
    }
  });

  // Dynamic Generator Type C: Example sentence matching
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 140) return;

    const sentenceHint = wordObj.example;
    const allOtherExamples = targetWords
      .filter((w) => w.word !== wordObj.word)
      .map((w) => w.word);

    const uniqueOthers = Array.from(new Set(allOtherExamples));
    const randomOthers = uniqueOthers.sort(() => Math.random() - 0.5).slice(0, 3);

    const answers = [wordObj.word, ...randomOthers].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Which textbook term fits correctly in this context sentence: "${sentenceHint}"?`,
        answers,
        correctAnswer: wordObj.word,
        badge: `EXAMPLE • UNIT ${wordObj.unit}`
      });
    }
  });

  // De-duplicate final questions by question text to ensure no repetition
  const uniqueQuestionsMap = new Map<string, typeof finalQuestions[0]>();
  finalQuestions.forEach(q => {
    const key = q.question.trim().toLowerCase();
    if (!uniqueQuestionsMap.has(key)) {
      uniqueQuestionsMap.set(key, q);
    }
  });

  const randomizedSubset = Array.from(uniqueQuestionsMap.values())
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(limit, 30));

  return randomizedSubset;
}
