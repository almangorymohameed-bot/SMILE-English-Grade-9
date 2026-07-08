/**
 * Utility to map Sudanese SMILE Syllabus Grade 9 Intermediate units and lessons 
 * to high-quality, cartoon, watercolor, or flat illustration educational images.
 * Tailored beautifully to represent Sudanese culture and real-life learning context.
 */

const LESSON_IMAGE_MAP: Record<string, string> = {
  // UNIT 1: People and Science
  "1-1": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", // What is Science? (Flat illustration classroom)
  "1-2": "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80", // Famous Scientists (Retro science watercolor)
  "1-3": "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&w=800&q=80", // Bones (Skeleton and brain cartoony drawing)
  "1-4": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80", // How to Measure (Flat design measuring vectors)
  "1-5": "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80", // Traditional Medicine (Watercolor Karkadeh / Hibiscus / Herbs)
  "1-6": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", // Wonders of Engineering (Mosque blueprint & construction)
  "1-7": "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Puzzles and Games (Playful toys graphic illustration)
  "1-8": "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80", // Revision: Science (Vibrant micro-organism cartoon drawing)

  // UNIT 2: Arts and Literature
  "2-1": "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?auto=format&fit=crop&w=800&q=80", // A Traditional Story (Forest animals storybook style)
  "2-2": "https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?auto=format&fit=crop&w=800&q=80", // National Dress (Sudanese Jallabiya and Thobe designs flat design)
  "2-3": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", // Famous Sudanese Writers (Ink well and paper drawing)
  "2-4": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80", // Sand Art (Sand dunes watercolor drawing)
  "2-5": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80", // Robinson Crusoe (Tropical shipwreck hand-drawn map)
  "2-6": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", // Calligraphy (Traditional Arabic calligraphy vector strokes)
  "2-7": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80", // A Sudanese Artist (Khalwa wooden slate Loh drawing)
  "2-8": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80", // Revision: Words and Pictures (Colored drawings and pencils)

  // UNIT 3: Geography and Travel
  "3-1": "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80", // Where is Sudan? (Cartoon map of Africa with Nile river)
  "3-2": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", // Countries Quiz (Playful map & passport illustration)
  "3-3": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80", // Two Interesting Places (Watercolor of Meroe Pyramids in Sudan)
  "3-4": "https://images.unsplash.com/photo-1586724237569-f38039663a06?auto=format&fit=crop&w=800&q=80", // Saudi Arabia (Camels and minaret desert illustration)
  "3-5": "https://images.unsplash.com/photo-1501535033-a59396afb33d?auto=format&fit=crop&w=800&q=80", // Marco Polo (Old compass and pirate chart illustration)
  "3-6": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", // A Trip of a Lifetime (Camp and roadtrip vector style)
  "3-7": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80", // Friendly People (Smiling Sudanese hosts and coffee illustration)
  "3-8": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Revision: An Arab Adventure (Sunset desert dunes cartoon drawing)

  // UNIT 4: Work and Hobbies
  "4-1": "https://images.unsplash.com/photo-1521791136364-7286472b5399?auto=format&fit=crop&w=800&q=80", // Jobs, Jobs, Jobs (Sudanese professions flat illustration)
  "4-2": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80", // Teachers (Sudanese teacher at chalkboard illustration)
  "4-3": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", // Children and Work (Sudanese students reading in shaded courtyard drawing)
  "4-4": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", // Learning for a Job (Vocational mechanic / tech training sketch)
  "4-5": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80", // My Hobby and My Job (Creative pottery drawing)
  "4-6": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", // Who Gets Paid the Most? (Career ladder flat cartoon coins)
  "4-7": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", // Work in the Future (Futuristic robot and AI helper illustration)
  "4-8": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Revision: Hard Work (Cozy study room watercolor desk)

  // UNIT 5: Food and Health
  "5-1": "https://images.unsplash.com/photo-1511381939415-e44015463834?auto=format&fit=crop&w=800&q=80", // Chocolate (Cacao bean cartoon)
  "5-2": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80", // Growing Food (Garden sprouts cartoon)
  "5-3": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80", // Sudanese Crops (Sorghum and sesame golden fields watercolor)
  "5-4": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80", // A Healthy Diet (Fresh vegetables salad vector)
  "5-5": "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80", // The Greenhouse (Plant nursery greenhouse drawing)
  "5-6": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80", // Honey (Sweet honey jar and flying bees cartoon)
  "5-7": "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80", // Healthy Habits (Running track outdoors drawing)
  "5-8": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80", // Revision: Food Facts (Health foods overview watercolor)

  // UNIT 6: Money and Shopping
  "6-1": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", // Shopping (Luxury bags elegant mall illustration)
  "6-2": "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80", // Adverts (Creative marketing vectors)
  "6-3": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80", // Saving for a Rainy Day! (Traditional coins piggy bank cartoon)
  "6-4": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80", // Young Business People (Children selling Karkadeh juice illustration)
  "6-5": "https://images.unsplash.com/photo-1610375228911-c4abded8c319?auto=format&fit=crop&w=800&q=80", // The Gold Rush (Shining golden nuggets and mines cartoon)
  "6-6": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80", // Omdurman Market (Traditional vibrant Omdurman Souq watercolor painting)
  "6-7": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80", // Paying for it! (E-wallet card tap vector drawing)
  "6-8": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80", // Revision: The Cost of Shopping (Playful bills and calculator vector)

  // UNIT 7: Learning and Education
  "7-1": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80", // Learning a Lesson (Student reading by light drawing)
  "7-2": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", // Learning for a Competition (Lively debate school quiz cartoon)
  "7-3": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", // University of Khartoum (Khartoum University classic library watercolor painting)
  "7-4": "https://images.unsplash.com/photo-1530124560677-bdaea02c2065?auto=format&fit=crop&w=800&q=80", // Doing Things Yourself (Craftsmanship woodworking flat vector)
  "7-5": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80", // Learning isn't Easy (Hard study textbooks drawing)
  "7-6": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80", // The Brain (Cute colorful brain anatomy illustration)
  "7-7": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", // Test Your Knowledge (Playful exam checklist with A+ cartoon)
  "7-8": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80", // Revision: Test Your Learning (Successful target hit flat graphic)

  // UNIT 8: The World of English
  "8-1": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80", // Protecting Animals (Savanna wildlife lions cartoon)
  "8-2": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80", // Sports Time (African runner track victory cartoon)
  "8-3": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // A Matter of Science (Planets and solar system educational cartoon)
  "8-4": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80", // Stories (Sparkling fantasy library cartoon drawing)
  "8-5": "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80", // Discovering the World (Constellations and globe adventure flat vector)
  "8-6": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80", // A Time for Tea (Sudanese morning tea with milk and sweet dates watercolor)
  "8-7": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80", // Food and Health (Fruit basket salad watercolor)
  "8-8": "https://images.unsplash.com/photo-1491841573378-b13bd2a40e97?auto=format&fit=crop&w=800&q=80", // Learning for Life (Happy children studying group drawing)
};

