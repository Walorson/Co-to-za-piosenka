/////////////////// DifficultPack -> Easy /////////////////
const questionLimit = 10;
let question = new Array();
question[0] = new Question("../audio/sorry.mp3","Justin Bieber - Sorry","Passenger - Let Her Go", "Ed Sheeran - Perfect", "Maroon 5 - Girls like you");
question[1] = new Question("../audio/kattyparryroar.mp3","Katty Parry - Roar","Adele - Hello","Taylor Swift - Shake it Off", "Shakira - Waka Waka");
question[2] = new Question("../audio/kattyparrydarkhorse.mp3","Katty Perry - Dark Horse","Panda Eyes - Colorblind","Passenger - Let Her Go","Major Lazer - Lean On");
question[3] = new Question("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/fadedzaycevnetringtone-18910.mp3","Alan Walker - Faded", "Alan Walker - Force", "Ed Sheeran - Perfect", "Ed Sheeran - Shape of You");
question[4] = new Question("../audio/shakeitoff.mp3","Taylor Swift - Shake it Off", "Katy Parry - Roar","Shakira - Waka Waka","Maroon 5 - Girls like you");
question[5] = new Question("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/major-lazer-dj-snake-lean-on-feat-m-official-music-video-mp3cut-13197.mp3","Major Lazer - Lean On", "Maroon 5 - Girls like you", "Crazy Frog - Axel F", "Passenger - Let Her Go");
question[6] = new Question("../audio/lethergo.mp3","Passenger - Let Her Go","Ed Sheeran - Perfect","Justin Bieber - Sorry", "Kill Paris - Baby come back");
question[7] = new Question("../audio/edsheeranperfect.mp3","Ed Sheeran - Perfect", "Passenger - Let Her Go","Kill Paris - Baby come back","Maroon 5 - Girls like you");
question[8] = new Question("../audio/axelf.mp3","Crazy Frog - Axel F", "Crazy Frog - We are the champions","Crazy Frog - Safey Dance","Crazy Frog - The Flash");
question[9] = new Question("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/waka-waka-mp3cut-net-mp3-9296.mp3","Shakira - Waka Waka", "Taylor Swift - Shake it Off","Katy Parry - Fierworks","Adele - Goodbye");
question[10] = new Question("../audio/adelehello.mp3","Adele - Hello","Taylor Swift - Shake it Off","Katy Parry - Dark Horse","Major Lazer - Lean On");
question[11] = new Question("../audio/girlslikeyou.mp3","Maroon 5 - Girls like you","Major Lazer - Lean On","Ed Sheeran - Perfect","Justin Bieber - Sorry");

getRandomQuestion(questionLimit);
