window.SM_CONFIG={imageBase:'smimages/',imageExtensions:['webp','png','jpg','jpeg'],logo:'smimages/logo.svg',formBookingUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeVzuS1ifXUKh8f2-UYChsx437u9VIwvZ7YnH1cx9hwiAvC7g/viewform?usp=pp_url&entry.1494247680=Vorrei%20prenotare%20una%20valutazione%20iniziale%20e%20una%20stima%20del%20costo%20dal%2029%20ottobre%202026.%20Data%20e%20orario%20da%20concordare.%20La%20mia%20idea%3A%20',calendarUrl:'https://calendar.app.google/FyBGswLg36JMfPw3A',whatsappNumber:'393204178026',pricePerSqm:80,minimumBillableSqm:1,analytics:{gtm:'GTM-TJSWCMD3',ga4:'G-4NVPNZHY9S',tiktok:'D9UU2MJC77UE58FDAJQG'},videos:{video1:'',video2:'',video3:'',video4:''}};
(function(){
  var link=document.createElement('link');
  link.rel='stylesheet';
  link.href='theme-11a.css?v=3';
  document.head.appendChild(link);
  var dots=document.createElement('link');
  dots.rel='stylesheet';
  dots.href='dots.css?v=3';
  document.head.appendChild(dots);
  var themeMeta=document.querySelector('meta[name="theme-color"]');
  if(themeMeta) themeMeta.setAttribute('content','#E85C8A');
})();
(function(){
  function buildHeaderBrand(){
    var brand=document.querySelector('.site-header .brand');
    if(brand && !brand.querySelector('.brand-copy')){
      brand.classList.add('brand-lockup');
      var img=brand.querySelector('img');
      if(img){
        img.classList.add('brand-mark');
        img.alt='';
        img.setAttribute('aria-hidden','true');
      }
      var copy=document.createElement('span');
      copy.className='brand-copy';
      copy.innerHTML='<span class="brand-name">StampaMurale</span><span class="brand-area">PERUGIA&nbsp;&nbsp;•&nbsp;&nbsp;UMBRIA</span>';
      brand.appendChild(copy);
    }
    var heroLogo=document.querySelector('.hero-logo');
    if(heroLogo) heroLogo.remove();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',buildHeaderBrand);
  else buildHeaderBrand();
})();