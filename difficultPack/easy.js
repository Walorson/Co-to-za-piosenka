/////////////////// DifficultPack -> Easy /////////////////
const questionLimit = 10;
let question = new Array();
question[0] = new Question("../audio/sorry.mp3","Sorry","Let Her Go", "Perfect", "Girls like you");
question[1] = new Question("../audio/kattyparryroar.mp3","Roar","Hello","Shake it Off", "Waka Waka");
question[2] = new Question("../audio/kattyparrydarkhorse.mp3","Dark Horse","Colorblind","Let Her Go","Lean On");
question[3] = new Question("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/fadedzaycevnetringtone-18910.mp3","Faded", "Force", "Perfect", "Shape of You");
question[4] = new Question("../audio/shakeitoff.mp3","Shake it Off", "Roar","Waka Waka","Girls like you");
question[5] = new Question("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/major-lazer-dj-snake-lean-on-feat-m-official-music-video-mp3cut-13197.mp3","Lean On", "Girls like you", "Axel F", "Let Her Go");
question[6] = new Question("../audio/lethergo.mp3","Let Her Go","Perfect","Sorry", "Baby come back");
question[7] = new Question("../audio/edsheeranperfect.mp3","Perfect", "Let Her Go","Baby come back","Girls like you");
question[8] = new Question("../audio/axelf.mp3","Axel F", "We are the champions","Safey Dance","The Flash");
question[9] = new Question("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/waka-waka-mp3cut-net-mp3-9296.mp3","Waka Waka", "Shake it Off","Fierworks","Goodbye");
question[10] = new Question("../audio/adelehello.mp3","Hello","Shake it Off","Dark Horse","Lean On");
question[11] = new Question("../audio/girlslikeyou.mp3","Girls like you","Lean On","Perfect","Sorry");

getRandomQuestion(questionLimit);
