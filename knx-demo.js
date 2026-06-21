const langButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");
const deviceButtons = document.querySelectorAll("[data-device]");
const devicePanel = {
  en: document.querySelector("[data-device-en]"),
  ar: document.querySelector("[data-device-ar]"),
  description: document.querySelector("[data-device-description]"),
  example: document.querySelector("[data-device-example]")
};
const galleryCards = document.querySelectorAll("[data-gallery-device]");
const galleryModal = document.querySelector("[data-gallery-modal]");
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryType = document.querySelector("[data-gallery-type]");
const galleryDescription = document.querySelector("[data-gallery-description]");
const galleryUse = document.querySelector("[data-gallery-use]");
const galleryCloseButtons = document.querySelectorAll("[data-gallery-close]");

const copy = {
  en: {
    brandSmall: "Engineering Automation",
    backProjects: "Projects",
    contact: "Contact",
    eyebrow: "Interactive KNX floor plan",
    title: "KNX Smart Home Demo",
    lead: "Explore how KNX touch screens, keypads, sensors, DALI lighting, curtains, AC and smart panels connect inside a modern villa.",
    panelLabel: "Live concept map",
    living: "Living Room",
    bedroom: "Bedroom",
    kitchen: "Kitchen",
    bathroom: "Bathroom",
    outdoor: "Outdoor Area",
    panelRoom: "Electrical Panel",
    selectedSystem: "Selected system",
    projectExample: "Project example",
    roomDemoEyebrow: "Room automation",
    roomDemoTitle: "Cooling, lighting, cinema and curtains in one room",
    roomDemoLead: "A complete room scenario can connect AC, dimmable lighting, cinema mode and curtain control from a keypad, touch screen, phone or automation logic.",
    roomFeature1Title: "Cinema scene",
    roomFeature1Text: "Lights dim, curtains close and AC moves to comfort mode with one command.",
    roomFeature2Title: "Remote control",
    roomFeature2Text: "The owner can prepare the room from the mobile before arriving home.",
    roomFeature3Title: "Automation logic",
    roomFeature3Text: "Schedules and sensors reduce cooling and lighting when the room is empty.",
    kitchenDemoEyebrow: "Kitchen safety",
    kitchenDemoTitle: "Gas sensor, gas line and automatic shut-off valve",
    kitchenDemoLead: "The kitchen can include a gas detector connected to a shut-off valve, kitchen lighting and mobile notification logic even when the owner is outside the house.",
    kitchenFeature1Title: "Gas protection",
    kitchenFeature1Text: "When gas is detected, the system can close the valve and run a safety scene.",
    kitchenFeature2Title: "Mobile notification",
    kitchenFeature2Text: "A notification can reach the owner immediately, even outside the home.",
    kitchenFeature3Title: "Clear response",
    kitchenFeature3Text: "Lighting, extractor readiness and alarm logic help protect the house before the issue grows.",
    devicePhotosEyebrow: "Smart devices gallery",
    devicePhotosTitle: "Realistic visual references for each smart home device",
    devicePhotosLead: "These device visuals explain the main components used in a smart home project and can be replaced later with original product photos.",
    photoTouch: "KNX Touch Screen",
    photoKeypad: "KNX Keypad",
    photoLighting: "Smart Lighting",
    photoCurtain: "Curtain Control",
    photoAc: "AC Control",
    photoMotion: "Motion Sensor",
    photoDali: "DALI Lighting",
    photoPanel: "Smart Electrical Panel",
    photoGas: "Gas Sensor",
    photoValve: "Gas Shut-off Valve",
    galleryUseLabel: "Typical use",
    howEyebrow: "System logic",
    howTitle: "How KNX Smart Home Works",
    how1: "All smart devices communicate through the KNX Bus Cable.",
    how2: "Control is handled from touch screens, keypads and sensors.",
    how3: "Lighting, curtains, AC, DALI, scenes and smart panels can work together.",
    how4: "The system fits villas, apartments, hotels and smart buildings.",
    gardenEyebrow: "Outdoor smart living",
    gardenTitle: "Garden and scenario automation",
    gardenLead: "The garden can become part of the same KNX logic, including lighting, irrigation readiness, motion response and evening scenes.",
    scenario1Title: "Evening garden scene",
    scenario1Text: "Path lights, facade lights and sitting-area lights turn on together from the screen or keypad.",
    scenario2Title: "Welcome home",
    scenario2Text: "Outdoor lighting, entrance lighting, AC comfort mode and selected curtains react as one scene.",
    scenario3Title: "Energy saving",
    scenario3Text: "Sensors and schedules reduce unnecessary lighting and cooling while keeping important areas ready.",
    scenario4Title: "Maximum smart home value",
    scenario4Text: "The best result is not many devices, but one coordinated system that is easy to operate, maintain and expand.",
    facadeEyebrow: "Smart facade",
    facadeTitle: "House facade, weather logic and mobile control",
    facadeLead: "The same KNX system can connect facade lighting, garden lights, sun sensing, weather protection, solar-ready logic and mobile commands so the home reacts automatically or from the owner phone.",
    sunSensor: "Sun Sensor",
    weatherSensor: "Weather Sensor",
    mobileControl: "Mobile Control",
    solarPanels: "Solar Panels",
    gardenLighting: "Garden Lighting",
    facade1Title: "Automatic protection",
    facade1Text: "Weather and sun data can trigger shutters, garden lighting or safe scenes without manual action.",
    facade2Title: "Mobile override",
    facade2Text: "The owner can run scenes, lights and facade functions from the phone when needed.",
    ctaTitle: "Ready to design your smart home?",
    cta: "Request Smart Home Design"
  },
  ar: {
    brandSmall: "الأتمتة الهندسية",
    backProjects: "المشاريع",
    contact: "اتصل بنا",
    eyebrow: "خريطة KNX تفاعلية",
    title: "الخريطة التفاعلية للمنزل الذكي KNX",
    lead: "استكشف طريقة ربط شاشات KNX والكيبادات والحساسات وإنارة DALI والستائر والتكييف والبوردات الذكية داخل فيلا حديثة.",
    panelLabel: "خريطة تشغيل حية",
    living: "صالة",
    bedroom: "غرفة نوم",
    kitchen: "مطبخ",
    bathroom: "حمام",
    outdoor: "منطقة خارجية",
    panelRoom: "البورد الكهربائي",
    selectedSystem: "النظام المحدد",
    projectExample: "مثال داخل المشروع",
    roomDemoEyebrow: "أتمتة غرفة واحدة",
    roomDemoTitle: "التبريد والإنارة والسينما والستائر داخل غرفة واحدة",
    roomDemoLead: "يمكن ربط التكييف والإنارة المتغيرة ومشهد السينما والستائر من خلال كيباد أو شاشة أو موبايل أو منطق أوتوميشن يعمل تلقائياً.",
    roomFeature1Title: "مشهد السينما",
    roomFeature1Text: "تخفت الإنارة، تغلق الستائر، ويتحول التكييف إلى وضع الراحة بأمر واحد.",
    roomFeature2Title: "تحكم عن بعد",
    roomFeature2Text: "يمكن للمالك تجهيز الغرفة من الموبايل قبل الوصول إلى البيت.",
    roomFeature3Title: "تشغيل أوتوماتيكي",
    roomFeature3Text: "الجداول والحساسات تقلل التبريد والإنارة عند عدم وجود أشخاص في الغرفة.",
    kitchenDemoEyebrow: "حماية المطبخ",
    kitchenDemoTitle: "حساس غاز وخط غاز وصمام غلق أوتوماتيكي",
    kitchenDemoLead: "يمكن تجهيز المطبخ بحساس غاز مرتبط بصمام غلق، مع إنارة المطبخ وتنبيه على الموبايل حتى لو كان صاحب البيت خارج المنزل.",
    kitchenFeature1Title: "حماية من تسرب الغاز",
    kitchenFeature1Text: "عند كشف الغاز يمكن للنظام غلق الصمام وتشغيل مشهد أمان تلقائي.",
    kitchenFeature2Title: "إشعار على الموبايل",
    kitchenFeature2Text: "يصل التنبيه فوراً إلى صاحب البيت حتى لو كان خارج المنزل.",
    kitchenFeature3Title: "استجابة واضحة",
    kitchenFeature3Text: "الإنارة، جاهزية الشفاط، ومنطق الإنذار تساعد على حماية البيت قبل تطور المشكلة.",
    devicePhotosEyebrow: "معرض أجهزة السمارت",
    devicePhotosTitle: "صور توضيحية واقعية لكل جهاز في نظام السمارت هوم",
    devicePhotosLead: "هذه الصور توضح أهم مكونات مشروع السمارت هوم ويمكن استبدالها لاحقاً بصور المنتجات الأصلية.",
    photoTouch: "شاشة KNX",
    photoKeypad: "كيباد KNX",
    photoLighting: "إنارة ذكية",
    photoCurtain: "تحكم الستائر",
    photoAc: "تحكم التكييف",
    photoMotion: "حساس حركة",
    photoDali: "إنارة DALI",
    photoPanel: "بورد كهربائي ذكي",
    photoGas: "حساس غاز",
    photoValve: "صمام غلق الغاز",
    galleryUseLabel: "الاستخدام العملي",
    howEyebrow: "منطق النظام",
    howTitle: "كيف يعمل نظام KNX في المنزل الذكي",
    how1: "كل الأجهزة الذكية تتصل عبر كيبل KNX Bus.",
    how2: "التحكم يتم من الشاشات والكيبادات والحساسات.",
    how3: "يمكن ربط الإنارة والستائر والتكييف وDALI والمشاهد والبوردات الذكية معاً.",
    how4: "النظام مناسب للفيلل والشقق والفنادق والمباني الذكية.",
    gardenEyebrow: "الحديقة الذكية",
    gardenTitle: "أتمتة الحدائق والسيناريوهات",
    gardenLead: "يمكن أن تكون الحديقة جزءاً من منطق KNX نفسه، مع إنارة خارجية وجاهزية للري واستجابة للحركة ومشاهد مسائية.",
    scenario1Title: "مشهد الحديقة المسائي",
    scenario1Text: "تعمل إنارة الممرات والواجهة وجلسة الحديقة معاً من الشاشة أو الكيباد.",
    scenario2Title: "مشهد الوصول إلى المنزل",
    scenario2Text: "تتفاعل الإنارة الخارجية وإنارة المدخل والتكييف والستائر المحددة كمشهد واحد.",
    scenario3Title: "توفير الطاقة",
    scenario3Text: "تقلل الحساسات والجداول التشغيل غير الضروري للإنارة والتكييف مع إبقاء المناطق المهمة جاهزة.",
    scenario4Title: "أقصى استفادة من السمارت هوم",
    scenario4Text: "النتيجة الأفضل ليست كثرة أجهزة، بل نظام واحد منسق سهل التشغيل والصيانة والتوسع.",
    facadeEyebrow: "واجهة البيت الذكية",
    facadeTitle: "واجهة البيت وحساسات الطقس والتحكم من الموبايل",
    facadeLead: "يمكن ربط إنارة الواجهة وإنارة الحديقة وحساس الشمس وحساس الطقس ومنطق الطاقة الشمسية وأوامر الموبايل بنفس نظام KNX، ليعمل المنزل تلقائياً أو بأمر مباشر من الهاتف.",
    sunSensor: "حساس شمس",
    weatherSensor: "حساس طقس",
    mobileControl: "تحكم من الموبايل",
    solarPanels: "ألواح طاقة شمسية",
    gardenLighting: "إنارة الحديقة",
    facade1Title: "حماية أوتوماتيكية",
    facade1Text: "بيانات الشمس والطقس يمكن أن تشغل الستائر أو إنارة الحديقة أو مشاهد الأمان بدون تدخل يدوي.",
    facade2Title: "تحكم مباشر من الهاتف",
    facade2Text: "يمكن للمالك تشغيل المشاهد والإنارة ووظائف الواجهة من الموبايل عند الحاجة.",
    ctaTitle: "جاهز لتصميم منزلك الذكي؟",
    cta: "اطلب تصميم سمارت هوم"
  }
};

