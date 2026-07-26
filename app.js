/* =========================================================
   KiberOgoh UZ — demo logikasi
   ========================================================= */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

  /* ---------- icons ---------- */
  const ICON = {
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2A3.2 3.2 0 0 1 18 11M20.5 19a5.5 5.5 0 0 0-4-5.3"/></svg>',
    ban: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/><circle cx="12" cy="12" r="3"/></svg>',
    sms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16v11H8l-4 3V5Z"/><path d="M8 10h8M8 13h5"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 13a4 4 0 0 0 5.6.6l3-3A4 4 0 0 0 12 5l-1.5 1.5"/><path d="M15 11a4 4 0 0 0-5.6-.6l-3 3A4 4 0 0 0 12 19l1.5-1.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg>',
    social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11 15.8 7M8.2 13l7.6 4"/></svg>',
    coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M4 13h16M12 9v11M12 9C9 4 4 6 7 8c1.5 1 5 1 5 1Zm0 0c3-5 8-3 5-1-1.5 1-5 1-5 1Z"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="14" r="6"/><path d="m9 8-3-5M15 8l3-5M10.5 14l1.5 1.5 2.5-3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    shieldCheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3 4 6v6c0 4.5 3.2 8.3 8 9.7 4.8-1.4 8-5.2 8-9.7V6l-8-3Z"/><path d="m8.5 12 2.3 2.4L15.8 9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    caret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4" stroke-linecap="round"/><circle cx="12" cy="16.5" r=".6" fill="currentColor" stroke="none"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m5 12 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5Z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.6-9.3-8.4C1 9.3 2.6 6 5.8 6c2 0 3.3 1.2 4.2 2.5C11 7.2 12.2 6 14.2 6 17.4 6 19 9.3 21.3 12.6 19 16.4 12 21 12 21Z"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M8 8.5h8M8 11.5h5"/><circle cx="12" cy="18" r="2.2"/><path d="m10.4 19.6-.5 2.8 2.1-1.2 2.1 1.2-.5-2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 21V4M5 4h11l-2 4 2 4H5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    invite: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M18 7v6M21 10h-6" stroke-linecap="round"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4.5v1A3.5 3.5 0 0 0 8 10.5M17 6h2.5v1A3.5 3.5 0 0 1 16 10.5"/><path d="M12 14v3M9.5 21h5M10 17h4l1 4H9l1-4Z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    grad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" stroke-linejoin="round"/><path d="M6.5 10.8V15c0 1.2 2.5 3 5.5 3s5.5-1.8 5.5-3v-4.2"/><path d="M21.5 8.5v5" stroke-linecap="round"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-3.5h4V21" stroke-linecap="round"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    exam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2.2h6V3" stroke-linejoin="round"/><path d="M8.5 11.5l1.4 1.4 2.6-2.8M8.5 16.5h7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 3 11 14M22 3l-7 18-4-7-7-4 18-7Z" stroke-linejoin="round"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" stroke-linecap="round"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.7"/><path d="m4 17 5-5 4 4 3-3 4 4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.4 20.4 21 12 3.4 3.6 3 10l12 2-12 2 .4 6.4Z"/></svg>'
  };

  /* =========================================================
     DATA
     ========================================================= */
  const STATS = [
    { ico: ICON.map, cls: "i-gold", num: 200, suffix: "+", label: "Qamrab olingan mahallalar", y2: "2-yil: 2 000+" },
    { ico: ICON.users, cls: "i-teal", num: 100, suffix: " ming+", label: "Ro'yxatdan o'tgan fuqarolar", y2: "2-yil: 1 mln+" },
    { ico: ICON.ban, cls: "i-red", num: 5000, suffix: "+", label: "Qora ro'yxatdagi raqamlar", y2: "2-yil: 30 000+" },
    { ico: ICON.spark, cls: "i-purple", num: 300, suffix: "+", label: "O'qitilgan ko'ngillilar", y2: "2-yil: 3 000+" }
  ];

  const CATS = {
    sms:   { label: "SMS firibgarlik", ico: ICON.sms,    color: "i-red" },
    fish:  { label: "Fishing havola",  ico: ICON.link,   color: "i-gold" },
    call:  { label: "Qo'ng'iroq aldovi", ico: ICON.phone, color: "i-blue" },
    social:{ label: "Ijtimoiy tarmoq", ico: ICON.social, color: "i-purple" },
    invest:{ label: "Investitsiya",    ico: ICON.coin,   color: "i-teal" },
    prize: { label: "Yutuq / sovg'a",  ico: ICON.gift,   color: "i-gold" }
  };

  const FEED = [
    { cat:"sms",  sev:"high", title:"Soxta “Click” SMS: hisobingiz bloklandi", body:"“Click hisobingiz bloklandi, qayta tiklash uchun havolaga kiring” — havola rasmiy clik.uz emas. Bosmang.", region:"Zangiota", time:"5 daqiqa oldin", n:140 },
    { cat:"prize",sev:"high", title:"“Avtomobil yutdingiz” qo'ng'irog'i", body:"Notanish raqamdan “lotereyada yutdingiz, soliq uchun pul o'tkazing” deyishadi. Hech qanday yutuq yo'q.", region:"Yunusobod", time:"22 daqiqa oldin", n:61 },
    { cat:"fish", sev:"mid",  title:"Soxta pochta yetkazib berish havolasi", body:"“Posilkangiz kutmoqda, bojni to'lang” SMS’idagi havola karta ma'lumotini o'g'irlaydi.", region:"Mirzo Ulug'bek", time:"1 soat oldin", n:88 },
    { cat:"social",sev:"mid", title:"Telegramda akkaunt “ovoz berish” aldovi", body:"Do'stingiz nomidan “bolam tanlovda, ovoz ber” havolasi — bu akkaunt o'g'irlash usuli.", region:"Sergeli", time:"2 soat oldin", n:53 },
    { cat:"call", sev:"high", title:"“Bank xavfsizlik xizmati” qo'ng'irog'i", body:"O'zini bank xodimi deb tanishtirib SMS-kod so'rashadi. Bank hech qachon kod so'ramaydi.", region:"Olmazor", time:"3 soat oldin", n:97 },
    { cat:"invest",sev:"mid", title:"“Kuniga 20% foyda” investitsiya kanali", body:"Soxta investitsiya platformasi avval kichik “foyda” to'laydi, keyin katta pul yig'ib yo'qoladi.", region:"Yakkasaroy", time:"5 soat oldin", n:34 },
    { cat:"sms",  sev:"low",  title:"Soxta “nafaqa qo'shildi” xabari", body:"“Sizga davlat yordami tayinlandi, kartani tasdiqlang” — rasmiy xizmatlar bunday SMS yubormaydi.", region:"Uchtepa", time:"8 soat oldin", n:29 }
  ];

  // live alerts pool (injected periodically)
  const LIVE_POOL = [
    { cat:"fish", sev:"high", title:"Yangi soxta sayt: humo-bonus aldovi", body:"“Humo bonus dasturi” nomidagi soxta sayt karta raqami va kodni so'ramoqda.", region:"Bektemir", n:12 },
    { cat:"social",sev:"mid", title:"Instagram “bepul follower” aldovi", body:"Parolingizni so'raydigan “bepul obunachi” xizmati akkauntni o'g'irlaydi.", region:"Shayxontohur", n:18 },
    { cat:"call", sev:"high", title:"Soxta “operator” qo'ng'irog'i", body:"“Raqamingiz bloklanadi, kodni ayting” — operator hech qachon kod so'ramaydi.", region:"Yashnobod", n:21 },
    { cat:"prize",sev:"mid", title:"“Sovrinli o'yin” havolasi", body:"“Aylantiring va yuting” havolasi shaxsiy ma'lumotni yig'adi.", region:"Qibray", n:9 }
  ];

  const SCAMS = [
    { cat:"sms",  name:"Soxta bank/to'lov SMS", how:"Click, Payme, Uzcard yoki Humo nomidan “hisobingiz bloklandi” deb havola yuboriladi.", rec:"Havola rasmiy domen emas (xato yozilgan, .xyz/.top kabi), shoshilishga undaydi.", act:"Bosmang. Ilovani o'zingiz oching yoki rasmiy raqamga qo'ng'iroq qiling." },
    { cat:"call", name:"Bank xavfsizlik xizmati", how:"O'zini bank xodimi deb tanishtirib, “shubhali harakat” bahonasida SMS-kod yoki karta ma'lumotini so'raydi.", rec:"Bank hech qachon parol, PIN yoki SMS-kod so'ramaydi.", act:"Darhol go'shakni qo'ying va bankka rasmiy raqam orqali o'zingiz qo'ng'iroq qiling." },
    { cat:"prize",name:"“Yutuq” va lotereya", how:"“Avtomobil/pul yutdingiz, soliq yoki yetkazish uchun avans to'lang” deyishadi.", rec:"Hech qachon ishtirok etmagan o'yiningiz; oldindan to'lov talab qilinadi.", act:"To'lov qilmang. Haqiqiy yutuq oldindan pul so'ramaydi." },
    { cat:"fish", name:"Soxta yetkazib berish (pochta)", how:"“Posilkangiz kutmoqda, bojni to'lang” SMS havolasi karta sahifasiga olib boradi.", rec:"Kutilmagan posilka; havola g'alati domen; karta ma'lumoti so'raladi.", act:"Havolani ochmang. Pochta xizmatini rasmiy sayt/ilovadan tekshiring." },
    { cat:"social",name:"Telegram akkaunt o'g'irlash", how:"“Ovoz bering” yoki “sovg'a” havolasi orqali Telegram login-kodi so'raladi.", rec:"Do'st nomidan kelgan kutilmagan havola; kod kiritish talab qilinadi.", act:"Kodingizni hech kimga bermang. Telegramda 2 bosqichli parol yoqing." },
    { cat:"invest",name:"Soxta investitsiya", how:"“Kuniga 10–20% foyda” va'da qilinadi; avval kichik to'lov qaytariladi, keyin pul yig'iladi.", rec:"Real bo'lmagan yuqori foiz; “tezroq kiring” bosimi; litsenziya yo'q.", act:"Pul kiritmang. Faqat litsenziyali, rasmiy moliya tashkilotlariga ishoning." },
    { cat:"social",name:"OLX/Telegram oldindan to'lov", how:"“Mahsulotni jo'natdim, avval to'lang” yoki soxta “xavfsiz to'lov” havolasi.", rec:"Yuzma-yuz ko'rishdan qochish; oldindan to'lov; soxta to'lov sayti.", act:"Faqat mahsulotni ko'rib, qo'lma-qo'l yoki ishonchli tizim orqali to'lang." },
    { cat:"call", name:"“Operator bonusi” aldovi", how:"Beeline/Ucell/Uzmobile nomidan “bonus/internet sovg'asi” uchun kod so'raladi.", rec:"Kod yoki shaxsiy ma'lumot so'rashadi; rasmiy bo'lmagan raqam.", act:"Kodni aytmang. Bonusni operatorning rasmiy ilovasidan tekshiring." },
    { cat:"fish", name:"Soxta davlat xizmati sayti", how:"“Nafaqa/subsidiya rasmiylashtirish” bahonasida soxta sayt karta so'raydi.", rec:"Domen rasmiy *.gov.uz emas; shoshiltiradi; to'lov talab qiladi.", act:"Faqat rasmiy davlat portallaridan foydalaning, havolani tekshiring." },
    { cat:"social",name:"Romantik aldov (Telegram/IG)", how:"Tanishib, ishonch qozonib, keyin “favqulodda holat” bahonasida pul so'raydi.", rec:"Tez yaqinlashish; uchrashuvdan qochish; pul so'rovi.", act:"Notanish odamga pul o'tkazmang; yaqinlaringiz bilan maslahatlashing." }
  ];

  const QUIZ = [
    { from:"+998 90 *** ** 11", msg:"“CLICK: Hisobingiz vaqtincha bloklandi. Tiklash: clik-uz.xyz/login”", scam:true,
      explain:"Bu <b>firibgarlik</b>. Domen rasmiy click.uz emas (xato yozilgan + .xyz). Rasmiy xizmatlar SMS’da bunday havola yubormaydi." },
    { from:"PAYME", msg:"“To'lov muvaffaqiyatli amalga oshirildi. Cheqni ilovadan ko'ring.”", scam:false,
      explain:"Bu <b>odatiy xabar</b> — havola yo'q, ma'lumot so'ralmaydi. Baribir cheklarni faqat rasmiy ilovadan tekshiring." },
    { from:"Notanish raqam", msg:"“Tabriklaymiz! Siz Malibu avtomobilini yutdingiz. Soliq uchun 1 200 000 so'm o'tkazing.”", scam:true,
      explain:"Bu <b>firibgarlik</b>. Hech qanday yutuq oldindan to'lov so'ramaydi; siz o'yinda qatnashmagansiz." },
    { from:"Do'stingiz (Telegram)", msg:"“Salom! Bolam tanlovda qatnashyapti, ovoz ber: tg-vote.top/win — login kodingni kirit.”", scam:true,
      explain:"Bu <b>firibgarlik</b>. Telegram login-kodi so'ralyapti — bu akkaunt o'g'irlash. Do'stingiz akkaunti buzilgan bo'lishi mumkin." },
    { from:"Bank ilovasi (push)", msg:"“Kartangizdan 250 000 so'm yechildi. Bu siz emasmisiz? Ilovadagi “Bloklash” tugmasini bosing.”", scam:false,
      explain:"Bu <b>haqiqiy bildirishnoma</b> — amal ilovaning o'zida bajariladi, hech qaerga havola yoki kod yuborilmaydi." },
    { from:"+998 71 *** ** 00", msg:"“Bank xavfsizlik xizmati. Hisobingizni saqlash uchun SMS-kodni ayting.”", scam:true,
      explain:"Bu <b>firibgarlik</b>. Bank hech qachon SMS-kod so'ramaydi. Go'shakni qo'ying va o'zingiz bankka qo'ng'iroq qiling." },
    { from:"Investitsiya kanali", msg:"“Kuniga kafolatlangan 18% foyda! Joy cheklangan, hozir kiring.”", scam:true,
      explain:"Bu <b>firibgarlik</b>. “Kafolatlangan yuqori foyda” va shoshiltirish — klassik investitsiya aldovi belgilari." }
  ];

  const HELP = [
    { t:"Firibgarlikka pul o'tkazib yubordingizmi?", body:`<ol>
        <li><b>Darhol bankka qo'ng'iroq qiling</b> va kartani bloklang — ba'zan to'lovni qaytarish mumkin.</li>
        <li>Tranzaksiya cheki, raqam va havolani <b>skrinshot</b> qilib saqlang.</li>
        <li>Eng yaqin <b>IIB (politsiya)</b> bo'limiga ariza bilan murojaat qiling.</li>
        <li>Hodisani KiberOgoh’dagi mahalla lentasida belgilang — boshqalarni ogohlantirasiz.</li>
      </ol>` },
    { t:"Kuchli parol qanday yaratiladi?", body:`<ul>
        <li>Kamida <b>12 ta belgi</b>: katta-kichik harf, raqam va maxsus belgi aralash.</li>
        <li>Ism, tug'ilgan sana yoki “12345” kabi oson parollardan voz keching.</li>
        <li>Har bir ilova uchun <b>alohida parol</b> — bittasi buzilsa, qolgani himoyada qoladi.</li>
        <li>Parol menejeridan foydalanish eslab qolishni osonlashtiradi.</li>
      </ul>` },
    { t:"Ikki bosqichli himoya (2FA) nima?", body:`<p>2FA — parolga qo'shimcha ikkinchi tasdiq (SMS-kod yoki ilova kodi). Parolingiz o'g'irlansa ham, akkauntga kira olmaydilar.</p>
      <ul><li>Telegram, Gmail, Instagram va bank ilovalarida <b>yoqib qo'ying</b>.</li>
      <li>Telegramda “Ikki bosqichli parol”ni alohida o'rnating.</li></ul>` },
    { t:"Telefoningiz xavfsizligini qanday oshirish mumkin?", body:`<ul>
        <li>Ilovalarni faqat <b>rasmiy do'kondan</b> (Play Market / App Store) o'rnating.</li>
        <li>Notanish APK fayllar va “mod” ilovalardan saqlaning.</li>
        <li>Tizim va ilovalarni muntazam <b>yangilab turing</b>.</li>
        <li>Ekran qulfini (PIN/biometrika) doim yoqib qo'ying.</li>
      </ul>` },
    { t:"Bolalar va yoshlarni qanday himoya qilish kerak?", body:`<ul>
        <li>O'yinda notanish odam <b>parol yoki kod</b> so'rasa — hech qachon bermaslikni o'rgating.</li>
        <li>“Bepul olmos/skin” havolalari ko'pincha akkaunt o'g'irlash ekanini tushuntiring.</li>
        <li>Shaxsiy rasm va ma'lumotni notanishlarga yubormaslik qoidasi.</li>
        <li>Shubhali holatni <b>kattaga aytish</b> — uyaladigan narsa emas.</li>
      </ul>` }
  ];

  /* ---- AI tahlil (anonim, umumlashtirilgan) ---- */
  const AI_SUMMARY = { analyzed:"8 420", topThreat:"soxta Click/Payme SMS havolalari", topDelta:9, weakGroup:"60+ yosh", weakArea:"bank kartasi aldovlari", hotRegions:5 };
  const AI_TOPICS = [
    { t:"Soxta “Click/Payme” SMS havolalari", pct:34, delta:9 },
    { t:"Telegram akkaunt o'g'irlash", pct:22, delta:4 },
    { t:"Bank kartasi / kod aldovi", pct:18, delta:-3 },
    { t:"“Pul yutdingiz” firibgarligi", pct:14, delta:6 },
    { t:"Ijtimoiy tarmoq qalbaki profillari", pct:12, delta:2 }
  ];
  const AI_REGIONS = [
    { r:"Toshkent viloyati", threat:"Fishing havolalar", delta:28, lvl:"yuqori" },
    { r:"Samarqand", threat:"Telefon orqali aldov", delta:41, lvl:"yuqori" },
    { r:"Farg'ona", threat:"Soxta ish e'lonlari", delta:19, lvl:"orta" },
    { r:"Andijon", threat:"Telegram akkaunt o'g'irlash", delta:15, lvl:"orta" },
    { r:"Buxoro", threat:"“Pul yutdingiz” SMS", delta:12, lvl:"past" }
  ];
  const AI_AGES = [
    { age:"14–18", weak:"Qalbaki profil va shaxsiy ma'lumot", score:64 },
    { age:"19–30", weak:"Fishing havolalar", score:72 },
    { age:"31–45", weak:"Bank kartasi aldovi", score:58 },
    { age:"46–60", weak:"Soxta SMS havolalar", score:46 },
    { age:"60+", weak:"Telefon aldovi va bank kodi", score:38 }
  ];
  const AI_RECS = [
    { ico:ICON.grad, cls:"i-gold", t:"60+ yosh uchun maxsus material", p:"Bank kartasi va telefon aldovi bo'yicha sodda, yirik shriftli video tayyorlang — bu toifa eng kam himoyalangan (38%)." },
    { ico:ICON.building, cls:"i-teal", t:"Samarqandda profilaktika seminari", p:"Telefon orqali aldov 41% oshgan — mahalla markazlarida yuzma-yuz uchrashuv rejalashtiring." },
    { ico:ICON.sms, cls:"i-red", t:"“Soxta Click SMS” kampaniyasi", p:"Eng ko'p so'ralgan mavzu (34%, ↑9). Yangi Reels va Kibersinov savollarini qo'shing." },
    { ico:ICON.social, cls:"i-purple", t:"Yoshlar uchun qalbaki profil darsi", p:"14–18 yoshlilar shaxsiy ma'lumot himoyasini sust biladi (64%)." }
  ];


  const PROBLEM = [
    { ico:ICON.eye,   cls:"i-red",   t:"Tanimaslik", p:"Ko'pchilik soxta SMS, fishing havola va “sovg'a yutdingiz” aldovlarini ajrata olmaydi." },
    { ico:ICON.map,   cls:"i-gold",  t:"Tarqoqlik", p:"Ogohlantirishlar turli idora va tarmoqlarga bo'linib ketgan — yagona ishonchli manba yo'q." },
    { ico:ICON.users, cls:"i-purple",t:"Yolg'izlik", p:"Aldangan fuqaro nima qilishni bilmaydi va ko'pincha uyalib hech kimga aytmaydi." },
    { ico:ICON.spark, cls:"i-blue",  t:"Yetib bormaslik", p:"Kiber savodxonlikni mahalla darajasiga yetkazadigan tizimli mexanizm yo'q." }
  ];

  const MODULES = [
    { ico:ICON.alert, cls:"i-red",   t:"Tahdidlar lentasi", p:"Real vaqtdagi ogohlantirishlar", view:"feed" },
    { ico:ICON.map,   cls:"i-gold",  t:"Ro'yxatdan o'tish", p:"Mahalla qamrovi", view:"reg" },
    { ico:ICON.link,  cls:"i-teal",  t:"Tekshirgich", p:"Havola va raqamni tekshirish", view:"check" },
    { ico:ICON.spark, cls:"i-purple",t:"Kibersinov", p:"Firibgarni tanish o'yini", view:"quiz" },
    { ico:ICON.shieldCheck, cls:"i-blue", t:"Firibgarliklar bazasi", p:"O'zbekistonga xos sxemalar", view:"base" },
    { ico:ICON.check, cls:"i-teal",  t:"Yordam", p:"Qadama-qadam yo'riqnoma", view:"help" },
    { ico:ICON.spark,cls:"i-purple",t:"AI tahlil", p:"Anonim tendentsiya tahlili", view:"ai" },
    { ico:ICON.users, cls:"i-gold",  t:"Boshqaruv paneli", p:"Hududiy statistika", view:"dash" }
  ];

  const PYRAMID = [
    { c:"pyr-1", lvl:"Markaz", desc:"1 jamoa · respublika uchun" },
    { c:"pyr-2", lvl:"Viloyat", desc:"2–3 mutaxassis · 200 mahalla nazorati" },
    { c:"pyr-3", lvl:"Tuman", desc:"12–15 koordinator · moderatsiya" },
    { c:"pyr-4", lvl:"Mahalla", desc:"300–400 “Kiber faol” ko'ngilli" }
  ];

  const ROAD = [
    { n:1, when:"1–3 oy", t:"Pilot", p:"Bitta tuman (10–15 mahalla). Yadro, kontent va ko'ngillilarni o'qitish." },
    { n:2, when:"4–8 oy", t:"Viloyat", p:"Bir viloyat bo'ylab kengaytirish; moderatsiya tarmog'ini sinash." },
    { n:3, when:"9–14 oy", t:"Mintaqalar", p:"Bir nechta viloyat; tahdidlar bazasini va avtomatikani kuchaytirish." },
    { n:4, when:"15–24 oy", t:"Milliy qamrov", p:"Butun respublika; davlat tizimlari bilan integratsiya." }
  ];

  const METRICS = [
    { big:"200+", y2:"2-yil: 2 000+", lab:"Qamrab olingan mahallalar" },
    { big:"100 ming+", y2:"2-yil: 1 mln+", lab:"Ro'yxatdan o'tgan fuqarolar" },
    { big:"300+", y2:"2-yil: 3 000+", lab:"O'qitilgan ko'ngillilar" },
    { big:"5 000+", y2:"2-yil: 30 000+", lab:"Qora ro'yxatdagi raqamlar" }
  ];

  // Platforma hozircha Toshkent viloyatida ishlaydi
  const REGIONS = {
    "Toshkent viloyati": ["Nurafshon shahri","Angren shahri","Bekobod shahri","Olmaliq shahri","Ohangaron shahri","Chirchiq shahri","Yangiyo'l shahri","Bekobod tumani","Bo'ka tumani","Bo'stonliq tumani","Qibray tumani","Quyi Chirchiq tumani","Oqqo'rg'on tumani","Ohangaron tumani","Parkent tumani","Piskent tumani","Toshkent tumani","Zangiota tumani","O'rta Chirchiq tumani","Chinoz tumani","Yuqori Chirchiq tumani","Yangiyo'l tumani"]
  };
  const MFY_POOL = ["Bunyodkor MFY","Navbahor MFY","Do'stlik MFY","Yangiobod MFY","Guliston MFY","Birlik MFY","Istiqlol MFY","Obod MFY","Mustaqillik MFY","Bog'bon MFY"];

  /* ---- xonadonlar reytingi ---- */
  const HOUSEHOLDS = [
    { hh:"Tolipovlar", who:"Bobur", pts:2140, lvl:"qahramon", delta:1 },
    { hh:"Karimovlar", who:"Jasur", pts:1820, lvl:"qahramon", delta:1 },
    { hh:"To'xtayevlar", who:"Dilshod", pts:1640, lvl:"kiber", delta:1 },
    { hh:"Rahimovlar", who:"Madina", pts:1510, lvl:"kiber", delta:-2 },
    { hh:"Abdullayevlar", who:"Alisher", pts:1240, lvl:"kiber", delta:2, you:true },
    { hh:"Yusupovlar", who:"Sevara", pts:1180, lvl:"himoyachi", delta:1 },
    { hh:"Ergashevlar", who:"Bekzod", pts:1050, lvl:"himoyachi", delta:0 },
    { hh:"Sodiqovlar", who:"Nilufar", pts:920, lvl:"himoyachi", delta:-2 },
    { hh:"Olimovlar", who:"Sardor", pts:760, lvl:"himoyachi", delta:1 },
    { hh:"Qodirovlar", who:"Gulnoza", pts:610, lvl:"himoyachi", delta:3 }
  ];
  const LEVELS = [
    { key:"boshlovchi", name:"Boshlovchi", min:0, dot:"var(--blue)" },
    { key:"himoyachi", name:"Himoyachi", min:600, dot:"var(--teal)" },
    { key:"kiber", name:"KiberHimoyachi", min:1200, dot:"var(--gold)" },
    { key:"qahramon", name:"Mahalla qahramoni", min:1700, dot:"var(--purple)" }
  ];
  const levelName = k => (LEVELS.find(l => l.key === k) || {}).name || k;
  const EARN = [
    { ico:ICON.spark, cls:"i-purple", a:"Kibersinovni yakunlash", p:50 },
    { ico:ICON.alert, cls:"i-red", a:"Firibgarlikni xabar qilish (tasdiqlangan)", p:40 },
    { ico:ICON.users, cls:"i-blue", a:"Qo'shnini ogohlantirish", p:25 },
    { ico:ICON.check, cls:"i-teal", a:"Yo'riqnomani o'qish", p:15 },
    { ico:ICON.link, cls:"i-gold", a:"Havola yoki raqamni tekshirish", p:10 },
    { ico:ICON.shieldCheck, cls:"i-teal", a:"Kunlik kirish (streak)", p:5 },
    { ico:ICON.invite, cls:"i-gold", a:"Yangi xonadonni taklif qilish", p:100 }
  ];
  const ENGAGE = [
    { ico:ICON.medal, cls:"i-gold", t:"Xonadon reytingi", p:"Har xonadon KiberHimoyachisi ball yig'adi — mahalla bo'ylab sog'lom raqobat." },
    { ico:ICON.target, cls:"i-purple", t:"Haftalik vazifa", p:"Har hafta yangi amaliy challenge: “3 qo'shningizni ogohlantiring” kabi." },
    { ico:ICON.flag, cls:"i-teal", t:"Mahalla maqsadi", p:"Xonadonlarning 80%i qo'shilsa, mahalla “Himoyalangan” maqomini oladi." },
    { ico:ICON.shieldCheck, cls:"i-blue", t:"Kunlik maslahat va streak", p:"Har kuni 1 ta foydali maslahat; ketma-ket kirish qo'shimcha ball beradi." },
    { ico:ICON.cert, cls:"i-gold", t:"Oylik eng faol KiberHimoyachi", p:"Har oy eng faol himoyachi davlat nomidan sertifikat va e'tirof oladi." },
    { ico:ICON.invite, cls:"i-purple", t:"Qo'shnini taklif qilish", p:"Yangi xonadonni taklif qilsangiz, ikkalangiz ham ball olasiz." },
    { ico:ICON.gift, cls:"i-red", t:"Raqamli nishonlar", p:"Har daraja uchun raqamli nishon va bosib chiqariladigan sertifikat." },
    { ico:ICON.eye, cls:"i-blue", t:"Oilaviy himoya rejimi", p:"Keksa ota-onangiz uchun soddalashtirilgan rejim va eslatmalar." }
  ];
  const WEEKLY = { title:"Bu haftaning vazifasi", sub:"Yopiladi: 3 kundan keyin", task:"3 ta qo'shningizni soxta “Click bloklandi” SMS haqida ogohlantiring.", done:2, total:3, reward:"+75 ball" };
  const MGOAL = { title:"Mahalla maqsadi", sub:"“Himoyalangan mahalla” maqomi", current:96, total:142 };

  /* ---- so'nggi videolar ---- */
  // src: mahalliy video fayl yo'li (masalan "videos/video1.mp4") — bo'lsa, real pleyer ishlaydi.
  // src bo'sh qolsa, oldingidek rangli simulyatsiya ko'rsatiladi. poster — video ustidagi rasm (ixtiyoriy).
  const VIDEOS = [
    { id:1, cat:"Tahdid", c1:"#E25555", c2:"#7d1f1f", ico:ICON.sms, title:"Soxta “Click bloklandi” SMS'ni 10 soniyada tanish", dur:"0:45", views:"12.4K", likes:"1.2K", author:"KiberOgoh UZ", src:"./videos/video_1.mp4", poster:"",
      cap:"Rasmiy SMS hech qachon havola yubormaydi. Domenni tekshiring: click.uz to'g'ri, clik-uz.xyz soxta. Shubha bo'lsa — ilovani o'zingiz oching." },
    { id:2, cat:"Himoya", c1:"#3A86D8", c2:"#163f73", ico:ICON.shieldCheck, title:"Telegram akkauntni o'g'irlatmang: ikki bosqichli parol", dur:"1:02", views:"9.8K", likes:"940", author:"KiberOgoh UZ", src:"./videos/video_2.mp4", poster:"",
      cap:"Sozlamalar → Maxfiylik → Ikki bosqichli tasdiqlash. Parolingiz o'g'irlansa ham, akkauntga begona kira olmaydi." },
    { id:3, cat:"Aldov", c1:"#F0A92E", c2:"#9a6207", ico:ICON.phone, title:"Bank kodi aldovi: nega hech qachon kod aytmaslik kerak", dur:"0:38", views:"15.1K", likes:"1.6K", author:"KiberOgoh UZ", src:"./videos/video_3.mp4", poster:"",
      cap:"Bank xodimi hech qachon SMS-kod, parol yoki PIN so'ramaydi. Kim so'rasa — firibgar. Darhol go'shakni qo'ying." }
  ];

  const fmtN = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const avPalette = ["var(--purple)","var(--blue)","var(--teal)","var(--red)","var(--gold)","var(--navy-3)"];

  // namoyish uchun QR-ko'rinishidagi SVG (haqiqiy skaner emas, demo)
  function fakeQR(seed, n) {
    n = n || 25;
    let s = 0; for (const ch of String(seed)) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
    const rand = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
    const cell = 8, quiet = 2, dim = (n + quiet * 2) * cell;
    const finder = (r, c, br, bc) => { const rr = r - br, cc = c - bc; const edge = rr === 0 || rr === 6 || cc === 0 || cc === 6; const core = rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4; return edge || core; };
    const inBox = (r, c, br, bc) => r >= br && r < br + 7 && c >= bc && c < bc + 7;
    let rects = "";
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      let on;
      if (inBox(r, c, 0, 0)) on = finder(r, c, 0, 0);
      else if (inBox(r, c, 0, n - 7)) on = finder(r, c, 0, n - 7);
      else if (inBox(r, c, n - 7, 0)) on = finder(r, c, n - 7, 0);
      else if ((r === 7 && c < 8) || (c === 7 && r < 8) || (r === 7 && c >= n - 8) || (c === n - 8 && r < 8) || (r === n - 8 && c < 8)) on = false; // separators
      else on = rand() > 0.52;
      if (on) rects += `<rect x="${(c + quiet) * cell}" y="${(r + quiet) * cell}" width="${cell}" height="${cell}"/>`;
    }
    return `<svg viewBox="0 0 ${dim} ${dim}" xmlns="http://www.w3.org/2000/svg" class="qr"><rect width="${dim}" height="${dim}" fill="#fff"/><g fill="#10162e">${rects}</g></svg>`;
  }

  // onlayn testdan o'tib, ruxsatnomasi tayyor bo'lgan fuqarolar (faqat yetakchiga ko'rinadi)
  const PERMITS = [
    { rep:"Alisher", hh:"Abdullayevlar", full:"Alisher Abdullayev", code:"RX-2026-0142", date:"27.06.2026", isNew:true },
    { rep:"Madina", hh:"Rahimovlar", full:"Madina Rahimova", code:"RX-2026-0138", date:"25.06.2026", isNew:true },
    { rep:"Bekzod", hh:"Ergashevlar", full:"Bekzod Ergashev", code:"RX-2026-0131", date:"21.06.2026", isNew:false }
  ];

  /* ---- imtiyozlar ---- */
  const SPOTLIGHT = { hh:"Tolipovlar", rep:"Bobur", repFull:"Bobur Tolipov", month:"Iyun oyi", issuer:"Ichki Ishlar Boshqarmasi", benefit:"Temurbek litseyiga grant asosida qabul" };
  const PRIVILEGES = [
    { ico:ICON.cert, cls:"i-gold", t:"IIB rasmiy guvohnomasi", p:"Eng faol KiberHimoyachilar Ichki Ishlar Boshqarmasi tomonidan rasmiy sertifikat bilan taqdirlanadi." },
    { ico:ICON.medal, cls:"i-purple", t:"Litsey va universitetga grant", p:"Yillik yetakchilar nufuzli litsey yoki universitetlarga grant asosida o'qishga tavsiya etiladi." },
    { ico:ICON.coin, cls:"i-teal", t:"Hokimiyat pul mukofoti", p:"Tuman va shahar hokimligi tomonidan yetakchi xonadonlarga rag'bat puli va e'tirof beriladi." },
    { ico:ICON.shieldCheck, cls:"i-blue", t:"“Eng xavfsiz mahalla” maqomi", p:"Eng faol mahalla rasmiy maqom va bayroq oladi — butun jamoa uchun g'urur." },
    { ico:ICON.spark, cls:"i-gold", t:"IT Park va bepul kurslar", p:"Yosh himoyachilar IT Park dasturlari va bepul kiberxavfsizlik kurslariga yo'llanma oladi." },
    { ico:ICON.gift, cls:"i-red", t:"Hamkor chegirma va sovg'alari", p:"Hamkor do'kon, banklar va internet-provayderlardan maxsus chegirma va sovg'alar." }
  ];
  const RECIPIENTS = [
    { hh:"Tolipovlar", rep:"Bobur", award:"IIB guvohnomasi + Temurbek litseyiga grant", date:"Iyun 2026", issuer:"Ichki Ishlar Boshqarmasi", featured:true },
    { hh:"Karimovlar", rep:"Jasur", award:"Hokimiyat pul mukofoti va sertifikat", date:"May 2026", issuer:"Tuman hokimligi" },
    { hh:"Sodiqovlar", rep:"Nilufar", award:"IT Park kursiga bepul yo'llanma", date:"Aprel 2026", issuer:"IT Park" }
  ];
  function certHtml(name, desc, big) {
    return `<div class="cert ${big ? 'cert--lg' : ''}">
      <div class="cert__seal">${ICON.shieldCheck}</div>
      <div class="cert__kicker">GUVOHNOMA</div>
      <div class="cert__name">${name}</div>
      <div class="cert__desc">${desc}</div>
      <div class="cert__sign"><span>Ichki Ishlar<br>Boshqarmasi</span><span class="cert__year">2026</span></div>
    </div>`;
  }
  const SEAL = `<div class="seal"><span class="seal__ring"></span><span class="seal__core">${ICON.shieldCheck}</span></div>`;

  /* ---- imtiyoz sharti (verification) ---- */
  const CANDIDATE = { rep:"Alisher", hh:"Abdullayevlar", pts:1240 };
  const CONDITIONS = [
    { id:"self", icon:ICON.shieldCheck, title:"Shaxsiy bilim sinovi", who:"Nomzodning o'zi",
      req:"Nomzod kiberxavfsizlik asoslarini biladimi — komissiya og'zaki savol-javob orqali tekshiradi. Bu ball haqiqiy bilim ekanini tasdiqlaydi.",
      asker:"Komissiya nomzoddan so'raydi:",
      meta:{ ico:ICON.spark, t:"To'plangan ball: 1 240" },
      q:["Soxta SMS havolasini qanday tanaysiz?","Bank xodimi qo'ng'iroqda SMS-kod so'rasa, nima qilasiz?","Kuchli parol qanday bo'lishi kerak?"] },
    { id:"parent", icon:ICON.users, title:"Ota-onani jalb qilish", who:"Nomzodning ota-onasi",
      req:"Nomzod kamida bitta ota-onasini platformaga ro'yxatdan o'tkazgan bo'lishi shart. So'ng ota-onadan og'zaki savol-javob olinadi — ular haqiqatan foydalanayotganini tekshirish uchun.",
      asker:"Komissiya ota-onadan so'raydi:",
      meta:{ ico:ICON.users, t:"Ro'yxatdan o'tgan ota-ona: 1 ✓" },
      q:["Farzandingiz sizga qaysi kiber xavf haqida gapirdi?","Ilovada tahdidlar lentasini ochib ko'rsata olasizmi?","“Yutdingiz” degan SMS kelsa nima qilasiz?"] },
    { id:"neighbor", icon:ICON.social, title:"Qo'shnilarni targ'ib qilish", who:"Tasodifiy qo'shni",
      req:"Nomzod platformani kamida 3 ta qo'shni xonadonga tanishtirgan bo'lishi shart. Komissiya tasodifiy qo'shnini tanlab, undan og'zaki savol-javob oladi.",
      asker:"Komissiya qo'shnidan so'raydi:",
      meta:{ ico:ICON.social, t:"Jalb qilingan qo'shni xonadonlar: 3 / 3" },
      q:["Bu platforma haqida sizga kim aytdi?","Bitta foydali kiber maslahatni eslay olasizmi?","O'zingiz ro'yxatdan o'tdingizmi?"] },
    { id:"offline", icon:ICON.exam, title:"Offlayn bilim testi", who:"Mahalla markazi · komissiya", type:"test",
      req:"Nomzod shu paytgacha platformada o'rgangan bilimlarini sinash uchun offlayn (yuzma-yuz) testdan o'tadi. Test mahalla kesimida — mahalla markazida, barcha nomzodlar uchun bir vaqtda o'tkaziladi.",
      test:{ joy:"Mahalla markazi (offlayn)", vaqt:"Shanba, soat 10:00", format:"20 ta yopiq savol · 30 daqiqa", otish:"O'tish bali: kamida 70%",
        mavzular:["Firibgarlik turlari","Fishing havolalar","Parol xavfsizligi","Bank/karta aldovlari","Ijtimoiy tarmoq xavfsizligi"] },
      asker:"Namunaviy test savollari:",
      meta:{ ico:ICON.users, t:"Mahalladan ro'yxatga olingan nomzodlar: 12" },
      q:["“Kartangiz bloklandi” SMS'idagi havolani bossangiz nima bo'ladi?","Berilgan 4 havoladan qaysi biri soxta (rasmiy emas)?","Ikki bosqichli himoya (2FA) qanday vazifani bajaradi?"] },
    { id:"commission", icon:ICON.cert, title:"Komissiya yakuniy tasdig'i", who:"IIB komissiyasi",
      req:"Barcha bosqichlar — savol-javoblar va offlayn test muvaffaqiyatli o'tilsa, Ichki Ishlar Boshqarmasi komissiyasi sertifikat va sovg'ani rasmiy tasdiqlaydi.",
      asker:"", meta:null, q:[] }
  ];
  const GRACE_DAYS = 14;

  /* ---- RBAC: rollar, mahallalar, ruxsatlar ---- */
  const ROLE_META = {
    superadmin: { name:"Superadmin", scope:"Butun platforma" },
    tuman:      { name:"Tuman mas'uli", scope:"Nurafshon shahri" },
    raisi:      { name:"Yoshlar yetakchisi", scope:"Navro'z MFY" },
    user:       { name:"User", scope:"Faqat o'zingiz" }
  };
  const MY_TUMAN = "Nurafshon shahri";
  /* ---- Autentifikatsiya (demo) ---- */
  const AUTH = { login: "admin", pass: "1234" };            // imtiyozli rollar uchun
  const LOCKED_ROLES = ["superadmin", "tuman", "raisi"];    // login talab qilinadi
  const unlockedRoles = {};                                  // sessiya davomida eslab qolinadi
  function loadUser() { try { return JSON.parse(localStorage.getItem("ko_user") || "null"); } catch (e) { return null; } }
  function saveUser(u) { try { localStorage.setItem("ko_user", JSON.stringify(u)); } catch (e) {} }
  let KO_USER = loadUser();                                  // user: bir marta ro'yxat — ID saqlanadi, logout yo'q
  const MY_MAHALLA = "Navro'z MFY";
  const MAHALLALAR = [
    { name:"Navro'z MFY", region:"Toshkent vil. · Nurafshon sh.", raisi:"Akmal Yusupov", users:142, active:96, avg:1180, own:true },
    { name:"Do'stlik MFY", region:"Toshkent vil. · Qibray", raisi:"Sevara Olimova", users:165, active:110, avg:1340 },
    { name:"Bunyodkor MFY", region:"Toshkent vil. · Chirchiq sh.", raisi:"Dilshod Karimov", users:128, active:74, avg:1020 },
    { name:"Guliston MFY", region:"Toshkent vil. · Yangiyo'l", raisi:"Nilufar Sodiqova", users:113, active:81, avg:1090 },
    { name:"Birlik MFY", region:"Toshkent vil. · Parkent", raisi:"Sardor To'xtayev", users:134, active:69, avg:960 },
    { name:"Istiqlol MFY", region:"Toshkent vil. · Bekobod", raisi:"Bekzod Rahimov", users:98, active:52, avg:880 },
    { name:"Obod MFY", region:"Toshkent vil. · Bo'ka", raisi:"Gulnoza Nazarova", users:87, active:45, avg:790 }
  ];
  const PERM_ROWS = [
    { r:"O'z profili, statistikasi va ballari", s:"y", tm:"y", a:"y", u:"y" },
    { r:"O'z mahallasidagi foydalanuvchilar statistikasi", s:"y", tm:"n", a:"y", u:"n" },
    { r:"Tumandagi barcha mahallalar (KXI)", s:"y", tm:"dist", a:"n", u:"n" },
    { r:"O'z mahallasi KXI statistikasi", s:"y", tm:"dist", a:"own", u:"n" },
    { r:"Boshqa tumanlar / butun platforma", s:"y", tm:"n", a:"n", u:"n" },
    { r:"Barcha mahalla va raislarni boshqarish", s:"y", tm:"n", a:"n", u:"n" },
    { r:"Rol biriktirish (yetakchi tayinlash)", s:"y", tm:"n", a:"n", u:"n" },
    { r:"Imtiyoz shartini tasdiqlash", s:"y", tm:"n", a:"own", u:"n" }
  ];
  // mahalla foydalanuvchilari = HOUSEHOLDS vakillari (Navbahor MFY)
  const vStatusFor = i => i === 0 ? { c:"vb-done", t:"Taqdirlangan" } : i <= 2 ? { c:"vb-nom", t:"Nomzod" } : { c:"vb-act", t:"Faol" };

  /* ---- KiberXavfsizlik Indeksi (KXI) — tuman kesimida ---- */
  const KXI_WEIGHTS = [
    { k:"Platforma faolligi", w:25 },
    { k:"Test natijalari", w:20 },
    { k:"Firibgarlikdan himoya", w:25 },
    { k:"Kiber faol ko'ngillilar", w:15 },
    { k:"Ogohlantirishlarni ko'rish", w:15 }
  ];
  // sub: [faollik, test, firibgarlikdan himoya, ko'ngillilar, ogohlantirish] — har biri 0–100
  // Nurafshon shahri — 16 rasmiy mahalla (aholi, xonadon, oila — real statistika)
  const KXI_MAHALLALAR = [
    { name:"Navro'z MFY",      aholi:4296, xon:1023, oila:1540, sub:[91,88,90,86,89], own:true },
    { name:"Ma'rifat MFY",     aholi:5205, xon:1003, oila:1293, sub:[86,82,85,81,84] },
    { name:"Yangiobod MFY",    aholi:4955, xon:1531, oila:1542, sub:[83,79,82,78,81] },
    { name:"Tuy-tepa MFY",     aholi:5092, xon:865,  oila:1250, sub:[80,76,79,75,78] },
    { name:"Nurafshon MFY",    aholi:3606, xon:1018, oila:1254, sub:[78,74,77,73,76] },
    { name:"Taraqqiyot MFY",   aholi:3844, xon:1192, oila:1232, sub:[76,72,75,71,74] },
    { name:"Dehqonobod MFY",   aholi:3527, xon:646,  oila:1005, sub:[74,70,73,69,72] },
    { name:"Obod turmush MFY", aholi:3911, xon:894,  oila:1169, sub:[71,67,70,66,69] },
    { name:"Xurriyat MFY",     aholi:4405, xon:657,  oila:1275, sub:[68,64,67,63,66] },
    { name:"Muqumiy MFY",      aholi:2991, xon:641,  oila:741,  sub:[65,61,64,60,63] },
    { name:"Degantepa MFY",    aholi:2523, xon:505,  oila:598,  sub:[62,58,61,57,60] },
    { name:"Oybek MFY",        aholi:3086, xon:543,  oila:650,  sub:[59,55,58,54,57] },
    { name:"Qumariq MFY",      aholi:3260, xon:564,  oila:647,  sub:[54,50,53,49,52] },
    { name:"Birlik MFY",       aholi:2881, xon:555,  oila:800,  sub:[51,47,50,46,49] },
    { name:"Obod MFY",         aholi:2478, xon:677,  oila:823,  sub:[48,44,47,43,46] },
    { name:"Oppoq MFY",        aholi:2472, xon:374,  oila:576,  sub:[45,41,44,40,43] }
  ];
  const kxiScore = m => Math.round(m.sub.reduce((s, v, i) => s + v * KXI_WEIGHTS[i].w / 100, 0));
  function kxiLevel(score) {
    if (score >= 81) return { key:"green", label:"Xavfsiz", dot:"🟢", cls:"kxi-green" };
    if (score >= 51) return { key:"yellow", label:"Ogohlantirish", dot:"🟡", cls:"kxi-yellow" };
    return { key:"red", label:"Yuqori xavf", dot:"🔴", cls:"kxi-red" };
  }
  const KXI_REC = {
    green: "Mahalla holati barqaror. Faollikni shu darajada saqlang va tajribani boshqa mahallalarga ulashing.",
    yellow: "Kiber faollik pasaygan. Aholini testlarga jalb qiling, ko'ngillilarni faollashtiring va qo'shimcha ogohlantirishlar yuboring.",
    red: "Yuqori xavf — zudlik bilan chora ko'ring: mahallada targ'ibot o'tkazing, jonli seminar tashkil qiling va qo'shimcha ogohlantirish yuboring."
  };

  /* ---- Platforma kartasi: Toshkent viloyati → tuman/shahar → mahalla ---- */
  const TV_VIEW = {w:992,h:1057};
  const TV_GEO = [
    {n:"Bo'stonliq tumani",cx:637.0,cy:282.6,a:98412,d:"M359.7,434.0L362.9,444.7L375.5,428.4L381.7,432.7L380.4,430.9L384.1,428.1L384.5,425.3L392.1,427.9L395.9,426.4L399.3,428.9L401.0,427.6L403.7,429.6L405.4,428.7L407.7,435.1L405.6,438.4L405.4,443.1L389.1,447.5L386.4,450.0L386.1,453.2L380.9,457.6L384.9,457.7L386.6,455.7L391.6,457.7L392.4,460.6L397.4,458.8L413.0,463.3L419.7,462.4L423.9,465.7L422.4,467.2L427.1,471.5L430.9,471.3L436.6,475.6L444.3,468.8L448.3,467.3L453.3,461.0L457.6,459.3L457.4,456.3L460.1,454.2L466.3,440.3L470.4,437.8L476.4,427.1L480.8,423.5L499.2,415.7L506.4,410.0L523.7,410.0L526.8,406.6L531.8,405.8L535.9,408.6L535.0,413.0L536.8,418.8L535.5,425.0L538.5,427.6L536.0,430.8L534.8,437.3L537.4,440.9L536.6,443.6L538.5,449.5L536.1,454.7L525.4,458.8L514.2,471.8L511.0,472.5L502.5,486.7L499.3,501.4L499.4,508.5L500.2,514.2L503.1,517.7L511.7,511.8L519.9,511.0L525.3,513.3L529.3,511.5L533.8,512.9L536.1,512.0L548.1,521.4L560.1,524.9L564.8,528.5L577.9,525.3L583.2,529.8L588.9,530.7L595.6,536.8L599.0,537.1L606.8,533.7L616.8,536.6L630.9,527.0L637.5,528.2L639.3,525.2L643.0,525.7L648.0,520.8L651.5,522.8L656.1,520.8L657.7,518.7L657.6,504.3L659.8,500.9L659.9,495.7L662.6,493.1L668.2,495.2L682.3,479.2L688.3,475.7L690.2,470.3L689.6,467.2L694.5,461.5L697.5,451.0L694.8,450.7L688.0,445.4L685.8,436.4L677.7,429.9L676.4,426.8L669.0,422.8L664.8,414.9L660.6,414.6L654.9,416.8L648.4,403.8L642.6,403.7L639.0,400.0L634.0,400.0L625.9,390.0L615.9,394.4L612.5,401.1L602.5,404.5L598.3,404.3L591.6,398.1L576.0,392.0L580.5,386.6L582.8,377.9L579.7,371.7L584.3,365.9L590.6,363.9L592.9,357.6L593.3,353.1L590.5,348.5L590.9,344.7L597.6,345.3L602.6,342.1L612.0,346.9L616.9,340.8L622.0,339.9L625.4,335.1L640.3,331.7L649.7,327.1L660.7,308.9L669.3,305.8L675.6,300.8L680.6,299.8L686.9,290.8L698.0,291.3L701.8,282.9L702.5,265.3L709.5,252.2L725.0,246.2L728.6,241.7L736.3,241.6L735.7,234.0L737.8,226.3L747.3,225.0L751.4,217.7L750.7,215.7L753.7,214.7L759.7,204.9L760.8,198.4L769.1,194.2L779.0,191.7L785.2,191.7L788.2,195.0L793.5,195.6L795.2,192.9L795.2,183.8L798.7,184.2L803.8,188.7L807.4,187.4L813.7,191.7L816.9,188.7L824.1,190.4L828.2,182.6L831.2,181.3L831.9,174.4L829.2,163.9L830.5,157.8L825.2,152.4L828.6,143.1L833.2,139.0L831.9,132.5L834.0,131.1L835.4,125.5L840.6,129.4L844.0,126.6L846.0,127.3L848.6,132.0L853.8,131.5L864.1,136.8L877.9,136.0L883.0,137.2L890.7,126.3L888.1,124.0L894.9,122.0L896.5,118.7L900.6,120.7L904.1,112.1L906.7,110.0L911.1,110.1L917.2,105.5L922.8,105.4L924.3,96.3L925.8,94.9L929.3,96.4L934.1,94.5L938.3,85.9L942.6,87.7L951.1,80.9L958.5,81.1L960.1,84.1L964.0,84.9L968.7,83.1L970.2,81.1L967.8,78.5L974.3,76.4L977.8,70.0L982.0,69.0L982.3,66.7L979.1,62.2L986.0,54.9L985.3,50.5L979.1,47.7L977.0,39.4L972.6,38.6L970.4,41.4L966.7,41.9L962.6,40.3L963.6,34.7L960.3,31.5L957.0,32.7L952.2,27.6L942.3,21.6L935.4,12.4L932.1,11.8L931.0,14.6L925.4,16.5L920.0,12.2L914.2,11.8L909.4,6.1L904.0,8.2L900.5,8.3L900.7,6.3L899.0,7.8L896.3,6.7L892.3,13.0L888.9,14.6L887.3,18.0L888.6,20.7L885.9,25.3L881.4,27.0L871.8,25.2L864.5,21.7L857.9,31.9L858.3,34.5L853.5,35.3L852.1,39.9L843.9,43.2L843.1,47.4L835.8,47.3L831.5,49.2L829.6,54.3L822.9,55.5L817.5,51.5L808.8,48.5L800.2,52.7L799.2,56.3L792.8,56.5L788.4,62.1L793.8,65.1L794.5,67.5L792.2,70.1L787.8,70.1L783.5,74.3L783.5,79.0L779.3,81.8L776.5,87.7L772.0,89.2L769.1,92.3L765.9,108.5L761.2,113.8L757.3,121.9L755.8,131.8L750.1,138.9L749.5,142.1L751.2,144.9L745.9,144.7L739.0,148.9L731.7,147.2L727.8,142.2L721.4,140.6L717.4,134.9L721.1,131.0L716.3,115.6L710.4,110.2L704.8,111.1L699.8,103.1L691.1,98.2L684.0,110.2L677.7,106.8L662.3,117.9L652.1,117.9L651.6,120.4L648.6,123.3L645.4,123.8L643.7,127.1L636.7,128.7L635.7,131.9L632.5,133.1L633.4,138.7L636.9,143.3L635.9,153.8L638.5,159.9L637.9,164.8L621.4,170.9L620.3,173.2L615.0,175.6L610.3,174.9L609.4,177.4L597.9,184.7L596.2,187.8L597.6,193.3L593.7,195.5L590.9,200.1L586.1,199.7L586.3,208.2L580.4,210.3L581.7,219.5L578.4,224.0L576.1,223.6L571.7,226.9L570.0,231.7L567.6,233.3L563.4,229.5L556.9,232.9L551.2,233.0L548.1,240.4L541.6,247.2L533.9,249.3L531.9,251.8L532.0,261.5L528.7,263.5L525.8,263.1L525.8,260.9L520.8,258.8L520.9,253.5L517.8,253.1L512.6,248.3L510.1,251.3L512.1,251.7L512.8,257.1L509.3,257.3L505.7,261.0L505.2,265.8L502.6,266.5L503.7,272.1L498.9,273.1L497.3,275.4L497.1,284.3L490.1,288.4L484.8,287.9L484.0,292.9L482.1,294.3L473.5,297.7L468.5,297.7L462.9,295.7L460.2,292.4L452.9,290.9L443.1,297.0L438.1,297.1L428.6,302.8L418.0,300.6L412.6,303.8L415.8,313.7L413.2,316.7L412.3,326.0L391.0,353.3L379.4,357.2L382.3,367.7L374.0,381.0L375.0,388.2L376.9,388.4L379.7,393.4L376.3,394.3L375.0,396.6L375.2,397.8L377.4,396.5L378.5,397.5L376.8,399.5L372.8,402.5L371.7,401.2L368.7,404.8Z"},
    {n:"Ohangaron tumani",cx:511.4,cy:646.4,a:65059,d:"M304.1,587.0L305.5,589.8L311.1,591.8L316.5,593.0L318.9,591.5L329.9,595.5L328.2,599.0L329.9,602.5L339.1,603.0L341.2,605.7L355.5,603.0L367.2,607.5L370.5,606.5L371.2,602.2L383.5,601.4L384.7,597.5L382.0,589.8L381.5,580.5L387.6,579.9L387.6,583.5L389.0,583.3L386.9,589.8L392.8,591.8L395.7,595.7L396.8,594.9L403.4,603.9L410.2,601.5L410.9,603.9L415.0,603.1L421.0,607.8L423.1,607.1L424.0,603.7L432.5,603.8L439.4,601.5L455.7,584.7L464.3,580.4L470.2,567.2L478.6,559.9L483.3,559.7L484.0,556.8L489.8,554.1L491.0,547.9L502.8,535.6L503.1,517.7L511.7,511.8L519.9,511.0L525.3,513.3L529.3,511.5L533.8,512.9L536.1,512.0L548.1,521.4L560.1,524.9L564.8,528.5L577.9,525.3L583.2,529.8L588.9,530.7L595.6,536.8L599.0,537.1L606.8,533.7L616.8,536.6L630.9,527.0L637.5,528.2L639.3,525.2L643.0,525.7L648.0,520.8L651.5,522.8L658.6,518.3L669.5,516.3L673.5,518.2L679.6,518.3L679.2,522.6L672.1,532.2L671.8,545.0L675.2,550.5L675.0,556.9L680.9,564.2L681.2,567.4L676.2,571.9L682.8,581.4L693.2,587.9L706.5,600.0L697.7,604.0L698.2,608.8L689.0,627.6L683.9,629.9L678.8,625.7L672.3,630.2L667.2,631.0L660.4,634.8L658.6,640.7L652.5,646.6L657.8,664.4L657.2,672.2L651.0,676.2L654.3,688.7L651.5,698.7L637.8,706.6L634.5,704.4L625.7,709.1L619.6,710.2L615.2,714.1L612.2,722.4L587.9,736.2L580.4,730.5L573.5,730.3L565.9,735.1L560.4,736.3L557.6,739.7L559.2,743.6L555.3,753.6L549.6,756.4L538.3,769.5L527.5,770.5L524.9,774.6L515.3,779.0L503.2,777.5L499.3,781.0L498.5,784.0L494.6,784.0L487.3,788.6L482.1,786.7L474.0,787.0L471.8,784.2L465.4,789.3L453.7,793.6L451.4,797.0L446.7,795.8L445.5,787.7L437.1,783.5L434.6,774.3L427.2,770.7L424.0,765.6L422.2,765.8L414.0,759.1L407.9,745.3L401.0,735.7L402.4,729.1L399.3,726.0L391.5,726.4L387.3,723.5L388.5,713.7L384.5,704.9L374.4,702.5L355.5,694.3L347.8,694.7L336.4,688.8L331.4,688.0L331.0,682.5L324.8,677.5L317.2,660.4L312.5,656.3L308.6,645.8L304.5,641.4L305.8,633.0L300.9,631.5L296.0,626.2L296.4,623.0L299.7,621.6L294.9,618.8L295.2,616.8L302.7,612.4L296.3,607.2L299.4,602.5L297.4,600.3L299.8,595.3L299.4,590.0Z"},
    {n:"Parkent tumani",cx:433.6,cy:506.9,a:22375,d:"M362.9,444.7L358.2,453.0L352.8,458.4L348.3,467.6L350.8,469.6L356.6,464.3L360.8,463.8L355.9,466.0L349.3,474.2L354.4,479.7L352.6,482.0L355.0,486.9L353.3,489.7L348.9,488.4L347.1,493.0L344.4,494.0L349.9,495.4L337.2,535.1L338.5,537.7L341.9,538.4L342.8,535.2L346.5,536.1L348.0,534.2L353.6,546.4L370.3,542.5L373.2,544.6L372.6,550.4L373.5,552.9L375.8,553.2L369.9,559.9L370.2,567.3L371.4,568.9L381.1,567.2L377.0,572.7L362.6,573.9L360.0,575.7L357.9,582.1L359.3,582.6L357.0,583.9L361.5,588.4L370.0,589.2L380.3,580.6L387.6,579.9L387.6,583.5L389.0,583.3L386.9,589.8L392.8,591.8L395.7,595.7L396.8,594.9L403.4,603.9L410.2,601.5L410.9,603.9L415.0,603.1L421.0,607.8L423.1,607.1L424.0,603.7L432.5,603.8L439.4,601.5L455.7,584.7L464.3,580.4L470.2,567.2L478.6,559.9L483.3,559.7L484.0,556.8L489.8,554.1L491.0,547.9L502.8,535.6L503.6,519.7L500.2,514.2L499.4,508.5L500.7,491.2L511.0,472.5L514.2,471.8L525.4,458.8L536.1,454.7L538.5,449.5L536.6,443.6L537.4,440.9L534.8,437.3L536.0,430.8L538.5,427.6L535.5,425.0L536.8,418.8L535.0,413.0L535.9,408.6L531.8,405.8L526.8,406.6L523.7,410.0L506.4,410.0L499.2,415.7L480.8,423.5L476.4,427.1L470.4,437.8L466.3,440.3L460.1,454.2L457.4,456.3L457.6,459.3L453.3,461.0L448.3,467.3L444.3,468.8L436.6,475.6L430.9,471.3L427.1,471.5L422.4,467.2L423.9,465.7L419.7,462.4L413.0,463.3L397.4,458.8L392.4,460.6L391.6,457.7L386.6,455.7L384.9,457.7L380.9,457.6L386.1,453.2L386.4,450.0L389.1,447.5L405.4,443.1L405.6,438.4L407.7,435.1L405.4,428.7L403.7,429.6L401.0,427.6L399.3,428.9L395.9,426.4L392.1,427.9L384.5,425.3L384.1,428.1L380.4,430.9L381.7,432.7L375.5,428.4Z"},
    {n:"Piskent tumani",cx:327.5,cy:737.1,a:17571,d:"M210.6,711.5L222.4,709.8L225.6,706.5L222.8,697.7L217.0,692.9L210.8,678.9L223.0,681.3L235.9,666.0L237.1,657.1L247.4,657.8L250.9,652.9L261.4,671.0L264.0,673.0L266.6,673.6L270.9,671.4L272.8,672.5L274.8,667.6L279.1,664.9L293.8,672.5L303.8,681.9L314.0,688.1L333.8,687.9L347.8,694.7L355.5,694.3L374.4,702.5L384.5,704.9L388.5,713.7L387.3,723.5L391.5,726.4L399.3,726.0L402.4,729.1L401.0,735.7L407.9,745.3L414.0,759.1L422.2,765.8L424.0,765.6L427.2,770.7L434.6,774.3L437.1,783.5L445.5,787.7L445.8,794.0L443.9,793.2L435.8,796.0L434.4,802.0L428.9,809.2L427.2,814.5L424.0,817.0L425.2,820.8L422.7,824.0L416.8,825.4L408.7,832.2L405.5,831.3L400.4,832.8L389.6,829.5L387.4,816.8L383.6,813.8L383.0,811.2L373.2,808.6L370.1,801.9L361.3,798.2L357.7,794.8L354.2,786.8L353.2,775.2L346.3,762.9L343.3,760.9L340.6,761.7L339.3,758.6L335.6,759.4L333.4,755.9L332.0,758.6L326.5,756.7L323.7,741.5L317.4,742.7L316.1,747.8L312.5,750.5L311.1,754.8L305.4,752.4L299.8,755.4L296.9,767.1L292.1,770.9L287.5,763.9L284.9,755.1L279.3,751.9L269.7,759.7L274.8,770.7L261.0,772.6L262.2,765.6L256.6,761.2L252.8,760.8L249.4,764.9L246.8,765.5L244.4,763.3L245.6,755.3L249.1,754.6L250.4,752.3L251.8,744.0L256.0,743.3L256.9,740.1L263.0,733.9L261.9,730.6L257.6,730.5L256.1,726.8L254.2,727.0L250.3,732.6L246.8,733.8L247.6,736.0L241.5,736.7L241.0,733.5L218.3,734.1L219.8,722.9L218.0,720.4L215.4,719.4L211.9,721.5L206.8,718.9L210.6,715.2Z"},
    {n:"Bekobod tumani",cx:214.4,cy:932.3,a:15020,d:"M160.9,835.7L159.7,832.1L165.5,828.4L167.9,831.7L181.0,834.4L180.3,838.0L184.8,847.1L189.9,842.8L198.2,845.1L205.2,840.4L220.0,837.2L225.5,833.4L238.8,830.1L245.2,830.4L253.0,826.3L252.5,819.7L259.9,817.9L257.8,817.1L256.6,812.8L257.6,807.4L260.0,808.0L259.2,805.3L262.1,802.3L260.4,799.9L265.8,800.0L267.7,803.8L265.7,817.4L269.6,839.2L268.3,855.8L262.0,855.5L259.2,857.0L246.0,855.4L243.8,859.0L237.8,858.1L224.6,871.2L218.7,872.8L219.1,875.8L222.5,877.9L222.2,880.5L226.1,884.8L229.7,886.1L238.0,896.0L244.4,899.5L241.3,902.0L241.7,906.1L239.4,907.9L241.4,911.7L239.9,916.0L244.2,919.8L245.9,924.0L245.7,935.7L251.3,939.7L248.6,944.4L249.3,948.1L254.3,952.1L252.9,961.4L257.9,967.1L265.4,971.0L267.0,975.8L266.1,984.6L262.2,991.1L262.5,996.5L256.2,999.9L254.7,1004.1L233.0,993.4L232.0,997.4L235.0,1003.2L232.9,1004.6L232.4,1007.6L238.0,1015.8L252.4,1022.5L247.7,1032.0L252.1,1046.4L254.0,1047.2L253.5,1050.8L242.8,1044.2L237.7,1044.7L231.9,1041.1L225.8,1041.1L213.8,1037.3L201.7,1038.2L197.7,1029.1L192.9,1025.2L189.3,1013.3L171.2,993.1L168.1,986.4L167.6,966.5L172.3,960.2L169.2,956.4L168.6,946.6L172.7,944.6L176.0,939.4L181.2,935.8L184.4,928.7L182.9,921.2L179.1,917.2L178.6,909.3L171.8,904.1L172.7,900.3L180.1,896.7L179.5,893.5L176.2,891.4L171.6,894.4L164.2,895.0L170.2,886.3L170.5,868.3L168.6,861.2L174.0,861.0L177.3,865.5L179.5,863.1L175.8,856.8L171.1,852.8L168.3,855.4L167.6,860.6L165.0,861.4L162.0,859.8L162.7,856.5L170.6,851.6L174.0,846.1L173.0,843.2L166.0,841.4ZM218.8,1037.0L215.2,1034.1L216.4,1032.4L219.7,1033.1L229.6,1030.1L229.9,1026.1L235.3,1028.2L239.1,1021.9L242.4,1023.4L244.7,1018.8L252.2,1022.5L250.3,1027.5L247.4,1029.9L247.9,1035.6L253.3,1048.7L252.1,1050.0L241.5,1043.2L238.6,1044.2L235.8,1041.4L226.0,1040.3Z"},
    {n:"Bo'ka tumani",cx:204.8,cy:782.8,a:11631,d:"M125.5,813.9L139.5,803.3L143.1,793.8L152.0,791.4L162.8,783.9L162.8,780.0L165.1,778.1L164.1,776.8L148.8,779.1L144.7,776.8L144.6,772.8L161.4,763.4L158.4,757.6L156.1,758.2L154.9,756.6L154.9,752.7L160.5,749.0L163.0,742.0L168.3,742.8L168.6,738.1L172.5,732.8L172.5,730.0L179.5,726.0L180.8,722.7L178.5,718.8L193.9,717.8L202.6,712.0L210.6,711.5L210.6,715.2L206.8,718.9L211.9,721.5L215.4,719.4L218.0,720.4L219.8,722.9L218.3,734.1L241.0,733.5L241.5,736.7L247.6,736.0L246.8,733.8L250.3,732.6L254.2,727.0L256.1,726.8L257.6,730.5L262.7,731.6L263.0,733.9L256.9,740.1L256.0,743.3L251.8,744.0L250.4,752.3L249.1,754.6L245.6,755.3L244.4,763.3L246.8,765.5L249.4,764.9L252.8,760.8L256.6,761.2L262.2,765.6L261.0,772.6L273.4,770.7L276.0,775.0L274.2,777.2L274.6,780.7L270.9,781.0L272.7,783.6L269.3,784.7L269.1,790.8L266.7,790.6L262.6,794.8L264.7,799.5L260.4,799.9L262.1,802.3L259.2,805.3L260.0,808.0L257.6,807.4L256.6,812.8L257.8,817.1L259.9,817.9L252.5,819.7L253.0,826.3L245.2,830.4L238.8,830.1L225.5,833.4L220.0,837.2L205.2,840.4L198.2,845.1L189.9,842.8L184.8,847.1L180.3,838.0L181.0,834.4L167.9,831.7L159.3,824.1L153.7,822.8L142.3,826.0L135.9,824.7L135.3,822.5L141.8,815.8L142.5,813.5L140.8,811.6Z"},
    {n:"Quyi Chirchiq tumani",cx:134.5,cy:673.9,a:11280,d:"M30.3,698.0L36.4,703.8L31.8,711.0L30.5,718.3L34.6,719.2L39.0,711.2L43.2,710.7L43.1,716.2L38.1,721.4L39.1,724.0L41.6,725.2L48.8,722.5L51.8,727.8L62.5,731.6L68.2,737.1L76.2,739.0L77.0,751.0L82.8,749.1L85.5,745.1L87.7,745.7L88.3,742.9L91.6,742.8L92.7,740.5L97.0,739.3L98.9,742.9L100.9,738.5L103.2,740.8L105.6,738.0L108.5,739.0L109.1,735.2L113.5,734.5L116.0,731.2L113.8,729.6L114.5,725.9L118.6,721.0L122.9,719.2L124.0,720.5L127.6,715.7L131.8,717.4L133.5,716.0L135.6,717.9L139.1,715.0L143.9,714.7L149.0,706.2L155.4,703.6L166.7,691.3L169.3,691.7L172.7,688.9L192.3,663.0L197.6,659.8L200.7,660.1L204.1,653.3L207.3,651.7L207.6,649.7L203.3,646.4L206.1,643.7L211.6,643.9L208.3,638.7L209.1,637.2L214.2,637.2L215.8,631.7L219.9,627.0L219.9,624.2L218.4,623.3L213.6,625.6L210.4,622.8L209.2,625.0L204.8,623.3L202.5,619.9L204.3,618.7L203.6,615.8L210.7,603.6L221.9,601.0L220.7,607.8L224.1,606.4L228.5,595.8L232.0,595.0L233.2,588.1L229.6,587.9L230.0,583.4L227.9,579.3L235.5,572.1L236.2,566.6L225.3,564.7L219.8,568.5L212.9,578.0L206.2,582.3L203.4,586.3L200.6,591.5L201.4,593.7L195.3,599.9L196.3,603.3L193.6,604.4L194.0,606.7L181.5,614.5L171.6,618.2L163.5,626.8L160.5,625.8L160.1,628.1L157.0,629.3L155.5,635.0L150.5,639.3L146.9,639.8L137.9,653.3L127.6,658.8L114.5,658.7L114.4,660.6L111.4,661.4L112.0,663.9L109.1,667.4L102.3,667.4L100.7,669.2L99.1,666.3L94.8,670.0L92.1,668.7L92.0,671.8L88.7,670.9L85.7,676.1L82.0,676.2L82.1,679.0L79.3,678.1L79.1,680.4L75.3,679.9L65.8,684.5L60.3,685.2L58.0,689.7L52.6,691.1L48.9,695.7L44.4,692.4Z"},
    {n:"Qibray tumani",cx:333.5,cy:405.4,a:10671,d:"M261.2,464.8L270.9,472.2L275.7,468.4L280.0,468.9L288.8,466.6L293.2,471.8L292.1,478.4L316.9,475.0L317.9,476.1L314.4,482.0L300.0,494.3L282.3,513.9L283.0,516.5L288.3,516.5L296.7,507.1L302.8,496.8L321.1,483.6L333.5,469.4L335.4,463.6L333.7,461.3L340.9,456.2L345.2,446.4L354.5,436.0L359.7,434.0L368.7,404.8L371.7,401.2L372.8,402.5L376.8,399.5L378.5,397.5L377.4,396.5L375.2,397.8L375.0,396.6L376.3,394.3L379.7,393.4L376.9,388.4L375.0,388.2L374.0,381.0L382.3,367.7L379.4,357.2L391.0,353.3L412.3,326.0L413.2,316.7L415.8,313.7L412.6,303.8L409.4,307.8L407.6,307.9L405.9,312.5L397.3,314.0L394.0,312.2L389.3,316.6L382.2,315.8L370.3,319.8L366.6,326.7L355.0,336.0L347.7,352.1L341.0,356.2L341.0,361.5L345.1,364.1L345.1,365.8L336.6,368.9L326.8,376.8L319.4,375.2L317.1,370.5L311.8,366.1L306.2,368.7L299.5,380.1L291.8,388.1L288.4,396.4L289.3,398.5L298.6,400.9L303.4,406.3L309.5,406.0L310.4,415.6L311.8,416.4L308.7,418.8L306.2,418.0L302.2,419.6L296.6,418.0L294.0,420.0L292.8,425.1L278.8,427.1L268.9,431.7L268.4,438.1L264.4,440.8L264.0,443.0L252.4,444.0L249.4,451.8L251.2,453.6L259.1,454.5L260.3,452.1L263.3,452.2L264.1,453.2L262.6,453.0L261.9,455.1L264.4,455.6L264.4,458.1L267.8,458.4ZM352.5,407.6L349.4,403.7L362.5,398.0L371.3,391.8L374.1,394.8L378.3,390.9L360.5,416.2L359.4,421.4L362.8,422.9L360.9,429.2L358.7,430.3L358.0,429.0L357.2,430.6L354.8,429.1L352.0,430.7L354.9,432.4L354.7,434.4L353.4,432.1L346.6,432.4L339.3,438.8L334.9,432.0L336.6,428.0L334.3,424.8L334.7,421.9L343.0,416.9L345.8,416.5L348.4,419.5L350.7,418.4L351.9,415.6L348.1,416.8L351.3,412.2L351.0,410.1L353.7,408.6Z"},
    {n:"O'rta Chirchiq tumani",cx:264.1,cy:620.2,a:9212,d:"M184.6,673.9L192.3,663.0L197.6,659.8L200.7,660.1L204.1,653.3L207.3,651.7L207.6,649.7L203.3,646.4L206.1,643.7L211.6,643.9L208.3,638.7L209.1,637.2L214.2,637.2L215.8,631.7L219.9,627.0L218.4,623.3L213.6,625.6L210.4,622.8L209.2,625.0L204.8,623.3L202.5,619.9L204.3,618.7L203.6,615.8L206.0,610.4L210.7,603.6L217.2,601.7L221.9,601.0L220.7,607.8L224.1,606.4L228.5,595.8L232.0,595.0L233.2,588.1L229.6,587.9L230.0,583.4L227.9,579.3L235.5,572.1L236.2,566.6L244.9,566.2L271.9,540.3L264.8,553.2L271.9,554.9L264.3,567.0L274.6,567.8L276.4,565.9L274.0,563.1L279.0,558.2L281.3,550.4L289.1,555.0L297.6,565.1L297.3,568.8L289.5,568.6L286.6,572.6L297.6,574.4L304.9,569.4L304.0,572.1L300.0,574.6L304.1,587.0L299.4,590.0L299.8,595.3L297.4,600.3L299.4,602.5L298.8,604.8L296.4,605.4L296.5,607.7L302.7,612.4L295.2,616.8L294.9,618.8L299.7,621.6L296.4,623.0L296.0,626.2L300.9,631.5L305.8,633.0L304.5,641.4L308.6,645.8L312.5,656.3L317.2,660.4L324.8,677.5L331.0,682.5L331.4,688.0L314.0,688.1L303.8,681.9L293.8,672.5L279.1,664.9L274.8,667.6L272.8,672.5L270.9,671.4L266.6,673.6L264.0,673.0L261.4,671.0L251.0,652.9L239.5,650.2L235.7,651.7L231.3,650.2L223.0,650.7L211.0,660.3L204.3,662.7L195.8,668.9L192.8,668.4L188.2,673.9Z"},
    {n:"Yuqori Chirchiq tumani",cx:328.1,cy:540.0,a:8593,d:"M271.9,540.4L264.8,553.2L271.9,554.9L264.3,567.0L274.6,567.8L276.4,565.9L274.0,563.1L279.0,558.2L281.3,550.4L289.1,555.0L297.6,565.1L297.3,568.8L289.5,568.6L286.6,572.6L297.6,574.4L304.9,569.4L304.0,572.1L300.0,574.6L305.5,589.8L316.5,593.0L318.9,591.5L321.8,592.2L329.9,595.5L328.2,599.0L329.9,602.5L339.1,603.0L341.2,605.7L355.5,603.0L367.2,607.5L370.5,606.5L371.2,602.2L383.5,601.4L384.7,597.5L382.0,589.8L381.5,580.5L370.0,589.2L361.5,588.4L357.0,583.9L359.3,582.6L357.9,582.1L360.0,575.7L362.6,573.9L377.0,572.7L381.1,567.2L371.4,568.9L370.2,567.3L369.9,559.9L375.8,553.2L373.5,552.9L372.6,550.4L372.6,543.7L370.3,542.5L353.6,546.4L348.0,534.2L346.5,536.1L342.8,535.2L341.9,538.4L338.5,537.7L337.2,535.1L349.9,495.4L344.4,494.0L347.1,493.0L348.9,488.4L353.3,489.7L355.0,486.9L352.6,482.0L354.4,479.7L349.3,474.2L355.9,466.0L360.8,463.8L356.6,464.3L350.8,469.6L349.0,469.4L348.3,467.6L351.7,460.3L362.9,444.7L359.7,434.0L354.9,435.5L345.2,446.4L340.9,456.2L333.7,461.3L335.4,463.6L333.5,469.4L321.1,483.6L301.9,497.9L292.7,512.1L282.6,521.5L286.5,527.7Z"},
    {n:"Yangiyo'l tumani",cx:145.7,cy:588.8,a:8391,d:"M80.9,581.2L88.1,577.0L97.5,567.7L107.7,562.6L108.5,557.8L114.8,557.6L119.3,552.2L135.1,543.7L137.6,540.3L139.1,536.3L137.5,533.9L140.1,529.7L144.4,535.2L151.8,536.2L153.1,543.3L147.1,547.1L155.4,551.2L157.4,554.3L164.6,549.7L171.2,550.8L171.9,552.6L175.0,546.7L181.3,542.8L187.9,546.2L193.3,553.1L182.5,563.9L187.8,570.1L190.9,568.0L198.9,569.6L204.2,565.1L213.5,566.2L215.5,559.8L225.3,564.7L219.8,568.5L212.9,578.0L206.2,582.3L200.6,591.5L201.4,593.7L195.3,599.9L196.3,603.3L193.6,604.4L194.0,606.7L191.5,609.2L171.6,618.2L163.5,626.8L160.5,625.8L160.1,628.1L157.0,629.3L153.4,637.3L146.9,639.8L138.9,652.5L132.5,656.2L126.1,654.4L123.2,649.4L130.5,636.8L128.5,634.0L129.4,629.6L123.8,626.9L120.2,622.8L120.2,617.2L125.4,613.6L124.3,610.6L117.3,613.3L106.5,623.2L95.7,610.1L83.4,612.3L85.1,609.6L83.3,599.0L85.8,586.7ZM150.9,597.5L152.3,599.8L151.2,600.5L153.2,601.5L155.6,600.3L155.5,602.7L156.9,600.3L159.8,600.8L164.0,593.6L165.7,594.7L165.3,591.9L170.1,582.7L164.2,576.8L158.2,586.7L153.9,590.6L154.6,592.1Z"},
    {n:"Oqqo'rg'on tumani",cx:158.6,cy:729.0,a:7845,d:"M77.0,751.0L93.5,754.4L100.7,761.9L105.6,776.5L105.0,782.5L107.1,787.8L111.1,790.4L115.5,789.5L121.9,791.8L122.4,798.4L126.7,805.3L122.3,810.0L125.5,813.9L139.5,803.3L143.1,793.8L152.0,791.4L162.8,783.9L162.8,780.0L165.1,778.1L164.1,776.8L148.8,779.1L144.7,776.8L144.6,772.8L161.4,763.4L158.4,757.6L156.1,758.2L154.9,756.6L154.9,752.7L160.5,749.0L163.0,742.0L168.3,742.8L168.6,738.1L172.5,732.8L172.5,730.0L179.5,726.0L180.8,722.7L178.5,718.8L193.9,717.8L202.6,712.0L222.4,709.8L225.6,706.5L224.6,701.8L222.8,697.7L217.0,692.9L210.8,678.9L223.0,681.3L235.9,666.0L237.1,657.1L247.4,657.8L250.9,652.9L239.5,650.2L235.7,651.7L231.3,650.2L223.0,650.7L211.8,659.8L204.3,662.7L195.8,668.9L192.8,668.4L188.2,673.9L186.2,673.0L183.2,674.9L170.9,690.6L166.7,691.3L156.1,703.0L149.0,706.2L143.9,714.7L139.1,715.0L135.6,717.9L133.5,716.0L131.8,717.4L127.3,715.9L124.4,720.3L122.9,719.2L119.4,720.4L115.7,724.1L113.8,729.6L116.0,731.2L113.5,734.5L109.1,735.2L108.5,739.0L105.6,738.0L103.2,740.8L100.9,738.5L98.9,742.9L97.0,739.3L92.7,740.5L91.6,742.8L88.3,742.9L87.7,745.7L85.5,745.1L82.8,749.1Z"},
    {n:"Chinoz tumani",cx:72.0,cy:645.1,a:6720,d:"M6.0,675.5L9.9,676.3L19.5,666.8L22.4,667.2L22.2,665.9L27.3,664.2L32.4,665.6L41.9,661.1L43.8,657.3L46.7,657.2L46.1,652.9L49.9,649.5L47.8,646.5L51.0,645.1L48.1,641.3L45.9,645.4L44.0,645.2L36.4,634.0L33.6,632.8L36.4,624.6L65.5,592.6L67.1,589.0L71.2,588.2L79.3,581.7L80.9,581.2L85.8,586.7L83.3,599.0L85.1,609.6L83.4,612.3L95.7,610.1L106.5,623.2L117.3,613.3L124.3,610.6L125.4,613.6L120.2,617.2L120.2,622.8L123.8,626.9L129.4,629.6L128.5,634.0L130.5,636.8L123.2,649.4L126.1,654.4L130.7,656.3L128.6,658.3L114.5,658.7L114.4,660.6L111.4,661.4L112.0,663.9L109.1,667.4L102.3,667.4L100.7,669.2L99.1,666.3L94.8,670.0L92.1,668.7L92.0,671.8L88.7,670.9L85.7,676.1L82.0,676.2L82.1,679.0L79.3,678.1L79.1,680.4L75.3,679.9L65.8,684.5L60.3,685.2L58.0,689.7L52.6,691.1L48.2,695.8L44.4,692.4L30.3,698.0L25.3,694.9L22.6,688.8L15.1,686.4Z"},
    {n:"Zangiota tumani",cx:179.0,cy:521.3,a:3742,d:"M150.9,536.7L150.8,529.5L147.9,526.2L154.8,521.6L155.3,518.5L154.2,516.0L146.5,512.5L145.1,504.5L147.1,500.0L149.8,499.9L151.0,497.5L153.5,498.0L156.8,494.0L161.0,494.0L161.8,486.1L167.9,479.8L173.5,481.3L176.8,473.1L183.5,473.4L188.6,478.0L193.4,478.5L194.5,477.2L196.2,479.1L200.8,473.8L202.2,468.1L209.0,465.6L202.2,472.7L200.7,482.8L194.7,492.6L195.4,496.8L189.3,505.3L189.8,509.8L185.4,516.3L195.1,508.8L195.2,518.0L201.0,524.0L205.1,539.6L208.6,540.6L209.6,550.8L215.5,559.8L213.5,566.2L204.2,565.1L198.9,569.6L190.9,568.0L187.8,570.1L182.5,563.9L193.3,553.1L187.9,546.2L181.3,542.8L175.0,546.7L171.9,552.6L171.2,550.8L164.6,549.7L157.4,554.3L155.4,551.2L147.1,547.1L153.1,543.3ZM222.5,527.4L219.8,530.3L222.9,537.2L226.3,531.4L230.4,531.5L231.5,541.1L237.8,537.8L241.3,542.0L259.8,530.2L255.8,527.1Z"},
    {n:"Toshkent tumani",cx:220.2,cy:447.2,a:3241,d:"M150.9,470.1L148.4,473.0L157.7,474.7L154.7,487.1L157.4,494.3L161.0,494.0L161.8,486.1L167.9,479.8L173.5,481.3L176.8,473.1L183.5,473.4L188.6,478.0L193.4,478.5L194.5,477.2L196.2,479.1L200.8,473.8L204.0,466.3L209.0,465.6L219.0,456.2L228.0,450.5L237.7,451.2L246.3,457.8L258.2,457.5L261.2,464.8L267.8,458.4L264.4,458.1L264.4,455.6L261.9,455.1L262.6,453.0L264.1,453.2L263.3,452.2L260.3,452.1L259.1,454.5L251.2,453.6L249.4,451.8L252.4,444.0L264.0,443.0L264.4,440.8L268.4,438.1L268.9,431.7L278.8,427.1L292.8,425.1L294.0,420.0L296.6,418.0L294.9,418.2L293.6,414.9L281.6,417.4L272.3,413.7L272.4,416.3L268.6,420.6L264.9,421.3L257.2,429.9L252.3,430.2L250.6,432.1L243.2,424.7L237.9,423.6L233.3,416.9L227.6,420.7L224.6,418.6L214.1,424.0L209.5,423.7L206.6,431.3L204.0,429.5L201.5,432.9L198.4,432.8L196.7,435.5L195.5,434.4L196.0,436.3L199.9,437.9L202.9,447.5L205.4,448.3L197.9,456.4L195.8,453.2L187.6,455.2L185.2,453.5L182.4,454.1L177.0,463.9L176.1,470.5L169.7,470.8L173.1,465.4L169.5,461.2L159.5,465.3L158.5,467.4L152.7,467.9Z"},
    {n:"Angren shahri",cx:545.1,cy:638.5,a:709,d:"M518.2,658.2L515.9,656.1L529.8,651.1L532.5,636.3L531.5,632.7L539.2,627.3L543.6,618.6L545.7,618.3L546.8,624.1L552.3,632.4L554.0,630.1L563.4,630.5L568.0,633.4L570.8,632.7L571.2,635.7L574.7,635.7L561.6,642.3L560.9,640.3L557.8,640.3L539.6,651.0L514.7,660.0Z"},
    {n:"Chirchiq shahri",cx:353.6,cy:416.6,a:703,d:"M352.5,407.6L349.4,403.7L362.5,398.0L371.3,391.8L374.1,394.8L378.3,390.9L360.5,416.2L359.4,421.4L362.8,422.9L360.9,429.2L358.7,430.3L358.0,429.0L357.2,430.6L354.8,429.1L352.0,430.7L354.9,432.4L354.7,434.4L353.4,432.1L346.6,432.4L339.3,438.8L334.9,432.0L336.6,428.0L334.3,424.8L334.7,421.9L343.0,416.9L345.8,416.5L348.4,419.5L350.7,418.4L351.9,415.6L348.1,416.8L351.3,412.2L351.0,410.1L353.7,408.6Z"},
    {n:"Bekobod shahri",cx:238.2,cy:1034.0,a:497,d:"M215.2,1034.1L220.6,1038.6L235.8,1041.4L238.6,1044.2L241.5,1043.2L245.7,1045.1L252.1,1050.0L253.3,1048.7L247.9,1035.6L247.4,1029.9L250.3,1027.5L252.2,1022.5L244.7,1018.8L242.4,1023.4L239.1,1021.9L235.3,1028.2L229.9,1026.1L229.6,1030.1L219.7,1033.1L216.4,1032.4Z"},
    {n:"Olmaliq shahri",cx:363.1,cy:723.1,a:479,d:"M383.3,718.9L373.7,724.6L372.0,733.5L373.5,737.3L366.1,733.2L362.7,727.6L359.7,729.1L358.3,732.8L354.1,733.3L348.7,736.7L345.9,735.5L345.2,731.0L349.0,730.3L351.9,726.9L349.9,723.9L353.2,722.2L353.9,719.4L352.0,707.2L353.4,702.7L358.6,704.5L355.3,707.0L354.7,713.9L358.4,713.9L358.4,717.5L354.7,717.5L354.7,719.4L366.7,717.4L366.5,713.9L372.4,712.1L376.5,716.8L382.5,717.1Z"},
    {n:"Ohangaron shahri",cx:380.6,cy:695.8,a:223,d:"M385.2,703.4L390.3,701.8L390.9,694.9L388.1,691.3L382.1,690.4L382.5,687.1L381.4,691.2L368.0,686.8L367.4,688.3L372.2,689.8L370.1,695.7L367.5,697.1L371.9,698.0L374.9,696.4L375.8,701.3Z"},
    {n:"Yangiyo'l shahri",cx:160.7,cy:590.3,a:216,d:"M150.9,597.5L152.3,599.8L151.2,600.5L153.2,601.5L155.6,600.3L155.5,602.7L156.9,600.3L159.8,600.8L164.0,593.6L165.7,594.7L165.3,591.9L170.1,582.7L164.2,576.8L158.2,586.7L153.9,590.6L154.6,592.1Z"},
    {n:"Nurafshon shahri",cx:272.0,cy:625.1,a:210,d:"M263.0,629.9L270.3,630.5L269.9,633.2L272.9,633.5L273.9,636.4L277.0,634.4L276.5,631.2L280.6,631.3L280.7,629.8L277.4,628.3L284.0,624.6L281.9,622.1L277.3,624.5L274.1,621.4L270.3,616.0L273.7,615.7L274.5,614.1L273.1,613.1L265.3,615.1L257.3,620.4L267.2,616.6L269.2,621.4L264.2,625.5Z"},
  ];
  // Har tuman real konturi + mahalla uchastkalari (Voronoi, demo bo'linma)
  const TV_DIST = {
    "Bekobod tumani": {w:410,h:916,o:"M8,133L31,159L38,162L49,162L56,165L60,175L57,185L48,195L19,213L16,218L17,224L22,229L28,230L35,229L37,227L39,209L46,200L50,199L66,214L80,236L79,241L76,244L72,245L68,242L63,232L60,229L50,226L42,228L41,230L41,234L48,255L45,266L47,295L45,308L46,319L40,334L28,343L25,350L27,352L34,353L39,352L43,349L51,348L63,339L68,337L71,339L79,345L83,352L82,356L73,364L63,365L55,369L52,374L52,383L55,388L76,402L77,410L76,416L78,430L82,436L92,444L93,449L94,464L97,471L95,482L86,496L67,509L55,528L44,532L41,535L45,549L43,557L43,570L49,579L54,584L37,606L39,678L50,701L90,743L107,767L115,774L128,816L129,819L135,822L145,830L153,848L155,858L159,863L170,865L191,860L202,860L222,864L245,873L267,873L273,876L288,886L302,883L306,884L314,889L319,894L338,907L345,908L344,902L346,895L340,894L339,892L337,887L338,883L337,873L333,863L326,855L324,841L335,826L341,807L325,801L320,796L308,791L296,782L289,783L287,773L281,770L279,763L274,761L269,754L271,743L278,738L275,724L268,719L268,717L271,703L277,705L285,714L293,714L349,741L349,733L354,726L364,721L369,722L377,714L374,705L376,694L383,687L385,678L390,671L393,640L387,622L373,617L360,608L342,588L343,574L348,567L347,555L344,549L335,547L329,540L327,527L328,524L336,517L337,510L332,505L324,504L317,496L320,490L318,483L319,476L318,470L316,467L317,454L311,439L303,433L296,425L301,410L297,406L294,397L302,390L298,382L301,375L310,373L312,367L289,354L281,341L269,336L259,319L247,314L244,308L233,299L234,289L227,286L226,283L221,282L222,272L220,271L233,269L233,268L241,265L248,260L261,243L273,238L288,218L307,223L310,222L313,217L315,211L318,209L343,210L365,214L375,209L393,208L393,211L398,210L399,203L402,203L403,195L401,192L402,150L391,100L391,75L388,72L390,57L393,50L395,24L389,17L391,16L389,10L376,8L370,9L369,10L370,13L375,18L372,25L365,29L368,39L359,37L360,51L356,56L356,61L360,71L367,74L367,76L358,81L341,81L341,89L338,95L341,97L343,104L315,119L306,117L292,118L266,126L256,126L244,130L234,135L230,141L225,144L216,143L198,148L187,154L172,155L154,165L147,172L117,164L98,179L90,155L82,146L85,134L38,124L35,117L30,112L21,113L19,118L9,125Z",c:[{d:"M391,91L391,75L388,72L390,57L393,50L395,24L389,17L391,16L389,10L385,9L370,9L370,13L375,18L372,25L365,29L368,39L359,37L360,51L356,56L356,61L360,71L367,74L358,81L341,81L341,89L338,95L342,99Z",cx:375,cy:54},{d:"M49,126L38,124L35,117L30,112L21,113L19,118L9,125L8,133L31,159L38,162L44,162Z",cx:33,cy:146},{d:"M361,164L401,144L391,100L391,91L342,99L343,104L325,114Z",cx:366,cy:129},{d:"M45,162L50,162L56,165L60,179L81,177L93,166L90,155L82,146L85,134L49,126Z",cx:66,cy:151},{d:"M121,219L165,209L143,171L117,164L98,179L93,166L81,177Z",cx:127,cy:194},{d:"M165,209L169,211L182,208L213,173L216,143L198,148L187,154L172,155L154,165L147,172L143,171Z",cx:176,cy:190},{d:"M213,173L287,219L295,220L287,120L244,130L234,135L225,144L216,143Z",cx:252,cy:158},{d:"M361,164L325,114L315,119L298,117L287,120L295,220L307,223L310,222L315,211L318,209L337,209L353,212Z",cx:325,cy:186},{d:"M361,164L353,212L365,214L375,209L393,208L393,211L398,210L399,203L402,203L403,195L401,192L402,150L401,144Z",cx:380,cy:178},{d:"M89,270L121,219L81,177L60,179L57,185L48,195L19,213L16,218L16,221L17,224L22,229L28,230L35,229L38,225L39,209L46,200L52,200L66,214L80,236L76,244L72,245L68,242L63,232L60,229L50,226L42,228L41,234L48,255L46,262Z",cx:95,cy:223},{d:"M140,292L157,279L169,211L165,209L121,219L89,270L104,284Z",cx:134,cy:245},{d:"M157,279L228,287L225,285L226,283L221,282L222,272L220,271L233,269L233,268L237,267L182,208L169,211Z",cx:187,cy:239},{d:"M182,208L237,267L248,260L261,243L273,238L287,219L213,173Z",cx:240,cy:228},{d:"M87,351L104,284L89,270L46,262L47,295L45,308L46,319L40,334L28,343L25,350L27,352L34,353L39,352L43,349L51,348L63,339L68,337L79,345L83,353Z",cx:73,cy:301},{d:"M136,373L158,337L140,292L104,284L87,351Z",cx:123,cy:315},{d:"M158,337L216,338L245,311L233,299L234,289L228,287L157,279L140,292Z",cx:192,cy:305},{d:"M142,397L168,415L210,407L216,338L158,337L136,373Z",cx:175,cy:385},{d:"M216,338L210,407L224,414L300,378L302,375L310,373L311,366L289,354L281,341L269,336L259,319L247,314L245,311Z",cx:257,cy:360},{d:"M83,353L82,356L75,363L63,365L55,369L52,374L52,383L55,388L76,402L77,410L76,416L78,430L83,436L142,397L136,373L87,351Z",cx:101,cy:393},{d:"M140,483L162,476L168,415L142,397L83,436L92,444L93,452Z",cx:127,cy:440},{d:"M162,476L190,496L222,485L241,456L224,414L210,407L168,415Z",cx:199,cy:436},{d:"M224,414L241,456L283,461L311,440L296,425L301,410L297,406L294,398L302,390L298,382L300,378Z",cx:262,cy:420},{d:"M113,529L140,483L93,452L94,464L97,471L95,482L86,496L71,506L62,517Z",cx:113,cy:489},{d:"M222,485L256,526L293,524L283,461L241,456Z",cx:264,cy:504},{d:"M293,524L320,543L332,543L328,539L327,525L336,517L337,510L332,505L324,504L317,496L320,490L318,483L319,475L318,470L316,467L317,454L311,440L283,461Z",cx:303,cy:493},{d:"M113,529L62,517L55,528L44,532L41,535L45,549L43,557L43,569L100,589L122,543Z",cx:81,cy:553},{d:"M122,543L180,563L186,558L190,496L162,476L140,483L113,529Z",cx:156,cy:512},{d:"M190,496L186,558L228,560L256,526L222,485Z",cx:217,cy:511},{d:"M228,560L259,595L276,595L320,543L293,524L256,526Z",cx:274,cy:551},{d:"M93,644L106,607L100,589L43,569L49,579L54,584L37,606L37,641Z",cx:71,cy:607},{d:"M107,661L125,668L150,659L177,605L175,601L106,607L93,644Z",cx:133,cy:625},{d:"M106,607L175,601L180,563L122,543L100,589Z",cx:142,cy:576},{d:"M177,605L223,636L259,595L228,560L186,558L180,563L175,601Z",cx:216,cy:598},{d:"M228,656L303,670L308,647L276,595L259,595L223,636Z",cx:265,cy:615},{d:"M308,647L359,607L342,588L343,574L348,567L347,554L344,549L335,547L332,543L320,543L276,595Z",cx:317,cy:601},{d:"M138,723L206,706L206,692L150,659L125,668Z",cx:157,cy:680},{d:"M206,692L228,656L223,636L177,605L150,659Z",cx:191,cy:646},{d:"M308,647L303,670L310,689L385,678L390,671L393,640L387,622L373,617L359,607Z",cx:348,cy:658},{d:"M107,661L93,644L37,641L39,678L50,701L70,722Z",cx:67,cy:690},{d:"M70,722L82,734L134,732L138,723L125,668L107,661Z",cx:109,cy:695},{d:"M134,732L144,763L176,778L212,716L206,706L138,723Z",cx:166,cy:748},{d:"M206,706L212,716L270,749L271,743L278,738L275,724L268,719L271,703L277,705L285,714L293,714L305,720L310,689L303,670L228,656L206,692Z",cx:239,cy:704},{d:"M310,689L305,720L349,741L349,733L354,726L364,721L369,722L377,714L374,705L376,694L383,687L385,678Z",cx:341,cy:709},{d:"M144,763L134,732L82,734L90,743L107,767L113,771L118,787Z",cx:119,cy:753},{d:"M203,831L261,797L281,770L279,763L274,761L269,754L270,749L212,716L176,778Z",cx:228,cy:774},{d:"M203,831L176,778L144,763L118,787L128,816L129,819L135,822L145,830L153,848L155,858L161,864L170,865L189,861Z",cx:156,cy:802},{d:"M298,867L261,797L203,831L189,861L202,860L222,864L245,873L267,873L288,886L292,886Z",cx:242,cy:845},{d:"M271,821L260,820L259,834L233,838L225,842L223,845L216,845L212,842L211,846L208,846L207,848L213,849L220,859L226,860L227,864L246,871L268,871L279,877L281,874L291,884L302,881L317,888L323,894Z",cx:256,cy:854},{d:"M261,797L298,867L326,852L324,841L335,826L341,807L325,801L320,796L308,791L296,782L289,783L287,773L281,770Z",cx:305,cy:817},{d:"M323,894L340,905L342,905L344,900L336,885L336,872L324,854L323,833L333,825L340,807L324,802L320,797L313,794L310,794L311,798L305,810L295,804L293,805L288,810L285,820L279,827L274,821L271,821Z",cx:305,cy:844},{d:"M298,867L292,886L302,883L306,884L314,889L319,894L338,907L345,908L346,895L340,894L339,892L337,887L337,873L333,863L326,855L326,852Z",cx:316,cy:878}]},
    "Bo'stonliq tumani": {w:776,h:660,o:"M8,527L12,540L20,528L27,521L35,526L33,524L38,520L38,517L47,520L50,520L52,518L56,521L58,520L61,522L63,521L66,529L64,533L64,538L44,544L40,547L40,551L34,556L39,556L41,554L47,556L46,558L48,560L54,557L61,561L67,560L73,563L81,562L86,566L84,566L84,568L89,571L90,573L94,573L101,578L111,570L116,568L122,560L127,558L127,554L130,552L137,535L142,532L150,519L155,515L162,513L170,507L177,505L182,501L185,500L186,498L195,499L201,497L207,498L211,494L217,493L222,497L221,502L223,509L221,516L225,520L222,523L221,531L224,536L223,539L225,546L222,552L215,556L209,557L195,573L192,574L181,591L177,609L179,613L178,618L179,625L182,629L192,622L202,621L209,624L214,621L219,623L222,622L229,626L237,633L251,638L257,642L263,639L267,640L269,638L273,638L276,639L279,644L286,645L289,648L294,652L298,652L308,648L320,652L329,644L337,640L341,640L345,642L347,638L352,639L358,633L362,635L368,633L370,630L370,613L372,609L372,602L376,599L379,601L382,602L384,599L389,596L400,582L407,578L409,571L408,568L414,561L416,555L415,553L418,548L415,548L406,541L407,537L404,530L394,522L392,519L383,514L380,510L378,504L373,504L366,506L362,500L362,497L358,491L351,491L347,488L347,486L341,486L339,482L335,480L331,474L319,479L317,485L315,487L303,492L298,491L293,489L289,484L278,481L272,476L270,476L273,472L276,470L279,459L275,452L279,449L281,445L288,442L291,435L292,429L288,424L289,419L297,420L303,416L314,422L318,418L320,414L326,413L330,407L340,404L349,403L360,398L368,382L373,376L379,372L384,372L391,366L397,364L405,354L409,353L419,354L423,344L424,338L422,336L424,323L433,307L451,299L456,294L463,295L465,294L464,285L467,275L478,274L483,265L482,262L486,261L488,256L493,249L493,245L495,242L505,236L508,237L517,233L524,233L528,237L534,238L536,235L536,224L541,224L544,229L547,230L551,228L559,233L563,230L568,230L572,232L576,225L577,222L580,221L579,217L581,212L578,200L579,192L573,186L577,174L583,169L581,162L584,160L583,156L585,153L592,158L594,157L596,154L598,155L601,161L608,160L620,167L637,166L643,167L647,159L652,154L649,151L653,149L657,149L659,145L664,147L667,143L669,137L672,136L672,134L677,134L685,129L691,129L693,118L695,116L699,118L705,115L710,105L715,107L726,99L729,100L735,99L737,103L741,104L747,102L749,99L746,96L754,93L758,86L761,86L763,84L764,82L760,76L762,75L763,71L768,67L766,65L767,62L760,59L757,54L757,48L752,48L749,51L745,52L740,50L741,43L737,39L733,40L727,34L724,34L721,30L715,27L707,16L703,15L701,18L694,21L688,16L681,15L675,8L669,11L664,11L664,8L662,10L659,9L654,17L650,18L648,23L650,26L646,31L641,33L629,31L621,27L613,39L613,43L607,44L605,49L596,53L595,58L586,58L580,60L578,67L570,68L564,63L553,60L543,65L541,69L534,69L528,76L529,78L535,80L536,83L533,86L528,86L522,91L522,97L517,100L514,107L508,109L505,113L501,126L501,132L495,139L495,143L491,149L489,161L482,169L481,173L483,177L477,176L468,181L459,179L455,173L447,171L442,164L447,160L446,154L443,151L441,141L434,134L427,135L426,133L423,132L421,126L418,126L416,123L410,120L402,134L394,130L380,139L375,144L371,144L369,143L363,144L362,147L359,150L355,151L353,155L344,157L343,161L339,162L340,169L344,175L343,187L346,195L346,201L342,203L334,205L332,207L326,208L324,211L318,214L312,213L311,216L303,220L302,222L297,225L295,229L297,233L297,235L292,238L289,243L283,243L283,253L276,256L277,267L273,273L271,272L268,276L265,276L263,282L260,284L258,280L255,279L248,281L247,283L240,283L237,292L234,293L229,301L225,303L219,303L217,306L217,318L213,320L210,320L210,317L206,315L204,315L204,308L200,308L196,305L195,302L194,302L190,306L193,306L194,313L190,313L185,317L185,323L181,324L183,331L177,332L175,335L176,341L175,346L166,351L160,350L159,351L159,356L157,358L152,358L146,362L140,362L133,360L130,356L121,354L109,361L103,361L98,366L92,368L88,366L86,368L79,366L72,369L76,381L73,385L72,396L46,429L32,434L36,447L25,463L26,468L28,470L27,472L29,472L32,478L28,479L27,482L27,483L29,482L31,483L29,486L24,489L23,488L19,492Z",c:[{d:"M571,111L615,89L586,58L580,60L578,67L572,69L564,63L553,60L543,65L541,69L534,69L529,75L529,78L534,79L536,83L534,83Z",cx:575,cy:86},{d:"M615,89L631,94L652,61L633,32L622,27L613,39L613,43L607,44L605,49L596,53L595,58L586,58Z",cx:619,cy:60},{d:"M652,61L666,55L670,10L664,11L664,8L662,10L658,9L654,17L650,18L648,23L650,26L646,31L641,33L633,32Z",cx:654,cy:44},{d:"M666,55L711,57L732,39L727,34L724,34L721,30L715,27L707,16L703,15L701,18L694,21L688,16L681,15L675,8L673,8L670,10Z",cx:695,cy:32},{d:"M711,57L712,106L713,107L715,107L726,99L729,100L735,99L737,103L745,103L749,99L746,96L754,93L758,86L761,86L763,84L764,82L760,76L762,75L763,71L768,67L766,65L767,62L760,59L757,48L752,48L749,51L743,52L739,49L741,43L737,39L734,41L732,39Z",cx:737,cy:73},{d:"M368,155L413,163L432,135L427,135L421,126L418,126L416,123L409,120L408,125L402,134L394,130L380,139L375,144L363,144L362,147Z",cx:403,cy:141},{d:"M509,137L563,149L571,111L534,83L533,86L528,86L522,91L522,97L517,100L514,107L508,109L505,113L501,129Z",cx:536,cy:121},{d:"M574,163L581,166L581,162L584,160L585,153L592,158L594,157L596,154L598,155L601,161L608,160L620,167L644,167L647,159L652,154L649,151L654,149L631,94L615,89L571,111L563,149Z",cx:607,cy:130},{d:"M711,57L666,55L652,61L631,94L654,149L657,149L659,145L664,147L669,137L672,136L672,134L677,134L685,129L691,129L694,116L699,118L705,115L710,105L712,106Z",cx:673,cy:100},{d:"M342,217L370,196L368,155L362,147L359,150L355,151L353,155L344,157L343,161L340,161L339,163L340,169L344,175L343,187L346,195L346,199L342,203L334,205L330,207Z",cx:357,cy:181},{d:"M413,223L422,214L427,189L413,163L368,155L370,196Z",cx:395,cy:176},{d:"M427,189L456,175L455,173L447,171L442,164L447,160L446,154L443,151L441,141L433,134L413,163Z",cx:430,cy:161},{d:"M422,214L473,222L482,213L484,201L469,181L459,179L456,175L427,189Z",cx:453,cy:195},{d:"M501,129L501,132L495,139L495,143L491,149L489,161L482,169L481,173L483,177L477,176L469,181L484,201L511,176L509,137Z",cx:498,cy:165},{d:"M482,213L537,229L536,224L539,224L540,200L511,176L484,201Z",cx:511,cy:207},{d:"M563,149L509,137L511,176L540,200L574,163Z",cx:539,cy:170},{d:"M574,163L540,200L539,224L544,229L549,230L551,228L559,233L563,230L572,232L577,222L580,221L579,217L581,212L578,200L579,192L573,186L575,178L583,168L581,166Z",cx:561,cy:196},{d:"M309,273L312,272L343,242L342,217L330,207L326,208L324,211L318,214L312,213L311,216L303,220L295,229L297,235L292,238L289,243L283,243L282,244L282,250Z",cx:317,cy:240},{d:"M343,242L390,255L408,246L413,223L370,196L342,217Z",cx:377,cy:232},{d:"M418,256L477,267L473,222L422,214L413,223L408,246Z",cx:442,cy:234},{d:"M482,213L473,222L477,267L479,271L483,265L482,262L486,261L488,256L493,249L493,245L495,242L505,236L508,237L517,233L524,233L528,237L533,238L536,236L537,229Z",cx:484,cy:243},{d:"M257,325L295,313L309,273L282,250L283,253L276,256L277,267L273,273L271,272L268,276L265,276L263,282L260,284L255,279L248,281L247,283L241,283L237,292L229,299L229,300Z",cx:271,cy:288},{d:"M312,272L371,303L373,302L390,255L343,242Z",cx:359,cy:287},{d:"M373,302L429,308L418,256L408,246L390,255Z",cx:402,cy:279},{d:"M431,310L433,307L451,299L456,294L463,295L465,294L464,285L467,275L472,274L477,275L479,271L477,267L418,256L429,308Z",cx:444,cy:280},{d:"M78,418L126,390L119,355L109,361L103,361L98,366L92,368L88,366L86,368L79,366L72,369L76,381L73,385L72,396L64,408Z",cx:99,cy:387},{d:"M126,390L139,400L180,390L174,346L166,351L160,350L159,356L146,362L135,360L130,356L125,354L119,355Z",cx:151,cy:376},{d:"M214,404L223,364L183,331L177,332L175,336L176,341L174,346L180,390Z",cx:199,cy:377},{d:"M223,364L252,340L257,325L229,300L225,303L219,303L217,306L217,318L213,320L210,320L210,317L207,315L204,315L204,308L200,308L196,305L195,302L194,302L190,306L193,306L194,313L190,313L185,317L185,323L181,324L183,331Z",cx:221,cy:336},{d:"M215,406L270,404L280,387L252,340L223,364L214,404Z",cx:247,cy:375},{d:"M252,340L280,387L319,371L331,357L295,313L257,325Z",cx:291,cy:348},{d:"M331,357L362,355L371,303L312,272L309,273L295,313Z",cx:339,cy:334},{d:"M325,413L333,406L349,403L360,398L372,377L378,373L384,371L362,355L331,357L319,371Z",cx:344,cy:387},{d:"M362,355L384,371L391,366L397,364L405,354L409,353L419,354L423,344L424,338L422,336L424,323L431,310L429,308L373,302L371,303Z",cx:394,cy:337},{d:"M49,467L78,419L64,408L46,429L32,434L36,447L25,463L26,465Z",cx:49,cy:441},{d:"M73,489L107,458L78,419L49,467Z",cx:80,cy:438},{d:"M78,419L107,458L113,458L146,438L139,400L126,390Z",cx:115,cy:428},{d:"M189,463L208,446L215,406L214,404L180,390L139,400L146,438Z",cx:178,cy:422},{d:"M275,470L279,459L275,452L279,449L281,445L289,442L270,404L215,406L208,446Z",cx:246,cy:424},{d:"M270,404L289,442L292,429L288,424L289,419L297,420L303,416L314,422L318,418L320,414L325,413L319,371L280,387Z",cx:299,cy:409},{d:"M16,533L27,521L35,526L33,524L38,520L38,517L50,520L52,518L54,520L66,516L74,495L73,489L49,467L26,465L26,468L28,470L27,472L29,472L32,478L28,479L27,482L27,483L29,482L31,483L29,486L24,489L23,488L19,492L8,527L10,536Z",cx:42,cy:505},{d:"M74,495L122,511L131,492L113,458L107,458L73,489Z",cx:106,cy:474},{d:"M125,525L140,533L145,529L150,519L155,515L162,513L170,507L177,505L186,498L192,499L186,481L131,492L122,511Z",cx:145,cy:509},{d:"M131,492L186,481L189,463L146,438L113,458Z",cx:154,cy:472},{d:"M189,463L186,481L192,499L195,499L201,497L207,498L211,494L218,494L222,497L221,502L223,510L260,512L275,479L270,476L275,470L208,446Z",cx:231,cy:480},{d:"M337,526L382,512L380,510L378,504L373,504L366,506L358,491L351,491L347,488L347,486L341,486L331,474L329,474L320,479Z",cx:344,cy:497},{d:"M92,552L66,516L54,520L56,521L58,520L61,522L63,521L65,524L66,529L64,533L64,538L44,544L40,547L40,551L34,556L39,556L41,554L47,556L48,560L54,557L61,561L67,560L73,563L81,562L86,566L84,568L90,572Z",cx:64,cy:545},{d:"M66,516L92,552L125,525L122,511L74,495Z",cx:97,cy:521},{d:"M92,552L91,573L94,573L101,578L111,570L116,568L122,560L127,558L127,554L130,552L137,535L140,533L125,525Z",cx:118,cy:543},{d:"M212,565L272,545L260,512L223,510L221,516L225,520L222,523L221,531L224,536L223,539L225,546L222,552L207,559L206,561Z",cx:246,cy:537},{d:"M268,595L289,615L318,606L327,587L322,549L275,548Z",cx:298,cy:568},{d:"M275,548L322,549L330,541L337,526L320,479L317,486L303,492L298,491L293,489L289,484L275,479L260,512L272,545Z",cx:298,cy:519},{d:"M322,549L327,587L384,599L389,596L403,580L330,541Z",cx:349,cy:564},{d:"M337,526L330,541L403,580L407,578L409,571L408,568L414,561L416,555L415,553L418,548L415,548L406,541L407,537L404,530L394,522L392,519L385,515L382,512Z",cx:373,cy:545},{d:"M229,608L212,565L206,561L195,573L190,576L181,591L177,609L179,625L182,629L192,622L202,621L209,624L212,622L217,621L219,623L222,622Z",cx:203,cy:600},{d:"M229,608L268,595L275,548L272,545L212,565Z",cx:244,cy:580},{d:"M289,615L268,595L229,608L222,622L229,626L237,633L251,638L257,642L263,639L267,640L269,638L273,638L276,639L279,644L284,644Z",cx:256,cy:618},{d:"M318,606L289,615L284,644L294,652L298,652L308,648L320,652L329,644L337,640L346,641Z",cx:311,cy:627},{d:"M327,587L318,606L346,641L347,638L352,639L358,633L362,635L368,633L370,630L370,613L372,609L372,602L376,599L382,602L384,599Z",cx:350,cy:621}]},
    "Bo'ka tumani": {w:776,h:700,o:"M8,525L18,513L58,489L78,472L83,456L94,441L97,424L112,418L142,412L159,401L173,387L191,383L196,374L197,354L208,344L203,338L196,335L164,345L149,341L125,350L105,338L105,318L118,308L149,295L190,270L186,261L175,254L174,241L163,244L156,236L157,216L165,208L185,197L192,170L198,162L220,171L224,166L226,142L235,127L246,116L246,111L242,109L245,101L281,81L287,65L284,55L276,45L314,47L353,40L385,23L397,10L438,8L439,19L438,26L424,32L417,40L418,45L426,53L432,53L445,59L453,55L454,51L462,48L468,48L475,53L480,62L484,66L477,122L592,119L594,135L625,132L621,121L638,114L638,110L647,102L658,86L668,85L676,96L675,104L697,105L701,109L703,121L694,131L681,141L672,152L667,168L661,172L646,172L639,214L632,226L618,227L615,229L614,259L608,270L611,278L621,281L634,278L651,257L659,256L670,259L680,272L687,277L698,281L691,303L692,317L720,315L749,306L755,307L759,310L759,316L764,321L768,329L759,340L765,353L761,357L746,357L743,359L746,367L752,372L746,374L739,372L735,378L733,383L735,399L734,408L721,408L711,417L711,423L700,429L703,441L705,444L710,447L711,452L699,452L691,453L690,455L691,459L698,467L693,476L684,482L687,495L675,492L676,512L670,520L670,526L676,541L685,543L687,545L686,548L673,554L650,554L649,566L646,574L650,578L652,588L613,609L601,606L580,607L569,611L557,613L544,618L530,619L526,621L513,624L499,631L493,639L485,643L481,644L473,642L448,649L433,658L411,659L386,673L375,683L333,671L327,675L307,693L300,677L296,660L285,647L288,629L222,615L218,605L210,598L198,600L194,592L179,577L162,575L151,570L123,577L105,585L93,586L81,586L67,583L61,580L57,574L57,569L90,535L94,523L92,519L85,514L70,511L52,516L44,522L21,525Z",c:[{d:"M329,73L412,82L437,55L432,53L426,53L418,45L417,40L424,32L438,26L439,19L438,8L397,10L385,23L353,40L314,47L305,47Z",cx:378,cy:43},{d:"M235,185L325,137L329,73L305,47L276,45L284,55L287,65L281,81L245,101L242,109L246,111L246,116L235,127L226,142L224,166L220,171L211,167Z",cx:286,cy:113},{d:"M391,179L414,175L412,82L329,73L325,137Z",cx:370,cy:110},{d:"M430,183L537,147L540,121L477,122L484,66L480,62L475,53L468,48L462,48L454,51L453,55L445,59L437,55L412,82L414,175Z",cx:446,cy:101},{d:"M657,172L661,172L667,168L672,152L681,141L694,131L703,121L701,109L697,105L675,104L676,96L668,85L658,86L647,102L640,108Z",cx:672,cy:126},{d:"M259,230L346,223L391,179L325,137L235,185Z",cx:314,cy:182},{d:"M537,147L567,192L640,207L646,172L657,172L640,108L638,110L638,114L621,121L625,132L594,135L592,119L540,121Z",cx:599,cy:159},{d:"M253,277L255,273L259,230L235,185L211,167L198,162L192,170L185,197L165,208L157,216L156,236L163,244L174,241L175,254L186,261L190,270L149,295L118,308L111,313Z",cx:208,cy:238},{d:"M340,308L372,287L346,223L259,230L255,273Z",cx:308,cy:252},{d:"M346,223L372,287L435,298L456,280L430,183L414,175L391,179Z",cx:403,cy:251},{d:"M456,280L520,287L567,192L537,147L430,183Z",cx:494,cy:236},{d:"M520,287L524,291L555,305L635,281L638,273L634,278L621,281L611,278L608,270L614,259L615,229L618,227L632,226L639,214L640,207L567,192Z",cx:578,cy:244},{d:"M635,281L667,371L750,370L746,367L743,359L746,357L761,358L765,353L759,340L768,328L764,321L759,316L759,310L755,307L749,306L720,315L692,317L691,303L698,281L680,272L670,259L659,256L651,257L638,273Z",cx:669,cy:313},{d:"M105,331L125,350L149,341L164,345L196,335L203,338L208,344L197,354L196,374L191,383L173,387L169,391L206,392L253,326L253,277L111,313L105,318Z",cx:178,cy:333},{d:"M253,437L336,397L253,326L206,392Z",cx:261,cy:359},{d:"M253,277L253,326L336,397L339,394L340,308L255,273Z",cx:316,cy:360},{d:"M339,394L393,389L423,367L435,298L372,287L340,308Z",cx:384,cy:337},{d:"M423,367L499,407L508,399L524,291L520,287L456,280L435,298Z",cx:473,cy:333},{d:"M508,399L610,390L555,305L524,291Z",cx:549,cy:348},{d:"M610,390L623,397L667,371L635,281L555,305Z",cx:616,cy:338},{d:"M133,500L168,393L159,401L142,412L112,418L97,424L94,441L83,456L79,469L121,504Z",cx:119,cy:449},{d:"M339,394L335,398L350,479L429,502L439,496L393,389Z",cx:378,cy:439},{d:"M393,389L439,496L465,493L496,473L499,407L423,367Z",cx:456,cy:440},{d:"M667,371L623,397L619,435L644,491L675,495L675,492L687,495L684,482L693,476L698,467L691,459L690,455L691,453L712,452L710,446L705,444L703,441L700,429L711,423L711,417L721,408L734,408L735,399L733,383L735,378L739,372L746,374L752,372L750,370Z",cx:660,cy:432},{d:"M119,507L121,504L79,469L78,472L58,489L18,513L8,525L21,525L44,522L52,516L70,511L85,514L92,519L93,522Z",cx:79,cy:496},{d:"M133,500L157,507L242,487L250,478L253,437L206,392L169,391Z",cx:199,cy:458},{d:"M253,437L250,478L320,509L350,479L335,398Z",cx:299,cy:458},{d:"M499,407L496,473L526,482L619,435L623,397L610,390L508,399Z",cx:539,cy:454},{d:"M563,529L634,507L644,491L619,435L526,482Z",cx:586,cy:486},{d:"M119,507L93,522L90,535L57,569L57,574L61,580L67,583L93,586L105,585L120,578Z",cx:97,cy:552},{d:"M119,507L120,578L147,571L154,571L162,575L180,577L194,591L200,573L157,507L133,500L121,504Z",cx:149,cy:539},{d:"M157,507L200,573L250,560L242,487Z",cx:211,cy:533},{d:"M242,487L250,560L297,592L325,571L320,509L250,478Z",cx:285,cy:534},{d:"M325,571L395,578L429,502L350,479L320,509Z",cx:367,cy:540},{d:"M427,634L496,573L465,493L439,496L429,502L395,578Z",cx:448,cy:537},{d:"M465,493L496,573L557,590L563,529L526,482L496,473Z",cx:524,cy:551},{d:"M570,611L589,606L601,606L613,609L639,595L634,507L563,529L557,590Z",cx:598,cy:560},{d:"M644,491L634,507L639,595L652,588L650,578L646,574L649,566L650,554L673,554L686,548L687,545L685,543L676,541L670,526L670,520L676,512L675,495Z",cx:658,cy:542},{d:"M194,591L198,600L210,598L218,605L222,615L285,628L289,623L297,592L250,560L200,573Z",cx:246,cy:595},{d:"M289,623L379,679L386,673L411,659L430,658L427,634L395,578L325,571L297,592Z",cx:361,cy:628},{d:"M557,590L496,573L427,634L430,658L433,658L448,649L468,643L473,642L481,644L485,643L493,639L499,631L513,624L526,621L530,619L544,618L557,613L570,611Z",cx:499,cy:615},{d:"M289,623L285,628L288,629L285,647L296,660L300,677L307,693L333,671L375,683L379,679Z",cx:314,cy:653}]},
    "Chinoz tumani": {w:776,h:727,o:"M8,582L16,589L28,589L32,588L42,578L66,545L90,529L97,528L108,532L107,524L120,521L130,516L136,517L138,514L148,518L154,515L169,522L189,509L204,506L204,508L208,507L217,500L218,495L222,492L227,495L226,489L231,487L235,478L238,477L237,480L240,480L239,477L237,474L238,471L244,476L248,473L256,471L254,468L256,463L251,462L255,454L252,453L254,448L252,445L255,443L258,443L260,435L268,434L267,426L276,424L272,419L269,419L270,414L267,412L263,406L265,404L269,404L270,401L273,405L276,401L282,397L272,392L272,390L276,388L275,382L270,385L269,380L264,381L266,378L265,374L251,399L240,398L218,371L193,329L176,323L175,318L193,272L203,255L255,203L294,153L337,112L350,97L359,90L371,78L379,66L380,55L389,58L405,50L436,27L455,11L462,10L465,8L481,30L482,34L495,41L494,54L485,58L490,88L479,116L481,135L491,162L490,181L480,197L502,197L554,184L621,264L686,204L729,187L736,206L704,227L706,240L704,262L710,272L726,286L760,302L754,323L755,330L765,341L767,346L751,370L737,386L728,415L722,423L726,431L733,434L735,446L740,454L748,459L768,465L761,470L755,477L749,481L739,480L730,482L717,475L697,481L692,480L690,477L688,477L684,477L678,484L672,479L669,480L669,491L664,492L660,489L650,497L654,512L649,517L646,525L636,533L624,531L616,534L610,533L604,535L595,533L589,544L585,544L582,541L583,535L581,529L579,527L575,527L572,527L557,541L552,548L549,549L544,548L539,543L532,541L531,542L530,544L533,555L532,560L527,559L519,554L512,554L509,561L509,569L502,574L494,586L486,589L480,581L477,582L471,587L470,591L474,599L472,604L467,603L458,598L455,598L452,600L451,602L454,612L436,612L433,609L430,609L426,611L425,614L417,615L413,620L407,622L397,622L390,630L379,630L373,638L368,635L362,639L346,638L339,641L337,643L336,649L325,669L315,674L303,674L292,678L280,687L272,703L265,706L257,703L250,689L242,686L228,692L219,698L197,702L169,716L156,720L126,701L120,690L118,674L115,670L109,663L92,656L69,653L64,649L54,632L46,630L42,628L39,623L20,605Z",c:[{d:"M374,119L482,110L484,105L403,52L389,58L380,55L379,66L371,78L357,91Z",cx:408,cy:84},{d:"M484,105L490,88L485,58L494,54L495,41L482,34L481,30L465,8L455,11L436,27L403,52Z",cx:449,cy:56},{d:"M341,177L369,155L374,119L357,91L350,97L337,112L296,152Z",cx:342,cy:135},{d:"M431,187L480,129L479,116L482,110L374,119L369,155Z",cx:420,cy:142},{d:"M309,249L341,211L341,177L296,152L257,200L294,247Z",cx:304,cy:189},{d:"M341,211L393,229L429,210L431,187L369,155L341,177Z",cx:386,cy:198},{d:"M429,210L447,229L507,230L542,187L502,197L480,197L490,181L491,162L481,135L480,129L431,187Z",cx:467,cy:171},{d:"M253,278L294,247L257,200L202,256Z",cx:255,cy:224},{d:"M330,283L388,274L393,229L341,211L309,249Z",cx:355,cy:239},{d:"M388,274L406,291L446,287L447,229L429,210L393,229Z",cx:418,cy:252},{d:"M462,300L509,270L507,230L447,229L446,287Z",cx:477,cy:250},{d:"M509,270L571,309L561,192L554,184L542,187L507,230Z",cx:537,cy:250},{d:"M571,309L584,310L620,262L561,192Z",cx:577,cy:227},{d:"M703,294L723,284L710,272L704,262L706,240L704,227L736,206L729,187L686,204L639,246Z",cx:674,cy:243},{d:"M249,336L253,278L202,256L193,272L175,318L176,323L193,329L203,345Z",cx:217,cy:298},{d:"M249,336L284,356L329,310L330,283L309,249L294,247L253,278Z",cx:290,cy:296},{d:"M329,310L385,347L406,291L388,274L330,283Z",cx:375,cy:328},{d:"M446,287L406,291L385,347L389,356L426,361L468,328L462,300Z",cx:431,cy:314},{d:"M499,349L554,329L570,309L509,270L462,300L468,328Z",cx:513,cy:305},{d:"M691,313L703,294L639,246L621,264L620,262L584,310L638,344Z",cx:644,cy:302},{d:"M293,383L284,356L249,336L203,345L218,371L240,398L251,399L265,374L266,378L264,381L269,380L270,385L275,382L276,388L272,390L272,392L282,396Z",cx:250,cy:364},{d:"M293,383L330,400L369,389L389,356L385,347L329,310L284,356Z",cx:338,cy:352},{d:"M464,439L496,410L499,349L468,328L426,361Z",cx:468,cy:386},{d:"M496,410L564,413L554,329L499,349Z",cx:529,cy:379},{d:"M564,413L574,420L579,419L638,346L638,344L584,310L570,309L554,329Z",cx:585,cy:380},{d:"M579,419L648,443L666,403L638,346Z",cx:633,cy:375},{d:"M638,344L666,403L729,399L691,313Z",cx:684,cy:371},{d:"M703,294L691,313L729,399L733,401L737,386L767,346L765,341L755,330L754,323L760,302L723,284Z",cx:735,cy:344},{d:"M277,484L328,487L336,474L330,400L293,383L282,396L282,397L268,413L270,414L269,419L272,419L276,424L267,426L268,434L260,435L258,443L255,443L252,446L254,447L253,450Z",cx:296,cy:439},{d:"M336,474L417,450L369,389L330,400Z",cx:365,cy:425},{d:"M417,450L438,457L459,451L464,439L426,361L389,356L369,389Z",cx:420,cy:414},{d:"M656,466L679,483L684,477L690,477L694,480L699,480L730,432L726,431L722,423L728,415L733,401L729,399L666,403L648,443Z",cx:688,cy:437},{d:"M239,547L277,484L253,450L252,453L255,454L251,462L256,463L254,468L256,471L248,473L244,476L238,471L237,474L239,477L240,480L237,480L238,477L235,478L231,487L226,489L227,495L222,492L218,495L217,500L208,507L200,507Z",cx:243,cy:498},{d:"M328,487L338,509L378,531L412,517L438,457L417,450L336,474Z",cx:377,cy:498},{d:"M464,439L459,451L485,478L560,496L574,420L564,413L496,410Z",cx:519,cy:464},{d:"M573,515L656,466L648,443L579,419L574,420L560,496Z",cx:596,cy:481},{d:"M656,466L573,515L574,527L579,527L583,535L582,541L583,543L589,544L595,533L604,535L610,533L616,534L624,531L636,533L646,525L649,517L653,513L654,509L650,497L660,489L664,492L669,491L669,480L672,479L676,484L679,483Z",cx:622,cy:503},{d:"M699,480L717,475L730,482L739,480L749,481L755,477L761,470L768,465L748,459L740,454L735,446L733,434L730,432Z",cx:729,cy:456},{d:"M95,578L105,531L94,528L68,543L53,561Z",cx:80,cy:552},{d:"M99,586L163,569L149,518L138,514L136,517L130,516L120,521L107,524L108,532L105,531L95,578Z",cx:129,cy:551},{d:"M163,569L176,577L240,567L239,547L200,507L189,509L169,522L154,515L149,518Z",cx:190,cy:534},{d:"M244,571L309,564L338,509L328,487L277,484L239,547L240,567Z",cx:289,cy:528},{d:"M309,564L351,606L378,583L378,531L338,509Z",cx:348,cy:548},{d:"M378,583L474,600L474,599L470,591L473,585L412,517L378,531Z",cx:413,cy:557},{d:"M438,457L412,517L473,585L475,583L485,478L459,451Z",cx:460,cy:550},{d:"M573,515L560,496L485,478L475,583L480,581L486,589L494,586L502,574L509,569L509,561L512,554L519,554L527,559L532,560L533,555L530,544L532,541L539,543L546,549L552,548L557,541L574,527Z",cx:523,cy:534},{d:"M94,624L99,586L95,578L53,561L42,578L32,588L28,589L16,589L8,582L20,605L39,623L42,628L54,632L64,649Z",cx:57,cy:597},{d:"M94,624L160,646L176,577L163,569L99,586Z",cx:133,cy:605},{d:"M160,646L173,662L223,641L245,579L244,571L240,567L176,577Z",cx:201,cy:610},{d:"M245,579L223,641L278,690L284,683L297,675L303,674L315,674L325,669Z",cx:253,cy:610},{d:"M244,571L245,579L325,669L336,649L337,643L344,639L351,606L309,564Z",cx:316,cy:623},{d:"M378,583L351,606L344,639L362,639L368,635L373,638L379,630L390,630L397,622L407,622L413,620L417,615L425,614L430,609L433,609L436,612L454,612L451,602L455,598L461,599L470,604L472,604L474,600Z",cx:389,cy:611},{d:"M172,662L160,646L94,624L64,649L69,653L92,656L109,663L115,670L118,674L121,694L126,701L131,705Z",cx:140,cy:666},{d:"M173,662L131,705L156,720L169,716L199,702Z",cx:170,cy:682},{d:"M173,662L199,702L219,698L228,692L242,686L250,689L257,703L265,706L272,703L278,690L223,641Z",cx:220,cy:674}]},
    "Qibray tumani": {w:719,h:916,o:"M58,689L88,717L99,720L108,718L116,706L119,704L137,706L162,696L170,700L174,697L176,699L178,699L179,703L183,701L193,718L194,735L188,746L240,741L273,739L286,736L293,732L297,737L293,741L287,756L283,762L259,781L253,791L235,803L230,810L222,813L221,817L213,827L190,849L159,886L147,896L146,903L150,907L169,906L172,908L181,896L191,889L196,880L208,868L218,853L226,837L229,833L229,829L234,824L242,818L250,814L251,812L255,811L261,802L281,792L311,768L363,708L369,698L365,695L371,684L364,674L372,666L386,654L395,652L398,644L396,640L398,636L413,611L427,599L452,567L459,561L474,559L492,510L506,452L512,435L525,420L530,425L532,424L538,415L543,414L545,412L546,413L554,404L549,400L544,406L540,405L537,405L539,400L543,396L545,391L559,387L558,380L553,375L547,366L540,366L539,365L540,360L542,357L540,354L536,353L535,334L540,324L544,324L545,316L570,278L567,262L568,258L558,244L558,234L567,227L586,227L607,217L677,133L697,102L700,77L700,63L712,50L704,34L698,8L692,11L689,22L685,25L677,25L673,31L673,42L669,45L665,45L662,42L657,42L645,51L635,48L633,51L619,44L610,50L605,60L601,60L599,62L595,58L584,59L578,62L569,59L557,63L539,74L523,73L519,76L507,99L503,105L487,117L478,121L454,144L453,153L446,170L437,175L438,181L434,193L431,198L429,199L428,207L424,212L420,212L414,216L412,223L398,227L395,230L393,238L395,252L412,263L412,270L376,283L335,317L309,310L304,310L294,290L284,286L272,271L264,271L259,277L248,282L236,299L220,331L187,365L173,400L177,408L216,419L230,430L230,433L235,438L236,441L241,441L250,437L257,441L262,440L268,475L266,477L266,481L270,482L272,484L266,490L258,494L255,494L253,491L248,491L241,492L231,498L229,496L214,495L212,491L207,491L201,494L196,499L192,521L164,528L132,530L135,533L115,537L100,543L90,549L88,551L89,556L85,559L87,563L86,569L88,576L83,578L81,584L77,587L71,587L70,597L29,596L25,602L24,599L21,601L18,604L18,609L14,615L12,614L13,623L10,626L12,629L8,634L14,638L15,642L29,644L33,641L39,644L42,643L49,645L53,644L52,639L54,635L66,635L70,638L70,640L66,641L64,639L61,648L65,648L66,650L71,650L71,661L80,659L85,662L75,678L67,685Z",c:[{d:"M558,102L624,100L638,83L626,47L621,44L617,45L610,50L605,60L599,62L595,58L584,59L578,62L569,59L557,63L539,74L527,74Z",cx:591,cy:68},{d:"M638,83L697,101L700,77L700,63L712,50L704,34L698,8L692,11L689,22L685,25L677,25L673,31L673,42L669,45L657,42L645,51L635,48L633,51L626,47Z",cx:667,cy:57},{d:"M518,184L528,158L505,103L487,117L478,121L462,137L491,183L510,188Z",cx:496,cy:148},{d:"M558,102L527,74L519,76L505,103L528,158L564,141Z",cx:537,cy:122},{d:"M564,141L599,163L616,147L624,100L558,102Z",cx:591,cy:121},{d:"M638,83L624,100L616,147L654,160L677,133L697,101Z",cx:654,cy:117},{d:"M453,206L491,183L462,137L454,144L453,153L446,170L437,175L438,181L434,193L431,198L429,199L428,202Z",cx:463,cy:173},{d:"M592,208L599,163L564,141L528,158L518,184Z",cx:560,cy:173},{d:"M616,147L599,163L592,208L595,216L600,220L607,217L654,160Z",cx:614,cy:185},{d:"M476,278L483,277L453,206L428,202L428,207L424,212L420,212L414,216L412,223L398,227L395,230L393,238L395,252L407,260Z",cx:432,cy:245},{d:"M483,277L492,278L505,269L510,258L510,188L491,183L453,206Z",cx:487,cy:232},{d:"M505,269L564,287L570,278L567,262L568,258L558,244L558,234L510,258Z",cx:538,cy:260},{d:"M510,188L510,258L558,234L567,227L572,227L595,216L592,208L518,184Z",cx:547,cy:221},{d:"M249,324L275,315L290,288L284,286L272,271L264,271L259,277L248,282L242,290L229,314Z",cx:259,cy:302},{d:"M367,291L335,317L304,310L294,290L290,288L275,315L311,341L370,318Z",cx:296,cy:312},{d:"M370,318L377,328L432,330L476,278L407,260L412,263L412,270L376,283L367,291Z",cx:411,cy:305},{d:"M458,364L469,364L499,303L492,278L483,277L476,278L432,330Z",cx:468,cy:317},{d:"M492,382L542,357L540,354L536,353L536,345L499,303L469,364Z",cx:503,cy:324},{d:"M499,303L536,345L535,334L540,324L544,324L545,316L564,287L505,269L492,278Z",cx:527,cy:309},{d:"M249,324L229,314L220,331L188,364L206,382L256,374Z",cx:228,cy:347},{d:"M256,374L278,395L301,376L311,341L275,315L249,324Z",cx:280,cy:357},{d:"M301,376L365,388L378,368L377,328L370,318L311,341Z",cx:342,cy:354},{d:"M378,368L429,392L458,364L432,330L377,328Z",cx:411,cy:347},{d:"M206,382L188,364L181,378L173,400L177,408L207,416Z",cx:191,cy:391},{d:"M207,416L216,419L228,429L276,395L256,374L206,382Z",cx:234,cy:406},{d:"M281,480L297,428L278,395L276,395L228,429L236,441L241,441L250,437L257,441L262,440L262,447L267,466L268,475L266,477Z",cx:273,cy:439},{d:"M297,428L336,428L365,388L301,376L278,395Z",cx:317,cy:412},{d:"M281,480L288,491L353,467L355,462L336,428L297,428Z",cx:318,cy:445},{d:"M355,462L400,446L365,390L336,428Z",cx:363,cy:409},{d:"M378,368L365,390L400,446L429,454L433,453L439,444L429,392Z",cx:408,cy:418},{d:"M439,444L493,424L492,382L469,364L458,364L429,392Z",cx:462,cy:408},{d:"M487,466L509,434L517,429L538,399L536,394L552,376L541,383L541,386L537,389L538,390L535,393L524,384L525,382L523,380L520,386L506,389L498,394L486,406L478,408L461,417Z",cx:493,cy:423},{d:"M492,382L493,424L512,435L525,420L530,425L532,424L538,415L543,414L545,412L546,413L554,404L549,400L544,406L540,405L537,405L539,400L543,396L545,391L559,387L558,380L553,375L547,366L540,366L539,365L542,358Z",cx:517,cy:398},{d:"M288,491L291,506L360,518L369,510L353,467Z",cx:327,cy:498},{d:"M353,467L369,510L388,509L429,454L400,446L355,462Z",cx:382,cy:488},{d:"M388,509L420,541L439,529L441,467L433,453L429,454Z",cx:422,cy:488},{d:"M427,482L433,485L441,481L444,484L441,487L476,497L479,493L477,483L486,471L487,466L461,417L436,430L431,430L432,437L449,451L446,455L441,454L437,457L437,463L439,465L439,466L434,467L432,478Z",cx:460,cy:456},{d:"M439,529L483,536L495,499L441,467Z",cx:465,cy:514},{d:"M433,453L441,467L495,499L506,452L512,435L493,424L439,444Z",cx:471,cy:460},{d:"M192,556L233,549L212,491L207,491L201,494L196,499L192,521L164,528L139,529Z",cx:201,cy:524},{d:"M233,549L236,550L284,534L291,506L288,491L281,480L266,477L266,481L270,482L272,484L266,490L258,494L255,494L253,491L241,492L231,498L229,496L214,495Z",cx:255,cy:520},{d:"M294,549L352,575L360,518L291,506L284,534Z",cx:323,cy:541},{d:"M423,493L416,485L412,485L409,490L404,486L393,498L378,506L377,504L368,507L368,518L367,520L368,524L376,525L374,529L377,533L372,540L375,544L369,550L371,554Z",cx:384,cy:519},{d:"M372,609L403,615L420,541L388,509L369,510L360,518L352,575Z",cx:386,cy:558},{d:"M441,487L436,493L426,497L423,493L371,554L377,557L372,562L383,573L387,570L388,579L419,552L425,550L428,553L437,549L440,554L447,551L452,553L449,558L453,560L455,554L454,552L442,545L446,542L451,541L453,538L464,544L467,537L470,543L479,538L485,526L487,512L484,509L473,506L473,503L476,497Z",cx:436,cy:532},{d:"M103,638L105,623L59,598L29,596L25,602L24,599L21,601L18,604L18,609L14,615L12,614L13,623L10,626L12,629L8,634L14,638L15,642L29,644L33,641L49,645L53,644L52,639L54,635L66,635L70,638L70,640L66,641L64,639L61,648L65,648L66,650L71,650L72,656Z",cx:58,cy:625},{d:"M105,623L128,601L131,534L115,537L100,543L90,549L88,551L89,556L85,559L87,563L86,569L88,576L83,578L81,584L77,587L71,587L70,597L59,598Z",cx:107,cy:577},{d:"M171,617L193,605L192,556L139,529L132,530L135,533L131,534L128,601Z",cx:160,cy:578},{d:"M178,654L210,664L230,636L224,612L193,605L171,617Z",cx:200,cy:626},{d:"M193,605L224,612L240,595L236,550L233,549L192,556Z",cx:215,cy:576},{d:"M230,636L261,647L295,625L280,604L240,595L224,612Z",cx:258,cy:618},{d:"M240,595L280,604L294,549L284,534L236,550Z",cx:263,cy:573},{d:"M295,625L327,635L372,609L352,575L294,549L280,604Z",cx:323,cy:590},{d:"M439,529L420,541L403,615L408,619L413,611L434,591L454,565L459,561L474,559L483,536Z",cx:428,cy:578},{d:"M136,691L103,638L72,656L71,661L80,659L85,662L75,678L67,685L58,689L88,717L99,720L108,718L116,706L119,704L137,706Z",cx:100,cy:681},{d:"M103,638L136,691L178,654L171,617L128,601L105,623Z",cx:142,cy:646},{d:"M137,706L163,696L170,700L174,697L176,699L178,699L179,703L183,701L189,710L198,708L214,675L210,664L178,654L136,691Z",cx:178,cy:683},{d:"M214,675L262,693L261,647L230,636L210,664Z",cx:237,cy:670},{d:"M263,693L317,686L327,635L295,625L261,647Z",cx:291,cy:667},{d:"M327,635L317,686L319,690L362,710L369,698L365,695L371,684L364,674L372,666L386,654L395,652L398,644L396,640L408,619L403,615L372,609Z",cx:350,cy:660},{d:"M198,708L189,710L193,718L194,730L191,742L188,746L237,741Z",cx:205,cy:724},{d:"M198,708L237,741L245,741L252,735L262,693L214,675Z",cx:235,cy:722},{d:"M262,693L252,735L272,739L286,736L293,732L297,737L292,743L306,746L319,690L317,686Z",cx:286,cy:713},{d:"M319,690L306,746L317,761L362,710Z",cx:328,cy:728},{d:"M271,797L281,792L311,768L317,761L306,746L292,743L283,762L259,781L257,786Z",cx:285,cy:775},{d:"M257,786L253,791L235,803L230,810L224,812L213,827L199,841L216,857L229,833L229,829L234,824L242,818L250,814L251,812L255,811L261,802L271,797Z",cx:228,cy:821},{d:"M199,841L190,849L159,886L147,896L146,903L149,906L154,908L169,906L172,908L181,896L191,889L196,880L208,868L216,857Z",cx:186,cy:874}]},
    "Ohangaron tumani": {w:776,h:543,o:"M25,148L28,153L30,153L38,157L48,159L53,157L73,164L70,170L72,172L73,177L90,178L94,183L111,181L120,178L142,186L148,184L149,176L172,175L174,168L172,157L169,153L170,148L168,136L172,134L179,135L179,142L182,141L178,150L178,153L189,157L190,162L194,164L196,163L204,175L209,179L221,175L222,180L230,178L241,187L245,185L247,179L258,178L262,179L275,175L305,144L321,136L324,132L332,112L342,105L347,98L356,98L357,92L362,91L368,87L371,81L370,76L373,72L386,61L392,53L393,47L392,41L394,35L393,20L402,15L409,9L424,8L434,12L441,9L446,9L449,11L454,10L465,17L471,24L476,27L480,27L486,32L498,34L507,40L516,36L521,38L525,34L531,34L536,36L540,43L551,44L555,50L563,56L570,56L584,50L598,53L602,55L616,43L623,42L629,37L635,37L641,40L643,39L644,34L651,35L660,26L663,29L667,30L675,26L680,21L690,21L700,18L707,21L718,21L720,24L718,29L714,32L705,47L704,71L710,81L710,93L721,106L721,112L712,120L717,130L724,138L744,150L754,161L768,172L752,180L753,188L742,207L736,223L733,223L726,227L721,226L717,220L705,228L695,229L686,236L683,236L680,247L668,258L670,264L672,268L674,281L678,285L678,291L677,305L673,310L666,313L669,331L672,336L667,354L655,363L641,369L637,365L635,365L632,367L627,368L619,374L608,376L602,379L599,383L594,398L579,408L567,413L561,418L558,418L549,424L535,413L530,415L523,413L515,416L509,422L498,424L493,430L496,437L489,456L478,461L474,467L467,472L465,478L458,485L449,485L443,487L438,487L433,494L424,497L415,503L409,503L393,500L386,506L384,512L377,512L370,518L363,520L354,517L339,517L336,516L335,512L323,522L318,522L302,529L297,536L289,534L287,530L286,519L279,517L277,514L271,511L267,502L268,496L266,494L253,487L247,478L243,478L237,471L228,466L223,456L224,454L219,448L217,440L210,433L204,423L204,417L207,411L202,408L201,405L196,403L187,406L179,400L181,382L174,366L163,361L155,361L145,355L120,346L106,347L100,343L89,340L85,336L76,335L75,325L63,315L49,284L41,276L36,267L34,257L26,249L26,244L29,233L19,230L15,224L10,221L11,215L17,212L8,207L9,203L15,199L19,199L23,195L19,192L16,191L11,185L11,182L15,181L17,177L13,173L17,164L17,154Z",c:[{d:"M425,63L475,26L475,26L471,24L465,17L454,10L449,11L446,9L441,9L434,12L424,8L409,9L402,15L396,17L393,20L394,35L392,44L393,50Z",cx:425,cy:39},{d:"M435,113L486,157L516,143L531,34L525,34L521,38L516,36L507,40L498,34L486,32L475,26L425,63Z",cx:477,cy:88},{d:"M581,164L635,104L587,51L584,50L570,56L563,56L555,50L551,44L540,43L536,36L531,34L516,143Z",cx:569,cy:80},{d:"M635,104L665,76L663,29L660,26L651,35L644,34L642,39L639,40L632,37L623,42L616,43L602,55L598,53L587,51Z",cx:632,cy:65},{d:"M665,76L705,73L704,71L705,47L714,32L718,29L720,22L707,21L700,18L690,21L680,21L669,29L663,29Z",cx:686,cy:40},{d:"M348,150L435,113L425,63L393,50L386,61L370,76L371,81L368,87L357,92L356,98L347,98L342,105L332,112L324,132Z",cx:388,cy:102},{d:"M616,217L737,192L636,103L635,104L581,164L597,203Z",cx:639,cy:134},{d:"M665,76L636,103L737,192L749,195L753,188L752,180L768,172L754,161L744,150L730,142L717,130L712,120L721,112L721,106L710,93L710,81L705,73Z",cx:699,cy:136},{d:"M375,210L348,150L324,132L318,138L305,144L275,175L262,179L258,178L247,179L245,185L282,270L351,247Z",cx:310,cy:198},{d:"M375,210L461,212L486,157L435,113L348,150Z",cx:418,cy:184},{d:"M95,183L94,183L90,178L73,177L72,172L70,170L73,164L59,158L53,157L48,159L38,157L30,153L28,153L25,148L17,154L17,164L13,173L17,177L15,181L11,182L11,185L23,195L19,199L15,199L9,203L8,207L17,212L11,215L10,221L15,224L19,230L29,233L26,244L26,249L34,257L36,267L41,276L50,285Z",cx:45,cy:218},{d:"M50,285L58,305L160,283L156,176L149,176L148,184L142,186L120,178L111,181L95,183Z",cx:115,cy:234},{d:"M160,283L192,313L264,309L282,270L245,185L241,187L230,178L222,180L221,175L209,179L196,163L194,164L190,162L189,157L178,153L178,150L182,141L179,142L179,135L172,134L168,136L169,153L172,157L174,168L172,175L156,176Z",cx:211,cy:229},{d:"M351,247L390,301L489,287L461,212L375,210Z",cx:424,cy:267},{d:"M489,287L495,293L597,203L581,164L516,143L486,157L461,212Z",cx:510,cy:250},{d:"M495,293L507,322L633,326L616,217L597,203Z",cx:580,cy:255},{d:"M192,313L160,283L58,305L63,315L75,325L76,335L85,336L89,340L100,343L106,347L120,346L145,355L155,361L163,361L169,364Z",cx:129,cy:320},{d:"M358,365L368,363L390,301L351,247L282,270L265,308Z",cx:328,cy:304},{d:"M737,192L616,217L633,326L667,351L672,336L669,331L666,313L673,310L677,305L678,291L678,285L674,281L672,268L668,258L680,247L683,236L686,236L695,229L705,228L717,220L721,226L726,227L733,223L736,223L742,207L749,195Z",cx:649,cy:274},{d:"M169,364L174,366L181,382L179,400L187,406L196,403L201,405L202,408L207,411L204,417L204,423L210,433L215,438L258,421L264,309L192,313Z",cx:219,cy:374},{d:"M368,363L401,379L500,344L507,322L495,293L489,287L390,301Z",cx:441,cy:333},{d:"M633,326L507,322L500,344L512,419L521,413L530,415L535,413L549,424L594,398L599,383L608,376L619,374L627,368L632,367L635,365L637,365L641,369L655,363L667,354L667,351Z",cx:563,cy:371},{d:"M258,421L291,436L326,427L358,365L265,308L264,309Z",cx:301,cy:393},{d:"M326,427L370,465L416,453L419,449L401,379L368,363L358,365Z",cx:373,cy:403},{d:"M419,449L496,427L498,424L509,422L512,419L500,344L401,379Z",cx:457,cy:399},{d:"M291,436L258,421L215,438L219,448L223,451L223,456L228,466L237,471L243,478L247,478L253,487L266,494L267,502L271,511L277,514L279,517L286,519L287,530L290,535L295,535Z",cx:270,cy:478},{d:"M295,535L297,536L302,529L318,522L323,522L335,512L336,516L339,517L352,517L370,465L326,427L291,436Z",cx:327,cy:488},{d:"M416,453L370,465L352,517L363,520L370,518L377,512L384,512L386,506L393,500L414,503L418,501L424,497L433,495Z",cx:396,cy:480},{d:"M419,449L416,453L433,495L438,487L443,487L449,485L458,485L478,461L489,456L496,437L493,430L496,427Z",cx:451,cy:458}]},
    "Oqqo'rg'on tumani": {w:776,h:731,o:"M8,449L24,455L28,451L44,453L62,457L80,464L91,471L112,496L115,506L116,521L127,540L129,551L127,554L133,560L134,566L133,580L130,586L133,596L140,609L147,617L157,621L164,621L176,617L197,624L203,624L204,627L204,649L206,656L215,664L225,686L222,692L213,695L207,700L206,707L208,712L220,724L228,713L263,692L281,677L285,664L294,650L297,636L336,625L351,616L363,604L378,600L383,592L383,576L393,567L389,562L382,559L355,568L342,564L322,572L304,561L303,544L315,535L342,525L377,503L374,495L365,489L364,478L354,480L348,473L348,456L356,449L373,440L379,416L384,409L403,417L407,413L408,392L416,379L425,369L426,365L422,363L425,357L456,340L462,325L459,317L452,308L485,310L519,304L546,289L557,278L592,276L644,269L658,254L653,234L645,216L620,195L593,134L646,144L661,133L691,87L702,77L708,38L718,35L752,41L768,20L765,19L757,19L732,10L718,8L702,15L684,11L682,8L668,13L664,9L659,8L646,11L642,14L644,17L643,19L639,21L632,21L621,28L617,37L609,37L597,50L590,53L587,56L573,61L570,64L568,65L564,63L545,78L533,82L527,90L514,88L507,96L494,105L494,112L485,108L472,116L470,124L459,134L460,138L448,145L436,162L428,168L426,171L426,177L418,185L406,191L400,188L390,201L386,202L380,209L367,217L365,221L366,225L364,229L354,239L340,248L332,249L328,253L325,251L323,253L314,269L309,274L304,286L300,290L283,293L279,291L273,301L264,304L261,304L255,296L247,302L240,296L235,296L235,300L233,300L230,295L228,295L224,303L217,308L215,315L211,315L210,311L209,310L204,313L193,315L190,317L187,323L183,324L177,331L177,336L173,338L171,342L175,347L174,349L169,355L176,357L179,360L178,362L170,366L168,377L156,380L152,377L148,380L148,384L144,388L145,396L143,397L136,392L133,392L131,398L123,404L119,402L116,395L112,394L110,397L111,399L104,413L100,409L99,401L96,397L91,398L89,402L85,404L76,403L75,404L74,412L72,413L61,412L57,413L56,417L57,423L55,426L51,426L47,422L45,423L43,432L33,440L30,439L24,446L16,445L12,448Z",c:[{d:"M706,47L708,38L718,35L752,41L768,20L757,19L732,10L718,8L703,14L693,12Z",cx:731,cy:27},{d:"M569,99L637,108L637,21L632,21L621,28L617,37L609,37L593,52L573,61L570,64L568,65L564,63L549,75Z",cx:603,cy:65},{d:"M662,131L691,87L702,77L706,47L693,12L684,11L682,8L668,13L664,9L659,8L646,11L642,14L644,17L643,19L637,21L637,108Z",cx:671,cy:62},{d:"M541,175L569,99L549,75L545,78L533,82L527,90L514,88L507,96L494,105L494,112L485,108L475,115L510,171Z",cx:523,cy:143},{d:"M471,205L510,171L475,115L472,116L470,124L459,134L460,138L448,145L436,162L426,171L426,177Z",cx:470,cy:153},{d:"M566,200L618,191L593,134L646,144L662,131L637,108L569,99L541,175Z",cx:575,cy:159},{d:"M397,255L469,230L471,205L426,177L411,189L406,191L400,188L390,201L386,202L380,209L367,217L365,223L366,225L362,231Z",cx:422,cy:213},{d:"M469,230L493,266L556,246L566,200L541,175L510,171L471,205Z",cx:516,cy:217},{d:"M566,200L556,246L578,277L617,273L644,269L658,254L653,234L645,216L628,203L620,195L618,191Z",cx:606,cy:240},{d:"M214,340L288,395L328,374L342,338L307,276L304,286L300,290L283,293L279,291L273,301L264,304L261,304L255,296L247,302L240,296L235,296L235,300L233,300L230,295L228,295L224,303L217,308L215,315L211,315L210,310L205,312Z",cx:273,cy:327},{d:"M411,287L397,255L362,231L351,241L340,248L332,249L328,253L325,251L323,253L314,269L307,276L342,338L391,335Z",cx:359,cy:282},{d:"M493,266L469,230L397,255L411,287L483,306Z",cx:448,cy:276},{d:"M556,246L493,266L483,306L484,310L519,304L546,289L557,278L578,277Z",cx:529,cy:278},{d:"M126,413L189,414L214,340L205,312L193,315L177,331L177,336L173,338L171,342L175,347L174,349L169,355L176,357L178,362L170,366L168,377L156,380L152,377L148,380L148,384L144,388L145,396L143,397L136,392L132,392L131,398L123,404Z",cx:190,cy:364},{d:"M378,421L384,409L403,417L407,413L408,392L416,379L425,370L391,335L342,338L328,374Z",cx:375,cy:377},{d:"M391,335L425,370L426,365L422,363L425,357L456,340L462,325L459,317L452,308L484,310L483,306L411,287Z",cx:426,cy:330},{d:"M26,454L28,451L37,452L111,438L126,413L123,404L119,402L114,394L111,395L111,399L104,413L100,409L99,401L96,397L91,398L89,402L85,404L76,403L75,404L74,412L72,413L61,412L57,413L56,417L57,423L55,426L51,426L47,422L45,423L43,432L33,440L30,439L24,446L16,445L12,448L8,449L23,455Z",cx:87,cy:424},{d:"M148,491L169,496L203,455L189,414L126,413L111,438Z",cx:158,cy:447},{d:"M203,455L280,467L288,395L214,340L189,414Z",cx:239,cy:404},{d:"M280,467L290,480L348,458L348,456L356,449L373,440L378,421L328,374L288,395Z",cx:330,cy:430},{d:"M148,491L111,438L37,452L62,457L86,467L91,471L112,496L114,505Z",cx:120,cy:481},{d:"M320,534L342,525L377,503L374,495L365,489L364,478L354,480L348,473L348,458L290,480L292,497Z",cx:333,cy:496},{d:"M192,574L169,496L148,491L114,505L116,521L127,540L129,551L127,554L133,560L134,566L133,580L130,586L133,596L140,610Z",cx:156,cy:545},{d:"M192,574L201,575L292,497L290,480L280,467L203,455L169,496Z",cx:214,cy:535},{d:"M217,588L315,605L327,570L322,572L304,561L303,544L320,534L292,497L201,575Z",cx:265,cy:553},{d:"M240,660L217,588L201,575L192,574L140,610L147,617L157,621L164,621L176,617L203,624L205,638L204,649L206,656L215,664L219,674Z",cx:212,cy:623},{d:"M240,660L282,673L285,664L294,650L297,636L322,628L315,605L217,588Z",cx:270,cy:632},{d:"M315,605L322,628L336,625L351,616L363,604L378,600L383,592L383,576L393,567L389,562L382,559L355,568L342,564L327,570Z",cx:349,cy:596},{d:"M240,660L219,674L225,684L225,688L222,692L211,696L206,703L206,707L208,712L220,724L228,713L263,692L281,677L282,673Z",cx:245,cy:690}]},
    "Parkent tumani": {w:776,h:778,o:"M105,155L87,186L78,193L67,207L50,241L52,248L59,249L81,229L95,225L97,227L79,235L75,242L76,243L69,249L67,253L58,260L58,263L54,266L57,271L56,274L60,274L63,281L66,280L73,287L66,296L71,312L75,314L69,322L69,325L62,319L52,320L51,322L47,323L45,337L37,338L35,341L35,342L37,343L56,346L45,372L44,386L41,394L41,403L35,420L34,428L30,436L20,448L16,462L16,479L13,478L10,488L11,494L8,496L13,506L19,504L26,509L29,504L30,502L27,502L29,496L33,496L36,500L37,499L43,500L48,493L49,501L67,537L70,539L73,539L85,535L100,535L112,530L133,524L138,526L144,532L144,547L141,554L145,563L148,565L154,565L153,568L149,571L147,575L138,583L136,584L131,590L132,618L137,624L141,621L149,619L157,620L165,618L169,619L173,616L174,617L163,626L158,638L129,642L104,643L94,649L86,674L91,673L91,676L83,680L100,697L119,700L132,700L132,696L170,668L175,668L184,664L198,665L198,679L204,678L194,697L196,703L218,710L220,720L229,725L233,722L236,729L248,747L258,756L265,756L269,751L284,747L286,756L302,753L324,771L332,768L335,755L359,752L368,755L394,747L455,684L481,672L488,667L494,659L510,617L519,610L530,604L542,590L559,589L562,578L568,575L572,576L584,568L590,554L588,545L595,536L614,522L622,515L633,498L636,485L633,478L633,473L637,460L634,447L636,438L634,431L627,424L623,417L623,406L620,396L623,381L620,369L626,353L625,331L632,314L644,296L659,265L664,260L676,257L680,249L706,224L712,213L718,208L737,205L744,200L759,193L768,173L766,160L760,151L764,140L754,127L753,116L758,102L766,95L768,90L765,85L756,80L761,57L760,48L755,35L758,19L751,12L743,8L724,11L720,17L712,24L704,25L694,20L675,28L662,25L655,28L647,24L643,31L634,32L628,40L622,41L619,46L614,45L597,52L589,60L585,62L580,62L570,70L561,69L550,75L533,88L532,96L511,129L495,138L481,169L482,172L472,191L464,195L462,199L462,210L457,213L446,216L440,222L437,231L429,234L427,240L412,246L383,272L374,263L362,255L350,258L347,256L345,249L330,240L329,236L333,237L335,234L333,232L329,232L319,222L294,225L285,219L275,216L258,218L253,214L251,214L242,209L235,208L216,215L214,214L214,210L212,209L213,204L203,198L201,202L194,197L191,196L188,204L177,203L174,205L173,204L192,187L194,175L204,165L209,166L215,164L217,160L220,160L236,154L247,151L255,154L261,153L263,150L265,149L268,139L266,131L271,126L274,119L270,115L271,104L265,95L259,98L255,93L249,90L247,94L242,95L230,86L224,92L215,91L205,85L187,82L185,92L183,94L179,94L171,103L171,105L176,109L166,106L154,93L152,93L149,98L144,101L130,116Z",c:[{d:"M586,146L645,128L614,45L611,46L562,134Z",cx:609,cy:87},{d:"M690,67L759,45L755,35L758,19L751,12L743,8L724,11L720,17L712,24L704,25L694,20L675,28L662,25L655,28L647,24L643,31L634,32L628,39Z",cx:693,cy:37},{d:"M180,190L193,182L194,175L196,173L196,150L150,97L133,112L116,138L143,180Z",cx:155,cy:144},{d:"M196,150L234,89L230,86L224,92L215,91L205,85L187,82L185,92L183,94L179,94L171,103L176,109L166,106L154,93L150,97Z",cx:193,cy:130},{d:"M196,173L204,165L209,166L215,164L217,160L220,160L236,154L247,151L255,154L261,153L263,150L265,149L268,139L266,131L271,126L274,119L270,115L271,104L265,95L259,98L255,93L249,90L247,94L242,95L234,89L196,150Z",cx:236,cy:135},{d:"M552,134L562,134L611,46L597,52L585,62L580,62L570,70L561,69L550,75L533,88L532,96L522,113Z",cx:559,cy:92},{d:"M645,128L671,138L690,67L628,39L622,41L619,46L614,45Z",cx:658,cy:98},{d:"M671,138L735,137L754,123L753,116L758,102L766,95L768,90L765,85L756,80L761,57L759,45L690,67Z",cx:725,cy:93},{d:"M143,180L116,138L87,186L78,193L67,207L60,220Z",cx:116,cy:159},{d:"M476,217L525,202L552,134L522,113L511,129L495,138L481,169L482,172L472,191L464,195L462,199L462,203Z",cx:516,cy:154},{d:"M525,202L583,240L617,231L586,146L562,134L552,134Z",cx:566,cy:174},{d:"M661,241L670,138L645,128L586,146L617,231Z",cx:634,cy:188},{d:"M670,138L661,241L677,255L680,249L706,224L712,213L718,208L738,204L735,137Z",cx:702,cy:171},{d:"M735,137L738,204L759,193L768,173L766,160L760,151L764,140L754,127L754,123Z",cx:752,cy:166},{d:"M76,233L81,229L95,225L97,227L79,235L131,266L166,253L177,203L174,205L173,204L178,199L180,190L143,180L60,220L59,223Z",cx:116,cy:224},{d:"M166,253L213,299L216,300L278,217L268,216L258,218L242,209L235,208L216,215L214,214L214,210L212,209L213,204L203,198L201,202L194,197L191,196L188,204L177,203Z",cx:217,cy:236},{d:"M248,334L272,339L309,326L286,220L278,217L216,300Z",cx:270,cy:260},{d:"M380,282L430,292L475,271L476,217L462,203L462,210L457,213L446,216L440,222L437,231L429,234L427,240L412,246L383,272L376,265Z",cx:439,cy:255},{d:"M491,285L551,288L583,240L525,202L476,217L475,271Z",cx:524,cy:256},{d:"M62,355L112,332L131,266L79,235L75,242L76,243L69,249L67,253L58,260L58,263L54,266L57,271L56,274L60,274L63,281L66,280L73,287L66,296L71,312L75,314L69,325L62,319L52,320L47,323L45,337L37,338L35,342L56,346L53,355Z",cx:97,cy:291},{d:"M156,344L213,299L166,253L131,266L112,332Z",cx:161,cy:283},{d:"M309,326L344,332L380,282L374,263L362,255L350,258L347,256L345,249L330,240L329,236L333,237L335,234L333,232L329,232L319,222L294,225L286,220Z",cx:337,cy:272},{d:"M349,342L412,374L434,351L430,292L380,282L344,332Z",cx:395,cy:312},{d:"M475,271L430,292L434,351L492,357L491,285Z",cx:462,cy:322},{d:"M551,288L571,332L632,314L644,296L659,265L664,260L676,257L677,255L661,241L617,231L583,240Z",cx:606,cy:277},{d:"M112,332L62,355L130,418L180,400L156,344Z",cx:128,cy:377},{d:"M156,344L180,400L198,407L248,334L216,300L213,299Z",cx:195,cy:372},{d:"M205,420L238,430L280,402L272,339L248,334L198,407Z",cx:249,cy:370},{d:"M280,402L317,420L335,415L349,342L344,332L309,326L272,339Z",cx:310,cy:372},{d:"M492,357L537,414L542,415L551,407L571,332L551,288L491,285Z",cx:530,cy:344},{d:"M551,407L621,393L623,381L620,369L626,353L625,331L632,314L571,332Z",cx:593,cy:361},{d:"M66,524L113,478L130,418L62,355L53,355L45,372L44,386L41,394L41,403L35,420L35,425L32,434L20,448L16,462L16,479L13,478L10,488L11,494L8,496L13,506L19,504L26,509L29,504L30,502L27,502L29,496L33,496L36,500L37,499L43,500L48,493L49,501L61,525Z",cx:75,cy:441},{d:"M130,418L113,478L185,469L205,420L198,407L180,400Z",cx:159,cy:445},{d:"M211,516L264,474L238,430L205,420L185,469Z",cx:221,cy:450},{d:"M385,449L417,406L412,374L349,342L335,415Z",cx:377,cy:390},{d:"M395,480L446,484L504,423L417,406L385,449L388,469Z",cx:443,cy:436},{d:"M417,406L504,423L537,414L492,357L434,351L412,374Z",cx:466,cy:390},{d:"M185,469L113,478L66,524L100,535L133,524L138,526L144,532L144,548L169,555L207,540L211,516Z",cx:147,cy:497},{d:"M207,540L222,550L296,540L303,533L302,496L289,481L264,474L211,516Z",cx:263,cy:506},{d:"M238,430L264,474L289,481L317,420L280,402Z",cx:277,cy:452},{d:"M317,420L289,481L302,496L388,469L385,449L335,415Z",cx:343,cy:459},{d:"M387,540L417,566L478,530L446,484L395,480Z",cx:427,cy:507},{d:"M478,530L505,537L557,455L542,415L537,414L504,423L446,484Z",cx:504,cy:470},{d:"M551,407L542,415L557,455L627,507L633,498L635,491L636,485L633,478L637,460L634,447L636,438L634,431L627,424L623,417L621,393Z",cx:595,cy:451},{d:"M303,533L359,551L387,540L395,480L388,469L302,496Z",cx:346,cy:514},{d:"M511,551L562,578L568,575L572,576L584,568L590,554L588,545L595,536L614,522L627,507L557,455L505,537Z",cx:570,cy:515},{d:"M169,555L144,548L141,554L145,563L148,565L154,565L153,568L149,571L147,575L138,583L136,584L131,590L132,618L137,624L141,621L149,619L157,620L165,618L170,619Z",cx:151,cy:587},{d:"M169,555L170,619L173,616L174,617L170,621L170,627L192,652L201,652L241,604L222,550L207,540Z",cx:201,cy:579},{d:"M241,604L282,612L296,602L296,540L222,550Z",cx:264,cy:576},{d:"M296,540L296,602L343,612L359,551L303,533Z",cx:324,cy:576},{d:"M343,612L353,625L399,620L421,585L417,566L387,540L359,551Z",cx:386,cy:576},{d:"M511,551L505,537L478,530L417,566L421,585L480,613Z",cx:459,cy:576},{d:"M511,551L480,613L494,658L510,617L519,610L530,604L542,590L559,589L562,578Z",cx:503,cy:607},{d:"M192,652L170,627L162,628L158,638L129,642L104,643L94,649L86,674L91,673L91,676L83,680L100,697L119,700L132,700L132,696L170,668L185,664Z",cx:140,cy:658},{d:"M269,696L201,652L192,652L185,664L198,665L198,679L204,678L194,697L196,703L218,710L220,720L229,725L233,722L243,739Z",cx:227,cy:687},{d:"M201,652L269,696L284,692L282,612L241,604Z",cx:250,cy:632},{d:"M284,692L321,700L337,694L353,625L343,612L296,602L282,612Z",cx:314,cy:658},{d:"M399,620L353,625L337,694L384,710L417,654Z",cx:373,cy:674},{d:"M417,654L492,662L494,658L480,613L421,585L399,620Z",cx:448,cy:637},{d:"M321,700L284,692L269,696L243,739L258,756L265,756L269,751L284,747L286,756L302,753L318,766Z",cx:287,cy:719},{d:"M384,710L337,694L321,700L318,766L324,771L332,768L335,755L359,752L368,755L394,747L405,735Z",cx:357,cy:723},{d:"M417,654L384,710L405,735L455,684L481,672L488,667L492,662Z",cx:417,cy:697}]},
    "Piskent tumani": {w:776,h:587,o:"M21,194L59,189L69,178L66,163L60,150L42,135L22,91L60,98L72,90L93,57L102,50L105,21L113,19L138,24L149,8L154,14L183,66L191,72L199,74L213,67L219,70L220,65L224,64L223,58L225,55L239,46L244,49L248,53L254,54L256,59L260,60L273,67L285,70L295,82L317,100L349,120L412,119L420,122L428,129L453,136L454,140L457,141L465,142L474,139L481,140L524,154L541,166L556,166L573,173L586,201L582,232L596,241L612,238L620,240L622,246L630,250L626,260L626,271L636,289L648,302L652,315L658,320L660,325L658,328L667,345L682,354L693,367L696,365L699,366L709,382L715,384L728,393L732,394L735,397L734,408L740,423L752,428L755,433L767,436L768,456L762,454L757,455L754,458L736,463L732,482L722,492L720,499L714,505L713,513L709,521L700,527L699,529L703,541L695,551L690,554L684,551L676,556L667,567L659,570L656,574L650,577L644,574L640,575L636,577L624,579L620,575L614,575L608,571L600,571L589,569L586,561L586,545L582,542L583,538L580,531L582,528L570,519L569,511L565,507L559,505L551,507L537,502L527,485L528,481L525,481L524,479L516,478L514,477L514,475L500,469L488,459L487,448L483,444L483,441L477,433L477,424L475,420L476,416L479,414L474,396L470,391L469,385L462,379L462,376L460,375L459,367L457,364L455,363L452,357L450,355L444,356L442,351L440,351L438,354L435,352L434,354L431,350L430,344L427,345L423,344L418,346L411,335L407,344L404,342L402,344L389,338L386,328L388,314L386,309L382,307L380,290L360,293L360,300L356,309L352,314L345,318L340,332L336,333L334,329L322,324L315,325L304,334L296,356L295,371L292,375L280,383L278,383L265,361L257,333L249,328L246,329L245,327L240,326L241,323L239,322L233,327L232,330L227,332L221,340L214,342L209,347L215,354L217,366L223,369L221,377L225,380L225,382L223,384L217,382L198,387L181,388L180,380L185,366L173,360L167,352L160,350L155,351L144,364L136,366L130,364L128,359L132,352L132,333L143,331L148,324L152,297L162,297L165,295L168,285L188,265L186,258L184,255L170,255L171,249L166,243L160,243L152,254L147,258L147,261L136,265L139,272L119,274L118,264L46,266L50,230L45,222L40,219L36,219L25,226L17,222L14,223L9,218L8,214L13,210L21,206Z",c:[{d:"M130,119L185,98L193,72L183,66L154,14L149,8L138,24L113,19L105,21L102,50L93,57L90,62Z",cx:136,cy:64},{d:"M107,156L130,119L90,62L72,90L60,98L22,91L42,135L60,150L65,161Z",cx:76,cy:109},{d:"M185,98L220,157L282,141L286,127L250,54L246,52L243,48L238,46L225,55L223,58L224,64L220,65L219,70L213,67L199,74L193,72Z",cx:236,cy:112},{d:"M286,127L319,102L295,82L285,70L273,67L260,60L256,59L254,54L250,54Z",cx:288,cy:92},{d:"M320,184L375,175L398,146L400,119L349,120L319,102L286,127L282,141Z",cx:341,cy:143},{d:"M54,266L118,265L165,223L107,156L65,161L69,178L62,186Z",cx:105,cy:204},{d:"M165,223L189,222L202,210L220,157L185,98L130,119L107,156Z",cx:171,cy:183},{d:"M202,210L299,228L320,184L282,141L220,157Z",cx:260,cy:197},{d:"M398,146L459,183L512,150L481,140L474,139L465,142L457,141L454,140L453,136L428,129L420,122L409,119L400,119Z",cx:459,cy:167},{d:"M469,243L527,240L536,234L530,158L512,150L459,183Z",cx:499,cy:209},{d:"M536,234L590,237L582,232L586,201L573,173L556,166L541,166L530,158Z",cx:556,cy:187},{d:"M62,186L59,189L21,194L21,206L13,210L8,214L9,218L14,223L17,222L25,226L36,219L40,219L45,222L50,230L46,266L54,266Z",cx:52,cy:224},{d:"M228,306L313,284L299,228L202,210L189,222Z",cx:255,cy:256},{d:"M299,228L313,284L317,286L395,245L375,175L320,184Z",cx:347,cy:236},{d:"M395,245L419,257L464,248L469,243L459,183L398,146L375,175Z",cx:425,cy:213},{d:"M228,306L189,222L165,223L118,265L119,274L139,272L136,265L147,261L147,258L152,254L160,243L166,243L171,249L170,255L184,255L186,258L188,265L168,285L165,295L162,297L152,297L149,317L217,330Z",cx:195,cy:280},{d:"M338,332L340,332L343,326L345,318L352,314L356,309L360,300L360,293L380,289L382,307L386,309L388,314L386,328L389,337L402,344L404,342L407,344L419,257L395,245L317,286Z",cx:341,cy:296},{d:"M407,344L411,335L417,345L481,328L464,248L419,257Z",cx:443,cy:292},{d:"M464,248L481,328L537,356L539,354L527,240L469,243Z",cx:502,cy:288},{d:"M539,354L657,319L652,315L648,302L636,289L626,271L626,260L630,250L622,246L620,240L608,239L596,241L590,237L536,234L527,240Z",cx:587,cy:296},{d:"M220,368L216,362L215,354L209,347L218,341L217,330L149,317L148,324L143,331L132,333L132,352L128,359L130,364L136,366L144,364L155,351L167,352L173,360L185,366L180,380L181,388L198,387L217,382L221,382Z",cx:191,cy:353},{d:"M217,330L218,341L239,322L240,326L246,329L249,328L257,333L265,361L278,383L292,375L295,371L296,356L304,334L315,325L322,324L334,329L336,333L338,332L317,286L313,284L228,306Z",cx:281,cy:333},{d:"M529,388L537,356L481,328L417,345L418,346L423,344L427,345L430,344L431,350L434,354L435,352L438,354L440,351L442,351L444,356L450,355L452,357L455,363L457,364L459,367L460,375L462,376L462,379L470,386L470,391L474,396L476,407Z",cx:496,cy:371},{d:"M649,443L768,452L767,436L755,433L752,428L740,423L739,420L734,408L735,397L732,394L728,393L715,384L709,382L699,366L696,365L693,367L682,354L667,345L658,328Z",cx:687,cy:389},{d:"M547,435L529,388L476,407L479,414L476,416L475,420L477,424L477,433L483,441L483,444L487,448L488,459L500,469L514,475L514,476Z",cx:511,cy:428},{d:"M529,388L547,435L609,466L639,456L649,443L659,323L658,320L657,319L539,354L537,356Z",cx:595,cy:411},{d:"M609,466L547,435L514,476L516,478L524,479L528,481L527,485L537,502L551,507L559,505L565,507L569,512L570,519L582,528L580,531L583,538L583,542Z",cx:566,cy:494},{d:"M639,456L609,466L583,542L586,545L586,561L589,569L600,571L608,571L614,575L620,575L624,579L636,577L640,575L644,574L650,577L656,574L659,570L667,567L676,556L684,551L690,554L695,551L698,547Z",cx:633,cy:504},{d:"M649,443L639,456L698,547L703,541L699,529L709,521L713,513L714,505L720,499L722,492L732,482L736,463L754,458L757,455L762,454L768,456L768,452Z",cx:693,cy:495}]},
    "Quyi Chirchiq tumani": {w:776,h:703,o:"M8,500L14,509L21,513L28,514L30,521L22,539L13,548L13,559L9,575L12,577L24,578L28,575L40,548L46,545L51,544L56,547L58,558L55,567L50,574L38,582L37,586L38,592L41,596L44,599L50,600L68,590L76,590L81,593L87,610L106,617L116,619L127,624L141,640L148,644L159,647L171,647L177,651L180,656L180,670L179,681L176,688L180,695L184,695L188,692L194,693L199,687L202,688L210,681L212,674L213,673L217,676L220,676L221,673L221,669L222,666L225,664L234,665L238,657L246,658L249,656L251,653L254,652L258,655L258,662L261,665L268,654L268,649L271,650L274,656L277,658L285,653L286,647L294,651L296,651L295,645L299,641L299,637L302,635L306,637L315,635L318,626L324,622L322,618L316,616L321,610L319,607L319,603L323,600L323,596L328,590L331,589L334,585L350,578L351,579L352,583L354,583L357,576L363,572L367,565L371,570L372,569L372,567L374,566L382,571L389,566L394,573L396,573L404,571L409,562L412,564L427,562L446,530L452,530L454,527L461,526L470,520L481,510L484,500L494,493L499,487L503,487L511,475L517,478L521,476L533,466L534,459L542,453L552,439L562,433L561,430L571,421L572,414L576,413L579,403L592,388L600,383L606,370L614,365L619,365L621,361L625,362L625,359L632,358L637,360L638,358L636,354L644,346L644,343L647,340L649,339L650,335L653,334L661,329L661,325L662,322L655,319L651,312L647,309L652,302L657,299L668,302L677,300L679,297L665,281L668,275L678,278L687,275L693,255L708,238L708,227L702,224L685,233L673,222L668,230L652,224L643,212L650,207L647,196L656,177L672,161L674,151L698,144L715,142L716,145L710,167L723,162L728,150L728,140L739,122L752,120L757,94L743,93L745,77L743,69L737,62L755,47L757,38L761,39L765,35L768,15L753,12L741,12L727,8L716,14L714,19L707,22L698,34L696,41L689,45L682,57L673,60L667,67L657,73L653,80L647,88L646,93L642,96L637,107L640,115L637,117L630,119L627,122L627,126L622,129L617,138L616,143L620,147L621,150L611,154L612,163L605,165L602,173L593,172L594,175L591,178L586,178L581,183L572,187L566,192L561,192L557,194L549,196L542,202L536,205L529,205L523,210L521,216L513,217L511,230L499,237L498,237L495,233L489,233L487,242L484,244L475,246L470,267L462,276L452,283L443,282L438,285L433,292L430,301L421,307L418,318L411,323L409,332L405,335L399,335L389,344L378,346L367,355L355,356L348,352L335,355L332,355L331,353L328,353L324,357L321,354L319,355L318,362L313,360L307,365L309,374L307,377L305,382L299,387L292,385L279,388L274,387L270,393L268,393L266,392L267,388L265,384L262,383L246,396L236,392L234,394L236,403L228,400L224,400L222,404L222,408L217,412L212,419L208,421L204,416L199,419L198,422L200,427L199,430L189,426L187,429L188,435L177,435L174,433L171,436L166,436L164,439L160,441L154,441L149,445L143,446L139,450L136,448L133,451L123,451L119,452L110,469L104,472L97,472L90,474L83,480L77,491L69,490L65,481L60,479L46,487L33,489Z",c:[{d:"M659,78L756,98L757,94L743,93L745,77L743,69L737,62L755,47L757,38L761,39L765,35L768,15L753,12L741,12L727,8L716,14L714,19L707,22L698,34L696,41L689,45L682,57L673,60L667,67L657,73L656,75Z",cx:717,cy:52},{d:"M614,174L657,177L672,161L674,151L684,148L685,146L659,78L656,75L637,107L640,115L637,117L630,119L627,126L622,129L617,138L616,143L620,147L621,150L611,154L612,163L604,166Z",cx:651,cy:127},{d:"M685,146L733,132L739,122L752,120L756,98L659,78Z",cx:712,cy:109},{d:"M685,146L684,148L715,142L716,145L710,167L723,162L728,150L728,140L733,132Z",cx:722,cy:149},{d:"M531,253L559,237L562,192L549,196L542,202L536,205L529,205L523,210L521,216L514,216L513,218L511,230L508,232Z",cx:536,cy:224},{d:"M604,166L602,173L593,172L594,175L590,178L586,178L579,185L572,187L566,192L562,192L559,237L601,253L616,240L614,174Z",cx:588,cy:214},{d:"M614,174L616,240L693,256L708,238L708,227L702,224L685,233L673,222L668,230L652,224L643,212L650,207L647,196L657,177Z",cx:631,cy:217},{d:"M498,315L458,278L451,284L443,282L438,285L433,292L430,301L422,306L418,318L411,323L409,332L405,335L400,334L393,339L447,370L455,366Z",cx:449,cy:327},{d:"M498,315L521,312L526,307L531,253L508,232L498,237L495,233L489,233L487,242L484,244L475,246L470,267L462,276L458,278Z",cx:498,cy:272},{d:"M526,307L598,302L601,253L559,237L531,253Z",cx:564,cy:277},{d:"M608,312L657,320L651,312L647,309L652,302L657,299L668,302L677,300L679,297L665,281L668,275L678,278L687,275L693,256L616,240L601,253L598,302Z",cx:633,cy:280},{d:"M438,440L483,449L538,416L536,408L455,366L447,370Z",cx:472,cy:389},{d:"M455,366L536,408L547,369L521,312L498,315Z",cx:505,cy:341},{d:"M521,312L547,369L592,360L608,312L598,302L526,307Z",cx:566,cy:336},{d:"M608,312L592,360L604,375L606,370L614,365L619,365L621,361L625,362L625,359L632,358L637,360L638,358L636,352L644,346L644,343L647,340L649,339L650,335L653,334L661,329L662,322L657,320Z",cx:620,cy:344},{d:"M233,442L299,430L300,429L283,387L279,388L274,387L270,393L268,393L266,392L267,388L265,384L262,383L246,396L243,396L238,392L235,392L236,403L228,400L222,401L222,408L216,413Z",cx:256,cy:411},{d:"M300,429L354,421L371,353L367,355L355,356L348,352L335,355L330,353L324,357L321,354L319,355L318,362L313,360L307,365L309,374L301,386L297,387L293,385L283,387Z",cx:324,cy:404},{d:"M398,457L425,450L438,440L447,370L393,339L387,345L381,345L377,347L371,353L354,421Z",cx:402,cy:395},{d:"M538,416L560,434L562,433L561,430L571,421L572,414L576,413L579,403L592,388L600,383L604,375L592,360L547,369L536,408Z",cx:563,cy:396},{d:"M146,545L156,525L129,451L123,451L117,453L110,469L104,472L93,473L82,481L72,542L125,553Z",cx:113,cy:503},{d:"M214,484L153,442L149,445L143,446L139,450L136,448L133,451L129,451L156,525L217,495Z",cx:163,cy:468},{d:"M214,484L233,442L216,413L211,420L208,421L204,416L199,419L200,427L199,430L191,426L187,427L188,435L177,435L174,433L160,441L153,442Z",cx:204,cy:463},{d:"M217,495L236,511L296,506L299,430L233,442L214,484Z",cx:261,cy:463},{d:"M300,429L296,506L307,516L382,491L398,457L354,421Z",cx:344,cy:474},{d:"M425,450L398,457L382,491L409,563L427,562L446,530L450,530L454,527L461,526Z",cx:420,cy:508},{d:"M425,450L461,526L478,514L483,506L482,505L484,500L500,487L483,449L438,440Z",cx:463,cy:469},{d:"M538,416L483,449L500,487L503,487L511,475L517,478L527,472L533,466L535,458L542,453L552,439L560,434Z",cx:513,cy:451},{d:"M31,567L40,548L46,545L51,544L56,547L57,551L72,542L82,481L77,491L69,490L65,481L60,479L46,487L33,489L8,500L14,509L28,514L30,521L22,539L13,548L13,559L9,575L13,578Z",cx:50,cy:530},{d:"M146,545L189,577L228,557L236,511L217,495L156,525Z",cx:191,cy:535},{d:"M228,557L262,592L314,551L307,516L296,506L236,511Z",cx:271,cy:533},{d:"M314,551L346,580L349,578L351,579L353,583L355,582L357,576L363,572L367,565L371,570L374,566L382,571L389,566L394,573L396,573L404,571L409,563L382,491L307,516Z",cx:354,cy:533},{d:"M125,553L72,542L57,551L58,558L55,567L50,574L38,582L37,586L38,592L44,599L50,600L68,590L76,590L81,593L87,610L106,617L116,619L127,624L132,629Z",cx:83,cy:584},{d:"M125,553L132,629L141,640L148,644L159,647L170,647L188,623L189,577L146,545Z",cx:159,cy:600},{d:"M188,623L255,619L261,613L262,592L228,557L189,577Z",cx:222,cy:585},{d:"M262,592L261,613L317,632L318,626L324,622L322,618L316,616L321,610L319,607L319,603L323,600L323,596L331,589L334,585L346,580L314,551Z",cx:297,cy:591},{d:"M255,619L188,623L170,647L177,651L180,656L179,681L176,688L179,694L180,695L188,692L194,693L199,687L202,688L210,681L212,674L213,673L218,676L221,675L222,666L225,664L234,665L238,657L246,658L252,652L255,653Z",cx:209,cy:657},{d:"M261,613L255,619L255,653L258,655L258,662L261,665L263,664L268,649L271,650L275,657L278,658L285,653L286,647L296,651L295,645L299,641L300,636L302,635L307,637L316,633L317,632Z",cx:277,cy:639}]},
    "O'rta Chirchiq tumani": {w:776,h:780,o:"M8,699L11,688L29,667L39,660L48,642L60,634L67,634L69,629L74,631L76,626L85,624L92,627L93,625L90,619L101,607L101,604L105,600L109,598L109,592L114,592L126,584L125,579L127,574L117,570L111,560L105,557L112,546L120,543L135,546L148,544L150,539L131,517L135,509L149,513L161,509L163,497L170,481L191,456L191,442L183,437L158,449L142,435L135,446L113,437L101,420L110,413L106,398L119,371L140,348L143,335L177,325L201,322L202,326L195,357L213,350L220,334L219,319L235,295L253,291L259,255L241,254L243,231L240,219L232,210L257,189L260,177L266,178L271,172L275,144L306,146L320,142L354,114L382,85L446,20L460,8L450,18L446,34L434,46L423,75L443,76L460,83L445,111L420,146L425,148L474,150L483,140L471,126L496,101L509,60L549,84L559,99L593,136L590,150L591,155L551,154L536,175L546,176L560,175L565,176L568,185L573,184L576,179L579,178L582,179L585,183L590,181L593,184L601,177L622,171L627,160L630,159L630,165L626,172L614,178L605,185L612,200L621,240L626,249L602,265L605,271L604,292L599,299L592,318L594,322L598,323L602,329L600,333L599,341L588,342L586,344L587,356L599,368L609,371L613,376L617,378L619,381L609,393L601,391L597,392L594,397L580,404L578,411L579,414L584,415L586,419L591,422L594,421L603,428L603,430L597,430L587,435L587,444L584,452L585,455L597,460L600,466L605,472L606,476L610,479L622,480L628,482L635,487L635,494L627,518L628,531L650,553L655,583L670,608L694,629L716,685L733,717L766,743L768,754L768,772L741,770L719,770L695,773L677,772L625,740L590,710L579,699L576,697L573,692L569,690L553,686L532,674L530,675L526,674L522,664L515,665L512,664L508,660L506,656L497,652L474,666L472,672L473,681L466,683L465,685L466,689L465,691L461,691L455,686L452,688L432,697L419,694L406,684L397,669L390,653L382,642L360,600L352,590L348,589L338,589L309,579L292,576L273,584L252,579L250,576L233,582L228,577L222,577L210,580L207,579L202,583L204,587L203,589L198,592L190,591L180,598L177,600L172,610L163,610L160,616L145,629L140,629L137,633L121,639L117,643L115,644L110,641L87,659L73,664L66,673L51,670L43,680L27,691L27,699L17,694Z",c:[{d:"M408,139L438,121L460,83L443,76L423,75L434,46L446,34L450,18L460,8L446,20L382,85L358,109Z",cx:417,cy:61},{d:"M499,170L537,173L552,154L563,103L549,84L509,60L496,101L475,122Z",cx:522,cy:112},{d:"M552,154L591,155L590,150L593,136L563,103Z",cx:568,cy:119},{d:"M346,247L358,226L300,146L275,144L271,172L266,178L260,177L257,189L232,210L240,219L243,231L241,254L259,255L258,263Z",cx:291,cy:199},{d:"M373,218L400,186L408,139L358,109L320,142L306,146L300,146L358,226Z",cx:359,cy:166},{d:"M400,186L479,207L499,170L475,122L471,126L483,140L474,150L425,148L420,146L438,121L408,139Z",cx:449,cy:160},{d:"M479,207L482,229L494,241L546,242L564,210L559,183L550,176L536,175L537,173L499,170Z",cx:524,cy:195},{d:"M559,183L564,210L620,233L612,200L605,185L614,178L626,172L630,165L630,159L627,160L622,171L601,177L593,184L590,181L585,183L582,179L579,178L576,179L573,184L568,185L567,180Z",cx:585,cy:192},{d:"M353,266L428,309L437,300L438,253L373,218L358,226L346,247Z",cx:395,cy:260},{d:"M373,218L438,253L482,229L479,207L400,186Z",cx:432,cy:223},{d:"M559,273L604,275L602,265L626,249L620,233L564,210L546,242Z",cx:586,cy:246},{d:"M298,342L347,314L353,266L346,247L258,263L253,291L247,292Z",cx:303,cy:303},{d:"M367,342L423,341L428,309L353,266L347,314Z",cx:371,cy:288},{d:"M432,359L471,373L506,310L493,297L437,300L428,309L423,341Z",cx:461,cy:326},{d:"M438,253L437,300L493,297L494,241L482,229Z",cx:466,cy:275},{d:"M493,297L506,310L537,314L559,273L546,242L494,241Z",cx:523,cy:285},{d:"M537,314L544,324L602,329L598,323L594,322L592,318L599,299L604,292L604,275L559,273Z",cx:569,cy:307},{d:"M154,398L177,376L180,325L143,335L140,348L118,372Z",cx:154,cy:360},{d:"M177,376L226,395L240,390L230,302L219,319L220,334L213,350L195,357L202,326L201,322L180,325Z",cx:189,cy:342},{d:"M267,398L299,360L298,342L247,292L235,295L230,302L240,390Z",cx:267,cy:351},{d:"M299,360L350,389L367,342L347,314L298,342Z",cx:331,cy:351},{d:"M360,415L395,412L432,359L423,341L367,342L350,389Z",cx:389,cy:374},{d:"M471,373L483,390L544,386L544,324L537,314L506,310Z",cx:514,cy:348},{d:"M544,386L585,419L586,419L584,415L579,414L578,411L580,404L594,397L597,392L601,391L609,393L619,381L613,376L609,371L599,368L586,355L587,343L588,342L599,341L602,329L544,324Z",cx:578,cy:373},{d:"M150,433L154,398L118,372L106,398L110,413L101,420L113,437L135,446L142,435L145,438Z",cx:131,cy:406},{d:"M226,395L177,376L154,398L150,433L179,439L183,437L191,442L205,445Z",cx:184,cy:416},{d:"M205,445L217,461L270,447L278,422L267,398L240,390L226,395Z",cx:242,cy:433},{d:"M278,422L352,425L360,415L350,389L299,360L267,398Z",cx:312,cy:393},{d:"M436,450L474,427L483,390L471,373L432,359L395,412Z",cx:442,cy:401},{d:"M520,468L550,464L585,419L544,386L483,390L474,427Z",cx:529,cy:423},{d:"M172,514L216,476L217,461L205,445L191,442L191,456L170,481L163,497L161,509L156,511Z",cx:192,cy:478},{d:"M172,514L199,545L256,522L256,520L216,476Z",cx:214,cy:495},{d:"M216,476L256,520L290,487L270,447L217,461Z",cx:254,cy:482},{d:"M270,447L290,487L309,489L350,443L352,425L278,422Z",cx:304,cy:467},{d:"M309,489L345,535L385,513L387,497L350,443Z",cx:348,cy:466},{d:"M352,425L350,443L387,497L435,454L436,450L395,412L360,415Z",cx:392,cy:476},{d:"M442,551L472,549L475,523L435,454L387,497L385,513Z",cx:426,cy:505},{d:"M435,454L475,523L520,468L474,427L436,450Z",cx:478,cy:495},{d:"M475,552L509,555L570,522L550,464L520,468L475,523L472,549Z",cx:530,cy:495},{d:"M550,464L570,522L599,537L628,530L627,518L635,494L635,487L628,482L622,480L610,479L606,476L605,472L600,466L597,460L585,455L584,452L587,444L587,435L597,430L603,430L603,428L601,426L594,421L585,419Z",cx:582,cy:478},{d:"M167,610L172,610L177,600L190,591L198,592L199,545L172,514L156,511L149,513L135,509L131,517L150,539L148,544L135,546L120,543L115,544Z",cx:167,cy:569},{d:"M256,522L199,545L198,592L203,589L204,587L202,583L207,579L210,580L222,577L228,577L233,582L250,576L252,579L273,584L284,579Z",cx:237,cy:561},{d:"M345,535L309,489L290,487L256,520L256,522L284,579L292,576L303,577L327,585Z",cx:305,cy:555},{d:"M327,585L338,589L348,589L352,590L363,606L391,603L442,551L385,513L345,535Z",cx:379,cy:568},{d:"M577,617L583,623L666,601L655,583L650,553L628,530L599,537Z",cx:621,cy:568},{d:"M104,645L110,641L115,644L117,643L121,639L137,633L140,629L149,626L163,610L167,610L115,544L112,546L105,557L111,560L117,570L127,574L125,579L126,584L114,592L109,592L109,598L105,600L101,604L101,607L90,619L93,625L92,627L84,624Z",cx:132,cy:595},{d:"M391,603L434,645L481,634L475,552L472,549L442,551Z",cx:446,cy:578},{d:"M481,634L498,649L577,617L576,616L509,555L475,552Z",cx:510,cy:585},{d:"M576,616L599,537L570,522L509,555Z",cx:564,cy:585},{d:"M84,624L76,626L74,631L69,629L67,634L60,634L48,642L39,660L29,667L11,688L8,699L17,694L27,699L27,691L43,680L51,670L66,673L73,664L87,659L104,645Z",cx:57,cy:662},{d:"M434,645L391,603L363,606L382,642L390,653L397,669L406,684L410,688Z",cx:409,cy:649},{d:"M498,649L481,634L434,645L410,688L419,694L432,697L452,688L455,686L461,691L465,691L466,689L465,685L466,683L473,681L472,672L473,668L495,652L498,653Z",cx:455,cy:660},{d:"M498,653L506,656L512,664L522,664L526,674L532,674L553,686L569,690L573,692L576,697L579,699L589,709L599,672L583,623L577,617L498,649Z",cx:552,cy:660},{d:"M599,672L705,657L694,629L670,608L666,601L583,623Z",cx:645,cy:643},{d:"M706,659L705,657L599,672L589,709L625,740L651,756Z",cx:641,cy:691},{d:"M736,720L733,717L716,685L706,659L651,756L677,772L695,773L719,770Z",cx:703,cy:701},{d:"M719,770L768,772L768,754L766,743L736,720Z",cx:747,cy:749}]},
    "Yangiyo'l tumani": {w:776,h:682,o:"M8,279L24,303L34,308L33,319L25,322L30,348L20,373L22,389L31,412L30,429L21,443L40,443L85,432L143,500L199,448L236,434L242,450L215,469L216,480L215,499L219,507L233,520L263,534L258,552L259,557L268,567L269,572L243,606L235,631L230,638L234,645L240,647L241,658L246,665L253,669L270,675L273,673L279,674L285,672L289,667L299,659L301,658L308,659L313,655L316,642L326,635L327,629L332,617L344,611L348,597L353,593L355,588L362,583L373,586L386,576L390,575L394,568L400,562L404,555L404,544L407,542L408,532L412,530L421,529L425,526L427,523L426,517L427,514L436,513L440,520L443,520L459,510L462,490L471,491L473,490L477,481L485,474L495,473L503,470L514,461L525,458L531,455L537,455L547,448L560,442L565,436L573,435L577,430L576,427L579,426L584,429L590,427L592,418L596,415L600,415L603,413L604,411L601,406L601,401L613,398L616,396L615,391L609,385L610,378L615,372L617,366L625,360L625,356L629,350L639,348L642,345L638,336L638,333L641,331L646,318L652,313L653,310L653,306L662,296L663,291L668,285L681,276L691,267L700,265L703,263L713,246L723,239L725,230L739,212L748,208L752,202L768,193L727,175L716,166L708,182L716,184L706,200L695,197L657,195L629,218L617,218L608,213L603,213L600,215L587,210L582,218L579,220L578,217L570,221L568,209L559,208L548,193L543,188L600,131L573,103L571,95L557,88L554,83L550,83L550,80L545,79L544,81L542,77L536,77L528,80L527,82L523,81L515,96L504,98L503,106L491,126L487,129L483,119L448,113L442,116L443,118L440,121L437,121L434,124L427,126L423,130L410,138L410,132L406,130L400,121L382,115L369,105L358,102L356,100L357,97L362,96L367,96L374,89L379,89L381,85L388,80L386,76L386,65L381,42L374,46L366,46L352,39L342,37L333,24L328,19L322,8L319,8L314,14L306,30L314,43L307,64L303,67L303,73L296,74L293,82L290,81L288,84L282,84L223,122L210,126L198,136L189,146L186,155L176,155L161,158L153,156L149,181L133,189L118,201L95,208L83,217L46,257L41,260L29,264Z",c:[{d:"M322,125L331,134L383,137L395,119L382,115L369,105L358,102L356,100L357,97L362,96L367,96L374,89L379,89L381,85L388,80L386,76L386,65L381,42L374,46L366,46L352,39L342,37L333,24L328,19L322,8L319,8L306,30L314,43L307,64L303,67Z",cx:345,cy:71},{d:"M238,138L322,125L303,67L303,73L296,74L293,82L290,81L288,84L282,84L224,121Z",cx:284,cy:103},{d:"M532,136L579,109L573,103L571,95L557,88L554,83L550,83L550,80L545,79L544,81L542,77L528,80L527,82L523,81L515,96L504,98L503,106L495,120Z",cx:540,cy:107},{d:"M544,184L547,184L600,131L579,109L532,136Z",cx:554,cy:160},{d:"M224,236L245,193L238,138L224,121L210,126L198,136L189,146L186,155L176,155L161,158L153,156L151,174Z",cx:203,cy:183},{d:"M245,193L313,173L331,134L322,125L238,138Z",cx:280,cy:155},{d:"M313,173L332,232L371,213L386,143L383,137L331,134Z",cx:347,cy:193},{d:"M371,213L413,235L446,222L449,192L386,143Z",cx:399,cy:168},{d:"M449,192L472,175L485,125L483,119L454,114L444,114L440,121L437,121L434,124L427,126L423,130L410,138L410,132L406,130L400,121L395,119L383,137L386,143Z",cx:441,cy:159},{d:"M446,222L463,241L508,257L519,247L530,194L472,175L449,192Z",cx:487,cy:208},{d:"M530,194L544,184L532,136L495,120L491,126L487,129L485,125L472,175Z",cx:507,cy:156},{d:"M691,233L710,249L723,239L725,230L739,212L748,208L752,202L768,193L727,175L716,166L708,182L716,184L706,200L700,198Z",cx:724,cy:205},{d:"M75,252L123,243L136,188L118,201L95,208L83,217L62,239Z",cx:99,cy:228},{d:"M157,271L222,255L226,246L224,236L151,174L149,181L136,188L123,243Z",cx:163,cy:212},{d:"M226,246L326,246L332,232L313,173L245,193L224,236Z",cx:280,cy:213},{d:"M334,263L397,268L413,235L371,213L332,232L326,246Z",cx:370,cy:240},{d:"M403,285L441,296L463,241L446,222L413,235L397,268Z",cx:431,cy:255},{d:"M519,247L583,249L583,217L579,220L578,217L570,221L568,209L559,208L557,207L543,188L547,184L544,184L530,194Z",cx:547,cy:213},{d:"M598,265L644,254L637,212L627,219L617,218L608,213L600,215L586,210L583,217L583,249Z",cx:612,cy:234},{d:"M644,254L691,233L700,198L695,197L657,195L637,212Z",cx:666,cy:222},{d:"M691,233L645,254L664,290L668,285L681,276L691,267L703,263L710,249Z",cx:676,cy:259},{d:"M56,308L78,275L75,252L62,239L46,257L41,260L29,264L8,279L22,298L23,302L34,308L34,311Z",cx:44,cy:277},{d:"M78,275L119,305L136,301L157,271L123,243L75,252Z",cx:117,cy:273},{d:"M170,358L136,301L119,305L89,353L160,365Z",cx:128,cy:329},{d:"M170,358L206,354L216,346L228,282L222,255L157,271L136,301Z",cx:185,cy:324},{d:"M216,346L276,375L300,364L295,313L228,282Z",cx:258,cy:330},{d:"M222,255L228,282L295,313L333,286L334,263L326,246L226,246Z",cx:280,cy:272},{d:"M300,364L328,367L361,351L369,337L333,286L295,313Z",cx:328,cy:325},{d:"M369,337L374,336L403,285L397,268L334,263L333,286Z",cx:369,cy:311},{d:"M459,333L441,296L403,285L374,336L430,346Z",cx:418,cy:314},{d:"M453,341L452,340L454,338L452,335L478,287L475,286L472,278L469,281L468,279L468,275L461,276L455,271L453,262L446,256L446,259L441,263L442,266L440,272L429,283L428,290L422,294L420,297L416,299L415,308L408,311L402,316L402,320Z",cx:445,cy:298},{d:"M441,296L459,333L475,326L508,257L463,241Z",cx:473,cy:277},{d:"M475,326L544,335L552,317L508,257Z",cx:512,cy:287},{d:"M508,257L552,317L588,296L598,265L583,249L519,247Z",cx:559,cy:280},{d:"M645,254L598,265L588,296L639,348L642,345L638,336L638,333L646,318L652,313L653,306L662,296L664,290Z",cx:625,cy:301},{d:"M34,311L33,319L25,322L30,348L22,369L88,352L56,308Z",cx:52,cy:335},{d:"M89,353L22,369L20,373L22,389L25,398L76,411L91,398Z",cx:56,cy:381},{d:"M56,308L89,353L119,305L78,275Z",cx:88,cy:330},{d:"M91,398L141,419L160,365L89,353Z",cx:122,cy:381},{d:"M328,367L337,418L371,429L394,409L361,351Z",cx:357,cy:388},{d:"M394,409L420,410L430,346L374,336L369,337L361,351Z",cx:401,cy:380},{d:"M402,320L399,326L395,326L392,329L396,337L392,340L390,338L389,348L377,365L384,377L378,381L389,386L395,384L398,381L398,379L401,380L397,390L401,393L408,380L416,383L423,383L433,364L433,368L445,345L454,351L455,346L453,343L453,341Z",cx:410,cy:358},{d:"M430,346L420,410L439,424L470,410L481,379L461,333Z",cx:451,cy:363},{d:"M461,333L481,379L533,377L546,344L544,335L475,326Z",cx:506,cy:360},{d:"M533,377L542,408L616,396L615,391L609,385L608,382L613,375L546,344Z",cx:573,cy:376},{d:"M546,344L613,375L616,367L625,360L625,356L629,350L639,348L588,296L552,317L544,335Z",cx:588,cy:340},{d:"M76,411L25,398L31,412L30,429L21,443L40,443L74,434Z",cx:53,cy:421},{d:"M76,411L74,434L85,432L104,454L140,429L142,423L141,419L91,398Z",cx:108,cy:426},{d:"M160,365L141,419L142,423L210,432L206,354L170,358Z",cx:179,cy:392},{d:"M211,432L271,420L276,375L216,346L206,354Z",cx:241,cy:398},{d:"M272,419L323,430L337,418L328,367L300,364L276,375Z",cx:303,cy:397},{d:"M373,480L412,491L438,457L439,424L420,410L394,409L371,429Z",cx:405,cy:443},{d:"M438,457L484,475L495,473L499,471L501,430L470,410L439,424Z",cx:469,cy:444},{d:"M470,410L501,430L540,416L542,408L533,377L481,379Z",cx:507,cy:394},{d:"M499,471L503,470L514,461L525,458L531,455L537,455L547,448L553,445L540,416L501,430Z",cx:525,cy:438},{d:"M542,408L540,416L553,445L560,442L565,436L573,435L577,430L576,427L579,426L584,429L588,428L594,416L603,413L604,411L601,406L601,401L615,397Z",cx:567,cy:421},{d:"M140,429L104,454L143,500L157,487Z",cx:135,cy:470},{d:"M140,429L157,487L199,448L210,444L210,432L142,423Z",cx:165,cy:467},{d:"M261,489L215,470L216,480L215,499L219,507L233,520L244,525Z",cx:237,cy:494},{d:"M210,432L210,444L236,434L242,450L229,458L215,470L261,489L279,483L271,420Z",cx:255,cy:454},{d:"M244,525L263,534L258,552L260,559L294,555L298,491L279,483L261,489Z",cx:275,cy:508},{d:"M279,483L298,491L322,486L323,430L272,419Z",cx:299,cy:457},{d:"M323,430L322,486L345,492L373,480L371,429L337,418Z",cx:347,cy:455},{d:"M412,491L373,480L345,492L349,529L397,565L400,562L404,555L404,544L407,542L408,532L412,530L421,529L426,525Z",cx:383,cy:508},{d:"M426,525L426,517L427,514L436,513L440,520L443,520L459,510L462,490L473,490L477,481L484,475L438,457L412,491Z",cx:437,cy:491},{d:"M298,491L294,555L314,569L349,529L345,492L322,486Z",cx:322,cy:511},{d:"M317,577L356,587L362,583L373,586L386,576L390,575L397,565L349,529L314,569Z",cx:353,cy:547},{d:"M317,577L314,569L294,555L260,559L268,567L269,572L243,606L235,631L230,638L234,645L240,647L241,658L246,665L270,675L284,673Z",cx:271,cy:619},{d:"M317,577L284,673L299,659L308,659L313,655L316,642L326,635L327,629L332,617L344,611L348,597L356,587Z",cx:315,cy:623}]},
    "Yuqori Chirchiq tumani": {w:640,h:916,o:"M123,494L37,569L34,586L21,598L11,626L31,628L47,635L32,663L8,698L12,700L62,702L71,692L59,678L84,652L96,612L137,636L147,651L181,688L178,702L179,707L139,706L123,727L134,728L148,727L153,728L156,737L161,736L164,731L167,730L170,731L173,735L178,733L181,736L189,729L210,723L216,712L218,711L218,717L214,724L202,731L193,737L200,752L210,792L222,816L224,815L229,815L233,819L251,827L279,833L284,829L287,830L291,825L300,830L306,829L334,842L349,845L340,864L346,869L348,882L396,885L407,899L456,895L481,884L542,908L559,903L562,881L627,876L629,859L632,856L626,825L618,816L620,802L616,768L610,768L576,792L556,807L556,813L539,813L512,809L489,785L501,779L500,776L494,776L505,743L518,734L553,732L593,728L599,711L614,699L613,698L608,701L603,699L591,703L580,701L569,703L564,708L557,699L556,661L562,652L566,652L578,641L581,635L586,631L587,626L579,627L574,625L574,619L570,612L573,602L573,581L570,577L565,573L558,571L529,579L513,585L493,585L475,592L471,591L467,588L452,554L443,538L441,535L442,531L443,530L442,528L441,527L435,537L426,536L424,537L420,532L415,533L413,536L415,537L413,541L413,542L416,541L416,543L411,549L402,543L393,546L386,532L387,530L390,529L389,521L392,517L393,508L398,508L397,486L401,477L403,466L417,450L422,439L424,427L431,404L432,392L434,389L436,381L438,362L452,327L427,322L423,321L424,319L427,314L437,314L440,295L446,292L447,290L461,289L467,292L470,297L470,294L475,289L478,282L474,280L466,257L471,253L476,245L466,235L462,236L458,227L452,227L454,223L449,217L455,212L456,207L468,199L470,193L480,184L478,183L482,178L483,174L489,170L509,162L506,159L487,165L457,192L447,192L444,182L461,144L467,134L482,116L495,106L519,64L518,62L517,50L512,41L509,38L508,22L504,17L503,8L501,10L484,11L478,16L445,58L428,72L409,103L407,108L409,113L405,123L395,125L377,139L368,149L377,162L369,175L374,179L367,192L303,265L278,284L266,295L241,307L234,318L231,319L228,319L228,321L217,326L203,340L203,345L201,345L198,350L197,355L189,369L171,394L162,403L156,413L143,422L132,435L132,438L129,442L128,442L110,460L108,458L103,462L122,481L124,488Z",c:[{d:"M469,132L484,114L495,106L519,64L518,62L517,50L509,38L508,22L504,17L503,8L501,10L484,11L478,16L469,29L462,34L460,40L454,48L445,58L431,69Z",cx:474,cy:88},{d:"M388,173L456,158L461,144L469,132L431,69L409,103L407,108L409,113L405,123L395,125L377,139L368,149L377,162L374,167Z",cx:434,cy:118},{d:"M388,173L374,167L369,175L374,179L367,192L315,251L346,287L396,247Z",cx:368,cy:219},{d:"M396,247L471,293L475,289L478,282L474,280L466,257L471,253L476,245L466,235L462,236L458,227L452,227L454,223L449,217L455,212L456,207L468,199L470,193L480,184L478,183L482,178L483,174L489,170L509,162L506,159L487,165L457,192L447,192L444,182L456,158L388,173Z",cx:423,cy:225},{d:"M290,347L344,309L346,287L315,251L303,265L278,284L266,295L259,298Z",cx:304,cy:304},{d:"M344,309L387,338L429,322L423,321L424,319L427,314L437,314L440,295L446,292L447,290L461,289L467,292L470,297L471,293L396,247L346,287Z",cx:395,cy:293},{d:"M261,401L275,377L204,339L202,341L203,345L198,350L189,369L166,398Z",cx:227,cy:373},{d:"M275,377L281,373L290,347L259,298L241,307L234,318L231,319L228,319L228,321L217,326L204,339Z",cx:246,cy:333},{d:"M281,373L346,407L386,369L387,338L344,309L290,347Z",cx:336,cy:358},{d:"M431,406L432,392L434,389L436,381L438,362L452,326L429,322L387,338L386,369Z",cx:412,cy:365},{d:"M261,401L166,398L163,402L181,455L224,470L260,412Z",cx:210,cy:434},{d:"M232,499L294,527L325,493L260,412L224,470Z",cx:263,cy:441},{d:"M260,412L325,493L326,492L359,441L346,407L281,373L275,377L261,401Z",cx:313,cy:427},{d:"M359,441L420,445L423,435L424,427L431,406L386,369L346,407Z",cx:389,cy:407},{d:"M129,501L181,455L163,402L156,413L146,420L137,429L129,442L128,442L110,460L108,458L103,462L122,481L124,486L123,494L114,502Z",cx:150,cy:449},{d:"M190,536L232,499L224,470L181,455L129,501Z",cx:188,cy:485},{d:"M326,492L389,520L393,508L398,508L397,486L403,466L420,445L359,441Z",cx:368,cy:476},{d:"M124,590L192,569L190,536L129,501L114,502L74,537Z",cx:140,cy:553},{d:"M190,536L192,569L225,606L260,599L295,539L294,527L232,499Z",cx:239,cy:554},{d:"M285,624L338,625L365,590L295,539L260,599Z",cx:305,cy:565},{d:"M295,539L365,590L370,589L411,549L402,543L393,546L386,532L387,530L390,529L389,526L389,520L326,492L294,527Z",cx:344,cy:541},{d:"M61,675L84,653L32,587L21,598L11,626L31,628L47,635L29,669Z",cx:53,cy:631},{d:"M124,590L74,537L37,569L32,587L84,653L96,612L127,630Z",cx:84,cy:601},{d:"M127,630L137,636L147,651L167,672L198,655L225,606L192,569L124,590Z",cx:172,cy:618},{d:"M438,532L435,537L424,536L370,589L421,656L450,640L475,592L467,588L452,554L443,538L442,531Z",cx:427,cy:616},{d:"M556,634L580,637L586,631L587,626L579,627L574,625L574,619L570,612L573,602L573,581L570,577L565,573L558,571L529,579L513,585L501,585Z",cx:548,cy:607},{d:"M29,669L8,698L12,700L62,702L71,692L59,678L61,675Z",cx:41,cy:685},{d:"M198,655L278,708L289,696L285,624L260,599L225,606Z",cx:246,cy:640},{d:"M338,625L285,624L289,696L356,684Z",cx:317,cy:655},{d:"M356,684L393,701L421,656L370,589L365,590L338,625Z",cx:376,cy:640},{d:"M450,640L505,691L556,634L501,585L493,585L475,592Z",cx:503,cy:637},{d:"M514,737L518,734L553,732L593,728L599,711L614,699L613,698L608,701L603,699L591,703L580,701L569,703L564,708L560,704L557,699L556,661L562,652L566,652L578,641L580,637L556,634L505,691L505,732Z",cx:538,cy:676},{d:"M127,727L148,727L153,728L156,737L161,736L164,731L167,730L170,731L173,735L178,733L181,736L189,729L210,723L216,712L218,711L218,717L214,724L202,731L193,737L200,752L204,769L273,738L278,708L198,655L167,672L181,688L178,702L179,707L139,706L127,721Z",cx:174,cy:714},{d:"M278,708L273,738L307,771L361,759L395,709L393,701L356,684L289,696Z",cx:330,cy:724},{d:"M395,709L452,747L505,732L505,691L450,640L421,656L393,701Z",cx:451,cy:696},{d:"M307,771L273,738L204,769L210,792L222,816L229,815L233,819L251,827L279,833L284,829L287,830L291,825L303,830Z",cx:257,cy:782},{d:"M303,830L306,829L310,830L335,842L389,827L391,822L361,759L307,771Z",cx:342,cy:797},{d:"M361,759L391,822L446,784L452,747L395,709Z",cx:407,cy:772},{d:"M446,784L483,837L536,817L536,812L512,809L489,785L501,779L500,776L494,776L505,743L514,737L505,732L452,747Z",cx:468,cy:785},{d:"M536,817L562,842L619,814L620,802L616,768L610,768L576,792L556,807L556,813L536,812Z",cx:590,cy:804},{d:"M411,863L389,827L335,842L349,845L340,864L346,869L348,882L396,885L402,893Z",cx:375,cy:854},{d:"M411,863L473,857L483,837L446,784L391,822L389,827Z",cx:432,cy:824},{d:"M483,885L542,908L559,903L562,881L569,880L562,842L536,817L483,837L473,857Z",cx:522,cy:869},{d:"M562,842L569,880L627,876L629,859L632,856L626,825L618,816L619,814Z",cx:597,cy:849},{d:"M473,857L411,863L402,893L407,899L456,895L481,884L483,885Z",cx:444,cy:874}]},
    "Zangiota tumani": {w:776,h:708,o:"M52,477L58,505L59,519L61,524L57,526L56,529L53,530L49,535L44,535L37,540L37,542L35,545L29,543L22,546L21,549L23,552L37,555L53,568L77,576L84,587L89,589L89,597L105,587L110,582L119,579L123,575L127,576L130,571L129,569L131,569L132,567L137,566L181,573L186,585L191,582L206,557L207,546L221,544L231,525L236,527L237,524L248,520L254,520L258,525L259,522L265,523L265,528L270,527L270,529L274,534L292,543L295,552L328,588L256,660L263,667L276,685L287,686L291,701L301,696L302,699L305,698L311,687L328,693L332,691L337,692L349,697L365,698L400,668L447,670L461,675L473,655L464,652L474,632L459,612L435,573L432,559L434,545L426,541L425,539L432,527L432,522L423,513L429,506L421,498L419,501L414,498L410,503L406,499L408,491L404,490L406,487L399,478L401,477L399,475L404,472L405,468L393,448L386,444L383,441L384,434L387,428L379,396L372,388L346,365L340,356L338,347L337,311L339,295L337,294L332,297L328,303L323,305L320,314L313,321L309,323L300,334L284,341L279,340L277,345L275,344L278,338L278,332L284,331L285,324L291,318L293,311L297,307L300,302L304,302L303,297L306,294L308,285L301,274L301,272L306,269L305,266L316,257L317,249L320,247L321,244L323,243L328,236L328,233L333,230L332,227L334,223L342,216L343,206L341,200L339,199L341,194L337,188L339,189L341,187L350,168L356,162L357,159L354,156L355,152L354,150L357,147L357,143L362,143L367,139L370,140L377,123L380,111L381,81L386,56L392,46L405,30L432,9L426,8L419,12L399,13L395,17L392,24L387,25L376,51L377,63L375,66L373,65L372,68L367,70L364,76L362,76L360,80L363,85L362,86L360,86L359,88L360,90L356,90L357,93L352,90L347,99L337,93L338,88L335,86L330,90L328,95L320,90L317,87L307,90L296,91L285,77L271,74L270,69L266,68L266,64L262,61L254,60L240,55L235,57L229,55L218,59L216,62L212,64L211,68L208,68L209,76L206,87L203,93L201,104L198,107L196,113L187,108L177,110L159,103L155,116L141,124L119,144L122,162L118,170L118,187L114,197L103,198L97,196L89,199L85,197L64,223L48,220L39,236L22,237L16,243L8,267L14,285L15,305L19,309L17,320L30,325L47,337L69,343L74,348L76,359L72,371L72,380L63,388L37,395L27,410L40,420L46,432L40,459L41,467L47,480ZM521,418L507,429L504,434L503,441L523,483L528,479L530,471L539,461L539,456L545,452L546,445L548,444L573,445L581,509L622,487L646,515L657,509L661,503L666,501L674,501L688,493L690,493L712,478L710,475L723,471L721,467L735,462L735,459L736,458L736,456L746,453L758,439L768,437L753,420L746,416L741,416L575,415Z",c:[{d:"M408,28L426,13L432,9L426,8L419,12L399,13L395,17Z",cx:408,cy:23},{d:"M235,95L258,88L270,73L270,69L266,68L266,64L262,61L254,60L240,55L235,57L229,55L218,59L216,62L212,64L211,68L208,68L207,84Z",cx:237,cy:78},{d:"M385,62L392,46L408,28L395,17L392,24L387,25L384,30L376,51L377,59Z",cx:390,cy:38},{d:"M164,114L211,144L225,135L235,95L207,84L201,104L198,107L196,113L187,108L177,110L159,103L158,106Z",cx:197,cy:114},{d:"M269,149L276,142L258,88L235,95L225,135Z",cx:249,cy:115},{d:"M258,88L276,142L306,141L332,91L331,89L328,95L320,90L317,87L307,90L296,91L286,78L279,75L272,75L270,73Z",cx:293,cy:118},{d:"M317,157L353,164L357,159L354,156L355,152L354,150L357,147L357,143L362,143L367,139L370,140L377,123L332,91L306,141Z",cx:342,cy:131},{d:"M331,89L377,123L380,111L381,81L385,62L378,60L377,63L375,66L373,65L372,68L367,70L364,76L362,76L360,80L363,85L360,86L360,90L356,90L357,93L352,90L347,99L337,93L338,88L335,86Z",cx:369,cy:92},{d:"M123,195L164,172L164,114L158,106L155,116L141,124L119,144L122,162L118,170L118,187L115,194Z",cx:142,cy:153},{d:"M211,144L164,114L164,172L196,184L209,179Z",cx:187,cy:158},{d:"M209,179L222,187L259,182L269,149L225,135L211,144Z",cx:237,cy:164},{d:"M269,149L259,182L277,204L306,201L317,157L306,141L276,142Z",cx:288,cy:170},{d:"M317,157L306,201L334,223L342,216L343,206L341,200L339,199L341,194L337,188L339,189L341,187L353,164Z",cx:324,cy:192},{d:"M60,284L81,282L93,256L85,197L64,223L48,220L39,236L22,237L16,243L12,254L11,255Z",cx:55,cy:240},{d:"M168,267L176,248L172,235L123,195L115,194L114,197L103,198L97,196L89,199L87,198L93,256Z",cx:119,cy:217},{d:"M172,235L196,184L164,172L123,195Z",cx:164,cy:215},{d:"M172,235L176,248L226,239L222,187L209,179L196,184Z",cx:204,cy:211},{d:"M226,239L232,243L266,232L277,204L259,182L222,187Z",cx:248,cy:218},{d:"M241,284L282,274L289,259L266,232L232,243Z",cx:258,cy:251},{d:"M266,232L289,259L317,253L317,249L324,243L328,236L328,233L333,230L334,223L306,201L277,204Z",cx:300,cy:227},{d:"M60,284L11,255L8,267L14,285L15,305L19,309L17,320L25,322Z",cx:32,cy:295},{d:"M25,322L30,325L47,337L62,341L98,318L81,282L60,284Z",cx:67,cy:301},{d:"M111,327L171,279L168,267L93,256L81,282L98,318Z",cx:117,cy:300},{d:"M118,342L187,342L194,331L193,306L171,279L111,327Z",cx:159,cy:316},{d:"M171,279L193,306L239,288L241,284L232,243L226,239L176,248L168,267Z",cx:204,cy:273},{d:"M193,306L194,331L252,346L266,332L239,288Z",cx:225,cy:318},{d:"M239,288L266,332L285,330L285,324L291,318L292,313L295,309L282,274L241,284Z",cx:268,cy:299},{d:"M282,274L295,309L300,302L304,302L303,297L306,294L308,286L301,273L306,269L305,266L316,257L317,253L289,259Z",cx:294,cy:280},{d:"M62,341L69,343L74,348L76,359L72,371L72,380L67,384L69,386L80,387L118,342L111,327L98,318Z",cx:92,cy:354},{d:"M103,413L141,394L118,343L80,387Z",cx:114,cy:365},{d:"M118,343L141,394L188,366L187,342Z",cx:150,cy:380},{d:"M187,342L188,366L214,400L221,401L248,377L252,346L194,331Z",cx:219,cy:356},{d:"M248,377L289,394L313,366L298,335L284,341L279,340L277,346L275,344L278,338L278,332L285,330L266,332L252,346Z",cx:279,cy:356},{d:"M313,366L361,379L346,365L339,353L337,311L338,302L322,310L313,321L309,323L298,335Z",cx:320,cy:344},{d:"M69,386L67,384L63,388L37,395L27,410L40,420L43,427Z",cx:45,cy:403},{d:"M43,427L46,432L41,455L100,429L103,413L80,387L69,386Z",cx:75,cy:420},{d:"M100,429L131,465L165,432L141,394L103,413Z",cx:133,cy:430},{d:"M141,394L165,432L168,432L214,400L188,366Z",cx:178,cy:397},{d:"M226,410L266,434L293,424L289,394L248,377L221,401Z",cx:257,cy:406},{d:"M289,394L293,424L312,437L335,435L364,381L361,379L313,366Z",cx:320,cy:409},{d:"M353,456L387,445L383,441L384,434L387,428L380,400L375,391L364,381L335,435Z",cx:365,cy:414},{d:"M558,416L521,418L507,429L504,433L503,441L523,483L528,479L530,471L539,461L539,456L545,452L546,445L552,444Z",cx:526,cy:448},{d:"M618,458L662,445L672,416L601,416Z",cx:637,cy:431},{d:"M726,465L735,462L736,456L746,453L758,439L768,437L751,418L741,416L719,416Z",cx:738,cy:446},{d:"M41,455L40,459L41,467L47,480L52,477L55,486L130,474L131,465L100,429Z",cx:82,cy:457},{d:"M88,539L124,529L143,503L130,474L55,486L59,514L59,519L61,524L57,525Z",cx:99,cy:508},{d:"M130,474L143,503L153,505L200,468L168,432L165,432L131,465Z",cx:165,cy:467},{d:"M200,538L228,480L219,472L200,468L153,505Z",cx:196,cy:492},{d:"M200,468L219,472L226,410L221,401L214,400L168,432Z",cx:203,cy:450},{d:"M228,480L248,481L266,434L226,410L219,472Z",cx:240,cy:453},{d:"M248,481L283,506L285,506L312,437L293,424L266,434Z",cx:280,cy:459},{d:"M302,511L357,481L353,456L335,435L312,437L285,506Z",cx:327,cy:468},{d:"M357,481L375,496L406,490L404,490L406,487L399,478L401,477L399,475L404,472L405,468L393,448L387,445L353,456Z",cx:380,cy:470},{d:"M618,458L601,416L558,416L552,444L573,445L581,509L608,494Z",cx:595,cy:476},{d:"M662,445L618,458L608,494L622,487L646,515L657,509L661,503L666,501L674,501L690,493L705,483Z",cx:653,cy:471},{d:"M705,483L712,478L710,475L723,471L721,467L726,465L719,416L672,416L662,445Z",cx:699,cy:455},{d:"M88,539L57,525L50,535L44,535L37,540L35,545L29,543L22,546L21,549L23,552L37,555L53,568L77,576L84,587L89,589L89,597L94,594Z",cx:68,cy:561},{d:"M94,594L105,587L110,582L119,579L123,575L127,576L132,567L143,566L124,529L88,539Z",cx:113,cy:553},{d:"M124,529L143,566L181,573L186,585L191,582L206,557L200,538L153,505L143,503Z",cx:168,cy:547},{d:"M206,555L206,547L221,544L231,525L236,527L237,524L248,520L254,520L258,525L259,522L265,523L265,528L270,527L270,529L283,506L248,481L228,480L200,538Z",cx:246,cy:513},{d:"M270,529L274,534L292,543L295,552L320,580L327,577L337,553L302,511L283,506Z",cx:313,cy:548},{d:"M302,511L337,553L368,545L375,496L357,481Z",cx:343,cy:528},{d:"M368,545L390,558L430,529L432,522L423,513L429,505L421,498L419,501L414,498L410,503L406,499L408,491L406,490L375,496Z",cx:401,cy:526},{d:"M390,558L400,589L408,593L447,592L435,573L432,565L432,555L434,545L426,541L425,539L430,529Z",cx:411,cy:561},{d:"M320,580L328,588L297,619L312,636L355,642L356,641L361,613L327,577Z",cx:332,cy:601},{d:"M337,553L327,577L361,613L400,589L390,558L368,545Z",cx:365,cy:583},{d:"M356,641L408,659L409,655L408,593L400,589L361,613Z",cx:384,cy:627},{d:"M312,636L297,619L256,660L263,667L276,685L287,686L291,701L295,699Z",cx:289,cy:648},{d:"M355,642L312,636L295,699L301,696L302,699L305,698L311,687L328,693L332,691L342,693Z",cx:327,cy:665},{d:"M408,659L356,641L342,693L349,697L365,698L400,668L410,668Z",cx:365,cy:681},{d:"M409,655L467,623L447,592L408,593Z",cx:424,cy:639},{d:"M409,655L408,659L410,668L447,670L461,675L473,655L464,652L474,632L467,623Z",cx:451,cy:642}]},
    "Toshkent tumani": {w:776,h:428,o:"M21,297L11,302L8,306L9,311L14,315L34,319L49,318L56,320L51,349L41,384L42,388L48,402L52,419L55,421L61,419L73,419L77,412L77,398L80,392L78,379L94,363L105,357L109,346L122,352L130,350L137,354L145,334L147,319L149,319L149,317L154,312L163,310L167,311L171,309L182,313L188,314L191,316L191,320L195,320L195,324L206,326L215,337L223,337L231,334L233,337L239,340L245,333L247,335L246,339L254,343L258,337L262,339L261,336L264,336L264,333L266,332L264,329L266,326L274,319L274,317L275,318L277,316L276,306L283,290L285,286L289,285L294,277L310,276L315,273L319,274L368,233L370,226L378,225L410,199L417,197L458,198L466,200L503,230L511,234L540,234L561,230L572,232L575,236L587,270L598,265L607,257L620,237L614,234L603,235L603,223L597,223L596,220L590,220L594,209L597,212L602,210L602,208L597,205L582,204L580,209L581,215L576,217L569,215L567,214L564,215L557,212L552,215L535,212L536,210L533,210L534,208L527,203L531,200L532,197L529,194L530,191L532,191L533,190L531,187L531,179L534,180L539,173L539,167L542,163L545,160L548,164L552,157L594,159L601,158L603,147L610,146L614,143L618,136L624,133L621,124L622,117L620,112L625,109L623,103L626,100L637,93L657,87L657,85L680,80L677,77L715,74L749,66L755,40L760,34L768,30L759,31L762,26L756,25L757,22L751,19L753,14L739,16L731,21L720,20L712,23L691,27L675,24L665,20L660,16L654,15L652,11L644,8L643,19L644,21L636,26L634,31L629,32L627,33L625,43L621,39L618,44L615,45L614,42L611,42L610,47L605,47L608,49L604,53L602,54L600,58L591,66L582,66L582,70L578,72L574,77L571,84L565,87L566,91L563,89L560,90L561,92L559,94L554,93L551,95L549,94L550,90L545,95L541,92L541,99L538,97L534,98L532,102L530,97L525,98L523,96L526,94L526,92L521,93L522,88L520,87L521,86L519,86L519,89L514,87L511,80L503,76L503,73L495,64L484,60L471,61L467,59L455,46L444,24L435,30L433,35L425,34L422,41L415,44L410,42L406,42L403,35L399,33L394,36L391,41L383,41L377,45L367,46L365,52L359,56L357,55L355,52L353,52L349,59L345,61L340,58L339,55L336,55L334,57L332,58L330,62L322,59L319,64L321,70L315,73L314,77L311,78L309,86L305,95L307,98L303,100L301,99L301,88L294,89L284,95L285,104L281,106L274,108L271,106L267,108L267,105L265,105L264,109L261,109L258,112L261,116L256,120L255,118L255,112L252,112L250,114L253,117L252,124L271,129L273,132L283,171L288,181L292,185L297,183L301,185L298,191L288,192L285,196L286,204L285,205L275,207L273,209L271,215L262,227L256,227L254,212L251,210L225,214L221,214L219,217L213,216L210,220L197,212L189,212L183,215L176,227L167,237L168,239L163,247L163,251L159,255L159,264L155,265L156,269L153,273L153,281L151,283L153,288L151,299L137,302L130,302L124,299L118,301L117,299L124,295L124,291L127,288L126,280L135,272L130,267L128,263L117,251L94,260L94,263L88,266L81,265L80,270L73,270L72,273L66,272L60,283L53,283L45,279L31,285Z",c:[{d:"M626,38L648,43L687,26L675,24L665,20L660,16L654,15L652,11L644,8L643,19L644,21L636,26L634,31L629,32Z",cx:661,cy:26},{d:"M342,81L336,55L334,57L332,58L330,62L322,59L321,60L319,64L321,70L315,73L310,82Z",cx:329,cy:67},{d:"M344,82L371,58L367,47L365,52L359,56L357,55L354,51L349,59L345,61L340,58L338,55L336,55L342,81Z",cx:348,cy:71},{d:"M346,87L386,93L402,77L401,72L394,65L371,58L344,82Z",cx:377,cy:75},{d:"M371,58L394,65L398,33L391,41L383,41L377,45L367,47Z",cx:383,cy:52},{d:"M401,72L435,41L437,29L433,35L425,34L422,41L415,44L406,42L401,34L398,33L394,65Z",cx:408,cy:54},{d:"M402,77L421,89L447,69L435,41L401,72Z",cx:431,cy:55},{d:"M435,41L447,69L474,78L493,64L484,60L471,61L467,59L455,46L444,24L437,29Z",cx:451,cy:52},{d:"M429,108L467,108L474,78L447,69L421,89Z",cx:451,cy:83},{d:"M626,38L625,43L621,39L618,44L615,45L614,42L611,42L610,47L605,47L608,49L605,52L602,54L600,58L591,66L582,66L582,70L578,72L574,79L622,91Z",cx:610,cy:62},{d:"M648,43L626,38L622,91L624,96L629,99L637,93L657,85L677,81Z",cx:643,cy:62},{d:"M648,43L677,81L680,80L677,77L686,76L698,50L687,27Z",cx:677,cy:63},{d:"M687,27L698,50L727,52L735,19L728,21L720,20L712,23Z",cx:711,cy:38},{d:"M727,52L698,50L686,76L715,74L739,69Z",cx:713,cy:60},{d:"M727,52L739,69L749,66L755,40L760,34L768,30L759,31L762,26L756,25L757,22L751,19L753,14L739,16L735,19Z",cx:741,cy:46},{d:"M292,120L281,106L274,108L271,106L267,108L267,105L265,105L264,109L261,109L258,112L261,116L256,120L255,112L252,112L250,114L253,117L252,124L271,129L274,140Z",cx:272,cy:122},{d:"M274,140L282,168L313,152L317,127L306,120L292,120Z",cx:295,cy:146},{d:"M292,120L306,120L310,85L305,95L308,98L304,100L300,98L301,88L300,88L294,89L283,96L285,103L281,106Z",cx:296,cy:101},{d:"M317,127L344,120L346,87L342,81L310,82L306,120Z",cx:327,cy:104},{d:"M313,152L343,176L352,176L365,156L356,130L344,120L317,127Z",cx:337,cy:141},{d:"M356,130L386,112L386,93L346,87L344,120Z",cx:366,cy:102},{d:"M365,156L397,155L398,121L386,112L356,130Z",cx:379,cy:142},{d:"M386,112L398,121L428,111L429,108L421,89L402,77L386,93Z",cx:406,cy:101},{d:"M397,155L430,137L428,111L398,121Z",cx:414,cy:129},{d:"M430,137L448,150L471,115L467,108L429,108L428,111Z",cx:446,cy:126},{d:"M448,150L450,157L460,165L491,144L482,122L471,115Z",cx:473,cy:133},{d:"M471,115L482,122L509,110L505,77L503,76L503,73L495,64L474,78L467,108Z",cx:489,cy:93},{d:"M491,144L508,153L516,146L520,116L509,110L482,122Z",cx:502,cy:133},{d:"M509,110L520,116L551,107L556,97L556,93L554,93L550,95L550,90L545,95L541,92L541,99L538,97L534,98L532,102L530,97L525,98L523,96L526,94L526,92L521,93L522,88L520,87L521,86L519,86L519,89L514,87L511,80L505,77Z",cx:515,cy:96},{d:"M516,146L553,140L551,107L520,116Z",cx:535,cy:128},{d:"M551,107L553,140L557,145L594,138L596,123L556,97Z",cx:567,cy:115},{d:"M594,138L557,145L557,158L594,159L601,158L603,150Z",cx:579,cy:147},{d:"M556,97L596,123L624,96L622,91L574,79L571,84L565,87L566,91L563,89L560,90L560,94L556,93Z",cx:593,cy:110},{d:"M594,138L603,150L603,147L610,146L614,143L618,136L624,133L621,124L622,117L620,112L625,109L623,103L629,99L624,96L596,123Z",cx:609,cy:124},{d:"M282,168L288,181L292,185L297,183L301,185L298,190L313,194L343,176L313,152Z",cx:311,cy:172},{d:"M359,193L397,201L401,161L397,155L365,156L352,176Z",cx:377,cy:185},{d:"M397,201L401,206L410,199L417,197L429,196L424,173L401,161Z",cx:412,cy:185},{d:"M397,155L401,161L424,173L450,157L448,150L430,137Z",cx:425,cy:153},{d:"M471,199L460,165L450,157L424,173L429,196L458,198L471,203Z",cx:447,cy:185},{d:"M471,199L511,166L508,153L491,144L460,165Z",cx:478,cy:183},{d:"M471,203L494,223L532,197L529,194L530,191L532,191L533,190L531,187L532,182L511,166L471,199Z",cx:503,cy:196},{d:"M511,166L532,182L531,179L534,180L539,173L539,167L542,163L545,160L548,164L552,157L557,158L557,145L553,140L516,146L508,153Z",cx:527,cy:162},{d:"M102,275L127,284L126,280L135,272L130,267L128,263L117,251L96,259Z",cx:116,cy:270},{d:"M213,283L218,279L225,265L216,243L179,221L176,227L167,237L168,239L163,249L196,280Z",cx:196,cy:257},{d:"M216,243L234,219L233,213L221,214L219,217L213,216L210,220L197,212L189,212L181,216L179,221Z",cx:211,cy:232},{d:"M225,265L227,264L264,232L234,219L216,243Z",cx:239,cy:237},{d:"M264,232L276,230L276,206L273,209L271,215L260,227L256,227L254,212L251,210L233,213L234,219Z",cx:249,cy:223},{d:"M227,264L289,273L289,244L276,230L264,232Z",cx:264,cy:254},{d:"M276,230L289,244L322,228L313,194L298,190L288,192L285,196L286,204L285,205L276,206Z",cx:298,cy:217},{d:"M292,279L294,277L310,276L315,273L319,274L356,243L350,234L322,228L289,244L289,273Z",cx:313,cy:258},{d:"M322,228L350,234L359,193L352,176L343,176L313,194Z",cx:336,cy:211},{d:"M350,234L356,243L368,233L370,226L378,225L401,206L397,201L359,193Z",cx:372,cy:215},{d:"M555,213L552,215L535,212L536,210L533,210L534,208L527,203L531,200L532,197L494,223L503,230L511,234L543,233L551,232Z",cx:527,cy:219},{d:"M551,232L568,231L573,234L583,261L599,222L597,223L596,220L590,220L590,218L594,209L597,212L602,210L602,208L597,205L582,204L580,209L581,215L576,217L567,214L564,215L557,212L555,213Z",cx:583,cy:233},{d:"M583,261L587,270L598,265L608,256L620,237L614,234L603,235L603,223L599,222Z",cx:602,cy:247},{d:"M54,297L55,283L45,279L31,285L21,297L11,302L8,308Z",cx:40,cy:291},{d:"M8,308L9,311L14,315L34,319L49,318L56,320L51,351L69,327L70,315L54,297Z",cx:62,cy:324},{d:"M54,297L70,315L96,298L102,275L96,259L94,260L94,263L88,266L81,265L80,270L73,270L72,273L66,272L60,283L55,283Z",cx:76,cy:290},{d:"M120,319L96,298L70,315L69,327L120,347Z",cx:94,cy:323},{d:"M137,302L130,302L124,299L118,301L117,299L124,293L124,291L127,288L127,284L102,275L96,298L120,319Z",cx:109,cy:296},{d:"M123,352L130,350L137,354L145,334L147,319L149,319L149,317L154,312L163,310L160,302L151,297L151,299L137,302L120,319L120,347Z",cx:133,cy:327},{d:"M160,302L196,280L163,249L159,256L159,264L155,265L156,269L153,273L153,281L151,283L153,288L151,297Z",cx:172,cy:276},{d:"M163,310L167,311L171,309L188,314L191,316L191,320L195,320L195,324L206,326L208,328L213,283L196,280L160,302Z",cx:186,cy:306},{d:"M257,304L218,279L213,283L208,328L215,337L223,337L231,334L239,340L245,333L247,335L246,339L248,340Z",cx:232,cy:316},{d:"M225,265L218,279L257,304L284,289L285,286L289,285L292,279L289,273L227,264Z",cx:256,cy:282},{d:"M257,304L248,340L254,343L258,337L262,339L261,336L264,336L264,333L266,332L264,329L266,326L274,319L274,317L277,316L276,306L284,289Z",cx:265,cy:316},{d:"M120,347L69,327L51,351L45,368L79,386L78,379L94,363L105,357L109,346L123,352Z",cx:78,cy:354},{d:"M45,368L41,384L42,388L48,402L52,419L55,421L61,419L73,419L77,412L77,398L80,392L79,386Z",cx:62,cy:395}]},
    "Olmaliq shahri": {w:776,h:703,o:"M768,331L751,364L736,369L678,374L668,368L662,371L575,444L568,495L552,524L548,606L543,615L542,620L544,624L564,645L568,666L584,683L571,696L535,676L522,661L508,656L489,658L471,644L463,623L457,614L451,616L450,633L425,616L400,588L394,558L356,504L296,533L269,606L186,616L106,672L78,685L21,660L13,622L8,571L44,571L83,556L112,521L142,490L150,465L128,455L102,431L105,426L168,396L182,340L162,295L157,268L152,254L147,192L143,97L144,75L162,17L164,12L172,8L200,15L199,19L274,43L210,92L215,151L213,178L202,185L197,192L197,231L271,231L271,302L197,302L198,340L212,345L228,346L239,344L239,332L249,319L294,320L304,317L308,321L316,326L360,317L399,297L404,299L436,299L431,230L474,223L477,218L536,210L551,195L568,216L572,233L599,251L631,289L711,297L750,294L760,317Z",c:[{d:"M212,116L210,92L226,80L218,25L199,19L200,15L172,8L164,12L144,75L143,110Z",cx:187,cy:50},{d:"M226,80L274,43L218,25Z",cx:236,cy:62},{d:"M197,207L198,189L202,185L213,178L215,151L212,116L143,110L146,179Z",cx:180,cy:165},{d:"M197,217L197,207L146,179L151,250L155,263Z",cx:166,cy:233},{d:"M155,263L158,272L214,296L234,231L197,231L197,217Z",cx:199,cy:247},{d:"M218,302L267,302L271,301L271,231L234,231L214,296Z",cx:248,cy:264},{d:"M457,297L490,274L458,226L431,230L435,281Z",cx:454,cy:252},{d:"M490,274L504,275L529,244L521,212L477,218L474,223L458,226Z",cx:495,cy:235},{d:"M529,244L593,255L600,252L572,233L568,216L551,195L536,210L521,212Z",cx:547,cy:224},{d:"M198,332L197,302L218,302L214,296L158,272L162,295L180,336Z",cx:185,cy:317},{d:"M369,320L412,343L455,306L457,297L435,281L436,299L404,299L399,297L366,314Z",cx:412,cy:310},{d:"M493,358L536,326L504,275L490,274L457,297L455,306Z",cx:496,cy:316},{d:"M536,326L539,327L550,322L593,255L529,244L504,275Z",cx:542,cy:298},{d:"M550,322L620,340L637,328L637,290L631,289L600,252L593,255Z",cx:599,cy:306},{d:"M637,328L664,344L710,319L708,296L637,290Z",cx:673,cy:307},{d:"M710,319L757,353L768,331L760,317L750,294L708,296Z",cx:741,cy:325},{d:"M217,390L236,368L231,345L212,345L198,340L198,332L180,336L182,340L168,396Z",cx:206,cy:357},{d:"M236,368L289,384L305,318L304,317L294,320L249,319L239,332L239,344L231,345Z",cx:265,cy:357},{d:"M305,401L343,389L369,320L366,314L360,317L316,326L308,321L305,318L289,384Z",cx:326,cy:355},{d:"M343,389L368,405L434,387L412,343L369,320Z",cx:387,cy:365},{d:"M434,387L468,408L472,405L493,358L455,306L412,343Z",cx:451,cy:350},{d:"M472,405L541,419L568,404L572,395L539,327L536,326L493,358Z",cx:524,cy:377},{d:"M572,395L607,376L620,340L550,322L539,327Z",cx:584,cy:358},{d:"M664,344L637,328L620,340L607,376L632,398L662,371L668,368L678,374Z",cx:642,cy:356},{d:"M710,319L664,344L678,374L736,369L751,364L757,353Z",cx:709,cy:349},{d:"M178,462L154,403L105,426L102,431L128,455L150,465L146,478Z",cx:143,cy:443},{d:"M228,439L217,390L168,396L154,403L178,462L209,475Z",cx:193,cy:421},{d:"M217,390L228,439L298,436L305,401L289,384L236,368Z",cx:263,cy:418},{d:"M298,436L303,453L379,464L380,463L368,405L343,389L305,401Z",cx:336,cy:421},{d:"M380,463L428,457L468,408L434,387L368,405Z",cx:411,cy:432},{d:"M568,497L575,444L593,429L568,404L541,419L551,483Z",cx:560,cy:464},{d:"M572,395L568,404L593,429L632,398L607,376Z",cx:599,cy:401},{d:"M146,526L222,507L209,475L178,462L146,478L142,490L126,506Z",cx:176,cy:498},{d:"M209,475L222,507L226,510L292,493L303,453L298,436L228,439Z",cx:257,cy:464},{d:"M292,493L317,523L356,504L368,521L379,464L303,453Z",cx:336,cy:478},{d:"M379,464L368,521L389,550L432,536L445,512L428,457Z",cx:406,cy:488},{d:"M428,457L445,512L488,504L500,484L467,409Z",cx:463,cy:471},{d:"M468,408L500,484L551,483L541,419L472,405Z",cx:516,cy:451},{d:"M125,588L151,579L146,526L126,506L112,521L83,556L57,566Z",cx:121,cy:541},{d:"M151,579L179,590L225,509L222,507L146,526Z",cx:174,cy:553},{d:"M198,615L269,606L272,598L226,510L225,509L179,590Z",cx:224,cy:550},{d:"M226,510L272,598L296,533L317,523L292,493Z",cx:270,cy:566},{d:"M470,570L490,571L507,539L488,504L445,512L432,536Z",cx:470,cy:538},{d:"M518,604L548,600L552,533L507,539L490,571Z",cx:525,cy:555},{d:"M507,539L552,533L552,524L568,497L551,483L500,484L488,504Z",cx:526,cy:514},{d:"M84,682L106,672L114,667L125,588L57,566L41,571Z",cx:91,cy:627},{d:"M470,570L432,536L389,550L394,558L400,588L425,616L437,624Z",cx:431,cy:579},{d:"M518,604L490,571L470,570L437,624L450,633L451,616L457,614L463,623L471,644L488,657Z",cx:481,cy:609},{d:"M41,571L8,571L13,622L21,660L78,685L84,682Z",cx:43,cy:641},{d:"M179,590L151,579L125,588L114,667L186,616L198,615Z",cx:134,cy:641},{d:"M518,604L488,657L508,656L522,661L535,676L571,696L584,683L568,666L564,645L544,624L542,620L543,615L548,606L548,600Z",cx:529,cy:650}]},
    "Angren shahri": {w:776,h:546,o:"M52,513L53,505L42,505L30,501L31,496L23,496L23,487L31,486L57,478L82,475L94,462L115,453L125,451L131,458L155,449L167,437L199,423L212,403L206,379L205,335L213,318L214,300L217,286L226,252L233,236L221,191L241,184L246,180L258,179L251,165L263,145L317,123L374,12L383,9L401,9L405,60L415,82L457,156L471,177L484,187L505,158L624,163L683,200L711,187L717,191L722,210L716,213L723,229L730,225L767,229L768,243L746,243L730,246L646,279L616,307L601,312L592,287L570,290L558,297L553,286L517,305L323,423L215,455L197,465L194,460L166,469L133,501L51,525L10,539L8,536Z",c:[{d:"M358,89L380,92L409,70L405,60L401,9L383,9L374,12L343,73Z",cx:382,cy:36},{d:"M342,145L358,89L343,73L317,123L304,128Z",cx:340,cy:106},{d:"M358,89L342,145L355,165L369,169L372,167L399,129L380,92Z",cx:369,cy:137},{d:"M399,129L432,125L437,121L415,82L409,70L380,92Z",cx:408,cy:107},{d:"M372,167L436,171L432,125L399,129Z",cx:410,cy:148},{d:"M432,125L436,171L451,188L468,172L457,156L437,121Z",cx:441,cy:141},{d:"M275,179L279,177L292,133L263,145L251,165L256,176Z",cx:271,cy:155},{d:"M273,242L274,243L319,216L321,189L279,177L275,179Z",cx:297,cy:202},{d:"M355,165L342,145L304,128L292,133L279,177L321,189Z",cx:317,cy:155},{d:"M321,189L319,216L338,233L388,224L369,169L355,165Z",cx:350,cy:202},{d:"M388,224L392,227L402,227L451,198L451,188L436,171L372,167L369,169Z",cx:414,cy:193},{d:"M451,188L451,198L469,216L481,217L515,194L522,159L505,158L484,187L471,177L468,172Z",cx:484,cy:187},{d:"M561,224L562,190L526,159L522,159L515,194L544,237Z",cx:543,cy:209},{d:"M562,190L593,177L599,162L526,159Z",cx:567,cy:170},{d:"M561,224L608,226L609,223L593,177L562,190Z",cx:582,cy:207},{d:"M593,177L609,223L665,189L624,163L599,162Z",cx:620,cy:206},{d:"M241,276L272,242L228,219L233,236L226,252L220,277Z",cx:248,cy:247},{d:"M273,242L275,179L256,176L258,179L246,180L241,184L221,191L228,219Z",cx:249,cy:205},{d:"M274,243L297,268L327,271L338,233L319,216Z",cx:309,cy:255},{d:"M330,274L383,275L392,227L388,224L338,233L327,271Z",cx:360,cy:252},{d:"M396,302L412,304L457,281L458,276L457,272L402,227L392,227L383,275Z",cx:409,cy:250},{d:"M402,227L457,272L469,216L451,198Z",cx:446,cy:249},{d:"M458,276L522,258L481,217L469,216L457,272Z",cx:483,cy:237},{d:"M522,258L535,260L544,237L515,194L481,217Z",cx:514,cy:227},{d:"M608,226L610,236L644,267L684,221L684,199L665,189L609,223Z",cx:643,cy:231},{d:"M684,221L644,267L645,279L708,255Z",cx:683,cy:238},{d:"M684,221L708,255L730,246L746,243L768,243L767,229L730,225L723,229L716,213L722,210L717,191L711,187L684,199Z",cx:701,cy:217},{d:"M229,360L243,346L258,304L241,276L220,277L214,300L213,318L205,335L206,361Z",cx:229,cy:327},{d:"M241,276L258,304L286,300L297,268L273,242Z",cx:270,cy:272},{d:"M243,346L307,330L286,300L258,304Z",cx:275,cy:317},{d:"M286,300L307,330L318,335L321,335L330,328L330,274L327,271L297,268Z",cx:313,cy:314},{d:"M330,328L376,326L396,302L383,275L330,274Z",cx:360,cy:288},{d:"M457,281L412,304L440,352L486,324Z",cx:448,cy:314},{d:"M535,260L522,258L458,276L457,281L486,324L517,305L548,288Z",cx:500,cy:297},{d:"M544,237L535,260L548,288L553,286L558,297L573,290L610,236L608,226L561,224Z",cx:563,cy:273},{d:"M644,267L610,236L573,290L592,287L601,312L616,307L645,279Z",cx:615,cy:273},{d:"M229,360L272,391L284,392L318,335L307,330L243,346Z",cx:272,cy:376},{d:"M343,379L321,335L318,335L284,392L316,415Z",cx:318,cy:357},{d:"M343,379L388,379L376,326L330,328L321,335Z",cx:357,cy:357},{d:"M376,326L388,379L390,381L440,352L412,304L396,302Z",cx:405,cy:339},{d:"M202,418L199,423L167,437L154,449L156,478L166,469L194,460L197,465L215,455L243,447Z",cx:197,cy:448},{d:"M243,447L249,446L272,391L229,360L206,361L206,379L212,403L202,418Z",cx:235,cy:410},{d:"M316,415L284,392L272,391L249,446L319,424Z",cx:289,cy:420},{d:"M388,379L343,379L316,415L319,424L390,381Z",cx:345,cy:398},{d:"M81,485L72,476L57,478L31,486L23,487L23,496L31,496L30,501L42,505L53,505L52,513L8,536L10,539L76,518Z",cx:65,cy:509},{d:"M81,485L76,518L133,501L146,488Z",cx:91,cy:509},{d:"M146,488L156,478L154,449L131,458L125,451L115,453L94,462L82,475L72,476L81,485Z",cx:122,cy:469}]},
    "Bekobod shahri": {w:775,h:636,o:"M8,312L38,318L56,338L81,370L111,375L116,401L171,415L203,425L225,436L243,431L260,435L322,438L345,437L383,454L405,472L420,457L456,488L454,496L475,513L533,494L616,531L634,556L687,589L744,629L757,627L768,602L746,566L742,556L744,550L725,516L725,445L659,343L653,305L649,229L708,181L744,82L711,70L659,55L645,43L636,28L597,8L577,13L583,31L570,54L550,100L496,67L485,69L457,102L448,120L443,136L442,154L421,174L418,185L409,194L379,162L302,154L296,233L270,235L220,245L154,253L105,279L98,292L57,294L33,278L28,302L12,299Z",c:[{d:"M608,73L639,32L636,28L597,8L577,13L583,31L570,54L561,75Z",cx:603,cy:43},{d:"M635,102L676,92L682,61L659,55L645,43L639,32L608,73Z",cx:647,cy:67},{d:"M439,208L442,210L461,206L503,165L510,76L496,67L485,69L457,102L448,120L443,136L442,154L421,174L420,178Z",cx:473,cy:145},{d:"M581,153L555,87L550,100L510,76L503,165L566,169Z",cx:538,cy:126},{d:"M635,102L608,73L561,75L555,87L581,153L625,154Z",cx:601,cy:127},{d:"M625,154L681,203L708,181L721,144L676,92L635,102Z",cx:673,cy:149},{d:"M676,92L721,144L744,82L711,70L682,61Z",cx:715,cy:118},{d:"M291,234L302,235L354,160L302,154L296,233Z",cx:314,cy:196},{d:"M566,169L568,230L649,230L681,203L625,154L581,153Z",cx:614,cy:186},{d:"M215,311L242,312L292,234L270,235L220,245L169,251L176,274Z",cx:223,cy:263},{d:"M347,265L439,208L420,178L418,185L409,194L379,162L354,160L302,235Z",cx:364,cy:222},{d:"M453,285L503,302L551,272L550,247L461,206L442,210Z",cx:500,cy:259},{d:"M550,247L568,230L566,169L503,165L461,206Z",cx:527,cy:218},{d:"M564,289L653,307L649,230L568,230L550,247L551,272Z",cx:601,cy:259},{d:"M127,319L176,274L169,251L154,253L105,279L98,292L57,294L33,278L31,291Z",cx:133,cy:285},{d:"M271,339L318,342L355,314L347,265L302,235L292,234L242,312Z",cx:304,cy:288},{d:"M355,314L416,345L453,285L442,210L439,208L347,265Z",cx:400,cy:275},{d:"M416,345L421,359L513,356L503,302L453,285Z",cx:468,cy:324},{d:"M513,356L536,374L555,373L564,289L551,272L503,302Z",cx:534,cy:329},{d:"M127,319L31,291L28,302L12,299L8,312L38,318L56,338L81,370L111,375L116,401L142,407Z",cx:101,cy:354},{d:"M127,319L142,407L159,412L215,311L176,274Z",cx:160,cy:363},{d:"M271,339L242,312L215,311L159,412L203,425L225,436L243,431L251,433Z",cx:221,cy:376},{d:"M251,433L260,435L322,438L340,437L318,342L271,339Z",cx:294,cy:387},{d:"M318,342L340,437L345,437L354,441L418,383L421,359L416,345L355,314Z",cx:372,cy:371},{d:"M592,389L652,307L564,289L555,373Z",cx:593,cy:340},{d:"M592,389L602,409L669,426L704,413L659,343L653,307Z",cx:641,cy:366},{d:"M471,434L418,383L354,441L383,454L405,472L420,457L454,487Z",cx:414,cy:437},{d:"M471,434L498,427L536,374L513,356L421,359L418,383Z",cx:477,cy:405},{d:"M555,373L536,374L498,427L540,466L589,442L602,409L592,389Z",cx:551,cy:418},{d:"M454,487L456,488L454,496L475,513L533,494L540,466L498,427L471,434Z",cx:497,cy:476},{d:"M533,494L616,531L621,538L622,536L589,442L540,466Z",cx:569,cy:480},{d:"M589,442L622,536L651,523L669,426L602,409Z",cx:631,cy:483},{d:"M651,523L671,526L725,496L725,445L704,413L669,426Z",cx:693,cy:471},{d:"M671,526L761,617L768,602L746,566L742,556L744,550L725,516L725,496Z",cx:725,cy:561},{d:"M671,526L651,523L621,538L634,556L687,589L744,629L757,627L761,617Z",cx:689,cy:573}]},
    "Ohangaron shahri": {w:776,h:556,o:"M582,544L664,549L702,527L747,491L743,443L731,382L730,338L752,289L768,268L743,226L676,153L595,175L579,173L541,136L483,123L502,20L498,17L485,54L463,149L447,128L429,113L406,100L380,89L304,68L30,8L10,57L167,106L139,168L99,295L50,285L20,303L21,319L8,322L14,340L157,368L162,332L254,318L244,383L247,439L282,476L350,503L487,520Z",c:[{d:"M158,100L150,34L30,8L10,57L154,102Z",cx:83,cy:45},{d:"M158,100L236,128L280,63L150,34Z",cx:212,cy:81},{d:"M240,142L328,194L400,97L380,89L280,63L236,128Z",cx:305,cy:135},{d:"M328,194L403,230L497,126L483,123L502,20L498,17L485,54L463,149L447,128L429,113L400,97Z",cx:411,cy:125},{d:"M240,142L236,128L158,100L154,102L167,106L139,168L116,240L119,243L199,224Z",cx:171,cy:196},{d:"M418,305L513,273L539,136L497,126L403,230Z",cx:488,cy:183},{d:"M302,330L413,313L418,305L403,230L327,194L284,318Z",cx:356,cy:267},{d:"M513,273L574,344L649,321L666,303L608,172L595,175L579,173L541,136L539,136Z",cx:577,cy:224},{d:"M666,303L751,291L768,268L743,226L676,153L608,172Z",cx:698,cy:247},{d:"M119,243L116,240L99,295L50,285L20,303L21,319L8,322L14,340L121,361Z",cx:73,cy:299},{d:"M121,361L157,368L162,332L254,318L252,333L282,317L199,224L119,243Z",cx:184,cy:280},{d:"M199,224L282,317L284,318L327,194L240,142Z",cx:270,cy:271},{d:"M314,397L302,330L284,318L282,317L252,333L244,383L247,439L261,453Z",cx:278,cy:390},{d:"M314,397L368,449L452,407L413,313L302,330Z",cx:371,cy:364},{d:"M413,313L452,407L495,426L537,419L574,344L513,273L418,305Z",cx:499,cy:376},{d:"M574,344L537,419L591,478L683,437L649,321Z",cx:611,cy:381},{d:"M666,303L649,321L683,437L745,463L743,443L731,382L730,338L751,291Z",cx:696,cy:360},{d:"M368,449L314,397L261,453L282,476L350,503L361,504Z",cx:315,cy:451},{d:"M361,504L465,518L495,426L452,407L368,449Z",cx:421,cy:476},{d:"M591,478L537,419L495,426L465,518L487,520L582,544L598,545Z",cx:532,cy:498},{d:"M683,437L591,478L598,545L664,549L702,527L747,491L745,463Z",cx:659,cy:509}]},
    "Nurafshon shahri": {w:776,h:680,o:"M171,487L187,495L218,504L243,510L289,512L290,476L320,474L328,520L354,518L362,506L378,505L401,524L378,552L383,556L366,582L403,596L422,600L427,585L452,590L443,627L470,635L469,661L478,660L479,673L568,617L571,592L542,585L554,526L650,547L655,530L671,529L673,485L614,446L597,458L580,443L602,429L626,416L636,417L672,385L672,370L693,364L718,383L733,385L768,337L733,294L724,288L708,266L680,298L652,270L604,335L577,336L573,334L574,302L549,276L542,271L511,229L486,248L476,233L474,227L475,219L467,220L465,219L465,198L461,165L462,159L409,148L377,93L387,83L414,76L442,84L456,93L473,85L465,69L497,41L472,8L456,12L422,32L379,45L378,54L348,65L315,70L300,60L289,65L279,63L236,69L214,106L201,93L186,113L158,119L152,113L142,117L138,130L129,134L131,140L75,163L79,174L39,195L8,218L26,222L92,182L157,152L169,169L181,132L271,96L289,110L321,185L316,194L348,248L328,266L330,269L310,286L203,363L214,366L214,385L220,386L217,427L195,461L199,469L181,479L169,483Z",c:[{d:"M378,97L377,93L387,83L414,76L442,84L456,93L473,85L465,69L497,41L472,8L456,12L422,32L379,45L378,54L348,65L334,67Z",cx:433,cy:50},{d:"M178,141L181,132L271,96L289,110L321,185L316,194L348,248L334,260L492,249L508,232L486,248L476,233L474,227L475,219L467,220L465,219L465,198L461,165L462,159L409,148L378,97L334,67L315,70L300,60L289,65L279,63L236,69L214,106L201,93L186,113L158,119L152,113L148,114Z",cx:386,cy:162},{d:"M263,387L321,336L315,282L295,297L203,363L214,366L214,371Z",cx:293,cy:317},{d:"M371,390L387,391L486,293L492,249L334,260L328,266L330,269L315,282L321,336Z",cx:391,cy:315},{d:"M492,249L486,293L516,395L603,421L633,305L630,299L604,335L577,336L573,334L574,302L549,276L542,271L511,229Z",cx:534,cy:320},{d:"M633,305L750,362L768,337L733,294L724,288L708,266L680,298L652,270L630,299Z",cx:711,cy:321},{d:"M448,449L463,451L516,395L486,293L387,391Z",cx:468,cy:342},{d:"M633,305L603,421L606,427L626,416L636,417L672,385L672,370L693,364L718,383L733,385L750,362Z",cx:650,cy:367},{d:"M267,465L263,387L214,371L214,385L220,386L217,427L203,451Z",cx:241,cy:407},{d:"M263,387L267,465L290,493L290,476L319,474L371,390L321,336Z",cx:306,cy:427},{d:"M267,465L203,451L195,461L199,469L181,479L169,483L171,487L187,495L218,504L243,510L289,512L290,493Z",cx:227,cy:481},{d:"M448,449L387,391L371,390L319,474L328,520L354,518L362,506L378,505L381,508Z",cx:380,cy:462},{d:"M495,510L659,518L619,449L614,446L597,458L580,443L606,427L603,421L516,395L463,451Z",cx:529,cy:455},{d:"M423,596L427,585L443,588L454,584L495,510L463,451L448,449L381,508L401,524L378,552L383,556L366,582L403,596L415,599Z",cx:435,cy:538},{d:"M454,584L549,629L568,617L571,592L542,585L554,526L650,547L655,530L671,529L671,527L659,518L495,510Z",cx:505,cy:565},{d:"M454,584L443,588L452,590L443,627L470,635L469,661L478,660L479,673L549,629Z",cx:497,cy:628}]},
    "Chirchiq shahri": {w:776,h:844,o:"M342,316L274,257L269,231L290,231L415,164L463,141L494,133L513,116L544,82L576,63L631,50L642,31L646,26L653,32L651,42L694,78L706,66L703,61L707,59L710,61L719,52L718,45L719,39L729,36L739,25L747,25L766,8L768,11L697,83L698,84L696,87L704,94L708,104L669,159L646,187L620,224L589,245L559,290L499,372L493,399L460,448L464,489L442,526L441,537L443,540L486,552L501,563L495,610L492,620L466,671L450,683L429,690L417,667L407,682L403,695L361,669L353,683L330,686L313,698L348,712L364,726L369,734L361,761L345,751L356,732L337,722L330,723L326,730L318,735L316,732L309,737L303,733L302,728L306,725L301,719L294,715L269,726L259,733L257,732L245,718L222,729L220,727L193,753L95,837L91,827L91,801L87,799L72,812L66,805L31,767L50,748L38,741L31,741L22,732L18,720L21,719L34,709L40,702L44,696L42,691L35,693L34,691L36,682L31,681L30,679L48,651L38,634L45,618L14,614L13,596L8,595L15,588L13,584L18,556L15,546L29,543L49,531L56,541L79,528L108,508L113,508L159,459L179,475L194,456L207,452L228,471L251,504L292,486L321,451L312,437L294,449L284,451L256,469L248,466L246,457L255,440L267,427L276,425L284,397L283,382L302,378L303,372L294,366L296,342L310,329L333,332Z",c:[{d:"M533,118L576,141L588,137L645,27L642,31L631,50L576,63L544,82L523,106Z",cx:572,cy:94},{d:"M658,157L664,164L708,104L704,94L696,87L698,84L697,83L768,11L766,8L747,25L739,25L729,36L719,39L718,45L719,52L710,61L707,59L703,61L706,66L694,78L678,65Z",cx:685,cy:85},{d:"M678,65L651,42L653,32L646,26L588,137L658,157Z",cx:638,cy:101},{d:"M359,222L418,198L427,175L422,161L341,204Z",cx:398,cy:187},{d:"M488,194L533,118L523,106L494,133L463,141L422,161L427,175Z",cx:478,cy:151},{d:"M508,226L570,200L576,141L533,118L488,194Z",cx:539,cy:168},{d:"M658,157L588,137L576,141L570,200L601,237L620,224L646,187L664,164Z",cx:606,cy:193},{d:"M334,288L354,273L359,222L341,204L290,231L269,231L274,257L285,267L304,284Z",cx:314,cy:244},{d:"M354,273L396,274L426,236L418,198L359,222Z",cx:384,cy:255},{d:"M426,236L462,257L507,232L508,226L488,194L427,175L418,198Z",cx:460,cy:212},{d:"M507,232L535,292L553,299L589,245L601,237L570,200L508,226Z",cx:549,cy:269},{d:"M355,340L449,338L449,338L396,274L354,273L334,288Z",cx:386,cy:313},{d:"M449,338L458,327L462,257L426,236L396,274Z",cx:439,cy:300},{d:"M458,327L535,292L507,232L462,257Z",cx:494,cy:274},{d:"M338,385L355,340L334,288L304,284L342,316L333,332L310,329L296,342L294,366L303,372L301,378Z",cx:328,cy:336},{d:"M342,392L374,407L460,385L449,338L355,340L338,385Z",cx:401,cy:362},{d:"M449,338L460,385L492,400L499,372L553,299L535,292L458,327Z",cx:482,cy:355},{d:"M342,392L338,385L301,378L283,382L284,397L276,425L267,427L255,440L248,454L256,466L259,467L284,451L294,449L312,437L318,446Z",cx:307,cy:411},{d:"M318,446L321,451L310,464L303,481L383,464L374,407L342,392Z",cx:352,cy:426},{d:"M383,464L414,483L461,386L460,385L374,407Z",cx:408,cy:435},{d:"M277,570L314,587L358,538L303,481L296,482Z",cx:311,cy:510},{d:"M358,538L383,540L421,503L414,483L383,464L304,481Z",cx:366,cy:493},{d:"M450,512L464,489L460,448L492,400L461,386L414,483L421,503Z",cx:442,cy:466},{d:"M48,597L61,538L56,541L49,531L29,543L15,546L18,556L13,584L15,588L8,595L13,596L14,609Z",cx:35,cy:570},{d:"M48,597L75,607L123,581L120,501L113,508L108,508L61,538Z",cx:89,cy:560},{d:"M200,540L126,494L120,501L123,581L157,600L204,552Z",cx:162,cy:546},{d:"M200,540L240,487L228,471L207,452L194,456L179,475L159,459L126,494Z",cx:190,cy:517},{d:"M204,552L243,581L277,570L296,482L292,486L251,504L240,487L200,540Z",cx:251,cy:522},{d:"M326,612L401,598L383,540L358,538L314,587Z",cx:363,cy:564},{d:"M164,647L157,600L123,581L75,607L98,647L150,658Z",cx:124,cy:627},{d:"M164,647L180,649L239,610L243,581L204,552L157,600Z",cx:199,cy:605},{d:"M383,540L401,598L417,611L444,607L488,553L443,540L441,537L442,526L450,512L421,503Z",cx:432,cy:576},{d:"M444,607L478,648L492,620L495,610L501,563L488,553Z",cx:480,cy:585},{d:"M65,695L98,647L75,607L48,597L14,609L14,614L45,618L38,634L48,651L30,679L31,681L36,682L35,693L42,691L43,694Z",cx:68,cy:641},{d:"M93,722L142,724L150,658L98,647L65,695Z",cx:113,cy:677},{d:"M239,610L180,649L224,689L273,668Z",cx:229,cy:658},{d:"M273,668L317,681L326,612L314,587L277,570L243,581L239,610Z",cx:290,cy:640},{d:"M317,681L324,690L330,686L353,683L361,669L389,687L417,611L401,598L326,612Z",cx:364,cy:641},{d:"M444,607L417,611L389,687L403,695L407,682L417,667L429,690L450,683L466,671L478,648Z",cx:437,cy:658},{d:"M65,780L93,722L65,695L43,694L40,702L34,709L18,720L22,732L31,741L38,741L50,748L31,767L50,787Z",cx:59,cy:741},{d:"M65,780L141,798L176,767L142,724L93,722Z",cx:120,cy:746},{d:"M224,689L180,649L164,647L150,658L142,724L176,767L210,737Z",cx:181,cy:707},{d:"M210,737L220,727L222,729L245,718L257,732L259,733L269,726L294,715L301,719L306,725L302,728L303,733L309,737L316,732L318,735L326,730L330,723L332,722L339,722L353,729L337,708L313,698L324,690L317,681L273,668L224,689Z",cx:272,cy:703},{d:"M65,780L50,787L72,812L87,799L91,801L91,827L95,837L141,798Z",cx:111,cy:806}]},
    "Yangiyo'l shahri": {w:680,h:916,o:"M8,727L16,741L32,756L36,760L43,779L52,790L57,807L37,824L32,831L17,831L87,865L88,866L100,862L111,853L122,854L128,852L133,844L143,836L151,829L150,822L148,817L170,823L177,827L166,848L140,888L167,908L202,842L213,825L228,825L258,842L268,845L280,847L286,846L294,844L307,836L314,842L334,802L379,719L379,746L462,592L487,620L493,612L518,635L522,632L523,598L510,581L517,572L506,561L519,546L506,531L673,215L654,207L648,184L649,173L646,165L638,157L619,173L610,163L610,161L615,154L612,147L608,135L592,138L562,140L554,134L524,105L515,89L512,51L506,45L487,31L469,9L466,8L461,11L461,14L467,24L467,29L461,31L456,37L434,55L441,77L424,116L410,130L398,134L381,157L371,164L362,174L353,188L347,201L352,212L352,219L353,225L350,230L339,239L335,246L326,253L308,258L304,264L303,272L297,280L287,285L277,286L267,291L263,298L265,310L263,318L258,325L260,333L260,338L263,351L261,354L257,355L248,354L224,367L215,368L208,378L200,386L174,404L173,406L178,417L176,432L171,444L163,455L160,462L155,467L144,469L131,468L128,471L124,484L122,487L114,487L110,489L111,497L109,499L122,526L134,541L119,551L118,554L112,558L108,555L103,546L98,550L94,566L96,572L91,617L65,654L58,660L13,722Z",c:[{d:"M525,163L548,129L524,105L518,97L514,83L512,51L506,45L487,31L466,8L461,11L461,14L467,24L467,29L461,31L456,37L434,55L441,77L424,116L410,130L398,134L394,141Z",cx:476,cy:90},{d:"M525,163L531,209L560,253L643,271L673,215L654,207L648,184L649,173L646,165L638,157L619,173L610,163L610,161L615,154L608,135L592,138L562,140L548,129Z",cx:590,cy:196},{d:"M531,209L525,163L394,141L381,157L371,164L362,174L353,188L347,201L352,212L353,225L350,230L339,239L335,246L326,252L386,305Z",cx:435,cy:218},{d:"M407,372L429,383L538,333L560,253L531,209L386,305Z",cx:489,cy:279},{d:"M560,253L538,333L581,389L643,271Z",cx:587,cy:302},{d:"M247,417L317,438L407,372L386,305L326,252L308,258L304,264L303,272L297,280L287,285L277,286L267,291L263,298L265,310L263,318L258,325L263,351L261,354L248,354L224,367L215,368L213,370Z",cx:328,cy:338},{d:"M501,511L513,518L581,389L538,333L429,383Z",cx:508,cy:450},{d:"M159,573L174,562L247,417L213,370L208,378L200,386L174,404L178,417L176,432L171,444L163,455L160,462L155,467L144,469L131,468L128,471L124,484L122,487L114,487L110,489L111,497L109,499L122,526L134,541L119,551L118,554L112,558L108,555L103,546L98,550L95,559L94,566L95,569Z",cx:171,cy:477},{d:"M339,535L317,438L247,417L174,562L335,543Z",cx:270,cy:487},{d:"M339,535L501,511L429,383L407,372L317,438Z",cx:403,cy:475},{d:"M347,618L335,543L174,562L159,573L207,636L317,651Z",cx:260,cy:595},{d:"M335,543L347,618L432,648L462,592L487,620L493,612L518,635L522,632L523,598L510,581L517,572L506,561L519,546L506,531L513,518L501,511L339,535Z",cx:427,cy:577},{d:"M209,734L207,636L159,573L95,569L96,572L91,617L79,634L125,737L186,749Z",cx:155,cy:685},{d:"M125,737L79,634L8,727L16,741L36,760L43,779L52,790L57,806Z",cx:72,cy:680},{d:"M209,734L318,770L317,651L207,636Z",cx:263,cy:693},{d:"M347,618L317,651L318,770L338,795L379,719L379,746L432,648Z",cx:364,cy:685},{d:"M186,749L125,737L28,836L88,866L100,862L111,853L122,854L128,852L133,844L151,829L148,817L170,823L176,826Z",cx:131,cy:783},{d:"M318,770L209,734L186,749L166,908L202,842L213,825L228,825L258,842L268,845L280,847L286,846L294,844L307,836L314,842L338,795Z",cx:254,cy:810}]},
  };

  const REGION_NAME = "Toshkent viloyati";
  // Real ma'lumotlar: aholi soni va mahallalar soni — rasmiy statistika; users — demo (KXI bilan bog'liq qamrov)
  const TUMANLAR = [
    { name:"Nurafshon", city:true, kxi:88, aholi:58532, users:9002, mahallas:16, own:true },
    { name:"Chirchiq", city:true, kxi:86, aholi:178270, users:26585, mahallas:44 },
    { name:"Olmaliq", city:true, kxi:81, aholi:151022, users:21293, mahallas:51 },
    { name:"Qibray", kxi:79, aholi:181732, users:21310, mahallas:67 },
    { name:"Angren", city:true, kxi:78, aholi:188275, users:24370, mahallas:47 },
    { name:"Bekobod", city:true, kxi:74, aholi:107292, users:12987, mahallas:35 },
    { name:"Yangiyo'l", city:true, kxi:72, aholi:88884, users:11250, mahallas:18 },
    { name:"Toshkent tumani", kxi:71, aholi:209794, users:23835, mahallas:68, label:"Toshkent t." },
    { name:"Ohangaron", city:true, kxi:69, aholi:42731, users:4590, mahallas:21 },
    { name:"Zangiota", kxi:68, aholi:180533, users:19830, mahallas:72 },
    { name:"Yangiyo'l tumani", kxi:66, aholi:207692, users:23170, mahallas:69, label:"Yangiyo'l t." },
    { name:"Quyi Chirchiq", kxi:64, aholi:119390, users:12555, mahallas:37 },
    { name:"Parkent", kxi:62, aholi:185049, users:21505, mahallas:62 },
    { name:"O'rta Chirchiq", kxi:60, aholi:142986, users:15752, mahallas:57 },
    { name:"Bo'stonliq", kxi:58, aholi:179084, users:20600, mahallas:59 },
    { name:"Yuqori Chirchiq", kxi:57, aholi:144026, users:14952, mahallas:45 },
    { name:"Piskent", kxi:55, aholi:104851, users:9464, mahallas:29 },
    { name:"Oqqo'rg'on", kxi:53, aholi:115547, users:12196, mahallas:29 },
    { name:"Bo'ka", kxi:51, aholi:138730, users:13204, mahallas:42 },
    { name:"Ohangaron tumani", kxi:49, aholi:114606, users:10967, mahallas:29, label:"Ohangaron t." },
    { name:"Chinoz", kxi:47, aholi:150502, users:14750, mahallas:55 },
    { name:"Bekobod tumani", kxi:44, aholi:170912, users:15069, mahallas:51, label:"Bekobod t." },
  ];
  // hudud nomini ko'rsatish: shahar => "X sh.", tuman => qisqa nom
  const tumDisp = t => t.label || (t.city ? t.name + " sh." : t.name);
  const tumFull = t => t.label ? t.name : (t.city ? t.name + " shahri" : t.name + " tumani");
  // 0=qizil, 50=sariq, 100=yashil — uzluksiz rang shkalasi
  function kxiColor(score) {
    const stops = [[0, [221, 77, 77]], [50, [232, 165, 50]], [81, [122, 184, 92]], [100, [27, 158, 134]]];
    let a = stops[0], b = stops[stops.length - 1];
    for (let i = 0; i < stops.length - 1; i++) if (score >= stops[i][0] && score <= stops[i + 1][0]) { a = stops[i]; b = stops[i + 1]; break; }
    const t = b[0] === a[0] ? 0 : (score - a[0]) / (b[0] - a[0]);
    const c = k => Math.round(a[1][k] + (b[1][k] - a[1][k]) * t);
    return `rgb(${c(0)},${c(1)},${c(2)})`;
  }
  const MHZ_NAMES = ["Navbahor", "Bog'iston", "Yangiobod", "Do'stlik", "Bunyodkor", "Istiqlol", "Guliston", "Obod", "Birlik", "Mehnat", "Chinor", "Lola", "Navro'z", "Mustaqillik", "Oqtepa", "Gulzor", "Bahor", "Sharq", "Yoshlik", "Tinchlik", "Hamkor", "Kelajak", "Fayzobod", "Qorako'l"];
  function tumanMahallas(t) {
    let s = 0; for (const ch of t.name) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
    const rand = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
    const off = s % MHZ_NAMES.length;
    const gen = i => {
      const cyc = Math.floor((off + i) / MHZ_NAMES.length);
      const base = MHZ_NAMES[(off + i) % MHZ_NAMES.length];
      return (cyc > 0 ? base + "-" + (cyc + 1) : base) + " MFY";
    };
    if (t.own) {
      // birinchi 8 tasi — nomli KXI namunasi, qolganlari generatsiya (jami real son: t.mahallas)
      const sample = KXI_MAHALLALAR.map(m => ({ name: m.name, score: kxiScore(m), aholi: m.aholi, xon: m.xon, oila: m.oila }));
      const extra = Array.from({ length: Math.max(0, t.mahallas - sample.length) }, (_, i) =>
        ({ name: gen(i), score: Math.max(22, Math.min(98, Math.round(t.kxi + (rand() * 2 - 1) * 17))) }));
      return sample.concat(extra);
    }
    return Array.from({ length: t.mahallas }, (_, i) => ({ name: gen(i), score: Math.max(22, Math.min(98, Math.round(t.kxi + (rand() * 2 - 1) * 17))) }));
  }
  // buzilgan to'r asosida gap'siz choropleth katakchalarini hosil qilish
  function gridCells(units, cols, w, h, seed) {
    const n = units.length, rows = Math.ceil(n / cols);
    const cw = w / cols, ch = h / rows;
    let s = seed || 7; const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
    const V = [];
    for (let r = 0; r <= rows; r++) { V[r] = []; for (let c = 0; c <= cols; c++) {
      const jx = (c === 0 || c === cols) ? 0 : (rnd() * 2 - 1) * cw * 0.22;
      const jy = (r === 0 || r === rows) ? 0 : (rnd() * 2 - 1) * ch * 0.22;
      // tashqi chekka biroz organik
      const ex = (c === 0 ? rnd() * cw * 0.12 : c === cols ? -rnd() * cw * 0.12 : 0);
      const ey = (r === 0 ? rnd() * ch * 0.12 : r === rows ? -rnd() * ch * 0.12 : 0);
      V[r][c] = [c * cw + jx + ex, r * ch + jy + ey];
    } }
    const cells = [];
    for (let i = 0; i < n; i++) { const r = Math.floor(i / cols), c = i % cols;
      const p = [V[r][c], V[r][c + 1], V[r + 1][c + 1], V[r + 1][c]];
      const cx = (p[0][0] + p[1][0] + p[2][0] + p[3][0]) / 4, cy = (p[0][1] + p[1][1] + p[2][1] + p[3][1]) / 4;
      cells.push({ unit: units[i], d: `M${p.map(q => q.map(Math.round).join(",")).join("L")}Z`, cx, cy });
    }
    return cells;
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */
  const VIEW_TITLES = {
    dash:"Boshqaruv paneli", feed:"Tahdidlar lentasi", check:"Tekshirgich", quiz:"Kibersinov",
    assist:"AI Hamroh", help:"Yordam", reg:"Ro'yxatdan o'tish", legal:"Huquqiy asoslar",
    life:"Kiber Layfxak", rating:"Kiber Layfxak", cert:"Offline sertifikat sinovi", video:"So'nggi videolar", priv:"Imtiyozlar", privilege:"Imtiyozlar", condition:"Imtiyoz sharti",
    admin:"Superadmin paneli", mahalla:"Mahalla paneli", kxi:"KiberXavfsizlik Indeksi", map:"Platforma kartasi"
  };
  let dashAnimated = false, quizBuilt = false;

  /* ---- RBAC state ---- */
  let currentRole = "superadmin";
  const RESTRICTED = { admin: ["superadmin"], mahalla: ["superadmin", "raisi"], kxi: ["superadmin", "tuman", "raisi"] };
  const canSeeView = v => !RESTRICTED[v] || RESTRICTED[v].includes(currentRole);

  function showView(v) {
    if (!canSeeView(v)) v = "dash"; // RBAC: ruxsat bo'lmasa, asosiy panelga qaytadi
    $$(".view").forEach(s => s.classList.toggle("is-active", s.id === "view-" + v));
    $$(".nav-item").forEach(b => b.classList.toggle("is-active", b.dataset.view === v));
    document.title = (VIEW_TITLES[v] || "KiberOgoh UZ") + " · KiberOgoh UZ";
    $("#main").scrollTo ? window.scrollTo({ top: 0, behavior: "smooth" }) : window.scrollTo(0, 0);
    closeRail();
    if (v === "dash" && !dashAnimated) { animateDash(); dashAnimated = true; }
    if (v === "appeals") renderAppeals();
    if (v === "quiz") {
      if (quizGateNeeded()) { renderQuizGate(); quizBuilt = false; }
      else if (!quizBuilt) { startQuiz(); quizBuilt = true; }
    }
  }
  // Kibersinov himoyasi: natija mahalla/tuman statistikasiga qo'shiladi — ID talab qilinadi
  function quizGateNeeded() { return currentRole === "user" && !KO_USER; }
  function renderQuizGate() {
    const w = $("#quizWrap"); if (!w) return;
    w.innerHTML = `
      <div class="card quiz-gate">
        <div class="quiz-gate__ico">${ICON.lock}</div>
        <h3>Avval ro'yxatdan o'ting</h3>
        <p>Kibersinov natijangiz <b>shaxsiy ballingizga</b>, so'ng <b>mahallangiz</b> va <b>tumaningiz</b> statistikasiga qo'shiladi. Buning uchun doimiy ID kerak.</p>
        <p class="quiz-gate__soft">Ro'yxatdan bir marta o'tasiz — login-parol talab qilinmaydi, ID qurilmangizda saqlanadi.</p>
        <div class="quiz-gate__btns">
          <button class="btn btn--gold btn--lg" data-view="reg">Ro'yxatdan o'tish →</button>
          <button class="btn btn--ghost" data-view="dash">Bosh sahifa</button>
        </div>
      </div>`;
    wireViewBtns(w);
  }
  function updateQuizLock() {
    const nav = document.querySelector('.nav-item[data-view="quiz"]'); if (!nav) return;
    let ic = nav.querySelector(".rlock");
    if (quizGateNeeded() && !ic) { ic = document.createElement("span"); ic.className = "rlock"; ic.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'; nav.appendChild(ic); }
    if (!quizGateNeeded() && ic) ic.remove();
  }
  function bindNav() {
    $$("[data-view]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); showView(b.dataset.view); }));
  }

  // RBAC: rolga qarab navigatsiyani va ko'rinishni boshqaradi
  function applyRole(role) {
    if (LOCKED_ROLES.includes(role) && !unlockedRoles[role]) { openLogin(role); return; }
    currentRole = role;
    $$("#roleSwitch button").forEach(b => b.classList.toggle("is-active", b.dataset.role === role));
    // rolga tegishli nav elementlarini ko'rsatish/yashirish
    $$(".nav-item[data-role]").forEach(b => {
      const allowed = b.dataset.role.split(/\s+/).includes(role);
      b.style.display = allowed ? "" : "none";
    });
    // "Boshqaruv" guruhini bo'sh bo'lsa yashirish
    const grp = $("[data-admin-group]");
    if (grp) {
      const anyVisible = $$(".nav-item[data-role]", grp).some(b => b.style.display !== "none");
      grp.style.display = anyVisible ? "" : "none";
    }
    // agar joriy ko'rinish endi yopiq bo'lsa, asosiy panelga qaytadi
    const active = ($(".view.is-active") || {}).id || "";
    const v = active.replace("view-", "");
    if (!canSeeView(v)) showView("dash");
    mapDrill = null;
    if (typeof renderMap === "function") renderMap();
    if (typeof updateQuizLock === "function") updateQuizLock();
    if (typeof updateAppealsBadge === "function") updateAppealsBadge();
    if ($("#view-appeals") && $("#view-appeals").classList.contains("is-active") && typeof renderAppeals === "function") renderAppeals();
    if ($("#view-quiz") && $("#view-quiz").classList.contains("is-active")) {
      if (quizGateNeeded()) { renderQuizGate(); quizBuilt = false; }
      else if (!quizBuilt) { startQuiz(); quizBuilt = true; }
    }
  }
  function bindRoleSwitch() {
    $$("#roleSwitch button").forEach(b => b.addEventListener("click", () => applyRole(b.dataset.role)));
    updateRoleLocks();
  }

  /* ---- Login oynasi (superadmin / tuman mas'uli / yoshlar yetakchisi) ---- */
  let pendingRole = null;
  function updateRoleLocks() {
    $$("#roleSwitch button").forEach(b => {
      const r = b.dataset.role;
      const need = LOCKED_ROLES.includes(r) && !unlockedRoles[r];
      let ic = b.querySelector(".rlock");
      if (need && !ic) { ic = document.createElement("span"); ic.className = "rlock"; ic.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'; b.appendChild(ic); }
      if (!need && ic) ic.remove();
    });
  }
  function openLogin(role) {
    pendingRole = role;
    $("#loginRole").textContent = ROLE_META[role].name;
    $("#loginErr").classList.remove("show");
    $("#loginUser").value = ""; $("#loginPass").value = "";
    $("#loginModal").classList.add("is-open");
    setTimeout(() => $("#loginUser").focus(), 60);
  }
  function closeLogin() { $("#loginModal").classList.remove("is-open"); pendingRole = null; }
  function tryLogin() {
    const u = $("#loginUser").value.trim(), p = $("#loginPass").value;
    if (u === AUTH.login && p === AUTH.pass) {
      unlockedRoles[pendingRole] = true;
      const r = pendingRole; closeLogin(); updateRoleLocks(); applyRole(r);
    } else {
      const err = $("#loginErr"); err.classList.add("show");
      const card = $("#loginModal .login-card"); card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
    }
  }
  function setupLogin() {
    $("#loginGo").addEventListener("click", tryLogin);
    $("#loginCancel").addEventListener("click", closeLogin);
    $("#loginModal").addEventListener("click", e => { if (e.target.id === "loginModal") closeLogin(); });
    document.addEventListener("keydown", e => {
      if (!$("#loginModal").classList.contains("is-open")) return;
      if (e.key === "Escape") closeLogin();
      if (e.key === "Enter") tryLogin();
    });
  }

  /* ---- User ID: bir marta ro'yxat, avtomatik kirish, logout yo'q ---- */
  function genUserId() { return "KO-2026-" + String(100000 + Math.floor(Math.random() * 900000)); }
  function applyUserChip() {
    const btn = $("#topRegBtn"); if (!btn) return;
    if (KO_USER) {
      btn.classList.remove("btn--gold"); btn.classList.add("uid-chip");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2.2"/><path d="M6 16c.7-1.5 1.9-2.2 3-2.2s2.3.7 3 2.2M14 9h5M14 12.5h5" stroke-linecap="round"/></svg>${KO_USER.name ? `<span class="uid-chip__name">${KO_USER.name}</span>` : ""}<span class="uid-chip__id">${KO_USER.id}</span>`;
      btn.title = "Sizning doimiy ID raqamingiz — qayta kirish talab qilinmaydi";
    }
  }
  function applyUserName() {
    const n = KO_USER && KO_USER.name;
    const h = $("#helloName"); if (h && n) h.textContent = n;
    const hi = $("#regHi"); if (hi) hi.textContent = n ? `Xush kelibsiz, ${n}!` : "Xush kelibsiz!";
  }
  function showRegSaved() {
    if (!KO_USER) return;
    const fb = $("#regFormBody"), sc = $("#regSuccess");
    if (fb) fb.style.display = "none";
    if (sc) sc.classList.add("show");
    const w = $("#regWhere"); if (w) w.textContent = `${KO_USER.viloyat} → ${KO_USER.tuman} → ${KO_USER.mahalla}`;
    const idEl = $("#regId"); if (idEl) idEl.textContent = KO_USER.id;
    applyUserName();
    const tr = $("#topRegion"); if (tr) tr.textContent = KO_USER.viloyat;
  }

  // mobile rail
  function openRail() { $("#rail").classList.add("is-open"); $("#railScrim").classList.add("is-open"); }
  function closeRail() { $("#rail").classList.remove("is-open"); $("#railScrim").classList.remove("is-open"); }
  $("#menuToggle").addEventListener("click", () => $("#rail").classList.contains("is-open") ? closeRail() : openRail());
  $("#railScrim").addEventListener("click", closeRail);

  /* =========================================================
     DASHBOARD
     ========================================================= */
  function renderStats() {
    const g = $("#statGrid");
    STATS.forEach(s => {
      const c = el("div", "card stat");
      c.innerHTML = `<div class="stat__ico ${s.cls}">${s.ico}</div>
        <div class="stat__num" data-target="${s.num}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat__label">${s.label}</div>
        <div class="stat__target">▲ ${s.y2}</div>`;
      g.appendChild(c);
    });
  }
  function animateDash() {
    // count-up (faqat dashboard kartalari)
    $$("#statGrid .stat__num").forEach(n => {
      const target = +n.dataset.target, suf = n.dataset.suffix; let cur = 0;
      const steps = 38, inc = target / steps; let i = 0;
      const fmt = x => (x >= 1000 ? Math.round(x).toLocaleString("ru-RU").replace(/,/g, " ") : Math.round(x));
      const tick = () => { i++; cur = Math.min(target, cur + inc); n.textContent = fmt(cur) + suf; if (i < steps) requestAnimationFrame(tick); else n.textContent = fmt(target) + suf; };
      requestAnimationFrame(tick);
    });
    // shield ring (faqat mavjud bo'lsa)
    const C = 2 * Math.PI * 52, pct = 0.86;
    const ring = $("#shieldProg");
    if (ring) {
      ring.style.strokeDasharray = C; ring.style.strokeDashoffset = C;
      setTimeout(() => { ring.style.strokeDashoffset = C * (1 - pct); }, 150);
      let p = 0; const pe = $("#shieldPct");
      const pt = () => { p = Math.min(86, p + 2); if (pe) pe.textContent = p + "%"; if (p < 86) requestAnimationFrame(pt); };
      setTimeout(() => requestAnimationFrame(pt), 150);
      const ma = $("#mActive"), mb = $("#mBlocked"); if (ma) ma.textContent = "312"; if (mb) mb.textContent = "5 240";
    }
  }
  function alertNode(a, isNew) {
    const cat = CATS[a.cat];
    const sevTxt = { high:"Yuqori xavf", mid:"O'rtacha", low:"Past" }[a.sev];
    const n = el("div", "alert" + (isNew ? " is-new" : ""));
    n.innerHTML = `<div class="alert__ico ${cat.color}">${cat.ico}</div>
      <div class="alert__body">
        <h4>${a.title}</h4><p>${a.body}</p>
        <div class="alert__tags"><span class="tag">${cat.label}</span><span class="tag tag--region">📍 ${a.region}</span><span class="tag">${a.n} ta xabar</span></div>
      </div>
      <div class="alert__side"><span class="sev sev--${a.sev}">${sevTxt}</span><div class="alert__time">${a.time || "hozir"}</div></div>`;
    return n;
  }
  function renderDashFeed() {
    const f = $("#dashFeed"); if (!f) return; f.innerHTML = "";
    FEED.slice(0, 3).forEach(a => f.appendChild(alertNode(a)));
  }
  function renderPyramid(target) {
    const p = $(target); p.innerHTML = "";
    PYRAMID.forEach(r => { const row = el("div", "pyr-row " + r.c); row.innerHTML = `<div class="lvl">${r.lvl}</div><div class="desc">${r.desc}</div>`; p.appendChild(row); });
  }

  /* =========================================================
     THREAT FEED
     ========================================================= */
  let feedFilter = "all", liveTimer = null, liveIndex = 0;
  function renderFeedFilters() {
    const wrap = $("#feedFilters"); wrap.innerHTML = "";
    const opts = [["all","Barchasi"]].concat(Object.keys(CATS).map(k => [k, CATS[k].label]));
    opts.forEach(([k, lab]) => {
      const c = el("button", "chip" + (k === feedFilter ? " is-active" : ""), lab);
      c.addEventListener("click", () => { feedFilter = k; renderFeedFilters(); renderFullFeed(); });
      wrap.appendChild(c);
    });
  }
  function renderFullFeed() {
    const f = $("#fullFeed"); f.innerHTML = "";
    FEED.filter(a => feedFilter === "all" || a.cat === feedFilter).forEach(a => f.appendChild(alertNode(a)));
  }
  function startLive() {
    if (liveTimer) return;
    liveTimer = setInterval(() => {
      const a = Object.assign({}, LIVE_POOL[liveIndex % LIVE_POOL.length], { time:"hozir" });
      liveIndex++;
      FEED.unshift(a);
      if (FEED.length > 14) FEED.pop();
      const badge = $("#feedBadge");
      badge.textContent = Math.min(99, (+badge.textContent || 0) + 1);
      if ($("#view-feed").classList.contains("is-active")) {
        if (feedFilter === "all" || a.cat === feedFilter) $("#fullFeed").prepend(alertNode(a, true));
      }
      if ($("#view-dash").classList.contains("is-active")) renderDashFeed();
    }, 14000);
  }

  /* =========================================================
     TEKSHIRGICH (checker)
     ========================================================= */
  const BRANDS = ["click","payme","uzcard","humo","beeline","ucell","uzmobile","mygov","soliq","pochta","olx","uzum","apelsin","kapitalbank","ipoteka","anorbank","tbc"];
  const OFFICIAL = { click:"click.uz", payme:"payme.uz", uzcard:"uzcard.uz", humo:"humocard.uz", beeline:"beeline.uz", ucell:"ucell.uz", uzmobile:"uzmobile.uz", olx:"olx.uz", uzum:"uzum.uz" };
  const BAD_TLD = ["xyz","top","club","online","site","click","link","work","gq","tk","ml","cf","buzz","icu","rest","fit","cyou"];
  const SHORTENERS = ["bit.ly","tinyurl.com","cutt.ly","goo.gl","is.gd","t.co","clck.ru","rb.gy"];
  const KEYWORDS = ["win","bonus","prize","free","gift","login","verify","secure","update","wallet","sovga","yutuq","yutdingiz","bepul","parol","karta","blok","pul","kod"];
  const DEMO_BAD_PHONES = ["+998900001122","+998711234567","+79991234567"];

  function classify(text) {
    const t = text.trim();
    const digits = t.replace(/[^\d+]/g, "");
    const phoneLike = /^[+\d][\d\s\-()]{6,}$/.test(t) && digits.replace(/\D/g,"").length >= 7 && !/[a-z]{2,}/i.test(t);
    const urlLike = /(https?:\/\/|www\.)/i.test(t) || /\b[a-z0-9-]+\.[a-z]{2,}(\/|\?|$)/i.test(t);
    if (phoneLike && !urlLike) return "phone";
    if (urlLike) return "url";
    return "text";
  }
  function extractHost(url) {
    let u = url.trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "");
    u = u.split(/[\/?#]/)[0];
    return u.toLowerCase();
  }
  function analyze(text) {
    const type = classify(text);
    const signals = []; let score = 0;
    if (type === "url") {
      const lower = text.toLowerCase();
      const host = extractHost(text);
      const tld = host.split(".").pop();
      const isHttps = /^https:\/\//i.test(text.trim());
      const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
      signals.push({ l:"info", t:"Tahlil turi: havola (URL)" });
      signals.push({ l:"info", t:"Domen: " + host });

      if (isIp) { score += 45; signals.push({ l:"bad", t:"Domen o'rniga IP-manzil — rasmiy saytlar bunday qilmaydi" }); }
      if (!isHttps && !isIp) { score += 12; signals.push({ l:"warn", t:"Ulanish himoyalanmagan (http://) — qulf belgisi yo'q" }); }
      else if (isHttps) signals.push({ l:"ok", t:"HTTPS ulanish mavjud (lekin bu o'zi kafolat emas)" });

      let brandHit = null;
      BRANDS.forEach(b => { if (host.includes(b)) brandHit = b; });
      if (brandHit) {
        const off = OFFICIAL[brandHit];
        if (off && host !== off && !host.endsWith("." + off)) {
          score += 40; signals.push({ l:"bad", t:`“${brandHit}” nomi ishlatilgan, lekin domen rasmiy (${off}) emas — soxta` });
        } else if (off) signals.push({ l:"ok", t:`Rasmiy domenga mos: ${off}` });
      }
      if (BAD_TLD.includes(tld)) { score += 28; signals.push({ l:"bad", t:`Shubhali domen oxiri: .${tld} — firibgarlikda ko'p uchraydi` }); }
      if (SHORTENERS.some(s => host === s || host.endsWith("." + s))) { score += 22; signals.push({ l:"warn", t:"Qisqartirilgan havola — asl manzil yashirilgan" }); }
      if (host.startsWith("xn--") || /xn--/.test(host)) { score += 30; signals.push({ l:"bad", t:"Punycode domen — harflar soxtalashtirilgan bo'lishi mumkin" }); }
      const kw = KEYWORDS.filter(k => lower.includes(k));
      if (kw.length) { score += Math.min(24, kw.length * 8); signals.push({ l:"warn", t:"Xavfli kalit so'zlar: " + kw.slice(0,4).join(", ") }); }
      const hcount = (host.match(/-/g) || []).length;
      if (hcount >= 2) { score += 10; signals.push({ l:"warn", t:"Domende ko'p tire (-) belgilari" }); }
      if (/\d/.test(host) && !isIp) { score += 6; signals.push({ l:"warn", t:"Domende raqamlar bor" }); }
      if (signals.filter(s => s.l === "bad" || s.l === "warn").length === 0) signals.push({ l:"ok", t:"Aniq texnik xavf belgilari topilmadi" });

    } else if (type === "phone") {
      const norm = "+" + text.replace(/[^\d]/g, "").replace(/^00/, "");
      signals.push({ l:"info", t:"Tahlil turi: telefon raqami" });
      signals.push({ l:"info", t:"Raqam: " + norm });
      if (DEMO_BAD_PHONES.includes(norm)) { score += 70; signals.push({ l:"bad", t:"Bu raqam qora ro'yxatda (demo bazasi)" }); }
      if (/^\+998/.test(norm)) {
        signals.push({ l:"ok", t:"O'zbekiston (+998) raqami" });
        if (norm.replace(/\D/g,"").length !== 12) { score += 18; signals.push({ l:"warn", t:"Raqam uzunligi standart emas (+998 + 9 raqam bo'lishi kerak)" }); }
      } else if (/^\+7/.test(norm)) { score += 20; signals.push({ l:"warn", t:"Xorijiy (+7) raqam — kutilmagan bo'lsa ehtiyot bo'ling" }); }
      else { score += 16; signals.push({ l:"warn", t:"Xorijiy yoki notanish kod" }); }
      const d = norm.replace(/\D/g,"");
      if (d.length <= 5) { score += 10; signals.push({ l:"warn", t:"Qisqa kod — rasmiy SMS jo'natuvchi bo'lishi ham mumkin, matnga e'tibor bering" }); }
      signals.push({ l:"warn", t:"Eslatma: bank/operator hech qachon qo'ng'iroqda parol yoki SMS-kod so'ramaydi" });

    } else {
      signals.push({ l:"info", t:"Tahlil turi: matn" });
      const lower = text.toLowerCase();
      const kw = KEYWORDS.filter(k => lower.includes(k));
      const urgent = ["shoshil","tezda","hoziroq","blok","bloklan","oxirgi","cheklangan","kafolat"].filter(k => lower.includes(k));
      if (kw.length) { score += Math.min(30, kw.length * 9); signals.push({ l:"warn", t:"Shubhali so'zlar: " + kw.slice(0,4).join(", ") }); }
      if (urgent.length) { score += 18; signals.push({ l:"warn", t:"Shoshiltiruvchi ohang aniqlandi — firibgarlik belgisi" }); }
      if (/(https?:\/\/|www\.)/i.test(text)) { score += 14; signals.push({ l:"warn", t:"Matn ichida havola bor — alohida tekshiring" }); }
      if (!kw.length && !urgent.length) signals.push({ l:"ok", t:"Aniq firibgarlik iborasi topilmadi" });
    }

    score = Math.min(100, score);
    let verdict, advice, vClass;
    if (score >= 55) {
      verdict = "Xavfli"; vClass = "bad";
      advice = "Bu yuqori ehtimol bilan firibgarlik. Havolani ochmang, raqamga ishonmang, hech qanday ma'lumot va to'lov bermang.";
    } else if (score >= 28) {
      verdict = "Ehtiyot bo'ling"; vClass = "warn";
      advice = "Bir nechta shubhali belgi bor. Manbani rasmiy ilova yoki rasmiy raqam orqali mustaqil tekshiring.";
    } else {
      verdict = "Aniq xavf topilmadi"; vClass = "ok";
      advice = "Texnik xavf belgilari kam. Shunga qaramay, kutilmagan xabar bo'lsa, doim manbani rasmiy yo'l bilan tasdiqlang.";
    }
    return { type, score, signals, verdict, advice, vClass };
  }

  function runChecker() {
    const text = $("#checkInput").value.trim();
    const body = $("#scanBody");
    if (!text) { body.innerHTML = `<div class="scanner__idle">Avval tekshiriladigan matnni kiriting.</div>`; return; }
    const res = analyze(text);
    body.innerHTML = `<div class="scan-bar"><i id="scanBar"></i></div><div id="scanLines" style="margin-top:14px"></div>`;
    const bar = $("#scanBar"), lines = $("#scanLines");
    const steps = ["Matn turi aniqlanmoqda…","Domen/raqam tuzilishi tekshirilmoqda…","Qora ro'yxat va belgilar solishtirilmoqda…","Xulosa shakllantirilmoqda…"];
    let prog = 0;
    const bint = setInterval(() => { prog = Math.min(100, prog + 7); bar.style.width = prog + "%"; if (prog >= 100) clearInterval(bint); }, 60);

    let i = 0;
    const showStep = () => {
      if (i < steps.length) {
        const ln = el("div", "scan-line", `<span class="warn">›</span><span>${steps[i]}</span>`);
        ln.style.animationDelay = "0s"; lines.appendChild(ln); i++; setTimeout(showStep, 280);
      } else { revealSignals(); }
    };
    const revealSignals = () => {
      lines.innerHTML = "";
      res.signals.forEach((s, idx) => {
        const mark = s.l === "bad" ? '<span class="bad">✗</span>' : s.l === "warn" ? '<span class="warn">!</span>' : s.l === "ok" ? '<span class="ok">✓</span>' : '<span style="color:#5b648c">·</span>';
        const ln = el("div", "scan-line", `${mark}<span>${s.t}</span>`);
        ln.style.animationDelay = (idx * 0.06) + "s";
        lines.appendChild(ln);
      });
      // verdict
      const old = $(".verdict", $("#scanner")); if (old) old.remove();
      const v = el("div", "verdict verdict--" + res.vClass);
      const icon = res.vClass === "ok" ? ICON.check : ICON.alert;
      v.innerHTML = `<div class="verdict__badge">${icon}<span>${res.verdict} · xavf ${res.score}%</span></div>
        <div class="verdict__advice">${res.advice}</div>`;
      $("#scanner").appendChild(v);
    };
    setTimeout(showStep, 200);
  }
  function renderCheckExamples() {
    const ex = ["http://clik-uz.xyz/login","https://click.uz","+998 90 000 11 22","Tabriklaymiz! Bepul sovg'a yutdingiz, hoziroq havolani bosing"];
    const wrap = $("#checkExamples");
    ex.forEach(e => { const c = el("button", "ex-chip", e.length > 34 ? e.slice(0,32) + "…" : e); c.title = e; c.addEventListener("click", () => { $("#checkInput").value = e; runChecker(); }); wrap.appendChild(c); });
  }

  /* =========================================================
     KIBERSINOV (quiz) — natija foydalanuvchi → mahalla → tuman ga ta'sir qiladi
     ========================================================= */
  /* ---- Foydalanuvchi paneli: odat (habit) yondashuvi ---- */
  const USER_NAME = "Azizbek";
  const USER_SEC = [
    { ok:true,  w:22, t:"Kuchli parol o'rnatilgan" },
    { ok:true,  w:28, t:"Ikki bosqichli himoya (2FA) yoqilgan" },
    { ok:true,  w:22, t:"Shubhali ilovalar o'rnatilmagan" },
    { ok:false, w:14, t:"Telefon tizimi yangilanmagan", action:"Qanday yangilash", view:"life" },
    { ok:false, w:14, t:"Phishing testidan o'tmagansiz", action:"Testni boshlash", view:"quiz" }
  ];
  const BADGES = [
    { at:500, name:"Boshlovchi" }, { at:1000, name:"Hushyor fuqaro" },
    { at:1500, name:"Kiber faol" }, { at:2500, name:"Kiber qahramon" }
  ];
  const DAILY_TIPS = [
    "Bugun telefoningizdagi ishlatilmayotgan ilovalarni o'chirib tashlang — ular ma'lumotingizni yig'ishi mumkin.",
    "Bugun Google akkauntingizda ikki bosqichli himoyani (2FA) yoqing.",
    "Bugun bank ilovangiz parolini brauzeringizdan emas, faqat ilovaning o'zidan kiriting.",
    "Bugun eng muhim akkauntlaringiz parolini takrorlanmas qilib o'zgartiring."
  ];
  const LIFEHACKS = [
    { ico:ICON.social, cls:"i-blue",   t:"Telegram akkauntini himoyalash", d:"2FA va faol sessiyalarni tekshirish", dur:"0:45",
      steps:["Sozlamalar → Maxfiylik → Ikki bosqichli tasdiqlash'ni yoqing.", "Sozlamalar → Qurilmalar'da notanish faol sessiyalarni o'chiring.", "Telegramga kelgan kodni hech kimga bermang."] },
    { ico:ICON.coin, cls:"i-gold",     t:"Bank kartangizni himoyalash", d:"CVV, SMS-kod va push xavfsizligi", dur:"0:50",
      steps:["Karta orqasidagi 3 raqamni (CVV) hech kimga aytmang.", "SMS yoki qo'ng'iroqda kelgan kodni bermang — bank uni so'ramaydi.", "To'lovlar uchun push-tasdiq va limit o'rnating."] },
    { ico:ICON.phone, cls:"i-teal",    t:"Telefonni tezlashtirish", d:"Kesh va ortiqcha ilovalardan tozalash", dur:"0:40",
      steps:["Ishlatilmayotgan ilovalarni o'chiring.", "Ilovalar keshini tozalang (Sozlamalar → Ilovalar).", "Avtomatik ishga tushadigan ilovalarni cheklang."] },
    { ico:ICON.phone, cls:"i-red",     t:"Firibgar qo'ng'iroqni aniqlash", d:"Shubhali qo'ng'iroq belgilari", dur:"0:55",
      steps:["Shoshiltirish va qo'rqitish — asosiy belgi.", "Bank/davlat nomidan kod yoki parol so'rashsa — bu firibgar.", "Shubha bo'lsa, go'shakni qo'ying va rasmiy raqamga o'zingiz qo'ng'iroq qiling."] },
    { ico:ICON.lock, cls:"i-purple",   t:"Wi-Fi parolini to'g'ri tanlash", d:"Kuchli parol qoidalari", dur:"0:35",
      steps:["Kamida 12 belgidan, harf+raqam+belgi aralash.", "Ism, tug'ilgan sana yoki 12345 ishlatmang.", "Router'da WPA2/WPA3 himoyasini yoqing."] },
    { ico:ICON.eye, cls:"i-blue",      t:"Deepfake videoni ajratish", d:"Soxta videoning belgilari", dur:"1:00",
      steps:["Yuz va lab harakati ovozga mos kelmasligi.", "Ko'z pirpiratishi va yorug'lik g'ayritabiiy bo'lishi.", "Manbani tekshiring — rasmiy kanaldan tarqalganmi."] }
  ];

  function badgeInfo() {
    const next = BADGES.find(b => b.at > userBall) || BADGES[BADGES.length - 1];
    const prev = [...BADGES].reverse().find(b => b.at <= userBall);
    const base = prev ? prev.at : 0;
    const pct = Math.min(100, Math.round((userBall - base) / (next.at - base) * 100));
    return { next, remain: Math.max(0, next.at - userBall), pct };
  }
  function renderDashHero() {
    const wrap = $("#dashHero"); if (!wrap) return;
    const secPct = USER_SEC.filter(s => s.ok).reduce((s, x) => s + x.w, 0);
    const done = USER_SEC.filter(s => s.ok).length;
    const bi = badgeInfo();
    const C = 2 * Math.PI * 34;
    wrap.innerHTML = `
      <div class="hero-card hero-card--sec">
        <div class="hero-card__top"><span>🛡 Kiber darajangiz</span></div>
        <div class="sec-ring">
          <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" class="sr-track"/><circle cx="40" cy="40" r="34" class="sr-prog" style="stroke-dasharray:${C};stroke-dashoffset:${C * (1 - secPct / 100)};stroke:${kxiColor(secPct)}"/></svg>
          <div class="sec-ring__c"><div class="sec-ring__pct">${secPct}%</div></div>
        </div>
        <p class="hero-card__sub">${USER_SEC.length} tekshiruvdan <b>${done} tasi</b> bajarildi</p>
      </div>
      <div class="hero-card hero-card--task">
        <div class="hero-card__top"><span>🔥 Bugungi vazifa</span></div>
        <div class="task-body"><div class="task-ico">${ICON.exam}</div><div><div class="task-t">3 ta phishing savolini ishlang</div><div class="task-d">2 daqiqa · +10 ball</div></div></div>
        <button class="btn btn--gold btn--block" data-view="quiz">Boshlash</button>
      </div>
      <div class="hero-card hero-card--ball">
        <div class="hero-card__top"><span>🏆 Mening ballarim</span></div>
        <div class="ball-num">${fmtN(userBall)}<span>ball</span></div>
        <div class="ball-next">Keyingi badge: <b>${bi.next.name}</b></div>
        <div class="ball-bar"><i style="width:${bi.pct}%"></i></div>
        <div class="ball-remain">${fmtN(bi.remain)} ball qoldi</div>
      </div>`;
    wireViewBtns(wrap);
  }
  function renderSecLevel() {
    const c = $("#dashSec"); if (!c) return;
    const secPct = USER_SEC.filter(s => s.ok).reduce((s, x) => s + x.w, 0);
    c.innerHTML = `
      <div class="seclevel__head">
        <div><span class="eyebrow">🛡 Mening kiber pasportim</span><h3>Profilingiz qanchalik himoyalangan</h3></div>
        <div class="seclevel__pct" style="color:${kxiColor(secPct)}">${secPct}<span>%</span></div>
      </div>
      <div class="seclevel__bar"><i style="width:${secPct}%;background:${kxiColor(secPct)}"></i></div>
      <div class="seclevel__list">
        ${USER_SEC.map(s => `<div class="sec-item ${s.ok ? "ok" : "no"}">
          <span class="sec-item__mark">${s.ok ? "✔️" : "✖️"}</span>
          <span class="sec-item__t">${s.t}</span>
          ${!s.ok ? `<button class="sec-item__btn" data-view="${s.view}">${s.action} →</button>` : ""}
        </div>`).join("")}
      </div>`;
    wireViewBtns(c);
  }
  function renderDayTip() {
    const c = $("#dashTip"); if (!c) return;
    const tip = DAILY_TIPS[new Date().getDate() % DAILY_TIPS.length];
    c.innerHTML = `<div class="daytip__ico">💡</div><div><div class="daytip__lab">Bugungi tavsiya</div><p class="daytip__p">${tip}</p></div>`;
  }
  function renderLifehacks() {
    const prev = $("#dashLife");
    const cards = (arr, withSteps) => arr.map((h, i) => `
      <div class="lh-card${withSteps ? " lh-card--full" : ""}" ${withSteps ? `data-lh="${i}"` : `data-view="life"`}>
        <div class="lh-card__top"><span class="lh-card__ico ${h.cls}">${h.ico}</span><span class="lh-card__dur">${ICON.play} ${h.dur}</span></div>
        <h4>${h.t}</h4><p>${h.d}</p>
        ${withSteps ? `<div class="lh-steps" id="lhSteps${i}"><ol>${h.steps.map(s => `<li>${s}</li>`).join("")}</ol></div><button class="lh-toggle" data-lh="${i}">Ko'rsatmalarni ochish ${ICON.caret}</button>` : ""}
      </div>`).join("");
    if (prev) { prev.innerHTML = cards(LIFEHACKS.slice(0, 3), false); wireViewBtns(prev); }
    const full = $("#lifeGrid");
    if (full) {
      full.innerHTML = cards(LIFEHACKS, true);
      full.querySelectorAll(".lh-toggle").forEach(b => b.addEventListener("click", e => {
        e.stopPropagation();
        const card = b.closest(".lh-card"); const open = card.classList.toggle("is-open");
        b.innerHTML = (open ? "Ko'rsatmalarni yopish " : "Ko'rsatmalarni ochish ") + ICON.caret;
      }));
    }
  }

  /* ---- OFFLINE SERTIFIKAT SINOVI — asosiy maqsad ---- */
  const CERT = {
    ready: 82,
    stats: [
      { n:5, lab:"Kurs tugallangan", ico:ICON.grad, cls:"i-purple" },
      { n:18, lab:"Layfxak ko'rilgan", ico:ICON.play, cls:"i-blue" },
      { n:42, lab:"Test ishlangan", ico:ICON.exam, cls:"i-gold" }
    ],
    topics: [
      { t:"Parollar", pct:95 },
      { t:"Telegram xavfsizligi", pct:90 },
      { t:"Firibgar qo'ng'iroqlar", pct:78 },
      { t:"AI firibgarligi", pct:70 },
      { t:"Fishing havolalar", pct:62 },
      { t:"Bank xavfsizligi", pct:45 }
    ]
  };
  const CHAIN = [
    { ico:ICON.play, t:"Kiber Layfxak", d:"Qisqa video — kunlik odat" },
    { ico:ICON.spark, t:"Mini test", d:"Bilimni mustahkamlash" },
    { ico:ICON.grad, t:"Kurs", d:"Mavzuni chuqur o'rganish" },
    { ico:ICON.target, t:"Amaliy vazifa", d:"Bilimni hayotda qo'llash" },
    { ico:ICON.medal, t:"Ball va badge", d:"Rag'bat to'planadi" },
    { ico:ICON.exam, t:"Offline test", d:"Haqiqiy imtihon", key:true },
    { ico:ICON.cert, t:"Sertifikat", d:"Rasmiy tasdiq" },
    { ico:ICON.gift, t:"Rag'bat", d:"Imtiyoz va sovg'a" }
  ];
  const certWeak = () => [...CERT.topics].sort((a, b) => a.pct - b.pct)[0];
  function certTopicBars() {
    return CERT.topics.map(t => {
      const lvl = t.pct >= 81 ? "🟢" : t.pct >= 51 ? "🟡" : "🔴";
      return `<div class="ct-row"><div class="ct-name">${lvl} ${t.t}</div><div class="ct-track"><i style="width:${t.pct}%;background:${kxiColor(t.pct)}"></i></div><div class="ct-val">${t.pct}%</div></div>`;
    }).join("");
  }
  function renderCertGoal() {
    const c = $("#dashCert"); if (!c) return;
    const weak = certWeak();
    c.innerHTML = `
      <div class="certgoal__badge">🎓 Asosiy maqsad</div>
      <div class="certgoal__main">
        <div class="certgoal__left">
          <h3>Offline sertifikat sinovi</h3>
          <p>Siz faqat ball yig'mayapsiz — haqiqiy imtihonga tayyorlanyapsiz. Bilim → Offline test → Sertifikat → Rag'bat.</p>
          <div class="certgoal__stats">${CERT.stats.map(s => `<span><b>${s.n}</b> ${s.lab.toLowerCase()}</span>`).join("")}</div>
          <button class="btn btn--gold" data-view="cert">Tayyorlik darajangizni ko'ring</button>
        </div>
        <div class="certgoal__ring">
          <div class="cg-ring" style="background:conic-gradient(var(--gold) ${CERT.ready * 3.6}deg, rgba(255,255,255,.18) 0)"><div class="cg-ring__h"><div class="cg-ring__n">${CERT.ready}%</div><div class="cg-ring__l">tayyorgarlik</div></div></div>
        </div>
      </div>`;
    wireViewBtns(c);
  }
  function renderCert() {
    const wrap = $("#view-cert"); if (!wrap) return;
    const weak = certWeak();
    const hero = $("#certHero");
    if (hero) hero.innerHTML = `
      <div class="cert-hero__top">
        <div><span class="eyebrow" style="color:rgba(255,255,255,.8)">Umumiy tayyorgarlik</span><div class="cert-hero__pct">${CERT.ready}%</div></div>
        <div class="cert-hero__ico">${ICON.grad}</div>
      </div>
      <div class="cert-hero__bar"><i style="width:${CERT.ready}%"></i></div>
      <p class="cert-hero__note">Bu ko'rsatkich kurslar, layfxaklar, testlar va bilim darajangizni birlashtiradi.</p>
      <button class="btn btn--gold" id="certEnroll">${ICON.cert} Offline testga yozilish</button>`;
    const stats = $("#certStats");
    if (stats) stats.innerHTML = CERT.stats.map(s => `<div class="card stat"><div class="stat__ico ${s.cls}">${s.ico}</div><div class="stat__num">${s.n}</div><div class="stat__label">${s.lab}</div></div>`).join("");
    const topics = $("#certTopics");
    if (topics) topics.innerHTML = certTopicBars();
    const rec = $("#certRec");
    if (rec) rec.innerHTML = `
      <div class="cert-rec__ico">${ICON.target}</div>
      <div>
        <div class="cert-rec__t">Tizim tavsiyasi</div>
        <p>Eng zaif mavzuingiz — <b>${weak.t} (${weak.pct}%)</b>. Shu bo'yicha <b>“${weak.t}”</b> kursini tugatsangiz, offline testdan o'tish ehtimolingiz <b class="cert-rec__hl">94%</b> bo'ladi.</p>
        <button class="btn btn--ghost" data-view="life">“${weak.t}” bo'yicha o'rganish</button>
      </div>`;
    const chain = $("#certChain");
    if (chain) chain.innerHTML = CHAIN.map((s, i) => `
      <div class="chain-step${s.key ? " chain-step--key" : ""}">
        <div class="chain-step__ico">${s.ico}</div>
        <div class="chain-step__t">${s.t}</div>
        <div class="chain-step__d">${s.d}</div>
      </div>${i < CHAIN.length - 1 ? `<div class="chain-arrow">${ICON.caret}</div>` : ""}`).join("");
    wireViewBtns(wrap);
    const enroll = $("#certEnroll");
    if (enroll) enroll.addEventListener("click", () => showView("privilege"));
  }
  function renderCourseRec() {
    const c = $("#dashCourse"); if (!c) return;
    const weak = certWeak();
    c.innerHTML = `
      <div class="section-title" style="margin:0 0 12px"><h2 style="font-size:17px">📚 Tavsiya etilgan kurs</h2></div>
      <div class="course-rec">
        <div class="course-rec__ico">${ICON.grad}</div>
        <div class="course-rec__body">
          <h4>${weak.t}</h4>
          <p>Zaif tomoningiz shu mavzuda (${weak.pct}%). Tizim aynan shuni tavsiya qiladi.</p>
          <div class="course-rec__bar"><i style="width:${weak.pct}%;background:${kxiColor(weak.pct)}"></i></div>
        </div>
      </div>
      <button class="btn btn--ghost btn--block" data-view="cert" style="margin-top:14px">Offline testga tayyorligimni ko'rish</button>`;
    wireViewBtns(c);
  }

  /* =========================================================
     KIBERSINOV (quiz) — natija foydalanuvchi → mahalla → tuman ga ta'sir qiladi
     ========================================================= */
  let qi = 0, qScore = 0;
  const POINT_PER_CORRECT = 15;
  let userBall = 1280;               // Azizbek — joriy ball
  function levelFor(pct) {
    if (pct >= 90) return "Kiber Qahramon";
    if (pct >= 70) return "Kiber faol";
    if (pct >= 40) return "Hushyor fuqaro";
    return "Yangi boshlovchi";
  }
  function startQuiz() { qi = 0; qScore = 0; renderQuestion(); }
  function renderQuestion() {
    const wrap = $("#quizWrap");
    if (qi >= QUIZ.length) return renderQuizResult();
    const q = QUIZ[qi];
    const pct = Math.round((qi / QUIZ.length) * 100);
    wrap.innerHTML = `
      <div class="quiz__progress">
        <div class="quiz__bar"><i style="width:${pct}%"></i></div>
        <div><span class="quiz__score">${qScore}/${QUIZ.length}</span> · <span class="quiz__level">${levelFor(Math.round(qScore/QUIZ.length*100))}</span></div>
      </div>
      <div class="card q-card">
        <div style="font-size:13px;color:var(--muted);font-weight:600">Savol ${qi+1} / ${QUIZ.length}</div>
        <div class="q-scenario">
          <div class="from">${ICON.sms.replace('width="2"','width="1.8"')} ${q.from}</div>
          <div class="msg">${q.msg}</div>
        </div>
        <div class="q-ask">Bu firibgarlikmi yoki xavfsizmi?</div>
        <div class="q-choices">
          <button class="q-choice" data-ans="true">🚨 Firibgarlik</button>
          <button class="q-choice" data-ans="false">✅ Xavfsiz</button>
        </div>
        <div class="q-explain" id="qExplain"></div>
        <div class="q-actions"><button class="btn btn--gold" id="qNext" style="display:none">Keyingi savol</button></div>
      </div>`;
    $$(".q-choice", wrap).forEach(b => b.addEventListener("click", () => answerQuestion(b.dataset.ans === "true", b)));
    $("#qNext").addEventListener("click", () => { qi++; renderQuestion(); });
  }
  function answerQuestion(ans, btn) {
    const q = QUIZ[qi];
    const correct = ans === q.scam;
    if (correct) qScore++;
    $$(".q-choice").forEach(b => {
      b.disabled = true;
      const isScamBtn = b.dataset.ans === "true";
      if (isScamBtn === q.scam) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });
    const ex = $("#qExplain");
    ex.className = "q-explain show " + (correct ? "good" : "bad");
    ex.innerHTML = `<b>${correct ? "To'g'ri! ✓" : "Noto'g'ri."}</b> ${q.explain}`;
    $("#qNext").style.display = "inline-flex";
    $("#qNext").textContent = qi + 1 >= QUIZ.length ? "Natijani ko'rish" : "Keyingi savol";
  }
  function renderQuizResult() {
    const pct = Math.round(qScore / QUIZ.length * 100);
    const lvl = levelFor(pct);
    const earned = qScore * POINT_PER_CORRECT;
    const prev = userBall;
    userBall += earned;                // natija shaxsiy ballga qo'shiladi
    $("#quizWrap").innerHTML = `
      <div class="card quiz-result">
        <div class="medal">${ICON.medal}</div>
        <h2>${qScore} / ${QUIZ.length} to'g'ri</h2>
        <div class="lvl">Darajangiz: ${lvl}</div>
        <p>${pct >= 70 ? "Ajoyib! Siz firibgarlik belgilarini yaxshi tanidingiz." : "Yaxshi boshlanish. Firibgarliklar bazasini ko'rib, yana urinib ko'ring."}</p>
        <div class="qpoints"><span class="qpoints__plus">+${earned} ball</span><span class="qpoints__sub">shaxsiy ballingizga qo'shildi</span></div>
      </div>
      <div class="card ripple">
        <div class="ripple__title">${ICON.spark} Natijangiz qayerga ta'sir qiladi</div>
        <div class="ripple__node ripple--you">
          <span class="ripple__ico">${ICON.users}</span>
          <div class="ripple__body"><div class="ripple__t">Siz — ${(KO_USER && KO_USER.name) || "Alisher"}</div>
            <div class="ripple__p">Shaxsiy ball: <b>${fmtN(prev)} → ${fmtN(userBall)}</b> <span class="ripple__delta">+${earned}</span></div></div>
        </div>
        <div class="ripple__link">${ICON.caret}<span>hissa qo'shadi</span></div>
        <div class="ripple__node ripple--mahalla">
          <span class="ripple__ico">${ICON.building}</span>
          <div class="ripple__body"><div class="ripple__t">${MY_MAHALLA}</div>
            <div class="ripple__p">Mahalla o'rtacha balli va xonadonlar reytingi ko'tariladi</div></div>
        </div>
        <div class="ripple__link">${ICON.caret}<span>hissa qo'shadi</span></div>
        <div class="ripple__node ripple--tuman">
          <span class="ripple__ico">${ICON.globe}</span>
          <div class="ripple__body"><div class="ripple__t">${MY_TUMAN}</div>
            <div class="ripple__p">Tuman <b>KiberXavfsizlik Indeksi (KXI)</b> ko'rsatkichiga ta'sir qiladi</div></div>
        </div>
        <p class="ripple__note">Har bir fuqaroning bilimi yuqoriga — mahalla, so'ng tuman darajasiga jamlanadi. Bitta odam ham umumiy xavfsizlikka hissa qo'shadi.</p>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px">
        <button class="btn btn--gold" id="qRestart">Qayta o'ynash</button>
        <button class="btn btn--ghost" data-view="life">Kiber Layfxak</button>
      </div>`;
    $("#qRestart").addEventListener("click", startQuiz);
    $("#quizWrap").querySelector('[data-view]').addEventListener("click", e => { e.preventDefault(); showView("life"); });
  }

  /* =========================================================
     BAZA (scam database)
     ========================================================= */
  let scamFilter = "all", scamQuery = "";
  function renderScamFilters() {
    const wrap = $("#scamFilters"); wrap.innerHTML = "";
    const opts = [["all","Barchasi"]].concat(Object.keys(CATS).map(k => [k, CATS[k].label]));
    opts.forEach(([k, lab]) => {
      const c = el("button", "chip" + (k === scamFilter ? " is-active" : ""), lab);
      c.addEventListener("click", () => { scamFilter = k; renderScamFilters(); renderScams(); });
      wrap.appendChild(c);
    });
  }
  function renderScams() {
    const g = $("#scamGrid"); g.innerHTML = "";
    const q = scamQuery.toLowerCase();
    const list = SCAMS.filter(s =>
      (scamFilter === "all" || s.cat === scamFilter) &&
      (!q || (s.name + s.how + s.rec + s.act).toLowerCase().includes(q)));
    if (!list.length) { g.innerHTML = `<div class="card card--pad" style="grid-column:1/-1;color:var(--muted)">Hech narsa topilmadi. Boshqa so'z bilan qidiring.</div>`; return; }
    list.forEach(s => {
      const cat = CATS[s.cat];
      const c = el("div", "card scam");
      c.innerHTML = `<div class="scam__top">
          <div class="scam__ico ${cat.color}">${cat.ico}</div>
          <div><h3>${s.name}</h3><div class="scam__cat">${cat.label}</div></div>
        </div>
        <dl>
          <dt>Qanday ishlaydi</dt><dd>${s.how}</dd>
          <dt>Qanday tanish</dt><dd class="warn">${s.rec}</dd>
          <dt>Nima qilish kerak</dt><dd class="do">${s.act}</dd>
        </dl>`;
      g.appendChild(c);
    });
  }

  /* =========================================================
     AI TAHLIL (anonim, umumlashtirilgan analitika)
     ========================================================= */
  function aiDelta(d) {
    if (d > 0) return `<span class="ai-up">↑${d}%</span>`;
    if (d < 0) return `<span class="ai-down">↓${Math.abs(d)}%</span>`;
    return `<span class="ai-eq">0%</span>`;
  }
  function renderAI() {
    const s = AI_SUMMARY;
    const hero = $("#aiInsight");
    if (hero) hero.innerHTML = `
      <div class="ai-insight__glow"></div>
      <span class="ai-badge">${ICON.spark} AI tahlil · anonim</span>
      <h2 class="ai-insight__title">AI bu oy <b>${s.analyzed}</b> ta savol va faollikni tahlil qildi</h2>
      <p class="ai-insight__sum">Eng tez o'sayotgan tahdid — <b>${s.topThreat}</b> (↑${s.topDelta}%). Eng zaif toifa — <b>${s.weakGroup}</b> (${s.weakArea}). Asosiy tavsiya: shu yo'nalishlarda yangi o'quv materiallari va profilaktikani kuchaytiring.</p>
      <div class="ai-insight__stats">
        <div><div class="v">${s.analyzed}</div><div class="k">Tahlil qilingan savol</div></div>
        <div><div class="v">↑34%</div><div class="k">Soxta SMS so'rovlari</div></div>
        <div><div class="v">${s.hotRegions}</div><div class="k">Yuqori xavfli hudud</div></div>
      </div>`;

    const topics = $("#aiTopics");
    if (topics) {
      const max = Math.max(...AI_TOPICS.map(t => t.pct));
      topics.innerHTML = `<div class="section-title" style="margin:0 0 14px"><h2 style="font-size:18px">Eng ko'p so'ralgan mavzular</h2></div>` +
        AI_TOPICS.map(t => `
          <div class="tbar">
            <div class="tbar__top"><span class="tbar__label">${t.t}</span><span class="tbar__val">${t.pct}% ${aiDelta(t.delta)}</span></div>
            <div class="tbar__track"><i style="width:${Math.round(t.pct / max * 100)}%"></i></div>
          </div>`).join("");
    }

    const regions = $("#aiRegions");
    if (regions) {
      const lbl = { yuqori:"Yuqori", orta:"O'rta", past:"Past" };
      regions.innerHTML = `<div class="section-title" style="margin:0 0 14px"><h2 style="font-size:18px">Hududlar bo'yicha o'sayotgan muammolar</h2></div>` +
        AI_REGIONS.map(x => `
          <div class="rgn-row">
            <div class="rgn-row__main"><div class="rgn-row__r">${x.r}</div><div class="rgn-row__t">${x.threat}</div></div>
            <span class="rgn-row__delta">↑ ${x.delta}%</span>
            <span class="rgn-lvl rgn-${x.lvl}">${lbl[x.lvl]}</span>
          </div>`).join("");
    }

    const ages = $("#aiAges");
    if (ages) {
      ages.innerHTML = AI_AGES.map(a => {
        const col = a.score < 50 ? "var(--red)" : a.score < 70 ? "var(--gold)" : "var(--teal)";
        return `<div class="card age-card">
          <div class="age-card__age">${a.age} <span>yosh</span></div>
          <div class="age-card__weak"><span class="k">Eng zaif mavzu</span>${a.weak}</div>
          <div class="age-card__bar"><i style="width:${a.score}%;background:${col}"></i></div>
          <div class="age-card__score">Bilim darajasi: <b style="color:${col}">${a.score}%</b></div>
        </div>`;
      }).join("");
    }

    const recs = $("#aiRecs");
    if (recs) {
      recs.innerHTML = "";
      AI_RECS.forEach(r => { const c = el("div", "card rec-card");
        c.innerHTML = `<div class="rec-card__ico ${r.cls}">${r.ico}</div><div><h4>${r.t}</h4><p>${r.p}</p></div>`;
        recs.appendChild(c);
      });
    }

    const note = $("#aiNote");
    if (note) note.innerHTML = `${ICON.lock}<span>Barcha ma'lumotlar <b>anonim va umumlashtirilgan</b> — shaxsiy ma'lumotlar, ism yoki manzil tahlil qilinmaydi. AI faqat umumiy tendentsiyalarni ko'rsatadi.</span>`;
  }

  /* =========================================================
     HUQUQIY ASOSLAR — Prezident farmonlari, qarorlar, qonunlar
     ========================================================= */
  const LEGAL_ACTS = [
    { type:"Farmon", tag:"PF-38", date:"10.03.2026", newest:true,
      t:"2026–2030-yillarga mo'ljallangan Kiberxavfsizlik strategiyasini tasdiqlash to'g'risida",
      d:"O'zbekistonning yangi milliy kiberxavfsizlik strategiyasi tasdiqlandi. Davlat organlarida kiberxavfsizlik bo'linmalari tashkil etilishi va kiberjinoyatchilikning oldini olish tizimi takomillashtirilishi belgilandi." },
    { type:"Qonun", tag:"O'RQ-764", date:"15.04.2022",
      t:"“Kiberxavfsizlik to'g'risida”gi O'zbekiston Respublikasi Qonuni",
      d:"Soha bo'yicha asosiy qonun. Kibermakonda shaxs, jamiyat va davlat manfaatlarini himoya qilish ustuvor deb belgilandi. Yagona davlat siyosatini Prezident belgilaydi, vakolatli organ — Davlat xavfsizlik xizmati. (17.07.2022 dan kuchga kirgan)" },
    { type:"Farmon", tag:"PF-6007", date:"15.06.2020",
      t:"Axborot tizimlari va resurslarini himoya qilish davlat tizimini joriy etish chora-tadbirlari to'g'risida",
      d:"Davlat axborot tizimlari va resurslarini kibertahdidlardan himoya qiluvchi yagona davlat tizimini joriy etish belgilandi." },
    { type:"Qaror", tag:"PQ-4751", date:"15.06.2020",
      t:"Kiberxavfsizlikni ta'minlash tizimini yanada takomillashtirish chora-tadbirlari to'g'risida",
      d:"Kiberxavfsizlikni ta'minlash tizimini rivojlantirish, muhim axborot infratuzilmasi obyektlarini himoya qilish tartibi belgilandi." },
    { type:"Farmon", tag:"PF-6079", date:"05.10.2020",
      t:"“Raqamli O'zbekiston — 2030” strategiyasini tasdiqlash to'g'risida",
      d:"Mamlakatni raqamli rivojlantirish strategiyasi. Raqamli xizmatlar bilan bir qatorda kiberxavfsizlik va axborot xavfsizligini ta'minlash asosiy yo'nalishlardan biri etib belgilandi." },
    { type:"Qaror", tag:"PQ-4024", date:"21.11.2018",
      t:"Kiberxavfsizlik markazini tashkil etish to'g'risida",
      d:"Davlat unitar korxonasi shaklida “Kiberxavfsizlik markazi” tashkil etildi — milliy segmentda kiberhujumlarni aniqlash va bartaraf etuvchi ishchi organ." }
  ];
  const legalTypeCls = t => t === "Qonun" ? "lt-law" : t === "Farmon" ? "lt-decree" : "lt-res";
  function renderLegal() {
    const hero = $("#legalHero");
    if (hero) hero.innerHTML = `
      <div class="legal-hero__rings"></div>
      <span class="eyebrow">Davlat siyosati</span>
      <h2>Kiberxavfsizlik — davlat darajasidagi ustuvor vazifa</h2>
      <p>“Kiberxavfsizlik to'g'risida”gi Qonunga muvofiq, kibermakonda shaxs, jamiyat va davlat manfaatlarini himoya qilish ustuvor hisoblanadi va sohadagi <b>yagona davlat siyosatini Prezident belgilaydi</b>. KiberOgoh UZ aynan shu siyosat va quyidagi hujjatlar ijrosiga xizmat qiladi.</p>`;
    const list = $("#legalList");
    if (list) list.innerHTML = LEGAL_ACTS.map(a => `
      <div class="legal-card${a.newest ? " legal-card--new" : ""}">
        <div class="legal-card__side ${legalTypeCls(a.type)}">
          <span class="legal-card__type">${a.type}</span>
          <span class="legal-card__tag">${a.tag}</span>
          <span class="legal-card__date">${a.date}</span>
        </div>
        <div class="legal-card__body">
          ${a.newest ? '<span class="legal-card__badge">Eng yangi</span>' : ""}
          <h3>${a.t}</h3>
          <p>${a.d}</p>
        </div>
      </div>`).join("");
    const note = $("#legalNote");
    if (note) note.innerHTML = `
      <div class="legal-note__ico">${ICON.shieldCheck}</div>
      <p>Ushbu ro'yxat asosiy hujjatlarni aks ettiradi. Kiberxavfsizlik sohasida qo'shimcha qonunosti hujjatlari, Vazirlar Mahkamasi qarorlari va idoraviy me'yoriy hujjatlar ham amal qiladi. To'liq matnlar — <b>lex.uz</b> milliy huquqiy axborot bazasida.</p>`;
  }


  /* =========================================================
     YORDAM (help accordion)
     ========================================================= */
  function renderHelp() {
    const acc = $("#helpAcc"); acc.innerHTML = "";
    HELP.forEach((h, i) => {
      const item = el("div", "acc__item" + (i === 0 ? " open" : ""));
      item.innerHTML = `<button class="acc__btn">
          <span class="num">${String(i+1).padStart(2,"0")}</span>
          <span class="t">${h.t}</span>
          <span class="caret">${ICON.caret}</span>
        </button>
        <div class="acc__panel"><div class="acc__panel-inner">${h.body}</div></div>`;
      const panel = $(".acc__panel", item);
      $(".acc__btn", item).addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        $$(".acc__item", acc).forEach(it => { it.classList.remove("open"); $(".acc__panel", it).style.maxHeight = null; });
        if (!isOpen) { item.classList.add("open"); panel.style.maxHeight = panel.scrollHeight + "px"; }
      });
      acc.appendChild(item);
      if (i === 0) requestAnimationFrame(() => { panel.style.maxHeight = panel.scrollHeight + "px"; });
    });
  }

  /* =========================================================
     RO'YXATDAN O'TISH (registration cascade)
     ========================================================= */
  function fillSelect(sel, items, placeholder) {
    sel.innerHTML = `<option value="">${placeholder}</option>` + items.map(i => `<option value="${i}">${i}</option>`).join("");
  }
  function setupReg() {
    const v = $("#selViloyat"), t = $("#selTuman"), m = $("#selMahalla"), btn = $("#regSubmit"), nm = $("#regName");
    const validName = () => nm.value.trim().length >= 2;
    const check = () => { btn.disabled = !(validName() && m.value); };
    if (KO_USER && KO_USER.name) nm.value = KO_USER.name;   // hudud o'zgartirilganda ism saqlanadi
    nm.addEventListener("input", check);
    // Platforma hozircha faqat Toshkent viloyatida — maydon avtomatik tanlangan va qulflangan
    const REG = "Toshkent viloyati";
    v.innerHTML = `<option value="${REG}" selected>${REG}</option>`;
    v.disabled = true;
    fillSelect(t, REGIONS[REG], "Tumanni tanlang…");
    t.disabled = false;
    t.addEventListener("change", () => {
      if (t.value) {
        const pool = MFY_POOL.slice(0, 6 + (t.value.length % 4));
        fillSelect(m, pool, "Mahallani tanlang…"); m.disabled = false;
      } else { m.innerHTML = `<option value="">Avval tumanni tanlang</option>`; m.disabled = true; }
      btn.disabled = true;
    });
    m.addEventListener("change", check);
    btn.addEventListener("click", () => {
      const id = KO_USER && KO_USER.id ? KO_USER.id : genUserId(); // ID doimiy — hudud o'zgarsa ham saqlanadi
      KO_USER = { id, name: nm.value.trim(), viloyat: v.value, tuman: t.value, mahalla: m.value, ts: Date.now() };
      saveUser(KO_USER);
      applyUserName();
      $("#regFormBody").style.display = "none";
      $("#regSuccess").classList.add("show");
      $("#regWhere").textContent = `${v.value} → ${t.value} → ${m.value}`;
      const idEl = $("#regId"); if (idEl) idEl.textContent = id;
      $("#topRegion").textContent = v.value;
      applyUserChip();
      updateQuizLock();
      if ($("#view-quiz").classList.contains("is-active")) { startQuiz(); quizBuilt = true; }
      if ($("#view-appeals").classList.contains("is-active")) renderAppeals();
    });
  }

  /* =========================================================
     ABOUT (compiled deck)
     ========================================================= */
  function renderAbout() {
    const pr = $("#aboutProblem");
    PROBLEM.forEach(x => { const c = el("div", "card feature"); c.innerHTML = `<div class="feature__ico ${x.cls}">${x.ico}</div><div><h4>${x.t}</h4><p>${x.p}</p></div>`; pr.appendChild(c); });
    const mo = $("#aboutModules");
    MODULES.forEach(x => { const c = el("button", "card mod"); c.innerHTML = `<div class="mod__ico ${x.cls}">${x.ico}</div><h4>${x.t}</h4><p>${x.p}</p>`; c.addEventListener("click", () => showView(x.view)); mo.appendChild(c); });
    renderPyramid("#aboutPyramid");
    const pv = $("#aboutPrivacy");
    [["Manzil yig'ilmaydi","Faqat mahalla tanlanadi — ko'cha va uy raqami so'ralmaydi."],
     ["Faqat statistika","Tizim foydalanuvchilar sonini saqlaydi, shaxsni emas."],
     ["Yopiq muloqot","Shaxsiy yozishma o'chirilgan — firibgar yakkalay olmaydi."],
     ["Avtomatik himoya","Havolalar bloklanadi, spam filtrlanadi."]].forEach(([t, p]) => {
      const r = el("div", "", `<div style="display:flex;gap:10px;padding:9px 0;border-top:1px solid var(--line-2)"><span style="color:var(--teal);flex:0 0 18px">${ICON.check}</span><div><b style="font-size:14px">${t}</b><div style="font-size:13px;color:var(--muted)">${p}</div></div></div>`);
      pv.appendChild(r);
    });
    const rd = $("#aboutRoad");
    ROAD.forEach(s => { const c = el("div", "card road__step"); c.innerHTML = `<div class="road__n">${s.n}</div><div class="road__when">${s.when}</div><h4>${s.t}</h4><p>${s.p}</p>`; rd.appendChild(c); });
    const me = $("#aboutMetrics");
    METRICS.forEach(x => { const c = el("div", "card metric"); c.innerHTML = `<div class="big">${x.big}</div><div class="y2">▲ ${x.y2}</div><div class="lab">${x.lab}</div>`; me.appendChild(c); });
  }

  /* =========================================================
     XONADONLAR REYTINGI (leaderboard)
     ========================================================= */
  function renderRatingTop() {
    const wrap = $("#ratingTop"); if (!wrap) return;
    const wDone = Math.round(WEEKLY.done / WEEKLY.total * 100);
    const gPct = Math.round(MGOAL.current / MGOAL.total * 100);
    wrap.innerHTML = `
      <div class="card engage-live">
        <div class="engage-live__top"><div class="engage-live__ico i-purple">${ICON.target}</div>
          <div><h3>${WEEKLY.title}</h3><div class="sub">${WEEKLY.sub}</div></div></div>
        <div class="task">${WEEKLY.task}</div>
        <div class="prog-track"><i style="width:${wDone}%;background:var(--purple)"></i></div>
        <div class="prog-meta"><span class="count">${WEEKLY.done}/${WEEKLY.total} bajarildi</span><span class="reward">Mukofot: ${WEEKLY.reward}</span></div>
      </div>
      <div class="card engage-live">
        <div class="engage-live__top"><div class="engage-live__ico i-teal">${ICON.flag}</div>
          <div><h3>${MGOAL.title}</h3><div class="sub">${MGOAL.sub}</div></div></div>
        <div class="task">Xonadonlarning 80%i platformaga qo'shilsa, butun mahalla rasmiy “Himoyalangan mahalla” maqomini oladi.</div>
        <div class="prog-track"><i style="width:${gPct}%;background:var(--teal)"></i></div>
        <div class="prog-meta"><span class="count">${MGOAL.current} / ${MGOAL.total} xonadon</span><span class="reward">${gPct}% · maqsad 80%</span></div>
      </div>`;
  }
  function renderPodium() {
    const p = $("#podium"); if (!p) return;
    const order = [1, 0, 2]; // 2-o'rin, 1-o'rin (markaz), 3-o'rin
    p.innerHTML = "";
    order.forEach(i => {
      const h = HOUSEHOLDS[i]; const rank = i + 1;
      const init = (h.hh[0] + h.who[0]).toUpperCase();
      const item = el("div", "podium__item podium__item--" + rank);
      item.innerHTML = `<div class="podium__rank">${rank}</div>
        <div class="podium__av">${init}</div>
        <div class="podium__hh">${h.hh}</div>
        <div class="podium__who">Vakil: <b>${h.who}</b></div>
        <div class="podium__pts">${fmtN(h.pts)} <span>ball</span></div>`;
      p.appendChild(item);
    });
  }
  function deltaHtml(d) {
    if (d > 0) return `<span class="delta-up">▲ ${d}</span>`;
    if (d < 0) return `<span class="delta-down">▼ ${Math.abs(d)}</span>`;
    return `<span class="delta-eq">—</span>`;
  }
  function renderRankList() {
    const list = $("#rankList"); if (!list) return;
    list.innerHTML = "";
    HOUSEHOLDS.forEach((h, idx) => {
      const init = (h.hh[0] + h.who[0]).toUpperCase();
      const av = h.you ? "var(--gold)" : avPalette[idx % avPalette.length];
      const row = el("div", "rank-row" + (h.you ? " is-you" : ""));
      row.innerHTML = `
        <div class="rank-row__n">${idx + 1}</div>
        <div class="rank-row__av" style="background:${av}">${init}</div>
        <div>
          <div class="rank-row__hh">${h.hh} xonadoni${h.you ? '<span class="you-tag">SIZ</span>' : ''}</div>
          <div class="rank-row__who">KiberHimoyachi: <b>${h.who}</b></div>
        </div>
        <span class="lvl-badge lvl-${h.lvl}">${levelName(h.lvl)}</span>
        <div class="rank-row__pts">${fmtN(h.pts)}<span>${deltaHtml(h.delta)}</span></div>`;
      list.appendChild(row);
    });
  }
  function renderEarn() {
    const c = $("#earnCard"); if (!c) return;
    c.innerHTML = `<div class="section-title" style="margin:0 0 8px"><h2 style="font-size:18px">Qanday ball yig'iladi</h2></div>` +
      EARN.map(e => `<div class="earn-row"><div class="earn-row__ico ${e.cls}">${e.ico}</div><div class="earn-row__t">${e.a}</div><div class="earn-row__p">+${e.p}</div></div>`).join("");
  }
  function renderLevels() {
    const c = $("#levelCard"); if (!c) return;
    const you = HOUSEHOLDS.find(h => h.you);
    const next = LEVELS.find(l => l.min > you.pts);
    const note = next ? `Keyingi daraja (“${next.name}”) uchun yana <b>${fmtN(next.min - you.pts)}</b> ball kerak.` : `Eng yuqori darajadasiz! 🎉`;
    c.innerHTML = `<div class="section-title" style="margin:0 0 8px"><h2 style="font-size:18px">Darajalar</h2></div>` +
      LEVELS.map(l => `<div class="level-row ${l.key === you.lvl ? 'is-current' : ''}">
        <span class="level-row__dot" style="background:${l.dot}"></span>
        <span class="level-row__name">${l.name}</span>
        <span class="level-row__thr">${fmtN(l.min)}+ ball</span></div>`).join("") +
      `<p style="font-size:13px;color:var(--muted);margin-top:14px">Sizning xonadoningiz: <b style="color:var(--gold-700)">KiberHimoyachi</b> (${fmtN(you.pts)} ball). ${note}</p>`;
  }
  function renderEngage() {
    const g = $("#engageGrid"); if (!g) return;
    g.innerHTML = "";
    ENGAGE.forEach(x => { const c = el("div", "card feature"); c.innerHTML = `<div class="feature__ico ${x.cls}">${x.ico}</div><div><h4>${x.t}</h4><p>${x.p}</p></div>`; g.appendChild(c); });
  }
  function renderHouseholdMini() {
    const c = $("#dashHousehold"); if (!c) return;
    const you = HOUSEHOLDS.find(h => h.you); const rank = HOUSEHOLDS.indexOf(you) + 1;
    const init = (you.hh[0] + you.who[0]).toUpperCase();
    c.innerHTML = `
      <div class="section-title" style="margin:0 0 14px"><h2 style="font-size:18px">Xonadoningiz reytingi</h2></div>
      <div class="hh-mini__top">
        <div class="hh-mini__av">${init}</div>
        <div><div class="hh-mini__hh">${you.hh} xonadoni</div>
        <div class="hh-mini__who">KiberHimoyachi: <b>${you.who}</b> <span class="lvl-badge lvl-kiber" style="margin-left:4px">KiberHimoyachi</span></div></div>
      </div>
      <div class="hh-mini__stats">
        <div class="hh-mini__stat"><div class="v">#${rank}</div><div class="k">Mahalla o'rni</div></div>
        <div class="hh-mini__stat"><div class="v">${fmtN(you.pts)}</div><div class="k">Ball</div></div>
        <div class="hh-mini__stat"><div class="v" style="color:var(--teal)">▲ 165</div><div class="k">Bu hafta</div></div>
      </div>
      <button class="btn btn--ghost btn--block" data-view="life" style="margin-top:14px">To'liq reytingni ko'rish</button>`;
    c.querySelector("[data-view]").addEventListener("click", e => { e.preventDefault(); showView("life"); });
  }

  /* =========================================================
     REELS (so'nggi videolar)
     ========================================================= */
  function reelCard(v, mini) {
    return `<button class="reel" data-reel="${v.id}" aria-label="${v.title}">
      <div class="reel__bg" style="background:linear-gradient(155deg,${v.c1},${v.c2})"></div>
      ${v.poster ? `<img class="reel__poster" src="${v.poster}" alt="">` : ""}
      <div class="reel__noise"></div>
      <span class="reel__cat">${v.cat}</span>
      <span class="reel__dur">${v.dur}</span>
      ${v.src ? "" : `<span class="reel__icon">${v.ico}</span>`}
      <div class="reel__grad"></div>
      <span class="reel__play">${ICON.play}</span>
      <div class="reel__info">
        <div class="reel__title">${v.title}</div>
        <div class="reel__meta"><span class="m">${ICON.eye}${v.views}</span><span class="m">${ICON.heart}${v.likes}</span></div>
      </div>
    </button>`;
  }
  function renderReels(target, mini) {
    const t = $(target); if (!t) return;
    t.innerHTML = VIDEOS.map(v => reelCard(v, mini)).join("");
  }
  function renderDashVideos() {
    const c = $("#dashVideos"); if (!c) return;
    c.innerHTML = `
      <div class="section-title" style="margin:0 0 14px"><h2 style="font-size:18px">So'nggi videolar</h2><span class="hint">Reels</span></div>
      <div class="reels reels--mini" id="dashReels"></div>
      <button class="btn btn--ghost btn--block" data-view="video" style="margin-top:14px">Barcha videolar</button>`;
    renderReels("#dashReels", true);
    c.querySelector("[data-view]").addEventListener("click", e => { e.preventDefault(); showView("video"); });
  }

  /* ---- video pleyer (simulyatsiya) ---- */
  let reelRAF = null, reelStart = null, reelElapsed = 0, reelPaused = true, reelBar = null, reelCenter = null;
  const REEL_DUR = 7000;
  function reelTick(ts) {
    if (reelPaused) { reelRAF = null; return; }
    if (reelStart == null) reelStart = ts - reelElapsed;
    reelElapsed = ts - reelStart;
    const p = Math.min(1, reelElapsed / REEL_DUR);
    if (reelBar) reelBar.style.width = (p * 100) + "%";
    if (p >= 1) { reelPaused = true; reelElapsed = 0; reelStart = null; reelRAF = null; if (reelCenter) reelCenter.classList.remove("playing"); return; }
    reelRAF = requestAnimationFrame(reelTick);
  }
  function reelToggle() {
    if (reelPaused) { reelPaused = false; reelStart = null; if (reelCenter) reelCenter.classList.add("playing"); if (!reelRAF) reelRAF = requestAnimationFrame(reelTick); }
    else { reelPaused = true; reelRAF = null; if (reelCenter) reelCenter.classList.remove("playing"); }
  }
  function openReel(id) {
    const v = VIDEOS.find(x => x.id === +id); if (!v) return;
    const modal = $("#reelModal"), player = $("#reelPlayer");
    if (v.src) {
      // === REAL VIDEO ===
      player.innerHTML = `
        <button class="reel-player__close" data-reel-close aria-label="Yopish">&times;</button>
        <video class="reel-player__video" id="reelVideoEl" src="${v.src}" ${v.poster ? `poster="${v.poster}"` : ""} controls autoplay playsinline></video>
        <div class="reel-player__gradSoft"></div>
        <div class="reel-player__info reel-player__info--video">
          <span class="reel-player__cat">${v.cat} · ${v.dur}</span>
          <div class="reel-player__title">${v.title}</div>
          <div class="reel-player__cap">${v.cap}</div>
          <div class="reel-player__author">${ICON.shieldCheck} ${v.author} · ${v.views} ko'rishlar · ${v.likes} like</div>
        </div>`;
      reelBar = null; reelCenter = null; reelPaused = true; reelElapsed = 0; reelStart = null;
      if (reelRAF) { cancelAnimationFrame(reelRAF); reelRAF = null; }
      modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
      player.onclick = null;
      modal._videoEl = $("#reelVideoEl");
      modal.classList.add("has-video");
      return;
    }
    modal.classList.remove("has-video");
    player.innerHTML = `
      <div class="reel-player__bg" style="background:linear-gradient(155deg,${v.c1},${v.c2})"></div>
      <button class="reel-player__close" data-reel-close aria-label="Yopish">&times;</button>
      <div class="reel-player__icon">${v.ico}</div>
      <button class="reel-player__center" id="reelCenter">${ICON.play}</button>
      <div class="reel-player__grad"></div>
      <div class="reel-player__info">
        <span class="reel-player__cat">${v.cat} · ${v.dur}</span>
        <div class="reel-player__title">${v.title}</div>
        <div class="reel-player__cap">${v.cap}</div>
        <div class="reel-player__author">${ICON.shieldCheck} ${v.author} · ${v.views} ko'rishlar · ${v.likes} like</div>
      </div>
      <div class="reel-player__bar"><i id="reelBar"></i></div>`;
    reelBar = $("#reelBar"); reelCenter = $("#reelCenter");
    reelPaused = true; reelElapsed = 0; reelStart = null; if (reelRAF) { cancelAnimationFrame(reelRAF); reelRAF = null; }
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
    // toggle play on player / center; stop on close & info
    player.onclick = (e) => { if (e.target.closest("[data-reel-close]") || e.target.closest(".reel-player__info")) return; reelToggle(); };
    reelCenter.onclick = (e) => { e.stopPropagation(); reelToggle(); };
    setTimeout(reelToggle, 250); // auto-start
  }
  function closeReel() {
    const modal = $("#reelModal");
    reelPaused = true; if (reelRAF) cancelAnimationFrame(reelRAF); reelRAF = null; reelElapsed = 0; reelStart = null;
    if (modal._videoEl) { modal._videoEl.pause(); modal._videoEl = null; }
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
  }
  function setupReelModal() {
    document.addEventListener("click", (e) => {
      const r = e.target.closest("[data-reel]");
      if (r) { openReel(r.dataset.reel); return; }
      if (e.target.closest("[data-reel-close]")) closeReel();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeReel(); });
  }

  /* =========================================================
     IMTIYOZLAR (spotlight + privileges)
     ========================================================= */
  function wireViewBtns(scope) {
    scope.querySelectorAll("[data-view]").forEach(b =>
      b.addEventListener("click", e => { e.preventDefault(); showView(b.dataset.view); }));
  }
  function renderSpotlight() {
    const c = $("#dashSpotlight"); if (!c) return;
    const slide1 = `
      <div class="carousel__slide">
        <div class="spotlight__main">
          ${SEAL}
          <div class="spotlight__body">
            <span class="spotlight__live"><span class="pulse"></span>IIB e'tirofi · ${SPOTLIGHT.month} KiberHimoyachisi</span>
            <h2>${SPOTLIGHT.hh} xonadoni vakili ${SPOTLIGHT.rep} taqdirlandi</h2>
            <p>${SPOTLIGHT.issuer} tomonidan rasmiy guvohnoma topshirildi. Endi u <b>${SPOTLIGHT.benefit}</b> qilinadi.</p>
            <div class="spotlight__cta">
              <button class="btn btn--gold" data-view="privilege">Barcha imtiyozlar</button>
              <button class="btn btn--ghost-light" data-view="life">Siz ham KiberHimoyachi bo'ling</button>
            </div>
          </div>
        </div>
        <div class="spotlight__cert">${certHtml(SPOTLIGHT.repFull, "Mahalla kiberxavfsizligiga qo'shgan hissasi uchun")}</div>
      </div>`;
    const tgUrl = "https://t.me/TV_ISHGA_QABUL";
    const slide2 = `
      <div class="carousel__slide">
        <div class="spotlight__main">
          <div class="vac-emblem">${ICON.briefcase}</div>
          <div class="spotlight__body">
            <span class="spotlight__live spotlight__live--blue"><span class="pulse"></span>Vakansiya · IIV</span>
            <h2>Ichki Ishlar Vazirligiga ishga qabul ochiq</h2>
            <p>Kiberxavfsizlik va IT yo'nalishida vakant o'rinlar. Faol yoshlar uchun imkoniyat — ariza va batafsil ma'lumot rasmiy Telegram kanalda.</p>
            <div class="spotlight__cta">
              <a class="btn btn--gold" href="${tgUrl}" target="_blank" rel="noopener">Vakansiyalarni ko'rish</a>
            </div>
          </div>
        </div>
        <a class="spotlight__cert spotlight__cert--flat vac-card" href="${tgUrl}" target="_blank" rel="noopener">
          <div class="vac-card__tg">${ICON.tg}</div>
          <div class="vac-card__handle">@TV_ISHGA_QABUL</div>
          <div class="vac-card__label">Rasmiy ishga qabul kanali</div>
          <div class="vac-card__cta">Telegram'da ochish →</div>
        </a>
      </div>`;
    const slides = [slide1, slide2];
    const dots = slides.map((_, i) => `<button class="carousel__dot${i === 0 ? " is-active" : ""}" data-spot="${i}" aria-label="Slayd ${i + 1}"></button>`).join("");
    c.innerHTML = `
      <div class="card spotlight spotlight--carousel" id="spotCarousel">
        <div class="spotlight__glow"></div>
        <div class="carousel__viewport"><div class="carousel__track" id="spotTrack">${slides.join("")}</div></div>
        <div class="carousel__ctl">
          <button class="carousel__arrow" id="spotPrev" aria-label="Oldingi">${ICON.caret}</button>
          <div class="carousel__dots">${dots}</div>
          <button class="carousel__arrow" id="spotNext" aria-label="Keyingi">${ICON.caret}</button>
        </div>
      </div>`;
    wireViewBtns(c);
    setupSpotCarousel();
  }
  function setupSpotCarousel() {
    const track = $("#spotTrack"); if (!track) return;
    const n = track.children.length;
    const dots = $$("#spotCarousel .carousel__dot");
    let idx = 0, timer = null;
    const go = i => { idx = (i + n) % n; track.style.transform = `translateX(-${idx * 100}%)`; dots.forEach((d, k) => d.classList.toggle("is-active", k === idx)); };
    const next = () => go(idx + 1), prev = () => go(idx - 1);
    const start = () => { clearInterval(timer); timer = setInterval(next, 6500); };
    dots.forEach((d, k) => d.addEventListener("click", () => { go(k); start(); }));
    $("#spotNext").addEventListener("click", () => { next(); start(); });
    $("#spotPrev").addEventListener("click", () => { prev(); start(); });
    const car = $("#spotCarousel");
    car.addEventListener("mouseenter", () => clearInterval(timer));
    car.addEventListener("mouseleave", start);
    go(0); start();
  }
  function renderPrivileges() {
    const hero = $("#privHero");
    if (hero) {
      hero.innerHTML = `
        <div class="priv-hero__glow"></div>
        <div class="priv-hero__cert">${certHtml(SPOTLIGHT.repFull, "Mahalla kiberxavfsizligiga qo'shgan hissasi uchun", true)}</div>
        <div class="priv-hero__text">
          <span class="eyebrow">${SPOTLIGHT.month} · ${SPOTLIGHT.issuer}</span>
          <h2>${SPOTLIGHT.hh} xonadoni vakili ${SPOTLIGHT.rep} taqdirlandi</h2>
          <p>Mahalla kiberxavfsizligiga qo'shgan hissasi uchun ${SPOTLIGHT.issuer} tomonidan rasmiy guvohnoma berildi.</p>
          <div class="grant-pill">${ICON.medal} ${SPOTLIGHT.benefit}</div>
          <p style="font-size:13.5px;margin-top:10px;color:#aeb6d4">Aynan shunday rag'batlar tufayli mahalla ichida raqobat oshadi va ota-onalar farzandini KiberHimoyachilikka jalb qiladi.</p>
        </div>`;
    }
    const rg = $("#rewardGrid");
    if (rg) { rg.innerHTML = ""; PRIVILEGES.forEach(x => { const c = el("div", "card feature"); c.innerHTML = `<div class="feature__ico ${x.cls}">${x.ico}</div><div><h4>${x.t}</h4><p>${x.p}</p></div>`; rg.appendChild(c); }); }
    const rl = $("#recipientsList");
    if (rl) {
      rl.innerHTML = "";
      RECIPIENTS.forEach(r => {
        const init = (r.hh[0] + r.rep[0]).toUpperCase();
        const row = el("div", "recipient" + (r.featured ? " is-featured" : ""));
        row.innerHTML = `
          <div class="recipient__av">${init}</div>
          <div>
            <div class="recipient__who">${r.hh} xonadoni — ${r.rep}${r.featured ? '<span class="featured-tag">YANGI</span>' : ''}</div>
            <div class="recipient__award">${r.award}</div>
          </div>
          <div class="recipient__meta"><div class="recipient__date">${r.date}</div><div class="recipient__issuer">${r.issuer}</div></div>`;
        rl.appendChild(row);
      });
    }
    const cta = $("#view-privilege .priv-cta [data-view]");
    if (cta) cta.addEventListener("click", e => { e.preventDefault(); showView("life"); });
  }

  /* =========================================================
     IMTIYOZ SHARTI (verification flow)
     ========================================================= */
  // status per condition: 'done' | 'active' | 'grace' | 'locked'
  let condState = ["done", "active", "locked", "locked", "locked"];

  function renderCondStatic() {
    const why = $("#condWhy");
    if (why) why.innerHTML = `
      <div class="cond-why__ico">${ICON.trophy}</div>
      <div class="cond-why__body">
        <h3>Targ'ibot — sovg'aning asosiy sharti</h3>
        <p>Nomzod sovg'ani faqat ko'p ball uchun emas, balki platformani <b>oilasi va qo'shnilariga</b> yetkazgani uchun oladi. Komissiya buni <b>og'zaki savol-javob</b> orqali tekshiradi: avval nomzodning o'zidan, so'ng ota-onasidan, o'rni kelsa qo'shnisidan ham. Shu tariqa platformadan yoshlar bilan birga <b>ota-onalar ham foydalanadi</b>.</p>
        <div class="cond-why__pills">
          <span class="cond-pill">${ICON.check}Nomzod — bilim sinovi</span>
          <span class="cond-pill">${ICON.check}Ota-ona — jalb + savol-javob</span>
          <span class="cond-pill">${ICON.check}Qo'shni — targ'ibot tekshiruvi</span>
          <span class="cond-pill">${ICON.check}Offlayn test — mahalla markazida</span>
        </div>
      </div>`;

    const grace = $("#condGrace");
    if (grace) grace.innerHTML = `
      <div class="section-title" style="margin:0 0 10px"><h2 style="font-size:18px">Agar shartdan o'tilmasa?</h2></div>
      <div class="grace-note">
        <div class="t">${ICON.alert} Muddat beriladi — ${GRACE_DAYS} kun</div>
        <p>Nomzod biror bosqichdan o'tolmasa (masalan, ota-ona yoki qo'shni savollarga javob bera olmasa), unga <span class="days">${GRACE_DAYS} kun</span> qo'shimcha muddat beriladi.</p>
      </div>
      <p style="font-size:14px;color:var(--muted);margin-top:14px;line-height:1.55">Shu muddat ichida nomzod targ'ibot ishlarini qaytadan amalga oshiradi — ota-onasi va qo'shnilariga platformani yana tushuntiradi, ularga foydalanishni o'rgatadi. So'ng tekshiruv <b style="color:var(--navy)">qayta o'tkaziladi</b>. Bu — sovg'a faqat haqiqiy hissa uchun berilishini kafolatlaydi.</p>`;

    const flow = $("#condFlow");
    if (flow) flow.innerHTML = `
      <div class="section-title" style="margin:0 0 12px"><h2 style="font-size:18px">Jarayon qanday kechadi</h2></div>
      <div class="flow-step"><span class="flow-step__n">1</span><div class="flow-step__b">Nomzod reytingda yuqori o'ringa chiqadi va taqdirlashga <b>tavsiya etiladi</b>.</div></div>
      <div class="flow-step"><span class="flow-step__n">2</span><div class="flow-step__b">Komissiya <b>og'zaki savol-javob</b> o'tkazadi: nomzod → ota-ona → qo'shni.</div></div>
      <div class="flow-step"><span class="flow-step__n">3</span><div class="flow-step__b">Nomzod mahalla markazida <b>offlayn bilim testi</b>dan o'tadi (mahalla kesimida).</div></div>
      <div class="flow-step"><span class="flow-step__n">4</span><div class="flow-step__b">Hammasidan o'tsa — komissiya tasdig'idan so'ng <b>sertifikat va sovg'a</b> topshiriladi.</div></div>
      <div class="flow-step"><span class="flow-step__n">5</span><div class="flow-step__b">O'tmasa — <b>${GRACE_DAYS} kun</b> muddat, takroriy targ'ibot yoki keyingi testga yozilish.</div></div>`;
  }

  const STATUS_LABEL = { done:"Tasdiqlandi", active:"Jarayonda", grace:"Muddat berildi", locked:"Navbatda" };

  function renderCondTracker() {
    const wrap = $("#condTracker"); if (!wrap) return;
    const doneCount = condState.filter(s => s === "done").length;
    const allDone = doneCount === CONDITIONS.length;

    if (allDone) {
      wrap.innerHTML = `
        <div class="cond-success">
          <div class="cond-success__badge">${ICON.cert}</div>
          <h3>Barcha shartlar bajarildi!</h3>
          <p><b>${CANDIDATE.rep}</b> (${CANDIDATE.hh} xonadoni) savol-javoblar va mahalla offlayn testidan muvaffaqiyatli o'tdi. Endi u sertifikat va sovg'ani olishga tayyor.</p>
          <div class="cond-success__chips">
            <span class="spot-chip spot-chip--gold">${ICON.cert}IIB guvohnomasi</span>
            <span class="spot-chip spot-chip--purple">${ICON.grad}Temurbek litseyiga grant</span>
          </div>
          <button class="btn btn--ghost" id="condReset">Jarayonni boshqatdan ko'rish</button>
        </div>`;
      $("#condReset").addEventListener("click", () => { condState = ["done","active","locked","locked","locked"]; renderCandHeader(); renderCondTracker(); });
      renderCandHeader();
      return;
    }

    let steps = "";
    CONDITIONS.forEach((c, i) => {
      const st = condState[i];
      const meta = c.meta ? `<div class="cstep__meta">${c.meta.ico}${c.meta.t}</div>` : "";
      const isTest = c.type === "test";
      let detail = "";
      if (st === "active" || st === "grace") {
        const gate = isTest ? `
          <div class="test-gate">
            <div class="test-gate__head">${ICON.shieldCheck}<span>Eslatma — testga kirish ruxsatnomasi</span></div>
            <p>Ruxsatnoma onlayn testlar muvaffaqiyatli yakunlangach tizim tomonidan beriladi va yoshlar yetakchisi orqali rasmiylashtiriladi.</p>
          </div>` : "";
        const testInfo = isTest ? `
          <div class="test-info">
            <div class="test-info__banner">${ICON.exam}<span><b>Offlayn imtihon</b> — mahalla markazida, yuzma-yuz o'tkaziladi</span></div>
            <div class="test-info__grid">
              <div><span class="k">Joy</span><span class="v">${c.test.joy}</span></div>
              <div><span class="k">Vaqt</span><span class="v">${c.test.vaqt}</span></div>
              <div><span class="k">Format</span><span class="v">${c.test.format}</span></div>
              <div><span class="k">Natija</span><span class="v">${c.test.otish}</span></div>
            </div>
            <div class="test-info__topics"><span class="tlabel">Qamralgan mavzular:</span>
              ${c.test.mavzular.map(m => `<span class="tchip">${m}</span>`).join("")}</div>
          </div>` : "";
        const qa = c.q.length ? `
          <div class="cstep__qa">
            <div class="cstep__qa-label">${isTest ? ICON.exam : ICON.sms}${c.asker}</div>
            ${c.q.map((q, k) => `<div class="qa-item"><span class="q-n">${k + 1}.</span><span>${q}</span></div>`).join("")}
          </div>` : "";
        let actions = "";
        if (st === "active") {
          if (c.id === "commission") {
            actions = `<div class="cstep__actions"><button class="btn btn--ok" data-cond-pass="${i}">${ICON.check} Komissiya tasdig'ini berish</button></div>`;
          } else if (isTest) {
            actions = `<div class="cstep__actions">
              <button class="btn btn--ok" data-cond-pass="${i}">Testdan o'tdi · 78%</button>
              <button class="btn btn--fail" data-cond-fail="${i}">Yiqildi</button></div>`;
          } else {
            actions = `<div class="cstep__actions">
              <button class="btn btn--ok" data-cond-pass="${i}">Savol-javobdan o'tdi</button>
              <button class="btn btn--fail" data-cond-fail="${i}">O'tmadi</button></div>`;
          }
        } else { // grace
          const graceTxt = isTest
            ? `Nomzod offlayn testdan kerakli balni to'play olmadi. Bilimini mustahkamlab, keyingi mahalla testiga qayta yozilishi kerak.`
            : `Nomzod ushbu bosqichdan o'tolmadi. Targ'ibot ishlarini qaytadan amalga oshirib, tekshiruvni takrorlashi kerak.`;
          const retryTxt = isTest ? "Keyingi testga yozilish" : "Targ'ibotni qayta boshlash";
          actions = `
            <div class="grace-note">
              <div class="t">${ICON.alert} ${GRACE_DAYS} kun muddat berildi</div>
              <p>${graceTxt}</p>
            </div>
            <div class="cstep__actions"><button class="btn btn--gold" data-cond-retry="${i}">${retryTxt}</button></div>`;
        }
        detail = gate + testInfo + qa + actions;
      }
      const dotInner = st === "done" ? ICON.check : st === "locked" ? "" : (i + 1);
      const lockIco = st === "locked" ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>` : "";
      steps += `
        <div class="cstep cstep--${st}">
          <div class="cstep__rail">
            <div class="cstep__dot">${st === "locked" ? lockIco : dotInner}</div>
            <div class="cstep__line"></div>
          </div>
          <div class="cstep__card">
            <div class="cstep__head">
              <span class="cstep__title">${i + 1}. ${c.title}</span>
              <span class="cstep__who">Tekshiriladi: <b>${c.who}</b></span>
              <span class="cstep__status">${STATUS_LABEL[st]}</span>
            </div>
            <div class="cstep__req">${c.req}</div>
            ${meta}
            ${detail}
          </div>
        </div>`;
    });

    wrap.innerHTML = `<div class="cand" id="candHeader"></div><div class="cond-stepper">${steps}</div>`;
    renderCandHeader();

    wrap.querySelectorAll("[data-cond-pass]").forEach(b => b.addEventListener("click", () => condPass(+b.dataset.condPass)));
    wrap.querySelectorAll("[data-cond-fail]").forEach(b => b.addEventListener("click", () => condFail(+b.dataset.condFail)));
    wrap.querySelectorAll("[data-cond-retry]").forEach(b => b.addEventListener("click", () => condRetry(+b.dataset.condRetry)));
  }

  function renderCandHeader() {
    const h = $("#candHeader"); if (!h) return;
    const init = (CANDIDATE.hh[0] + CANDIDATE.rep[0]).toUpperCase();
    const done = condState.filter(s => s === "done").length;
    const pct = Math.round(done / CONDITIONS.length * 100);
    h.innerHTML = `
      <div class="cand__av">${init}</div>
      <div>
        <div class="cand__name">Nomzod: ${CANDIDATE.rep}</div>
        <div class="cand__sub">${CANDIDATE.hh} xonadoni · KiberHimoyachi · <b>${fmtN(CANDIDATE.pts)} ball</b></div>
      </div>
      <div class="cand__prog">
        <div class="t">${done} / ${CONDITIONS.length} shart bajarildi</div>
        <div class="bar"><i style="width:${pct}%"></i></div>
      </div>`;
  }

  function condPass(i) {
    condState[i] = "done";
    if (i + 1 < condState.length && condState[i + 1] === "locked") condState[i + 1] = "active";
    renderCondTracker();
  }
  function condFail(i) { condState[i] = "grace"; renderCondTracker(); }
  function condRetry(i) { condState[i] = "active"; renderCondTracker(); }

  /* =========================================================
     SUPERADMIN PANELI
     ========================================================= */
  /* =========================================================
     PLATFORMA TAHLILI — umumiy voronka + Word hisobot (superadmin)
     ========================================================= */
  function platformStats() {
    const rows = TUMANLAR.map(t => {
      const active = Math.round(t.users * (0.50 + t.kxi * 0.003));
      const tests = Math.round(t.users * (0.35 + t.kxi * 0.004));
      const offline = Math.round(t.users * (0.05 + t.kxi * 0.0012));
      const cert = Math.round(offline * (0.55 + t.kxi * 0.003));
      return { name: tumFull(t), kxi: t.kxi, aholi: t.aholi, users: t.users, active, tests, offline, cert, own: t.own };
    }).sort((a, b) => b.users - a.users);
    const tot = rows.reduce((s, r) => ({ aholi: s.aholi + r.aholi, users: s.users + r.users, active: s.active + r.active, tests: s.tests + r.tests, offline: s.offline + r.offline, cert: s.cert + r.cert }), { aholi: 0, users: 0, active: 0, tests: 0, offline: 0, cert: 0 });
    return { rows, tot };
  }
  const PA_STEPS = [
    { key: "users",   t: "Ro'yxatdan o'tgan",        d: "platformaga kirgan fuqarolar",     cls: "i-blue",  ico: () => ICON.users },
    { key: "active",  t: "Faol foydalanuvchi",        d: "oxirgi 30 kunda faoliyat yuritgan", cls: "i-teal",  ico: () => ICON.spark },
    { key: "tests",   t: "Test yechayotgan",          d: "kamida 1 ta sinovni bajargan",      cls: "i-gold",  ico: () => ICON.exam },
    { key: "offline", t: "Offlayn testga chaqirilgan", d: "mahalla markazidagi sinovga",       cls: "i-purple", ico: () => ICON.building },
    { key: "cert",    t: "Sertifikat olgan",          d: "offlayn sinovdan muvaffaqiyatli o'tgan", cls: "i-amber", ico: () => ICON.cert }
  ];
  function renderPlatformAnalytics() {
    const cardsEl = $("#paCards"), funnelEl = $("#paFunnel");
    if (!cardsEl || !funnelEl) return;
    const { tot } = platformStats();
    cardsEl.innerHTML = PA_STEPS.map(s => `<div class="card stat"><div class="stat__ico ${s.cls}">${s.ico()}</div><div class="stat__num">${fmtN(tot[s.key])}</div><div class="stat__label">${s.t}</div></div>`).join("");
    funnelEl.innerHTML = PA_STEPS.map((s, i) => {
      const v = tot[s.key];
      const pct = v / tot.users * 100;
      const prev = i === 0 ? null : (v / tot[PA_STEPS[i - 1].key] * 100);
      return `<div class="pa-step">
        <div class="pa-step__meta"><span class="pa-step__n">${i + 1}</span><div><div class="pa-step__t">${s.t}</div><div class="pa-step__d">${s.d}</div></div></div>
        <div class="pa-step__barwrap"><div class="pa-step__bar" style="width:${Math.max(6, pct)}%"><span>${fmtN(v)}</span></div></div>
        <div class="pa-step__pct">${pct.toFixed(1)}%${prev !== null ? `<small>oldingidan ${prev.toFixed(0)}%</small>` : `<small>asos — 100%</small>`}</div>
      </div>`;
    }).join("");
    const btn = $("#paWord");
    if (btn && !btn._wired) { btn._wired = true; btn.addEventListener("click", downloadPlatformWord); }
  }
  function downloadPlatformWord() {
    const { rows, tot } = platformStats();
    const now = new Date();
    const sana = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()}`;
    const pct = (a, b) => (b ? (a / b * 100).toFixed(1).replace(".", ",") + "%" : "—");
    const num = n => fmtN(n);
    const rowsHtml = rows.map((r, i) => `
      <tr${r.own ? ' style="background:#FEF6E4"' : ""}>
        <td style="text-align:center">${i + 1}</td>
        <td>${r.name}${r.own ? " ★" : ""}</td>
        <td style="text-align:right">${num(r.aholi)}</td>
        <td style="text-align:right">${num(r.users)}</td>
        <td style="text-align:right">${num(r.active)}</td>
        <td style="text-align:right">${num(r.tests)}</td>
        <td style="text-align:right">${num(r.offline)}</td>
        <td style="text-align:right">${num(r.cert)}</td>
        <td style="text-align:center">${r.kxi}</td>
      </tr>`).join("");
    const html = `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><title>KiberOgoh UZ — Platforma tahlili</title>
<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->
<style>
  body{ font-family:"Times New Roman", serif; font-size:12pt; color:#111; }
  h1{ font-size:16pt; text-align:center; margin:0 0 4pt; }
  h2{ font-size:13pt; margin:14pt 0 6pt; }
  .sub{ text-align:center; font-size:11pt; color:#444; margin:0 0 14pt; }
  table{ border-collapse:collapse; width:100%; font-size:10.5pt; }
  th,td{ border:1pt solid #333; padding:4pt 6pt; }
  th{ background:#DCE6F4; text-align:center; }
  .tot td{ background:#EFEFEF; font-weight:bold; }
  .note{ font-size:10pt; color:#555; margin-top:8pt; }
  .sign{ margin-top:28pt; }
</style></head><body>
<h1>«KiberOgoh UZ» platformasi bo'yicha umumiy tahliliy hisobot</h1>
<p class="sub">Toshkent viloyati · Hisobot sanasi: ${sana} · Manba: platforma monitoring tizimi (demo)</p>

<h2>1. Umumiy voronka ko'rsatkichlari</h2>
<table>
<tr><th style="width:6%">№</th><th>Bosqich</th><th style="width:18%">Soni</th><th style="width:16%">Jamiga nisbatan</th></tr>
${PA_STEPS.map((s, i) => `<tr><td style="text-align:center">${i + 1}</td><td>${s.t} <span style="color:#555">(${s.d})</span></td><td style="text-align:right">${num(tot[s.key])}</td><td style="text-align:center">${pct(tot[s.key], tot.users)}</td></tr>`).join("")}
</table>
<p class="note">Qamrov: ro'yxatdan o'tganlar viloyat aholisining ${pct(tot.users, tot.aholi)} qismini tashkil etadi (aholi — ${num(tot.aholi)} nafar).</p>

<h2>2. Hududlar kesimida (${rows.length} ta shahar va tuman)</h2>
<table>
<tr><th>№</th><th>Hudud</th><th>Aholi</th><th>Ro'yxatdan o'tgan</th><th>Faol</th><th>Test yechgan</th><th>Offlaynga chaqirilgan</th><th>Sertifikat olgan</th><th>KXI</th></tr>
${rowsHtml}
<tr class="tot"><td></td><td>JAMI</td><td style="text-align:right">${num(tot.aholi)}</td><td style="text-align:right">${num(tot.users)}</td><td style="text-align:right">${num(tot.active)}</td><td style="text-align:right">${num(tot.tests)}</td><td style="text-align:right">${num(tot.offline)}</td><td style="text-align:right">${num(tot.cert)}</td><td></td></tr>
</table>
<p class="note">★ — Nurafshon shahri (joriy e'tibor hududi). Foydalanuvchi ko'rsatkichlari namunaviy (demo) hisoblanadi; aholi va mahallalar soni rasmiy statistikaga asoslangan.</p>

<div class="sign">
<p>Ma'lumotnoma tuzildi: «KiberOgoh UZ» monitoring bo'limi</p>
<p>Imzo: ______________________ &nbsp;&nbsp;&nbsp; Sana: ${sana}</p>
</div>
</body></html>`;
    const blob = new Blob(["\ufeff" + html], { type: "application/msword;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `KiberOgoh_Platforma_tahlili_${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}.doc`;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 800);
  }

  function renderAdmin() {
    const sc = $("#adminScope");
    if (sc) sc.innerHTML = `
      <div class="scope-banner__ico">${ICON.globe}</div>
      <div><h3>Superadmin · barcha ruxsatlar ochiq</h3>
      <p>Butun platforma ko'rinadi: barcha mahallalar, raislar va foydalanuvchilar statistikasini ko'rish va boshqarish mumkin.</p></div>`;

    const st = $("#adminStats");
    if (st) {
      const cards = [
        { ico:ICON.building, cls:"i-gold", num:"200+", lab:"Jami mahallalar" },
        { ico:ICON.users, cls:"i-teal", num:"100 ming+", lab:"Jami foydalanuvchilar" },
        { ico:ICON.shieldCheck, cls:"i-purple", num:"200+", lab:"Faol raislar" },
        { ico:ICON.ban, cls:"i-red", num:"5 000+", lab:"Bloklangan raqamlar" }
      ];
      st.innerHTML = cards.map(c => `<div class="card stat"><div class="stat__ico ${c.cls}">${c.ico}</div><div class="stat__num">${c.num}</div><div class="stat__label">${c.lab}</div></div>`).join("");
    }

    const t = $("#adminMahallalar");
    if (t) {
      const head = `<div class="dtable__head dt-mahalla"><div>Mahalla</div><div>Yetakchi</div><div>Foydalanuvchilar</div><div>Faol</div><div>O'rt. ball</div><div></div></div>`;
      const rows = MAHALLALAR.map((m, i) => {
        const av = (m.name[0] + m.raisi[0]).toUpperCase();
        const col = avPalette[i % avPalette.length];
        return `<div class="dtable__row dt-mahalla${m.own ? " is-own" : ""}">
          <div class="cellname"><span class="cellname__av" style="background:${m.own ? 'var(--gold)' : col}">${av}</span>
            <div>${m.name}${m.own ? '<span class="own-tag">SIZ NAZORATDA</span>' : ''}<div class="cellsub">${m.region}</div></div></div>
          <div class="cellsub" style="font-weight:600;color:var(--ink)">${m.raisi}</div>
          <div class="cellnum">${m.users}</div>
          <div class="cellnum">${m.active}<small>faol</small></div>
          <div class="cellnum">${fmtN(m.avg)}</div>
          <div><button class="cell-link" data-view="mahalla">Ko'rish</button></div>
        </div>`;
      }).join("");
      t.innerHTML = head + rows;
      t.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => showView("mahalla")));
    }

    const pm = $("#permMatrix");
    if (pm) {
      const cell = v => v === "y" ? '<span class="perm-y">✓</span>' : v === "own" ? '<span class="perm-s">O‘z mahallasi</span>' : v === "dist" ? '<span class="perm-s">O‘z tumani</span>' : '<span class="perm-n">—</span>';
      pm.innerHTML = `
        <p style="font-size:13.5px;color:var(--muted);margin-bottom:14px">Har bir rol qaysi ma'lumotni ko'ra olishi va boshqarishi — quyidagi matritsa orqali belgilanadi. <b style="color:var(--navy)">Tuman mas'uli</b> o'z tumani, <b style="color:var(--navy)">Yoshlar yetakchisi</b> o'z mahallasi <b style="color:var(--navy)">doirasi</b> bilan cheklangan.</p>
        <div style="overflow-x:auto"><table class="permtable">
          <thead><tr><th>Ruxsat / Ma'lumot</th>
            <th><span class="perm-role"><span class="perm-dot" style="background:var(--gold)"></span>Superadmin</span></th>
            <th><span class="perm-role"><span class="perm-dot" style="background:var(--purple)"></span>Tuman mas'uli</span></th>
            <th><span class="perm-role"><span class="perm-dot" style="background:var(--teal)"></span>Yoshlar yetakchisi</span></th>
            <th><span class="perm-role"><span class="perm-dot" style="background:var(--blue)"></span>User</span></th></tr></thead>
          <tbody>${PERM_ROWS.map(r => `<tr><th>${r.r}</th><td>${cell(r.s)}</td><td>${cell(r.tm)}</td><td>${cell(r.a)}</td><td>${cell(r.u)}</td></tr>`).join("")}</tbody>
        </table></div>`;
    }
  }

  /* =========================================================
     MAHALLA PANELI (raisi — bitta mahalla doirasi)
     ========================================================= */
  function renderMahalla() {
    const my = MAHALLALAR.find(m => m.own) || MAHALLALAR[0];
    const sc = $("#mahallaScope");
    if (sc) sc.innerHTML = `
      <div class="scope-banner__ico">${ICON.building}</div>
      <div><h3>Yoshlar yetakchisi · ${my.name}</h3>
      <p><b>Faqat o'z mahallangiz ko'rinadi.</b> Boshqa mahallalar statistikasi siz uchun yopiq — u faqat Superadminga ochiq.</p></div>`;

    const st = $("#mahallaStats");
    if (st) {
      const cards = [
        { ico:ICON.users, cls:"i-gold", num:fmtN(my.users), lab:"Foydalanuvchilar" },
        { ico:ICON.spark, cls:"i-teal", num:fmtN(my.active), lab:"Faol (bu oy)" },
        { ico:ICON.medal, cls:"i-purple", num:fmtN(my.avg), lab:"O'rtacha ball" },
        { ico:ICON.ban, cls:"i-red", num:"340", lab:"Bloklangan raqamlar" }
      ];
      st.innerHTML = cards.map(c => `<div class="card stat"><div class="stat__ico ${c.cls}">${c.ico}</div><div class="stat__num">${c.num}</div><div class="stat__label">${c.lab}</div></div>`).join("");
    }

    // test ruxsatnomalari (onlayn testdan o'tganlar) — faqat yetakchiga
    const pl = $("#permitsList");
    if (pl) {
      pl.innerHTML = PERMITS.map((p, i) => `
        <div class="card permit-row${p.isNew ? " is-new" : ""}">
          <div class="permit-row__qr">${fakeQR(p.code, 21)}</div>
          <div class="permit-row__body">
            <div class="permit-row__name">${p.rep} — ${p.hh} xonadoni ${p.isNew ? '<span class="permit-new">YANGI</span>' : ''}</div>
            <div class="permit-row__sub">${ICON.check} Onlayn testlarni muvaffaqiyatli yakunladi · ${p.date}</div>
            <div class="permit-row__code">Ruxsatnoma: <b>${p.code}</b> · Maqsad: offlayn testga kirish</div>
          </div>
          <button class="btn btn--gold" data-permit="${i}">Ruxsatnomani ochish</button>
        </div>`).join("");
      pl.querySelectorAll("[data-permit]").forEach(b => b.addEventListener("click", () => openPermit(+b.dataset.permit)));
    }

    const hint = $("#mahallaUserHint");
    if (hint) hint.textContent = `${my.name} · ${my.users} foydalanuvchi (namunaviy 10 tasi)`;

    const t = $("#mahallaUsers");
    if (t) {
      const head = `<div class="dtable__head dt-users"><div>Foydalanuvchi</div><div>Xonadon</div><div>Daraja</div><div>Ball</div><div>Holat</div><div></div></div>`;
      const rows = HOUSEHOLDS.map((h, i) => {
        const av = (h.who[0] + h.hh[0]).toUpperCase();
        const col = h.you ? "var(--gold)" : avPalette[i % avPalette.length];
        const vs = vStatusFor(i);
        return `<div class="dtable__row dt-users${h.you ? " is-own" : ""}">
          <div class="cellname"><span class="cellname__av" style="background:${col}">${av}</span>
            <div>${h.who}${h.you ? '<span class="own-tag">SIZ</span>' : ''}<div class="cellsub">KiberHimoyachi</div></div></div>
          <div class="cellsub" style="font-weight:600;color:var(--ink)">${h.hh}</div>
          <div><span class="lvl-badge lvl-${h.lvl}">${levelName(h.lvl)}</span></div>
          <div class="cellnum">${fmtN(h.pts)}</div>
          <div><span class="vbadge ${vs.c}">${vs.t}</span></div>
          <div><button class="cell-link" data-view="dash">Profil</button></div>
        </div>`;
      }).join("");
      t.innerHTML = head + rows;
      t.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => showView("dash")));
    }

    const tasks = $("#mahallaTasks");
    if (tasks) tasks.innerHTML = `
      <div class="section-title" style="margin:0 0 10px"><h2 style="font-size:18px">Mahalla vazifalari</h2></div>
      <div class="mini-stat-row"><div class="mini-stat-row__ico i-blue">${ICON.social}</div><div class="mini-stat-row__t">Moderatsiya navbati</div><div class="mini-stat-row__v">3</div></div>
      <div class="mini-stat-row"><div class="mini-stat-row__ico i-gold">${ICON.cert}</div><div class="mini-stat-row__t">Tasdiq kutayotgan nomzodlar</div><div class="mini-stat-row__v">2</div></div>
      <div class="mini-stat-row"><div class="mini-stat-row__ico i-teal">${ICON.alert}</div><div class="mini-stat-row__t">Yangi xabarlar (bugun)</div><div class="mini-stat-row__v">8</div></div>
      <button class="btn btn--gold btn--block" data-view="privilege" style="margin-top:14px">Imtiyoz shartini tasdiqlash</button>`;
    if (tasks) tasks.querySelector("[data-view]").addEventListener("click", () => showView("privilege"));

    const locked = $("#mahallaLocked");
    if (locked) locked.innerHTML = `
      <div class="locked-box">
        ${ICON.lock}
        <h4>Boshqa mahallalar yopiq</h4>
        <p>Yoshlar yetakchisi sifatida siz faqat <b>${my.name}</b> ma'lumotlarini ko'rasiz. Qolgan ${MAHALLALAR.length - 1}+ mahalla statistikasi faqat Superadminga ochiq — bu RBAC doirasi (scope) bilan ta'minlanadi.</p>
      </div>`;

    // bildirishnoma badge — yangi ruxsatnomalar soni
    const badge = $("#mahallaBadge");
    if (badge) { const n = PERMITS.filter(p => p.isNew).length; badge.textContent = n; badge.style.display = n ? "" : "none"; }
  }

  /* ---- ruxsatnoma (QR) modal — faqat yetakchiga ---- */
  function openPermit(i) {
    const p = PERMITS[i]; if (!p) return;
    const doc = $("#permitDoc"), modal = $("#permitModal");
    doc.innerHTML = `
      <button class="permit-doc__close" data-permit-close aria-label="Yopish">&times;</button>
      <div class="permit-doc__top">
        <span class="permit-doc__brand"><span class="permit-doc__shield">${ICON.shieldCheck}</span> KiberOgoh UZ</span>
        <span class="permit-doc__tag">RASMIY</span>
      </div>
      <div class="permit-doc__title">RUXSATNOMA</div>
      <div class="permit-doc__num">№ ${p.code}</div>
      <div class="permit-doc__qr">${fakeQR(p.code, 27)}</div>
      <div class="permit-doc__rows">
        <div><span class="k">Fuqaro</span><span class="v">${p.full}</span></div>
        <div><span class="k">Mahalla</span><span class="v">${MY_MAHALLA}</span></div>
        <div><span class="k">Maqsad</span><span class="v">Offlayn bilim testiga kirish</span></div>
        <div><span class="k">Berilgan sana</span><span class="v">${p.date}</span></div>
        <div><span class="k">Holat</span><span class="v"><span class="permit-doc__live">Faol</span></span></div>
      </div>
      <div class="permit-doc__foot">
        <span>Onlayn testlar yakunlangani uchun <b>tizim tomonidan</b> berildi. Yoshlar yetakchisi rasmiylashtiradi.</span>
        ${SEAL}
      </div>`;
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
  }
  function closePermit() {
    const modal = $("#permitModal");
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
  }
  function setupPermitModal() {
    document.addEventListener("click", e => { if (e.target.closest("[data-permit-close]")) closePermit(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePermit(); });
  }

  /* =========================================================
     KIBERXAVFSIZLIK INDEKSI (KXI) — tuman mas'uli / superadmin
     ========================================================= */
  function renderKxi() {
    const rows = KXI_MAHALLALAR.map(m => ({ ...m, score: kxiScore(m), lvl: kxiLevel(kxiScore(m)) }))
      .sort((a, b) => b.score - a.score);
    const counts = { green: 0, yellow: 0, red: 0 };
    rows.forEach(r => counts[r.lvl.key]++);
    const avg = Math.round(rows.reduce((s, r) => s + r.score, 0) / rows.length);

    const scope = $("#kxiScope");
    if (scope) scope.innerHTML = `
      <div class="scope-banner__ico">${ICON.globe}</div>
      <div><h3>Tuman mas'uli · ${MY_TUMAN}</h3>
        <p>Tumandagi <b>${rows.length} ta mahalla</b> holati ko'rinadi. Bir qarashda qaysi mahallaga e'tibor kerakligi aniqlanadi.</p></div>`;

    const sum = $("#kxiSummary");
    if (sum) {
      const cards = [
        { num: avg, lab: "Tuman o'rtacha KXI", cls: "i-gold", ico: ICON.spark },
        { num: counts.green, lab: "Xavfsiz 🟢", cls: "i-teal", ico: ICON.shieldCheck },
        { num: counts.yellow, lab: "Ogohlantirish 🟡", cls: "i-amber", ico: ICON.eye },
        { num: counts.red, lab: "Yuqori xavf 🔴", cls: "i-red", ico: ICON.alert }
      ];
      sum.innerHTML = cards.map(c => `<div class="card stat"><div class="stat__ico ${c.cls}">${c.ico}</div><div class="stat__num">${c.num}</div><div class="stat__label">${c.lab}</div></div>`).join("");
    }

    const legend = $("#kxiLegend");
    if (legend) {
      const L = [
        { cls: "kxi-green", dot: "🟢", t: "Xavfsiz mahalla", range: "81–100 ball", pts: ["Aholining ko'p qismi platformadan foydalanadi", "Test natijalari yuqori, firibgarlik kam", "Ko'ngillilar faol, ogohlantirishlar tez tarqaladi"], msg: "Platformada: «Mahalla holati: Xavfsiz 🟢»" },
        { cls: "kxi-yellow", dot: "🟡", t: "Ogohlantirish darajasi", range: "51–80 ball", pts: ["Aholi faolligi pasaygan, testlar kam ishlangan", "Firibgarlik urinishlari ko'paygan", "Ko'ngillilar soni yetarli emas"], msg: "Tavsiya: «Mahallangizda kiber faollik pasaygan. Testlarda qatnashing va qo'shnilaringizni ogohlantiring.»" },
        { cls: "kxi-red", dot: "🔴", t: "Yuqori xavf", range: "0–50 ball", pts: ["Firibgarliklar ko'p, foydalanuvchilar juda kam", "Kiber savodxonlik past", "Ko'ngillilar ishlamayapti"], msg: "Avtomatik tavsiya: targ'ibot o'tkazish, jonli seminar, qo'shimcha ogohlantirish" }
      ];
      legend.innerHTML = L.map(x => `
        <div class="card kxi-leg ${x.cls}">
          <div class="kxi-leg__head"><span class="kxi-leg__dot">${x.dot}</span><div><div class="kxi-leg__t">${x.t}</div><div class="kxi-leg__range">${x.range}</div></div></div>
          <ul class="kxi-leg__list">${x.pts.map(p => `<li>${p}</li>`).join("")}</ul>
          <div class="kxi-leg__msg">${x.msg}</div>
        </div>`).join("");
    }

    const table = $("#kxiTable");
    if (table) {
      table.innerHTML = `<div class="kxitable__head"><div>Mahalla</div><div>KXI ball</div><div>Holat</div><div></div></div>` +
        rows.map((r, i) => `
          <div class="kxitable__row ${r.lvl.cls}" data-kxi="${i}">
            <div class="kxitable__name">${r.own ? '<span class="kxi-you">SIZ</span> ' : ""}${r.name}</div>
            <div class="kxitable__score"><span class="kxitable__num">${r.score}</span><div class="kxitable__bar"><i style="width:${r.score}%"></i></div></div>
            <div><span class="kxi-badge ${r.lvl.cls}">${r.lvl.dot} ${r.lvl.label}</span></div>
            <button class="kxitable__exp" aria-label="Batafsil">${ICON.caret}</button>
          </div>
          <div class="kxitable__detail" id="kxiDetail${i}">
            <div class="kxi-breakdown">
              ${r.sub.map((v, k) => `<div class="kxi-ind"><div class="kxi-ind__top"><span>${KXI_WEIGHTS[k].k}</span><span class="kxi-ind__w">${v}/100 · ulush ${KXI_WEIGHTS[k].w}%</span></div><div class="kxi-ind__bar"><i style="width:${v}%;background:${v >= 81 ? "var(--teal)" : v >= 51 ? "var(--gold)" : "var(--red)"}"></i></div></div>`).join("")}
            </div>
            <div class="kxi-rec ${r.lvl.cls}">${ICON.alert}<span><b>Tavsiya:</b> ${KXI_REC[r.lvl.key]}</span></div>
          </div>`).join("");
      table.querySelectorAll(".kxitable__row").forEach(row => row.addEventListener("click", () => {
        const d = $("#kxiDetail" + row.dataset.kxi);
        const open = d.classList.toggle("is-open"); row.classList.toggle("is-exp", open);
      }));
    }

    const formula = $("#kxiFormula");
    if (formula) {
      const palette = { 0: "var(--blue)", 1: "var(--purple)", 2: "var(--teal)", 3: "var(--gold)", 4: "#e07b3e" };
      formula.innerHTML = `
        <p style="font-size:13.5px;color:var(--muted);margin:0 0 14px">Tizim har bir ko'rsatkichni baholab, og'irligiga ko'ra <b style="color:var(--navy)">100 ballik indeksni avtomatik hisoblaydi</b>:</p>
        <div class="kxi-weights">${KXI_WEIGHTS.map((x, i) => `<div class="kxi-wseg" style="width:${x.w}%;background:${palette[i]}" title="${x.k} ${x.w}%"></div>`).join("")}</div>
        <div class="kxi-wlist">${KXI_WEIGHTS.map((x, i) => `<div class="kxi-wrow"><span class="kxi-wkey"><span class="kxi-wdot" style="background:${palette[i]}"></span>${x.k}</span><span class="kxi-wval">${x.w}%</span></div>`).join("")}</div>`;
    }
  }

  /* =========================================================
     PLATFORMA KARTASI (interaktiv choropleth + diagrammalar)
     ========================================================= */
  let mapSel = null;
  let mapDrill = null; // superadmin: tanlangan tuman (drill-down holati)

  // --- mahalla darajasidagi deterministik statistika (demo) ---
  function mahallaStats(distRef, m, idx) {
    let s = 0; for (const ch of (m.name + distRef.name)) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
    const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
    const aholi = m.aholi || Math.max(600, Math.round(distRef.aholi / distRef.mahallas * (0.75 + rnd() * 0.5)));
    const baseCov = distRef.users / distRef.aholi;
    const users = Math.max(40, Math.round(aholi * baseCov * (0.75 + rnd() * 0.5)));
    const faol = Math.min(96, Math.max(28, Math.round(m.score * 0.75 + rnd() * 20)));
    // 5 ko'rsatkich: Navbahor (own, idx 0 Zangiotada) — real KXI namunasi
    let sub;
    if (distRef.own && idx < KXI_MAHALLALAR.length && KXI_MAHALLALAR[idx].name === m.name) {
      sub = KXI_MAHALLALAR[idx].sub.slice();
    } else {
      sub = KXI_WEIGHTS.map(() => Math.max(20, Math.min(99, Math.round(m.score + (rnd() * 2 - 1) * 14))));
    }
    return { aholi, users, cov: users / aholi * 100, faol, sub };
  }

  function renderMahallaDetail(m, distRef, idx) {
    const det = $("#mapDetail"); if (!det) return;
    const st = mahallaStats(distRef, m, idx);
    const lvl = kxiLevel(m.score);
    det.innerHTML = `
      <div class="md-head"><div><h3>${m.name}</h3><span class="kxi-badge ${lvl.cls}">${lvl.dot} ${lvl.label}</span></div><div class="md-score" style="color:${kxiColor(m.score)}">${m.score}<span>/100</span></div></div>
      <div class="md-stats md-stats--4">
        <div><span class="k">Aholi ${m.aholi ? "(rasmiy)" : "(taxm.)"}</span><span class="v">${fmtN(st.aholi)}</span></div>
        ${m.xon ? `<div><span class="k">Xonadon (rasmiy)</span><span class="v">${fmtN(m.xon)}</span></div><div><span class="k">Oila (rasmiy)</span><span class="v">${fmtN(m.oila)}</span></div>` : ""}
        <div><span class="k">Foydalanuvchi</span><span class="v">${fmtN(st.users)}</span></div>
        <div><span class="k">Qamrov</span><span class="v" style="color:${kxiColor(Math.min(100, st.cov * 6))}">${st.cov.toFixed(1)}%</span></div>
        <div><span class="k">Faollik</span><span class="v">${st.faol}%</span></div>
      </div>
      <div class="md-sub">KXI ko'rsatkichlari kesimi</div>
      <div class="kxi-breakdown" style="padding:0">
        ${st.sub.map((v, k) => `<div class="kxi-ind"><div class="kxi-ind__top"><span>${KXI_WEIGHTS[k].k}</span><span class="kxi-ind__w">${v}/100 · ${KXI_WEIGHTS[k].w}%</span></div><div class="kxi-ind__bar"><i style="width:${v}%;background:${v >= 81 ? "var(--teal)" : v >= 51 ? "var(--gold)" : "var(--red)"}"></i></div></div>`).join("")}
      </div>
      <div class="kxi-rec ${lvl.cls}" style="margin:12px 0 0">${ICON.alert}<span><b>Tavsiya:</b> ${KXI_REC[lvl.key]}</span></div>`;
  }

  function districtGeo(distRef) { return TV_DIST[tumFull(distRef)] || null; }

  function renderMap() {
    const wrap = $("#view-kxi"); if (!wrap || !$("#mapSvg")) return;
    const own = TUMANLAR.find(t => t.own);
    const role = currentRole;
    // rejim: region | district | mahallaScope
    let mode = "region", distRef = null;
    if (role === "raisi") { mode = "mahallaScope"; distRef = own; }
    else if (role === "tuman") { mode = "district"; distRef = own; }
    else if (mapDrill) { mode = "district"; distRef = mapDrill; }

    const title = $("#mapTitle"), lead = $("#mapLead"), scope = $("#mapScope");
    const svg = $("#mapSvg"), tip = $("#mapTip"), crumb = $("#mapCrumb");
    const geoNorm = x => (x || "").replace(/[\u2018\u2019\u02bb\u02bc`]/g, "'").trim();

    // --- birliklar ---
    let units;
    if (mode === "region") {
      units = TUMANLAR.map(t => ({ name: t.name, disp: tumDisp(t), full: tumFull(t), score: t.kxi, aholi: t.aholi, users: t.users, cov: t.users / t.aholi * 100, mahallas: t.mahallas, own: t.own, ref: t }));
    } else {
      units = tumanMahallas(distRef).map((m, i) => ({ name: m.name, score: m.score, idx: i, mhz: m }));
    }
    units.forEach(u => u.lvl = kxiLevel(u.score));
    const ownIdx = 0; // raisi mahallasi — Navbahor (namunaning birinchisi)

    // --- sarlavha / scope / crumb ---
    if (mode === "region") {
      if (title) title.textContent = `${REGION_NAME} — hududlar xaritasi`;
      if (lead) lead.textContent = "Hudud ustiga bosing — o'sha tumanning real xaritasi ochiladi.";
      if (scope) { scope.className = "scope-banner scope-banner--admin";
        scope.innerHTML = `<div class="scope-banner__ico">${ICON.globe}</div><div><h3>Superadmin · ${REGION_NAME}</h3><p>Barcha <b>${units.length} hudud</b>, <b>${fmtN(TUMANLAR.reduce((s, t) => s + t.mahallas, 0))} rasmiy mahalla</b>. Hududni tanlang — real tuman xaritasi ochiladi.</p></div>`; }
      if (crumb) crumb.innerHTML = `<span class="crumb__seg is-cur">${ICON.map} ${REGION_NAME}</span>`;
    } else if (mode === "district") {
      const full = tumFull(distRef);
      if (title) title.textContent = `${full} xaritasi`;
      if (lead) lead.textContent = `Real kontur ichida ${distRef.mahallas} ta mahalla uchastkasi. Mahalla ustiga bosing — statistikasi ochiladi.`;
      if (scope) {
        if (role === "tuman") { scope.className = "scope-banner scope-banner--tuman";
          scope.innerHTML = `<div class="scope-banner__ico">${ICON.globe}</div><div><h3>Tuman mas'uli · ${full}</h3><p>Tumandagi <b>${distRef.mahallas} ta rasmiy mahalla</b>. Boshqa hududlar yopiq.</p></div>`; }
        else { scope.className = "scope-banner scope-banner--admin";
          scope.innerHTML = `<div class="scope-banner__ico">${ICON.globe}</div><div><h3>Superadmin · ${full}</h3><p><b>${distRef.mahallas} ta mahalla</b> · aholi <b>${fmtN(distRef.aholi)}</b> · foydalanuvchi <b>${fmtN(distRef.users)}</b>.</p></div>`; }
      }
      if (crumb) crumb.innerHTML = role === "tuman"
        ? `<span class="crumb__seg is-cur">${ICON.map} ${full}</span>`
        : `<button class="crumb__seg crumb__back" id="crumbBack">${ICON.map} ${REGION_NAME}</button><span class="crumb__sep">›</span><span class="crumb__seg is-cur">${full}</span><button class="crumb__return" id="crumbReturn">← Viloyatga qaytish</button>`;
    } else { // mahallaScope
      const full = tumFull(distRef);
      const mName = units[ownIdx].name;
      if (title) title.textContent = `${mName} — mahalla statistikasi`;
      if (lead) lead.textContent = "Faqat o'z mahallangiz ma'lumotlari ochiq. Qo'shni mahallalar yopiq ko'rinadi.";
      if (scope) { scope.className = "scope-banner scope-banner--raisi";
        scope.innerHTML = `<div class="scope-banner__ico">${ICON.building}</div><div><h3>Yoshlar yetakchisi · ${mName}</h3><p>${full} tarkibida. Faqat <b>o'z mahallangiz</b> statistikasi ko'rinadi — boshqa ${distRef.mahallas - 1} mahalla yopiq.</p></div>`; }
      if (crumb) crumb.innerHTML = `<span class="crumb__seg">${ICON.map} ${full}</span><span class="crumb__sep">›</span><span class="crumb__seg is-cur">${mName}</span>`;
    }

    // --- summary kartalar ---
    const sum = $("#mapSummary");
    if (sum) {
      let cards;
      if (mode === "region") {
        const avg = Math.round(units.reduce((s, u) => s + u.score, 0) / units.length);
        const totA = TUMANLAR.reduce((s, t) => s + t.aholi, 0), totU = TUMANLAR.reduce((s, t) => s + t.users, 0);
        cards = [
          { num: units.length, lab: "Hududlar", cls: "i-blue", ico: ICON.map },
          { num: avg, lab: "O'rtacha KXI", cls: "i-gold", ico: ICON.spark },
          { num: fmtN(TUMANLAR.reduce((s, t) => s + t.mahallas, 0)), lab: "Mahallalar (rasmiy)", cls: "i-purple", ico: ICON.building },
          { num: fmtN(totU), lab: "Foydalanuvchilar", cls: "i-teal", ico: ICON.users },
          { num: (totU / totA * 100).toFixed(1) + "%", lab: `Qamrov · ${(totA / 1e6).toFixed(2).replace(".", ",")} mln aholidan`, cls: "i-amber", ico: ICON.target }
        ];
      } else if (mode === "district") {
        const avg = Math.round(units.reduce((s, u) => s + u.score, 0) / units.length);
        cards = [
          { num: units.length, lab: "Mahallalar", cls: "i-blue", ico: ICON.map },
          { num: avg, lab: "O'rtacha KXI", cls: "i-gold", ico: ICON.spark },
          { num: fmtN(distRef.aholi), lab: "Aholi soni", cls: "i-purple", ico: ICON.building },
          { num: fmtN(distRef.users), lab: "Foydalanuvchilar", cls: "i-teal", ico: ICON.users },
          { num: (distRef.users / distRef.aholi * 100).toFixed(1) + "%", lab: "Qamrov (aholidan)", cls: "i-amber", ico: ICON.target }
        ];
      } else {
        const m = units[ownIdx]; const st = mahallaStats(distRef, m.mhz, ownIdx);
        cards = [
          { num: m.score, lab: "Mahalla KXI", cls: "i-gold", ico: ICON.spark },
          { num: m.lvl.dot + " " + m.lvl.label, lab: "Holat", cls: "i-blue", ico: ICON.shieldCheck },
          { num: fmtN(st.aholi), lab: "Aholi (taxm.)", cls: "i-purple", ico: ICON.building },
          { num: fmtN(st.users), lab: "Foydalanuvchilar", cls: "i-teal", ico: ICON.users },
          { num: st.faol + "%", lab: "Faollik darajasi", cls: "i-amber", ico: ICON.target }
        ];
      }
      sum.classList.add("stat-grid--5");
      sum.innerHTML = cards.map(c => `<div class="card stat"><div class="stat__ico ${c.cls}">${c.ico}</div><div class="stat__num">${c.num}</div><div class="stat__label">${c.lab}</div></div>`).join("");
    }

    // --- xarita ---
    function wireCell(gEl, u, onClick) {
      gEl.addEventListener("mousemove", e => {
        const stage = svg.closest(".map-stage").getBoundingClientRect();
        tip.style.left = (e.clientX - stage.left) + "px"; tip.style.top = (e.clientY - stage.top) + "px";
        tip.innerHTML = gEl.classList.contains("is-locked")
          ? `<div class="mtip__t">${u.name}</div><div class="mtip__row"><span>Holat</span><b>🔒 Yopiq</b></div><div class="mtip__cta">Faqat o'z mahallangiz ochiq</div>`
          : `<div class="mtip__t">${u.full || u.name}</div><div class="mtip__row"><span>KXI</span><b>${u.score}</b></div><div class="mtip__row"><span>Holat</span><b>${u.lvl.dot} ${u.lvl.label}</b></div>${u.aholi ? `<div class="mtip__row"><span>Aholi</span><b>${fmtN(u.aholi)}</b></div>` : ""}${u.users ? `<div class="mtip__row"><span>Foydalanuvchi</span><b>${fmtN(u.users)}</b></div>` : ""}${u.cov ? `<div class="mtip__row"><span>Qamrov</span><b class="mtip__cov">${u.cov.toFixed(1)}%</b></div>` : ""}${u.mahallas ? `<div class="mtip__row"><span>Mahalla</span><b>${u.mahallas}</b></div>` : ""}<div class="mtip__cta">${mode === "region" ? "Bosing — tuman xaritasi ochiladi" : "Bosing — mahalla statistikasi"}</div>`;
        tip.classList.add("is-on");
      });
      gEl.addEventListener("mouseleave", () => tip.classList.remove("is-on"));
      if (onClick) gEl.addEventListener("click", onClick);
    }
    function selectMapUnit(gEl, u) {
      svg.querySelectorAll(".mcell").forEach(x => x.classList.remove("is-sel"));
      if (gEl) gEl.classList.add("is-sel");
      if (mode === "region") renderMapDetail(u);
      else renderMahallaDetail(u.mhz, distRef, u.idx);
      $$("#mapBars .mbar").forEach(b => b.classList.toggle("is-sel", b.dataset.bar === u.name));
    }
    renderMap._select = selectMapUnit;

    if (svg && mode === "region") {
      const byName = {}; TV_GEO.forEach(g => byName[geoNorm(g.n)] = g);
      const drawn = [];
      units.forEach(u => { const g = byName[geoNorm(u.full)]; if (g) drawn.push({ u, g }); });
      drawn.sort((a, b) => b.g.a - a.g.a);
      svg.setAttribute("viewBox", `0 0 ${TV_VIEW.w} ${TV_VIEW.h}`);
      svg.classList.add("mapsvg--geo");
      svg.innerHTML = drawn.map(({ u, g }, i) => {
        const fill = kxiColor(u.score); const dark = u.score >= 51;
        const nameFill = dark ? "#fff" : "#7a2030", valFill = dark ? "rgba(255,255,255,.88)" : "rgba(122,32,48,.85)";
        let label = "";
        if (g.a >= 6000) label = `<text x="${g.cx}" y="${g.cy - 5}" class="mcell__name" fill="${nameFill}">${u.disp || u.name}</text><text x="${g.cx}" y="${g.cy + 15}" class="mcell__val" fill="${valFill}">${u.score}</text>`;
        else if (g.a >= 2500) label = `<text x="${g.cx}" y="${g.cy - 3}" class="mcell__name mcell__name--sm" fill="${nameFill}">${u.disp || u.name}</text><text x="${g.cx}" y="${g.cy + 12}" class="mcell__val mcell__val--sm" fill="${valFill}">${u.score}</text>`;
        else label = `<circle cx="${g.cx}" cy="${g.cy}" r="5" class="mcell__mark"/>`;
        const you = u.own ? `<text x="${g.cx}" y="${g.cy - 24}" class="mcell__you mcell__you--geo">SIZ</text>` : "";
        return `<g class="mcell${g.a < 2500 ? " mcell--tiny" : ""}" data-cell="${i}"><path d="${g.d}" fill="${fill}" fill-rule="evenodd" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>${label}${you}</g>`;
      }).join("");
      renderMap._units = drawn.map(x => x.u);
      svg.querySelectorAll(".mcell").forEach(gEl => {
        const u = drawn[+gEl.dataset.cell].u;
        wireCell(gEl, u, () => { mapDrill = u.ref; renderMap(); }); // DRILL: real tuman xaritasi
      });
    } else if (svg) {
      // district yoki mahallaScope — real tuman konturi + Voronoi uchastkalar
      const geo = districtGeo(distRef);
      svg.classList.add("mapsvg--geo");
      if (geo) {
        svg.setAttribute("viewBox", `0 0 ${geo.w} ${geo.h}`);
        const dense = units.length > 30;
        const locked = mode === "mahallaScope";
        svg.innerHTML =
          `<path class="dist-under" d="${geo.o}"/>` +
          units.map((u, i) => {
            const cell = geo.c[i]; if (!cell) return "";
            const isOwn = locked && i === ownIdx;
            const fill = locked && !isOwn ? "url(#lockhatch)" : kxiColor(u.score);
            const dark = u.score >= 51;
            let label = "";
            if (!locked || isOwn) {
              label = dense && !isOwn
                ? `<text x="${cell.cx}" y="${cell.cy + 4}" class="mcell__val mcell__val--sm" fill="${dark ? "rgba(255,255,255,.92)" : "rgba(122,32,48,.85)"}">${u.score}</text>`
                : `<text x="${cell.cx}" y="${cell.cy - 2}" class="mcell__name mcell__name--sm" fill="${dark ? "#fff" : "#7a2030"}">${u.name.replace(" MFY", "")}</text><text x="${cell.cx}" y="${cell.cy + 13}" class="mcell__val mcell__val--sm" fill="${dark ? "rgba(255,255,255,.88)" : "rgba(122,32,48,.85)"}">${u.score}</text>`;
            }
            const you = isOwn ? `<text x="${cell.cx}" y="${cell.cy - 18}" class="mcell__you mcell__you--geo">SIZ</text>` : "";
            return `<g class="mcell${locked && !isOwn ? " is-locked" : ""}" data-cell="${i}"><path d="${cell.d}" fill="${locked && !isOwn ? "#d7dcea" : fill}" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>${label}${you}</g>`;
          }).join("") +
          `<path class="dist-outline" d="${geo.o}"/>`;
        renderMap._units = units;
        svg.querySelectorAll(".mcell").forEach(gEl => {
          const u = units[+gEl.dataset.cell];
          const lockedCell = gEl.classList.contains("is-locked");
          wireCell(gEl, u, lockedCell ? null : () => selectMapUnit(gEl, u));
        });
        // raisi: o'z mahallasini avtomatik tanlash
        if (locked) {
          const ownEl = svg.querySelector(`.mcell[data-cell="${ownIdx}"]`);
          selectMapUnit(ownEl, units[ownIdx]);
        }
      }
    }

    // --- donut yoki ko'rsatkichlar ---
    const donut = $("#mapDonut");
    if (donut) {
      if (mode === "mahallaScope") {
        const st = mahallaStats(distRef, units[ownIdx].mhz, ownIdx);
        donut.innerHTML = `<div style="width:100%">${st.sub.map((v, k) => `<div class="kxi-ind"><div class="kxi-ind__top"><span>${KXI_WEIGHTS[k].k}</span><span class="kxi-ind__w">${v}/100</span></div><div class="kxi-ind__bar"><i style="width:${v}%;background:${v >= 81 ? "var(--teal)" : v >= 51 ? "var(--gold)" : "var(--red)"}"></i></div></div>`).join("")}</div>`;
      } else {
        const counts = { green: 0, yellow: 0, red: 0 };
        units.forEach(u => counts[u.lvl.key]++);
        const tot = units.length, gp = counts.green / tot * 100, yp = counts.yellow / tot * 100;
        donut.innerHTML = `
          <div class="donut" style="background:conic-gradient(var(--teal) 0 ${gp}%, var(--gold) ${gp}% ${gp + yp}%, var(--red) ${gp + yp}% 100%)"><div class="donut__hole"><div class="donut__num">${tot}</div><div class="donut__lab">${mode === "region" ? "hudud" : "mahalla"}</div></div></div>
          <div class="donut__legend">
            <div><span class="dleg" style="background:var(--teal)"></span>Xavfsiz 🟢 <b>${counts.green}</b></div>
            <div><span class="dleg" style="background:var(--gold)"></span>Ogohlantirish 🟡 <b>${counts.yellow}</b></div>
            <div><span class="dleg" style="background:var(--red)"></span>Yuqori xavf 🔴 <b>${counts.red}</b></div>
          </div>`;
      }
    }

    // --- reyting bars ---
    const bars = $("#mapBars");
    if (bars) {
      if (mode === "mahallaScope") {
        const m = units[ownIdx];
        const distAvg = Math.round(units.reduce((s, u) => s + u.score, 0) / units.length);
        bars.innerHTML = `
          <p style="font-size:13px;color:var(--muted);margin:0 0 12px">Mahallangiz tuman o'rtachasi bilan taqqoslanadi. Boshqa mahallalarning alohida ko'rsatkichlari yopiq.</p>
          <div class="mbar is-you"><div class="mbar__name"><span class="kxi-you">SIZ</span> ${m.name.replace(" MFY", "")}</div><div class="mbar__track"><i style="width:${m.score}%;background:${kxiColor(m.score)}"></i></div><div class="mbar__val">${m.score}</div></div>
          <div class="mbar"><div class="mbar__name">${tumFull(distRef)} o'rtachasi</div><div class="mbar__track"><i style="width:${distAvg}%;background:${kxiColor(distAvg)}"></i></div><div class="mbar__val">${distAvg}</div></div>`;
      } else {
        const modeBar = renderMap._barMode || "kxi";
        const covMax = Math.max(...units.map(x => x.cov || 0), 1);
        const rowHtml = u => {
          const w = modeBar === "cov" ? (u.cov / covMax * 100) : u.score;
          const col = modeBar === "cov" ? "var(--blue)" : kxiColor(u.score);
          const vtxt = modeBar === "cov" ? (u.cov || 0).toFixed(1) + "%" : u.score;
          return `<div class="mbar mbar--click${u.own ? " is-you" : ""}" data-bar="${u.name}" title="Xaritada ko'rsatish"><div class="mbar__name">${u.own ? '<span class="kxi-you">SIZ</span> ' : ""}${(u.disp || u.name).replace(" MFY", "")}</div><div class="mbar__track"><i style="width:${w}%;background:${col}"></i></div><div class="mbar__val mbar__val--w">${vtxt}</div></div>`;
        };
        const sorted = [...units].sort((a, b) => (modeBar === "cov" ? (b.cov || 0) - (a.cov || 0) : b.score - a.score));
        const toggle = mode === "region"
          ? `<div class="map-toggle"><button class="map-toggle__b${modeBar === "kxi" ? " is-on" : ""}" data-mode="kxi">KXI reytingi</button><button class="map-toggle__b${modeBar === "cov" ? " is-on" : ""}" data-mode="cov">Qamrov reytingi %</button></div>`
          : `<p style="font-size:12.5px;color:var(--faint);margin:0 0 10px">${units.length} ta mahalla · KXI bo'yicha tartiblangan</p>`;
        bars.innerHTML = toggle + sorted.map(rowHtml).join("");
        bars.querySelectorAll(".map-toggle__b").forEach(b => b.addEventListener("click", () => { renderMap._barMode = b.dataset.mode; renderMap(); }));
        bars.querySelectorAll(".mbar").forEach(b => b.addEventListener("click", () => {
          const u = units.find(x => x.name === b.dataset.bar); if (!u) return;
          const cellEl = [...svg.querySelectorAll(".mcell")].find(g => (renderMap._units || [])[+g.dataset.cell] === u);
          if (mode === "region") { mapDrill = u.ref; renderMap(); }
          else selectMapUnit(cellEl, u);
        }));
      }
    }

    // --- detal boshlang'ich holati ---
    mapSel = null;
    const det = $("#mapDetail");
    if (det && mode !== "mahallaScope") det.innerHTML = `<div class="map-detail-empty">${ICON.map}<p>${mode === "region" ? "Hudud ustiga bosing — o'sha tumanning real xaritasi ochiladi." : "Mahalla ustiga bosing — statistikasi shu yerda chiqadi."}</p></div>`;

    // --- crumb tugmalari ---
    const back1 = $("#crumbBack"), back2 = $("#crumbReturn");
    [back1, back2].forEach(b => b && b.addEventListener("click", () => { mapDrill = null; renderMap(); }));

    // diqqat markazida — Nurafshon (SIZ): region rejimida avtomatik tanlangan
    if (mode === "region") {
      const arr = renderMap._units || [];
      const ownCell = [...svg.querySelectorAll(".mcell")].find(g => arr[+g.dataset.cell] && arr[+g.dataset.cell].own);
      if (ownCell) selectMapUnit(ownCell, arr[+ownCell.dataset.cell]);
    }

    // --- izohlar ---
    const th = $("#kxiTableHint");
    const ownMhz = own.mahallas;
    if (th) th.textContent = mode === "district" && role === "tuman"
      ? `${MY_TUMAN}: ${ownMhz} ta rasmiy mahalla — real ro'yxat va aholi soni · qatorni bosib batafsil ko'ring`
      : mode === "mahallaScope"
        ? `${MY_TUMAN}ning ${ownMhz} real mahallasi — sizniki birinchi qatorda`
        : `Mahalla kesimi: ${MY_TUMAN} (${ownMhz} ta real mahalla) · qatorni bosib batafsil ko'ring`;
    const mh = $("#mapHint");
    if (mh) mh.textContent = mode === "region"
      ? "real ma'muriy chegaralar · rang — KXI darajasi"
      : mode === "district"
        ? "real tuman konturi · mahalla uchastkalari (demo bo'linma)"
        : "faqat o'z mahallangiz ochiq";
  }

  function renderMapDetail(u) {
    const det = $("#mapDetail"); if (!det) return;
    const mhz = tumanMahallas(u.ref).map(m => ({ ...m, lvl: kxiLevel(m.score) })).sort((a, b) => b.score - a.score);
    const top = mhz.slice(0, 5), low = mhz.slice(-3).reverse();
    const cov = u.cov.toFixed(1);
    const mbar = m => `<div class="mbar"><div class="mbar__name">${m.name.replace(" MFY", "")}</div><div class="mbar__track"><i style="width:${m.score}%;background:${kxiColor(m.score)}"></i></div><div class="mbar__val">${m.score}</div></div>`;
    det.innerHTML = `
      <div class="md-head"><div><h3>${u.full || u.name}</h3><span class="kxi-badge ${u.lvl.cls}">${u.lvl.dot} ${u.lvl.label}</span></div><div class="md-score" style="color:${kxiColor(u.score)}">${u.score}<span>/100</span></div></div>
      <div class="md-stats md-stats--4">
        <div><span class="k">Aholi (rasmiy)</span><span class="v">${fmtN(u.aholi)}</span></div>
        <div><span class="k">Foydalanuvchi</span><span class="v">${fmtN(u.users)}</span></div>
        <div><span class="k">Qamrov</span><span class="v" style="color:${kxiColor(Math.min(100, u.cov * 6))}">${cov}%</span></div>
        <div><span class="k">Mahalla (rasmiy)</span><span class="v">${u.mahallas}</span></div>
      </div>
      <div class="md-cov"><div class="md-cov__lab">Har 100 fuqarodan <b>${Math.round(u.cov)}</b> nafari platformada</div><div class="md-cov__bar"><i style="width:${Math.min(100, u.cov * 5)}%"></i></div></div>
      <div class="md-sub">🏆 Yetakchi mahallalar (top 5 / ${u.mahallas})</div>
      <div class="md-mhz">${top.map(mbar).join("")}</div>
      <div class="md-sub md-sub--low">⚠️ E'tibor talab qiladi (oxirgi 3)</div>
      <div class="md-mhz">${low.map(mbar).join("")}</div>
      <button class="btn btn--gold btn--block" id="mdOpenDist" style="margin-top:14px">Tuman xaritasini ochish →</button>`;
    const ob = $("#mdOpenDist");
    if (ob) ob.addEventListener("click", () => { mapDrill = u.ref; renderMap(); });
  }

  /* =========================================================
     KIBER ASSIST (AI chat — simulyatsiya)
     ========================================================= */
  const ASSIST_CHIPS = ["Investitsiyaga chaqirishyapti", "Telegramga kod keldi", "Havola yuborishdi", "Salom, tanishamizmi?"];

  // Kiber Himoyachi — xavfli mavzu qoidalari (suhbatda avtomatik aniqlanadi)
  const RISK_RULES = [
    { k:["investitsiya", "investi", "sarmoya", "trading", "treyding", "kripto", "bitcoin", "forex", "tez foyda", "foyda kafolat", "daromad kafolat"], cat:"Investitsiya / tez daromad", ico:ICON.coin,
      warn:"“Kafolatlangan yuqori foyda” va’dasi — firibgarlikning eng keng tarqalgan belgisi.",
      tip:"Pul tikishdan oldin tashkilot litsenziyasini tekshiring. “Tezda ikki barobar” degan narsaga ishonmang." },
    { k:["pul ishla", "pul topish", "oson pul", "uyda o'tirib", "online ish", "ish bor", "daromad top", "qo'shimcha daromad"], cat:"Oson pul / ish taklifi", ico:ICON.briefcase,
      warn:"Oldindan to‘lov yoki karta ma’lumotini so‘raydigan “oson pul” takliflari ko‘pincha firibgarlik.",
      tip:"Ishga kirish uchun hech qachon pul o‘tkazmang va karta ma’lumotini bermang." },
    { k:["bank", "hisob raqam", "balans", "kredit ol", "bankdan"], cat:"Bank", ico:ICON.coin,
      warn:"Bank hech qachon SMS yoki qo‘ng‘iroqda parol, PIN yoki kod so‘ramaydi.",
      tip:"Bank ilovasiga faqat rasmiy ilova yoki rasmiy sayt orqali kiring." },
    { k:["telegram", "tg akkaunt", "telega", "telegramda"], cat:"Telegram", ico:ICON.social,
      warn:"“Akkaunt bloklandi / tasdiqlang” xabarlari — Telegram akkauntini o‘g‘irlash urinishi.",
      tip:"Kelgan kodni hech kimga bermang. Sozlamalar → Maxfiylik → 2 bosqichli tasdiqni yoqing." },
    { k:["instagram", "insta ", "instada", "profil buzil", "instagramda"], cat:"Instagram", ico:ICON.social,
      warn:"“Profilingiz buzildi / mualliflik huquqi” xabarlari — fishing (parolni o‘g‘irlash).",
      tip:"Havola orqali parol kiritmang, faqat rasmiy ilovadan kiring." },
    { k:["havola", "link", "http", "bosing", "kirib ko'r", "saytga o't"], cat:"Havola / link", ico:ICON.link,
      warn:"Notanish havola zararli sayt yoki fishing sahifasi bo‘lishi mumkin.",
      tip:"Bosishdan oldin manzilni diqqat bilan tekshiring. Shubhali bo‘lsa — bosmang." },
    { k:["qr", "qr-kod", "qr kod", "skaner qil"], cat:"QR-kod", ico:ICON.link,
      warn:"Soxta QR-kod to‘lovni firibgar hisobiga yo‘naltirishi mumkin.",
      tip:"QR skanerlagach, ochilgan manzil va to‘lov oluvchini tekshiring." },
    { k:["otp", "bir martalik", "sms kod", "tasdiqlash kod", "kod keldi", "kodni yubor"], cat:"OTP / tasdiq kodi", ico:ICON.sms,
      warn:"Bir martalik kod (OTP) — kalitingiz. Uni bilgan kishi hisobingizga kiradi.",
      tip:"Hech kim — hatto bank ham — OTP kodini so‘rashga haqli emas." },
    { k:["karta raqam", "kartangiz", "cvv", "plastik", "karta orqa", "karta ma'lumot"], cat:"Karta ma’lumotlari", ico:ICON.coin,
      warn:"Karta raqami + amal muddati + CVV birga bo‘lsa, pulni yechishga yetadi.",
      tip:"CVV (orqadagi 3 raqam) va SMS-kodni hech kimga aytmang." },
    { k:["sovg'a", "sovga", "yutuq", "yutding", "mukofot", "prize", "sovrin"], cat:"Sovg‘a / yutuq", ico:ICON.gift,
      warn:"Kutilmagan “sovg‘a/yutuq” — eng ko‘p uchraydigan aldov turlaridan biri.",
      tip:"Yutuqni olish uchun oldindan to‘lov yoki karta so‘rasa — bu firibgar." },
    { k:["lotereya", "loto", "tiraj"], cat:"Lotereya", ico:ICON.gift,
      warn:"Siz qatnashmagan lotereyada “yutish” mumkin emas.",
      tip:"Hech qanday to‘lov qilmang va shaxsiy ma’lumot bermang." }
  ];
  function detectRisks(text) {
    const t = (text || "").toLowerCase();
    const found = [], seen = new Set();
    for (const r of RISK_RULES) if (!seen.has(r.cat) && r.k.some(k => t.includes(k))) { seen.add(r.cat); found.push(r); }
    // umumiy URL — agar havola qoidasi hali qo'shilmagan bo'lsa
    if (!seen.has("Havola / link") && /((https?:\/\/)?[a-z0-9-]+\.[a-z]{2,}\/?)/i.test(text || "") && /\.(xyz|top|club|online|site|info|ru|tk|cn|click|link|bonus|uz|com)/i.test(text || ""))
      found.push(RISK_RULES.find(r => r.cat === "Havola / link"));
    return found.slice(0, 3);
  }
  function chatReply(text) {
    const t = (text || "").toLowerCase();
    const has = (...a) => a.some(k => t.includes(k));
    if (has("salom", "assalom", "hayrli", "hello", "tanishamiz")) return "Assalomu alaykum! Men — <b>AI Hamroh</b>. Istalgan mavzuda suhbatlashaman va shu bilan birga sizni kiber firibgarlikdan himoya qilaman. Nima haqida gaplashamiz?";
    if (has("rahmat", "tashakkur", "raxmat")) return "Arzimaydi! Yana savolingiz bo‘lsa yoki shubhali biror narsa uchrasa — bemalol yozing.";
    if (has("qandaysan", "qalaysan", "yaxshimisan", "ishlaring")) return "Rahmat, men doim shayman! Suhbatlashamizmi yoki biror xabarni tekshirib beraymi?";
    if (has("kim san", "kimsan", "nima qila ol", "nima qilasan", "yordam ber", "imkoniyating")) return "Men — <b>AI Hamroh</b>: kundalik suhbatdosh va <b>Kiber Himoyachi</b>. Har qanday mavzuda gaplashaman va savollarga javob beraman. Agar suhbatda pul, bank, havola, kod yoki sovg‘a kabi xavfli mavzu sezsam — avtomatik ogohlantiraman va maslahat beraman.";
    if (has("ob-havo", "weather", "havo qanday")) return "Ob-havoni real vaqtda ko‘ra olmayman, lekin kuningiz zo‘r o‘tsin! Boshqa savol bo‘lsa — yordam beraman.";
    if (has("charchadim", "zerikdim", "yolg'iz", "kayfiyat")) return "Sizni tushunaman. Xohlasangiz gaplashamiz — biror mavzu tanlang yoki shunchaki fikringizni yozing, men shu yerdaman.";
    return "Tushunarli, bu mavzuda gaplashishga tayyorman — batafsilroq yozsangiz, yordam beraman. Agar biror xabar, havola yoki taklif shubhali tuyulsa, menga tashlang — tekshirib, xavfsiz yoki firibgarligini aytaman.";
  }
  function riskGuard(risks) {
    const items = risks.map(r => `
      <div class="guard-item">
        <div class="guard-item__cat">${r.ico}<span>${r.cat}</span></div>
        <p class="guard-item__warn">${r.warn}</p>
        <div class="guard-item__tip">${ICON.check}<span>${r.tip}</span></div>
      </div>`).join("");
    return `<div class="ai-guard">
      <div class="ai-guard__head">${ICON.shieldCheck}<span>Kiber Himoyachi — avtomatik ogohlantirish</span></div>
      ${items}
    </div>`;
  }

  function assistBubble(r) {
    const vmap = { danger: ["verdict--danger", ICON.alert], caution: ["verdict--caution", ICON.eye], safe: ["verdict--safe", ICON.check], info: ["verdict--info", ICON.spark] };
    const [cls, ico] = vmap[r.v] || vmap.info;
    const lines = r.lines.map(l => `<p>${l}</p>`).join("");
    const off = r.official ? `<div class="msg__official">${ICON.shieldCheck}<span>${r.official}</span></div>` : "";
    return `<div class="verdict ${cls}">${ico}<span>${r.title}</span></div>${lines}${off}`;
  }
  function assistAdd(role, html, isImg) {
    const body = $("#chatBody"); if (!body) return;
    const m = el("div", "msg msg--" + role);
    m.innerHTML = role === "ai"
      ? `<span class="msg__ava">${ICON.spark}</span><div class="msg__bubble">${html}</div>`
      : `<div class="msg__bubble${isImg ? " msg__bubble--img" : ""}">${html}</div>`;
    body.appendChild(m); body.scrollTop = body.scrollHeight;
  }
  function assistTyping() {
    const body = $("#chatBody");
    const m = el("div", "msg msg--ai"); m.id = "chatTyping";
    m.innerHTML = `<span class="msg__ava">${ICON.spark}</span><div class="msg__bubble msg__bubble--typing"><i></i><i></i><i></i></div>`;
    body.appendChild(m); body.scrollTop = body.scrollHeight;
  }
  function assistRespond(text, imageMode) {
    assistTyping();
    setTimeout(() => {
      const t = $("#chatTyping"); if (t) t.remove();
      if (imageMode) {
        assistAdd("ai", assistBubble({ v: "danger", title: "Rasmni tahlil qildim — fishing belgilari bor",
          lines: ["Bu xabar rasmiy emasga o'xshaydi. Fishing belgilari: shoshilishga undash (“hisobingiz bloklandi”), notanish qisqartirilgan havola va kod/parol so'rovi.", "Havolani <b>bosmang</b>, hech qanday kod yoki ma'lumot <b>bermang</b>.", "Click/Payme yoki bank ilovasini faqat rasmiy ilovadan oching."],
          official: "Shubha bo'lsa — havolani Tekshirgichdan o'tkazing yoki rasmiy qo'llab-quvvatlashga murojaat qiling." }));
        return;
      }
      // 1) suhbat javobi (istalgan mavzu)
      assistAdd("ai", `<p>${chatReply(text)}</p>`);
      // 2) Kiber Himoyachi — xavfli mavzu sezilsa avtomatik ogohlantirish
      const risks = detectRisks(text);
      if (risks.length) setTimeout(() => assistAdd("ai", riskGuard(risks)), 340);
    }, 700 + Math.random() * 460);
  }
  function assistSend(text) {
    text = (text || "").trim(); if (!text) return;
    assistAdd("me", text.replace(/[<>]/g, s => s === "<" ? "&lt;" : "&gt;"));
    const inp = $("#chatText"); if (inp) inp.value = "";
    assistRespond(text, false);
  }
  function assistImage(file) {
    const reader = new FileReader();
    reader.onload = e => { assistAdd("me", `<img src="${e.target.result}" alt="rasm">`, true); assistRespond("", true); };
    reader.readAsDataURL(file);
  }
  function assistWelcome() {
    const body = $("#chatBody"); if (!body) return;
    body.innerHTML = "";
    assistAdd("ai", `<p><b>Assalomu alaykum! Men — AI Hamroh 🤝</b></p><p>Istalgan mavzuda suhbatlashaman. Shu bilan birga men — <b>Kiber Himoyachi</b>man: gaplashuvda pul, bank, havola, kod, sovg'a kabi xavfli mavzu sezsam, avtomatik ogohlantiraman va maslahat beraman.</p><p>Yozing yoki shubhali xabar rasmini yuklang.</p>`);
  }
  function renderAssist() {
    const set = (id, ico) => { const n = $(id); if (n) n.innerHTML = ico; };
    set("#chatAva", ICON.spark); set("#chatImg", ICON.image); set("#chatSend", ICON.send);
    set("#assistCtaIco", ICON.spark); set("#assistCtaGo", ICON.caret);
    const sg = $("#chatSuggest");
    if (sg) { sg.innerHTML = ASSIST_CHIPS.map(c => `<button class="chat-chip" data-chip>${c}</button>`).join("");
      sg.querySelectorAll("[data-chip]").forEach(b => b.addEventListener("click", () => assistSend(b.textContent))); }
    assistWelcome();
    if (!renderAssist._wired) {
      renderAssist._wired = true;
      $("#chatSend") && $("#chatSend").addEventListener("click", () => assistSend($("#chatText").value));
      $("#chatText") && $("#chatText").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); assistSend($("#chatText").value); } });
      $("#chatImg") && $("#chatImg").addEventListener("click", () => $("#chatFile").click());
      $("#chatFile") && $("#chatFile").addEventListener("change", e => { if (e.target.files[0]) assistImage(e.target.files[0]); e.target.value = ""; });
      $("#chatReset") && $("#chatReset").addEventListener("click", assistWelcome);
    }
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    bindNav();
    renderDashFeed();
    renderFeedFilters();
    renderFullFeed();
    renderCheckExamples();
    $("#checkRun").addEventListener("click", runChecker);
    renderKxi();
    renderMap();
    renderAssist();
    renderHelp();
    setupReg();
    renderLegal();
    // foydalanuvchi paneli (odat yondashuvi)
    renderDashHero();
    renderSecLevel();
    renderDayTip();
    renderLifehacks();
    renderCertGoal();
    renderCourseRec();
    renderCert();
    renderReels("#reelsFull", false);
    setupReelModal();
    renderSpotlight();
    renderPrivileges();
    renderCondStatic();
    renderCondTracker();
    renderAdmin();
    renderPlatformAnalytics();
    updateAppealsBadge();
    renderMahalla();
    setupPermitModal();
    setupLogin();
    bindRoleSwitch();
    applyRole("user");           // boshlang'ich — oddiy fuqaro; imtiyozli rollar login talab qiladi
    applyUserChip();
    showRegSaved();
    updateQuizLock();
    animateDash(); dashAnimated = true;
    startLive();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
