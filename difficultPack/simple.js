//////////// DifficultPack -> Simple ///////////////
const questionLimit = 5;
let question = new Array();
question[0] = new Question("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/psy-gangnam-style-9672.mp3","Psy - Gangam Style","Mark Ronson - Uptown Funk","Ed Sheeran - Shape of You");
question[1] = new Question("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/dl/mp3/shape-of-you-29844.mp3","Ed Sheeran - Shape of You","OneRepublic - Counting Stars","Passenger - Let Her Go");
question[2] = new Question("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/dl/mp3/see-you-again-see-you-again-20813.mp3","Wiz Khalifa - See You Again","Ed Sheeran - Perfect","Justin Bieber - Sorry");
question[3] = new Question("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/dl/mp3/despacito-29879.mp3","Luis Fonsi - Despacito","El Chombo - Dame Tu Cosita","Psy - Gangam Style");
question[4] = new Question("https://2u039f-a.akamaihd.net/downloads/ringtones/files/dl/mp3/counting-stars-17029.mp3","OneRepublic - Counting Stars","Psy - Gangam Style","Ed Sheeran - Shape of You");
question[5] = new Question("../audio/babyshark.mp3","Baby Shark Dance","LooLoo Kids - Johny Johny Yes Papa","El Chombo - Dame Tu Cosita");
question[6] = new Question("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/mark-ronson-uptown-funk-feat-bruno-mars-1425091161-mp3cut-net-7557.mp3","Mark Ronson - Uptown Funk","Maroon 5 - Sugar","Luis Fonsi - Despacito");
question[7] = new Question("https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/28sugar-13940.mp3","Maroon 5 - Sugar","OneRepublic - Counting Stars","Passenger - Let Her Go");
question[8] = new Question("../audio/dametucosita.mp3","El Chombo - Dame Tu Cosita","Ed Sheeran - Thinking Out Loud","Baby Shark Dance");
question[9] = new Question("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/justin-bieber-baby-538.mp3","Justin Bieber - Baby Baby","	Ed Sheeran - Shape of You","Mark Ronson - Uptown Funk");

getRandomQuestion(questionLimit);