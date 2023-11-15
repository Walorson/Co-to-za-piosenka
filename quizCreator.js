const createBtn = document.getElementById("create-button");
const inputQuizName = document.getElementById("quiz-name");
const inputQuizName2 = document.getElementById("quiz-name2");
const inputQuizAuthor = document.getElementById("quiz-author");
const addQuestion = document.getElementById("addQuestion");
const removeQuestionBtn = document.getElementById("removeQuestion");
const questionsDiv = document.getElementById("questions");
const questionLimitBtn = document.getElementById("question-limit");
const aboutBtn = document.getElementById("about");
const saveBtn = document.getElementById("save");
const importBtn = document.getElementById("import");
const exportBtn = document.getElementById("export");
let quiz; let questions = [];
let currentSave = null;
let quizExist = false;

class Quiz {
    constructor(name) {
        this.name = name;
        this.author = "Anonymous";
        this.questionLimit = 1;
        quizExist = true;
    }
}
class Question {
    constructor() {
        this.id = questions.length+1;
        this.typeOfAudio = ".mp3";

        questionsDiv.innerHTML += `<div class="question" id="question${this.id}">
            <h3>Pytanie ${this.id}</h3>
            <div id="answers${this.id}">
                <p class="space-between"><span>Nazwa audio:</span> <span class="joinElements"><input type="text" id="audio${this.id}" placeholder="AudioName"><select id="typeOfAudio${this.id}"><option>.mp3</option><option>.ogg</option><option>.wav</option></select></span></p>
                <p class="space-between"><span>Poprawna odpowiedź:</span> <input type="text" id="correctAnswer${this.id}"></p>
                <p class="space-between"><span>Błędna odpowiedź 1:</span> <input type="text" id="wrongAnswer${this.id}-1"></p>
            </div>
            <button id="addAnswer${this.id}">Dodaj odpowiedź</button>
            <button id="removeAnswer${this.id}" style="display:none">Usuń odpowiedź</button>
        </div>`;
        this.answers = ["","",""]; //first element: audio, second element: corret answer, third element+: invalid answers

        this.update();
    }
    update() {
        this.answersDiv = document.getElementById(`answers${this.id}`)
        this.addAnswer = document.getElementById(`addAnswer${this.id}`);
        this.removeAnswer = document.getElementById(`removeAnswer${this.id}`);
        this.typeOfAudioDiv = document.getElementById(`typeOfAudio${this.id}`);
        this.addAnswer.onclick = () => {
            this.answers.push("");

            this.addAnswerFunction();

            this.update();
        }
        this.removeAnswer.onclick = () => {
            document.getElementById(`wrongAnswer${this.id}-${this.answers.length-2}`).remove();
            this.answers.pop();

            if(this.answers.length > 3) this.removeAnswer.style.display = "";
            else this.removeAnswer.style.display = "none";

            this.update();
        }
        this.typeOfAudioDiv.value = this.typeOfAudio;
        this.typeOfAudioDiv.oninput = () => { this.typeOfAudio = this.typeOfAudioDiv.value; }

        const inputsAnswer = this.answersDiv.querySelectorAll("input");
        inputsAnswer.forEach((item, index) => {
            item.value = this.answers[index];
            item.oninput = () => { this.answers[index] = item.value; }
        });
    }
    addAnswerFunction(iterator = this.answers.length-2) {
        this.answersDiv.innerHTML += `<p class="space-between" id="wrongAnswer${this.id}-${iterator}"><span>Błędna odpowiedź ${iterator}:</span> <input type="text"></p>`;

        if(this.answers.length > 3) this.removeAnswer.style.display = "";
        else this.removeAnswer.style.display = "none";
    }
}

createBtn.addEventListener("click",() => {
    if(inputQuizName.value.length < 2) {
        document.getElementById("error-span").textContent = "Nazwa quizu musi zawierać minimum 2 znaki.";
    }
    else if(!inputQuizName.value.isAlphaNumeric()) {
        document.getElementById("error-span").textContent = "Nazwa quizu musi się składać ze znaków alfanumerycznych.";
    }        
    else 
    {
        quiz = new Quiz(document.getElementById("quiz-name").value);
        document.getElementById("quiz-name2").value = quiz.name;

        createQuestion();
        changeWindow();
    }
});
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

