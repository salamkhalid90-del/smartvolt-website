const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const quoteForm = document.querySelector("[data-quote-form]");
const formNote = document.querySelector("[data-form-note]");
const languageButtons = document.querySelectorAll("[data-lang]");
const trustGrid = document.querySelector("[data-trust-grid]");
const partnersShowcase = document.querySelector("[data-partners-showcase]");

const text = {
  en: {
    title: "Smart Volt Automation | Engineering Automation, KNX and Control Panels",
    navProjects: "Projects",
    navServices: "Services",
    navPanels: "Control Panels",
    navConsultation: "Consultation",
    navContact: "Contact",
    requestQuote: "Request Quote",
    brandSmall: "Engineering Automation",
    heroEyebrow: "KNX. Automation. Electrical Engineering.",
    heroTitle: "Smart Volt Automation",
    heroLead: "Integrated smart systems for villas, hotels, hospitals and commercial buildings, engineered with precision from concept to commissioning.",
    planProject: "Plan a Project",
    viewPortfolio: "View Portfolio",
    knxDemo: "KNX Smart Home Demo",
    trust0Title: "Electrical contracting",
    trust0Text: "Residential and industrial electrical works",
    trustLowTitle: "Low current systems",
    trustLowText: "CCTV, fire alarm, access control and network infrastructure",
    trust1Title: "KNX certified design",
    trust1Text: "Lighting, HVAC, shading, security and BMS coordination",
    trust2Title: "Panel manufacturing",
    trust2Text: "LV distribution, MCC, ATS, control and automation panels",
    trust3Title: "Project delivery",
    trust3Text: "Design, supply, installation, testing and handover support",
    introEyebrow: "Premium engineering partner",
    introTitle: "Automation infrastructure built for demanding buildings.",
    introText: "Smart Volt Automation focuses on smart building automation and intelligent electrical power solutions. With more than 15 years in Iraq's electrical sector, our work connects electrical infrastructure, control logic, field devices and user interfaces into reliable systems for modern buildings.",
    metric1: "Years in Iraq's electrical sector",
    metric2: "Single engineering interface",
    metric3: "Projects across villas, homes, residential compounds, hotels, universities and restaurants",
    metric4: "Successful boards for changeover, smart systems and automation applications",
    metric5: "Scalable electronic and smart energy solutions for modern buildings",
    projectsEyebrow: "Projects gallery",
    projectsTitle: "Reliable project environments with coordinated engineering.",
    projectsText: "From front-of-house guest experiences to technical plant rooms, the portfolio is presented around real engineering outcomes: control, comfort, safety and maintainability.",
    commercial: "Commercial Buildings",
    commercialTitle: "Integrated lighting, BMS and energy monitoring",
    hotels: "Hotels",
    hotelsTitle: "Guest room automation and public-area controls",
    hospitals: "Hospitals",
    hospitalsTitle: "Critical electrical and control coordination",
    villas: "Villas",
    villasTitle: "Private smart home systems with elegant interfaces",
    automation: "Automation",
    automationTitle: "PLC, sensors and field-device integration",
    servicesEyebrow: "Services",
    servicesTitle: "Engineering services for smart power and automation.",
    service1Title: "Smart Building Automation",
    service1Text: "Integrated control for lighting, HVAC, curtains, access, security, metering and visualization in villas, homes, hotels and commercial buildings.",
    service2Title: "Electrical Power Solutions",
    service2Text: "Engineering support for distribution concepts, load planning, protection coordination, power monitoring and site execution.",
    service3Title: "Automation and BMS",
    service3Text: "PLC logic, integration gateways, dashboards, alarms and operational reporting for reliable building operation.",
    service4Title: "Testing and Commissioning",
    service4Text: "Point-to-point testing, functional scenarios, documentation, operator training and long-term technical support.",
    partnersEyebrow: "Technology partners",
    partnersTitle: "Trusted brands for professional engineering projects.",
    partnersText: "We work with proven electrical, automation and low-current platforms selected around project requirements, performance and long-term serviceability.",
    panelsEyebrow: "Control panels portfolio",
    panelsTitle: "Control panels designed for dependable operation.",
    panel1Title: "Precision LV distribution",
    panel1Text: "Main distribution, sub-main and final distribution boards with clean labeling and documentation.",
    panel2Title: "Motor and pump command",
    panel2Text: "Motor control centers, soft starters, VFD panels and sequence logic for MEP systems.",
    panel3Title: "PLC automation cores",
    panel3Text: "PLC, I/O, relays, power supplies, terminals and network devices built for serviceability.",
    panel4Title: "Power transfer intelligence",
    panel4Text: "Generator transfer and power continuity controls for commercial and critical facilities.",
    consultationEyebrow: "Engineering consultation",
    consultationTitle: "Clarity before procurement, execution or tendering.",
    consultationText: "Smart Volt Automation can review drawings, produce technical recommendations, define product specifications, validate panel requirements and support value engineering before site work begins.",
    step1Title: "Technical discovery",
    step1Text: "Project type, drawings, scope and constraints.",
    step2Title: "System architecture",
    step2Text: "Controls, panels, network, interfaces and expansion plan.",
    step3Title: "Commercial package",
    step3Text: "BOQ, product options, timeline and quotation basis.",
    step4Title: "Field execution method",
    step4Text: "Translating drawings to site conditions after studying obstacles, routes and installation sequence.",
    quoteEyebrow: "Request a quotation",
    quoteTitle: "Tell us what you are building.",
    quoteText: "Use this form to request pricing for smart home, KNX, automation, electrical works or control panel manufacturing. The form is ready for front-end capture and can be connected to email or CRM later.",
    fullName: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    projectType: "Project type",
    requiredSystems: "Required systems",
    projectDetails: "Project details",
    submitQuote: "Submit Quotation Request",
    namePlaceholder: "Your name",
    companyPlaceholder: "Company or project owner",
    emailPlaceholder: "name@example.com",
    phonePlaceholder: "0770 274 4755",
    detailsPlaceholder: "Location, building size, current stage, drawings available, preferred systems...",
    optProjectType: "Select project type",
    optVilla: "Villa / Smart Home",
    optHotel: "Hotel",
    optHospital: "Hospital",
    optCommercial: "Commercial Building",
    optPanel: "Control Panel",
    optConsultation: "Engineering Consultation",
    optSystems: "Select main scope",
    optKnx: "KNX and Smart Home",
    optElectrical: "Electrical Engineering",
    optAutomation: "Automation / BMS",
    optPanels: "Control Panels",
    optLowCurrent: "CCTV / Access / Low Current",
    optComplete: "Complete Package",
    clientTrust: "Why clients trust Smart Volt Automation",
    trustTitle: "Plan first, decide clearly, execute transparently.",
    trustCard1Title: "Pre-project study",
    trustCard1Text: "We review the site, requirements and available drawings before proposing equipment or prices.",
    trustCard2Title: "Real-world planning",
    trustCard2Text: "The client sees what will be installed, where it will be located, and how the system will operate.",
    trustCard3Title: "Documented scope",
    trustCard3Text: "Drawings, panel schedules, device lists and control points are prepared to reduce site surprises.",
    trustCard4Title: "Practical handover",
    trustCard4Text: "We deliver systems that are understandable for owners, operators and maintenance teams.",
    footerText: "Smart building automation, KNX, electrical engineering, control panels and intelligent electrical power solutions for premium buildings in Iraq.",
    contact: "Contact",
    socialMedia: "Social Media",
    projectTypes: "Project Types",
    baghdad: "Baghdad, Iraq",
    formNote: "{name}, your quotation request is ready to be connected to Smart Volt Automation's email or CRM workflow.",
    fallbackName: "Thank you",
    openNav: "Open navigation",
    closeNav: "Close navigation"
  },
  ar: {
    title: "Smart Volt Automation | حلول الأتمتة والهندسة الكهربائية",
    navProjects: "المشاريع",
    navServices: "الخدمات",
    navPanels: "لوحات السيطرة",
    navConsultation: "الاستشارات",
    navContact: "اتصل بنا",
    requestQuote: "طلب عرض سعر",
    brandSmall: "الأتمتة الهندسية",
    heroEyebrow: "KNX. الأتمتة. الهندسة الكهربائية.",
    heroTitle: "Smart Volt Automation",
    heroLead: "أنظمة ذكية متكاملة للفلل والفنادق والمستشفيات والمباني التجارية، مصممة بدقة من مرحلة الفكرة إلى التشغيل والتسليم.",
    planProject: "ابدأ مشروعك",
    viewPortfolio: "مشاهدة الأعمال",
    knxDemo: "تجربة KNX للمنزل الذكي",
    trust0Title: "المقاولات الكهربائية",
    trust0Text: "أعمال كهربائية منزلية وصناعية",
    trustLowTitle: "أنظمة التيار الخفيف",
    trustLowText: "كاميرات مراقبة CCTV، إنذار الحريق، دخول ذكي وبنية شبكات",
    trust1Title: "تصميم KNX معتمد",
    trust1Text: "إضاءة، تكييف، ستائر، أمن وتكامل مع أنظمة إدارة المباني",
    trust2Title: "تصنيع لوحات كهربائية",
    trust2Text: "لوحات توزيع، MCC، ATS، لوحات سيطرة وأتمتة",
    trust3Title: "تنفيذ المشاريع",
    trust3Text: "تصميم، تجهيز، تنصيب، فحص ودعم عند التسليم",
    introEyebrow: "شريك هندسي موثوق",
    introTitle: "بنية أتمتة مصممة للمباني ذات المتطلبات العالية.",
    introText: "تركز Smart Volt Automation على أتمتة المباني والحلول الذكية للطاقة الكهربائية. بخبرة تتجاوز 15 سنة في قطاع الكهرباء داخل العراق، نربط البنية الكهربائية ومنطق السيطرة والأجهزة الميدانية وواجهات التشغيل ضمن أنظمة موثوقة للمباني الحديثة.",
    metric1: "سنة خبرة في قطاع الكهرباء في العراق",
    metric2: "واجهة هندسية واحدة للمشروع",
    metric3: "مشروع بين فلل وبيوت ومجمعات سكنية وفنادق وجامعات ومطاعم",
    metric4: "لوحة ناجحة بين لوحات التحويل والأنظمة الذكية ولوحات الأتمتة",
    metric5: "حلول إلكترونية وذكية قابلة للتوسع حسب متطلبات كل مشروع",
    projectsEyebrow: "معرض المشاريع",
    projectsTitle: "بيئات مشاريع موثوقة بتنسيق هندسي احترافي.",
    projectsText: "نعرض المشاريع من منظور هندسي واضح: السيطرة، الراحة، السلامة، سهولة التشغيل والصيانة، من واجهات الاستخدام وحتى الغرف الفنية.",
    commercial: "مبان تجارية",
    commercialTitle: "تكامل الإضاءة وأنظمة BMS ومراقبة الطاقة",
    hotels: "فنادق",
    hotelsTitle: "أتمتة غرف النزلاء ومناطق الخدمات العامة",
    hospitals: "مستشفيات",
    hospitalsTitle: "تنسيق الأنظمة الكهربائية وأنظمة السيطرة الحرجة",
    villas: "فلل",
    villasTitle: "أنظمة منزل ذكي بواجهات استخدام أنيقة",
    automation: "أتمتة",
    automationTitle: "تكامل PLC والحساسات والأجهزة الميدانية",
    servicesEyebrow: "الخدمات",
    servicesTitle: "خدمات هندسية للطاقة الذكية والأتمتة.",
    service1Title: "أتمتة المباني الذكية",
    service1Text: "سيطرة متكاملة على الإضاءة والتكييف والستائر والدخول والأمن والقياس وواجهات العرض للفلل والبيوت والفنادق والمباني التجارية.",
    service2Title: "حلول الطاقة الكهربائية",
    service2Text: "دعم هندسي لتوزيع الطاقة، حساب الأحمال، تنسيق الحمايات، مراقبة الطاقة ودعم التنفيذ في الموقع.",
    service3Title: "الأتمتة وأنظمة BMS",
    service3Text: "برمجة PLC، بوابات التكامل، لوحات المتابعة، الإنذارات والتقارير التشغيلية لضمان تشغيل موثوق للمبنى.",
    service4Title: "الفحص والتشغيل",
    service4Text: "فحص النقاط، اختبار السيناريوهات الوظيفية، التوثيق، تدريب المشغلين والدعم الفني طويل الأمد.",
    partnersEyebrow: "شركات وتقنيات",
    partnersTitle: "علامات موثوقة للمشاريع الهندسية الاحترافية.",
    partnersText: "نعمل مع منصات كهربائية وأنظمة أتمتة وتيار خفيف مجربة، ويتم اختيارها حسب متطلبات المشروع والأداء وقابلية الصيانة على المدى الطويل.",
    panelsEyebrow: "أعمال لوحات السيطرة",
    panelsTitle: "لوحات سيطرة مصممة لتشغيل يعتمد عليه.",
    panel1Title: "توزيع LV بدقة هندسية",
    panel1Text: "لوحات توزيع رئيسية وفرعية ونهائية مع تسمية واضحة وتوثيق منظم.",
    panel2Title: "قيادة المحركات والمضخات",
    panel2Text: "مراكز سيطرة محركات، سوفت ستارتر، VFD ومنطق تشغيل لأنظمة MEP.",
    panel3Title: "قلب الأتمتة و PLC",
    panel3Text: "PLC، مداخل ومخارج، ريليات، مزودات طاقة، ترمنلات وأجهزة شبكة مصممة لسهولة الصيانة.",
    panel4Title: "ذكاء التحويل واستمرارية الطاقة",
    panel4Text: "أنظمة نقل وتشغيل مولدات واستمرارية طاقة للمرافق التجارية والحرجة.",
    consultationEyebrow: "استشارات هندسية",
    consultationTitle: "وضوح فني قبل الشراء أو التنفيذ.",
    consultationText: "يمكن لـ Smart Volt Automation مراجعة المخططات، إعداد التوصيات الفنية، تحديد مواصفات المنتجات، تدقيق متطلبات اللوحات ودعم قرارات تحسين الكلفة قبل بدء العمل في الموقع.",
    step1Title: "فهم المشروع",
    step1Text: "نوع المشروع، المخططات، نطاق العمل والقيود.",
    step2Title: "معمارية النظام",
    step2Text: "السيطرة، اللوحات، الشبكة، الواجهات وخطة التوسع.",
    step3Title: "الحزمة التجارية",
    step3Text: "جداول الكميات، خيارات المنتجات، المدة وأساس التسعير.",
    step4Title: "آلية التنفيذ الميداني",
    step4Text: "نقل المخططات إلى أرض الواقع بعد دراسة المعوقات ومسارات التمديد وتسلسل التنفيذ، ليكون المشروع واضحاً بين يديك قبل البدء.",
    quoteEyebrow: "طلب عرض سعر",
    quoteTitle: "أخبرنا ماذا تريد أن تنفذ.",
    quoteText: "استخدم هذا النموذج لطلب تسعير للمنزل الذكي، KNX، الأتمتة، الأعمال الكهربائية أو تصنيع لوحات السيطرة. النموذج جاهز للربط لاحقاً بالبريد أو نظام إدارة العملاء.",
    fullName: "الاسم الكامل",
    company: "الشركة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    projectType: "نوع المشروع",
    requiredSystems: "الأنظمة المطلوبة",
    projectDetails: "تفاصيل المشروع",
    submitQuote: "إرسال طلب عرض السعر",
    namePlaceholder: "اسمك",
    companyPlaceholder: "الشركة أو مالك المشروع",
    emailPlaceholder: "name@example.com",
    phonePlaceholder: "0770 274 4755",
    detailsPlaceholder: "الموقع، مساحة المبنى، مرحلة المشروع، توفر المخططات، الأنظمة المطلوبة...",
    optProjectType: "اختر نوع المشروع",
    optVilla: "فيلا / منزل ذكي",
    optHotel: "فندق",
    optHospital: "مستشفى",
    optCommercial: "مبنى تجاري",
    optPanel: "لوحة سيطرة",
    optConsultation: "استشارة هندسية",
    optSystems: "اختر النطاق الرئيسي",
    optKnx: "KNX ومنزل ذكي",
    optElectrical: "هندسة كهربائية",
    optAutomation: "أتمتة / BMS",
    optPanels: "لوحات سيطرة",
    optLowCurrent: "كاميرات مراقبة / دخول ذكي / تيار خفيف",
    optComplete: "حزمة كاملة",
    clientTrust: "لماذا يثق العملاء بـ Smart Volt Automation",
    trustTitle: "نخطط أولاً وننفذ بوضوح على أرض الواقع.",
    trustCard1Title: "دراسة قبل التنفيذ",
    trustCard1Text: "نراجع الموقع والمتطلبات والمخططات المتوفرة قبل اقتراح الأجهزة أو الأسعار، حتى يكون القرار مبنياً على فهم فني واضح.",
    trustCard2Title: "تصور واقعي للمشروع",
    trustCard2Text: "نوضح للعميل ماذا سيتم تركيبه، أين ستكون النقاط واللوحات، وكيف سيعمل النظام بعد التنفيذ.",
    trustCard3Title: "نطاق عمل موثق",
    trustCard3Text: "نجهز المخططات وجداول اللوحات وقوائم الأجهزة ونقاط السيطرة لتقليل المفاجآت أثناء العمل في الموقع.",
    trustCard4Title: "تسليم قابل للفهم",
    trustCard4Text: "لا نسلم نظاماً معقداً فقط؛ نسلم منظومة يستطيع المالك والمشغل وفريق الصيانة فهمها والتعامل معها.",
    footerText: "أتمتة مبان ذكية، KNX، هندسة كهربائية، لوحات سيطرة وحلول ذكية للطاقة الكهربائية للمباني الراقية في العراق.",
    contact: "اتصل بنا",
    socialMedia: "مواقع التواصل",
    projectTypes: "أنواع المشاريع",
    baghdad: "بغداد، العراق",
    formNote: "{name}، تم استلام طلب عرض السعر وهو جاهز للربط مع بريد أو نظام عملاء Smart Volt Automation.",
    fallbackName: "شكراً لك",
    openNav: "فتح القائمة",
    closeNav: "إغلاق القائمة"
  }
};