const devices = {
  touch: {
    en: "KNX Touch Screen",
    ar: "شاشة KNX",
    desc: {
      en: "Central wall interface for controlling the full house through scenes, lighting, curtains, AC and smart panel commands.",
      ar: "واجهة جدارية مركزية للتحكم بكل البيت من خلال المشاهد والإنارة والستائر والتكييف وأوامر البورد الذكي."
    },
    example: {
      en: "Living room master screen controls the whole villa through the smart panel logic.",
      ar: "شاشة رئيسية في الصالة تتحكم بالفيلا كاملة عبر منطق البورد الذكي."
    }
  },
  keypad: {
    en: "KNX Keypad",
    ar: "كيباد KNX",
    desc: {
      en: "Programmable wall keypad for room scenes, lighting groups, curtains and all-off commands.",
      ar: "مفتاح جداري قابل للبرمجة لمشاهد الغرف ومجاميع الإنارة والستائر وأمر الإطفاء الكامل."
    },
    example: {
      en: "Bedroom keypad beside the bed for night, reading and all-off scenes.",
      ar: "كيباد قرب السرير لمشهد النوم والقراءة وإطفاء كامل الغرفة."
    }
  },
  lighting: {
    en: "Lighting",
    ar: "إنارة",
    desc: {
      en: "Linked lighting points can be grouped and controlled from the screen, keypad or smart panel.",
      ar: "نقاط الإنارة المرتبطة يمكن تجميعها والتحكم بها من الشاشة أو الكيباد أو البورد الذكي."
    },
    example: {
      en: "One scene activates living room, kitchen and outdoor lighting together.",
      ar: "مشهد واحد يشغل إنارة الصالة والمطبخ والخارج معاً."
    }
  },
  curtain: {
    en: "Curtain Control",
    ar: "الستائر",
    desc: {
      en: "Motorized curtain and blind control integrated with scenes and schedules.",
      ar: "تحكم بمحركات الستائر والبلinds وربطها بالمشاهد والجداول الزمنية."
    },
    example: {
      en: "Morning scene opens selected curtains and adjusts lighting.",
      ar: "مشهد الصباح يفتح الستائر المحددة ويضبط الإنارة تلقائياً."
    }
  },
  ac: {
    en: "AC Control",
    ar: "التبريد والتكييف",
    desc: {
      en: "Room temperature control through KNX thermostats or integration gateways.",
      ar: "تحكم بدرجة حرارة الغرف من خلال ثرموستات KNX أو بوابات تكامل."
    },
    example: {
      en: "The villa enters energy-saving cooling mode when the owner leaves.",
      ar: "تتحول الفيلا إلى وضع تبريد موفر للطاقة عند خروج المالك."
    }
  },
  motion: {
    en: "Motion Sensor",
    ar: "حساس حركة",
    desc: {
      en: "Presence and motion detection for automatic lighting, security and energy saving.",
      ar: "كشف الحركة والتواجد لتشغيل الإنارة تلقائياً ودعم الأمن وتوفير الطاقة."
    },
    example: {
      en: "Corridor lights turn on only when movement is detected.",
      ar: "إنارة الممر تعمل فقط عند وجود حركة."
    }
  },
  dali: {
    en: "DALI Lighting",
    ar: "إنارة DALI",
    desc: {
      en: "Addressable lighting control for professional dimming, fixture grouping and scenes.",
      ar: "تحكم احترافي بالإنارة القابلة للعنونة مع التعتيم وتجميع وحدات الإنارة ضمن مشاهد."
    },
    example: {
      en: "Dining lights dim smoothly while decorative lights stay highlighted.",
      ar: "إنارة الطعام تنخفض بسلاسة مع بقاء الإنارة الديكورية بارزة."
    }
  },
  smartPanel: {
    en: "Smart Electrical Panel",
    ar: "البورد الذكي",
    desc: {
      en: "The central panel contains boxes, actuators, relays, dimmers and KNX modules that distribute commands to the whole house.",
      ar: "البورد المركزي يحتوي على القواطي والـ Actuators والريليات والديمرات وموديولات KNX لتوزيع الأوامر على كامل البيت."
    },
    example: {
      en: "From this panel, one screen can control lighting, curtains, cooling, DALI and smart scenes across the villa.",
      ar: "من هذا البورد تستطيع شاشة واحدة التحكم بالإنارة والستائر والتبريد وDALI والمشاهد في كامل الفيلا."
    }
  }
};

