/* =========================================================
   KiberOgoh UZ — MENYU KONFIGURATSIYASI (yagona manba)
   Band qo'shish, ko'chirish yoki nomini o'zgartirish uchun faqat shu faylni tahrirlang.
     id    — ko'rinish identifikatori (index.html dagi #view-<id>, URL: #/<id>)
     icon  — app.js dagi NAV_ICO kaliti
     match — shu band aktiv ko'rinadigan qo'shimcha ko'rinishlar
     soon  — "Tez orada" placeholder sahifa
     badge — menyu nishoni { id, text }
     collapsible — bo'lim bitta yig'iladigan band bo'lib chiziladi (bosilganda bandlari ochiladi)
   ========================================================= */
window.KO_NAV = {
  // bo'limlardan tashqarida, o'ng pastki burchakdagi suzuvchi tugma
  assistant: { id: "assist", label: "AI Hamroh", emoji: "💬" },

  sections: [
    { key: "learn", title: "Kiber akademiya", icon: "academy", collapsible: true, items: [
      { id: "mavzular",  label: "Mavzular",          icon: "book", match: ["quiz"] },
      { id: "life",      label: "Kiberlayfxaklar",   icon: "bulb" },
      { id: "natijalar", label: "Sinov natijalarim", icon: "chart" }
    ]},
    { key: "alert", title: "Xavfdan xabar", icon: "alert", collapsible: true, items: [
      { id: "feed",   label: "Tahdidlar lentasi", icon: "bell", badge: { id: "feedBadge", text: "3" } },
      { id: "yollar", label: "Xavf yo'llari",     icon: "route", soon: true },
      { id: "check",  label: "Tekshirgich",       icon: "search" }
    ]},
    { key: "result", title: "Mening natijam", icon: "trophy", collapsible: true, items: [
      { id: "ball",      label: "Ball va daraja",      icon: "medal" },
      { id: "cert",      label: "Sertifikatlarim",     icon: "cert" },
      { id: "privilege", label: "Imtiyozlarim",        icon: "gift" }
    ]}
  ],

  // mas'ul xodimlar uchun qo'shimcha bo'lim — rol login (akkaunt) orqali aniqlanadi
  staff: {
    superadmin: { key: "staff", title: "BOSHQARUV", items: [
      { id: "admin",   label: "Superadmin paneli",       icon: "shield" },
      { id: "kxi",     label: "KiberXavfsizlik Indeksi", icon: "gauge" },
      { id: "mahalla", label: "Mahalla paneli",          icon: "home", badge: { id: "mahallaBadge", text: "2" } }
    ]},
    tuman: { key: "staff", title: "BOSHQARUV", items: [
      { id: "kxi", label: "KiberXavfsizlik Indeksi", icon: "gauge" }
    ]},
    raisi: { key: "staff", title: "BOSHQARUV", items: [
      { id: "mahalla", label: "Mahalla paneli",          icon: "home", badge: { id: "mahallaBadge", text: "2" } },
      { id: "kxi",     label: "KiberXavfsizlik Indeksi", icon: "gauge" }
    ]}
  },

  // bo'lim emas — menyu pastidagi ixcham havolalar
  more: { title: "Boshqa", items: [
    { id: "dash",   label: "Bosh sahifa" },
    { id: "video",  label: "So'nggi videolar" },
    { id: "reg",    label: "Ro'yxatdan o'tish" },
    { id: "legal",  label: "Huquqiy asoslar" },
    { id: "umumiy", label: "Umumiy bo'lim" }
  ]},

  // eski yoki muqobil manzillar -> joriy ko'rinish (redirect)
  aliases: {
    home: "dash", rating: "life", priv: "privilege", condition: "privilege", map: "kxi",
    kitobxonlik: "cert", sertifikat: "cert", sinov: "quiz", "yosh-yollar": "yollar",
    help: "mavzular", elchi: "cert"
  }
};
