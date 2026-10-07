'use strict';
const copy = {
  en: {
    skip:'Skip to content',navHow:'How to play',navVideo:'Gameplay',navSupport:'Support',heroEyebrow:'A colorful airport puzzle',heroLine1:'Every bag.',heroLine2:'The right cart.',heroBody:'Tap a cart. Match the colors. Watch the luggage hop aboard and roll away. A little planning makes every departure feel good.',appleTop:'Download on the',playTop:'Get it on',free:'Free to play · Contains ads',watch:'Watch real gameplay',actual:'Captured from the game',howEyebrow:'One finger. A little foresight.',howTitle:'A good trip starts with a good match.',step1Title:'Choose your cart',step1Body:'Tap a front cart to send it to an open loading bay. Keep an eye on which colors are coming.',step2Title:'Let the colors meet',step2Body:'Matching bags ride the carousel and load automatically. Enjoy the hop, click and satisfying fit.',step3Title:'Fill it. Roll away.',step3Body:'Full carts depart and free up a bay. Plan your next move and clear the busy terminal.',videoEyebrow:'The carousel is calling',videoLine1:'Watch it flow.',videoLine2:'Make your move.',videoBody:'Curved belts, colorful luggage and carts that load and leave. This is real play, from the first match to a cleared terminal.',youtube:'Also watch on YouTube ↗',feature1Title:'A fresh route',feature1Body:'Changing carousel layouts keep your next trip interesting.',feature2Title:'Room to think',feature2Body:'Mixed colors, linked carts and limited bays add a clever twist.',feature3Title:'Your kind of play',feature3Body:'Daily trips, luggage styles and adjustable music, sound and motion.',galleryEyebrow:'Take a closer look',galleryTitle:'A terminal full of color.',gallery1:'Keep the carousel moving',gallery2:'A cart for every color',gallery3:'Leave room for your next move',gallery4:'Your next colorful trip',gallery5:'Enjoy every happy finish',supportTitle:'Need a hand with your luggage?',supportBody:'For game help, feedback or a privacy question, get in touch.',offline:'The core puzzle works offline. Ads need an internet connection.',privacy:'Privacy policy ↗',heroAlt:'Colorful suitcases riding the carousel toward matching luggage carts',gallery1Alt:'A winding luggage carousel',gallery2Alt:'Different luggage cart types at the loading bays',gallery3Alt:'A puzzle with limited luggage loading bays',gallery4Alt:'The game’s colorful airport home screen',gallery5Alt:'A completed puzzle celebration',prev:'Previous screenshot',next:'Next screenshot',galleryLabel:'Game screenshots',videoLabel:'Luggage Jam actual gameplay',description:'Match colorful luggage, fill the carts and keep the airport carousel moving. Play Luggage Jam: Color Sort on iPhone, iPad and Android.'
  },
  tr: {
    skip:'İçeriğe geç',navHow:'Nasıl oynanır',navVideo:'Oynanış',navSupport:'Destek',heroEyebrow:'Renkli bir havalimanı bulmacası',heroLine1:'Her valiz.',heroLine2:'Doğru araca.',heroBody:'Araca dokun. Renkleri eşleştir. Valizler yüklensin, araçlar yola çıksın. Küçük bir plan, her hareketi keyifli hale getirir.',appleTop:'App Store’dan',playTop:'Google Play’den',free:'Ücretsiz oynanır · Reklam içerir',watch:'Gerçek oynanışı izle',actual:'Doğrudan oyundan kaydedildi',howEyebrow:'Tek parmak. Biraz plan.',howTitle:'Güzel bir yolculuk, doğru eşleşmeyle başlar.',step1Title:'Aracını seç',step1Body:'Öndeki araca dokun ve boş bir yükleme alanına gönder. Bantta sıradaki renklere dikkat et.',step2Title:'Renkler buluşsun',step2Body:'Aynı renk valizler bantta ilerleyip otomatik yüklenir. Her küçük sıçramanın ve yerine oturan valizin keyfini çıkar.',step3Title:'Doldur. Yola çıkar.',step3Body:'Dolan araç gider, yeni bir yer açılır. Sıradaki hamleni planla ve kalabalık terminali rahatlat.',videoEyebrow:'Bant seni bekliyor',videoLine1:'Akışı izle.',videoLine2:'Hamleni yap.',videoBody:'Kıvrımlı bantlar, renkli valizler ve dolup giden araçlar. İlk eşleşmeden boşalan terminale kadar burada gördüğün her şey gerçek oynanış.',youtube:'YouTube’da da izle ↗',feature1Title:'Yeni bir rota',feature1Body:'Değişen bant şekilleri her yolculuğa farklı bir tat katıyor.',feature2Title:'Biraz düşün',feature2Body:'Karışık renkler, bağlı araçlar ve sınırlı duraklar planını değiştiriyor.',feature3Title:'Sana göre oyun',feature3Body:'Günlük yolculuklar, valiz stilleri; müzik, ses ve hareket ayarları.',galleryEyebrow:'Yakından bak',galleryTitle:'Rengârenk bir terminal.',gallery1:'Bandı akıcı tut',gallery2:'Her renge bir araç',gallery3:'Sıradaki hamlene yer aç',gallery4:'Sıradaki renkli yolculuğun',gallery5:'Her bitişin keyfini çıkar',supportTitle:'Valizler için yardım mı lazım?',supportBody:'Oyun desteği, geri bildirim veya gizlilik soruların için bize ulaş.',offline:'Temel bulmacayı çevrimdışı oynayabilirsin. Reklamlar internet bağlantısı gerektirir.',privacy:'Gizlilik politikası ↗',heroAlt:'Bantta ilerleyip aynı renk bagaj araçlarına yüklenen valizler',gallery1Alt:'Kıvrımlı bir havalimanı bagaj bandı',gallery2Alt:'Yükleme alanlarında farklı bagaj araçları',gallery3Alt:'Sınırlı yükleme alanlarına sahip bir bulmaca',gallery4Alt:'Oyunun renkli havalimanı ana ekranı',gallery5Alt:'Tamamlanan bulmacanın kutlama ekranı',prev:'Önceki ekran görüntüsü',next:'Sonraki ekran görüntüsü',galleryLabel:'Oyunun ekran görüntüleri',videoLabel:'Luggage Jam gerçek oynanış videosu',description:'Valiz renklerini eşleştir, araçları doldur ve havalimanındaki bandı rahatlat. Luggage Jam: Color Sort’u iPhone, iPad ve Android’de oyna.'
  }
};
const videos = {en:'rU8fczWaknM',tr:'2VLLB8FmBXc'};
let currentLanguage;
function setLanguage(language, updateUrl = true) {
  if (!copy[language]) language = 'en';
  const text = copy[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {element.textContent = text[element.dataset.i18n];});
  document.querySelectorAll('[data-alt]').forEach(element => {element.alt = text[element.dataset.alt];});
  document.querySelectorAll('[data-lang]').forEach(button => {button.setAttribute('aria-pressed',String(button.dataset.lang === language));});
  document.querySelector('meta[name="description"]').content = text.description;
  document.title = language === 'tr' ? 'Luggage Jam: Color Sort — Resmî Oyun' : 'Luggage Jam: Color Sort — Official Game';
  document.getElementById('youtubeLink').href = 'https://www.youtube.com/watch?v=' + videos[language];
  document.getElementById('galleryPrev').setAttribute('aria-label',text.prev);
  document.getElementById('galleryNext').setAttribute('aria-label',text.next);
  document.getElementById('gallery').setAttribute('aria-label',text.galleryLabel);
  const video = document.getElementById('gameVideo');
  video.setAttribute('aria-label',text.videoLabel);
  video.poster = 'assets/gameplay-poster-' + language + '.webp';
  if (currentLanguage && currentLanguage !== language) {
    video.pause();
    document.getElementById('gameVideoSource').src = 'assets/video/gameplay-' + language + '.mp4';
    video.load();
  } else {
    document.getElementById('gameVideoSource').src = 'assets/video/gameplay-' + language + '.mp4';
    video.load();
  }
  currentLanguage = language;
  if (updateUrl) {
    const url = new URL(location.href);
    if (language === 'tr') url.searchParams.set('lang','tr'); else url.searchParams.delete('lang');
    history.replaceState(null,'',url);
  }
}
setLanguage(new URL(location.href).searchParams.get('lang') === 'tr' ? 'tr' : 'en',false);
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));
const gallery = document.getElementById('gallery');
function moveGallery(direction) {
  gallery.scrollBy({left:direction * (gallery.querySelector('figure').offsetWidth + 22),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
}
document.getElementById('galleryPrev').addEventListener('click',() => moveGallery(-1));
document.getElementById('galleryNext').addEventListener('click',() => moveGallery(1));
gallery.addEventListener('keydown',event => {if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault();moveGallery(event.key === 'ArrowRight' ? 1 : -1);}});
