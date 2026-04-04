/* ═══════════════════════════════════════════════════════════════════════════════════
   UMAMI PRIME — Ultra-Premium Contemporary Japanese Restaurant
   AR Gastronomy Portal Data Package v2.0
   
   Restaurant ID: UMAMI-PRIME-JP-001
   Theme: Obsidian Atelier (Black & Gold — Soy & Sake Heritage)
   
   This data package is production-ready and designed to integrate seamlessly
   into the AR Gastronomy Portal without modifying core index.html or style.css.
═══════════════════════════════════════════════════════════════════════════════════ */

const RESTAURANT_DATA = {
  
  /* ─────────────────────────────────────────────────────────────────────────────
     RESTAURANT METADATA
  ───────────────────────────────────────────────────────────────────────────────── */
  restaurant: {
    id:              'UMAMI-PRIME-JP-001',
    name:            'UMAMI PRIME',
    tagline:         'The Fifth Dimension of Taste',
    subtitle:        'Contemporary Japanese Molecular Gastronomy',
    
    /* Location & Contact */
    city:            'Tokyo',
    region:          'Minato Ward, Roppongi Hills',
    address:         '6-10-1 Roppongi, Minato Ward, Tokyo 106-6108',
    country:         'Japan',
    coordinates:     { latitude: 35.6654, longitude: 139.7298 },
    phone:           '+81-3-XXXX-XXXX',
    email:           'reservations@umamiprime.jp',
    
    /* Brand Identity */
    logo:            'https://images.unsplash.com/photo-1604661701821-ba614908a88f?w=400&q=85',
    heroImage:       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=85',
    portalImage:     'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=85',
    
    /* Aesthetic & Brand Colors (Black & Gold — Japanese Heritage) */
    brandColors: {
      primary:       '#0a0a0a',      /* Deep obsidian black */
      accent:        '#d4af37',      /* 24K gold (Umami essence) */
      accent_alt:    '#c9a961',      /* Aged soy sauce bronze */
      accent_subtle: '#8b7355',      /* Dark soy caramel */
      highlight:     '#f5f0e8',      /* Cream (wasabi foam) */
      danger:        '#b85c5c'       /* Miso red */
    },
    
    /* Operating Hours (JST) */
    hours: {
      monday:    { open: '18:00', close: '23:00' },
      tuesday:   { open: '18:00', close: '23:00' },
      wednesday: { open: '18:00', close: '23:00' },
      thursday:  { open: '18:00', close: '23:00' },
      friday:    { open: '17:00', close: '00:00' },
      saturday:  { open: '17:00', close: '00:00' },
      sunday:    'closed'
    },
    
    /* Description */
    description:     'UMAMI PRIME elevates Japanese culinary arts through molecular gastronomy and precision cooking. Each dish explores the fifth taste dimension—umami—via fermented foundations, sake pairings, and theatrical presentation. Seating for 18 guests only; omakase experience required.',
    
    /* Social & Booking */
    googleMapsUrl:   'https://maps.google.com/maps?q=umami+prime+tokyo',
    reservationUrl:  'https://booking.umamiprime.jp',
    instagramHandle: '@umami.prime.tokyo',
    michelin:        '★★★'  /* Michelin 3-star equivalent */
  },

  /* ─────────────────────────────────────────────────────────────────────────────
     MENU ITEMS (3 Signature Dishes)
     Each dish includes: bilingual (EN/AR) names, descriptions, ingredients,
     nutritional data, pricing, prep video, AR target index, and tasting notes.
  ───────────────────────────────────────────────────────────────────────────────── */
  menu: [
    {
      id:               1,
      targetIndex:      0,
      category:         'Umami Foundation',
      categoryArabic:   'أساس الأومامي',
      
      /* Bilingual Names */
      name:             'Miso-Cured Bluefin with Soy Consommé Sphere',
      nameArabic:       'سمك التونة الزعنفة الزرقاء المعالج بالميسو مع كرة حساء صويا',
      
      /* Descriptions */
      description:      'Hand-cut Hokkaido bluefin tuna, cured for 72 hours in a proprietary red miso blend (Sendai miso, 18-year sake lees, bonito flakes). Served with a spherified soy consommé that bursts on the palate, releasing umami intensity. Accompanied by a quenelle of wasabi foam and microgreens harvested from our rooftop garden.',
      descriptionArabic: 'سمك تونة الزعنفة الزرقاء من هوكايدو مقطع يدويًا، معالج لمدة 72 ساعة في خليط ميسو أحمر حاصري (ميسو سينداي، رواسب الساكي التي تبلغ من العمر 18 عامًا، رقائق سمك بوني). يُقدم مع حساء صويا مكروي يتفجر في الحنك، مما يطلق كثافة الأومامي. يرافقه كريمة واسابي وخضار صغيرة الحجم من حديقتنا على السطح.',
      
      /* Ingredients */
      ingredients: [
        'Hokkaido Bluefin Tuna (Maguro)',
        'Sendai Red Miso (18-month aged)',
        'Sake Lees (Koshu)',
        'Bonito Flake Stock',
        'Soy Sauce (Tamari, 5-year aged)',
        'Wasabi Root (Fresh, Izu origin)',
        'Dashi Kombu',
        'Rooftop Microgreens'
      ],
      ingredientsArabic: [
        'سمك التونة ذو الزعنفة الزرقاء من هوكايدو',
        'ميسو أحمر من سينداي (مُعتق 18 شهرًا)',
        'رواسب الساكي',
        'مرقة رقائق سمك بوني',
        'صلصة صويا تاماري (معتقة 5 سنوات)',
        'جذر الواسابي الطازج',
        'كومبو داشي',
        'خضار دقيقة من السطح'
      ],
      
      /* Nutritional Info */
      calories:         185,
      protein:          32,    /* grams */
      fat:              5,
      carbohydrates:    4,
      sodium:           420,   /* mg */
      allergens:        ['Fish', 'Soy', 'Sesame'],
      allergenArabic:   ['الأسماك', 'الصويا', 'السمسم'],
      
      /* Pricing */
      price:            '$95',
      priceJPY:         '¥12,500',
      coursePosition:   'Course 1 of 8',
      
      /* Imagery */
      image:            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=85',
      dishCard:         'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=85',
      processImage:     'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=85',
      
      /* Preparation Video */
      videoUrl:         'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
      videoTitle:       'Miso Cure & Soy Sphere Technique',
      videoTitleArabic: 'تقنية معالجة الميسو وكرة الصويا',
      videoDuration:    '8:42',
      
      /* Tasting Notes */
      tastingNotes:     'Opening: Umami richness from 18-year miso. Mid-palate: Tuna sweetness emerges. Finish: Bright soy consommé bursts, followed by wasabi heat. Sake pairing: Junmai Daiginjo from Niigata.',
      tastingNotesArabic: 'الافتتاح: ثراء الأومامي من الميسو الذي يبلغ من العمر 18 عامًا. منتصف الحنك: تظهر حلاوة التونة. النهاية: انفجار حساء الصويا الزاهي يليه حرارة الواسابي. يرافقه ساكي جونماي دايجينجو من نيجاتا.',
      
      /* Chef's Note */
      chefNote:         'This dish honors the 300-year miso-making tradition of Sendai. The three-day cure allows the miso enzymes to break down the tuna's proteins, creating a naturally umami-rich experience without additives.',
      chefNoteArabic:   'يكرم هذا الطبق تقليد صناعة الميسو الذي يعود إلى 300 عام في سينداي. تسمح المعالجة المدة ثلاثة أيام لإنزيمات الميسو بتكسير بروتينات التونة، مما ينتج عن تجربة غنية بالأومامي بشكل طبيعي.',
      
      /* Rating */
      rating:           4.9,
      reviews:          287
    },
    
    {
      id:               2,
      targetIndex:      1,
      category:         'Precision Heat',
      categoryArabic:   'الحرارة الدقيقة',
      
      name:             'Sake-Steamed Scallop with Fermented Black Garlic Emulsion',
      nameArabic:       'الإسقلوب المطهو على البخار بالساكي مع مستحلب الثوم الأسود المخمر',
      
      description:      'Single A5-grade hokkaido scallop, precisely vacuum-sealed and steam-cooked at 64°C for 7 minutes in premium Daiginjo sake. The scallop\'s natural sweetness is preserved at the molecular level. Finished with a silky black garlic emulsion (fermented for 45 days), aged soy beurre blanc, and a garnish of crispy sake powder.',
      descriptionArabic: 'إسقلوب واحد من الدرجة A5 من هوكايدو، معبأ بفراغ دقيق ومطهو على البخار عند 64 درجة مئوية لمدة 7 دقائق في ساكي ديجينجو الممتاز. يتم الحفاظ على حلاوة الإسقلوب الطبيعية على المستوى الجزيئي. ينتهي بمستحلب ثوم أسود حريري (مخمر لمدة 45 يومًا)، بيور صويا معتق، وزينة من مسحوق الساكي المقرمش.',
      
      ingredients: [
        'Hokkaido Scallop (A5-grade, size 20)',
        'Daiginjo Sake (Premium grade)',
        'Black Garlic (45-day fermented)',
        'Aged Soy Sauce (Tamari)',
        'Kombu Butter',
        'Sake Powder (Freeze-dried)',
        'Yuzu Zest',
        'Edible Gold Leaf'
      ],
      ingredientsArabic: [
        'إسقلوب هوكايدو (درجة A5)',
        'ساكي ديجينجو (درجة ممتازة)',
        'ثوم أسود (مخمر 45 يومًا)',
        'صلصة صويا معتقة',
        'زبدة كومبو',
        'مسحوق الساكي',
        'قشرة يوزو',
        'أوراق ذهب صالحة للأكل'
      ],
      
      calories:         210,
      protein:          28,
      fat:              8,
      carbohydrates:    6,
      sodium:           380,
      allergens:        ['Shellfish', 'Soy', 'Sesame'],
      allergenArabic:   ['المحار', 'الصويا', 'السمسم'],
      
      price:            '$78',
      priceJPY:         '¥10,200',
      coursePosition:   'Course 3 of 8',
      
      image:            'https://images.unsplash.com/photo-1599599810694-b5ac4dd37e6f?w=600&q=85',
      dishCard:         'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=85',
      processImage:     'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=85',
      
      videoUrl:         'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
      videoTitle:       'Sous-Vide Precision Cooking & Black Garlic Fermentation',
      videoTitleArabic: 'طهي البحر المحضر بدقة وتخمير الثوم الأسود',
      videoDuration:    '12:15',
      
      tastingNotes:     'Silky opening with scallop sweetness. Black garlic adds umami complexity and subtle sweetness. Soy beurre blanc provides richness. Finish: Fresh yuzu brightens the palate. Sake pairing: Tokubetsu Junmai.',
      tastingNotesArabic: 'افتتاح حريري مع حلاوة الإسقلوب. يضيف الثوم الأسود تعقيدًا بالأومامي وحلاوة لطيفة. يوفر بيور الصويا الثراء. النهاية: اليوزو الطازج ينعش الحنك. يرافقه ساكي توكوبتسو جونماي.',
      
      chefNote:         'Sous-vide cooking at precisely 64°C ensures the scallop\'s proteins remain tender while moisture is preserved. Black garlic fermentation is a time-intensive process that transforms raw garlic\'s harshness into deep umami notes.',
      chefNoteArabic:   'يضمن طهي البحر المحضر في 64 درجة مئوية بدقة بقاء بروتينات الإسقلوب طرية مع الحفاظ على الرطوبة. تخمير الثوم الأسود عملية تستغرق وقتًا طويلاً تحول قسوة الثوم الخام إلى ملاحظات أومامي عميقة.',
      
      rating:           4.8,
      reviews:          198
    },
    
    {
      id:               3,
      targetIndex:      2,
      category:         'Molecular Finale',
      categoryArabic:   'الختام الجزيئي',
      
      name:             'Miso Caramel Sphere with Matcha Air & Sesame Tuile',
      nameArabic:       'كرة كراميل ميسو مع هواء ماتشا وقرميدة السمسم',
      
      description:      'A striking finale dessert that deconstructs traditional miso cake into molecular elements. Hollow sphere of red miso caramel (caramelized white miso + dark miso paste + yuzu) sits atop a matcha panna cotta. The sphere bursts to release a warm, salty-sweet interior. Garnished with matcha air, crispy sesame tuile, and a quenelle of sake-infused mascarpone.',
      descriptionArabic: 'حلوى نهائية مذهلة تفكك كعكة الميسو التقليدية إلى عناصر جزيئية. كرة مجوفة من كراميل ميسو أحمر (ميسو أبيض مكرملة + معجون ميسو داكن + يوزو) تجلس فوق بانا كوتا ماتشا. تنفجر الكرة لتحرير داخل دافئ حلو ومالح. مزينة بهواء ماتشا وقرميدة السمسم المقرمشة وكريمة ماسكاربوني منقوعة بالساكي.',
      
      ingredients: [
        'White Miso (Shinshu)',
        'Dark Miso Paste (Hatcho)',
        'Yuzu Juice & Zest',
        'Matcha Powder (Premium ceremonial)',
        'Heavy Cream',
        'Mascarpone',
        'Sesame Seeds (Black & white)',
        'Sake (Nama, unpasteurized)',
        'Gelatin (Plant-based)',
        'Egg White (for air/foam)'
      ],
      ingredientsArabic: [
        'ميسو أبيض (شينشو)',
        'معجون ميسو داكن (هاتشو)',
        'عصير وقشرة يوزو',
        'مسحوق ماتشا (ممتاز احتفالي)',
        'كريمة ثقيلة',
        'ماسكاربوني',
        'بذور السمسم (أسود وأبيض)',
        'ساكي ناما (غير مبستر)',
        'جيلاتين (نبات الأساس)',
        'بياض البيض (للهواء/الرغوة)'
      ],
      
      calories:         240,
      protein:          6,
      fat:              14,
      carbohydrates:    24,
      sodium:           180,
      allergens:        ['Egg', 'Dairy', 'Sesame', 'Soy'],
      allergenArabic:   ['البيض', 'الألبان', 'السمسم', 'الصويا'],
      
      price:            '$52',
      priceJPY:         '¥6,800',
      coursePosition:   'Course 8 of 8 (Dessert)',
      
      image:            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=85',
      dishCard:         'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=85',
      processImage:     'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=85',
      
      videoUrl:         'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
      videoTitle:        'Molecular Sphere Technique & Matcha Air Creation',
      videoTitleArabic: 'تقنية الكرة الجزيئية وإنشاء هواء ماتشا',
      videoDuration:    '14:33',
      
      tastingNotes:     'Initial sweetness from caramel. The bursting sphere releases umami depth (miso + yuzu). Matcha air adds bitterness and earthiness. Sesame tuile provides textural crunch. Sake mascarpone rounds out the finish with richness. Overall: A harmonious balance of sweet, salty, bitter, and umami.',
      tastingNotesArabic: 'الحلاوة الأولية من الكراميل. تطلق الكرة المنفجرة عمق الأومامي (ميسو + يوزو). يضيف هواء ماتشا المرارة والأرضية. توفر قرميدة السمسم طقطقة نسيجية. يختتم ماسكاربوني الساكي الحنك بالثراء. بشكل عام: توازن متناغم بين الحلو والمالح والمر والأومامي.',
      
      chefNote:         'This dessert challenges the Western separation of sweet and savory. By incorporating miso (traditionally savory) into a dessert format, we explore umami\'s presence across all taste dimensions. The molecular sphere technique requires precision timing and nitrogen flash-freezing.',
      chefNoteArabic:   'تطعن هذه الحلوى في الفصل الغربي بين الحلو والمالح. من خلال دمج الميسو (عادة ما يكون مالحًا) في صيغة حلوى، نستكشف وجود الأومامي عبر جميع أبعاد الطعم. تتطلب تقنية الكرة الجزيئية دقة التوقيت والتجميد السريع بالنيتروجين.',
      
      rating:           4.7,
      reviews:          156
    }
  ],

  /* ─────────────────────────────────────────────────────────────────────────────
     INTERNATIONALIZATION (i18n) — English & Arabic
  ───────────────────────────────────────────────────────────────────────────────── */
  i18n: {
    en: {
      brand:                 'UMAMI PRIME',
      tagline:               'The Fifth Dimension of Taste',
      subtitle:              'Contemporary Japanese Molecular Gastronomy',
      tracking:              'TRACKING DISH',
      tap_dish:              'TAP DISH TO EXPERIENCE PREPARATION',
      swipe:                 'SWIPE TO DISMISS',
      
      dish_title:            'Dish Name',
      dish_category:         'Category',
      dish_price:            'Price',
      price_label:           'Per Person',
      dish_ingredients:      'Key Ingredients',
      ingredients_label:     'COMPONENTS',
      
      rate_google:           'RATE ON GOOGLE MAPS',
      watch_video:           'WATCH THE PREPARATION',
      course_position:       'Course',
      
      tasting_notes:         'Tasting Notes',
      chef_note:             'Chef\'s Note',
      calories:              'Calories',
      
      booking:               'BOOK YOUR EXPERIENCE',
      hours:                 'Hours',
      location:              'Location'
    },
    ar: {
      brand:                 'أومامي برايم',
      tagline:               'البعد الخامس من الطعم',
      subtitle:              'الطهي الجزيئي المعاصر الياباني',
      tracking:              'تتبع الطبق',
      tap_dish:              'انقر على الطبق لتجربة التحضير',
      swipe:                 'اسحب للإغلاق',
      
      dish_title:            'اسم الطبق',
      dish_category:         'الفئة',
      dish_price:            'السعر',
      price_label:           'للشخص الواحد',
      dish_ingredients:      'المكونات الرئيسية',
      ingredients_label:     'المكونات',
      
      rate_google:           'التقييم على خرائط جوجل',
      watch_video:           'شاهد التحضير',
      course_position:       'الدورة',
      
      tasting_notes:         'ملاحظات الذوق',
      chef_note:             'ملاحظة الشيف',
      calories:              'السعرات الحرارية',
      
      booking:               'احجز تجربتك',
      hours:                 'الساعات',
      location:              'الموقع'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────────
     AR CONFIGURATION & DEPLOYMENT
  ───────────────────────────────────────────────────────────────────────────────── */
  ar: {
    mindFile:        '/assets/umami-prime.mind',      /* MindAR target file path */
    demoMode:        true,                             /* Set to false for production */
    tiltMin:         20,                               /* Minimum device tilt angle */
    tiltMax:         80,                               /* Maximum device tilt angle */
    targetTimeout:   8000,                             /* ms before tracking lost */
    
    /* Three.js Parallax Configuration */
    parallax: {
      dishScale:     2.5,
      glowIntensity: 0.15,
      rotationSpeed: 0.0008,
      cameraFOV:     75,
      nearPlane:     0.1,
      farPlane:      1000
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────────
     FOLDER STRUCTURE & ASSET ORGANIZATION
     
     This data package should be deployed with the following directory structure:
     
     root/
     ├── assets/
     │   ├── umami-prime.mind           (MindAR target image database)
     │   ├── umami-prime-logo.png       (Restaurant logo, ~400x400)
     │   └── restaurant-metadata.json   (Alternative flat-file storage)
     │
     ├── clients/
     │   └── umami-prime-config.json    (Client-specific overrides)
     │
     ├── content/
     │   ├── miso-bluefin-prep.mp4      (Dish 1 prep video)
     │   ├── scallop-sous-vide-prep.mp4 (Dish 2 prep video)
     │   └── miso-caramel-sphere.mp4    (Dish 3 prep video)
     │
     ├── index.html                      (Core AR application—DO NOT MODIFY)
     ├── style.css                       (Luxury styling—DO NOT MODIFY)
     └── data.js                         (THIS FILE — Restaurant data configuration)
     
  ───────────────────────────────────────────────────────────────────────────────── */
  
  deployment: {
    version:         '2.0',
    lastUpdated:     '2026-04-02',
    requiredFiles: {
      'assets/umami-prime.mind':     'MindAR image recognition database (3.2 MB)',
      'assets/umami-prime-logo.png': 'Restaurant logo (400x400 pixels, <100KB)',
      'content/miso-bluefin-prep.mp4': 'Dish 1 video (H.264, <50MB)',
      'content/scallop-sous-vide-prep.mp4': 'Dish 2 video (H.264, <50MB)',
      'content/miso-caramel-sphere.mp4': 'Dish 3 video (H.264, <50MB)',
      'data.js': 'Restaurant data package (THIS FILE)'
    },
    
    cdnAssets: {
      heroImage:     'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=85',
      logoImage:     'https://images.unsplash.com/photo-1604661701821-ba614908a88f?w=400&q=85',
      dish1Image:    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=85',
      dish2Image:    'https://images.unsplash.com/photo-1599810694-b5ac4dd37e6f?w=600&q=85',
      dish3Image:    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=85',
      videoExternal: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/'
    },
    
    integrationNotes: [
      '1. This data.js is production-ready and requires NO modifications to index.html or style.css',
      '2. Import this data into your CONFIG object via: const UMAMI = RESTAURANT_DATA;',
      '3. All image URLs use Unsplash CDN (free, high-quality, no attribution required)',
      '4. Video URLs are sample placeholders—replace with actual dish prep videos',
      '5. MindAR target file must be generated from restaurant interior photos',
      '6. All prices are in USD; JPY equivalents provided for Japanese market',
      '7. Bilingual support (EN/AR) is fully integrated; add more locales by extending i18n object',
      '8. Google Maps embed uses restaurant coordinates (Roppongi Hills, Tokyo)',
      '9. Michelin rating is for reference; update to match actual restaurant status',
      '10. Modify demoMode flag based on deployment environment (true=presentation, false=production)'
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────────
     EXPORT FOR MODULE INTEGRATION
  ───────────────────────────────────────────────────────────────────────────────── */
  export: function() {
    return {
      restaurant: this.restaurant,
      menu: this.menu,
      i18n: this.i18n,
      ar: this.ar,
      deployment: this.deployment
    };
  }
};

/* ═══════════════════════════════════════════════════════════════════════════════════
   INTEGRATION INSTRUCTIONS
   
   To integrate UMAMI PRIME into the AR Gastronomy Portal:
   
   1. LOAD THIS FILE
      <script src="data.js"></script>
   
   2. MERGE WITH EXISTING CONFIG (in index.html)
      Object.assign(CONFIG, RESTAURANT_DATA);
      
      OR replace the default CONFIG.restaurant and CONFIG.menu arrays:
      CONFIG.restaurant = RESTAURANT_DATA.restaurant;
      CONFIG.menu = RESTAURANT_DATA.menu;
      Object.assign(CONFIG.i18n, RESTAURANT_DATA.i18n);
   
   3. VERIFY AR TARGETS
      - Ensure MindAR target file is loaded correctly
      - Test with sample images from restaurant interior
      - Confirm gyro permission is granted on mobile devices
   
   4. DEPLOY VIDEO CONTENT
      - Replace placeholder video URLs with actual MP4 files
      - Ensure videos are in content/ folder or hosted on CDN
      - Test video playback in modal before going live
   
   5. CUSTOMIZE FOR YOUR RESTAURANT
      - Update restaurant metadata (name, address, contact)
      - Replace image URLs with your own CDN or local assets
      - Modify menu items to match your offerings
      - Adjust colors to match your brand
      - Update i18n strings for additional languages
   
   6. TEST THOROUGHLY
      - Launch screen loads correctly
      - Portal button animation smooth
      - AR viewport activates without errors
      - Auto-trigger opens blade after 2 seconds
      - Staggered block animations cascade properly
      - Videos play without buffering
      - Mobile responsiveness works on all breakpoints
      - RTL layout works for Arabic (if applicable)
═══════════════════════════════════════════════════════════════════════════════════ */

/* Optional: Export for ES6 modules */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RESTAURANT_DATA;
}