const galleryDevices = {
  touch: {
    crop: "12% 44%",
    type: { en: "Control interface", ar: "واجهة تحكم" },
    title: { en: "KNX Touch Screen", ar: "شاشة KNX" },
    desc: {
      en: "A central wall screen that gives the user a clear interface for lighting, curtains, cooling, scenes and full room control.",
      ar: "شاشة جدارية مركزية تمنح المستخدم واجهة واضحة للتحكم بالإنارة والستائر والتبريد والمشاهد وإدارة الغرفة بالكامل."
    },
    use: {
      en: "Used in living rooms, master bedrooms and reception areas as the main smart home control point.",
      ar: "تستخدم في الصالات وغرف النوم الرئيسية والاستقبال كنقطة تحكم رئيسية للسمارت هوم."
    }
  },
  keypad: {
    crop: "24% 48%",
    type: { en: "Wall control", ar: "تحكم جداري" },
    title: { en: "KNX Keypad", ar: "كيباد KNX" },
    desc: {
      en: "A programmable wall keypad for scenes, lighting groups, curtains, AC commands and all-off functions.",
      ar: "كيباد جداري قابل للبرمجة للمشاهد ومجاميع الإنارة والستائر وأوامر التكييف والإطفاء العام."
    },
    use: {
      en: "Installed beside doors and beds for quick daily control without opening the mobile app.",
      ar: "يركب بجانب الأبواب والأسرة للتحكم اليومي السريع بدون الحاجة إلى فتح تطبيق الموبايل."
    }
  },
  lighting: {
    crop: "38% 38%",
    type: { en: "Lighting load", ar: "حمل إنارة" },
    title: { en: "Smart Lighting", ar: "إنارة ذكية" },
    desc: {
      en: "Lighting circuits can work as on/off groups, dimming groups or scenes connected to keypads, sensors and schedules.",
      ar: "دوائر الإنارة يمكن أن تعمل كمجاميع تشغيل وإطفاء أو تعتيم أو مشاهد مرتبطة بالكيبادات والحساسات والجداول."
    },
    use: {
      en: "Used for comfort scenes, night paths, entrance lighting and energy-saving automation.",
      ar: "تستخدم لمشاهد الراحة ومسارات الليل وإنارة المداخل وأتمتة توفير الطاقة."
    }
  },
  curtain: {
    crop: "82% 44%",
    type: { en: "Motorized shading", ar: "ستائر كهربائية" },
    title: { en: "Curtain Control", ar: "تحكم الستائر" },
    desc: {
      en: "Curtain motors connect to KNX logic so shades can open, close or move by percentage from scenes and sensors.",
      ar: "تتصل محركات الستائر بمنطق KNX لتفتح أو تغلق أو تتحرك بنسبة محددة من خلال المشاهد والحساسات."
    },
    use: {
      en: "Useful for privacy, cinema scenes, sun protection and morning wake-up automation.",
      ar: "مفيدة للخصوصية ومشهد السينما والحماية من الشمس وأتمتة الاستيقاظ صباحاً."
    }
  },
  ac: {
    crop: "58% 44%",
    type: { en: "Climate control", ar: "تحكم مناخي" },
    title: { en: "AC Control", ar: "تحكم التكييف" },
    desc: {
      en: "AC integration allows temperature modes, schedules and energy-saving logic to work with the full smart home system.",
      ar: "تكامل التكييف يسمح بأوضاع الحرارة والجداول ومنطق توفير الطاقة ضمن نظام السمارت هوم الكامل."
    },
    use: {
      en: "Used to prepare rooms before arrival and reduce cooling when rooms are empty.",
      ar: "يستخدم لتجهيز الغرف قبل الوصول وتقليل التبريد عند خلو الغرف."
    }
  },
  motion: {
    crop: "45% 60%",
    type: { en: "Presence sensing", ar: "استشعار تواجد" },
    title: { en: "Motion Sensor", ar: "حساس حركة" },
    desc: {
      en: "Motion and presence sensors automate lighting, corridors, bathrooms and security-related scenes.",
      ar: "حساسات الحركة والتواجد تؤتمت الإنارة والممرات والحمامات والمشاهد المرتبطة بالأمان."
    },
    use: {
      en: "Ideal for corridors, bathrooms, stairs, parking areas and low-energy night paths.",
      ar: "مناسبة للممرات والحمامات والسلالم والكراجات ومسارات الليل منخفضة الطاقة."
    }
  },
  dali: {
    crop: "34% 72%",
    type: { en: "Professional dimming", ar: "تعتيم احترافي" },
    title: { en: "DALI Lighting", ar: "إنارة DALI" },
    desc: {
      en: "DALI gives addressable control for each light fixture, smooth dimming, grouping and high-end lighting scenes.",
      ar: "DALI يوفر تحكماً بعنوان لكل وحدة إنارة مع تعتيم سلس وتجميع ومشاهد إضاءة عالية المستوى."
    },
    use: {
      en: "Best for villas, hotels, restaurants and areas where lighting mood matters.",
      ar: "مناسب للفيلل والفنادق والمطاعم والمناطق التي تحتاج أجواء إضاءة دقيقة."
    }
  },
  smartPanel: {
    crop: "70% 68%",
    type: { en: "Central smart panel", ar: "بورد سمارت مركزي" },
    title: { en: "Smart Electrical Panel", ar: "بورد كهربائي ذكي" },
    desc: {
      en: "The smart panel contains actuators, relays, dimmers, protection devices and KNX modules that distribute commands safely.",
      ar: "البورد الذكي يحتوي على الاكتويتر والريليات والديمرات وأجهزة الحماية وموديولات KNX لتوزيع الأوامر بأمان."
    },
    use: {
      en: "It is the engineering heart of the project and links lighting, curtains, AC, DALI and scenes together.",
      ar: "هو القلب الهندسي للمشروع ويربط الإنارة والستائر والتكييف وDALI والمشاهد معاً."
    }
  },
  gas: {
    crop: "43% 78%",
    type: { en: "Safety sensor", ar: "حساس أمان" },
    title: { en: "Gas Sensor", ar: "حساس غاز" },
    desc: {
      en: "A gas detector monitors the kitchen area and can trigger alarms, mobile notifications and emergency actions.",
      ar: "حساس الغاز يراقب منطقة المطبخ ويمكن أن يشغل الإنذارات وإشعارات الموبايل وإجراءات الطوارئ."
    },
    use: {
      en: "Used near cooking areas to warn the owner and activate safety logic before risk increases.",
      ar: "يستخدم قرب مناطق الطبخ لتنبيه صاحب البيت وتشغيل منطق الأمان قبل زيادة الخطر."
    }
  },
  valve: {
    crop: "55% 78%",
    type: { en: "Gas safety actuator", ar: "مشغل أمان الغاز" },
    title: { en: "Gas Shut-off Valve", ar: "صمام غلق الغاز" },
    desc: {
      en: "An automatic valve can shut the gas line when leakage is detected, reducing risk while the owner is home or away.",
      ar: "صمام أوتوماتيكي يستطيع غلق خط الغاز عند كشف التسرب لتقليل الخطر سواء كان صاحب البيت موجوداً أو خارج المنزل."
    },
    use: {
      en: "Connected with gas sensors, alarms and mobile alerts as part of the kitchen safety scenario.",
      ar: "يرتبط بحساسات الغاز والإنذارات وتنبيهات الموبايل ضمن سيناريو حماية المطبخ."
    }
  }
};

