//////////////////////// ArtistPack -> JJna100 /////////////////////////
const questionLimit = 15;
let question = new Array();
question[0] = new fourQuestion("../audio/dissnabartka.mp3","Diss na Bartka","Jebac Jarka Je Je","O kurwa jaka chołpa","Zakład");
question[1] = new fourQuestion("../audio/dissnabartka2.mp3","Diss na Bartka 2","Jebac Jarka Je Je","Diss na Bartka","Upokorzenie 2");
question[2] = new fourQuestion("../audio/detektywgrzeslaw.mp3","Detektyw Grzesław","Zakład","Walentynki","Upokorzenie 2");
question[3] = new fourQuestion("../audio/detektywgrzeslaw2.mp3","Detektyw Grzesław Zaginione Klucze","Diss na Bartka","Detektyw Grzesław","Walentynki");
question[4] = new fourQuestion("../audio/gotujemyzupe.mp3","Gotujemy Zupe","Zakład","Nie mam tekstu","Życzenia urodzinowe dla Tomusia");
question[5] = new fourQuestion("../audio/jakacholpa.mp3","O kurwa jaka chołpa","Diss na Jarka Je Je","Upokorzenie","Nie mam tekstu");
question[6] = new fourQuestion("../audio/jebacjarkajeje.mp3","Jebac Jarka Je Je","Jebac bo Jeb Jeb","Diss na Bartka","Życzenia urodzinowe dla Tomusia");
question[7] = new fourQuestion("../audio/jebjebjeb.mp3","Jebac bo Jeb Jeb","Diss na Bartka","Jebac Jarka Je Je","Diss na Bartka 2");
question[8] = new fourQuestion("../audio/niemamtekstu.mp3","Nie mam tekstu","Detektyw Grzesław Zaginione Klucze","Upokrzenie","O kurwa jaka chołpa");
question[9] = new fourQuestion("../audio/stolattomus.mp3","Życzenia urodzinowe dla Tomusia","Urodziny","Walentynki","Wszystkiego Najlepszego");
question[10] = new fourQuestion("../audio/upokorzenie.mp3","Upokorzenie","Upokorzenie 2","Zakład","Jebac Jarka Je Je");
question[11] = new fourQuestion("../audio/upokorzenie2.mp3","Upokorzenie 2","Upokorzenie","Zakład","Nie mam tekstu");
question[12] = new fourQuestion("../audio/walentynki.mp3","Walentynki","Zakład","Detektyw Grzesław","Upokorzenie 2");
question[13] = new fourQuestion("../audio/wpysk.mp3","W pysk","Zakład","Papierosy","Detektyw Grzesław Zaginione Klucze");
question[14] = new fourQuestion("../audio/zaklad.mp3","Zakład","Walentynki","Detektyw Grzesław","Diss na Bartka");

getRandomQuestion(questionLimit);