const changeWindow = () => {
    box1.classList.add("hidden");
    box2.classList.remove("hidden");
    importBtn.removeAttribute("disabled");
    importTextarea.value = "";
}
const createQuestion = () => {  
    questions.push(new Question);
    if(questions.length > 1) questions[questions.length-1].typeOfAudio = questions[questions.length-2].typeOfAudio;
    questions.forEach(item => { item.update(); });
    updateQuestionLimit();
}
const removeQuestion = () => {
    document.getElementById(`question${questions[questions.length-1].id}`).remove();
    questions.pop();
    updateQuestionLimit();
}
const updateQuestionLimit = () => {
    quiz.questionLimit = questions.length;
    questionLimitBtn.value = questions.length;
}
addQuestion.addEventListener("click",createQuestion);
removeQuestionBtn.addEventListener("click",removeQuestion);

questionLimitBtn.addEventListener("input",() => { quiz.questionLimit = questionLimitBtn.value; });

aboutBtn.addEventListener("click",() => {
    alert('Jest to program utworzony przez Szymona Gniadka (pseudonim Walorson) w celu łatwego i szybkiego tworzenia swoich quizów do gry ,,Co to za piosenka?".')
});

///////////////// IMPORT MODULE //////////////////////
const importWindow = document.getElementById("import-window");
const importTextarea = importWindow.querySelector("textarea");
const loadBtn = document.getElementById("load-file-button");
const loadMenuBtn = document.getElementById("load-button");
const cancelLoadBtn = document.getElementById("cancel-button");

const showLoadWindow = () => {
    if(importWindow.isHide)
        importWindow.show();
    else
        importWindow.hide();
}
importBtn.addEventListener("click",showLoadWindow);
loadMenuBtn.addEventListener("click",showLoadWindow);
cancelLoadBtn.addEventListener("click",() => { importWindow.hide(); });
loadBtn.addEventListener("click",() => {
    let error = setTimeout(() => { alert("Błędny Zapis pliku!") },100);
    currentSave = JSON.parse(importTextarea.value);
    clearTimeout(error);

    if(!quizExist) {
        quiz = new Quiz(document.getElementById("quiz-name").value);
        changeWindow();
    }
    importWindow.hide();

    importTextarea.value = "";

    quiz.name = currentSave.name;
    quiz.author = currentSave.author;
    quiz.questionLimit = currentSave.questionLimit;
    questions = [];
    document.querySelectorAll(".question").forEach(item => { item.remove(); });
    for(let i=0; i < currentSave.questionsCount; i++) {
        let q = new Question();
        q.answers = currentSave.questions[i].answers;
        q.typeOfAudio = currentSave.questions[i].typeOfAudio;
        for(let j=3; j < q.answers.length; j++) {
            q.addAnswerFunction(j-1);
        }
        questions.push(q);
    }
    questions.forEach(item => { item.update(); });
    inputQuizName2.value = quiz.name;
    inputQuizAuthor.value = quiz.author;
    questionLimitBtn.value = quiz.questionLimit;

    greenBlock.appearDisappear();
});

inputQuizName2.addEventListener("input",() => {
    quiz.name = inputQuizName2.value;
});

