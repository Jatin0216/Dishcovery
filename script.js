// =======================
// THEME TOGGLE
// =======================
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
  const applyTheme = t => {
    document.body.setAttribute('data-theme', t);
    themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', t);
  };
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);
  themeBtn.addEventListener('click', () => {
    const t = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(t);
  });
}

// =======================
// ROTATING QUOTES (HOME PAGE)
// =======================
const quotes = [
  "Good food is the foundation of genuine happiness.",
  "Cooking is love made visible.",
  "Spices are the soul of a dish.",
  "Eat locally, savor globally.",
  "A recipe has no soul. You as the cook must bring soul to the recipe.",
  "Great meals invite great conversations."
];
const quoteEl = document.getElementById('quote');
if (quoteEl) {
  let qi = 0;
  const setQ = () => { quoteEl.textContent = quotes[qi % quotes.length]; qi++; };
  setQ();
  setInterval(setQ, 5000);
}

// =======================
// LANGUAGE ENGINE
// =======================
const i18n = {
  en: { brand: "Dishcovery", hero_title: "Explore the world’s most loved dishes", cta_generate: "Generate a recipe", categories: "Categories", trending: "Trending" },
  hi: { brand: "डिशकवरी", hero_title: "दुनिया के सबसे पसंदीदा व्यंजन खोजें", cta_generate: "रेसिपी बनाएँ", categories: "श्रेणियाँ", trending: "ट्रेंडिंग" },
  mr: { brand: "डिशकव्हरी", hero_title: "जगातील आवडते पदार्थ शोधा", cta_generate: "रेसिपी तयार करा", categories: "वर्ग", trending: "ट्रेंडिंग" },
  ta: { brand: "டிஷ்கவரி", hero_title: "உலகின் பிடித்த உணவுகளை ஆராயுங்கள்", cta_generate: "செய்முறை உருவாக்க", categories: "வகைகள்", trending: "பிரபலமானவை" },
  te: { brand: "డిష్కవరీ", hero_title: "ప్రపంచంలోని ఇష్టమైన వంటకాలు అన్వేషించండి", cta_generate: "వంటకం తయారు చేయండి", categories: "వర్గాలు", trending: "ట్రెండింగ్" },
  kn: { brand: "ಡಿಶ್ಕವರಿ", hero_title: "ವಿಶ್ವದ ಮೆಚ್ಚಿನ ಆಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ", cta_generate: "ಪಾಕವಿಧಾನ ರಚಿಸಿ", categories: "ವರ್ಗಗಳು", trending: "ಟ್ರೆಂಡಿಂಗ್" },
  ml: { brand: "ഡിഷ്കവറി", hero_title: "ലോകത്തിലെ പ്രിയപ്പെട്ട വിഭവങ്ങൾ അന്വേഷിക്കുക", cta_generate: "റെസിപ്പി സൃഷ്ടിക്കുക", categories: "വിഭാഗങ്ങൾ", trending: "ട്രെൻഡിംഗ്" },
  bn: { brand: "ডিশকভারি", hero_title: "বিশ্বের সেরা পছন্দের খাবার আবিষ্কার করুন", cta_generate: "রেসিপি তৈরি করুন", categories: "বিভাগ", trending: "ট্রেন্ডিং" },
  gu: { brand: "ડિશકવરી", hero_title: "વિશ્વના મનપસંદ વાનગીઓ શોધો", cta_generate: "વિધિ બનાવો", categories: "શ્રેણીઓ", trending: "ટ્રેન્ડિંગ" },
  pa: { brand: "ਡਿਸਕਵਰੀ", hero_title: "ਦੁਨੀਆ ਦੇ ਮਨਪਸੰਦ ਭੋਜਨ ਖੋਜੋ", cta_generate: "ਰੈਸਪੀ ਬਣਾਓ", categories: "ਸ਼੍ਰੇਣੀਆਂ", trending: "ਟ੍ਰੈਂਡਿੰਗ" },
  ur: { brand: "ڈشکوری", hero_title: "دنیا کے پسندیدہ پکوان تلاش کریں", cta_generate: "ترکیب بنائیں", categories: "زمرے", trending: "ٹرینڈنگ" },
  or: { brand: "ଡିଶକଭରୀ", hero_title: "ବିଶ୍ୱର ପ୍ରିୟ ଖାଦ୍ୟ ଖୋଜନ୍ତୁ", cta_generate: "ରେସିପି ତିଆରି କରନ୍ତୁ", categories: "ଶ୍ରେଣୀ", trending: "ଟ୍ରେଣ୍ଡିଂ" },
  as: { brand: "ডিশকভাৰী", hero_title: "জগতৰ প্ৰিয় খাদ্যসমূহ সন্ধান কৰক", cta_generate: "ৰেচিপি তৈয়াৰ কৰক", categories: "বৰ্গ", trending: "ট্ৰেণ্ডিং" },
  fr: { brand: "Dishcovery", hero_title: "Explorez les plats les plus appréciés au monde", cta_generate: "Générer une recette", categories: "Catégories", trending: "Tendance" },
  es: { brand: "Dishcovery", hero_title: "Explora los platos más queridos del mundo", cta_generate: "Generar receta", categories: "Categorías", trending: "Tendencias" },
  de: { brand: "Dishcovery", hero_title: "Entdecke die beliebtesten Gerichte der Welt", cta_generate: "Rezept generieren", categories: "Kategorien", trending: "Trends" },
  it: { brand: "Dishcovery", hero_title: "Esplora i piatti più amati al mondo", cta_generate: "Genera ricetta", categories: "Categorie", trending: "Di tendenza" },
  pt: { brand: "Dishcovery", hero_title: "Explore os pratos mais amados do mundo", cta_generate: "Gerar receita", categories: "Categorias", trending: "Tendências" },
  ar: { brand: "ديشكفري", hero_title: "استكشف أشهر الأطباق في العالم", cta_generate: "إنشاء وصفة", categories: "الفئات", trending: "الشائع" },
  zh: { brand: "Dishcovery", hero_title: "探索全球最受欢迎的美食", cta_generate: "生成食谱", categories: "分类", trending: "趋势" },
  ja: { brand: "Dishcovery", hero_title: "世界で愛される料理を探そう", cta_generate: "レシピを生成", categories: "カテゴリー", trending: "トレンド" },
  ko: { brand: "Dishcovery", hero_title: "전 세계에서 사랑받는 요리를 탐험하세요", cta_generate: "레시피 생성", categories: "카테고리", trending: "트렌딩" },
  ru: { brand: "Dishcovery", hero_title: "Исследуйте самые любимые блюда мира", cta_generate: "Сгенерировать рецепт", categories: "Категории", trending: "В тренде" },
  tr: { brand: "Dishcovery", hero_title: "Dünyanın en sevilen yemeklerini keşfedin", cta_generate: "Tarif oluştur", categories: "Kategoriler", trending: "Trendler" }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k]) el.textContent = dict[k];
  });
  localStorage.setItem('lang', lang);
}

const langSelect = document.getElementById('langSelect');
if (langSelect) {
  const savedLang = localStorage.getItem('lang') || 'en';
  langSelect.value = savedLang;
  applyLang(savedLang);
  langSelect.addEventListener('change', (e) => applyLang(e.target.value));
}

// =======================
// RECIPE GENERATOR DEMO
// =======================
const recipeForm = document.getElementById('recipeForm');
if (recipeForm) {
  recipeForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').style.display = 'none';

    const loadQuotes = [
      "Good food takes time...",
      "Adding a pinch of love...",
      "Simmering ideas into flavor...",
      "Whisking up something tasty...",
      "Cooking is an art, plating is poetry..."
    ];
    let qi = 0;
    const quoteEl = document.getElementById('loadingQuote');
    const interval = set
