# Osteria Km 0 — sito statico

## Avvio locale
Apri index.html nel browser. Non servono Node, npm o compilazione.
Facoltativo: dalla cartella esegui `python -m http.server 8000` e apri http://localhost:8000.

## GitHub Pages
1. Crea un repository GitHub e carica il CONTENUTO di questa cartella nella radice del repository, non lo ZIP.
2. In Settings > Pages scegli Deploy from a branch, branch main, cartella / (root), quindi Save.
3. Attendi il completamento della pubblicazione e apri l’indirizzo mostrato da GitHub.
I collegamenti relativi funzionano anche nei repository progetto. Non serve un backend.

## File
- index.html: homepage
- menu.html: pagina menù
- contatti.html: informazioni, telefono e promemoria locale
- privacy.html: bozza da completare PRIMA della pubblicazione definitiva
- assets/style.css: colori, layout e responsive
- assets/app.js: navigazione mobile, filtri menù e promemoria
- assets/menu.js: configurazione menù
- assets/img/: le tre foto fornite, convertite in WebP

## Inserire il menù ufficiale
Modifica assets/menu.js. Il menù iniziale è intenzionalmente vuoto: niente prezzi o piatti inventati.
Esempio di STRUTTURA (sostituire ogni contenuto prima di attivare):

window.OSTERIA_MENU = {
  published: true,
  notice: "Menù aggiornato al ... . Per gli allergeni rivolgersi al personale.",
  categories: [
    { name: "Categoria approvata", items: [
      { name: "Nome piatto approvato", description: "Descrizione verificata", price: 12.50 }
    ] }
  ]
};

Il prezzo numerico viene formattato in euro. Puoi usare una stringa per indicazioni approvate come “secondo disponibilità”.
Non pubblicare dichiarazioni su allergeni/diete senza conferma del ristorante.
Per un PDF ufficiale, caricalo in assets e aggiungi in menu.html un link: <a class="btn" href="assets/menu.pdf">Apri il menù PDF</a>.

## Prenotazioni
Il numero attualmente usato è +39 0722 320369, pubblicato su TripAdvisor.
Tutti i pulsanti chiamano il ristorante con tel:. Il modulo crea SOLO un promemoria locale e permette di copiarlo.
Non manda email, non usa WhatsApp e non conferma prenotazioni. Non abbiamo assunto che il numero fisso supporti WhatsApp.
Per vere richieste online occorre configurare un servizio o backend con recapito verificato, gestione dati e informative adeguate.

## Verifiche prima di andare online
- Far confermare dal gestore telefono, indirizzo, orari e disponibilità delle proposte.
- Completare dati societari, partita IVA e informativa privacy con i dettagli applicabili.
- Verificare autorizzazione all’uso delle fotografie: le immagini sono state fornite dall’utente, non è stata verificata la licenza.
- Approvare testi, foto e menù ufficiale; non sono stati riprodotti voti né recensioni.
- Testare chiamate su smartphone, navigazione, filtri, tastiera, link esterni e tutti i percorsi dopo il deploy.
- Non sono presenti tracker, font remoti, cookie applicativi o embed. Rivalutare privacy/cookie se si aggiungono servizi.
- A dominio definitivo aggiungere URL canonici, og:url e og:image con URL assoluti, sitemap e dati strutturati con informazioni confermate.
- Il sito è responsive e le immagini sono WebP; non è stato eseguito un audit Lighthouse né un test visivo in browser.

## Fonti e scelte
Fonte informativa consultata: https://www.tripadvisor.it/Restaurant_Review-g187797-d3292048-Reviews-Osteria_Km_0-Urbino_Province_of_Pesaro_and_Urbino_Marche.html
Consultazione: 4 novembre 2026. Via Puccinotti 21, Urbino; telefono +39 0722 320369.
Orari riportati dalla fonte: lunedì 12–15:30; martedì–domenica 12–15:30 e 19–22. Da verificare col gestore.
Google Maps non è stato leggibile tramite lo strumento di consultazione: il collegamento usa una ricerca per nome e indirizzo.
Fotografie: immagini caricate dall’utente. Identificazione dei file da verificare visivamente prima del rilascio.
