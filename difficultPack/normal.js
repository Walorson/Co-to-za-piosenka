//////////////////////// DifficultPack -> Normal //////////////////////
const questionLimit = 10;
let question = new Array();
question[0] = new Question("../audio/human.mp3","Human","Skin","Gentleman","Hymn of the Weekend");
question[1] = new Question("../audio/hymnoftheweekend.mp3","Hymn for the Weekend","Stressed Out","Rockabye","Love on me");
question[2] = new Question("../audio/gentleman.mp3","Gentleman","Gangam style","Stressed out","Human");
question[3] = new Question("../audio/closer.mp3","Closer","Summer","Sofia","Take on me");
question[4] = new Question("../audio/aintyourmama.mp3","Ain't your Mama","Hey Mama","Hello","Shy Away");
question[5] = new Question("../audio/takeonme.mp3","Take on me","Chlorine","Never gonna give up","What is Love");
question[6] = new Question("../audio/summer.mp3","Summer","Spring","Winter","Autumn");
question[7] = new Question("../audio/stressedout.mp3","Stressed Out","Flight","Ride","Human");
question[8] = new Question("../audio/sofia.mp3","Sofia","Ain't your Mama","Take on me","Flight");
question[9] = new Question("../audio/rockabye.mp3","Rockabye","Ain't your Mama","Stranger","Live in the Moment");

getRandomQuestion(questionLimit);