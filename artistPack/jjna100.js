//////////////////////// ArtistPack -> JJna100 /////////////////////////
const questionLimit = 15;
let question = new Array();
question[0] = new Question("../audio/dissnabartka.mp3","Diss na Bartka","Jebac Jarka Je Je","O kurwa jaka chołpa","Zakład");
question[1] = new Question("../audio/dissnabartka2.mp3","Diss na Bartka 2","Jebac Jarka Je Je","Diss na Bartka","Upokorzenie 2");
question[2] = new Question("../audio/detektywgrzeslaw.mp3","Detektyw Grzesław","Zakład","Walentynki","Upokorzenie 2");
question[3] = new Question("../audio/detektywgrzeslaw2.mp3","Detektyw Grzesław Zaginione Klucze","Diss na Bartka","Detektyw Grzesław","Walentynki");
question[4] = new Question("../audio/gotujemyzupe.mp3","Gotujemy Zupe","Zakład","Nie mam tekstu","Życzenia urodzinowe dla Tomusia");
question[5] = new Question("../audio/jakacholpa.mp3","O kurwa jaka chołpa","Diss na Jarka Je Je","Upokorzenie","Nie mam tekstu");
question[6] = new Question("../audio/jebacjarkajeje.mp3","Jebac Jarka Je Je","Jebac bo Jeb Jeb","Diss na Bartka","Życzenia urodzinowe dla Tomusia");
question[7] = new Question("../audio/jebjebjeb.mp3","Jebac bo Jeb Jeb","Diss na Bartka","Jebac Jarka Je Je","Diss na Bartka 2");
question[8] = new Question("../audio/niemamtekstu.mp3","Nie mam tekstu","Detektyw Grzesław Zaginione Klucze","Upokrzenie","O kurwa jaka chołpa");
question[9] = new Question("../audio/stolattomus.mp3","Życzenia urodzinowe dla Tomusia","Urodziny","Walentynki","Wszystkiego Najlepszego");
question[10] = new Question("../audio/upokorzenie.mp3","Upokorzenie","Upokorzenie 2","Zakład","Jebac Jarka Je Je");
question[11] = new Question("../audio/upokorzenie2.mp3","Upokorzenie 2","Upokorzenie","Zakład","Nie mam tekstu");
question[12] = new Question("../audio/walentynki.mp3","Walentynki","Zakład","Detektyw Grzesław","Upokorzenie 2");
question[13] = new Question("../audio/wpysk.mp3","W pysk","Zakład","Papierosy","Detektyw Grzesław Zaginione Klucze");
question[14] = new Question("../audio/zaklad.mp3","Zakład","Walentynki","Detektyw Grzesław","Diss na Bartka");
question[15] = new Question("../audio/karkowka.mp3","Karkówka", "Zakład", "Diss na Bartka", "Detektyw Grzesław");
question[16] = new Question("../audio/dissNaBartka3.mp3", "Diss na Bartka 3", "Detektyw Grzesław Zaginione Klucze", "Jebać Jarka Je Je", "Karkówka");

getRandomQuestion(questionLimit);