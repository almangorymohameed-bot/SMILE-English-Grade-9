import { UnitItem } from "./types";

export const SMILE_UNITS: UnitItem[] = [
  {
    id: 1,
    title: "People and Science",
    arabicTitle: "الناس والعلوم",
    color: "bg-sky-50 text-sky-950 border-sky-400",
    icon: "🔬",
    words: [
      { id: "w1-1", word: "Chemistry", arabic: "الكيمياء", image: "🧪", example: "At school, we learn about chemical reactions in Chemistry.", soundText: "At school, we learn about chemical reactions in Chemistry.", unit: 1 },
      { id: "w1-2", word: "Biology", arabic: "الأحياء", image: "🧬", example: "Biology is the study of living things and plants.", soundText: "Biology is the study of living things and plants.", unit: 1 },
      { id: "w1-3", word: "Physics", arabic: "الفيزياء", image: "🍎", example: "Physics helps us understand gravity and falling speeds.", soundText: "Physics helps us understand gravity and falling speeds.", unit: 1 },
      { id: "w1-4", word: "Skeleton", arabic: "الهيكل العظمي", image: "💀", example: "All the bones in the body are called the skeleton.", soundText: "All the bones in the body are called the skeleton.", unit: 1 },
      { id: "w1-5", word: "Calcium", arabic: "الكالسيوم", image: "🥛", example: "Bones need calcium from milk to stay strong.", soundText: "Bones need calcium from milk to stay strong.", unit: 1 },
      { id: "w1-6", word: "Thermometer", arabic: "ميزان الحرارة", image: "🌡️", example: "A thermometer is used to measure temperature when we are ill.", soundText: "A thermometer is used to measure temperature when we are ill.", unit: 1 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: What is Science?",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Einas", text: "Why do we study science, Zeinab?", voice: "Kore" },
            { speaker: "Zeinab", text: "We study science because it helps us to learn about the world around us.", voice: "Zephyr" },
            { speaker: "Einas", text: "Ice melts when you heat it, and salt dissolves in water.", voice: "Kore" },
            { speaker: "Zeinab", text: "Yes! Plants die if they do not get enough water. That is the Zero Conditional!", voice: "Zephyr" }
          ],
          songText: "🔬 What is Science?\nAt school, science usually consists of Chemistry, Physics and Biology, but science is much more than these. Understanding science makes life easier. Scientists often do experiments to check their ideas and make new discoveries.\n\nDo you know these facts?\n• Ice melts when you heat it.\n• Salt dissolves when you put it in water.\n• Plants die if they don't get enough water.\n• Water boils at 100 degrees centigrade.\n• Different things fall to the ground at the same speed.\n\n📖 Look! Zero conditional:\n• If you heat ice... it melts.\n• Salt dissolves when you put it in water.\n• Plants die if they don't get enough water."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Famous Scientists",
        type: "vocab",
        content: {
          songText: "👥 Famous Scientists from history:\n\n• Alexander Graham Bell: mother and wife were deaf so he was interested in sound. He invented the telephone.\n• Louis Pasteur: made two important discoveries: pasteurisation (boiling liquids like milk to kill bacteria) and vaccinations.\n• Marie Curie: first woman to win the Nobel Prize for Physics. Sadly, she was killed by radiation in 1934.\n• Isaac Newton: discovered gravity and invented calculus in England 300 years ago.\n\n📖 Answer the questions:\n• Who invented the telephone? -> Alexander Graham Bell\n• Who helped to stop people from becoming ill? -> Louis Pasteur\n• Who discovered gravity? -> Isaac Newton\n• Who won Nobel prizes? -> Marie Curie"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Bones",
        type: "song",
        content: {
          songText: "💀 Bones Facts:\nAll the bones in the body are called the skeleton.\n\n• When born we have 270 bones, but adults only have 206 bones because bones join together!\n• Bones protect our body: the head protects the brain and the ribs protect the heart.\n• Bones help us move and support our muscles.\n• 70 percent of bones are made of calcium. If your body doesn't have enough calcium, your bones will be weaker.\n• Bones meet in joints. Smallest bones are in the ear.\n\n📖 Look! First conditional:\n• If your body doesn't have enough calcium, your bones will be weaker."
        }
      },
      {
        id: 4,
        title: "Lesson 4: How to Measure",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Khalifa", text: "How big is the bag?", voice: "Kore" },
            { speaker: "Osman", text: "We can carry three kilograms in it.", voice: "Zephyr" }
          ],
          songText: "📏 How to Measure Things:\n\n• Thermometer: We use this to measure the temperature of the weather or check body temperature when we are ill.\n• Measuring tape: Helps you know how long something is or the distance between things.\n• Measuring jug: Used to measure liquids by pouring them in.\n• Speedometer: Look at this in a car or motorbike to measure speed.\n• Weighing scale: Found in kitchens or food shops to measure the weight of something."
        }
      },
      {
        id: 5,
        title: "Lesson 5: Traditional Medicine",
        type: "vocab",
        content: {
          songText: "🌱 Traditional Medicine around the world:\n\n• Fenugreek (الحلبة): Seeds are mixed with honey to help stomach aches, reduce coughs, help sleep better, and reduce blood sugar in diabetes.\n• Hibiscus (الكركديه): People make tea from hibiscus flowers. Hibiscus tea helps relax and is good for stress. Some believe it stops cancer.\n• Rosemary (إكليل الجبل): Used in cooking, good for skin, helps remember things and feel young!"
        }
      },
      {
        id: 6,
        title: "Lesson 6: Wonders of Engineering",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Architect", text: "We have to draw floor plans and side views for a new mosque in Omdurman.", voice: "Kore" },
            { speaker: "Engineer", text: "We choose the materials to use and make sure nothing goes wrong.", voice: "Zephyr" },
            { speaker: "Worker", text: "We're going to build the new mosque with big machines to help us.", voice: "Kore" }
          ],
          songText: "🏗️ Wonders of Engineering:\n• Architects: Draw floor plans and side views for big buildings like mosques.\n• Engineers: Give advice, choose building materials, and instruct building companies to make sure nothing goes wrong.\n• Workers: Build structures using modern machines.\n\nLet's talk about building a pyramid near Shendi!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Puzzles and Games",
        type: "vocab",
        content: {
          songText: "🧩 Magic Cube / Rubik's Cube:\nIn 1974, Erno Rubik (a 30-year-old architect and teacher) invented the 'Magic Cube' in Hungary to teach students about space and location. In 1977, he sold it as a toy. In 1980, it was named Rubik's Cube. More than 400 million have been sold!\n\n💬 Erno Rubik said:\n'If you look, you will find puzzles around you. If you work hard, you will solve them.'"
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Science",
        type: "vocab",
        content: {
          songText: "🧫 ENCYCLOPEDIA - Bacteria:\n\n• Paragraph 1: Bacteria are very small living things. Some in our bodies help us digest food and grow stronger.\n• Paragraph 2: Some bacteria can give us illnesses. Mouth bacteria cause damage if we don't brush. Meat or milk have bacteria which can be killed by cooking or boiling correctly.\n• Paragraph 3: Stop bacteria from spreading by washing hands before eating, covering mouths when coughing, and staying away when ill."
        }
      }
    ]
  },
  {
    id: 2,
    title: "Arts and Literature",
    arabicTitle: "الفنون والآداب",
    color: "bg-purple-50 text-purple-950 border-purple-400",
    icon: "🎨",
    words: [
      { id: "w2-1", word: "Wise", arabic: "حكيم", image: "🦊", example: "The wise fox knew exactly how to divide the meals.", soundText: "The wise fox knew exactly how to divide the meals.", unit: 2 },
      { id: "w2-2", word: "Jallabiya", arabic: "جلابية", image: "🥋", example: "A loose traditional white clothing worn by Arab men.", soundText: "A loose traditional white clothing worn by Arab men.", unit: 2 },
      { id: "w2-3", word: "Calligraphy", arabic: "الخط العربي", image: "✒️", example: "Calligraphy is the beautiful art of writing.", soundText: "Calligraphy is the beautiful art of writing.", unit: 2 },
      { id: "w2-4", word: "Novelist", arabic: "روائي", image: "📚", example: "Leila Aboulela is a famous Sudanese novelist.", soundText: "Leila Aboulela is a famous Sudanese novelist.", unit: 2 },
      { id: "w2-5", word: "Sculptures", arabic: "منحوتات / تماثيل", image: "🗿", example: "They built incredible sand sculptures on the beach.", soundText: "They built incredible sand sculptures on the beach.", unit: 2 },
      { id: "w2-6", word: "Sari", arabic: "ساري", image: "👗", example: "Saris are beautiful dresses worn by women in India.", soundText: "Saris are beautiful dresses worn by women in India.", unit: 2 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: A Traditional Story",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Lion", text: "Hyena, could you divide the food between us?", voice: "Kore" },
            { speaker: "Hyena", text: "The donkey is for you. I will eat the gazelle, and the fox can eat the rabbit.", voice: "Zephyr" },
            { speaker: "Lion", text: "That is not fair! *kills hyena* Now, fox, do you know how to?", voice: "Kore" },
            { speaker: "Fox", text: "The donkey is for your breakfast, the gazelle for your lunch, and the rabbit for your dinner.", voice: "Zephyr" },
            { speaker: "Lion", text: "Excellent! You are indeed a wise fox.", voice: "Kore" }
          ],
          songText: "🦊 The Wise Fox:\nA lion, a hyena and a fox went hunting together and killed a donkey, a gazelle and a rabbit.\nWhen the hyena divided the food with a donkey for the lion, gazelle for himself, and rabbit for the fox, the lion angrily killed him.\nThe fox divided them wisely: the donkey for the lion's breakfast, the gazelle for his lunch, and the rabbit for his dinner."
        }
      },
      {
        id: 2,
        title: "Lesson 2: National Dress",
        type: "vocab",
        content: {
          songText: "👗 National Dress of the World:\n\n• 1. Sari: Cotton length wrapped round and round the body, worn by Indian women.\n• 2. Thobe / Jallabiya: Traditional loose white item of clothing worn by Arab men for special occasions.\n• 3. Kimono: Long silk item of clothing with very wide sleeves, worn in Japan.\n• 4. Kilt: Skirt-like item of clothing worn by men in Scotland, Ireland, and Spain.\n\n📖 Relative Pronouns:\n• It's a loose item of clothing that/which is usually white."
        }
      },
      {
        id: 3,
        title: "Lesson 3: Famous Sudanese Writers",
        type: "vocab",
        content: {
          songText: "✍️ Leila Aboulela:\n'I was born in Cairo in 1964. My mother was Egyptian and my father came from Sudan. Six weeks old when we moved to Khartoum. I lived in Khartoum until 1987 before moving to London. I started writing novels two years after moving to Scotland in 1990. My novel Lyrics Alley won the Scottish Book Award.'\n\n• Grammar Check:\n- I went to American School before going to university.\n- I started writing novels two years after moving to Scotland."
        }
      },
      {
         id: 4,
         title: "Lesson 4: Sand Art",
         type: "song",
         content: {
           songText: "Draw on the sand with fingers fine,\nSculptures of beauty under the sunshine!\nBut sand art is quick to blow away,\nWhen strong desert winds come out to play.\nYet natural dunes in Sahara stand tall,\nWith tracks of lizards and snakes that crawl!"
         }
      },
      {
        id: 5,
        title: "Lesson 5: Robinson Crusoe",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Robinson", text: "My ship sank in a big storm in 1659 and I swam to an island.", voice: "Kore" },
            { speaker: "Robinson", text: "While I was staying there, I built a house, farmed, and hunted.", voice: "Kore" },
            { speaker: "Robinson", text: "I rescued a man from pirates. He became my friend. I called him Thursday.", voice: "Kore" },
            { speaker: "Robinson", text: "In 1668, I saw a ship and sailed back to France.", voice: "Zephyr" }
          ],
          songText: "🏝️ Robinson Crusoe Story:\nBorn in 1623 in York. Became a fisherman. Ship sank in 1659. Stayed on a desert island building a house, farming, and hunting. Saved a man from pirates and called him Thursday, teaching him Spanish. Returned home in 1668.\n\n📖 Look!\n• While I was staying there, I built a house.\n• I was walking on the beach when I saw some tracks."
        }
      },
      {
        id: 6,
        title: "Lesson 6: Calligraphy",
        type: "vocab",
        content: {
          songText: "✒️ Arabic Calligraphy (الخط العربي):\n\n• Kufic: The oldest and one of the most difficult scripts. The Holy Quran is traditionally written in it.\n• Thuluth: Highly decorative, with long lines. Used on books and in mosques.\n• Riq'ah: Simplest script, used for daily handwriting. Easier to read and write.\n• Sini: Starts in China, written using a brush made of horsehair."
        }
      },
      {
        id: 7,
        title: "Lesson 7: A Sudanese Artist",
        type: "vocab",
        content: {
          songText: "🎨 Ibrahim El-Salahi:\nWorld-famous Sudanese artist born in Omdurman in 1930. Studied at Gordon Memorial College, then studied painting/calligraphy in London (1954-1957) and photography in New York. One of the painters in the 'Khartoum School'.\n\n💬 He said:\n'My first and most important lessons in painting were in the Khalwa, painting wooden slates for children to write verses of the Holy Quran.'"
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Words and Pictures",
        type: "vocab",
        content: {
          songText: "✍️ Jamal Mahjoub:\nSudanese writer born in London in 1960. Mother was British, father Sudanese. Wrote seven novels. Most famous is 'The Carrier' (1998) about a ship sinking and an astronomer. Under the name Parker Bilal, he writes police detective stories about a policeman living in Cairo."
        }
      }
    ]
  },
  {
    id: 3,
    title: "Around the World",
    arabicTitle: "حول العالم",
    color: "bg-amber-50 text-amber-950 border-amber-400",
    icon: "🗺️",
    words: [
      { id: "w3-1", word: "Borders", arabic: "حدود", image: "🗺️", example: "Sudan shares borders with seven other African countries.", soundText: "Sudan shares borders with seven other African countries.", unit: 3 },
      { id: "w3-2", word: "Continent", arabic: "قارة", image: "🌍", example: "Australia is both an island and a continent.", soundText: "Australia is both an island and a continent.", unit: 3 },
      { id: "w3-3", word: "Peninsula", arabic: "شبه جزيرة", image: "🏝️", example: "Saudi Arabia is situated in the Arabian Peninsula.", soundText: "Saudi Arabia is situated in the Arabian Peninsula.", unit: 3 },
      { id: "w3-4", word: "Hospitality", arabic: "كرم الضيافة", image: "☕", example: "Sudan is famous for generous hospitality towards guests.", soundText: "Sudan is famous for generous hospitality towards guests.", unit: 3 },
      { id: "w3-5", word: "Hajj", arabic: "الحج", image: "🕋", example: "Muslims perform Hajj in Masjid al-Haram in Makkah.", soundText: "Muslims perform Hajj in Masjid al-Haram in Makkah.", unit: 3 },
      { id: "w3-6", word: "Explorer", arabic: "رحالة / مستكشف", image: "🤠", example: "Ibn Battuta was a famous explorer traveling since 1325.", soundText: "Ibn Battuta was a famous explorer traveling since 1325.", unit: 3 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Where is Sudan?",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Pupil A", text: "Sudan is one of the largest countries in Africa.", voice: "Kore" },
            { speaker: "Pupil B", text: "It has borders with seven other countries, and the Red Sea to the north-east.", voice: "Zephyr" },
            { speaker: "Pupil A", text: "Until 2011, South Sudan and Sudan were one country.", voice: "Kore" },
            { speaker: "Pupil B", text: "Yes! Now the White Nile goes through both countries.", voice: "Zephyr" }
          ],
          songText: "🇸🇩 Where is Sudan?\nSudan shares borders with seven African countries:\n• North: Egypt and Libya.\n• West: Chad and Central African Republic.\n• South: South Sudan.\n• East: Ethiopia and Eritrea.\n• North-East: Red Sea.\n\nWhite Nile travels through South Sudan and Sudan, carrying oil pipelines to Red Sea ports."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Countries Quiz",
        type: "vocab",
        content: {
          songText: "📊 Country Facts:\n\n• There are about 195 countries in the world. Africa has 55.\n• Russia is the largest (over 17 million sq km), twice bigger than Canada.\n• China has 20% of the world population.\n• Vatican City is the smallest (only 800 people live there).\n• Kuwait City is the hottest (above 46°C). Yakutsk in Russia is the coldest (-50°C)."
        }
      },
      {
        id: 3,
        title: "Lesson 3: Two Interesting Places",
        type: "song",
        content: {
          songText: "Greenland is the largest island in the cold,\nCovered eighty-five percent with ice we are told!\nAustralia is a continent sunny and wide,\nWith kangaroos jumping and koalas that hide!\nSydney is big but Canberra is the head,\nUnder southern stars where the corals are spread!"
        }
      },
      {
        id: 4,
        title: "Lesson 4: Saudi Arabia",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Ali", text: "Where is Saudi Arabia situated?", voice: "Kore" },
            { speaker: "Tariq", text: "It is situated in the Arabian Peninsula.", voice: "Zephyr" },
            { speaker: "Ali", text: "It has two of the most sacred mosques: Masjid al-Haram in Makkah, and Masjid an-Nabawi in Medina.", voice: "Kore" },
            { speaker: "Tariq", text: "Correct, and it is also famous for its vast sand deserts and oil production.", voice: "Zephyr" }
          ],
          songText: "🇸🇦 Saudi Arabia:\n• Capital: Riyadh | Money: Saudi Riyal | Language: Arabic\n• Home to Masjid al-Haram in Makkah (Hajj is performed here) and Masjid an-Nabawi in Medina (tomb of Prophet Muhammad, PBUH).\n• Has three huge deserts, including Rub' al Khali (one of the largest sand deserts in the world). Produces lots of oil."
        }
      },
      {
        id: 5,
        title: "Lesson 5: Marco Polo",
        type: "vocab",
        content: {
          songText: "🤠 Marco Polo:\nBorn in Venice in 1254. Merchant parents. At age 17, traveled to China to visit Kublai Khan, taking four years. Spent seventeen years in China. Returned in 1295. Later wrote the highly popular book 'Travels of Marco Polo'. Died at age 70."
        }
      },
      {
        id: 6,
        title: "Lesson 6: A Trip of a Lifetime",
        type: "song",
        content: {
          songText: "Australia is great, I'm having a ball,\nSeeing the kangaroos jumping so tall.\nSleeping in camps and riding a boat,\nWatching the beautiful seabirds afloat.\nThis is the first time I've ever been here,\nTo fly on a plane with nothing to fear!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Friendly People",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Matthew", text: "Sudanese people are so friendly and hospitable to tourists!", voice: "Kore" },
            { speaker: "Yasir", text: "Yes! We like to pay for strangers on buses and invite them to meals.", voice: "Zephyr" },
            { speaker: "Matthew", text: "Some people even slaughter their only animal to prepare stew for visitors!", voice: "Kore" }
          ],
          songText: "🤝 Welcoming Sudan:\nPeople in Sudan are famous for generous hospitality. Tourists are often surprised when locals offer to pay for their bus fare, invite them to eat in cafés, or invite them home. Some slaughter their only sheep/goat to prepare meals."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: An Arab Adventure",
        type: "vocab",
        content: {
          songText: "🐫 Arab Adventure History:\n\n• Paragraph 1: The Arab Empire began around 622, stretching by 750 from the Indian border to Spain. Trade along the Silk Road helped souqs expand selling dates, dates, date palms, coffee, and jewellery.\n• Paragraph 2: Ibn Battuta is the most famous Arab traveler. Started in 1325 for Hajj, and spent 29 years traveling across Africa, Yemen, Somalia, Turkey, and beyond."
        }
      }
    ]
  },
  {
    id: 4,
    title: "Work and Play",
    arabicTitle: "العمل واللعب",
    color: "bg-teal-50 text-teal-950 border-teal-400",
    icon: "🏃",
    words: [
      { id: "w4-1", word: "Apprentice", arabic: "متدرب مهني", image: "🔧", example: "An apprentice learns a skill like fixing cars.", soundText: "An apprentice learns a skill like fixing cars.", unit: 4 },
      { id: "w4-2", word: "Hobby", arabic: "هواية", image: "🎻", example: "My hobby is playing the violin and writing.", soundText: "My hobby is playing the violin and writing.", unit: 4 },
      { id: "w4-3", word: "Convention", arabic: "اتفاقية", image: "📜", example: "The UN Convention protects children's rights to play.", soundText: "The UN Convention protects children's rights to play.", unit: 4 },
      { id: "w4-4", word: "Pilot", arabic: "طيار", image: "👨‍✈️", example: "Bakri has been a pilot for Sudan Air since 1999.", soundText: "Bakri has been a pilot for Sudan Air since 1999.", unit: 4 },
      { id: "w4-5", word: "Engineer", arabic: "مهندس", image: "👷", example: "Abdelrahman is an engineer at an oil refinery.", soundText: "Abdelrahman is an engineer at an oil refinery.", unit: 4 },
      { id: "w4-6", word: "Poverty", arabic: "الفقر", image: "🏚️", example: "Most children who work live in extreme poverty.", soundText: "Most children who work live in extreme poverty.", unit: 4 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Jobs, Jobs, Jobs",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Father", text: "My job is difficult. I spend my day outside in the fields farming.", voice: "Kore" },
            { speaker: "Mother", text: "I love my job in the shop because I meet many people.", voice: "Zephyr" },
            { speaker: "Taxi Driver", text: "Traffic jams are the worst thing about driving in Khartoum.", voice: "Kore" },
            { speaker: "Engineer", text: "I like my job because I spend my day trying to solve problems.", voice: "Zephyr" }
          ],
          songText: "💼 Jobs, Jobs, Jobs:\n• Farmers: Work hard in the fields early in the morning.\n• Shopkeepers: Welcome customers and help them find items.\n• Taxi Drivers: Complain about traffic fares and traffic jams.\n• Pilots: Fly long flights and get very tired.\n• Waiters: Serve food to complaining customers."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Teachers",
        type: "vocab",
        content: {
          songText: "👩‍🏫 Three Teachers' Opinions:\n\n• Selma: English teacher. Happy when children get the correct answers. Thinks her job is wonderful.\n• Awatif: Science teacher. Uses models. Thinks children sometimes do not behave well.\n• Hanan: Maths teacher. Knows children sometimes do not like maths, but likes showing them how to calculate. Doesn't enjoy marking homework!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Children and Work",
        type: "song",
        content: {
          songText: "More than two hundred million children work today,\nToo busy in factories to go outside and play.\nIn 1990, the United Nations made a plan,\nSigned by one hundred and ninety-three lands!\nChildren should go to school and read a book,\nNot spend all their young days working as a cook!"
        }
      },
      {
        id: 4,
        title: "Lesson 4: Learning for a Job",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Mechanic", text: "Would you like to train to fix cars as an apprentice mechanic?", voice: "Kore" },
            { speaker: "Chef", text: "Or would you like to train to cook in a restaurant kitchen?", voice: "Zephyr" }
          ],
          songText: "🔧 Apprentice Opportunities:\n• 1. Apprentice Mechanic: Spent 3 days at college, 2 days in a garage, earning a small wage fixing cars and motorbikes.\n• 2. Apprentice Chef: Morning study at college, afternoon work in a restaurant, earning a small wage learning cooking."
        }
      },
      {
        id: 5,
        title: "Lesson 5: My Hobby and My Job",
        type: "vocab",
        content: {
          songText: "🎻 My Hobby and My Job:\n• Footballer: Dreamt of playing football since childhood, now playing professionally.\n• Writer: Good at writing stories since a teenager, published on the internet.\n• Computer Programmer: Hopes to build computer games, loves technology.\n\n💬 Dialogue:\n'What would you like to do after you leave school?' -> 'I hope to be a doctor. I like helping people.'"
        }
      },
      {
        id: 6,
        title: "Lesson 6: Who Gets Paid the Most?",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Abdelrahman", text: "I work as an engineer at an oil refinery in Saudi Arabia.", voice: "Kore" },
            { speaker: "Bakri", text: "I have been a pilot for Sudan Air since 1999.", voice: "Zephyr" },
            { speaker: "Huda", text: "I have been a doctor for three years in a local hospital.", voice: "Kore" }
          ],
          songText: "💵 Income and Salaries:\n• Abdelrahman (Engineer): studied 5 years, gets health insurance, housing, and saves money.\n• Bakri (Pilot): trained 2 years, pilot since 1999, travels, gets free family tickets.\n• Huda (Doctor): studied 7 years, works in a local hospital, gets health care but thinks salary should be higher."
        }
      },
      {
        id: 7,
        title: "Lesson 7: Work in the Future",
        type: "song",
        content: {
          songText: "In the future, driverless cars will run down the street,\nRobots will do heavy work, precise and neat.\nMany people will work on computers at home,\nNo need to travel far, no need to roam!\nLet's learn digital skills for the automated age,\nWriting our future on a brand new page!"
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Hard Work",
        type: "vocab",
        content: {
          songText: "🧺 Mariam's Story:\nMariam lives in Khartoum, daughter in Nyala. Was a housewife. Worked in a restaurant kitchen after husband died, but hated it. Started selling fruit/vegetables at the local market, which she loves. Makes blankets/scarves to save money to visit Nyala."
        }
      }
    ]
  },
  {
    id: 5,
    title: "Food and Health",
    arabicTitle: "الغذاء والصحة",
    color: "bg-emerald-50 text-emerald-950 border-emerald-400",
    icon: "🥗",
    words: [
      { id: "w5-1", word: "Sorghum", arabic: "الذرة الرفيعة", image: "🌾", example: "Sorghum is a main Sudanese crop used to make bread.", soundText: "Sorghum is a main Sudanese crop used to make bread.", unit: 5 },
      { id: "w5-2", word: "Dairy", arabic: "منتجات الألبان", image: "🥛", example: "Dairy foods include milk, cheese and yoghurt.", soundText: "Dairy foods include milk, cheese and yoghurt.", unit: 5 },
      { id: "w5-3", word: "Greenhouse", arabic: "الدفيئة", image: "🏡", example: "Greenhouses are glass structures that trap warmth to grow food.", soundText: "Greenhouses are glass structures that trap warmth to grow food.", unit: 5 },
      { id: "w5-4", word: "Beekeeper", arabic: "مربي النحل", image: "🐝", example: "A beekeeper collects delicious honey from beehives.", soundText: "A beekeeper collects delicious honey from beehives.", unit: 5 },
      { id: "w5-5", word: "Harvest", arabic: "الحصاد", image: "🚜", example: "We harvesting the crops after weeding.", soundText: "We harvesting the crops after weeding.", unit: 5 },
      { id: "w5-6", word: "Fasting", arabic: "الصيام", image: "🌙", example: "Fasting and praying correctly are beautiful healthy habits.", soundText: "Fasting and praying correctly are beautiful healthy habits.", unit: 5 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Chocolate",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Student A", text: "Do you know where chocolate comes from?", voice: "Kore" },
            { speaker: "Student B", text: "Cocoa beans grow on trees in warm places like South America and Africa.", voice: "Zephyr" },
            { speaker: "Student A", text: "The Aztecs called it xocoatl, then Spanish brought it to Europe in 16th century.", voice: "Kore" }
          ],
          songText: "🍫 Chocolate:\nCocoa beans grow on trees in warm places (Africa & South America). First used by Aztecs (word: xocoatl). Spanish brought them to Europe in the 16th century, mixing them with sugar. 100g of chocolate has 5mg of caffeine (average coffee cup has 100mg).\n\n📖 Countable vs Uncountable:\n• Countable: beans, cups, apples, kilo of sugar, bar of chocolate.\n• Uncountable: butter, coffee, sugar, chocolate."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Growing Food",
        type: "song",
        content: {
          songText: "First you plough the soil with your hand or tractor strong,\nDecide the seeds to grow, hoping nothing will go wrong.\nSow the seeds in neat straight rows, water them with care,\nWeed the fields to help them grow under sunshine fair.\nHarvest crops of millet, wheat, and fruits so sweet,\nProviding healthy, fresh, clean food for everyone to eat!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Sudanese Crops",
        type: "vocab",
        content: {
          songText: "🌾 Sudanese Crops:\nSudan often has enough food to export to Egypt, Chad, and Eritrea. Main products:\n• Sorghum (الذرة الرفيعة) - used to make bread.\n• Sesame & Sunflowers - used to make cooking oil.\n• Bananas, Mangoes, Lemons - fruit crops.\nThree-quarters of Sudan's population have jobs in agriculture. Weather (long summer, rainy season, dry winter) helps grow crops."
        }
      },
      {
        id: 4,
        title: "Lesson 4: A Healthy Diet",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Dietitian", text: "Eat five portions of fruit and vegetables each day, and drink lots of water.", voice: "Kore" },
            { speaker: "Student", text: "What are the five main food groups?", voice: "Zephyr" },
            { speaker: "Dietitian", text: "Dairy (milk/cheese), Grain (bread/rice), Meat & Fish, Vegetables, and Fruits.", voice: "Kore" }
          ],
          songText: "🥗 Healthy Diet Rules:\n• Eat 5 portions of fruits/veg daily. Eat fish. Less sugar/salt. Drink water. Never miss breakfast.\n• 5 Food Groups:\n  1. Dairy (calcium for bones)\n  2. Grain (bread, rice)\n  3. Meat and Fish (protein)\n  4. Vegetables & Fruit (vitamins)\n  5. Fat & Sugar (eat very little!)\n\n💬 Dialogue:\n'What do you usually eat for breakfast?' -> 'I usually have aseda.'"
        }
      },
      {
        id: 5,
        title: "Lesson 5: The Greenhouse",
        type: "vocab",
        content: {
          songText: "🏡 The Greenhouse:\n'My father tried to grow some vegetables. Our garden was small and cold. So he bought a greenhouse made of glass. Inside, it is warm, which is very good for growing vegetables.'\n\n📖 Look! Indirect Speech:\n• He said he wanted to buy a greenhouse.\n• My father told me I had 'green fingers'."
        }
      },
      {
        id: 6,
        title: "Lesson 6: Honey",
        type: "song",
        content: {
          songText: "Three kinds of bees live inside a busy hive,\nWorking together to keep their home alive.\nOne queen bee lays thousands of eggs inside a cell,\nFemale worker bees collect sweet flower nectar well!\nThey make delicious honey, a sweet and healthy treat,\nWhile scorpions hide in dry sands from the desert heat!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Healthy Habits",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Father", text: "To be healthy, we need a good diet, water, and exercise.", voice: "Kore" },
            { speaker: "Son", text: "In Islam, praying, fasting, and helping other people are also beautiful habits.", voice: "Zephyr" }
          ],
          songText: "🌙 Healthy Habits in Islam:\n• Physical & Spiritual Health: Praying, fasting, washing hands, and behaving correctly.\n• Social health: Helping elderly people, giving up seats on buses, and visiting the sick."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Food Facts",
        type: "vocab",
        content: {
          songText: "🐝 Farming and Food Facts:\n• Farming began 12,000 years ago in the Middle East.\n• Grains grown most are rice and wheat.\n• One bee makes less than 1/10th of a teaspoon of honey in its life.\n• Africa grows 70% of the world's cocoa beans.\n• Arab scientists invented water pumps to bring water to fields."
        }
      }
    ]
  },
  {
    id: 6,
    title: "Money and Shopping",
    arabicTitle: "المال والتسوق",
    color: "bg-indigo-50 text-indigo-950 border-indigo-400",
    icon: "💵",
    words: [
      { id: "w6-1", word: "Discount", arabic: "خصم / تخفيض", image: "🏷️", example: "We get 50% discount at the modern clothes shop.", soundText: "We get 50% discount at the modern clothes shop.", unit: 6 },
      { id: "w6-2", word: "Billboards", arabic: "لوحات الإعلانات", image: "🛣️", example: "They put giant adverts on billboards near the roads.", soundText: "They put giant adverts on billboards near the roads.", unit: 6 },
      { id: "w6-3", word: "Handicrafts", arabic: "صناعات يدوية", image: "🏺", example: "Omdurman market has beautiful leather handicrafts.", soundText: "Omdurman market has beautiful leather handicrafts.", unit: 6 },
      { id: "w6-4", word: "Miners", arabic: "عمال المناجم", image: "⛏️", example: "Miners came in 1849 to find gold in the river.", soundText: "Miners came in 1849 to find gold in the river.", unit: 6 },
      { id: "w6-5", word: "Adverts", arabic: "إعلانات", image: "📺", example: "TV adverts are the most expensive way to promote products.", soundText: "TV adverts are the most expensive way to promote products.", unit: 6 },
      { id: "w6-6", word: "Customers", arabic: "زبائن", image: "👥", example: "The shop notices are designed to welcome all customers.", soundText: "The shop notices are designed to welcome all customers.", unit: 6 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Shopping",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Customer", text: "Can I look round the shop, please?", voice: "Kore" },
            { speaker: "Assistant", text: "Of course, welcome to all customers! Can I help you choose clothing?", voice: "Zephyr" },
            { speaker: "Customer", text: "If I change my mind, what is your return policy?", voice: "Kore" },
            { speaker: "Assistant", text: "You have fourteen days to bring things back!", voice: "Zephyr" }
          ],
          songText: "🛍️ Shop Notice:\n'Welcome to all customers! Look round our wide range of traditional clothes and latest fashions. Shirts wear out quickly? We have what fits you. Bring things back within 14 days if you change your mind. Scarf or shoes must match your outfit!'"
        }
      },
      {
        id: 2,
        title: "Lesson 2: Adverts",
        type: "vocab",
        content: {
          songText: "📺 Adverts and Slogans:\nAdverts sell products. TV adverts are popular but expensive. Billboards, radio and magazines are used too. Cheap method: company name on football shirts, or paying supermarkets to display products near the entrance.\n\n📻 Slogan example:\n'Try Mango Melts, our mango sweets! Buy two packets and get one packet free!'"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Saving for a Rainy Day!",
        type: "song",
        content: {
          songText: "Save your pennies, save your pounds,\nKeep your feet on solid grounds.\nMoney does not grow on trees,\nPut a little away, if you please!\nAvoid spending on things you do not need,\nGood saving habits are a wise seed!"
        }
      },
      {
        id: 4,
        title: "Lesson 4: Young Business People",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Samira", text: "My business ambition is to expand lemon juice sales.", voice: "Kore" },
            { speaker: "Mazin", text: "I want to buy a cart to collect more plastic bottles for recycling.", voice: "Zephyr" },
            { speaker: "Muna", text: "I love making clothes at home and selling them in the market.", voice: "Kore" }
          ],
          songText: "👶 Young Entrepreneurs:\n• Samira (12): Sells lemon juice to friends and neighbors. Wants to expand.\n• Mazin (14): Makes money from recycling rubbish. Collects plastic bottles.\n• Muna (15): Sew clothes at home to sell in the market. Taught by her mother."
        }
      },
      {
        id: 5,
        title: "Lesson 5: The Gold Rush",
        type: "vocab",
        content: {
          songText: "⛏️ The 1849 Gold Rush:\nIn 1848, an American carpenter found gold in a California river. In 1849, the gold rush started. 90,000 miners arrived with hand tools. San Francisco population grew from 1,000 to over 30,000 by 1852. Gold rush ended in 1855."
        }
      },
      {
        id: 6,
        title: "Lesson 6: Omdurman Market",
        type: "song",
        content: {
          songText: "The largest market in Sudan, almost two hundred years old,\nKnown as the 'beating heart' where gorgeous things are sold!\nHandicrafts of silver, ebony wood, and golden wire,\nLeather shoes and colorful fabrics that tourists admire!\nOmdurman is a busy maze, active day and night,\nBefore Eid holidays, the crowds are a brilliant sight!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Paying for it!",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Musa", text: "I paint houses, clean windows and do small repairs.", voice: "Kore" },
            { speaker: "Ali's Garage", text: "Bring your car engine problems to Ali's garage.", voice: "Zephyr" },
            { speaker: "Rana", text: "Make an appointment with Rana for haircuts at your house.", voice: "Kore" },
            { speaker: "Ibrahim", text: "I am a professional photographer for special occasions.", voice: "Zephyr" }
          ],
          songText: "🛠️ Local Adverts and Jobs:\n• Musa: Handyman, paints and does small repairs.\n• Ali's Garage: Fixes car engines at best prices.\n• Rana: Hairdresser, does haircuts at homes.\n• Ibrahim: Photographer for special events.\n• Khalid & Omer: Cobblers, mend sandals and shoes in the market."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: The Cost of Shopping",
        type: "vocab",
        content: {
          songText: "✉️ Sharjah Email:\nRawan visits her aunt in Sharjah. Huge clothing shops and billboards. Aunt bought her new outfits. Aunt said she looked like a million dollars! But they got their money's worth. Rawan needs a bigger bag to carry them back!"
        }
      }
    ]
  },
  {
    id: 7,
    title: "Learning",
    arabicTitle: "التعلم",
    color: "bg-teal-50 text-teal-950 border-teal-400",
    icon: "🎓",
    words: [
      { id: "w7-1", word: "Competition", arabic: "مسابقة", image: "🏆", example: "Azza is taking part in a school sports competition.", soundText: "Azza is taking part in a school sports competition.", unit: 7 },
      { id: "w7-2", word: "University", arabic: "الجامعة", image: "🏫", example: "The University of Khartoum is the oldest university in Sudan.", soundText: "The University of Khartoum is the oldest university in Sudan.", unit: 7 },
      { id: "w7-3", word: "Dolphin", arabic: "دولفين", image: "🐬", example: "Dolphins have larger brains than humans and are very smart.", soundText: "Dolphins have larger brains than humans and are very smart.", unit: 7 },
      { id: "w7-4", word: "Ourselves", arabic: "بأنفسنا", image: "🧑‍🤝‍🧑", example: "We can make high-quality wooden chairs ourselves.", soundText: "We can make high-quality wooden chairs ourselves.", unit: 7 },
      { id: "w7-5", word: "Brain", arabic: "الدماغ / المخ", image: "🧠", example: "The brain controls everything in our body and produces electricity.", soundText: "The brain controls everything in our body and produces electricity.", unit: 7 },
      { id: "w7-6", word: "Palaeontologist", arabic: "عالم الأحافير", image: "🦕", example: "A palaeontologist studies dinosaur bones and ancient life.", soundText: "A palaeontologist studies dinosaur bones and ancient life.", unit: 7 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Learning a Lesson",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Farmer", text: "How long will it take to get to the market?", voice: "Kore" },
            { speaker: "Boy", text: "If you go quickly it will take you a long time, but if you go slowly you will get there quickly.", voice: "Zephyr" },
            { speaker: "Farmer", text: "Why didn't I listen to the boy's lesson?", voice: "Kore" }
          ],
          songText: "🍊 The Farmer and the Oranges:\nA farmer put oranges on his donkey. A boy advised him: 'If you go quickly, it will take you a long time, but if you go slowly you will get there quickly.' The farmer ran fast, oranges fell out, and he spent all night picking them up in the dark. He sighed, 'Why didn't I listen?'\n\n📖 Relative Clauses:\n• The farmer, who was now tired, stopped to rest.\n• He looked at the baskets, which were now empty."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Learning for a Competition",
        type: "vocab",
        content: {
          songText: "🏆 Competitions and Events:\n• Azza: Sports competition, playing in school volleyball team. Excited.\n• Halima: Cultural competition, reciting a poem. Practised all year, feels nervous."
        }
      },
      {
        id: 3,
        title: "Lesson 3: The History of the University of Khartoum",
        type: "song",
        content: {
          songText: "In nineteen hundred and two, the gates did wide open,\nGordon Memorial College, a school for the young,\nBy nineteen hundred and five, secondary had spoken,\nAnd teachers were trained where the scholars had sung!\nIn nineteen fifty-six, it became our university grand,\nWhere Tayeb Salih and Ismail Al-Azhari did stand!"
        }
      },
      {
        id: 4,
        title: "Lesson 4: Learning to Do Things Yourself",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Teacher", text: "Follow instructions to make a chair ourselves.", voice: "Kore" },
            { speaker: "Student", text: "Now we can say: I made this chair myself!", voice: "Zephyr" }
          ],
          songText: "🪑 Do It Yourself (DIY) Chair:\n• Pieces needed: seat, legs, back. Tools: Screwdriver, large screws, paint.\n• Steps:\n  1. Check all pieces inside the box.\n  2. Fix seat and legs together.\n  3. Put the back on to complete the chair.\n  4. Paint it!\n\n📖 Reflexive Pronouns:\n• myself, yourself, himself, herself, ourselves, yourselves, themselves."
        }
      },
      {
        id: 5,
        title: "Lesson 5: Learning isn't Easy",
        type: "vocab",
        content: {
          songText: "🧠 Learning Difficulties:\nSome children have difficulty spelling, reading or writing, or remembering numbers. Their brains process things differently. They are not stupid or lazy.\n• Albert Einstein & Muhammad Ali had reading difficulties.\n• Bill Gates (Microsoft founder) was not very good with numbers!"
        }
      },
      {
        id: 6,
        title: "Lesson 6: The Brain",
        type: "song",
        content: {
          songText: "One point five kilos of power inside your head,\nUsing twenty percent of the energy when you're fed!\nThree times bigger than other mammals of our size,\nProducing electricity to light a bulb before your eyes!\nDolphins have large brains and can solve complex codes,\nWhile sharks have small brains on their deep ocean roads!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Test Your Knowledge",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Host", text: "What does a palaeontologist study?", voice: "Kore" },
            { speaker: "Pupil", text: "Fossils and dinosaur skeleton bones!", voice: "Zephyr" },
            { speaker: "Host", text: "What is the tallest building in the world?", voice: "Kore" },
            { speaker: "Pupil", text: "The Burj Khalifa in Dubai!", voice: "Zephyr" }
          ],
          songText: "❓ Quiz Questions:\n• Q1: What does a palaeontologist study? -> Ancient fossils & skeletons.\n• Q2: What is the tallest building? -> Burj Khalifa, Dubai.\n• Q3: Last Thursday of November in USA? -> Thanksgiving.\n• Q4: What did Isaac Newton discover? -> Gravity.\n• Q5: Who married Kate Middleton in 2011? -> Prince William.\n• Q6: What happened on July 20, 1969? -> Apollo 11 moon landing!"
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Test Your Learning",
        type: "vocab",
        content: {
          songText: "🏫 Oldest Universities in the World:\n• University of Khartoum: Built 1902 (Gordon College), became university in 1956.\n• University of Nalanda (India): destroyed in 1193.\n• Sankore University (Mali): in Timbuktu.\n• University of Karaouine (Fez, Morocco): started in 859 (oldest active).\n• University of Bologna (Italy): oldest in Europe, opened in 1088."
        }
      }
    ]
  },
  {
    id: 8,
    title: "Looking Back",
    arabicTitle: "مراجعة عامة",
    color: "bg-rose-50 text-rose-950 border-rose-400",
    icon: "🔙",
    words: [
      { id: "w8-1", word: "Archery", arabic: "الرماية", image: "🏹", example: "Archery is an amazing sport that trains concentration.", soundText: "Archery is an amazing sport that trains concentration.", unit: 8 },
      { id: "w8-2", word: "Penicillin", arabic: "البنسلين", image: "💊", example: "Penicillin kills bacteria and has saved millions of lives.", soundText: "Penicillin kills bacteria and has saved millions of lives.", unit: 8 },
      { id: "w8-3", word: "Pandas", arabic: "الباندا", image: "🐼", example: "Giant pandas live in China and are protected from extinction.", soundText: "Giant pandas live in China and are protected from extinction.", unit: 8 },
      { id: "w8-4", word: "Tea-lady", arabic: "بائعة الشاي", image: "☕", example: "Sudanese tea-ladies make delicious ginger tea on streets.", soundText: "Sudanese tea-ladies make delicious ginger tea on streets.", unit: 8 },
      { id: "w8-5", word: "Scorpions", arabic: "العقارب", image: "🦂", example: "Scorpions live in dry deserts and have venomous stingers.", soundText: "Scorpions live in dry deserts and have venomous stingers.", unit: 8 },
      { id: "w8-6", word: "Juha", arabic: "جحا", image: "👳", example: "Juha is a beloved comic character in ancient folklore.", soundText: "Juha is a beloved comic character in ancient folklore.", unit: 8 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Protecting Animals",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Student", text: "Why are scorpions useful?", voice: "Kore" },
            { speaker: "Teacher", text: "They eat pests like mice and rats that destroy agricultural crops.", voice: "Zephyr" }
          ],
          songText: "🐼 Protecting Animals & Habitats:\n• Humans use dogs for hunting, oxen for farming, and chickens for food.\n• Pests & scorpions: Scorpions eat mice/rats. If we kill scorpions, rats multiply and destroy crops.\n• Endangered species: Giant pandas are in danger in China due to habitat destruction. African rhinos are endangered due to hunting."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Sports Time",
        type: "song",
        content: {
          songText: "Swimming and running are great for your heart,\nTry archery or yoga, a beautiful active start!\nIn nineteen sixty, a legendary man took flight,\nAbebe Bikila ran barefoot in the Olympic light!\nHe won the gold medal under the Rome sky,\nProving that human fitness can reach so high!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: A Matter of Science",
        type: "vocab",
        content: {
          songText: "💊 Discovery of Penicillin:\nAlexander Fleming discovered penicillin by accident in 1928. He left a bacteria glass dish in his laboratory. On Monday, he saw a green mould growing on the dish, killing the bacteria. He won the Nobel Prize in Medicine in 1945."
        }
      },
      {
        id: 4,
        title: "Lesson 4: Stories",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Monkey", text: "Hello Mr. Lion, how are you?", voice: "Kore" },
            { speaker: "Lion", text: "I can't hear you! Please come closer.", voice: "Zephyr" },
            { speaker: "Fox", text: "Monkey! Greet him from far away. Run!", voice: "Kore" }
          ],
          songText: "🐒 The Curious Monkey and the Fox:\nA monkey and a fox were friends. The curious monkey visited a hungry lion. The lion pretended he couldn't hear to make the monkey move closer and eat him. The fox walked past and warned the monkey to greet from far away. They escaped safely!"
        }
      },
      {
        id: 5,
        title: "Lesson 5: Discovering the World",
        type: "vocab",
        content: {
          songText: "⛵ Other Famous Arab Explorers:\n• Sulaiman Al-Mahri: Sailed around Africa.\n• Ibn Al-Masudi: Travelled to India and across Indian Ocean 500 years before Europeans.\n• Ibn Majid ('Lion of the Seas'): helped Vasco da Gama navigate around Africa to reach India in 1498."
        }
      },
      {
        id: 6,
        title: "Lesson 6: A Time for Tea",
        type: "song",
        content: {
          songText: "Tea was first found in the ancient China land,\nLeaves are picked and sorted by a careful hand.\nIn Sudan, we love black tea with mint or ginger sweet,\nSold by lovely tea-ladies sitting on the street!\nThey earn money to feed their kids and buy some bread,\nProviding warm hospitality where travelers are led!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Food and Health",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Lisa", text: "How is your diet, Ahmed?", voice: "Kore" },
            { speaker: "Ahmed", text: "I usually have foul for breakfast, and eat lots of fruit and vegetables.", voice: "Zephyr" }
          ],
          songText: "🐝 Lisa's Beekeeper Interview:\nLisa's father has hives in his garden. Hives have 1 king, thousands of males, and thousands of female worker bees. Workers clean, protect, and collect nectar. Worker bees wave wings to show others where nectar is."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Learning for Life",
        type: "vocab",
        content: {
          songText: "🪙 Juha and the Gold Coin:\nOne evening, some men sitting outside a café lamp saw Juha crawling. 'What are you looking for?' - 'I lost a gold coin over there in that dark corner.' - 'Then why are you looking here under the lamp?' - 'Because it's light here, but over there it's too dark to see!'"
        }
      }
    ]
  }
];
