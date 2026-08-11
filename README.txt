BOZZA LANDING PAGE - STAMPA SU PARETE PERUGIA

File inclusi:
- index.html
- style.css

Cose da modificare prima della pubblicazione:
1. Numero WhatsApp
   Cerca nel file index.html: 390000000000
   Sostituiscilo con il tuo numero nel formato internazionale, esempio: 393331234567

2. Google Form
   Cerca nel file index.html: https://forms.gle/INSERISCI-QUI-IL-TUO-FORM
   Sostituiscilo con il link del tuo modulo Google.

3. Google Analytics 4
   Nel file index.html trovi il blocco commentato con G-XXXXXXXXXX.
   Quando avrai il codice GA4, lo sostituirai e rimuoverai i commenti.

4. Immagini/mockup
   Per ora la pagina usa riquadri colorati segnaposto.
   Quando creeremo i mockup, potremo sostituire questi riquadri con immagini reali.

5. Nome servizio
   Il nome provvisorio è "Stampa su Parete Perugia".
   Possiamo cambiarlo in qualsiasi momento.

Come pubblicarla su GitHub Pages:
1. Crea una nuova repository GitHub, per esempio: stampa-su-parete-perugia
2. Carica index.html e style.css nella repository
3. Vai su Settings > Pages
4. Source: Deploy from a branch
5. Branch: main / root
6. Salva e attendi la pubblicazione

Nota:
La pagina è pensata per testare il mercato. Non dichiara lavori già realizzati e specifica che gli esempi sono dimostrativi.


Calcolatore prezzo:
- La pagina include un calcolatore automatico con tariffa 80 €/m².
- Il minimo calcolato è 1 m², quindi qualsiasi misura sotto 1 m² mostra comunque 80 €.
- Per cambiare la tariffa, apri index.html e modifica questa riga nello script:
  const PRICE_PER_SQM = 80;
- Per cambiare il minimo, modifica:
  const MIN_BILLABLE_SQM = 1;
- Il pulsante WhatsApp del calcolatore aggiorna automaticamente il messaggio con larghezza, altezza e prezzo stimato.


Aggiornamento V3:
- Il calcolatore mostra un prezzo indicativo a partire da 80 €/m² con minimo 1 m².
- La pagina chiarisce che il prezzo finale può variare in base a grafica, trasferta, preparazione/stato della parete, accessibilità e verifica tecnica.


Link Google Form inserito nella pagina:
https://docs.google.com/forms/d/e/1FAIpQLSeVzuS1ifXUKh8f2-UYChsx437u9VIwvZ7YnH1cx9hwiAvC7g/viewform?usp=publish-editor
