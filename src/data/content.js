/* =========================================================
   ALL TEXT AND DATA LIVE IN THIS FILE.
   English (en) and Dari (fa). If a Dari text is missing, English is shown.
   ========================================================= */
export const OWNER_EMAIL = "fatimajafari224@gmail.com";
export const PHONE = "0785621680";
export const WHATSAPP = "https://wa.me/93785621680";
export const FORMSPREE_URL = "https://formspree.io/f/mppqgdlv";

/* Image helper: pictures are in public/images/ (spaces in file names are handled) */
export const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURI(file)}`;

export const NAV = ["home", "about", "projects", "skills", "education", "certificates", "contact"];

/* ---------- Projects (images are in public/images/projects) ----------
   fit: "contain" shows the whole picture (for square or portrait images). */
export const PROJECTS = [
  { id: "p1",  image: "projects/restaurant-menu.jpg",        program: "Adobe Photoshop" },
  { id: "p2",  image: "projects/movie-poster.jpg",           program: "Adobe Photoshop" },
  { id: "p4",  image: "projects/business-card.jpg",          program: "Adobe Illustrator" },
  { id: "p5",  image: "projects/company-flyer.jpg",          program: "Adobe Photoshop" },
  { id: "p6",  image: "projects/pepsi-flyer.jpg",            program: "Adobe Photoshop", fit: "contain" },
  { id: "p7",  image: "projects/certificate.jpg",            program: "Adobe Photoshop", fit: "contain" },
  { id: "p8",  image: "projects/spice-packaging.jpg",        program: "Adobe Photoshop", fit: "contain" },
  { id: "p9",  image: "projects/construction-billboard.jpg", program: "Adobe Photoshop" },
  { id: "p10", image: "projects/book-cover.jpg",             program: "Adobe Photoshop" },
];

/* ---------- Education & training (same order as Fatima's list) ----------
   Add real dates later: put text in "dates", e.g. dates: "2019 – 2022".
   status: "progress" shows an "In progress" tag. */
export const EDUCATION = [
  { id: "edu1", type: "diploma", dates: "", status: "" },
  { id: "edu2", type: "diploma", dates: "", status: "" },
  { id: "edu3", type: "course", dates: "", status: "" },
  { id: "edu4", type: "diploma", dates: "", status: "" },
  { id: "edu5", type: "certificate", dates: "", status: "" },
  { id: "edu6", type: "training", dates: "", status: "" },
  { id: "edu7", type: "training", dates: "", status: "progress" },
];

/* ---------- Certificates ----------
   Pictures live in public/images/certificates/. An empty image shows a placeholder.
   "extra" = more pages of the same certificate, shown as tabs inside the popup. */
export const CERTIFICATES = [
  { id: "c1", from: "edu2", image: "icdl-transcript.jpg" },
  { id: "c2", from: "edu3", image: "toefl-certificate.jpg" },
  { id: "c3", from: "edu5", image: "icdl-diploma.jpg", extra: [{ image: "icdl-transcript.jpg", label: "cert.transcript" }] },
];

export const FAQ_COUNT = 6;

/* ================= TEXTS ================= */
export const T = {
  en: {
    "meta.title": "Fatima Jafari – Graphic Designer",
    "nav.home": "Home", "nav.about": "About", "nav.projects": "Projects", "nav.skills": "Skills",
    "nav.education": "Education", "nav.certificates": "Certificates", "nav.contact": "Contact",
    "lang.switch": "Change language", "menu": "Menu", "close": "Close",

    "hero.badge": "Graphic Designer", "hero.hi": "Hi, I'm", "hero.name": "Fatima!",
    "hero.lead": "Creative and detail-oriented graphic designer creating meaningful, impactful designs that help brands grow and connect with their audience.",
    "hero.cta1": "View My Work", "hero.cta2": "Get in Touch", "hero.note": "Designs with purpose", "hero.alt": "Portrait of Fatima Jafari",

    "about.label": "About me", "about.title": "Design that communicates.",
    "about.p1": "I'm Fatima Jafari, a graphic designer based in Kabul, Afghanistan. I'm creative and detail-oriented, with strong skills in visual communication, branding and digital design. I'm passionate about creating meaningful and impactful designs that help brands grow and connect with their audience.",
    "about.p2": "My work covers logos and brand identities, social media design, posters and print materials, photo retouching and vector illustration. I care about typography, color and layout, because the small details are what make a design feel complete.",
    "about.c1.t": "Based in Kabul", "about.c1.d": "Working from Afghanistan",
    "about.c2.t": "My focus", "about.c2.d": "Logos, branding, print and social media",
    "about.c3.t": "Always learning", "about.c3.d": "Graphic design training at Netlinks",

    "projects.label": "My Portfolio", "projects.title": "Projects That Make Brands Stand Out",
    "projects.text": "A selection of my work in branding, print and design. Each project starts with a clear idea.",
    "projects.aud": "Target audience", "projects.prog": "Program",
    "projects.cta": "View project", "projects.more": "Show more", "projects.less": "Show less",
    "p1.title": "Restaurant Menu Design", "p1.text": "A warm, modern menu for a restaurant. Round dish photos, brown tones and gold type make the food look tasty and easy to choose.", "p1.aud": "Restaurant Customers",
    "p2.title": "Movie Poster Design", "p2.text": "A cinematic poster for the movie “The Last Road”. Warm sunset colors and a strong title create a dramatic mood.", "p2.aud": "Movie Lovers",
    "p3.title": "Bag Advertisement Banner Design", "p3.text": "A bright advertising banner for a bag brand. A clear product focus and simple text help shoppers notice the bags quickly.", "p3.aud": "Bag Buyers and General Customers",
    "p4.title": "Business Card Design", "p4.text": "A modern two-sided business card for Netlinks. Orange and white colors, a clear logo and a QR code give a professional look.", "p4.aud": "Business Owners and Corporate Clients",
    "p5.title": "Company Flyer Design", "p5.text": "A clean A4 flyer for a technology company. Purple and orange sections, icons and short text explain the company and its services.", "p5.aud": "Potential Customers and Business Clients",
    "p6.title": "Pepsi Advertisement Flyer Design", "p6.text": "A fresh advertisement flyer for a soft drink. A big can, a water splash and lime slices give a cool, juicy feeling.", "p6.aud": "Pepsi Consumers and Soft Drink Lovers",
    "p7.title": "Certificate Design", "p7.text": "An elegant certificate of appreciation. Royal blue corners, gold details and classic type give it a formal, high-quality look.", "p7.aud": "Students, Teachers, and Professionals",
    "p8.title": "Spice Packaging Design", "p8.text": "A premium pouch design for Double Horse Hendi Masala. A clear label, a food photo and bold type help the product stand out in shops.", "p8.aud": "Spice Buyers and Cooking Enthusiasts",
    "p9.title": "Construction Company Billboard Design", "p9.text": "A large outdoor billboard for a construction company. Real workers, a city view and strong yellow details build trust.", "p9.aud": "Property Owners, Investors, and Potential Clients",
    "p10.title": "Book Cover Design", "p10.text": "A full book cover with front, back and spine. A surreal double-exposure image and soft, elegant type show emotion and fate.", "p10.aud": "Readers, Students, and Book Lovers",

    "skills.label": "Skills & Services", "skills.title": "Creative Thinking. Meaningful Design.",
    "skills.text": "What I'm good at, what I can create for you, and how I think about design.",
    "s1.title": "My Skills", "s1.text": "Graphic Design · Branding · Typography · Layout Design · Color Theory",
    "s2.title": "What I Offer", "s2.text": "Brand Identity · Logo Design · Social Media Design · Print Design · Marketing Materials",
    "s3.title": "My Design Philosophy", "s3.text": "Thoughtful design, clear communication, and timeless creativity.",
    "skills.cta": "Start your design project",

    "edu.label": "Education & Training", "edu.title": "My learning journey",
    "edu.text": "The schools and courses that helped me grow as a designer.",
    "edu.progress": "In progress", "edu.dates": "Dates: to be added",
    "edu.type.diploma": "Diploma", "edu.type.course": "Course", "edu.type.certificate": "Certificate", "edu.type.training": "Training",
    "edu1.title": "High School Diploma", "edu1.org": "Soraya High School",
    "edu2.title": "English Transcript", "edu2.org": "Kabul Cambridge Institute",
    "edu3.title": "TOEFL Preparation Course", "edu3.org": "Star Education Society",
    "edu4.title": "Talk and Talk Program Diploma", "edu4.org": "Muslim Course",
    "edu5.title": "ICDL Certificate", "edu5.org": "Kabul Cambridge Institute",
    "edu6.title": "Cnava", "edu6.org": "Netlinks",
    "edu7.title": "Graphic Design Training", "edu7.org": "Netlinks", "edu7.note": "Currently studying. Three months of study so far.",

    "cert.label": "Certificates", "cert.title": "My certificates",
    "cert.text": "Proof of my learning and training.",
    "cert.placeholder": "Certificate image will be added here", "cert.open": "View certificate",
    "cert.diploma": "Certificate", "cert.transcript": "Transcript", "cert.pages": "Certificate pages",

    "faq.label": "FAQ", "faq.title": "Your Questions – My Answers.", "faq.text": "Answers to common questions about design projects and working with me.",
    "q1": "What kind of design work do you do?", "a1": "I design logos and brand identities, social media posts and banners, posters, flyers, brochures and business cards. I also do photo retouching, vector illustration and short promotional videos.",
    "q2": "Can you redesign my existing logo or brand?", "a2": "Yes. We look at what works in your current brand, keep what matters, and refresh the rest so it looks clear and consistent everywhere.",
    "q3": "How can I start a project with you?", "a3": "Send me a message through the contact form, WhatsApp or e-mail. Tell me about your idea and your audience, and I'll reply to talk through the details.",
    "q4": "What is your design process like?", "a4": "I start by understanding your goals and audience, then sketch ideas, develop the strongest concepts, and refine them with your feedback until the final design is ready.",
    "q5": "How long does a project take?", "a5": "It depends on the size of the project. After we talk about what you need, I'll give you a clear time estimate before we begin.",
    "q6": "Which files will I receive?", "a6": "You receive print-ready files, vector files and web-ready images, depending on your project, so you can use your design anywhere.",

    "contact.label": "Contact", "contact.title": "Ready for your next project.",
    "contact.text": "Do you need a logo, a brand identity, print design or visuals for social media? Tell me about your idea – I look forward to hearing from you.",
    "contact.loc": "Kabul, Afghanistan",
    "f.name": "Name", "f.nameph": "Your name", "f.email": "E-mail", "f.type": "Project type", "f.choose": "Choose a project type",
    "o1": "Logo & Branding", "o2": "Social Media Design", "o3": "Poster & Print Design", "o4": "Marketing Materials", "o5": "Video Editing", "o6": "Something else",
    "f.msg": "Message", "f.msgph": "Tell me about your project…", "f.send": "Send Message",
    "f.invalid": "Please fill in all fields correctly.", "f.ok": "Thank you! Your message was sent. I will reply to you soon.",
    "f.sending": "Sending…", "f.fail": "Sorry, the message could not be sent. Please try again or contact me by WhatsApp.",
    "footer.tag": "Creative thinking. Meaningful design.", "footer.top": "Back to top",
  },

  fa: {
    "meta.title": "فاطمه جعفری – طراح گرافیک",
    "nav.home": "خانه", "nav.about": "درباره من", "nav.projects": "پروژه‌ها", "nav.skills": "مهارت‌ها",
    "nav.education": "تحصیلات", "nav.certificates": "گواهی‌نامه‌ها", "nav.contact": "تماس",
    "lang.switch": "تغییر زبان", "menu": "منو", "close": "بستن",

    "hero.badge": "طراح گرافیک", "hero.hi": "سلام، من", "hero.name": "فاطمه‌ام!",
    "hero.lead": "طراح گرافیک خلاق و دقیق که طرح‌های معنادار و اثرگذار می‌سازد تا برندها رشد کنند و با مخاطبان خود ارتباط برقرار کنند.",
    "hero.cta1": "مشاهده کارها", "hero.cta2": "تماس با من", "hero.note": "طرح‌هایی با هدف", "hero.alt": "تصویر فاطمه جعفری",

    "about.label": "درباره من", "about.title": "طراحی‌ای که پیام می‌رساند.",
    "about.p1": "من فاطمه جعفری هستم، طراح گرافیک ساکن کابل، افغانستان. خلاق و دقیق هستم و در ارتباط بصری، برندینگ و طراحی دیجیتال مهارت خوبی دارم. عاشق ساختن طرح‌های معنادار و اثرگذاری هستم که به رشد برندها و ارتباط آن‌ها با مخاطبانشان کمک می‌کند.",
    "about.p2": "کارهای من شامل لوگو و هویت برند، طراحی شبکه‌های اجتماعی، پوستر و مواد چاپی، روتوش عکس و تصویرسازی وکتور است. به تایپوگرافی، رنگ و چیدمان اهمیت می‌دهم، چون همین جزئیات کوچک است که یک طرح را کامل می‌کند.",
    "about.c1.t": "ساکن کابل", "about.c1.d": "کار از افغانستان",
    "about.c2.t": "تمرکز من", "about.c2.d": "لوگو، برندینگ، چاپ و شبکه‌های اجتماعی",
    "about.c3.t": "همیشه در حال یادگیری", "about.c3.d": "آموزش طراحی گرافیک در Netlinks",

    "projects.label": "نمونه کارهای من", "projects.title": "پروژه‌هایی که برندها را متمایز می‌کنند",
    "projects.text": "گزیده‌ای از کارهای من در برندینگ، چاپ و طراحی. هر پروژه با یک ایده روشن شروع می‌شود.",
    "projects.aud": "مخاطب هدف", "projects.prog": "نرم‌افزار",
    "projects.cta": "مشاهده پروژه", "projects.more": "نمایش بیشتر", "projects.less": "نمایش کمتر",
    "p1.title": "طراحی منوی رستوران", "p1.text": "منوی گرم و مدرن برای یک رستوران. عکس‌های گرد غذا، رنگ‌های قهوه‌ای و تایپوگرافی طلایی غذا را خوشمزه و انتخاب آن را آسان می‌کند.", "p1.aud": "مشتریان رستوران",
    "p2.title": "طراحی پوستر فیلم", "p2.text": "پوستر سینمایی برای فیلم «The Last Road». رنگ‌های گرم غروب و عنوان قوی حال‌وهوایی دراماتیک می‌سازد.", "p2.aud": "دوستداران فیلم",
    "p3.title": "طراحی بنر تبلیغاتی کیف", "p3.text": "بنر تبلیغاتی روشن برای یک برند کیف. تمرکز روشن روی محصول و متن ساده باعث می‌شود خریداران زود کیف‌ها را ببینند.", "p3.aud": "خریداران کیف و مشتریان عمومی",
    "p4.title": "طراحی کارت ویزیت", "p4.text": "کارت ویزیت مدرن دو‌رویه برای Netlinks. رنگ‌های نارنجی و سفید، لوگوی روشن و کد QR ظاهری حرفه‌ای می‌دهد.", "p4.aud": "صاحبان کسب‌وکار و مشتریان شرکتی",
    "p5.title": "طراحی فلایر شرکت", "p5.text": "فلایر A4 تمیز برای یک شرکت تکنولوژی. بخش‌های بنفش و نارنجی، آیکن‌ها و متن کوتاه، شرکت و خدمات آن را توضیح می‌دهد.", "p5.aud": "مشتریان بالقوه و مشتریان تجاری",
    "p6.title": "طراحی فلایر تبلیغاتی پپسی", "p6.text": "فلایر تبلیغاتی تازه برای یک نوشابه. قوطی بزرگ، پاشش آب و برش‌های لیمو حس خنک و آبدار می‌دهد.", "p6.aud": "مصرف‌کنندگان پپسی و دوستداران نوشابه",
    "p7.title": "طراحی گواهی‌نامه", "p7.text": "تقدیرنامه شیک. گوشه‌های آبی سلطنتی، جزئیات طلایی و تایپوگرافی کلاسیک ظاهری رسمی و باکیفیت می‌دهد.", "p7.aud": "شاگردان، استادان و متخصصان",
    "p8.title": "طراحی بسته‌بندی ادویه", "p8.text": "طراحی بسته‌بندی ممتاز برای Double Horse Hendi Masala. برچسب روشن، عکس غذا و تایپوگرافی پررنگ کمک می‌کند محصول در فروشگاه دیده شود.", "p8.aud": "خریداران ادویه و علاقه‌مندان به آشپزی",
    "p9.title": "طراحی بیلبورد شرکت ساختمانی", "p9.text": "بیلبورد بزرگ بیرونی برای یک شرکت ساختمانی. کارگران واقعی، منظره شهر و جزئیات زرد قوی اعتماد می‌سازد.", "p9.aud": "مالکان ملک، سرمایه‌گذاران و مشتریان بالقوه",
    "p10.title": "طراحی جلد کتاب", "p10.text": "جلد کامل کتاب با روی جلد، پشت جلد و عطف. تصویر سورئال دو‌نمایی و تایپوگرافی نرم و زیبا احساس و سرنوشت را نشان می‌دهد.", "p10.aud": "خوانندگان، شاگردان و دوستداران کتاب",

    "skills.label": "مهارت‌ها و خدمات", "skills.title": "تفکر خلاق. طراحی معنادار.",
    "skills.text": "آنچه در آن مهارت دارم، آنچه می‌توانم برای شما بسازم و نگاه من به طراحی.",
    "s1.title": "مهارت‌های من", "s1.text": "طراحی گرافیک · برندینگ · تایپوگرافی · طراحی چیدمان · تئوری رنگ",
    "s2.title": "آنچه ارائه می‌دهم", "s2.text": "هویت برند · طراحی لوگو · طراحی شبکه‌های اجتماعی · طراحی چاپی · مواد بازاریابی",
    "s3.title": "فلسفه طراحی من", "s3.text": "طراحی سنجیده، ارتباط روشن و خلاقیت ماندگار.",
    "skills.cta": "پروژه طراحی خود را شروع کنید",

    "edu.label": "تحصیلات و آموزش", "edu.title": "مسیر یادگیری من",
    "edu.text": "مکتب‌ها و دوره‌هایی که به رشد من به‌عنوان طراح کمک کردند.",
    "edu.progress": "در حال آموزش", "edu.dates": "تاریخ: بعداً اضافه می‌شود",
    "edu.type.diploma": "دیپلوم", "edu.type.course": "دوره", "edu.type.certificate": "گواهی‌نامه", "edu.type.training": "آموزش",
    "edu1.title": "دیپلوم دبیرستان", "edu1.org": "Soraya High School",
    "edu2.title": "دیپلوم انگلیسی", "edu2.org": "Kabul Cambridge Institute",
    "edu3.title": "دوره آمادگی تافل", "edu3.org": "Star Education Society",
    "edu4.title": "دیپلوم برنامه Talk and Talk", "edu4.org": "Muslim Course",
    "edu5.title": "گواهی‌نامه ICDL", "edu5.org": "Kabul Cambridge Institute",
    "edu6.title": "Cnava", "edu6.org": "Netlinks",
    "edu7.title": "آموزش طراحی گرافیک", "edu7.org": "Netlinks", "edu7.note": "در حال آموزش. تا حالا سه ماه آموزش دیده‌ام.",

    "cert.label": "گواهی‌نامه‌ها", "cert.title": "گواهی‌نامه‌های من",
    "cert.text": "نشانه‌ای از یادگیری و آموزش من.",
    "cert.placeholder": "تصویر گواهی‌نامه اینجا اضافه می‌شود", "cert.open": "مشاهده گواهی‌نامه",
    "cert.diploma": "گواهی‌نامه", "cert.transcript": "ریز نمرات", "cert.pages": "صفحات گواهی‌نامه",

    "faq.label": "پرسش‌ها", "faq.title": "پرسش‌های شما – پاسخ‌های من.", "faq.text": "پاسخ به پرسش‌های رایج درباره پروژه‌های طراحی و همکاری با من.",
    "q1": "چه نوع کارهای طراحی انجام می‌دهید؟", "a1": "من لوگو و هویت برند، پست و بنر شبکه‌های اجتماعی، پوستر، فلایر، بروشور و کارت ویزیت طراحی می‌کنم. همچنین روتوش عکس، تصویرسازی وکتور و ویدیوهای تبلیغاتی کوتاه انجام می‌دهم.",
    "q2": "آیا می‌توانید لوگو یا برند فعلی مرا بازطراحی کنید؟", "a2": "بله. ابتدا بررسی می‌کنیم کدام بخش‌های برند فعلی شما خوب کار می‌کند، آنچه مهم است را نگه می‌داریم و بقیه را بازسازی می‌کنیم تا همه‌جا واضح و یکدست دیده شود.",
    "q3": "چگونه می‌توانم یک پروژه را با شما شروع کنم؟", "a3": "از طریق فرم تماس، واتساپ یا ایمیل برای من پیام بفرستید. درباره ایده و مخاطبان خود بنویسید تا برای گفت‌وگو درباره جزئیات پاسخ بدهم.",
    "q4": "روند کاری شما چگونه است؟", "a4": "ابتدا اهداف و مخاطبان شما را می‌شناسم، سپس ایده‌ها را طراحی اولیه می‌کنم، قوی‌ترین مفهوم‌ها را پرورش می‌دهم و با نظرهای شما آن‌ها را اصلاح می‌کنم تا طرح نهایی آماده شود.",
    "q5": "یک پروژه چقدر طول می‌کشد؟", "a5": "این به اندازه پروژه بستگی دارد. بعد از گفت‌وگو درباره نیازهای شما، پیش از شروع، برآورد روشنی از زمان به شما می‌دهم.",
    "q6": "چه فایل‌هایی دریافت می‌کنم؟", "a6": "بسته به پروژه، فایل‌های آماده چاپ، فایل‌های وکتور و تصاویر مناسب وب دریافت می‌کنید تا بتوانید طرح خود را همه‌جا استفاده کنید.",

    "contact.label": "تماس", "contact.title": "برای پروژه بعدی‌تان آماده‌اید؟",
    "contact.text": "به لوگو، هویت برند، طراحی چاپی یا تصاویر شبکه‌های اجتماعی نیاز دارید؟ درباره ایده‌تان برایم بنویسید – منتظر شنیدن خبر از شما هستم.",
    "contact.loc": "کابل، افغانستان",
    "f.name": "نام", "f.nameph": "نام شما", "f.email": "ایمیل", "f.type": "نوع پروژه", "f.choose": "نوع پروژه را انتخاب کنید",
    "o1": "لوگو و برندینگ", "o2": "طراحی شبکه‌های اجتماعی", "o3": "پوستر و طراحی چاپی", "o4": "مواد بازاریابی", "o5": "ویرایش ویدیو", "o6": "چیز دیگر",
    "f.msg": "پیام", "f.msgph": "درباره پروژه‌تان بنویسید…", "f.send": "ارسال پیام",
    "f.invalid": "لطفاً همه فیلدها را درست پر کنید.", "f.ok": "سپاس! پیام شما ارسال شد. به زودی پاسخ می‌دهم.",
    "f.sending": "در حال ارسال…", "f.fail": "متأسفیم، پیام ارسال نشد. لطفاً دوباره تلاش کنید یا از طریق واتس‌اپ تماس بگیرید.",
    "footer.tag": "تفکر خلاق. طراحی معنادار.", "footer.top": "بازگشت به بالا",
  },
};