const bindings = [
  [".brand small", "brandSmall"],
  [".nav-links a[href='#projects']", "navProjects"],
  [".nav-links a[href='#services']", "navServices"],
  [".nav-links a[href='#panels']", "navPanels"],
  [".nav-links a[href='#consultation']", "navConsultation"],
  [".nav-links a[href='#contact']", "navContact"],
  [".header-cta", "requestQuote"],
  [".brand-demo-link", "knxDemo"],
  [".hero-content .eyebrow", "heroEyebrow"],
  [".hero h1", "heroTitle"],
  [".hero-lede", "heroLead"],
  [".hero-actions .primary", "planProject"],
  [".hero-actions .ghost[href='#projects']", "viewPortfolio"],
  [".hero-actions a[href='knx-demo.html']", "knxDemo"],
  [".hero-trust div:nth-child(1) strong", "trust0Title"],
  [".hero-trust div:nth-child(1) span:not(.trust-graphic)", "trust0Text"],
  [".hero-trust div:nth-child(2) strong", "trustLowTitle"],
  [".hero-trust div:nth-child(2) span:not(.trust-graphic)", "trustLowText"],
  [".hero-trust div:nth-child(3) strong", "trust1Title"],
  [".hero-trust div:nth-child(3) span:not(.trust-graphic)", "trust1Text"],
  [".hero-trust div:nth-child(4) strong", "trust2Title"],
  [".hero-trust div:nth-child(4) span:not(.trust-graphic)", "trust2Text"],
  [".hero-trust div:nth-child(5) strong", "trust3Title"],
  [".hero-trust div:nth-child(5) span:not(.trust-graphic)", "trust3Text"],
  [".intro-band .eyebrow", "introEyebrow"],
  [".intro-band h2", "introTitle"],
  [".intro-copy > p", "introText"],
  [".metrics div:nth-child(1) span", "metric1"],
  [".metrics div:nth-child(2) span", "metric2"],
  [".metrics div:nth-child(3) span", "metric3"],
  [".metrics div:nth-child(4) span", "metric4"],
  [".metrics div:nth-child(5) span", "metric5"],
  ["#projects .eyebrow", "projectsEyebrow"],
  ["#projects h2", "projectsTitle"],
  ["#projects .section-heading > p:last-child", "projectsText"],
  [".project-card:nth-child(1) span", "commercial"],
  [".project-card:nth-child(1) h3", "commercialTitle"],
  [".project-card:nth-child(2) span", "hotels"],
  [".project-card:nth-child(2) h3", "hotelsTitle"],
  [".project-card:nth-child(3) span", "hospitals"],
  [".project-card:nth-child(3) h3", "hospitalsTitle"],
  [".project-card:nth-child(4) span", "villas"],
  [".project-card:nth-child(4) h3", "villasTitle"],
  [".project-card:nth-child(5) span", "automation"],
  [".project-card:nth-child(5) h3", "automationTitle"],
  ["#services .eyebrow", "servicesEyebrow"],
  ["#services h2", "servicesTitle"],
  [".service-list article:nth-child(1) h3", "service1Title"],
  [".service-list article:nth-child(1) p", "service1Text"],
  [".service-list article:nth-child(2) h3", "service2Title"],
  [".service-list article:nth-child(2) p", "service2Text"],
  [".service-list article:nth-child(3) h3", "service3Title"],
  [".service-list article:nth-child(3) p", "service3Text"],
  [".service-list article:nth-child(4) h3", "service4Title"],
  [".service-list article:nth-child(4) p", "service4Text"],
  [".partners-section .eyebrow", "partnersEyebrow"],
  [".partners-section h2", "partnersTitle"],
  [".partners-section .section-heading > p:last-child", "partnersText"],
  ["#panels .eyebrow", "panelsEyebrow"],
  ["#panels h2", "panelsTitle"],
  [".panel-list article:nth-child(1) h3", "panel1Title"],
  [".panel-list article:nth-child(1) p", "panel1Text"],
  [".panel-list article:nth-child(2) h3", "panel2Title"],
  [".panel-list article:nth-child(2) p", "panel2Text"],
  [".panel-list article:nth-child(3) h3", "panel3Title"],
  [".panel-list article:nth-child(3) p", "panel3Text"],
  [".panel-list article:nth-child(4) h3", "panel4Title"],
  [".panel-list article:nth-child(4) p", "panel4Text"],
  ["#consultation .eyebrow", "consultationEyebrow"],
  ["#consultation h2", "consultationTitle"],
  [".consultation-copy > p:last-child", "consultationText"],
  [".consultation-steps article:nth-child(1) strong", "step1Title"],
  [".consultation-steps article:nth-child(1) small", "step1Text"],
  [".consultation-steps article:nth-child(2) strong", "step2Title"],
  [".consultation-steps article:nth-child(2) small", "step2Text"],
  [".consultation-steps article:nth-child(3) strong", "step3Title"],
  [".consultation-steps article:nth-child(3) small", "step3Text"],
  [".consultation-steps article:nth-child(4) strong", "step4Title"],
  [".consultation-steps article:nth-child(4) small", "step4Text"],
  ["#quotation .eyebrow", "quoteEyebrow"],
  ["#quotation h2", "quoteTitle"],
  [".quote-intro > p:last-child", "quoteText"],
  [".quote-form button[type='submit']", "submitQuote"],
  [".trust-copy .eyebrow", "clientTrust"],
  [".trust-copy h2", "trustTitle"],
  [".trust-grid article:nth-child(1) h3", "trustCard1Title"],
  [".trust-grid article:nth-child(1) p", "trustCard1Text"],
  [".trust-grid article:nth-child(2) h3", "trustCard2Title"],
  [".trust-grid article:nth-child(2) p", "trustCard2Text"],
  [".trust-grid article:nth-child(3) h3", "trustCard3Title"],
  [".trust-grid article:nth-child(3) p", "trustCard3Text"],
  [".trust-grid article:nth-child(4) h3", "trustCard4Title"],
  [".trust-grid article:nth-child(4) p", "trustCard4Text"],
  [".footer > div:nth-child(1) p", "footerText"],
  [".footer > div:nth-child(2) h2", "contact"],
  [".social-block h3", "socialMedia"],
  [".footer > div:nth-child(2) > span", "baghdad"],
  [".footer > div:nth-child(3) h2", "projectTypes"],
  [".footer > div:nth-child(3) span:nth-of-type(1)", "hotels"],
  [".footer > div:nth-child(3) span:nth-of-type(2)", "hospitals"],
  [".footer > div:nth-child(3) span:nth-of-type(3)", "villas"],
  [".footer > div:nth-child(3) span:nth-of-type(4)", "commercial"]
];

