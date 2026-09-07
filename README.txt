STAMPAMURALE - REBRAND E MIGRAZIONE CLOUDFLARE

Dominio principale previsto:
https://stampamurale.it

Architettura:
- Registrar dominio: OVHcloud
- DNS / CDN / HTTPS: Cloudflare
- Hosting sito: Cloudflare Pages
- Codice sorgente e versioni: GitHub
- Email dominio: OVHcloud / Zimbra

Ramo di lavoro:
stampamurale-rebrand

Obiettivo:
Preparare la migrazione del sito esistente “Stampa su Parete Perugia” al brand “StampaMurale”, mantenendo il posizionamento locale Perugia / Umbria nei testi SEO e nel contenuto.

Da mantenere:
- Calcolatore prezzo €80/m² con minimo €80
- Google Form preventivo
- WhatsApp 3204178026
- Galleria e lightbox
- Privacy/cookie consent
- Google Tag Manager: GTM-TJSWCMD3
- Google Analytics 4: G-4NVPNZHY9S
- TikTok Pixel: D9UU2MJC77UE58FDAJQG
- Meta Pixel non inserito
- Simulazioni grafiche chiaramente indicate come esempi dimostrativi
- Stato attuale: sito gestito da privato per studio di mercato e valutazione preliminare della domanda

Aggiornamenti Cloudflare:
- Privacy Policy aggiornata per Cloudflare Pages, GitHub e OVHcloud
- Cookie Policy aggiornata con riferimento a Cloudflare
- robots.txt predisposto per il nuovo dominio
- sitemap.xml predisposta per stampamurale.it
- _headers predisposto per header di sicurezza di base su Cloudflare Pages
- favicon.svg predisposta per il nuovo brand

Pubblicazione Cloudflare Pages:
1. Collegare il repository bogdanpotir/stampa-parete-perugia a Cloudflare Pages.
2. Branch di produzione finale: main, dopo approvazione del rebrand.
3. Framework preset: None / static HTML.
4. Build command: lasciare vuoto.
5. Build output directory: / oppure . a seconda dell'interfaccia Cloudflare.
6. Dopo il deploy su *.pages.dev, verificare tutte le pagine e i link.
7. Collegare il dominio personalizzato stampamurale.it.
8. Collegare anche www.stampamurale.it e impostare il redirect verso stampamurale.it.
9. Verificare HTTPS, redirect, MX email OVH, SPF e successivamente DKIM/DMARC.

Nota importante:
Non eliminare o modificare i record MX della posta OVH presenti in Cloudflare:
- mx1.mail.ovh.net priorità 1
- mx2.mail.ovh.net priorità 5
- mx3.mail.ovh.net priorità 100
SPF attuale:
v=spf1 include:mx.ovh.com -all

Prima della pubblicazione definitiva:
- aggiornare index.html con brand StampaMurale
- aggiornare title/meta/Open Graph/Twitter/canonical sul nuovo dominio
- verificare che pics/preview.jpg.png sia correttamente raggiungibile
- verificare tutte le immagini e il responsive mobile
- verificare il banner cookie
- testare GA4/GTM/TikTok solo dopo consenso
- verificare Google Form e WhatsApp
- valutare DKIM e DMARC per l'email @stampamurale.it
