// الترجمة العربية والإنجليزية
const translations = {
    ar: {
        home: "الرئيسية",
        facilities: "المرافق",
        packages: "الحزم",
        about: "عن الفندق",
        contact: "تواصل معنا",
        whyChoose: "لماذا تختار لوفينج هومز",
        weProvide: "نحن نقدم تجربة متكاملة تتجاوز مفهوم الإيواء التقليدي لنضمن السعادة والصحة لحيوانك الأليف",
        bookNow: "احجز إقامة كلبك الآن",
        security: "أمان ومراقبة على مدار الساعة",
        securityDesc: "نوفر بيئة آمنة تماماً مع كاميرات مراقبة متطورة وطاقم بشري متوفر 24 ساعة لضمان سلامة كلبك في كل لحظة يقضيها معنا.",
        medical: "رعاية بيطرية فورية",
        medicalDesc: "صحة كلبك هي أولويتنا القصوى لذلك نتعاون مع نخبة من الأطباء البيطريين لتقديم فحوصات دورية ورعاية طبية فورية عند الحاجة.",
        activity: "نشاط وترفيه مستمر",
        activityDesc: "لا مجال للملل هنا حيث نوفر برامج يومية تشمل الركض في المساحات الخضراء ومسارات الرشاقة وألعاب التفاعل الاجتماعي مع الكلاب الأخرى.",
        heroTitle: "الملاذ الآمن لكلبك في هونج كونج",
        heroDesc: "نحن ندرك أن كلبك ليس مجرد حيوان أليف بل هو فرد من العائلة ولذلك صممنا فندق لوفينغ هومز ليكون الوجهة الفاخرة الأولى التي تقدم رعاية استثنائية تجمع بين الرفاهية والأمان المطلق سواء كنت تبحث عن إقامة طويلة أثناء سفرك أو رعاية نهارية مليئة باللعب فإننا نضمن لكلبك تجربة لا تنسى",
        facilitiesTitle: "مرافقنا الفاخرة",
        facilitiesDesc: "لقد صممنا كل زاوية في لوفينغ هومز بعناية فائقة لضمان راحة كلبك وتقديم تجربة فندقية لا تضاهى تلبي كافة احتياجاته الجسدية والنفسية",
        grooming: "صالة الحلاقة والسبا",
        groomingDesc: "صالة مجهزة بأحدث أدوات العناية لتوفير جلسات استحمام دافئة وقص شعر احترافي وتقليم الأظافر ليخرج كلبك بأبهى حلة وأفضل نظافة.",
        suites: "أجنحة فندقية مكيفة",
        suitesDesc: "أجنحة خاصة واسعة مزودة بنظام تدفئة وتبريد تحت الأرضية لضمان درجة حرارة مثالية بالإضافة إلى شاشات تعرض برامج مهدئة للكلاب قبل النوم.",
        outdoor: "مراعي خارجية آمنة",
        outdoorDesc: "مساحات عشبية واسعة ومحاطة بأسوار عالية تتيح لكلبك الركض واللعب بحرية تامة في الهواء الطلق تحت إشراف طاقم التدريب المتخصص.",
        transport: "خدمة النقل الفاخرة",
        transportDesc: "نوفر خدمة نقل آمنة ومريحة من وإلى منزلك باستخدام مركبات مكيفة ومجهزة بصناديق نقل واسعة لضمان راحة كلبك طوال الرحلة.",
        packagesTitle: "حزم الإقامة المتنوعة",
        packagesDesc: "لقد صممنا حزماً مرنة تناسب ميزانيتك وتلبي احتياجات كلبك سواء كنت تبحث عن رعاية نهارية قصيرة أو إقامة فندقية فاخرة وطويلة",
        dayPackage: "حزمة اليوم الواحد",
        perDay: "/ يوم",
        dayPackageFeatures: "مثالية للأشخاص المشغولين طوال اليوم وتتضمن:",
        walk2: "مشي مرتين يومياً مع المدربين",
        playArea: "الدخول لمنطقة اللعب الخارجية",
        agility: "تجربة مسار الرشاقة وحفر الرمل",
        lunch: "وجبة غداء خفيفة صحية",
        classicPackage: "الحزمة الكلاسيكية",
        mostPopular: "الأكثر طلباً",
        classicFeatures: "الخيار المتوازن للإقامات المريحة وتتضمن:",
        walk3: "مشٍي 3 مرات يومياً",
        indoorPlay: "حظيرة لعب داخلية وغرفة مكيفة",
        relaxation: "جلسة استرخاء مع موسيقى مهدئة",
        groomingWeekly: "جلسة تنظيف وتمشيط أسبوعية",
        vipPackage: "الحزمة المميزة VIP",
        vipFeatures: "أقصى درجات الرفاهية والاهتمام وتتضمن:",
        walk4: "مشٍي 4 مرات وجلسات لعب فردية",
        privateGrass: "مساحة عشبية خاصة لكلبك فقط",
        spa: "جلسة سبا متكاملة وحلاقة فاخرة",
        dailyReport: "إرسال تقرير مصور يومياً للمالك",
        choosePackage: "اختر هذه الحزمة",
        aboutTitle: "من نحن",
        ourStory: "قصتنا ورؤيتنا",
        aboutDesc1: "تأسس فندق لوفينغ هومز في قلب هونج كونج انطلاقاً من شغفنا العميق وحبنا اللامحدود للحيوانات الأليفة. لقد لاحظنا افتقار السوق لمكان يجمع بين الرعاية الطبية والرفاهية الفندقية الفاخرة فقررنا بناء هذا الصرح ليكون المنزل الثاني لكلبك.",
        aboutDesc2: "يضم فريقنا نخبة من الأطباء البيطريين ومدربي السلوك المحترفين الذين يكرسون وقتهم لضمان راحة وسعادة نزلاء الفhotel. نحن نلتزم بتقديم أعلى معايير الجودة والنظافة العالمية.",
        bookingTitle: "نموذج الحجز الإلكتروني",
        bookingDesc: "يرجى تعبئة بياناتك بدقة وسيقوم فريقنا بالتواصل معك لتأكيد الحجز وترتيب أي طلبات خاصة لكلبك",
        ownerName: "الاسم الكامل لمالك الكلب:",
        ownerNamePlaceholder: "أدخل اسمك الثلاثي",
        phone: "رقم الهاتف للتواصل:",
        phonePlaceholder: "مثال: 971501234567+",
        dogName: "اسم الكلب وسلالته:",
        dogNamePlaceholder: "مثال: ماكس - جولدن ريتريفر",
        arrivalDate: "تاريخ الوصول:",
        stayDays: "عدد أيام الإقامة:",
        daysPlaceholder: "عدد الأيام",
        selectPackage: "اختر نوع الحزمة المطلوبة:",
        selectPackageOption: "-- الرجاء اختيار حزمة --",
        dayPackagePrice: "حزمة اليوم الواحد ($200 في اليوم)",
        classicPackagePrice: "الحزمة الكلاسيكية ($500 في اليوم)",
        vipPackagePrice: "الحزمة المميزة VIP ($700 في اليوم)",
        additionalNotes: "ملاحظات إضافية (اختياري):",
        notesPlaceholder: "اذكر هنا أي تعليمات طبية أو غذائية خاصة بكلبك",
        estimatedCost: "التكلفة التقديرية للإقامة",
        confirmBooking: "تأكيد وإرسال طلب الحجز",
        contactTitle: "تواصل معنا",
        contactDesc: "نحن هنا للرد على جميع أسئلتك وتقديم أفضل رعاية لحيوانك الأليف",
        phoneLabel: "الهاتف",
        phoneAvailable: "متاح على مدار الساعة",
        emailLabel: "البريد الإلكتروني",
        emailReply: "نرد خلال 24 ساعة",
        locationLabel: "الموقع",
        locationAddress: "هونج كونج، منطقة كولون",
        locationNear: "قرب محطة المترو",
        sendMessage: "أرسل لنا رسالة",
        yourName: "اسمك",
        yourNamePlaceholder: "أدخل اسمك",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        messageLabel: "الرسالة",
        messagePlaceholder: "اكتب رسالتك هنا...",
        sendBtn: "إرسال الرسالة",
        bookingSuccess: "تم إرسال طلبك بنجاح. سيقوم فريق لوفينغ هومز بالتواصل معك في أقرب وقت ممكن.",
        contactSuccess: "تم إرسال رسالتك بنجاح. سنرد عليك في أقرب وقت ممكن.",
        instructionsTitle: "تعليمات استخدام الموقع",
        instructionsSubtitle: "تابع هذه الخطوات البسيطة لاختيار الخدمة المناسبة لحيوانك الأليف والحجز بسهولة",
        step1Title: "1. استكشف المرافق",
        step1Desc: "تصفح صفحة المرافق للتعرف على جميع الخدمات المتاحة مثل صالة السبا، الأجنحة الفاخرة، المراعي الخارجية، وخدمة النقل.",
        step2Title: "2. اختر الحزمة المناسبة",
        step2Desc: "انتقل إلى صفحة الحزم لمقارنة الأسعار والخدمات بين حزمة اليوم ($200)، الكلاسيكية ($500)، والـVIP ($700).",
        step3Title: "3. احجز إقامة كلبك",
        step3Desc: "املأ نموذج الحجز مع تفاصيل مالك الكلب، اسم الكلب، التواريخ، والحزمة المختارة. ستتلقى تأكيداً سريعاً مع تقدير التكلفة.",
        step4Title: "4. تواصل معنا",
        step4Desc: "لأي استفسارات، استخدم صفحة تواصل معنا أو اتصل بنا مباشرة على +852 1234 5678 (24/7).",
        tipsTitle: "نصائح إضافية",
        tip1: "تأكد من تحديث لقاحات كلبك قبل الحجز",
        tip2: "أحضر وجباته المعتادة إن أمكن",
        tip3: "أبلغنا بأي حساسية أو سلوكيات خاصة",
        tip4: "يمكنك استخدام أزرار التحكم العائمة ⚙️ لتغيير اللغة، الوضع الليلي، وحجم الخط",
        instructions: "تعليمات الاستخدام"
    },
    en: {
        instructionsTitle: "How to Use the Website",
        instructionsSubtitle: "Follow these simple steps to choose the right service for your pet and book easily",
        step1Title: "1. Explore Facilities",
        step1Desc: "Browse the Facilities page to learn about all available services like spa salon, luxury suites, outdoor fields, and transport.",
        step2Title: "2. Choose the Right Package",
        step2Desc: "Go to Packages page to compare prices and services between Daily ($200), Classic ($500), and VIP ($700).",
        step3Title: "3. Book Your Dog's Stay",
        step3Desc: "Fill the booking form with owner details, dog name, dates, and selected package. You'll receive quick confirmation with cost estimate.",
        step4Title: "4. Contact Us",
        step4Desc: "For any inquiries, use Contact page or call +852 1234 5678 (24/7).",
        tipsTitle: "Additional Tips",
        tip1: "Ensure your dog's vaccinations are up to date before booking",
        tip2: "Bring their usual food if possible",
        tip3: "Inform us of any allergies or special behaviors",
        tip4: "Use the floating control buttons ⚙️ to change language, dark mode, and font size",
        instructions: "Usage Instructions",
        home: "Home",
        facilities: "Facilities",
        packages: "Packages",
        about: "About Us",
        contact: "Contact Us",
        whyChoose: "Why Choose Loving Homes",
        weProvide: "We provide a comprehensive experience beyond traditional boarding to ensure the happiness and health of your pet",
        bookNow: "Book Your Pet's Stay Now",
        security: "24/7 Safety & Monitoring",
        securityDesc: "We provide a completely safe environment with advanced surveillance cameras and staff available 24 hours to ensure your dog's safety every moment.",
        medical: "Immediate Veterinary Care",
        medicalDesc: "Your dog's health is our top priority, so we collaborate with elite veterinarians for regular check-ups and immediate medical care when needed.",
        activity: "Continuous Activity & Entertainment",
        activityDesc: "No room for boredom here - we provide daily programs including running in green spaces, agility courses, and social interaction games with other dogs.",
        heroTitle: "The Safe Haven for Your Dog in Hong Kong",
        heroDesc: "We understand that your dog is not just a pet but a family member. That's why we designed Loving Homes to be the premier luxury destination offering exceptional care that combines absolute comfort and security, whether you're looking for a long-term stay while traveling or day care full of play, we guarantee your dog an unforgettable experience.",
        facilitiesTitle: "Our Luxury Facilities",
        facilitiesDesc: "We have carefully designed every corner of Loving Homes to ensure your dog's comfort and provide an unparalleled hotel experience that meets all their physical and psychological needs.",
        grooming: "Grooming & Spa Salon",
        groomingDesc: "A salon equipped with the latest grooming tools to provide warm bath sessions, professional haircuts, and nail trimming so your dog looks their best.",
        suites: "Air-Conditioned Hotel Suites",
        suitesDesc: "Spacious private suites with underfloor heating and cooling systems to ensure optimal temperature, plus screens showing calming programs for dogs before bedtime.",
        outdoor: "Safe Outdoor Fields",
        outdoorDesc: "Wide grassy areas surrounded by high fences allowing your dog to run and play freely outdoors under the supervision of specialized training staff.",
        transport: "Luxury Transport Service",
        transportDesc: "We provide safe and comfortable transport to and from your home using air-conditioned vehicles equipped with spacious transport boxes for your dog's comfort throughout the journey.",
        packagesTitle: "Various Stay Packages",
        packagesDesc: "We have designed flexible packages that suit your budget and meet your dog's needs, whether you're looking for short-term day care or luxurious long-term hotel stays.",
        dayPackage: "Daily Package",
        perDay: "/ day",
        dayPackageFeatures: "Ideal for busy people all day and includes:",
        walk2: "Two daily walks with trainers",
        playArea: "Access to outdoor play area",
        agility: "Agility course and sand pit experience",
        lunch: "Healthy light lunch",
        classicPackage: "Classic Package",
        mostPopular: "Most Popular",
        classicFeatures: "The balanced option for comfortable stays and includes:",
        walk3: "3 daily walks",
        indoorPlay: "Indoor playroom and air-conditioned room",
        relaxation: "Relaxation session with calming music",
        groomingWeekly: "Weekly grooming and brushing session",
        vipPackage: "VIP Premium Package",
        vipFeatures: "The ultimate luxury and care includes:",
        walk4: "4 walks and individual play sessions",
        privateGrass: "Private grass area for your dog only",
        spa: "Full spa session and luxury grooming",
        dailyReport: "Daily photo report sent to owner",
        choosePackage: "Choose This Package",
        aboutTitle: "About Us",
        ourStory: "Our Story & Vision",
        aboutDesc1: "Loving Homes Hotel was founded in the heart of Hong Kong out of our deep passion and unlimited love for pets. We noticed the market lacked a place that combines medical care and luxury hotel hospitality, so we decided to build this landmark to be your dog's second home.",
        aboutDesc2: "Our team includes elite veterinarians and professional behavior trainers who dedicate their time to ensure the comfort and happiness of our hotel guests. We are committed to delivering the highest international quality and hygiene standards.",
        bookingTitle: "Online Booking Form",
        bookingDesc: "Please fill in your details accurately and our team will contact you to confirm the booking and arrange any special requests for your dog.",
        ownerName: "Full Dog Owner Name:",
        ownerNamePlaceholder: "Enter your full name",
        phone: "Phone Number for Contact:",
        phonePlaceholder: "Example: 971501234567+",
        dogName: "Dog Name and Breed:",
        dogNamePlaceholder: "Example: Max - Golden Retriever",
        arrivalDate: "Arrival Date:",
        stayDays: "Number of Stay Days:",
        daysPlaceholder: "Number of days",
        selectPackage: "Select Package Type:",
        selectPackageOption: "-- Please select a package --",
        dayPackagePrice: "Daily Package ($200 per day)",
        classicPackagePrice: "Classic Package ($500 per day)",
        vipPackagePrice: "VIP Package ($700 per day)",
        additionalNotes: "Additional Notes (Optional):",
        notesPlaceholder: "Mention any special medical or dietary instructions for your dog",
        estimatedCost: "Estimated Stay Cost",
        confirmBooking: "Confirm & Send Booking Request",
        contactTitle: "Contact Us",
        contactDesc: "We are here to answer all your questions and provide the best care for your pet",
        phoneLabel: "Phone",
        phoneAvailable: "Available 24/7",
        emailLabel: "Email",
        emailReply: "We reply within 24 hours",
        locationLabel: "Location",
        locationAddress: "Hong Kong, Kowloon District",
        locationNear: "Near MTR Station",
        sendMessage: "Send Us a Message",
        yourName: "Your Name",
        yourNamePlaceholder: "Enter your name",
        emailPlaceholder: "Enter your email",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        sendBtn: "Send Message",
        bookingSuccess: "Your request has been sent successfully. The Loving Homes team will contact you soon.",
        contactSuccess: "Your message has been sent successfully. We will reply as soon as possible."
    }
};