const labelBindings = [
  ["[name='name']", "fullName"],
  ["[name='company']", "company"],
  ["[name='email']", "email"],
  ["[name='phone']", "phone"],
  ["[name='projectType']", "projectType"],
  ["[name='systems']", "requiredSystems"],
  ["[name='details']", "projectDetails"]
];

const placeholderBindings = [
  ["[name='name']", "namePlaceholder"],
  ["[name='company']", "companyPlaceholder"],
  ["[name='email']", "emailPlaceholder"],
  ["[name='phone']", "phonePlaceholder"],
  ["[name='details']", "detailsPlaceholder"]
];

const optionBindings = [
  ["[name='projectType'] option:nth-child(1)", "optProjectType"],
  ["[name='projectType'] option:nth-child(2)", "optVilla"],
  ["[name='projectType'] option:nth-child(3)", "optHotel"],
  ["[name='projectType'] option:nth-child(4)", "optHospital"],
  ["[name='projectType'] option:nth-child(5)", "optCommercial"],
  ["[name='projectType'] option:nth-child(6)", "optPanel"],
  ["[name='projectType'] option:nth-child(7)", "optConsultation"],
  ["[name='systems'] option:nth-child(1)", "optSystems"],
  ["[name='systems'] option:nth-child(2)", "optKnx"],
  ["[name='systems'] option:nth-child(3)", "optElectrical"],
  ["[name='systems'] option:nth-child(4)", "optAutomation"],
  ["[name='systems'] option:nth-child(5)", "optPanels"],
  ["[name='systems'] option:nth-child(6)", "optLowCurrent"],
  ["[name='systems'] option:nth-child(7)", "optComplete"]
];