exportBtn.addEventListener("click",() => {
/////////////////////////// VALIDATION //////////////////////////////////////////////
    if(quiz.questionLimit > questions.length) {
        alert("Limit pytań jest większy od ilości pytań!");
        questionLimitBtn.makeRedBorder(); return;
    }
    else if(quiz.questionLimit < 1) {
        alert("Nieprawidłowa wartość limitu pytań. Minimalnie musi wynosić 1!");
        questionLimitBtn.makeRedBorder(); return;
    }
    else questionLimitBtn.removeBorder();

    if(inputQuizName2.value.length < 2) {
        alert("Liczba znaków quizu musi wynosić minimum 2 znaki!");
        inputQuizName2.makeRedBorder(); return;
    }
    else if(!inputQuizName2.value.isAlphaNumeric()) {
        alert("Nazwa quizu musi składać się ze znaków alfanumerycznych! (A-Z, 0-9)");
        inputQuizName2.makeRedBorder(); return;
    }
    else inputQuizName2.removeBorder();

    if(inputQuizAuthor.value.length < 1) {
        inputQuizAuthor.value = 'Anonymous';
    }

///////////////////////////// SCRIPT ///////////////////////////////////

    let script = `/////////// customSongs -> ${quiz.name} //////////////
///// Generated by QuizCreator for 'What is that song?' /////
///// AUTHOR: ${inputQuizAuthor.value} //////
const questionLimit = ${quiz.questionLimit};
let question = new Array();`;
    for(let i=0; i<questions.length; i++) {
        let scriptAnswers = "";
        for(let j=1; j<questions[i].answers.length; j++) {
            scriptAnswers += `,"${questions[i].answers[j]}"`;
        }
        script += `\nquestion[${i}] = new Question("audio/${questions[i].answers[0]}${questions[i].typeOfAudio}"${scriptAnswers});`
    }
script += `\n\ngetRandomQuestion(questionLimit);`;

    let html = `<!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Co to za piosenka?</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="${inputQuizAuthor.value}">
    
        <link rel="stylesheet" href="../../css/main.css">
        <link rel="stylesheet" href="../../css/question.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="blackScreen"><div class="infoStart">CLICK TO BEGIN</div></div>
        <div class="header">
            <div class="question" id="counter">1/${quiz.questionLimit}</div>
            <div class="question">Co to za piosenka?</div>
            <div class="question" id="timer"></div>
        </div>
        <div class="answers" id="answers"> </div>
        <script>let path = "../";</script>
        <script src="../../question.js"></script>
        <script src="${quiz.name}.js"></script>
    </body>
    </html>`;
    let jsFile = new Blob([script],{ type: "text/plain;charset=utf-8" });
    let htmlFile = new Blob([html],{ type: "text/plain;charset=utf-8" });
    let jsonFile = saveToFile();
    const zip = new JSZip();
    const folder = zip.folder(`${quiz.name}`);
    folder.file(`${quiz.name}.html`,htmlFile);
    folder.file(`${quiz.name}.js`,jsFile);
    folder.file(`${quiz.name}-save.json`, jsonFile)
    folder.folder(`audio`);
    zip.generateAsync({type: "blob"}).then((content) => {
        saveAs(content, `${quiz.name}.zip`);
    });
});
saveBtn.addEventListener("click",() => {
    let jsonFile = saveToFile();
    saveAs(jsonFile, `${quiz.name}-save.json`);
});
const saveToFile = () => {
    let json = 
    `{
        "name": "${quiz.name}",
        "author": "${inputQuizAuthor.value}",
        "questionLimit": ${quiz.questionLimit},
        "questionsCount": ${questions.length},
        "questions": [
    `;
    for(let i=0; i < questions.length; i++) {
        let answersJSON = "[";
        for(let j=0; j<questions[i].answers.length; j++) {
            answersJSON += `"${questions[i].answers[j]}",`;
        }
        answersJSON = answersJSON.substring(0, answersJSON.length-1);
        answersJSON += "]";

        //Tablica pytań
        json += `{
            "id": ${questions[i].id},
            "answers": ${answersJSON},
            "typeOfAudio": "${questions[i].typeOfAudio}"
        },`
    }
    json = json.substring(0,json.length-1);
    json += "]\n}";

    let jsonFile = new Blob([json],{ type: "text/plain;charset=utf-8" });
    return jsonFile;
}

String.prototype.isAlphaNumeric = function() {
    for(let i=0; i < this.length; i++) {
        code = this.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
}
Object.prototype.makeRedBorder = function() {
    this.style.border = "2px solid red";
}
Object.prototype.removeBorder = function() {
    this.style.border = "";
}
Object.prototype.isHide = true;
Object.prototype.show = function() {
    this.style.display = "block";
    this.isHide = false;
}
Object.prototype.hide = function() {
    this.style.display = "none";
    this.isHide = true;
}
Object.prototype.appearDisappear = function() {
    this.style.opacity = "1";
    this.style.transform = 'translateY(-50px)';

    setTimeout(() => {
        this.style.opacity = "0";
        this.style.transform = 'translateY(50px)';
    },1750)
}
/////////// Check if the file has been saved! //////////////
box2.addEventListener("click",() => {
    window.onbeforeunload = () => { return "Are you sure?"; }
});
saveBtn.addEventListener("click",() => {
    window.onbeforeunload = () => { ; }
})
exportBtn.addEventListener("click",() => {
    window.onbeforeunload = () => { ; }
})
/////////// ANIMATIONS SECTION ////////////
const greenBlock = document.getElementById("green-block");