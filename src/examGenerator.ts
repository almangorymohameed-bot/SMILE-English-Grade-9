import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ExamPassage {
  title: string;
  text: string;
  unitId: number;
  questions: Array<{
    question: string;
    answer: string;
    options?: string[];
    isTrueFalse?: boolean;
    correctTF?: "True" | "False";
  }>;
}

export interface SpellingQuestion {
  word: string;
  clue: string;
  gapped: string; // e.g. "c h _ m _ s t r y"
  unitId: number;
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correct: string;
  unitId: number;
}

export interface WritingQuestion {
  jumbled: string;
  ordered: string;
  unitId: number;
}

export interface ExamPaper {
  id: string;
  passage: ExamPassage;
  spelling: SpellingQuestion[];
  vocabMatching: Array<{ word: string; definitionOrSentence: string }>;
  grammar: GrammarQuestion[];
  writing: WritingQuestion[];
}

// Pre-defined exam passages based on Book 9 curriculum lessons
const PASSAGES: ExamPassage[] = [
  {
    title: "The Importance of Science at School",
    text: "At school, science usually consists of three core subjects: Chemistry, Biology, and Physics. Understanding science makes life easier because it helps us learn about the world around us. Scientists often do interesting experiments in laboratories to check their ideas and make new discoveries. Great historical figures like Isaac Newton discovered gravity, while Louis Pasteur created vaccinations to protect people from dangerous illnesses.",
    unitId: 1,
    questions: [
      { question: "What are the three core subjects of school science?", answer: "Chemistry, Biology, and Physics." },
      { question: "Why does understanding science make our life easier?", answer: "Because it helps us learn about the world around us." },
      { question: "Scientists do experiments in laboratories to check their ideas.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "Isaac Newton is famous for discovering the telephone.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  },
  {
    title: "The Wise Fox's Division",
    text: "A lion, a hyena, and a fox went hunting together in the desert. They caught a donkey, a gazelle, and a rabbit. The lion asked the hyena to divide the food. The hyena said, 'The donkey is for you, the gazelle is for me, and the rabbit is for the fox.' The lion jumped up angrily and hit the hyena, killing him. Then, the wise fox said, 'The donkey is for your breakfast, the gazelle is for your lunch, and the rabbit is for your dinner.' The lion was very pleased.",
    unitId: 2,
    questions: [
      { question: "Which three animals went hunting together in the desert?", answer: "A lion, a hyena, and a fox." },
      { question: "What food division did the clever fox suggest to the lion?", answer: "The donkey for breakfast, the gazelle for lunch, and the rabbit for dinner." },
      { question: "The lion was happy with the hyena's food division.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The wise fox saved his own life by being clever.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Omdurman Traditional Market",
    text: "Omdurman Market is the largest and most famous market in Sudan. It is almost two hundred years old and is known as the 'beating heart' of the city. Visitors from all over the world can find beautiful traditional handicrafts made of ebony wood, shiny silver, pure gold, and fine leather. Before the Eid holidays, the market becomes a busy, exciting maze full of customers buying clothes and fabrics.",
    unitId: 6,
    questions: [
      { question: "What is Omdurman Market known as?", answer: "The beating heart of the city." },
      { question: "What kind of traditional handicrafts can visitors find at the market?", answer: "Handicrafts made of ebony wood, silver, gold, and leather." },
      { question: "Omdurman Market is very modern and is only two years old.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The market is extremely busy before the Eid holidays.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "The Incredible Human Brain",
    text: "The brain of an adult human weighs around 1.5 kilograms. Although it is just two percent of our total body weight, it consumes a massive twenty percent of our daily energy. The human brain is faster than the most powerful computers, and it produces enough electricity to power a small light bulb. Studies show that regular physical exercise makes you cleverer by increasing blood flow to your brain.",
    unitId: 7,
    questions: [
      { question: "How much does the average adult human brain weigh?", answer: "Around 1.5 kilograms." },
      { question: "What percentage of our body's energy does the brain use?", answer: "Twenty percent (20%)." },
      { question: "The human brain is slower than modern computers.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Physical exercise helps make you cleverer.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  }
];

const SPELLING_POOL: SpellingQuestion[] = [
  { word: "CHEMISTRY", clue: "The science of substances and liquid reactions", gapped: "c h _ m _ s t r y", unitId: 1 },
  { word: "BIOLOGY", clue: "The scientific study of plants and living things", gapped: "b _ o l o _ y", unitId: 1 },
  { word: "PHYSICS", clue: "The study of forces, gravity, and electricity", gapped: "p h _ s _ c s", unitId: 1 },
  { word: "JALLABIYA", clue: "A traditional loose white dress worn by Arab men", gapped: "j a l _ a b _ y a", unitId: 2 },
  { word: "CALLIGRAPHY", clue: "The art of beautiful writing used in mosques", gapped: "c a l _ i g r _ p h y", unitId: 2 },
  { word: "HOSPITALITY", clue: "Welcoming guests and sharing food generously", gapped: "h o s p _ t a l _ t y", unitId: 3 },
  { word: "EXPLORER", clue: "A person who travels to discover new places like Ibn Battuta", gapped: "e x p _ o r _ r", unitId: 3 },
  { word: "APPRENTICE", clue: "A student learning a practical job in a kitchen or garage", gapped: "a p p _ e n t _ c e", unitId: 4 },
  { word: "SORGHUM", clue: "The main grain used to bake traditional Sudanese bread", gapped: "s o r _ h _ m", unitId: 5 },
  { word: "DISCOUNT", clue: "A reduction in price at a clothing store", gapped: "d _ s c o _ n t", unitId: 6 },
  { word: "UNIVERSITY", clue: "The place of high learning like University of Khartoum", gapped: "u n _ v e r s _ t y", unitId: 7 },
  { word: "PENICILLIN", clue: "A life-saving medicine discovered by Alexander Fleming", gapped: "p e n _ c i l _ i n", unitId: 8 }
];

const GRAMMAR_POOL: GrammarQuestion[] = [
  { question: "If you heat ice, it ________.", options: ["melts", "melted", "melting"], correct: "melts", unitId: 1 },
  { question: "If your body ________ enough calcium, your bones will be weaker.", options: ["doesn't have", "don't have", "won't have"], correct: "doesn't have", unitId: 1 },
  { question: "Alexander Graham Bell was interested in sound ________ his mother was deaf.", options: ["because", "although", "but"], correct: "because", unitId: 1 },
  { question: "While Robinson ________ on the island, he built a strong house.", options: ["was staying", "stays", "stayed"], correct: "was staying", unitId: 2 },
  { question: "Leila Aboulela is the novelist ________ won the Caine Prize.", options: ["who", "which", "whose"], correct: "who", unitId: 2 },
  { question: "Sudan is ________ country than Vatican City.", options: ["a larger", "the largest", "large"], correct: "a larger", unitId: 3 },
  { question: "Have you ever ________ on a big boat?", options: ["been", "went", "going"], correct: "been", unitId: 3 },
  { question: "Huda has been a doctor ________ three years.", options: ["for", "since", "yet"], correct: "for", unitId: 4 },
  { question: "Captain Bakri has been a pilot ________ 1999.", options: ["since", "for", "already"], correct: "since", unitId: 4 },
  { question: "We hope ________ a new tractor for our Gezira farm.", options: ["to get", "getting", "got"], correct: "to get", unitId: 5 },
  { question: "There are only a ________ sweets left in the glass jar.", options: ["few", "little", "much"], correct: "few", unitId: 5 },
  { question: "Samira says her ambition ________ to expand her business.", options: ["is", "are", "was"], correct: "is", unitId: 6 }
];

const WRITING_POOL: WritingQuestion[] = [
  { jumbled: "dissolves / Salt / you / when / water / in / put / it / .", ordered: "Salt dissolves when you put it in water.", unitId: 1 },
  { jumbled: "skeleton / bones / All / the / called / are / the / .", ordered: "All the bones are called the skeleton.", unitId: 1 },
  { jumbled: "fox / divided / The / food / the / fairly / .", ordered: "The fox divided the food fairly.", unitId: 2 },
  { jumbled: "Bikila / barefoot / won / Rome / in / gold / .", ordered: "Bikila won gold barefoot in Rome.", unitId: 8 },
  { jumbled: "largest / market / is / Omdurman / Sudan / in / .", ordered: "Omdurman is largest market in Sudan.", unitId: 6 },
  { jumbled: "Oldest / university / in / Fez / is / active / .", ordered: "Oldest active university is in Fez.", unitId: 7 }
];

/**
 * Generates an array of non-overlapping A4 exam papers
 */
export function generateSudanExams(
  count: number,
  scope: "all" | "unit" | "lesson",
  targetUnitId?: number,
  targetLessonId?: number
): ExamPaper[] {
  const papers: ExamPaper[] = [];

  const usedPassageTitles = new Set<string>();
  const usedSpellingWords = new Set<string>();
  const usedVocabWords = new Set<string>();
  const usedGrammarQuestions = new Set<string>();
  const usedWritingJumbled = new Set<string>();

  for (let i = 0; i < count; i++) {
    // 1. FILTER PASSAGES
    let passagePool = [...PASSAGES];
    if (scope === "unit" && targetUnitId !== undefined) {
      passagePool = passagePool.filter((p) => p.unitId === targetUnitId);
    }
    let availablePassages = passagePool.filter((p) => !usedPassageTitles.has(p.title));
    if (availablePassages.length === 0) {
      availablePassages = passagePool.length > 0 ? passagePool : [...PASSAGES];
    }
    const passage = availablePassages[Math.floor(Math.random() * availablePassages.length)] || PASSAGES[0];
    usedPassageTitles.add(passage.title);

    // 2. FILTER SPELLING
    let spellingPool = [...SPELLING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      spellingPool = spellingPool.filter((s) => s.unitId === targetUnitId);
    }
    let availableSpelling = spellingPool.filter((s) => !usedSpellingWords.has(s.word));
    if (availableSpelling.length < 4) {
      availableSpelling = spellingPool.length >= 4 ? spellingPool : [...SPELLING_POOL];
    }
    const spellingShuffled = availableSpelling.sort(() => Math.random() - 0.5).slice(0, 4);
    spellingShuffled.forEach((s) => usedSpellingWords.add(s.word));

    // 3. FILTER VOCABULARY MATCHING
    let vocabWordsPool: WordItem[] = [];
    if (scope === "unit" && targetUnitId !== undefined) {
      const selectedUnit = SMILE_UNITS.find((u) => u.id === targetUnitId);
      if (selectedUnit) {
        vocabWordsPool = [...selectedUnit.words];
      }
    } else {
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    if (vocabWordsPool.length === 0) {
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    let availableVocab = vocabWordsPool.filter((v) => !usedVocabWords.has(v.word));
    if (availableVocab.length < 5) {
      availableVocab = vocabWordsPool;
    }

    const vocabSelection = availableVocab.sort(() => Math.random() - 0.5).slice(0, 5);
    vocabSelection.forEach((v) => usedVocabWords.add(v.word));

    const vocabMatching = vocabSelection.map((item) => {
      const regex = new RegExp(`\\b${item.word}\\b`, "gi");
      let sentence = item.example;
      if (regex.test(sentence)) {
        sentence = sentence.replace(regex, "________");
      } else {
        sentence = sentence.replace(item.word, "________");
        sentence = sentence.replace(item.word.toLowerCase(), "________");
      }
      return {
        word: item.word.toUpperCase(),
        definitionOrSentence: sentence
      };
    });

    // 4. FILTER GRAMMAR
    let grammarPool = [...GRAMMAR_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      grammarPool = grammarPool.filter((g) => g.unitId === targetUnitId);
    }
    let availableGrammar = grammarPool.filter((g) => !usedGrammarQuestions.has(g.question));
    if (availableGrammar.length < 5) {
      availableGrammar = grammarPool.length >= 5 ? grammarPool : [...GRAMMAR_POOL];
    }
    const grammarShuffled = availableGrammar.sort(() => Math.random() - 0.5).slice(0, 5);
    grammarShuffled.forEach((g) => usedGrammarQuestions.add(g.question));

    // 5. FILTER WRITING
    let writingPool = [...WRITING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      writingPool = writingPool.filter((w) => w.unitId === targetUnitId);
    }
    let availableWriting = writingPool.filter((w) => !usedWritingJumbled.has(w.jumbled));
    if (availableWriting.length < 2) {
      availableWriting = writingPool.length >= 2 ? writingPool : [...WRITING_POOL];
    }
    const writingShuffled = availableWriting.sort(() => Math.random() - 0.5).slice(0, 2);
    writingShuffled.forEach((w) => usedWritingJumbled.add(w.jumbled));

    papers.push({
      id: `paper-${i}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      passage,
      spelling: spellingShuffled,
      vocabMatching,
      grammar: grammarShuffled,
      writing: writingShuffled
    });
  }

  return papers;
}