function setLabelText(inputSelector, value) {
  const field = document.querySelector(inputSelector);
  const label = field?.closest("label");
  if (!label) return;

  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.textContent = `\n            ${value}\n            `;
}

function setLanguage(lang) {
  const current = text[lang] ? lang : "en";
  const copy = text[current];

  document.documentElement.lang = current;
  document.documentElement.dir = current === "ar" ? "rtl" : "ltr";
  document.title = copy.title;
  formNote.textContent = "";

  bindings.forEach(([selector, key]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = copy[key];
    });
  });

  labelBindings.forEach(([selector, key]) => setLabelText(selector, copy[key]));
  placeholderBindings.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (element) element.placeholder = copy[key];
  });
  optionBindings.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = copy[key];
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === current);
  });

  const isOpen = header.classList.contains("nav-open");
  navToggle.setAttribute("aria-label", isOpen ? copy.closeNav : copy.openNav);
  localStorage.setItem("smartVoltLang", current);
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function animateMetricNumber(element) {
  const target = Number(element.dataset.countTo);
  if (!Number.isFinite(target)) return;

  const suffix = element.dataset.countSuffix || "";
  const pad = Number(element.dataset.countPad || 0);
  const duration = 1400;
  const startValue = 1;
  const format = (value) => `${String(value).padStart(pad, "0")}${suffix}`;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || target <= startValue) {
    element.textContent = format(target);
    return;
  }

  const startTime = performance.now();
  const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const current = Math.round(startValue + (target - startValue) * easeOutCubic(progress));
    element.textContent = format(current);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  element.textContent = format(startValue);
  requestAnimationFrame(tick);
}

