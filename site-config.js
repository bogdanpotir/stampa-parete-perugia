window.SM_CONFIG={imageBase:'smimages/',imageExtensions:['webp','png','jpg','jpeg'],logo:'smimages/logo.svg',formBookingUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeVzuS1ifXUKh8f2-UYChsx437u9VIwvZ7YnH1cx9hwiAvC7g/viewform?usp=pp_url&entry.1494247680=Vorrei%20prenotare%20una%20valutazione%20iniziale%20e%20una%20stima%20del%20costo%20dal%2029%20ottobre%202026.%20Data%20e%20orario%20da%20concordare.%20La%20mia%20idea%3A%20',calendarUrl:'https://calendar.app.google/FyBGswLg36JMfPw3A',whatsappNumber:'393204178026',pricePerSqm:80,minimumBillableSqm:1,analytics:{gtm:'GTM-TJSWCMD3',ga4:'G-4NVPNZHY9S',tiktok:'D9UU2MJC77UE58FDAJQG'},videos:{video1:'',video2:'',video3:'',video4:''}};
(function(){
  var link=document.createElement('link');
  link.rel='stylesheet';
  link.href='theme-11a.css?v=5';
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

    /* Ordine sezioni: destinatari prima delle superfici */
    var audienceSection=document.querySelector('.audience-section');
    var surfaceSection=document.getElementById('superfici');
    if(audienceSection && surfaceSection && audienceSection.nextElementSibling!==surfaceSection){
      surfaceSection.parentNode.insertBefore(audienceSection,surfaceSection);
    }

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

    /* Punto 11: informativa breve prima dei collegamenti al Google Form */
    function addFormPrivacyNotice(container){
      if(!container || container.querySelector('.form-privacy-notice')) return;
      var notice=document.createElement('p');
      notice.className='form-privacy-notice';
      notice.style.cssText='margin:12px 0 0;font-size:13px;line-height:1.5;color:inherit;opacity:.88;';
      notice.innerHTML='Prima di inviare il modulo, leggi la <a href="privacy.html">Privacy Policy</a>. Invia solo i dati necessari alla valutazione. Evita di caricare foto che mostrino persone (in particolare minori), documenti, targhe, indirizzi leggibili o altri dati personali non necessari.';
      container.appendChild(notice);
    }
    addFormPrivacyNotice(document.querySelector('.price-side .price-actions')?.parentElement);
    addFormPrivacyNotice(document.querySelector('.booking-actions'));

    /* Punto 14: condizioni chiare della valutazione preliminare */
    var priceSide=document.querySelector('.price-side');
    if(priceSide && !priceSide.querySelector('.preliminary-conditions')){
      var priceIntro=priceSide.querySelector('.price-big + p');
      if(priceIntro){
        priceIntro.textContent='Stima indicativa della sola stampa, con minimo indicativo di €80. Il valore mostrato dal calcolatore non costituisce un preventivo definitivo né un’offerta commerciale. Eventuali trasferta, preparazione o trattamento della parete, adattamento della grafica e altre lavorazioni vengono valutati separatamente.';
      }
      var conditions=document.createElement('p');
      conditions.className='preliminary-conditions';
      conditions.style.cssText='margin:16px 0 0;font-size:13px;line-height:1.55;color:inherit;opacity:.9;';
      conditions.innerHTML='<strong>Fase attuale:</strong> il sito è utilizzato per studio di mercato e valutazioni preliminari. Non è possibile concludere acquisti o effettuare pagamenti tramite il sito. Le richieste sono gratuite e non vincolanti, non costituiscono ordine o contratto e non prevedono caparre o penali di cancellazione. L’eventuale rapporto commerciale sarà definito solo dopo l’avvio dell’attività, con conferma separata di prezzo, condizioni, fattibilità e data.';
      var actions=priceSide.querySelector('.price-actions');
      if(actions) actions.insertAdjacentElement('beforebegin',conditions);
      else priceSide.appendChild(conditions);
    }

    /* Punto 18: miglioramenti di accessibilità e uso da tastiera */
    var main=document.querySelector('main');
    if(main){
      if(!main.id) main.id='contenuto';
      if(!document.querySelector('.skip-link')){
        var skip=document.createElement('a');
        skip.className='skip-link';
        skip.href='#'+main.id;
        skip.textContent='Salta al contenuto';
        document.body.insertAdjacentElement('afterbegin',skip);
      }
    }

    var desktopNav=document.querySelector('.desktop-nav');
    if(desktopNav) desktopNav.setAttribute('aria-label','Navigazione principale');
    var mobileNav=document.getElementById('mobileNav');
    if(mobileNav) mobileNav.setAttribute('aria-label','Navigazione mobile');
    var menuButton=document.getElementById('menuButton');
    if(menuButton){
      menuButton.setAttribute('aria-controls','mobileNav');
      function updateMenuLabel(){
        menuButton.setAttribute('aria-label',menuButton.getAttribute('aria-expanded')==='true'?'Chiudi menu':'Apri menu');
      }
      updateMenuLabel();
      menuButton.addEventListener('click',function(){setTimeout(updateMenuLabel,0);});
      if(mobileNav) mobileNav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setTimeout(updateMenuLabel,0);});});
    }

    var galleryFilters=document.querySelectorAll('.gallery-filter');
    function updateFilterState(){
      galleryFilters.forEach(function(button){button.setAttribute('aria-pressed',button.classList.contains('active')?'true':'false');});
    }
    updateFilterState();
    galleryFilters.forEach(function(button){button.addEventListener('click',function(){setTimeout(updateFilterState,0);});});

    var calculatorResult=document.querySelector('.calculator-result');
    if(calculatorResult){
      calculatorResult.setAttribute('role','status');
      calculatorResult.setAttribute('aria-live','polite');
      calculatorResult.setAttribute('aria-atomic','true');
    }

    var lightbox=document.getElementById('imageLightbox');
    var lightboxClose=document.querySelector('.lightbox-close');
    var lightboxCaption=document.getElementById('lightboxCaption');
    if(lightbox){
      lightbox.setAttribute('role','dialog');
      lightbox.setAttribute('aria-modal','true');
      if(lightboxCaption){
        lightboxCaption.id=lightboxCaption.id||'lightboxCaption';
        lightbox.setAttribute('aria-labelledby',lightboxCaption.id);
      }
    }
    if(lightboxClose) lightboxClose.setAttribute('aria-label','Chiudi immagine ingrandita');

    if(banner){
      banner.setAttribute('role','region');
      banner.setAttribute('aria-label','Preferenze privacy e cookie');
    }

    var cookieModal=document.getElementById('cookieModal');
    var cookieClose=document.getElementById('closeCookieModal');
    var cookieTitle=cookieModal ? cookieModal.querySelector('h2') : null;
    if(cookieModal){
      cookieModal.setAttribute('role','dialog');
      cookieModal.setAttribute('aria-modal','true');
      if(cookieTitle){
        cookieTitle.id='cookieModalTitle';
        cookieModal.setAttribute('aria-labelledby','cookieModalTitle');
      }
    }
    if(cookieClose) cookieClose.setAttribute('aria-label','Chiudi preferenze cookie');

    var lastLightboxTrigger=null;
    var lastCookieTrigger=null;
    document.querySelectorAll('[data-gallery-item]').forEach(function(card){
      card.addEventListener('click',function(){
        lastLightboxTrigger=card;
        setTimeout(function(){if(lightbox && !lightbox.hasAttribute('hidden') && lightboxClose) lightboxClose.focus();},0);
      });
    });

    ['customizeCookies','openCookiePreferencesFooter'].forEach(function(id){
      var trigger=document.getElementById(id);
      if(trigger){
        trigger.addEventListener('click',function(){
          lastCookieTrigger=trigger;
          document.body.classList.add('no-scroll');
          setTimeout(function(){if(cookieModal && !cookieModal.hasAttribute('hidden') && cookieClose) cookieClose.focus();},0);
        });
      }
    });

    function restoreLightboxFocus(){
      if(lastLightboxTrigger && document.contains(lastLightboxTrigger)) lastLightboxTrigger.focus();
    }
    function restoreCookieFocus(){
      document.body.classList.remove('no-scroll');
      if(lastCookieTrigger && document.contains(lastCookieTrigger)) lastCookieTrigger.focus();
    }

    if(lightboxClose) lightboxClose.addEventListener('click',function(){setTimeout(restoreLightboxFocus,0);});
    if(lightbox) lightbox.addEventListener('click',function(e){if(e.target===lightbox) setTimeout(restoreLightboxFocus,0);});
    if(cookieClose) cookieClose.addEventListener('click',function(){setTimeout(restoreCookieFocus,0);});
    ['saveRejectCookies','saveCookiePreferences'].forEach(function(id){
      var button=document.getElementById(id);
      if(button) button.addEventListener('click',function(){setTimeout(restoreCookieFocus,0);});
    });

    function trapFocus(e,dialog){
      if(!dialog || dialog.hasAttribute('hidden') || e.key!=='Tab') return;
      var focusable=Array.from(dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')).filter(function(el){return el.offsetParent!==null;});
      if(!focusable.length) return;
      var first=focusable[0];
      var last=focusable[focusable.length-1];
      if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
    }

    document.addEventListener('keydown',function(e){
      if(e.key==='Tab'){
        if(cookieModal && !cookieModal.hasAttribute('hidden')) trapFocus(e,cookieModal);
        else if(lightbox && !lightbox.hasAttribute('hidden')) trapFocus(e,lightbox);
      }
      if(e.key==='Escape'){
        var cookieWasOpen=cookieModal && !cookieModal.hasAttribute('hidden');
        var lightboxWasOpen=lightbox && !lightbox.hasAttribute('hidden');
        setTimeout(function(){
          if(cookieWasOpen) restoreCookieFocus();
          else if(lightboxWasOpen) restoreLightboxFocus();
        },0);
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',enhancePage);
  else enhancePage();
})();