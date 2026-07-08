import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface SearchResult {
  reply: string;
  voiceText: string;
  matchedWords: WordItem[];
  matchedLessons: { lesson: Lesson; unitId: number; unitTitle: string }[];
  matchedUnits: UnitItem[];
  suggestions: string[];
}

// Normalizes Arabic text (for backwards compatibility if any Arabic queries occur)
function normalizeArabic(text: string): string {
  if (!text) return "";
  return text
    .replace(/[\u064B-\u0652]/g, "") // Remove harakat (tashkeel)
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .toLowerCase()
    .trim();
}

export function searchSMILECurriculum(query: string): SearchResult {
  const normQuery = query.toLowerCase().trim();
  const normQueryAr = normalizeArabic(query);
  
  const result: SearchResult = {
    reply: "",
    voiceText: "",
    matchedWords: [],
    matchedLessons: [],
    matchedUnits: [],
    suggestions: [
      "What is Chemistry? 🧪",
      "Who is Isaac Newton? 🍎",
      "Benefits of Fenugreek? 🌱",
      "Explain Conditionals 📝",
      "What is Unit 3 about? 🗺️"
    ]
  };

  if (!normQuery) {
    result.reply = "Hello there! Ask me any question about vocabulary, grammar rules, famous figures, or lessons in your Grade 9 SMILE English syllabus and I will help you instantly! 🧠✨";
    result.voiceText = "Hello! Ask me any question about vocabulary, grammar rules, famous figures, or lessons in your Grade 9 SMILE English syllabus.";
    return result;
  }

  // 1. UNIT MATCHING (e.g., "unit 1", "unit 3", "unit 2")
  const unitKeywords = ["unit", "chapter", "module", "lesson", "وحده", "الوحده"];
  const isUnitQuery = unitKeywords.some(k => normQuery.includes(k) || normQueryAr.includes(k));
  
  let targetUnitNum = 0;
  if (normQuery.includes("first") || normQuery.includes("one") || normQuery.includes("1") || normQueryAr.includes("اول")) targetUnitNum = 1;
  else if (normQuery.includes("second") || normQuery.includes("two") || normQuery.includes("2") || normQueryAr.includes("ثان")) targetUnitNum = 2;
  else if (normQuery.includes("third") || normQuery.includes("three") || normQuery.includes("3") || normQueryAr.includes("ثالث")) targetUnitNum = 3;
  else if (normQuery.includes("fourth") || normQuery.includes("four") || normQuery.includes("4") || normQueryAr.includes("رابع")) targetUnitNum = 4;
  else if (normQuery.includes("fifth") || normQuery.includes("five") || normQuery.includes("5") || normQueryAr.includes("خامس")) targetUnitNum = 5;
  else if (normQuery.includes("sixth") || normQuery.includes("six") || normQuery.includes("6") || normQueryAr.includes("سادس")) targetUnitNum = 6;
  else if (normQuery.includes("seventh") || normQuery.includes("seven") || normQuery.includes("7") || normQueryAr.includes("سابع")) targetUnitNum = 7;
  else if (normQuery.includes("eighth") || normQuery.includes("eight") || normQuery.includes("8") || normQueryAr.includes("ثامن")) targetUnitNum = 8;

  if (isUnitQuery && targetUnitNum > 0) {
    const matchedUnit = SMILE_UNITS.find(u => u.id === targetUnitNum);
    if (matchedUnit) {
      result.matchedUnits.push(matchedUnit);
      result.reply = `✨ **Unit ${matchedUnit.id}: ${matchedUnit.title} (${matchedUnit.arabicTitle})**\n\nThis unit contains wonderful and useful lessons! Here are the lessons:\n` + 
        matchedUnit.lessons.map(l => `• **${l.title}**`).join("\n") + 
        `\n\n💡 You can click any of these lessons in the book view list on the left to read and learn!`;
      result.voiceText = `Unit ${matchedUnit.id} is about ${matchedUnit.title}. It has ${matchedUnit.lessons.length} lessons.`;
      
      result.suggestions = matchedUnit.lessons.slice(0, 3).map(l => l.title);
      return result;
    }
  }

  // 2. GRAMMAR MATCHING (e.g., "conditional", "zero", "first", "grammar", "pronoun", "who", "which")
  const grammarKeywords = ["rule", "grammar", "conditional", "pronoun", "relative", "reflexive", "myself", "who", "which", "that", "قواعد", "قاعده"];
  const isGrammarQuery = grammarKeywords.some(k => normQuery.includes(k) || normQueryAr.includes(normalizeArabic(k)));

  if (isGrammarQuery) {
    if (normQuery.includes("zero") || normQuery.includes("scientific") || normQuery.includes("fact") || normQueryAr.includes("صفري")) {
      result.reply = `📝 **Zero Conditional Rules:**\n\nUsed to express general truths, habits, and scientific facts.\n\n**Structure:**\n` +
        `\`If / When + Present Simple -> Present Simple\`\n\n` +
        `**Examples from your book:**\n` +
        `• *If you heat ice, it melts.*\n` +
        `• *Plants die if they don't get enough water.*\n` +
        `• *Salt dissolves when you put it in water.*`;
      result.voiceText = "Zero conditional is used for scientific facts and general truths. For example: If you heat ice, it melts.";
      result.suggestions = ["First Conditional", "Relative Pronouns"];
      return result;
    }

    if (normQuery.includes("first") || normQuery.includes("future") || normQueryAr.includes("الاول") || normQuery.includes("conditional 1")) {
      result.reply = `📝 **First Conditional Rules:**\n\nUsed to express possible future situations and their probable results.\n\n**Structure:**\n` +
        `\`If + Present Simple -> will + Infinitive (verb)\`\n\n` +
        `**Example from your book:**\n` +
        `• *If your body doesn't have enough calcium, your bones will be weaker.*\n  *(If your body lacks calcium, your bones will suffer)*`;
      result.voiceText = "First conditional is used for possible future events. If your body doesn't have enough calcium, your bones will be weaker.";
      result.suggestions = ["Zero Conditional", "Reflexive Pronouns"];
      return result;
    }

    if (normQuery.includes("relative") || normQuery.includes("who") || normQuery.includes("which") || normQuery.includes("that") || normQueryAr.includes("موصول")) {
      result.reply = `📝 **Relative Pronouns (who, which, that):**\n\nThese are used to connect sentences and give more information about nouns:\n\n` +
        `1. **Who**: Used for people.\n` +
        `2. **Which / That**: Used for things and animals.\n\n` +
        `**Examples from your book:**\n` +
        `• *It is a loose traditional white clothing that/which is worn by Arab men.*\n` +
        `• *Alexander Graham Bell was interested in sound because his wife was deaf.*`;
      result.voiceText = "Relative pronouns are who for people, and which or that for things. Like, clothing that is worn by men.";
      result.suggestions = ["Reflexive Pronouns", "Who is Graham Bell?"];
      return result;
    }

    if (normQuery.includes("reflexive") || normQuery.includes("myself") || normQuery.includes("ourselves") || normQuery.includes("yourself") || normQuery.includes("himself") || normQuery.includes("herself") || normQueryAr.includes("منعكس")) {
      result.reply = `📝 **Reflexive Pronouns:**\n\nThese are used when the subject and the object of the verb are the same person or thing:\n\n` +
        `• **I** -> myself\n` +
        `• **You** -> yourself / yourselves\n` +
        `• **He** -> himself\n` +
        `• **She** -> herself\n` +
        `• **We** -> ourselves\n` +
        `• **They** -> themselves\n\n` +
        `**Examples from your book:**\n` +
        `• *We can make high-quality wooden chairs ourselves.*\n` +
        `• *I made this chair myself!*`;
      result.voiceText = "Reflexive pronouns are like myself, yourself, and ourselves. We can make chairs ourselves!";
      result.suggestions = ["Unit 7 Lessons", "Relative Pronouns"];
      return result;
    }

    // General Grammar overview
    result.reply = `📚 **Grammar Guide for SMILE Grade 9 English:**\n\nI found these core grammar rules in your textbook:\n\n` +
      `1. **Zero Conditional** (Unit 1 - Scientific facts: present + present)\n` +
      `2. **First Conditional** (Unit 1 & 3 - Possible future: present + will)\n` +
      `3. **Relative Pronouns (who, which, that)** (Unit 2 - Joining sentences)\n` +
      `4. **Reflexive Pronouns (myself, ourselves...)** (Unit 7 - Action reflecting on subject)\n\n` +
      `💡 Ask about any rule (e.g. "Explain First Conditional") to see explanations and examples!`;
    result.voiceText = "Your grade 9 syllabus includes Zero Conditional, First Conditional, Relative Pronouns, and Reflexive Pronouns. Ask me about any of them!";
    result.suggestions = ["Zero Conditional", "First Conditional", "Reflexive Pronouns"];
    return result;
  }

  // 3. FAMOUS FIGURES MATCHING (e.g., "Newton", "Alexander", "Pasteur", "Curie", "Battuta", "Salahi", "Aboulela")
  const figures = [
    {
      names: ["bell", "alexander graham", "جراهام بيل", "telephone", "phone"],
      title: "Alexander Graham Bell 📞",
      bioText: "Alexander Graham Bell was a famous American inventor. He was deeply interested in sound because both his mother and wife were deaf. This inspired him to invent the telephone in 1876 to help people talk and connect across long distances.",
      englishText: "Alexander Graham Bell invented the telephone. His mother and wife were deaf so he was highly interested in sound.",
      unit: 1, lessonId: 2
    },
    {
      names: ["pasteur", "louis", "باستير", "pasteurisation", "vaccin"],
      title: "Louis Pasteur 🧪",
      bioText: "Louis Pasteur was a brilliant French chemist and microbiologist. He saved millions of lives through two discoveries: pasteurisation (boiling liquids like milk to destroy harmful bacteria) and vaccinations (to immunize humans and animals against lethal infectious diseases).",
      englishText: "Louis Pasteur discovered pasteurisation (boiling milk to kill bacteria) and vaccinations to stop people from becoming ill.",
      unit: 1, lessonId: 2
    },
    {
      names: ["curie", "marie", "كوري", "nobel", "radiation"],
      title: "Marie Curie ☢️",
      bioText: "Marie Curie was a pioneering Polish-French physicist and chemist. She is famous for her groundbreaking research on radioactivity. She was the first woman to win a Nobel Prize. Sadly, she died from radiation exposure in 1934.",
      englishText: "Marie Curie was the first woman to win the Nobel Prize for Physics. Sadly, she was killed by radiation in 1934.",
      unit: 1, lessonId: 2
    },
    {
      names: ["newton", "isaac", "نيوتن", "gravity", "calculus", "apple"],
      title: "Isaac Newton 🍎",
      bioText: "Sir Isaac Newton was an English mathematician and physicist who discovered gravity when he saw an apple fall in his garden. He formulated the laws of motion and invented calculus, a branch of mathematics, in England over 300 years ago.",
      englishText: "Isaac Newton discovered gravity and invented calculus in England 300 years ago.",
      unit: 1, lessonId: 2
    },
    {
      names: ["polo", "marco", "ماركو بولو", "china", "khan"],
      title: "Marco Polo 🤠",
      bioText: "Marco Polo was a famous merchant and explorer from Venice, Italy, born in 1254. At age 17, he traveled along the Silk Road to China, where he lived for 17 years under the emperor Kublai Khan. He returned and wrote a famous book about his Asian travels.",
      englishText: "Marco Polo was a Venetian explorer who traveled to China at age 17, spent 17 years with Kublai Khan, and wrote 'Travels of Marco Polo'.",
      unit: 3, lessonId: 5
    },
    {
      names: ["battuta", "ibn battuta", "ابن بطوطة", "traveler", "explorer"],
      title: "Ibn Battuta 🐫",
      bioText: "Ibn Battuta was the greatest Arab traveler in history. At age 21, he left Tangier in 1325 to go on Hajj, and ended up traveling for 29 years, covering over 73,000 miles across Africa, the Middle East, India, Southeast Asia, and China.",
      englishText: "Ibn Battuta is the most famous Arab traveler. He started in 1325 for Hajj and spent 29 years traveling across Africa and Asia.",
      unit: 3, lessonId: 8
    },
    {
      names: ["aboulela", "leila", "ليلى", "lyrics alley", "novelist", "writer"],
      title: "Leila Aboulela ✍️",
      bioText: "Leila Aboulela is an award-winning contemporary Sudanese writer born in Cairo in 1964 and raised in Khartoum. She writes beautifully about identity, migration, and culture. Her famous novel 'Lyrics Alley' was named the Scottish Book of the Year.",
      englishText: "Leila Aboulela is a famous Sudanese novelist born in 1964. Her novel 'Lyrics Alley' won the Scottish Book Award.",
      unit: 2, lessonId: 3
    },
    {
      names: ["salahi", "el-salahi", "ibrahim", "الصلحي", "artist", "khartoum school"],
      title: "Ibrahim El-Salahi 🎨",
      bioText: "Ibrahim El-Salahi is a world-renowned Sudanese modern artist born in Omdurman in 1930. He studied art in Khartoum and London and became a pioneer of the Khartoum School of modern art. His early love for art was inspired by writing and decorating wooden boards (Loh) in traditional Quranic schools.",
      englishText: "Ibrahim El-Salahi is a world-famous Sudanese artist born in Omdurman in 1930, leader of the Khartoum School.",
      unit: 2, lessonId: 7
    },
    {
      names: ["mahjoub", "jamal", "جمال", "the carrier", "astronomer", "parker bilal"],
      title: "Jamal Mahjoub ✍️",
      bioText: "Jamal Mahjoub is a prominent Sudanese-British writer born in London in 1960. He wrote several novels including 'The Carrier' about astronomy and navigation. He also writes popular crime detective stories under the pen name Parker Bilal.",
      englishText: "Jamal Mahjoub is a Sudanese-British writer born in 1960. He writes novels and detective stories under the name Parker Bilal.",
      unit: 2, lessonId: 8
    },
    {
      names: ["crusoe", "robinson", "روبنسون", "island", "thursday", "shipwreck"],
      title: "Robinson Crusoe 🏝️",
      bioText: "Robinson Crusoe is a famous story in your syllabus about a young Englishman who was shipwrecked on a remote desert island in 1659. He survived for years by building a shelter and farming. He rescued a companion whom he named 'Thursday', and eventually returned home in 1668.",
      englishText: "Robinson Crusoe was shipwrecked on a desert island in 1659, met Thursday, and returned home in 1668.",
      unit: 2, lessonId: 5
    }
  ];

  for (const fig of figures) {
    if (fig.names.some(name => normQuery.includes(name) || normQueryAr.includes(normalizeArabic(name)))) {
      result.reply = `👤 **Famous Biography: ${fig.title}**\n\n` +
        `**Overview:**\n${fig.bioText}\n\n` +
        `**Key Quote from Textbook:**\n*"${fig.englishText}"*\n\n` +
        `💡 This figure is covered in **Unit ${fig.unit}, Lesson ${fig.lessonId}**!`;
      result.voiceText = fig.englishText;
      result.suggestions = ["Science and Scientists 🔬", "Art and Literature 🎨", "Who is Isaac Newton? 🍎"];
      
      const unit = SMILE_UNITS.find(u => u.id === fig.unit);
      const lesson = unit?.lessons.find(l => l.id === fig.lessonId);
      if (lesson && unit) {
        result.matchedLessons.push({ lesson, unitId: unit.id, unitTitle: unit.title });
      }
      return result;
    }
  }

  // 4. MEDICINE AND FOOD HERBS MATCHING (e.g., "fenugreek", "hibiscus", "rosemary", "sorghum")
  const herbs = [
    {
      names: ["fenugreek", "حلبه", "stomach", "cough", "diabetes"],
      title: "Fenugreek 🌿",
      description: "Fenugreek is an ancient medicinal herb. In Sudan and other regions, people mix its seeds with honey to soothe stomach aches, relieve persistent coughs, improve sleep quality, and help lower blood sugar levels in diabetes patients.",
      englishText: "Fenugreek seeds are mixed with honey to help stomach aches, reduce coughs, help sleep better, and reduce blood sugar in diabetes.",
      unit: 1, lessonId: 5
    },
    {
      names: ["hibiscus", "كركديه", "tea", "stress", "pressure"],
      title: "Hibiscus 🌺",
      description: "Hibiscus (Karkadeh) is a beloved traditional Sudanese drink made from beautiful red dried flowers. Hibiscus tea is famous for helping people relax, reducing stress, and lowering high blood pressure.",
      englishText: "Hibiscus tea helps relax and is good for stress and pressure.",
      unit: 1, lessonId: 5
    },
    {
      names: ["rosemary", "اكليل", "memory", "skin", "youthful"],
      title: "Rosemary 🌱",
      description: "Rosemary is a highly aromatic herb used in cooking to add flavor to food. It is also beneficial for skin rejuvenation, improves memory/concentration, and helps individuals feel youthful and active.",
      englishText: "Rosemary is used in cooking, good for skin, helps remember things and feel young!",
      unit: 1, lessonId: 5
    },
    {
      names: ["sorghum", "ذرة", "ذره", "bread", "asida", "crop"],
      title: "Sorghum 🌾",
      description: "Sorghum (Dura) is one of the most critical agricultural food crops in Sudan. It is used to bake traditional local flatbread (Kisra) and make traditional foods like porridge (Asida), which feeds millions of families.",
      englishText: "Sorghum is a main Sudanese crop used to make bread and traditional food.",
      unit: 5, lessonId: 3
    },
    {
      names: ["honey", "عسل", "bee", "hive", "queen", "nectar"],
      title: "Honey & Bees 🐝",
      description: "Honey is a wonderful natural food and medicine. Bees live in highly organized hives with a Queen bee laying thousands of eggs, while female worker bees fly out to collect nectar from flowers to produce sweet and healthy honey.",
      englishText: "Female worker bees collect flower nectar to make delicious honey, a sweet and healthy treat.",
      unit: 5, lessonId: 6
    }
  ];

  for (const herb of herbs) {
    if (herb.names.some(name => normQuery.includes(name) || normQueryAr.includes(normalizeArabic(name)))) {
      result.reply = `🌿 **Medical & Herbal Fact: ${herb.title}**\n\n` +
        `**Description:**\n${herb.description}\n\n` +
        `**From your Textbook:**\n*"${herb.englishText}"*\n\n` +
        `💡 This fact is covered in **Unit ${herb.unit}, Lesson ${herb.lessonId}**!`;
      result.voiceText = herb.englishText;
      result.suggestions = ["Benefits of Fenugreek? 🌱", "Benefits of Hibiscus? 🌺", "Sorghum Food 🌾"];
      
      const unit = SMILE_UNITS.find(u => u.id === herb.unit);
      const lesson = unit?.lessons.find(l => l.id === herb.lessonId);
      if (lesson && unit) {
        result.matchedLessons.push({ lesson, unitId: unit.id, unitTitle: unit.title });
      }
      return result;
    }
  }

  // 5. VOCABULARY WORD MATCHING (Scan all vocabulary words in the whole syllabus)
  let bestWordMatch: WordItem | null = null;
  let wordUnit: UnitItem | null = null;
  
  for (const unit of SMILE_UNITS) {
    for (const w of unit.words) {
      if (
        w.word.toLowerCase() === normQuery || 
        normalizeArabic(w.arabic) === normQueryAr ||
        w.word.toLowerCase().includes(normQuery) && normQuery.length > 3 ||
        normalizeArabic(w.arabic).includes(normQueryAr) && normQueryAr.length > 2
      ) {
        bestWordMatch = w;
        wordUnit = unit;
        break;
      }
    }
    if (bestWordMatch) break;
  }

  if (bestWordMatch && wordUnit) {
    result.matchedWords.push(bestWordMatch);
    result.reply = `✨ **Dictionary Entry: ${bestWordMatch.image} ${bestWordMatch.word}**\n\n` +
      `• **Arabic Meaning:** ${bestWordMatch.arabic}\n` +
      `• **Example Sentence from Textbook:**\n` +
      `  *"${bestWordMatch.example}"*\n\n` +
      `💡 This vocabulary item is a key word in **Unit ${bestWordMatch.unit}: ${wordUnit.title} (${wordUnit.arabicTitle})**!`;
    result.voiceText = `${bestWordMatch.word} means ${bestWordMatch.arabic}. For example: ${bestWordMatch.example}`;
    
    // Suggest other words from the same unit
    result.suggestions = wordUnit.words.filter(w => w.id !== bestWordMatch?.id).slice(0, 3).map(w => `${w.word}`);
    return result;
  }

  // 6. LESSON TEXT COMPREHENSIVE SEARCH (Scan all titles and text within lessons)
  let foundLessonMatch = false;
  for (const unit of SMILE_UNITS) {
    for (const lesson of unit.lessons) {
      const titleMatch = lesson.title.toLowerCase().includes(normQuery) || normalizeArabic(lesson.title).includes(normQueryAr);
      const songTextMatch = lesson.content.songText?.toLowerCase().includes(normQuery) || normalizeArabic(lesson.content.songText || "").includes(normQueryAr);
      
      let dialogueMatch = false;
      if (lesson.content.dialogue) {
        dialogueMatch = lesson.content.dialogue.some(d => 
          d.text.toLowerCase().includes(normQuery) || 
          normalizeArabic(d.text).includes(normQueryAr) ||
          d.speaker.toLowerCase().includes(normQuery)
        );
      }

      if (titleMatch || songTextMatch || dialogueMatch) {
        result.matchedLessons.push({ lesson, unitId: unit.id, unitTitle: unit.title });
        foundLessonMatch = true;
      }
    }
  }

  if (foundLessonMatch) {
    const primary = result.matchedLessons[0];
    let excerpt = "";
    if (primary.lesson.content.songText) {
      const lines = primary.lesson.content.songText.split("\n");
      const matchedLine = lines.find(l => l.toLowerCase().includes(normQuery) || normalizeArabic(l).includes(normQueryAr));
      if (matchedLine) {
        excerpt = `\n\n📖 **Excerpt from lesson:**\n> *"${matchedLine.trim()}"*`;
      }
    }

    result.reply = `🔍 **I found "${query}" in these lessons in your book:**\n\n` +
      result.matchedLessons.slice(0, 3).map(ml => `• **${ml.lesson.title}** (Unit ${ml.unitId}: ${ml.unitTitle})`).join("\n") +
      excerpt + 
      `\n\n💡 You can click these lessons in the book view list to read and listen to them!`;
    
    result.voiceText = `I found matches for ${query} in ${primary.lesson.title}.`;
    result.suggestions = ["Chemistry 🧪", "Explain Conditionals", "Unit 1 🔬"];
    return result;
  }

  // 7. DEFAULT FALLBACK RESPONSE (Encouraging and helpful)
  result.reply = `😊 Sorry! I couldn't find an exact match for **"${query}"** in your Grade 9 textbook content.\n\n**But don't worry! Try searching for one of these topics from your syllabus:**\n` +
    `• Type **Chemistry** or **wise** to see dictionary definitions and examples.\n` +
    `• Type **Newton** or **Leila** to learn about inspiring historical people.\n` +
    `• Type **Zero Conditional** or **Reflexive Pronouns** to learn grammar rules.\n` +
    `• Type **Fenugreek** or **Hibiscus** to explore traditional health facts in Sudan.`;
  result.voiceText = "I couldn't find an exact match, but you can search for Chemistry, Newton, or Zero Conditional!";
  result.suggestions = ["Chemistry 🧪", "Isaac Newton 🍎", "Fenugreek 🌱", "Explain Conditionals"];

  return result;
}
