window.SM_CONFIG={imageBase:'smimages/',imageExtensions:['webp','png','jpg','jpeg'],logo:'smimages/logo.svg',formBookingUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeVzuS1ifXUKh8f2-UYChsx437u9VIwvZ7YnH1cx9hwiAvC7g/viewform?usp=pp_url&entry.1494247680=Vorrei%20prenotare%20una%20valutazione%20iniziale%20e%20una%20stima%20del%20costo%20dal%2029%20ottobre%202026.%20Data%20e%20orario%20da%20concordare.%20La%20mia%20idea%3A%20',calendarUrl:'https://calendar.app.google/FyBGswLg36JMfPw3A',whatsappNumber:'393204178026',pricePerSqm:80,minimumBillableSqm:1,analytics:{gtm:'GTM-TJSWCMD3',ga4:'G-4NVPNZHY9S',tiktok:'D9UU2MJC77UE58FDAJQG'},videos:{video1:'',video2:'',video3:'',video4:''}};
(function(){
  var link=document.createElement('link');
  link.rel='stylesheet';
  link.href='theme-11a.css?v=4';
  document.head.appendChild(link);
  var dots=document.createElement('link');
  dots.rel='stylesheet';
  dots.href='dots.css?v=3';
  document.head.appendChild(dots);
  var themeMeta=document.querySelector('meta[name="theme-color"]');
  if(themeMeta) themeMeta.setAttribute('content','#E85C8A');
})();
(function(){
  function enhancePage(){
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

    var banner=document.getElementById('cookieBanner');
    if(banner && !banner.querySelector('.cookie-banner-close')){
      banner.classList.add('cookie-banner-enhanced');
      var copyBox=banner.firstElementChild;
      if(copyBox){
        copyBox.classList.add('cookie-banner-copy');
        var p=copyBox.querySelector('p');
        if(p){
          p.innerHTML='Usiamo strumenti necessari al funzionamento del sito. Analytics e strumenti marketing, come TikTok Pixel, vengono attivati solo con il tuo consenso. <a href="privacy.html">Privacy Policy</a> · <a href="cookie.html">Cookie Policy</a>.';
        }
      }
      var close=document.createElement('button');
      close.type='button';
      close.className='cookie-banner-close';
      close.setAttribute('aria-label','Chiudi e continua senza cookie opzionali');
      close.setAttribute('title','Chiudi e continua senza cookie opzionali');
      close.textContent='×';
      close.addEventListener('click',function(){
        var reject=document.getElementById('rejectCookies');
        if(reject) reject.click();
      });
      banner.appendChild(close);
    }

    var marketingInput=document.getElementById('marketingConsent');
    var marketingRow=marketingInput ? marketingInput.closest('.cookie-row') : null;
    var marketingText=marketingRow ? marketingRow.querySelector('p') : null;
    if(marketingText){
      marketingText.textContent='TikTok Pixel. Google Tag Manager è il contenitore usato per caricare i tag autorizzati e non rappresenta una finalità autonoma.';
    }

    /* Specifiche tecniche: formulazioni prudenti e da confermare caso per caso */
    var surfaceCopy=document.querySelector('#superfici .surface-copy');
    if(surfaceCopy){
      surfaceCopy.textContent='La compatibilità dipende dalla superficie, dalla finitura, dalla planarità e dall’accessibilità. Prima di ogni eventuale stampa il supporto viene valutato. La possibilità di pulizia e le modalità compatibili dipendono dal materiale, dalla finitura e dalle condizioni d’uso e devono essere verificate caso per caso.';
    }
    var specs=document.querySelectorAll('#superfici .spec-grid article p');
    if(specs[0]) specs[0].innerHTML='Altezza di stampa: <strong>fino a circa 4 m</strong>, in base a configurazione, accessibilità e condizioni operative.';
    if(specs[1]) specs[1].innerHTML='Larghezza di stampa: <strong>estendibile su più passaggi</strong>; la dimensione effettiva va verificata in base alla parete e alla grafica.';
    if(specs[2]) specs[2].innerHTML='Velocità operativa: <strong>circa 1,5 m²/h come riferimento indicativo</strong>; può variare in base a qualità, grafica, supporto e impostazioni.';

    document.querySelectorAll('#faq details').forEach(function(item){
      var summary=item.querySelector('summary');
      var answer=item.querySelector('p');
      if(!summary || !answer) return;
      if(summary.textContent.trim()==='La stampa è lavabile?'){
        answer.textContent='La possibilità di pulizia dipende dal supporto, dalla finitura e dalle condizioni d’uso. Le modalità compatibili vengono valutate caso per caso prima di indicare una procedura di pulizia.';
      }
      if(summary.textContent.trim()==='Quanto dura una stampa UV?'){
        answer.textContent='Non esiste una durata unica valida per ogni situazione. In condizioni idonee la resa può mantenersi per anni, ma dipende da supporto, esposizione, usura e condizioni ambientali. La durata attesa viene quindi valutata caso per caso.';
      }
    });

    var durationItem=document.querySelector('.comparison-section .number-list li:nth-child(4)');
    if(durationItem){
      durationItem.innerHTML='<strong>Durata.</strong> Non è un valore standard: dipende da supporto, esposizione, usura e condizioni d’uso e va valutata in relazione al progetto specifico.';
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',enhancePage);
  else enhancePage();
})();