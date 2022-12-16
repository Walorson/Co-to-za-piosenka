const counter = document.getElementById("counter");
let time = 30; let count = 1;
const timer = document.getElementById("timer");
timer.textContent = time;
const dieAudio = new Audio("../audio/die.mp3");
const winAudio = new Audio("../audio/win.mp3");

const end = () => {
    clearInterval(interval);
    document.body.innerHTML += '<div class="endMenu"><button class="endButton">Return To Menu</button><button class="endButton">Restart</button></div><div class="blackPath"></div><div class="blackPath"></div>';
    setTimeout(() => {
        document.querySelector("img").style.filter = "brightness(75%)";
        document.querySelectorAll(".blackPath").forEach(item => item.style.opacity = 1);
        document.querySelector(".endMenu").style.top = "76%";
    },1800);
}
const die = () => {
    document.body.innerHTML = "";
    document.body.innerHTML = '<img src="../die.jpg" class="die">'; 
    setTimeout(() => {
        const button = document.querySelectorAll(".endButton");
        button.forEach(item => { item.style.opacity = 1; item.style.cursor = "pointer"; });
        button[0].onclick = () => location.href = "../index.html";
        button[1].onclick = () => location.reload();
    },1800);
    end();
    dieAudio.play();
}
const win = () => {
    document.body.innerHTML = "";
    document.body.innerHTML = '<img src="../win.jpg" class="die">';
    document.body.innerHTML += '<h1 class="youWon">YOU WON!</h1>';
    setTimeout(() => { document.querySelector(".youWon").style.top = "1px"; });
    setTimeout(() => {
        const button = document.querySelectorAll(".endButton");
        button[0].style.opacity = 1; button[0].style.cursor = "pointer"; 
        button[0].onclick = () => location.href = "../index.html";
    },1800);
    end();
    winAudio.play();
}
class Question {
    constructor(audio, correctAnswer, answer2, answer3) {
        this.audio = new Audio(audio);
        this.correctAnswer = correctAnswer;
        this.answer2 = answer2;
        this.answer3 = answer3;

        this.answers = document.getElementById("answers");
        this.answer = new Array(correctAnswer,this.answer2,this.answer3);
        for(let i=0; i < this.answer.length; i++) {
            this.answer[i] = `<button>${this.answer[i]}</button>`
        }
    }
    createQuestion() {
        while(this.answer.length > 1) {
            let rand = Math.floor(Math.random()*this.answer.length);
            this.answers.innerHTML += this.answer[rand];
            delete this.answer[rand];
            this.answer = this.answer.filter(item => item != undefined);
        }
        this.answers.innerHTML += this.answer[0];

        this.audio.play();

        document.querySelectorAll("button").forEach(answer => {
            answer.onclick = () => {
                if(answer.textContent == this.correctAnswer) {
                    this.audio.pause();
                    time = 30; timer.textContent = time;
                    count++; 
                        if(count <= questionLimit) counter.textContent = count+"/"+questionLimit;
                        else { win(); return; }
                    this.answers.innerHTML = "";
                    allQuestion[count-1].createQuestion();  
                 }
                else {
                    this.audio.pause();
                    die();
                }
            }
        });
    }
} 
class fourQuestion extends Question {
    constructor(audio, correctAnswer, answer2, answer3, answer4) {
        super(audio, correctAnswer, answer2, answer3);
        this.answer4 = answer4;

        this.answer.push(`<button>${answer4}</button>`);
    }
}
//////// TICK ///////////////
let interval;
//////// RANDOMIZE //////////
const allQuestion = new Array();
function getRandomQuestion(questionLimit) {
    for(let i=0; i<questionLimit; i++) {
        let rand = Math.floor(Math.random()*question.length);
        allQuestion.push(question[rand]);
        delete question[rand];
        question = question.filter(item => item != undefined);
    }
}
//////// BLACK SCREEN //////////
const blackScreen = document.querySelector(".blackScreen");
let inactive = false;
window.onclick = () => {
    if(inactive == false) {
        blackScreen.style.opacity = 0;
        setTimeout(() => blackScreen.style.zIndex = -50,900);
        allQuestion[count-1].createQuestion();
        interval = setInterval(() => {
            time--;
            timer.textContent = time;
            if(time <= 0) {
                die();
            }
        },1000);
        inactive = true;
    }
}