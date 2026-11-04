# Osteria Km 0 — versione dimostrativa per presentazione al cliente

## IMPORTANTE: cosa è inventato
TUTTO IL MENU È DIMOSTRATIVO: nomi, ingredienti, prezzi, coperto e indicazioni “Vegetariano” / “La nostra scelta” sono inventati per illustrare l’interfaccia. Non costituiscono un’offerta del ristorante. Il sito non mostra etichette di demo per essere presentabile al cliente: mantieni questa versione in locale o in una demo ad accesso controllato, NON pubblicarla come sito ufficiale prima dell’approvazione dei contenuti. Un repository pubblico e GitHub Pages sono pubblici e non sono un’anteprima riservata.
La pagina privacy ha tono finale ma NON è un’informativa completa: va completata con dati reali e verificata prima della pubblicazione ufficiale. Nessuna frase “da completare” compare nel sito.

## 1. Avviare il sito
Estrai lo ZIP e apri index.html. Nessuna installazione, Node o npm richiesta.
Facoltativo: dalla cartella esegui `python -m http.server 8000`, poi apri http://localhost:8000.

## 2. Dove modificare ogni cosa
- assets/config.js: telefono, indirizzo, collegamenti esterni, orari.
- assets/menu.js: categorie, piatti, descrizioni, prezzi, etichette e coperto.
- index.html: testi della home, titoli, immagini e inviti all’azione.
- menu.html: titolo pagina, testi ricerca, invito a prenotare.
- contatti.html: testi per prenotazioni e richieste speciali.
- privacy.html: informativa da integrare con il gestore.
- assets/style.css: colori, font, spaziature, mobile.
- assets/app.js: interazioni, rendering menù e contatti.
- assets/img/: foto in WebP.
- assets/favicon.svg: icona della scheda browser.
I cambiamenti al numero e ai link in config.js vengono applicati automaticamente alle pagine. Il nome del ristorante e alcune menzioni dell’indirizzo nei testi HTML sono editoriali: se cambi sede/nome, cerca anche in tutti gli HTML.

## 3. Sostituire il menù
Apri assets/menu.js con un editor (ad esempio VS Code). Mantieni `window.MENU =` e la struttura delle parentesi. Puoi usare doppi apici per i testi; i doppi apici interni vanno scritti come \". Salva UTF-8.
Ogni categoria ha name, intro, items. Ogni piatto ha:
- name: nome ufficiale.
- description: ingredienti o descrizione approvati.
- price: numero senza simbolo euro, usando il punto per i decimali (es. 12.5). Formattazione automatica in euro. È possibile usare una stringa approvata al posto del numero.
- tags: elenco etichette. [] = nessuna. “Vegetariano” attiva il filtro vegetariano; “La nostra scelta” evidenzia il consiglio.
Per aggiungere un piatto, duplica un oggetto di items separandolo dagli altri con una virgola. Per rimuoverlo, elimina l’oggetto intero e sistema le virgole. Per una categoria, duplica o elimina un oggetto di categories.
La sequenza nel file determina l’ordine a schermo. Categorie, conteggio e filtri si aggiornano da soli. La ricerca opera su nome e descrizione, non sui prezzi; ricerca, categoria e vegetariano si combinano. “Azzera filtri” ripristina tutto.
Aggiorna `note` per coperto e avvertenze ufficiali. Controlla gli ingredienti con il personale: le etichette dimostrative NON sono certificazioni e non garantiscono assenza di allergeni o contaminazioni. Non aggiungere “senza glutine” o indicazioni sanitarie senza verifica.

## 4. Telefono, prenotazioni, orari e social
In assets/config.js aggiorna phone mantenendo il prefisso internazionale. I pulsanti tel: aprono l’app telefonica e non fanno una prenotazione automatica.
Questa versione elimina il precedente modulo promemoria: niente campi inutili o richieste che sembrano inviate senza esserlo. Il cliente vede soltanto la prenotazione telefonica e la spiegazione della conferma.
Il numero presente è +39 0722 320369. Non è stata verificata l’abilitazione WhatsApp; non è stato aggiunto un pulsante WhatsApp.
In hours modifica ogni riga degli orari. Modifica maps, instagram e tripadvisor con gli URL definitivi. L’indirizzo è nel campo address, ma controlla anche i testi manuali della home.
Per aggiungere WhatsApp usa soltanto un numero autorizzato e verificato. Per richieste via modulo occorrono un servizio/backend reale, recapito, gestione errori e informativa adeguata: non basta un modulo HTML.

