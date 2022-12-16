/////////// ArtistPack -> Aerial Twist //////////////
const questionLimit = 7;
let question = new Array();
question[0] = new Question("../audio/sixshooter.mp3","Sampler 2014 grzesław i bartłomiejczyk","Some Tricks from 2018","Sampler 2015 Grzegorz Gniadek");
question[1] = new Question("../audio/followroksonixremix.mp3","Sampler 2015 Grzegorz Gniadek","Summer beach and autumn gym tricking 2019","Aerial Twist Tricking 2.0");
question[2] = new Question("../audio/heathenskaraoke.mp3","Tricking in enchanted forest","Fly Away","Some Tricks from 2018");
question[3] = new Question("../audio/flyaway.mp3","Fly Away","Tricking in enchanted forest","Some Tricks from 2018");
question[4] = new Question("../audio/sometricks.mp3","Some tricks from 2018","Fly Away","Summer beach and autumn gym tricking 2019");
question[5] = new Question("../audio/veorrarun.mp3","Summer beach and autumn gym tricking 2019","Aerial Twist Tricking 2.0","Sampler 2014 grzesław i bartłomiejczyk");
question[6] = new Question("../audio/ludens.mp3","Aerial Twist Tricking 2.0","Sampler 2015 grzegorz gniadek","Summer beach and autumn gym tricking 2019");

getRandomQuestion(questionLimit);