function setupMetricCounters() {
  const counters = document.querySelectorAll("[data-count-to]");
  if (!counters.length) return;

  const runCounters = () => {
    counters.forEach((counter) => {
      if (counter.dataset.countAnimated === "true") return;
      counter.dataset.countAnimated = "true";
      animateMetricNumber(counter);
    });
  };

  if (!("IntersectionObserver" in window)) {
    runCounters();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      runCounters();
      observer.disconnect();
    }
  }, { threshold: 0.35 });

  const metrics = document.querySelector(".metrics");
  observer.observe(metrics || counters[0]);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
setupMetricCounters();

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  const lang = document.documentElement.lang || "en";
  navToggle.setAttribute("aria-label", isOpen ? text[lang].closeNav : text[lang].openNav);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    header.classList.remove("nav-open");
    const lang = document.documentElement.lang || "en";
    navToggle.setAttribute("aria-label", text[lang].openNav);
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (trustGrid) {
  const trustCards = trustGrid.querySelectorAll("article");
  trustCards.forEach((card) => {
    const activate = () => {
      trustCards.forEach((item) => item.classList.remove("is-active"));
      card.classList.add("is-active");
    };
    card.addEventListener("mouseenter", activate);
    card.addEventListener("focus", activate);
    card.addEventListener("click", activate);
  });
}

if (partnersShowcase) {
  const partnerCards = partnersShowcase.querySelectorAll("[data-partner-card]");
  let lastScrollY = window.scrollY;
  let speedReset;

  partnerCards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const url = card.dataset.url;
      if (!name || !url) return;
      partnerCards.forEach((item) => item.classList.remove("is-selected"));
      partnerCards.forEach((item) => {
        if (item.dataset.name === name) item.classList.add("is-selected");
      });
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  window.addEventListener("scroll", () => {
    const delta = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;
    const duration = Math.max(10, 34 - Math.min(delta, 120) * 0.16);
    partnersShowcase.style.setProperty("--partner-duration", `${duration}s`);
    window.clearTimeout(speedReset);
    speedReset = window.setTimeout(() => {
      partnersShowcase.style.setProperty("--partner-duration", "32s");
    }, 260);
  }, { passive: true });
}

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const lang = document.documentElement.lang || "en";
  const formData = new FormData(quoteForm);
  const name = formData.get("name") || text[lang].fallbackName;
  formNote.textContent = text[lang].formNote.replace("{name}", name);
  quoteForm.reset();
});

setLanguage(localStorage.getItem("smartVoltLang") || "en");
