
const translations = {
  en: { title:"BRIX Marketplace", welcome:"Welcome to BRIX Marketplace", desc:"Buy globally with BRICS token." },
  fa: { title:"بازار بریکس", welcome:"به بازار جهانی بریکس خوش آمدید", desc:"خرید جهانی با توکن بریکس" },
  ar: { title:"سوق بريكس", welcome:"مرحبا بكم في سوق بريكس", desc:"تسوق عالمياً باستخدام رمز بريكس" }
};

function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.title = translations[lang]["title"];
}