## 5. Foto, logo e colori
Le tre foto fornite sono state convertite in WebP. Prima di pubblicare verifica di avere autorizzazione del titolare dei diritti, anche se reperite sui social o su portali.
Per cambiare foto, sostituisci il file mantenendo nome ed estensione, oppure aggiorna src negli HTML. Aggiorna anche alt per descrivere la nuova immagine. Verifica il ritaglio sul telefono; in CSS le foto usano object-fit:cover.
Colori in assets/style.css, all’inizio: --bg fondo, --ink verde/testo, --muted testo secondario, --accent terracotta, --line bordi.
Il marchio è testo HTML, non un logo ufficiale. Per cambiarlo aggiorna il blocco .brand in tutte le pagine e favicon.svg.

## 6. Privacy e dati del gestore — BLOCCANTE per pubblicazione ufficiale
La pagina contiene soltanto descrizioni tecniche del sito. Richiedi dati e verifica un’informativa applicabile: titolare/ragione sociale, sede e contatti, partita IVA e informazioni obbligatorie, fornitore hosting, log e trattamento IP, finalità/basi giuridiche, destinatari, trasferimenti se applicabili, tempi di conservazione, diritti e modalità di esercizio/reclamo.
Integra privacy.html e i dati del gestore nel footer di OGNI pagina. Non copiare dati inventati.
Il sito non integra analytics, pubblicità, font remoti, widget, cookie applicativi o localStorage. Hosting e servizi esterni hanno trattamenti propri. Se aggiungi analytics, mappe incorporate o widget, rivaluta informativa e consenso con competenza adeguata.

## 7. Pubblicazione su GitHub Pages
Solo dopo approvazione dei contenuti ufficiali:
1. Carica il CONTENUTO di questa cartella alla radice del repository, non lo ZIP o una cartella contenitore aggiuntiva.
2. Settings > Pages > Deploy from a branch > main > / (root) > Save.
3. Attendi il deploy, poi apri l’URL mostrato da GitHub.
Per aggiornare un sito già pubblicato sostituisci tutti gli HTML, tutta la cartella assets e gli altri file con questi. Rimuovi eventuali vecchi file non più usati. Commit sul branch configurato.
I link sono relativi e funzionano nei repository progetto. Mantieni .nojekyll; se il tuo sistema nasconde i file con il punto, abilita la loro visualizzazione.
Non caricare password o credenziali nel repository. Tutti i file client sono leggibili dai visitatori.

## 8. Verifiche finali
[ ] Menù, descrizioni, prezzi e coperto sostituiti con dati approvati.
[ ] Etichette vegetariane corrette; allergeni gestiti con il ristorante.
[ ] Numero, indirizzo, orari, Maps e social verificati dal gestore.
[ ] Foto e marchio autorizzati.
[ ] Privacy completa e dati societari inseriti.
[ ] Test mobile: navigazione, barra inferiore, ricerca, categorie, vegetariano, azzera filtri e nessun risultato.
[ ] Test telefonata da smartphone e link esterni.
[ ] Test tastiera, focus e contrasto dopo eventuali cambi colori.
[ ] Test Chrome/Safari e schermi diversi; non è stato eseguito un test visivo browser né Lighthouse.
[ ] Con dominio definitivo: aggiungere canonical, metadati social con URL assoluti, sitemap ed eventuali dati strutturati validati con dati reali.

## 9. Se qualcosa non funziona
- 404: verifica index.html alla radice e branch/cartella Pages.
- Foto mancanti: nomi ed estensioni sono sensibili alle maiuscole; carica assets/img.
- Menù vuoto: controlla assets/menu.js nella console browser (F12), parentesi e virgole. Deve caricarsi prima di app.js.
- Modifiche invisibili: attendi il deploy e fai ricaricamento completo, poi verifica i file nel repository.
- Telefono e footer vuoti: verifica config.js e che JavaScript non abbia errori.

## Provenienza
Dati anagrafici/orari ripresi dalla versione precedente basata sulla scheda TripAdvisor fornita: https://www.tripadvisor.it/Restaurant_Review-g187797-d3292048-Reviews-Osteria_Km_0-Urbino_Province_of_Pesaro_and_Urbino_Marche.html
Non sono stati verificati nuovamente in questa revisione. Menù, prezzi e coperto sono interamente inventati. Foto fornite dall’utente. Nessun voto o recensione è stato riprodotto.