function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';


    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });


    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // تحديث النصوص في العناصر المحددة
    updatePageText(lang);
}

function updatePageText(lang) {
    const t = translations[lang];

    // تحديث روابط التنقل
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks[0]) navLinks[0].textContent = t.home;
    if (navLinks[1]) navLinks[1].textContent = t.facilities;
    if (navLinks[2]) navLinks[2].textContent = t.packages;
    if (navLinks[3]) navLinks[3].textContent = t.about;
    if (navLinks[4]) navLinks[4].textContent = t.contact;
    if (navLinks[5]) navLinks[5].textContent = t.instructions;

    // الصفحة الرئيسية - الصفحة الأولى
    const heroTitle = document.querySelector('div[style*="padding: 150px"] h1');
    if (heroTitle) heroTitle.textContent = t.heroTitle;

    const heroDesc = document.querySelector('div[style*="padding: 150px"] p');
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    const bookBtn = document.querySelector('div[style*="padding: 150px"] .btn');
    if (bookBtn) bookBtn.textContent = t.bookNow;

    // تحديث عناوين الأقسام - تحديد الصفحة من خلال فحص المحتوى
    const sectionTitles = document.querySelectorAll('.section-title');
    const sectionSubtitles = document.querySelectorAll('.section-subtitle');

    // التحقق من الصفحة الحالية من خلال فحص elements محددة
    const hasHeroSection = !!document.querySelector('div[style*="padding: 150px"]');
    const hasPackageSelect = !!document.querySelector('#package');
    const hasContactForm = !!document.querySelector('#contactForm');
    const hasBookingForm = !!document.querySelector('#bookingForm');
    const pageTitleText = sectionTitles[0] ? sectionTitles[0].textContent : '';

    // صفحة تعليمات الاستخدام
    const isInstructionsPage = pageTitleText.includes('تعليمات') || pageTitleText.includes('instructions');
    if (isInstructionsPage) {
        if (sectionTitles[0]) sectionTitles[0].textContent = t.instructionsTitle;
        if (sectionSubtitles[0]) sectionSubtitles[0].textContent = t.instructionsSubtitle;

        const cards = document.querySelectorAll('.card');
        if (cards.length >= 4) {
            const card1 = cards[0];
            const h3_1 = card1.querySelector('h3');
            const p_1 = card1.querySelector('p');
            if (h3_1) h3_1.textContent = t.step1Title;
            if (p_1) p_1.textContent = t.step1Desc;

            const card2 = cards[1];
            const h3_2 = card2.querySelector('h3');
            const p_2 = card2.querySelector('p');
            if (h3_2) h3_2.textContent = t.step2Title;
            if (p_2) p_2.textContent = t.step2Desc;

            const card3 = cards[2];
            const h3_3 = card3.querySelector('h3');
            const p_3 = card3.querySelector('p');
            if (h3_3) h3_3.textContent = t.step3Title;
            if (p_3) p_3.textContent = t.step3Desc;

            const card4 = cards[3];
            const h3_4 = card4.querySelector('h3');
            const p_4 = card4.querySelector('p');
            if (h3_4) h3_4.textContent = t.step4Title;
            if (p_4) p_4.textContent = t.step4Desc;
        }

        // قسم النصائح
        const tipsSection = document.querySelector('[style*="linear-gradient"] h2');
        if (tipsSection && t.tipsTitle) {
            tipsSection.textContent = t.tipsTitle;
        }
        // ترجمة قائمة النصائح
        const tipsList = document.querySelector('[data-translate="tipsList"]');
        if (tipsList) {
            const tipItems = tipsList.querySelectorAll('li');
            if (tipItems[0] && t.tip1) tipItems[0].textContent = t.tip1;
            if (tipItems[1] && t.tip2) tipItems[1].textContent = t.tip2;
            if (tipItems[2] && t.tip3) tipItems[2].textContent = t.tip3;
            if (tipItems[3] && t.tip4) tipItems[3].textContent = t.tip4;
        }
    }

    // صفحة المرافق - فحص الصور
    const hasGroomingImg = !!document.querySelector('img[alt="صالة الحلاقة"]');
    const hasSuitesImg = !!document.querySelector('img[alt="الغرف الفندقية"]');

    // صفحة من نحن
    const hasAboutImg = !!document.querySelector('img[alt="فريق الفندق"]') || document.querySelector('img[src*="1544568100"]');

    // تحديث الصفحة الرئيسية
    if (hasHeroSection && sectionTitles[0]) {
        // تحديث العنوان الثاني (لماذا تختار لوفينغ هومز)
        if (sectionTitles[1]) {
            sectionTitles[1].textContent = t.whyChoose;
        }
        // تحديث الوصف الثاني
        if (sectionSubtitles[1]) {
            sectionSubtitles[1].textContent = t.weProvide;
        }

        // تحديث البطاقات
        const cards = document.querySelectorAll('.card');
        if (cards.length >= 3) {
            const card1h3 = cards[0].querySelector('h3:nth-of-type(2)');
            if (card1h3) card1h3.textContent = t.security;
            const card1p = cards[0].querySelector('.card-content p') || cards[0].querySelector('p');
            if (card1p) card1p.textContent = t.securityDesc;

            const card2h3 = cards[1].querySelector('h3:nth-of-type(2)');
            if (card2h3) card2h3.textContent = t.medical;
            const card2p = cards[1].querySelector('.card-content p') || cards[1].querySelector('p');
            if (card2p) card2p.textContent = t.medicalDesc;

            const card3h3 = cards[2].querySelector('h3:nth-of-type(2)');
            if (card3h3) card3h3.textContent = t.activity;
            const card3p = cards[2].querySelector('.card-content p') || cards[2].querySelector('p');
            if (card3p) card3p.textContent = t.activityDesc;
        }
    }

    // صفحة المرافق
    if ((hasGroomingImg || hasSuitesImg) && sectionTitles[0]) {
        sectionTitles[0].textContent = t.facilitiesTitle;
        if (sectionSubtitles[0]) sectionSubtitles[0].textContent = t.facilitiesDesc;

        const cards = document.querySelectorAll('.card');
        if (cards.length >= 4) {
            const contents = cards[0].querySelector('.card-content');
            if (contents) {
                const h3 = contents.querySelector('h3');
                const p = contents.querySelector('p');
                if (h3) h3.textContent = t.grooming;
                if (p) p.textContent = t.groomingDesc;
            }
            const contents2 = cards[1].querySelector('.card-content');
            if (contents2) {
                const h3 = contents2.querySelector('h3');
                const p = contents2.querySelector('p');
                if (h3) h3.textContent = t.suites;
                if (p) p.textContent = t.suitesDesc;
            }
            const contents3 = cards[2].querySelector('.card-content');
            if (contents3) {
                const h3 = contents3.querySelector('h3');
                const p = contents3.querySelector('p');
                if (h3) h3.textContent = t.outdoor;
                if (p) p.textContent = t.outdoorDesc;
            }
            const contents4 = cards[3].querySelector('.card-content');
            if (contents4) {
                const h3 = contents4.querySelector('h3');
                const p = contents4.querySelector('p');
                if (h3) h3.textContent = t.transport;
                if (p) p.textContent = t.transportDesc;
            }
        }
    }

    // صفحة الحزم - تحديد الصفحة من خلال فحص العناوين أو المحتوى
    const packagesTitle = document.querySelector('.section-title');
    const isPackagesPage = packagesTitle && (
        packagesTitle.textContent.includes('حزم') ||
        packagesTitle.textContent.includes('حزمة') ||
        packagesTitle.textContent.includes('Packages') ||
        packagesTitle.textContent.includes('Package')
    );

    if (hasPackageSelect || isPackagesPage || pageTitleText.includes('حزم') || pageTitleText.includes('حزمة')) {
        if (sectionTitles[0]) sectionTitles[0].textContent = t.packagesTitle;
        if (sectionSubtitles[0]) sectionSubtitles[0].textContent = t.packagesDesc;

        const cards = document.querySelectorAll('.card');
        if (cards.length >= 3) {
            // الحزمة الأولى
            const card1 = cards[0];
            const h3_1 = card1.querySelector('h3');
            const h2_1 = card1.querySelector('h2');
            const p_1 = card1.querySelector('p');
            const lis_1 = card1.querySelectorAll('li');
            const btn_1 = card1.querySelector('.btn');

            if (h3_1) h3_1.textContent = t.dayPackage;
            if (h2_1) h2_1.innerHTML = '$200 <span style="font-size: 1rem; color: var(--text);">' + t.perDay + '</span>';
            if (p_1) p_1.textContent = t.dayPackageFeatures;
            if (lis_1[0]) lis_1[0].textContent = '✔️ ' + t.walk2;
            if (lis_1[1]) lis_1[1].textContent = '✔️ ' + t.playArea;
            if (lis_1[2]) lis_1[2].textContent = '✔️ ' + t.agility;
            if (lis_1[3]) lis_1[3].textContent = '✔️ ' + t.lunch;
            if (btn_1) btn_1.textContent = t.choosePackage;

            // الحزمة الثانية
            const card2 = cards[1];
            const h3_2 = card2.querySelector('h3');
            const h2_2 = card2.querySelector('h2');
            const p_2 = card2.querySelectorAll('p');
            const lis_2 = card2.querySelectorAll('li');
            const btn_2 = card2.querySelector('.btn');
            const div_2 = card2.querySelector('div');

            if (h3_2) h3_2.textContent = t.classicPackage;
            if (h2_2) h2_2.innerHTML = '$500 <span style="font-size: 1rem; color: var(--text);">' + t.perDay + '</span>';
            if (p_2[1]) p_2[1].textContent = t.classicFeatures;
            if (div_2) div_2.textContent = t.mostPopular;
            if (lis_2[0]) lis_2[0].textContent = '✔️ ' + t.walk3;
            if (lis_2[1]) lis_2[1].textContent = '✔️ ' + t.indoorPlay;
            if (lis_2[2]) lis_2[2].textContent = '✔️ ' + t.relaxation;
            if (lis_2[3]) lis_2[3].textContent = '✔️ ' + t.groomingWeekly;
            if (btn_2) btn_2.textContent = t.choosePackage;

            // الحزمة الثالثة
            const card3 = cards[2];
            const h3_3 = card3.querySelector('h3');
            const h2_3 = card3.querySelector('h2');
            const p_3 = card3.querySelector('p');
            const lis_3 = card3.querySelectorAll('li');
            const btn_3 = card3.querySelector('.btn');

            if (h3_3) h3_3.textContent = t.vipPackage;
            if (h2_3) h2_3.innerHTML = '$700 <span style="font-size: 1rem; color: var(--text);">' + t.perDay + '</span>';
            if (p_3) p_3.textContent = t.vipFeatures;
            if (lis_3[0]) lis_3[0].textContent = '✔️ ' + t.walk4;
            if (lis_3[1]) lis_3[1].textContent = '✔️ ' + t.privateGrass;
            if (lis_3[2]) lis_3[2].textContent = '✔️ ' + t.spa;
            if (lis_3[3]) lis_3[3].textContent = '✔️ ' + t.dailyReport;
            if (btn_3) btn_3.textContent = t.choosePackage;
        }
    }

    // صفحة من نحن - تحديد الصفحة من خلال فحص العناوين
    const aboutTitle = document.querySelector('.section-title');
    const isAboutPage = aboutTitle && (
        aboutTitle.textContent.includes('من نحن') ||
        aboutTitle.textContent.includes('About Us')
    );

    if (hasAboutImg || isAboutPage || pageTitleText.includes('من نحن')) {
        if (sectionTitles[0]) sectionTitles[0].textContent = t.aboutTitle;

        const aboutDiv = document.querySelector('.container > div');
        if (aboutDiv) {
            const h3s = aboutDiv.querySelectorAll('h3');
            const ps = aboutDiv.querySelectorAll('p');
            if (h3s[0]) h3s[0].textContent = t.ourStory;
            if (ps[0]) ps[0].textContent = t.aboutDesc1;
            if (ps[1]) ps[1].textContent = t.aboutDesc2;
        }
    }

    // صفحة تواصل معنا - تحديد الصفحة من خلال فحص العناوين
    const contactTitle = document.querySelector('.section-title');
    const isContactPage = contactTitle && (
        contactTitle.textContent.includes('تواصل') ||
        contactTitle.textContent.includes('Contact Us')
    );

    if (hasContactForm || isContactPage || pageTitleText.includes('تواصل')) {
        if (sectionTitles[0]) sectionTitles[0].textContent = t.contactTitle;
        if (sectionSubtitles[0]) sectionSubtitles[0].textContent = t.contactDesc;

        const cards = document.querySelectorAll('.card');
        if (cards.length >= 3) {
            // الهاتف
            const card1 = cards[0];
            const h3s1 = card1.querySelectorAll('h3');
            const ps1 = card1.querySelectorAll('p');
            if (h3s1[1]) h3s1[1].textContent = t.phoneLabel;
            if (ps1[0]) ps1[0].textContent = '+852 1234 5678';
            if (ps1[1]) ps1[1].textContent = t.phoneAvailable;

            // البريد
            const card2 = cards[1];
            const h3s2 = card2.querySelectorAll('h3');
            const ps2 = card2.querySelectorAll('p');
            if (h3s2[1]) h3s2[1].textContent = t.emailLabel;
            if (ps2[0]) ps2[0].textContent = 'info@lovinghomes.hk';
            if (ps2[1]) ps2[1].textContent = t.emailReply;

            // الموقع
            const card3 = cards[2];
            const h3s3 = card3.querySelectorAll('h3');
            const ps3 = card3.querySelectorAll('p');
            if (h3s3[1]) h3s3[1].textContent = t.locationLabel;
            if (ps3[0]) ps3[0].textContent = t.locationAddress;
            if (ps3[1]) ps3[1].textContent = t.locationNear;
        }

        // نموذج التواصل
        const form = document.querySelector('#contactForm');
        if (form) {
            const labels = form.querySelectorAll('.form-group label');
            const inputs = form.querySelectorAll('.form-group input, .form-group textarea');
            const btn = form.querySelector('.btn');

            if (labels[0]) labels[0].textContent = t.yourName;
            if (inputs[0]) inputs[0].placeholder = t.yourNamePlaceholder;
            if (labels[1]) labels[1].textContent = t.emailLabel;
            if (inputs[1]) inputs[1].placeholder = t.emailPlaceholder;
            if (labels[2]) labels[2].textContent = t.messageLabel;
            if (inputs[2]) inputs[2].placeholder = t.messagePlaceholder;
            if (btn) btn.textContent = t.sendBtn;
        }
    }

    // صفحة الحجز
    if (hasBookingForm) {
        if (sectionTitles[0]) sectionTitles[0].textContent = t.bookingTitle;
        if (sectionSubtitles[0]) sectionSubtitles[0].textContent = t.bookingDesc;

        const form = document.querySelector('#bookingForm');
        if (form) {
            const labels = form.querySelectorAll('.form-group label');
            const inputs = form.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
            const options = form.querySelectorAll('#package option');
            const priceCalc = form.querySelector('.price-calc');
            const submitBtn = form.querySelector('button[type="submit"]');

            if (labels[0]) labels[0].textContent = t.ownerName;
            if (inputs[0]) inputs[0].placeholder = t.ownerNamePlaceholder;
            if (labels[1]) labels[1].textContent = t.phone;
            if (inputs[1]) inputs[1].placeholder = t.phonePlaceholder;
            if (labels[2]) labels[2].textContent = t.dogName;
            if (inputs[2]) inputs[2].placeholder = t.dogNamePlaceholder;
            if (labels[3]) labels[3].textContent = t.arrivalDate;
            if (labels[4]) labels[4].textContent = t.stayDays;
            if (inputs[4]) inputs[4].placeholder = t.daysPlaceholder;
            if (labels[5]) labels[5].textContent = t.selectPackage;
            if (options[0]) options[0].textContent = t.selectPackageOption;
            if (options[1]) options[1].textContent = t.dayPackagePrice;
            if (options[2]) options[2].textContent = t.classicPackagePrice;
            if (options[3]) options[3].textContent = t.vipPackagePrice;
            if (labels[6]) labels[6].textContent = t.additionalNotes;
            if (inputs[6]) inputs[6].placeholder = t.notesPlaceholder;
            if (priceCalc) {
                priceCalc.childNodes[0].textContent = t.estimatedCost + ' ';
            }
            if (submitBtn) submitBtn.textContent = t.confirmBooking;
        }
    }
}

