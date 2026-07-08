/**
 * Utility to map Sudanese SMILE Syllabus Grade 9 Intermediate units and lessons 
 * to high-quality, safe, and context-appropriate educational stock images from Unsplash.
 */

const LESSON_IMAGE_MAP: Record<string, string> = {
  // UNIT 1: People and Science
  "1-1": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80", // What is Science? (Science lab / study)
  "1-2": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", // Famous Scientists (Laboratory equipment)
  "1-3": "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80", // Bones (Skeleton and skull diagram)
  "1-4": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", // How to Measure (Measuring tools / tape)
  "1-5": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80", // Traditional Medicine (Spices and herbs)
  "1-6": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", // Wonders of Engineering (Blueprints and construction helmet)
  "1-7": "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Puzzles and Games (Rubik's cube)
  "1-8": "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&w=800&q=80", // Revision: Science (Laboratory microscope bacteria)

  // UNIT 2: Arts and Literature
  "2-1": "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?auto=format&fit=crop&w=800&q=80", // A Traditional Story (Fox in woods)
  "2-2": "https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?auto=format&fit=crop&w=800&q=80", // National Dress (Colorful fabric)
  "2-3": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", // Famous Sudanese Writers (Ink and book)
  "2-4": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80", // Sand Art (Sand sculpture)
  "2-5": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80", // Robinson Crusoe (Tropical beach shipwreck vibes)
  "2-6": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", // Calligraphy (Beautiful brush stroke art)
  "2-7": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80", // A Sudanese Artist (Abstract painting canvas)
  "2-8": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80", // Revision: Words and Pictures (Art materials / pencils)

  // UNIT 3: Geography and Travel
  "3-1": "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80", // Where is Sudan? (Atlas map)
  "3-2": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", // Countries Quiz (Travel planning passport)
  "3-3": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80", // Two Interesting Places (Ancient pyramids ruins)
  "3-4": "https://images.unsplash.com/photo-1586724237569-f38039663a06?auto=format&fit=crop&w=800&q=80", // Saudi Arabia (Desert and minaret)
  "3-5": "https://images.unsplash.com/photo-1501535033-a59396afb33d?auto=format&fit=crop&w=800&q=80", // Marco Polo (Old compass and map)
  "3-6": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", // A Trip of a Lifetime (Scenic driving mountain)
  "3-7": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80", // Friendly People (Smiling people hugging / laughing)
  "3-8": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Revision: An Arab Adventure (Sunset in the desert)

  // UNIT 4: Work and Hobbies
  "4-1": "https://images.unsplash.com/photo-1521791136364-7286472b5399?auto=format&fit=crop&w=800&q=80", // Jobs, Jobs, Jobs (Professional teamwork shaking hands)
  "4-2": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80", // Teachers (Instructor and students)
  "4-3": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", // Children and Work (Students enjoying reading)
  "4-4": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", // Learning for a Job (Professional coding skill training)
  "4-5": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80", // My Hobby and My Job (Creative artist sketching)
  "4-6": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", // Who Gets Paid the Most? (Financial analyst board)
  "4-7": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", // Work in the Future (Modern tech robotics)
  "4-8": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Revision: Hard Work (Polished designer workspace)

  // UNIT 5: Food and Health
  "5-1": "https://images.unsplash.com/photo-1511381939415-e44015463834?auto=format&fit=crop&w=800&q=80", // Chocolate (Cacao seeds and dark chocolate)
  "5-2": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80", // Growing Food (Organic garden green seedlings)
  "5-3": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80", // Sudanese Crops (Golden grain / wheat fields)
  "5-4": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80", // A Healthy Diet (Fresh vegetables salad)
  "5-5": "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80", // The Greenhouse (Plant nursery glasshouse)
  "5-6": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80", // Honey (Sweet honey dipper comb)
  "5-7": "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80", // Healthy Habits (Running track outdoors)
  "5-8": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80", // Revision: Food Facts (Health foods overview)

  // UNIT 6: Money and Shopping
  "6-1": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", // Shopping (Luxury bags elegant mall)
  "6-2": "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80", // Adverts (Modern marketing team planning)
  "6-3": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80", // Saving for a Rainy Day! (Coins on piggy bank)
  "6-4": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80", // Young Business People (Kids cash-register play)
  "6-5": "https://images.unsplash.com/photo-1610375228911-c4abded8c319?auto=format&fit=crop&w=800&q=80", // The Gold Rush (Golden nuggets shining)
  "6-6": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80", // Omdurman Market (Traditional souq colors)
  "6-7": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80", // Paying for it! (Tap credit card chip)
  "6-8": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80", // Revision: The Cost of Shopping (Calculators and receipt paper)

  // UNIT 7: Learning and Education
  "7-1": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80", // Learning a Lesson (Student reading by light)
  "7-2": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", // Learning for a Competition (Interactive debating)
  "7-3": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", // University of Khartoum (Classic college architecture)
  "7-4": "https://images.unsplash.com/photo-1530124560677-bdaea02c2065?auto=format&fit=crop&w=800&q=80", // Doing Things Yourself (Woodwork craftsmanship)
  "7-5": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80", // Learning isn't Easy (Hard academic study in library)
  "7-6": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80", // The Brain (Anatomy science light)
  "7-7": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", // Test Your Knowledge (Pencil and checklist exam)
  "7-8": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80", // Revision: Test Your Learning (Successful goals ticked)

  // UNIT 8: The World of English
  "8-1": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80", // Protecting Animals (African lion conservation)
  "8-2": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80", // Sports Time (Athletic sprinter start)
  "8-3": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // A Matter of Science (Deep universe space cosmology)
  "8-4": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80", // Stories (Adventure storybooks stack)
  "8-5": "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80", // Discovering the World (Campfire night skies globe)
  "8-6": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80", // A Time for Tea (Steaming herbal tea pouring)
  "8-7": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80", // Food and Health (Fruit platter fresh organic)
  "8-8": "https://images.unsplash.com/photo-1491841573378-b13bd2a40e97?auto=format&fit=crop&w=800&q=80", // Learning for Life (Happy children studying in group)
};

/**
 * Returns a beautiful, context-relevant educational image URL for the given unit and lesson combination.
 * Defaults to a beautiful science, reading, or world image if not found in mapping.
 */
export function getLessonImageUrl(unitId: number, lessonId: number): string {
  const key = `${unitId}-${lessonId}`;
  return LESSON_IMAGE_MAP[key] || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80";
}
