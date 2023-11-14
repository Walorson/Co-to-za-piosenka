//////////// ArtistPack -> E-DJ ///////////
const questionLimit = 10;
let question = new Array();
question[0] = new Question("../audio/zaczynamy.mp3","Zaczynamy","Jazda","Unexpected","Castle");
question[1] = new Question("../audio/unexpected.mp3","Unexpected","Zaczynamy","Jazda","My Goal");
question[2] = new Question("../audio/darkandlight.mp3","Dark And Light","My Goal","Castle","Sun Eclipse");
question[3] = new Question("../audio/edjcastle.mp3","Castle","Sun Eclipse","Dark And Light","Jazda");
question[4] = new Question("../audio/jazda.mp3","Jazda","Unexpected","Zaczynamy","Valenti");
question[5] = new Question("../audio/lodowakraina.mp3","Lodowa Kraina","Noc","Valenti","Dark and Light");
question[6] = new Question("../audio/mygoal.mp3","My Goal","Noc","Castle","Sun Eclipse");
question[7] = new Question("../audio/noc.mp3","Noc","Murzyn Kamil (Fan Soundtrack)","Zaczynamy","Unexpected");
question[8] = new Question("../audio/suneclipse.mp3","Sun Eclipse","Dark And Light","Noc","Murzyn Kamil (Fan Soundtrack)");
question[9] = new Question("../audio/valenti.mp3","Valenti","Castle","Lodowa Kraina","Murzyn Kamil (Fan Soundtrack)");
question[10] = new Question("../audio/murzynkamilsoundtrack.mp3","Murzyn Kamil (Fan Soundtrack)","Valenti","Dark And Light","Noc");

getRandomQuestion(questionLimit);