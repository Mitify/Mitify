// Sample courses data
const sampleCourses = [
    {
        id: 1,
        title: "تطوير الويب المتقدم",
        category: "تطوير الويب",
        instructor: "أحمد محمد",
        duration: 40,
        level: "متقدم",
        price: 99.99,
        description: "تعلم تطوير الويب باستخدام أحدث التقنيات والأطر مثل React وNode.js",
        icon: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "تعلم Python من الصفر",
        category: "برمجة",
        instructor: "سارة أحمد",
        duration: 30,
        level: "مبتدئ",
        price: 79.99,
        description: "ابدأ رحلتك في البرمجة مع لغة Python المتعددة الاستخدامات",
        icon: "fas fa-code"
    },
    {
        id: 3,
        title: "تصميم UI/UX للمبتدئين",
        category: "تصميم",
        instructor: "محمد علي",
        duration: 25,
        level: "مبتدئ",
        price: 69.99,
        description: "تعلم أساسيات تصميم واجهات المستخدم وتجربة المستخدم",
        icon: "fas fa-palette"
    }
];

// Initialize courses in localStorage if not exists
if (!localStorage.getItem('miitify-courses')) {
    localStorage.setItem('miitify-courses', JSON.stringify(sampleCourses));
}

// Common functions for both pages
function setupEventListeners() {
    // Language switcher
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    
    if (languageBtn && languageMenu) {
        languageBtn.addEventListener('click', function() {
            languageMenu.classList.toggle('show');
        });
        
        // Language selection
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                languageMenu.classList.remove('show');
            });
        });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
            localStorage.setItem('miitify-darkmode', this.checked);
        });
        
        // Load dark mode preference
        const darkModePref = localStorage.getItem('miitify-darkmode') === 'true';
        darkModeToggle.checked = darkModePref;
        document.body.classList.toggle('dark-mode', darkModePref);
    }
    
    // Close language menu when clicking outside
    document.addEventListener('click', function(e) {
        if (languageBtn && !languageBtn.contains(e.target) && languageMenu && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('show');
        }
    });
}

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('miitify-language', lang);
    updateLanguageIcons();
    
    // In a real application, you would update all text content based on the selected language
    alert(`Language changed to ${lang}. In a real application, all text would be translated.`);
}

function updateLanguageIcons() {
    const currentLang = localStorage.getItem('miitify-language') || 'ar';
    
    // Hide all check icons
    const checkAr = document.getElementById('checkAr');
    const checkEn = document.getElementById('checkEn');
    const checkFr = document.getElementById('checkFr');
    
    if (checkAr) checkAr.classList.add('hidden');
    if (checkEn) checkEn.classList.add('hidden');
    if (checkFr) checkFr.classList.add('hidden');
    
    // Show check icon for current language
    if (currentLang === 'ar' && checkAr) {
        checkAr.classList.remove('hidden');
    } else if (currentLang === 'en' && checkEn) {
        checkEn.classList.remove('hidden');
    } else if (currentLang === 'fr' && checkFr) {
        checkFr.classList.remove('hidden');
    }
}

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateLanguageIcons();
});