let currentLang = localStorage.getItem("smartVoltKnxLang") || "en";
let selectedDevice = "touch";
let selectedGalleryDevice = "touch";

function setLanguage(lang) {
  currentLang = copy[lang] ? lang : "en";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  translatable.forEach((item) => {
    item.textContent = copy[currentLang][item.dataset.i18n];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });

  localStorage.setItem("smartVoltKnxLang", currentLang);
  updateDevice(selectedDevice);
  if (galleryModal?.classList.contains("is-open")) {
    updateGallery(selectedGalleryDevice);
  }
}

function updateDevice(key) {
  selectedDevice = key;
  const device = devices[key];
  if (!device) return;

  devicePanel.en.textContent = device.en;
  devicePanel.ar.textContent = device.ar;
  devicePanel.description.textContent = device.desc[currentLang];
  devicePanel.example.textContent = device.example[currentLang];

  deviceButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.device === key);
  });
}

function updateGallery(key) {
  const item = galleryDevices[key];
  if (!item) return;

  selectedGalleryDevice = key;
  galleryTitle.textContent = item.title[currentLang];
  galleryType.textContent = item.type[currentLang];
  galleryDescription.textContent = item.desc[currentLang];
  galleryUse.textContent = item.use[currentLang];
  galleryImage.style.objectPosition = item.crop;
  galleryImage.alt = item.title[currentLang];
}

function openGallery(key) {
  updateGallery(key);
  galleryModal.classList.add("is-open");
  galleryModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  galleryModal.classList.remove("is-open");
  galleryModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

deviceButtons.forEach((button) => {
  button.addEventListener("click", () => updateDevice(button.dataset.device));
});

galleryCards.forEach((card) => {
  card.addEventListener("click", () => openGallery(card.dataset.galleryDevice));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openGallery(card.dataset.galleryDevice);
    }
  });
});

galleryCloseButtons.forEach((button) => {
  button.addEventListener("click", closeGallery);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && galleryModal?.classList.contains("is-open")) {
    closeGallery();
  }
});

setLanguage(currentLang);
