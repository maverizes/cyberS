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
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-3.5h4V21" stroke-linecap="round"/></svg>'
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
    { cat:"sms",  sev:"high", title:"Soxta “Click” SMS: hisobingiz bloklandi", body:"“Click hisobingiz bloklandi, qayta tiklash uchun havolaga kiring” — havola rasmiy clik.uz emas. Bosmang.", region:"Chilonzor", time:"5 daqiqa oldin", n:140 },
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

  const JAMOA = [
    { who:"Dilnoza A.", role:"vol", color:"var(--gold)", meta:"Chilonzor · 12 daqiqa oldin",
      body:"Diqqat: bugun “Click hisobingiz bloklandi” SMS’i ko'paydi. Havola clik-uz.xyz — rasmiy emas. Hech kim bosmasin!" },
    { who:"Foydalanuvchi", role:null, color:"var(--blue)", meta:"Yunusobod · 40 daqiqa oldin",
      body:"Menga shunaqa havola keldi, bossam bo'ladimi? Mana:", blocked:"havola xavfsizlik uchun bloklandi · click-bonus.top/win" },
    { who:"Sardor K.", role:"mod", color:"var(--teal)", meta:"Moderator · 35 daqiqa oldin",
      body:"Yo'q, bosmang. Bu fishing havola. Quyida tasdiqlangan javobni qoldiraman.",
      verified:"Tasdiqlangan javob: Bunday SMS’dagi havolalarni ochmang. Click/Payme’ni faqat rasmiy ilovadan oching. Shubha bo'lsa — Tekshirgichdan o'tkazing." },
    { who:"Akmal R.", role:"vol", color:"var(--purple)", meta:"Sergeli · 1 soat oldin",
      body:"Keksa ota-onalaringizga eslatib qo'ying: bank xodimi SMS-kod so'ramaydi. Qo'ng'iroqda kod so'rashsa — bu firibgar." },
    { who:"Nigora T.", role:null, color:"var(--red)", meta:"Olmazor · 2 soat oldin",
      body:"Rahmat, shu guruh tufayli onam aldanmay qoldi. “Avtomobil yutdingiz” qo'ng'irog'ini darhol tanidi." }
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
    { ico:ICON.spark, cls:"i-purple",t:"Viktorina", p:"Firibgarni tanish o'yini", view:"quiz" },
    { ico:ICON.shieldCheck, cls:"i-blue", t:"Firibgarliklar bazasi", p:"O'zbekistonga xos sxemalar", view:"base" },
    { ico:ICON.check, cls:"i-teal",  t:"Yordam", p:"Qadama-qadam yo'riqnoma", view:"help" },
    { ico:ICON.social,cls:"i-purple",t:"Jamoa (yopiq)", p:"Moderatsiyali muhokama", view:"jamoa" },
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
    "Toshkent viloyati": ["Angren","Bekobod","Bo'ka","Chinoz","Qibray","Ohangaron","Oqqo'rg'on","Parkent","Piskent","Yangiyo'l","Zangiota","Chirchiq"],
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
    { ico:ICON.spark, cls:"i-purple", a:"Viktorinani yakunlash", p:50 },
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
    { id:"commission", icon:ICON.cert, title:"Komissiya yakuniy tasdig'i", who:"IIB komissiyasi",
      req:"Barcha bosqichlar muvaffaqiyatli o'tilsa, Ichki Ishlar Boshqarmasi komissiyasi sertifikat va sovg'ani rasmiy tasdiqlaydi.",
      asker:"", meta:null, q:[] }
  ];
  const GRACE_DAYS = 14;

  /* =========================================================
     NAVIGATION
     ========================================================= */
  const VIEW_TITLES = {
    dash:"Boshqaruv paneli", feed:"Tahdidlar lentasi", check:"Tekshirgich", quiz:"Viktorina",
    base:"Firibgarliklar bazasi", jamoa:"Jamoa", help:"Yordam", reg:"Ro'yxatdan o'tish", about:"Loyiha haqida",
    rating:"Xonadonlar reytingi", video:"So'nggi videolar", priv:"Imtiyozlar", privilege:"Imtiyozlar", condition:"Imtiyoz sharti"
  };
  let dashAnimated = false, quizBuilt = false;

  function showView(v) {
    $$(".view").forEach(s => s.classList.toggle("is-active", s.id === "view-" + v));
    $$(".nav-item").forEach(b => b.classList.toggle("is-active", b.dataset.view === v));
    document.title = VIEW_TITLES[v] + " · KiberOgoh UZ";
    $("#main").scrollTo ? window.scrollTo({ top: 0, behavior: "smooth" }) : window.scrollTo(0, 0);
    closeRail();
    if (v === "dash" && !dashAnimated) { animateDash(); dashAnimated = true; }
    if (v === "quiz" && !quizBuilt) { startQuiz(); quizBuilt = true; }
  }
  function bindNav() {
    $$("[data-view]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); showView(b.dataset.view); }));
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
    // count-up
    $$(".stat__num").forEach(n => {
      const target = +n.dataset.target, suf = n.dataset.suffix; let cur = 0;
      const steps = 38, inc = target / steps; let i = 0;
      const fmt = x => (x >= 1000 ? Math.round(x).toLocaleString("ru-RU").replace(/,/g, " ") : Math.round(x));
      const tick = () => { i++; cur = Math.min(target, cur + inc); n.textContent = fmt(cur) + suf; if (i < steps) requestAnimationFrame(tick); else n.textContent = fmt(target) + suf; };
      requestAnimationFrame(tick);
    });
    // shield ring
    const C = 2 * Math.PI * 52, pct = 0.86;
    const ring = $("#shieldProg");
    ring.style.strokeDasharray = C; ring.style.strokeDashoffset = C;
    setTimeout(() => { ring.style.strokeDashoffset = C * (1 - pct); }, 150);
    let p = 0; const pe = $("#shieldPct");
    const pt = () => { p = Math.min(86, p + 2); pe.textContent = p + "%"; if (p < 86) requestAnimationFrame(pt); };
    setTimeout(() => requestAnimationFrame(pt), 150);
    $("#mActive").textContent = "312"; $("#mBlocked").textContent = "5 240";
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
    const f = $("#dashFeed"); f.innerHTML = "";
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
     VIKTORINA (quiz)
     ========================================================= */
  let qi = 0, qScore = 0;
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
    $("#quizWrap").innerHTML = `
      <div class="card quiz-result">
        <div class="medal">${ICON.medal}</div>
        <h2>${qScore} / ${QUIZ.length} to'g'ri</h2>
        <div class="lvl">Darajangiz: ${lvl}</div>
        <p>${pct >= 70 ? "Ajoyib! Siz firibgarlik belgilarini yaxshi tanidingiz." : "Yaxshi boshlanish. Firibgarliklar bazasini ko'rib, yana urinib ko'ring."}</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn--gold" id="qRestart">Qayta o'ynash</button>
          <button class="btn btn--ghost" data-view="base">Firibgarliklar bazasi</button>
        </div>
      </div>`;
    $("#qRestart").addEventListener("click", startQuiz);
    $("#quizWrap").querySelector('[data-view]').addEventListener("click", e => { e.preventDefault(); showView("base"); });
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
     JAMOA (community)
     ========================================================= */
  function renderJamoa() {
    const wrap = $("#jamoaFeed"); wrap.innerHTML = "";
    JAMOA.forEach(p => {
      const initials = p.who.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase();
      const roleBadge = p.role === "vol" ? `<span class="role-badge role-badge--vol">Kiber faol</span>` :
                        p.role === "mod" ? `<span class="role-badge role-badge--mod">Moderator</span>` : "";
      const blocked = p.blocked ? `<div class="post__blocked">${ICON.ban} ${p.blocked}</div>` : "";
      const verified = p.verified ? `<div class="post__verified">${ICON.check}<span>${p.verified}</span></div>` : "";
      const c = el("div", "card post");
      c.innerHTML = `<div class="post__head">
          <div class="post__av" style="background:${p.color}">${initials}</div>
          <div><div class="post__who">${p.who} ${roleBadge}</div><div class="post__meta">${p.meta}</div></div>
        </div>
        <div class="post__body">${p.body}</div>${blocked}${verified}`;
      wrap.appendChild(c);
    });
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
      <button class="btn btn--ghost btn--block" data-view="rating" style="margin-top:14px">To'liq reytingni ko'rish</button>`;
    c.querySelector("[data-view]").addEventListener("click", e => { e.preventDefault(); showView("rating"); });
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
    c.innerHTML = `
      <div class="card spotlight">
        <div class="spotlight__glow"></div>
        <div class="spotlight__main">
          ${SEAL}
          <div class="spotlight__body">
            <span class="spotlight__live"><span class="pulse"></span>IIB e'tirofi · ${SPOTLIGHT.month} KiberHimoyachisi</span>
            <h2>${SPOTLIGHT.hh} xonadoni vakili ${SPOTLIGHT.rep} taqdirlandi</h2>
            <p>${SPOTLIGHT.issuer} tomonidan rasmiy guvohnoma topshirildi. Endi u <b>${SPOTLIGHT.benefit}</b> qilinadi.</p>
            <div class="spotlight__cta">
              <button class="btn btn--gold" data-view="privilege">Barcha imtiyozlar</button>
              <button class="btn btn--ghost-light" data-view="rating">Siz ham KiberHimoyachi bo'ling</button>
            </div>
          </div>
        </div>
        <div class="spotlight__cert">${certHtml(SPOTLIGHT.repFull, "Mahalla kiberxavfsizligiga qo'shgan hissasi uchun")}</div>
      </div>`;
    wireViewBtns(c);
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
    if (cta) cta.addEventListener("click", e => { e.preventDefault(); showView("rating"); });
  }

  /* =========================================================
     IMTIYOZ SHARTI (verification flow)
     ========================================================= */
  // status per condition: 'done' | 'active' | 'grace' | 'locked'
  let condState = ["done", "active", "locked", "locked"];

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
      <div class="flow-step"><span class="flow-step__n">3</span><div class="flow-step__b">Hammasidan o'tsa — <b>sertifikat va sovg'a</b> topshiriladi.</div></div>
      <div class="flow-step"><span class="flow-step__n">4</span><div class="flow-step__b">O'tmasa — <b>${GRACE_DAYS} kun</b> muddat, targ'ibot qayta qilinadi va tekshiruv takrorlanadi.</div></div>`;
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
          <p><b>${CANDIDATE.rep}</b> (${CANDIDATE.hh} xonadoni) o'zi, ota-onasi va qo'shnilari savol-javobidan muvaffaqiyatli o'tdi. Endi u sertifikat va sovg'ani olishga tayyor.</p>
          <div class="cond-success__chips">
            <span class="spot-chip spot-chip--gold">${ICON.cert}IIB guvohnomasi</span>
            <span class="spot-chip spot-chip--purple">${ICON.grad}Temurbek litseyiga grant</span>
          </div>
          <button class="btn btn--ghost" id="condReset">Jarayonni boshqatdan ko'rish</button>
        </div>`;
      $("#condReset").addEventListener("click", () => { condState = ["done","active","locked","locked"]; renderCandHeader(); renderCondTracker(); });
      renderCandHeader();
      return;
    }

    let steps = "";
    CONDITIONS.forEach((c, i) => {
      const st = condState[i];
      const meta = c.meta ? `<div class="cstep__meta">${c.meta.ico}${c.meta.t}</div>` : "";
      let detail = "";
      if (st === "active" || st === "grace") {
        const qa = c.q.length ? `
          <div class="cstep__qa">
            <div class="cstep__qa-label">${ICON.sms}${c.asker}</div>
            ${c.q.map((q, k) => `<div class="qa-item"><span class="q-n">${k + 1}.</span><span>${q}</span></div>`).join("")}
          </div>` : "";
        let actions = "";
        if (st === "active") {
          if (c.id === "commission") {
            actions = `<div class="cstep__actions"><button class="btn btn--ok" data-cond-pass="${i}">${ICON.check} Komissiya tasdig'ini berish</button></div>`;
          } else {
            actions = `<div class="cstep__actions">
              <button class="btn btn--ok" data-cond-pass="${i}">Savol-javobdan o'tdi</button>
              <button class="btn btn--fail" data-cond-fail="${i}">O'tmadi</button></div>`;
          }
        } else { // grace
          actions = `
            <div class="grace-note">
              <div class="t">${ICON.alert} ${GRACE_DAYS} kun muddat berildi</div>
              <p>Nomzod ushbu bosqichdan o'tolmadi. Targ'ibot ishlarini qaytadan amalga oshirib, tekshiruvni takrorlashi kerak.</p>
            </div>
            <div class="cstep__actions"><button class="btn btn--gold" data-cond-retry="${i}">Targ'ibotni qayta boshlash</button></div>`;
        }
        detail = qa + actions;
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
     INIT
     ========================================================= */
  function init() {
    bindNav();
    renderStats();
    renderDashFeed();
    renderPyramid("#dashPyramid");
    renderFeedFilters();
    renderFullFeed();
    renderCheckExamples();
    $("#checkRun").addEventListener("click", runChecker);
    renderScamFilters();
    renderScams();
    $("#scamSearch").addEventListener("input", e => { scamQuery = e.target.value; renderScams(); });
    renderJamoa();
    renderHelp();
    setupReg();
    renderAbout();
    // yangi bo'limlar
    renderHouseholdMini();
    renderDashVideos();
    renderRatingTop();
    renderPodium();
    renderRankList();
    renderEarn();
    renderLevels();
    renderEngage();
    renderReels("#reelsFull", false);
    setupReelModal();
    renderSpotlight();
    renderPrivileges();
    renderCondStatic();
    renderCondTracker();
    animateDash(); dashAnimated = true;
    startLive();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
