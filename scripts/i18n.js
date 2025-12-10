// i18n.js

const translations = {
  fa: {
    title: "مارکت‌پلیس بریکس",
    login: "ورود / ثبت‌نام",
    cart_text: "سبد خرید",
    hero_title: "BRIX — کارت خرید جهانی",
    hero_sub: "خرید کارت BRIX، شارژ با توکن BRICS و خرید از فروشندگان بین‌المللی.",
    create_card: "تهیه کارت BRIX",
    view_products: "مشاهده محصولات",
    brix_highlight_title: "پروژه BRIX — زیرمجموعه BRICS",
    brix_highlight_sub: "پروژه Brix بازار بین‌المللی مد و محصولات صادراتی را با پرداخت رمزنگاری تسهیل می‌کند.",
    view_brix: "مشاهده Brix",
    products_title: "محصولات",
    checkout_title: "تسویه حساب با کارت BRIX",
    pay_with_brics: "پرداخت با BRICS",
    close: "بستن",
    footer: "BRIX Marketplace © 2025"
  },

  ar: {
    title: "سوق BRIX العالمي",
    login: "تسجيل الدخول / إنشاء حساب",
    cart_text: "سلة المشتريات",
    hero_title: "BRIX — بطاقة التسوق العالمية",
    hero_sub: "اشترِ بطاقة BRIX، اشحنها برمز BRICS، وابدأ التسوق عبر الحدود.",
    create_card: "شراء بطاقة BRIX",
    view_products: "عرض المنتجات",
    brix_highlight_title: "مشروع BRIX — تابع لـ BRICS",
    brix_highlight_sub: "يسهّل مشروع Brix تجارة الأزياء والمنتجات التصديرية عبر التشفير.",
    view_brix: "عرض Brix",
    products_title: "المنتجات",
    checkout_title: "الدفع بواسطة بطاقة BRIX",
    pay_with_brics: "الدفع باستخدام BRICS",
    close: "إغلاق",
    footer: "BRIX Marketplace © 2025"
  },

  en: {
    title: "BRIX Marketplace",
    login: "Login / Register",
    cart_text: "Cart",
    hero_title: "BRIX — Global Shopping Card",
    hero_sub: "Buy a BRIX card, top up with BRICS token, and shop globally.",
    create_card: "Get BRIX Card",
    view_products: "View Products",
    brix_highlight_title: "Project BRIX — A sub-project of BRICS",
    brix_highlight_sub: "Brix enables global fashion commerce with crypto settlement.",
    view_brix: "View Brix",
    products_title: "Products",
    checkout_title: "Checkout — BRIX Card",
    pay_with_brics: "Pay with BRICS",
    close: "Close",
    footer: "BRIX Marketplace © 2025"
  }
};

// Apply translation to DOM
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Update html lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Save to storage
  localStorage.setItem("lang", lang);
}

// Change language on button click
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fa";
  applyTranslations(savedLang);

  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.setLang;
      applyTranslations(lang);
    });
  });
});