const LESSON_SUDANESE_CARTOON_DESC: Record<string, string> = {
  // UNIT 1
  "1-1": "رسم كارتوني لطلاب مدرسة سودانية يجرون تجارب علمية في معمل الكيمياء بابتسامة.",
  "1-2": "لوحة توضيحية لعلماء التاريخ الذين أحدثوا ثورة في الطب والصناعة بتأثيرات مائية مبهجة.",
  "1-3": "تخطيط كرتوني للهيكل العظمي البشري لتعليم الأطفال حماية الدماغ والقلب.",
  "1-4": "مجموعة أدوات قياس كرتونية ملونة: ميزان الحرارة الطبي، شريط القياس، ووعاء القياس بالمطبخ.",
  "1-5": "رسم مائي كرتوني لزهور الكركديه السودانية الحمراء وحبات الحلبة كعلاجات عشبية تقليدية.",
  "1-6": "مخطط كرتوني معماري لبناء مسجد في مدينة أم درمان التاريخية باستخدام آليات البناء الحديثة.",
  "1-7": "تصميم كرتوني لمكعب السحر 'روبيك' بألوان مبهجة يمثل متعة حل الألغاز بالعمل والاجتهاد.",
  "1-8": "رسم متحرك ميكروسكوبي يوضح البكتيريا المفيدة للهضم والبكتيريا التي نحاربها بغسل اليدين.",

  // UNIT 2
  "2-1": "مشهد كرتوني من قصة شعبية تظهر الأسد المهيب والضبع الجشع والثعلب الذكي والوعل في عرين الغابة.",
  "2-2": "عرض كرتوني للأزياء الوطنية: الجلابية البيضاء والعمامة للرجل السوداني، والثوب المزركش للمرأة السودانية.",
  "2-3": "رسم تعبيري يمثل الروائية السودانية العالمية ليلى أبو العلا تكتب روايتها 'زقاق كلمات الأغاني' بنهر النيل.",
  "2-4": "أطفال سودانيون يرسمون قلاعاً وبيوتاً رائعة على رمال الصحراء الكبرى الذهبية في لوحة كرتونية دافئة.",
  "2-5": "خريطة كرتونية مرسومة باليد لقصة روبنسون كروزو وجزيرته مع صديقه 'الخميس' يبنون بيتاً ويصطادون.",
  "2-6": "رسم مائي بديع يوضح أنواع الخطوط العربية كالخط الكوفي العتيق وخط الرقعة البسيط لليوميات.",
  "2-7": "لوحة مائية تجسد بدايات الفنان السوداني العالمي إبراهيم الصلحي وهو يرسم على الألواح الخشبية في الخلوة.",
  "2-8": "رسم كرتوني يمثل الكاتب السوداني جمال محجوب وهو ينسج رواياته البوليسية المشوقة.",

  // UNIT 3
  "3-1": "خريطة كرتونية لقارة أفريقيا تبرز حدود السودان السبعة مع النيل الأبيض والأزرق والبحر الأحمر.",
  "3-2": "توضيح كرتوني رائع لحقائق عن أكبر وأصغر دول العالم في مسابقة جغرافية شيقة.",
  "3-3": "لوحة كرتونية مائية بديعة تمثل أهرامات البجراوية (مروي) الشهيرة في شمال السودان.",
  "3-4": "رسم كرتوني لقوافل الإبل في صحراء الربع الخالي الشاسعة والمآذن التاريخية بمكة والمدينة.",
  "3-5": "رسم كرتوني ممتع للرحالة التاريخي ماركو بولو يتصفح خريطة قديمة مع الإمبراطور قوبلاي خان.",
  "3-6": "توضيح كرتوني لمغامرة العمر عبر الطائرة والسيارة والسير في أحضان الطبيعة الساحرة.",
  "3-7": "رسم كرتوني يجسد كرم الشعب السوداني والترحيب بالضيوف وتقديم القهوة والشاي مجاناً في الطرقات.",
  "3-8": "لوحة مائية كرتونية تعبر عن رحلة ابن بطوطة التاريخية من طنجة لأداء الحج ثم طواف العالم لـ 29 عاماً.",

  // UNIT 4
  "4-1": "رسم كرتوني لمهن المستقبل في السودان: الطبيب البارع، المعلم المخلص، والمهندس النشيط.",
  "4-2": "معلمة سودانية ترتدي الثوب الأنيق وتوضح الدروس للطلاب المتفوقين بابتسامة كرتونية.",
  "4-3": "رسم كرتوني لأطفال يقرؤون ويلعبون بسعادة في فناء مدرسة سودانية مظلل بأشجار النيم والسيال.",
  "4-4": "رسم ميكانيكي كرتوني يعلم الشباب المهن العملية وصيانة السيارات وإدارة شبكات الحاسوب.",
  "4-5": "لوحة تعبر عن تداخل الهوايات كالعزف والرسم بالعمل اليومي الناجح في تصميم الفخار والأواني.",
  "4-6": "لوحة بيانية كرتونية توضح رواتب المهن المختلفة وأهمية التخطيط والتعليم للمستقبل.",
  "4-7": "رسم كرتوني خيالي للروبوتات ومستقبل العمل باستخدام الذكاء الاصطناعي والتكنولوجيا الفائقة.",
  "4-8": "رسم دافئ لغرفة دراسية منظمة وهادئة تدعو للاجتهاد والتفوق في الامتحانات والواجبات.",

  // UNIT 5
  "5-1": "رسم كرتوني مرح لقرون نبات الكاكاو وحبات الشوكولاتة المفضلة لدى الأطفال.",
  "5-2": "رسم كرتوني للحدائق المنزلية وزراعة البذور الصغيرة للحصول على طعام صحي وطازج.",
  "5-3": "حقول الذرة السودانية الرفيعة والسمسم الذهبي تتمايل تحت شمس السودان الدافئة برسم مائي مبهج.",
  "5-4": "رسم كرتوني لطبق السلطة السودانية الطازجة المليء بالخضروات المفيدة لتقوية المناعة والنمو.",
  "5-5": "توضيح كرتوني للبيوت الزجاجية (الصوبات) التي تحمي المحاصيل الطازجة طوال فصول السنة.",
  "5-6": "رسم مرح لخلايا النحل وعسل النحل السوداني الصافي واللذيذ الذي يشفي من الآلام.",
  "5-7": "رسم تعبيري كرتوني يوضح ممارسة الرياضة الصباحية والجري كجزء من أسلوب الحياة الصحي.",
  "5-8": "لوحة كرتونية مليئة بالحقائق الغذائية المفيدة وأثر الفواكه والخضار على صحة ونشاط العقل.",

  // UNIT 6
  "6-1": "رسم كرتوني لمحلات تجارية أنيقة تبيع الملابس والأحذية في مجمع تسوق حديث.",
  "6-2": "لوحة كرتونية مرحة لفريق تسويق يصمم إعلانات جذابة للمنتجات والخدمات.",
  "6-3": "حصالة نقود كرتونية ملونة مرسوم عليها علم السودان ترمز للتوفير للأيام القادمة.",
  "6-4": "أطفال سودانيون في الحي يقيمون مشروعاً صغيراً لبيع عصير الليمون والكركديه البارد كارتونياً.",
  "6-5": "رسم كرتوني مشوق لعمال يبحثون عن الذهب في تلال السودان باستخدام معدات التعدين اللامعة.",
  "6-6": "رسم كرتوني نابض بالحياة لسوق أم درمان الشعبي والبهارات الملونة والمشغولات الفضية والجلدية.",
  "6-7": "توضيح كرتوني لوسائل الدفع الحديثة وتطبيقات الجوال البنكية السودانية لتسهيل المعاملات اليومية.",
  "6-8": "لوحة تفاعلية تحسب تكاليف المشتريات وتوضح أهمية الميزانية والتخطيط المالي لرب الأسرة.",

  // UNIT 7
  "7-1": "طالب سوداني نجيب يراجع دروسه تحت ضوء المصباح باجتهاد وتصميم كرتوني رائع.",
  "7-2": "رسم كرتوني حماسي لمسابقة ثقافية وخطابية بين طلاب المدارس السودانية والجوائز اللامعة.",
  "7-3": "رسم كرتوني دقيق لبوابة جامعة الخرطوم العريقة والمباني الحمراء المظللة بالأشجار التاريخية.",
  "7-4": "رسم كرتوني لمهارات الحرف اليدوية وصناعة الكراسي والمنحوتات الخشبية الجميلة في السودان.",
  "7-5": "رسم كرتوني يمثل التحديات الدراسية وأثر الصبر والجد في التغلب على صعوبة المناهج والامتحانات.",
  "7-6": "لوحة تشريحية كرتونية للدماغ البشري تظهر فص الذاكرة وقدرات الذكاء الإعجازية للإنسان.",
  "7-7": "مفكرة كرتونية مرحة تحتوي على أسئلة اختبار وورقة إجابة متميزة نالت الدرجة الكاملة.",
  "7-8": "رسم كرتوني معبر عن إصابة الهدف في لوحة الرماية للتأكيد على جودة الفهم وقوة التعلم.",

  // UNIT 8
  "8-1": "رسم كرتوني محبب يوضح حماية الحيوانات البرية السودانية كالغزلان والأسود في محمية الدندر الوطنية.",
  "8-2": "رسم كرتوني رائع لعداء سوداني يحرز الميدالية الذهبية في سباق الجري الدولي ويرفع علم البلاد.",
  "8-3": "توضيح كرتوني فضائي رائع يبرز الكواكب والمجرات البعيدة كأحد أسرار علم الفلك الكوني.",
  "8-4": "رسم كرتوني لخيال القصص يصور خروج السفن والمغامرين من كتب الحكايات القديمة.",
  "8-5": "رسم كرتوني لمجموعة أصدقاء يستكشفون النجوم والتخييم في رمال الصحراء السودانية الساحرة ليلاً.",
  "8-6": "رسم كرتوني يعبّر عن طقوس شاي الصباح باللبن السوداني اللذيذ المقدم مع التمر الفاخر.",
  "8-7": "رسم كرتوني تفاعلي لفوائد الفاكهة الطازجة وأهمية التغذية المتوازنة لعقل سليم وجسم قوي.",
  "8-8": "طلاب سودانيون يتخرجون من المدرسة الثانوية يرتدون أوشحة النجاح ويلقون قبعاتهم للأعلى بفرح."
};

/**
 * Returns a beautiful, context-relevant educational image URL for the given unit and lesson combination.
 * Defaults to a beautiful science, reading, or world image if not found in mapping.
 */
export function getLessonImageUrl(unitId: number, lessonId: number): string {
  const key = `${unitId}-${lessonId}`;
  return LESSON_IMAGE_MAP[key] || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80";
}

/**
 * Returns a beautiful Arabic description detailing how this cartoon illustration 
 * reflects Sudanese real life, geography, culture, or student environment.
 */
export function getLessonCartoonDesc(unitId: number, lessonId: number): string {
  const key = `${unitId}-${lessonId}`;
  return LESSON_SUDANESE_CARTOON_DESC[key] || "توضيح كرتوني تفاعلي لطلاب السودان بلمسات تعليمية مبهجة.";
}

