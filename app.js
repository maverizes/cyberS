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

  const REGIONS = {
    "Toshkent shahri": ["Bektemir","Chilonzor","Mirobod","Mirzo Ulug'bek","Olmazor","Sergeli","Shayxontohur","Uchtepa","Yakkasaroy","Yashnobod","Yunusobod","Yangihayot"],
    "Toshkent viloyati": ["Nurafshon shahri","Angren shahri","Bekobod shahri","Olmaliq shahri","Ohangaron shahri","Chirchiq shahri","Yangiyo'l shahri","Bekobod tumani","Bo'ka tumani","Bo'stonliq tumani","Qibray tumani","Quyi Chirchiq tumani","Oqqo'rg'on tumani","Ohangaron tumani","Parkent tumani","Piskent tumani","Toshkent tumani","Zangiota tumani","O'rta Chirchiq tumani","Chinoz tumani","Yuqori Chirchiq tumani","Yangiyo'l tumani"],
    "Andijon": ["Andijon shahri","Asaka","Baliqchi","Izboskan","Marhamat","Oltinko'l","Paxtaobod","Shahrixon","Xo'jaobod"],
    "Farg'ona": ["Farg'ona shahri","Marg'ilon","Qo'qon","Quva","Rishton","Beshariq","Oltiariq","Furqat"],
    "Namangan": ["Namangan shahri","Chust","Pop","To'raqo'rg'on","Uchqo'rg'on","Kosonsoy","Mingbuloq"],
    "Samarqand": ["Samarqand shahri","Kattaqo'rg'on","Urgut","Bulung'ur","Jomboy","Ishtixon","Payariq"],
    "Buxoro": ["Buxoro shahri","Kogon","G'ijduvon","Vobkent","Romitan","Shofirkon","Olot"],
    "Xorazm": ["Urganch","Xiva","Hazorasp","Gurlan","Shovot","Yangiariq","Bog'ot"],
    "Qashqadaryo": ["Qarshi","Shahrisabz","Kitob","G'uzor","Koson","Muborak","Yakkabog'"],
    "Surxondaryo": ["Termiz","Denov","Sho'rchi","Sariosiyo","Boysun","Jarqo'rg'on","Qumqo'rg'on"],
    "Jizzax": ["Jizzax shahri","G'allaorol","Zomin","Forish","Do'stlik","Paxtakor"],
    "Sirdaryo": ["Guliston","Yangiyer","Sirdaryo","Boyovut","Sayxunobod","Mirzaobod"],
    "Navoiy": ["Navoiy shahri","Zarafshon","Karmana","Konimex","Nurota","Uchquduq"],
    "Qoraqalpog'iston": ["Nukus","Xo'jayli","Chimboy","To'rtko'l","Beruniy","Qo'ng'irot","Mo'ynoq"]
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
  const VIDEOS = [
    { id:1, cat:"Tahdid", c1:"#E25555", c2:"#7d1f1f", ico:ICON.sms, title:"Soxta “Click bloklandi” SMS'ni 10 soniyada tanish", dur:"0:45", views:"12.4K", likes:"1.2K", author:"KiberOgoh UZ",
      cap:"Rasmiy SMS hech qachon havola yubormaydi. Domenni tekshiring: click.uz to'g'ri, clik-uz.xyz soxta. Shubha bo'lsa — ilovani o'zingiz oching." },
    { id:2, cat:"Himoya", c1:"#3A86D8", c2:"#163f73", ico:ICON.shieldCheck, title:"Telegram akkauntni o'g'irlatmang: ikki bosqichli parol", dur:"1:02", views:"9.8K", likes:"940", author:"KiberOgoh UZ",
      cap:"Sozlamalar → Maxfiylik → Ikki bosqichli tasdiqlash. Parolingiz o'g'irlansa ham, akkauntga begona kira olmaydi." },
    { id:3, cat:"Aldov", c1:"#F0A92E", c2:"#9a6207", ico:ICON.phone, title:"Bank kodi aldovi: nega hech qachon kod aytmaslik kerak", dur:"0:38", views:"15.1K", likes:"1.6K", author:"KiberOgoh UZ",
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
    tuman:      { name:"Tuman mas'uli", scope:"Zangiota tumani" },
    raisi:      { name:"Yoshlar yetakchisi", scope:"Navbahor MFY" },
    user:       { name:"User", scope:"Faqat o'zingiz" }
  };
  const MY_TUMAN = "Zangiota tumani";
  const MY_MAHALLA = "Navbahor MFY";
  const MAHALLALAR = [
    { name:"Navbahor MFY", region:"Toshkent vil. · Zangiota", raisi:"Akmal Yusupov", users:142, active:96, avg:1180, own:true },
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
  const KXI_MAHALLALAR = [
    { name:"Navbahor MFY", sub:[96,92,95,90,93], own:true },
    { name:"Bunyodkor MFY", sub:[88,85,90,84,86] },
    { name:"Do'stlik MFY", sub:[84,80,85,78,82] },
    { name:"Mustaqillik MFY", sub:[75,70,72,74,73] },
    { name:"Guliston MFY", sub:[70,66,64,72,68] },
    { name:"Obod MFY", sub:[58,52,55,60,54] },
    { name:"Yangiobod MFY", sub:[44,40,38,45,42] },
    { name:"Birlik MFY", sub:[40,35,34,42,38] }
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

  const REGION_NAME = "Toshkent viloyati";
  // Toshkent viloyati: 7 shahar + 15 tuman (jami 22 hudud)
  const TUMANLAR = [
    { name:"Nurafshon", city:true, kxi:88, users:1340, mahallas:9 },
    { name:"Chirchiq", city:true, kxi:86, users:1450, mahallas:14 },
    { name:"Olmaliq", city:true, kxi:81, users:1280, mahallas:12 },
    { name:"Qibray", kxi:79, users:1120, mahallas:11 },
    { name:"Angren", city:true, kxi:78, users:1190, mahallas:13 },
    { name:"Bekobod", city:true, kxi:74, users:980, mahallas:10 },
    { name:"Yangiyo'l", city:true, kxi:72, users:860, mahallas:8 },
    { name:"Toshkent tumani", kxi:71, users:950, mahallas:10, label:"Toshkent t." },
    { name:"Ohangaron", city:true, kxi:69, users:720, mahallas:7 },
    { name:"Zangiota", kxi:68, users:1240, mahallas:8, own:true },
    { name:"Yangiyo'l tumani", kxi:66, users:740, mahallas:9, label:"Yangiyo'l t." },
    { name:"Quyi Chirchiq", kxi:64, users:690, mahallas:9 },
    { name:"Parkent", kxi:62, users:710, mahallas:8 },
    { name:"O'rta Chirchiq", kxi:60, users:660, mahallas:9 },
    { name:"Yuqori Chirchiq", kxi:57, users:620, mahallas:9 },
    { name:"Bo'stonliq", kxi:58, users:640, mahallas:9 },
    { name:"Piskent", kxi:55, users:580, mahallas:7 },
    { name:"Oqqo'rg'on", kxi:53, users:600, mahallas:8 },
    { name:"Bo'ka", kxi:51, users:540, mahallas:8 },
    { name:"Ohangaron tumani", kxi:49, users:520, mahallas:7, label:"Ohangaron t." },
    { name:"Chinoz", kxi:47, users:490, mahallas:7 },
    { name:"Bekobod tumani", kxi:44, users:470, mahallas:8, label:"Bekobod t." }
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
    if (t.own) return KXI_MAHALLALAR.map(m => ({ name: m.name, score: kxiScore(m) }));
    let s = 0; for (const ch of t.name) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
    const rand = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
    const off = s % MHZ_NAMES.length;   // har tuman boshqa nomlardan boshlanadi
    return Array.from({ length: t.mahallas }, (_, i) => ({ name: MHZ_NAMES[(off + i) % MHZ_NAMES.length] + " MFY", score: Math.max(22, Math.min(98, Math.round(t.kxi + (rand() * 2 - 1) * 17))) }));
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
  const RESTRICTED = { admin: ["superadmin"], mahalla: ["superadmin", "raisi"], kxi: ["superadmin", "tuman"], map: ["superadmin", "tuman"] };
  const canSeeView = v => !RESTRICTED[v] || RESTRICTED[v].includes(currentRole);

  function showView(v) {
    if (!canSeeView(v)) v = "dash"; // RBAC: ruxsat bo'lmasa, asosiy panelga qaytadi
    $$(".view").forEach(s => s.classList.toggle("is-active", s.id === "view-" + v));
    $$(".nav-item").forEach(b => b.classList.toggle("is-active", b.dataset.view === v));
    document.title = (VIEW_TITLES[v] || "KiberOgoh UZ") + " · KiberOgoh UZ";
    $("#main").scrollTo ? window.scrollTo({ top: 0, behavior: "smooth" }) : window.scrollTo(0, 0);
    closeRail();
    if (v === "dash" && !dashAnimated) { animateDash(); dashAnimated = true; }
    if (v === "quiz" && !quizBuilt) { startQuiz(); quizBuilt = true; }
  }
  function bindNav() {
    $$("[data-view]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); showView(b.dataset.view); }));
  }

  // RBAC: rolga qarab navigatsiyani va ko'rinishni boshqaradi
  function applyRole(role) {
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
    if (typeof renderMap === "function") renderMap();
  }
  function bindRoleSwitch() {
    $$("#roleSwitch button").forEach(b => b.addEventListener("click", () => applyRole(b.dataset.role)));
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
          <div class="ripple__body"><div class="ripple__t">Siz — Alisher (Abdullayevlar)</div>
            <div class="ripple__p">Shaxsiy ball: <b>${fmtN(prev)} → ${fmtN(userBall)}</b> <span class="ripple__delta">+${earned}</span></div></div>
        </div>
        <div class="ripple__link">${ICON.caret}<span>hissa qo'shadi</span></div>
        <div class="ripple__node ripple--mahalla">
          <span class="ripple__ico">${ICON.building}</span>
          <div class="ripple__body"><div class="ripple__t">Navbahor MFY</div>
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
    const v = $("#selViloyat"), t = $("#selTuman"), m = $("#selMahalla"), btn = $("#regSubmit");
    fillSelect(v, Object.keys(REGIONS), "Tanlang…");
    v.addEventListener("change", () => {
      if (v.value) { fillSelect(t, REGIONS[v.value], "Tumanni tanlang…"); t.disabled = false; }
      else { t.innerHTML = `<option value="">Avval viloyatni tanlang</option>`; t.disabled = true; }
      m.innerHTML = `<option value="">Avval tumanni tanlang</option>`; m.disabled = true; btn.disabled = true;
    });
    t.addEventListener("change", () => {
      if (t.value) {
        const pool = MFY_POOL.slice(0, 6 + (t.value.length % 4));
        fillSelect(m, pool, "Mahallani tanlang…"); m.disabled = false;
      } else { m.innerHTML = `<option value="">Avval tumanni tanlang</option>`; m.disabled = true; }
      btn.disabled = true;
    });
    m.addEventListener("change", () => { btn.disabled = !m.value; });
    btn.addEventListener("click", () => {
      $("#regFormBody").style.display = "none";
      $("#regSuccess").classList.add("show");
      $("#regWhere").textContent = `${v.value} → ${t.value} → ${m.value}`;
      $("#topRegion").textContent = v.value;
    });
    $("#regReset").addEventListener("click", () => {
      $("#regSuccess").classList.remove("show");
      $("#regFormBody").style.display = "";
      v.value = ""; t.innerHTML = `<option value="">Avval viloyatni tanlang</option>`; t.disabled = true;
      m.innerHTML = `<option value="">Avval tumanni tanlang</option>`; m.disabled = true; btn.disabled = true;
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
      <div class="reel__noise"></div>
      <span class="reel__cat">${v.cat}</span>
      <span class="reel__dur">${v.dur}</span>
      <span class="reel__icon">${v.ico}</span>
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
  function renderMap() {
    const wrap = $("#view-kxi"); if (!wrap || !$("#mapSvg")) return;
    const district = currentRole === "tuman"; // tuman mas'uli => faqat o'z mahallalari
    const own = TUMANLAR.find(t => t.own);
    const title = $("#mapTitle"), lead = $("#mapLead"), scope = $("#mapScope");

    // birliklar: superadmin => tumanlar; tuman => o'z mahallalari
    let units, unitLabel, areaName;
    if (district) {
      areaName = own.name + " tumani";
      unitLabel = "mahalla";
      units = tumanMahallas(own).map(m => ({ name: m.name, score: m.score }));
    } else {
      areaName = REGION_NAME;
      unitLabel = "tuman";
      units = TUMANLAR.map(t => ({ name: t.name, disp: tumDisp(t), full: tumFull(t), score: t.kxi, users: t.users, mahallas: t.mahallas, own: t.own, ref: t }));
    }
    units.forEach(u => u.lvl = kxiLevel(u.score));

    if (title) title.textContent = district ? `${MY_TUMAN} xaritasi` : `${REGION_NAME} — hududlar xaritasi`;
    if (lead) lead.textContent = district
      ? `Tumaningizdagi har bir mahallaning KiberXavfsizlik holati. Mahalla ustiga bosing — batafsil ko'ring.`
      : `Viloyatdagi har bir tuman va shaharning holati. Hudud ustiga bosing — ichidagi mahallalar statistikasi ochiladi.`;
    if (scope) scope.innerHTML = district
      ? `<div class="scope-banner__ico">${ICON.globe}</div><div><h3>Tuman mas'uli · ${MY_TUMAN}</h3><p>Faqat <b>o'z tumaningiz</b> mahallalari ko'rinadi. Boshqa hududlar yopiq.</p></div>`
      : `<div class="scope-banner__ico">${ICON.globe}</div><div><h3>Superadmin · ${REGION_NAME}</h3><p>Barcha <b>${units.length} hudud</b> (shahar va tuman) va ularning ichidagi mahallalari ko'rinadi.</p></div>`;
    scope.className = "scope-banner " + (district ? "scope-banner--tuman" : "scope-banner--admin");

    // summary kartalar
    const sum = $("#mapSummary");
    if (sum) {
      const avg = Math.round(units.reduce((s, u) => s + u.score, 0) / units.length);
      const totUsers = district ? own.users : TUMANLAR.reduce((s, t) => s + t.users, 0);
      const totMhz = district ? units.length : TUMANLAR.reduce((s, t) => s + t.mahallas, 0);
      const greenCnt = units.filter(u => u.lvl.key === "green").length;
      const third = district
        ? { num: greenCnt, lab: "Xavfsiz 🟢 mahalla", cls: "i-teal", ico: ICON.shieldCheck }
        : { num: fmtN(totMhz), lab: "Jami mahallalar", cls: "i-purple", ico: ICON.building };
      const cards = [
        { num: units.length, lab: district ? "Mahallalar" : "Hududlar", cls: "i-blue", ico: ICON.map },
        { num: avg, lab: "O'rtacha KXI", cls: "i-gold", ico: ICON.spark },
        third,
        { num: fmtN(totUsers), lab: "Foydalanuvchilar", cls: "i-teal", ico: ICON.users }
      ];
      sum.innerHTML = cards.map(c => `<div class="card stat"><div class="stat__ico ${c.cls}">${c.ico}</div><div class="stat__num">${c.num}</div><div class="stat__label">${c.lab}</div></div>`).join("");
    }

    // choropleth SVG — viloyat: real chegaralar (TV_GEO); tuman ichi: sxematik
    const svg = $("#mapSvg");
    const geoNorm = s => (s || "").replace(/[\u2018\u2019\u02bb\u02bc`]/g, "'").trim();
    if (svg && !district) {
      // === REAL TOSHKENT VILOYATI XARITASI ===
      const byName = {}; TV_GEO.forEach(g => byName[geoNorm(g.n)] = g);
      const drawn = [];
      units.forEach(u => { const g = byName[geoNorm(u.full)]; if (g) drawn.push({ u, g }); });
      drawn.sort((a, b) => b.g.a - a.g.a); // kattalar pastda => shahar orolchalari bosiladigan bo'ladi
      svg.setAttribute("viewBox", `0 0 ${TV_VIEW.w} ${TV_VIEW.h}`);
      svg.classList.add("mapsvg--geo");
      svg.innerHTML = drawn.map(({ u, g }, i) => {
        const fill = kxiColor(u.score);
        const dark = u.score >= 51;
        const nameFill = dark ? "#fff" : "#7a2030";
        const valFill = dark ? "rgba(255,255,255,.88)" : "rgba(122,32,48,.85)";
        let label = "";
        if (g.a >= 6000) {
          label = `<text x="${g.cx}" y="${g.cy - 5}" class="mcell__name" fill="${nameFill}">${u.disp || u.name}</text><text x="${g.cx}" y="${g.cy + 15}" class="mcell__val" fill="${valFill}">${u.score}</text>`;
        } else if (g.a >= 2500) {
          label = `<text x="${g.cx}" y="${g.cy - 3}" class="mcell__name mcell__name--sm" fill="${nameFill}">${u.disp || u.name}</text><text x="${g.cx}" y="${g.cy + 12}" class="mcell__val mcell__val--sm" fill="${valFill}">${u.score}</text>`;
        } else {
          label = `<circle cx="${g.cx}" cy="${g.cy}" r="5" class="mcell__mark"/>`;
        }
        const you = u.own ? `<text x="${g.cx}" y="${g.cy - 24}" class="mcell__you mcell__you--geo">SIZ</text>` : "";
        return `<g class="mcell${g.a < 2500 ? " mcell--tiny" : ""}" data-cell="${i}"><path d="${g.d}" fill="${fill}" fill-rule="evenodd" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>${label}${you}</g>`;
      }).join("");
      const tip = $("#mapTip");
      svg.querySelectorAll(".mcell").forEach(gEl => {
        const u = drawn[+gEl.dataset.cell].u;
        gEl.addEventListener("mousemove", e => {
          const stage = svg.closest(".map-stage").getBoundingClientRect();
          tip.style.left = (e.clientX - stage.left) + "px"; tip.style.top = (e.clientY - stage.top) + "px";
          tip.innerHTML = `<div class="mtip__t">${u.full || u.name}</div><div class="mtip__row"><span>KXI</span><b>${u.score}</b></div><div class="mtip__row"><span>Holat</span><b>${u.lvl.dot} ${u.lvl.label}</b></div>${u.users ? `<div class="mtip__row"><span>Foydalanuvchi</span><b>${fmtN(u.users)}</b></div>` : ""}${u.mahallas ? `<div class="mtip__row"><span>Mahalla</span><b>${u.mahallas}</b></div>` : ""}<div class="mtip__cta">Bosing — mahallalar statistikasi</div>`;
          tip.classList.add("is-on");
        });
        gEl.addEventListener("mouseleave", () => tip.classList.remove("is-on"));
        gEl.addEventListener("click", () => selectMapUnit(gEl, u, district));
      });
      renderMap._units = drawn.map(x => x.u);
    } else if (svg) {
      // === TUMAN ICHI (mahallalar) — sxematik ===
      svg.classList.remove("mapsvg--geo");
      const cols = units.length <= 4 ? units.length : units.length <= 6 ? 3 : units.length <= 12 ? 4 : units.length <= 20 ? 5 : 6;
      const W = 760, H = Math.ceil(units.length / cols) * 142;
      const cells = gridCells(units, cols, W, H, 41);
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.innerHTML = cells.map((c, i) => {
        const u = c.unit, fill = kxiColor(u.score);
        const labelDark = u.score >= 51;
        const nm = (u.disp || u.name).replace(" MFY", "");
        return `<g class="mcell" data-cell="${i}"><path d="${c.d}" fill="${fill}" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/><text x="${Math.round(c.cx)}" y="${Math.round(c.cy) - 4}" class="mcell__name" fill="${labelDark ? "#fff" : "#7a2030"}">${nm}</text><text x="${Math.round(c.cx)}" y="${Math.round(c.cy) + 13}" class="mcell__val" fill="${labelDark ? "rgba(255,255,255,.85)" : "rgba(122,32,48,.8)"}">${u.score}</text>${u.own ? `<text x="${Math.round(c.cx)}" y="${Math.round(c.cy) - 20}" class="mcell__you">SIZ</text>` : ""}</g>`;
      }).join("");
      const tip = $("#mapTip");
      svg.querySelectorAll(".mcell").forEach(g => {
        const u = cells[+g.dataset.cell].unit;
        g.addEventListener("mousemove", e => {
          const stage = svg.closest(".map-stage").getBoundingClientRect();
          tip.style.left = (e.clientX - stage.left) + "px"; tip.style.top = (e.clientY - stage.top) + "px";
          tip.innerHTML = `<div class="mtip__t">${u.name}</div><div class="mtip__row"><span>KXI</span><b>${u.score}</b></div><div class="mtip__row"><span>Holat</span><b>${u.lvl.dot} ${u.lvl.label}</b></div>`;
          tip.classList.add("is-on");
        });
        g.addEventListener("mouseleave", () => tip.classList.remove("is-on"));
        g.addEventListener("click", () => selectMapUnit(g, u, district));
      });
      renderMap._units = cells.map(c => c.unit);
    }
    function selectMapUnit(gEl, u, dist) {
      svg.querySelectorAll(".mcell").forEach(x => x.classList.remove("is-sel"));
      if (gEl) gEl.classList.add("is-sel");
      renderMapDetail(u, dist !== undefined ? dist : district);
      // reyting barida ham belgilash
      $$("#mapBars .mbar").forEach(b => b.classList.toggle("is-sel", b.dataset.bar === u.name));
    }
    renderMap._select = selectMapUnit;

    // donut (daraja taqsimoti)
    const counts = { green: 0, yellow: 0, red: 0 };
    units.forEach(u => counts[u.lvl.key]++);
    const tot = units.length;
    const gp = counts.green / tot * 100, yp = counts.yellow / tot * 100;
    const donut = $("#mapDonut");
    if (donut) {
      donut.innerHTML = `
        <div class="donut" style="background:conic-gradient(var(--teal) 0 ${gp}%, var(--gold) ${gp}% ${gp + yp}%, var(--red) ${gp + yp}% 100%)"><div class="donut__hole"><div class="donut__num">${tot}</div><div class="donut__lab">${district ? "mahalla" : "tuman"}</div></div></div>
        <div class="donut__legend">
          <div><span class="dleg" style="background:var(--teal)"></span>Xavfsiz 🟢 <b>${counts.green}</b></div>
          <div><span class="dleg" style="background:var(--gold)"></span>Ogohlantirish 🟡 <b>${counts.yellow}</b></div>
          <div><span class="dleg" style="background:var(--red)"></span>Yuqori xavf 🔴 <b>${counts.red}</b></div>
        </div>`;
    }

    // reyting diagrammasi (horizontal bars) — bosilsa xaritada tanlanadi
    const bars = $("#mapBars");
    if (bars) {
      const sorted = [...units].sort((a, b) => b.score - a.score);
      bars.innerHTML = sorted.map(u => `
        <div class="mbar mbar--click${u.own ? " is-you" : ""}" data-bar="${u.name}" title="Xaritada ko'rsatish">
          <div class="mbar__name">${u.own ? '<span class="kxi-you">SIZ</span> ' : ""}${(u.disp || u.name).replace(" MFY", "")}</div>
          <div class="mbar__track"><i style="width:${u.score}%;background:${kxiColor(u.score)}"></i></div>
          <div class="mbar__val">${u.score}</div>
        </div>`).join("");
      bars.querySelectorAll(".mbar").forEach(b => b.addEventListener("click", () => {
        const u = units.find(x => x.name === b.dataset.bar); if (!u) return;
        const cellEl = [...(svg ? svg.querySelectorAll(".mcell") : [])].find(g => {
          const arr = renderMap._units || []; return arr[+g.dataset.cell] === u;
        });
        if (renderMap._select) renderMap._select(cellEl, u, district);
        if (cellEl) cellEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }));
    }

    // detalни tozalash
    mapSel = null;
    const det = $("#mapDetail");
    if (det) det.innerHTML = `<div class="map-detail-empty">${ICON.map}<p>${district ? "Mahalla" : "Hudud"} ustiga bosing — batafsil statistika va ${district ? "ko'rsatkichlar" : "ichidagi mahallalar"} shu yerda chiqadi.</p></div>`;

    // hokimlik jadvali izohi (mahalla kesimi)
    const th = $("#kxiTableHint");
    if (th) th.textContent = district
      ? `${MY_TUMAN} mahallalari · qatorni bosib batafsil ko'ring`
      : `Mahalla kesimida namuna: ${MY_TUMAN} · qatorni bosib batafsil ko'ring`;
    const mh = $("#mapHint");
    if (mh) mh.textContent = district
      ? "sxematik ko'rinish · rang — KXI darajasi"
      : "real ma'muriy chegaralar · rang — KXI darajasi";
  }
  function renderMapDetail(u, district) {
    const det = $("#mapDetail"); if (!det) return;
    if (district) {
      det.innerHTML = `
        <div class="md-head"><div><h3>${u.name}</h3><span class="kxi-badge ${u.lvl.cls}">${u.lvl.dot} ${u.lvl.label}</span></div><div class="md-score" style="color:${kxiColor(u.score)}">${u.score}<span>/100</span></div></div>
        <div class="kxi-rec ${u.lvl.cls}" style="margin:14px 0 0">${ICON.alert}<span><b>Tavsiya:</b> ${KXI_REC[u.lvl.key]}</span></div>`;
      return;
    }
    // tuman => ichidagi mahallalar
    const mhz = tumanMahallas(u.ref).map(m => ({ ...m, lvl: kxiLevel(m.score) })).sort((a, b) => b.score - a.score);
    det.innerHTML = `
      <div class="md-head"><div><h3>${u.full || u.name}</h3><span class="kxi-badge ${u.lvl.cls}">${u.lvl.dot} ${u.lvl.label}</span></div><div class="md-score" style="color:${kxiColor(u.score)}">${u.score}<span>/100</span></div></div>
      <div class="md-stats">
        <div><span class="k">Foydalanuvchilar</span><span class="v">${fmtN(u.users)}</span></div>
        <div><span class="k">Mahallalar</span><span class="v">${u.mahallas}</span></div>
        <div><span class="k">O'rtacha KXI</span><span class="v">${u.score}</span></div>
      </div>
      <div class="md-sub">Ichidagi mahallalar (KXI bo'yicha)</div>
      <div class="md-mhz">${mhz.map(m => `<div class="mbar"><div class="mbar__name">${m.name.replace(" MFY", "")}</div><div class="mbar__track"><i style="width:${m.score}%;background:${kxiColor(m.score)}"></i></div><div class="mbar__val">${m.score}</div></div>`).join("")}</div>`;
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
    renderMahalla();
    setupPermitModal();
    bindRoleSwitch();
    applyRole("superadmin");
    animateDash(); dashAnimated = true;
    startLive();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
