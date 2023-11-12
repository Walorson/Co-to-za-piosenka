const counter = document.getElementById("counter"); // Counter div (30 seconds)
let time = 30; let count = 1; // Time: From 30 to 0 | Count: Number of Question
const timer = document.getElementById("timer"); // Timer div
timer.textContent = time;
const dieAudio = new Audio(`${path}../audio/die.mp3`);
const winAudio = new Audio(`${path}../audio/win.mp3`);

const end = () => {
    clearInterval(interval);
    document.body.innerHTML += '<div class="endMenu"><button class="endButton">Return To Menu</button><button class="endButton">Try Again</button></div><div class="blackPath"></div><div class="blackPath"></div>';
    setTimeout(() => {
        document.querySelector("img").style.filter = "brightness(75%)";
        document.querySelectorAll(".blackPath").forEach(item => item.style.opacity = 1);
        document.querySelector(".endMenu").style.top = "76%";
    },1800);
}
const die = () => {
    document.body.innerHTML = "";
    document.body.innerHTML = `<img src="${path}../die.jpg" class="die">`; 
    setTimeout(() => {
        const button = document.querySelectorAll(".endButton");
        button.forEach(item => { item.style.opacity = 1; item.style.cursor = "pointer"; });
        button[0].onclick = () => location.href = `${path}../index.html`;
        button[1].onclick = () => location.reload();
    },1800);
    end();
    dieAudio.play();
}
const win = () => {
    document.body.innerHTML = "";
    document.body.innerHTML = `<img src="${path}../win.jpg" class="die">`;
    document.body.innerHTML += '<h1 class="youWon">YOU WON!</h1>';
    setTimeout(() => { document.querySelector(".youWon").style.top = "1px"; });
    setTimeout(() => {
        const button = document.querySelectorAll(".endButton");
        button[0].style.opacity = 1; button[0].style.cursor = "pointer"; 
        button[0].onclick = () => location.href = `${path}../index.html`;
    },1800);
    end();
    winAudio.play();
}
class Question {
    constructor(audio, correctAnswer, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9) {
        this.audio = new Audio(audio);
        this.correctAnswer = correctAnswer;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.answer5 = answer5;
        this.answer6 = answer6;
        this.answer7 = answer7;
        this.answer8 = answer8;
        this.answer9 = answer9;

        this.answers = document.getElementById("answers");
        this.answer = new Array(correctAnswer,this.answer2);
        if(this.answer3 != undefined) this.answer.push(this.answer3);
        if(this.answer4 != undefined) this.answer.push(this.answer4);
        if(this.answer5 != undefined) this.answer.push(this.answer5);
        if(this.answer6 != undefined) this.answer.push(this.answer6);
        if(this.answer7 != undefined) this.answer.push(this.answer7);
        if(this.answer8 != undefined) this.answer.push(this.answer8);
        if(this.answer9 != undefined) this.answer.push(this.answer9);
        
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
const infoStart = document.querySelector('.infoStart')
infoStart.innerHTML = `
<span style="--i:1;">L</span>
<span style="--i:2;">O</span>
<span style="--i:3;">A</span>
<span style="--i:4;">D</span>
<span style="--i:5;">I</span>
<span style="--i:6;">N</span>
<span style="--i:7;">G</span>
`;

window.onload = () => {
    infoStart.textContent = 'CLICK TO BEGIN';

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
}