// دالة لتحديث حدث الزر العائم
function initFabButton() {
    const fabBtn = document.getElementById('fab-btn');
    const fabMenu = document.getElementById('fab-menu');

    if (fabBtn && fabMenu) {
        // استخدام onclick مباشرة بدلاً من addEventListener
        fabBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            fabMenu.classList.toggle('show');
        };
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // استعادة اللغة المحفوظة
    const savedLang = localStorage.getItem('language') || 'ar';
    if (savedLang === 'en') {
        setLanguage('en');
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) langBtn.textContent = '🇸🇦';
    }

    // تشغيل دالة الزر العائم
    initFabButton();

    // القائمة المنسدلة للهاتف
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
        hamburger.onclick = function() {
            nav.classList.toggle('active');
        };
    }

    // زر تغيير اللغة
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.onclick = function() {
            const currentLang = localStorage.getItem('language') || 'ar';
            const newLang = currentLang === 'ar' ? 'en' : 'ar';

            // تحديث اللغة وحفظها
            localStorage.setItem('language', newLang);
            document.documentElement.lang = newLang;
            document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

            // تحديث كامل للنصوص + data-translate
            setLanguage(newLang);

            // تحديث أيقونة الزر
            langToggle.textContent = newLang === 'ar' ? '🇺🇸' : '🇸🇦';
        };
    }

    // الوضع الليلي مع حفظ الإعداد
    const darkModeBtn = document.getElementById('dark-mode');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    if (darkModeBtn) {
        darkModeBtn.onclick = function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        };
    }

    // تكبير وتصغير الخط مع حفظ الإعداد - يؤثر على جميع النصوص
    let currentSize = localStorage.getItem('fontSize') ? parseInt(localStorage.getItem('fontSize')) : 100;

    // دالة تطبيق حجم الخط على العنصر الجذر (html) لتأثير rem
    function applyFontSize(size) {
        document.documentElement.style.fontSize = size + '%';
    }

    applyFontSize(currentSize);

    const fontUp = document.getElementById('font-up');
    const fontDown = document.getElementById('font-down');

    if (fontUp) {
        fontUp.onclick = function() {
            if (currentSize < 130) {
                currentSize += 10;
                applyFontSize(currentSize);
                localStorage.setItem('fontSize', currentSize);
            }
        };
    }
    if (fontDown) {
        fontDown.onclick = function() {
            if (currentSize > 80) {
                currentSize -= 10;
                applyFontSize(currentSize);
                localStorage.setItem('fontSize', currentSize);
            }
        };
    }

    // حاسبة التكلفة التلقائية في صفحة الحجز
    const packageSelect = document.getElementById('package');
    const daysInput = document.getElementById('days');
    const totalDisplay = document.getElementById('total-price');

    if (packageSelect && daysInput && totalDisplay) {
        function calculateTotal() {
            let price = parseInt(packageSelect.value) || 0;
            let days = parseInt(daysInput.value) || 0;
            totalDisplay.innerText = "$" + (price * days);
        }
        packageSelect.addEventListener('change', calculateTotal);
        daysInput.addEventListener('input', calculateTotal);
    }

    // معالجة النماذج
    const forms = document.querySelectorAll('form');
    const lang = localStorage.getItem('language') || 'ar';
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (form.id === 'bookingForm') {
                alert(translations[lang].bookingSuccess);
            } else {
                alert(translations[lang].contactSuccess);
            }
            form.reset();
            if (totalDisplay) totalDisplay.innerText = "$0";
        });
    });
});