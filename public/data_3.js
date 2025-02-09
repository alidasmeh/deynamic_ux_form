const data = [

  {
    type: "text", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "سن:",
    options: ["عدد وارد نمایید."],
  },
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "مقطع تحصیلی",
    options: ["کارشناسی ", "کارشناسی ارشد","دکتری و بالاتر"],
  },
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "رشته گروه تحصیلی:",
    options: ["علوم انسانی", "علوم پایه", "فنی و مهندسی", "کشاورزی و منابع طبیعی", "هنر",
       "رشته های پزشکی، دندان پزشکی و پیراپزشکی", "زبان های خارجی", "دامپزشکی"],
  },
  {
    type: "text", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "رشته تحصیلی:",
    options: [""],
  },
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "ورودی سال:",
    options: ["1393", "1394", "1395", "1396", "1397", "1398", "1399", "1400", "1401", "1402", "1403"],
  },
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "نوع پذیرش در دانشگاه:",
    options: ["روزانه", "شبانه/نوبت دوم", "پردیس خودگردان", "مجازی", "سایر"],
  },
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "رشته دبیرستانی:",
    options: ["ریاضی فیزیک","علوم تجربی", "علوم انسانی", "هنر", "زبان", "فنی حرفه ای", "کار و دانش"],
  },
  
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "جنسیت",
    options: ["زن", "مرد"],
  },
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "وضعیت تاهل:",
    options: ["مجرد", "متاهل"],
  },
  {
    type: "text", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "شغل:",
    options: ["شغل فعلی خود را وارد نمایید:"],
  },
  {
    type: "text", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "شهر محل سکونت خانواده:",
    options: [" "],
  },
  {
    type: "one", // one, (input) text
    section: 1, // 1, 2, 3, ...
    question: "والدین من:",
    options: ["با یکدیگر زندگی می کنند","طلاق گرفته اند یا جدا شده اند", "فوت کرده اند: پدر", "فوت کرده اند: مادر", "فوت کرده اند: هر دو" ],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "از زندگی ام لذت می برم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  { 
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "آدم نگرانی هستم",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "وقتی نگران می شوم نمی توانم آن را متوقف کنم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "در چند ماه گذشته تجارب ناخوشایندی داشتم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "اصولا در تمام زندگی ام برخوردهای منطقی داشتم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "زندگی کردن برایم بی ارزش است.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "احساس ناامیدی می کنم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "نگران هستم، انگار قرار است اتفاق هولناکی رخ دهد.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "خواب هایی می بینم که مرا آشفته می کند.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "تقریبا هرروز به دلیل افکار نامطلوبی که برخلاف اراده ام به ذهنم می آید، دچار ناراحتی می شوم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "یکی از مشکلات اساسی من توجه بیش از حد به جزئیات است.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "حواسم در انجام کارها به راحتی توسط محرک های خارجی پرت می شود.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "کارهایم معمولا به تاخیر می افتند، زیرا هر چیزی را باید بارها مرور کنم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "آیا در حال حاضر به دلیل مشکلات اقتصادی در تامین نیازهای خود دچار مشکل هستید؟",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "از صحبت در حضور جمع پرهیز می کنم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "به آینده شغلی رشته تحصیلی خود چقدر امیدوارید؟",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "برای انجام وظایف تحصیلی کم انرژی هستم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "تکالیفم را از جلسه ای به جلسه دیگر به تعویق می اندازم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "کنترلم را برای هر چیزی از دست می دهم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "وقتی خشمگین می شوم برای تمرکز کردن روی مسائل دیگر مشکل دارم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 2, // 1, 2, 3, ...
    question: "اگر کسی خشمگینم کند، هرکاری برای تلافی کردن انجام می دهم.",
    options: ["هرگز یا خیلی کم", "کم","نسبتا کم" , "نسبتا زیاد" , "زیاد" , "همیشه یا خیلی زیاد"],
  },
  {
    type: "one", // one, (input) text
    section: 3, // 1, 2, 3, ...
    question: "آیا تا کنون به روانپزشک مراجعه کرده اید؟",
    options: ["بله", "خیر"],
  },
  {
    type: "one", // one, (input) text
    section: 3, // 1, 2, 3, ...
    question: "آیا در حال حاضر تحت درمان روانپزشک (دارو درمانی) هستید؟",
    options: ["بله", "خیر"],
  },
  {
    type: "one", // one, (input) text
    section: 3, // 1, 2, 3, ...
    question: " :فضای خانواده ما:",
    options: ["گرم و صمیمی و حمایت کننده است" , "سرد ولی محترمانه است" , "سرد و بی تفاوت است" , "همراه با تنش است"],
  },
  {
    type: "one", // one, (input) text
    section: 3, // 1, 2, 3, ...
    question: "آیا تاکنون شکست عاطفی داشته اید؟",
    options: ["بله", "خیر"],
  },
  {
    type: "one", // one, (input) text
    section: 3, // 1, 2, 3, ...
    question: "آیا تاکنون به خودکشی فکر کرده اید؟",
    options: ["بله", "خیر"],
  },
  {
    type: "one", // one, (input) text
    section: 3, // 1, 2, 3, ...
    question: "آیا بیماری خاص (صعب العلاج) دارید؟",
    options: ["بله", "خیر"],
  },
  {
    type: "one", // one, (input) text
    section: 3, // 1, 2, 3, ...
    question: "در دوازده ماه گذشته، حدودا چندبار سیگار مصرف کرده اید؟",
    options: ["اصلا", "یک تا دو بار", "سه تا نه بار", "ده بار و بیشتر"],
  },
];
