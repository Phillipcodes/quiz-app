 let questions = [
    {
      "question": "Was ist die Abkürzung für HTML?",
      "answer_1": "Hypertext Markup Language",
      "answer_2": "Hyperlinks and Text Markup Language",
      "answer_3": "Home Tool Markup Language",
      "answer_4": "Hyperlinking Text Marking Language",
      "right_answer": 1,
      "button_name": "Nächste Frage"
    },
    {
      "question": "Wer hat HTML erfunden?",
      "answer_1": "Tim Berners-Lee",
      "answer_2": "Steve Jobs",
      "answer_3": "Bill Gates",
      "answer_4": "Mark Zuckerberg",
      "right_answer": 1,
      "button_name": "Nächste Frage"
    },
    {
      "question": "Wann wurde HTML veröffentlicht?",
      "answer_1": "1989",
      "answer_2": "1993",
      "answer_3": "1995",
      "answer_4": "2001",
      "right_answer": 3,
      "button_name": "Nächste Frage"
    },
    {
      "question": "Was bedeutet 'href' in einem <a>-Tag?",
      "answer_1": "Hyperlink Reference",
      "answer_2": "Hypertext Reference",
      "answer_3": "HTML Reference",
      "answer_4": "Hyperlink Resource",
      "right_answer": 2,
      "button_name": "Ergebniss"
    }
  ];



let currentQuestion = 0;  //zeigt den index an an welcher stelle das array grad ist




function showQuestion() {
   let question = questions[currentQuestion] // sagt question jetzt das es das array questions ist and der stelle currenQuestion 
  document.getElementById('question-headline').innerHTML = question[`question`]
  document.getElementById('answer_1').innerHTML = question[`answer_1`]
  document.getElementById('answer_2').innerHTML = question[`answer_2`]
  document.getElementById('answer_3').innerHTML = question[`answer_3`]
  document.getElementById('answer_4').innerHTML = question[`answer_4`]
  document.getElementById('button_name').innerHTML =question[`button_name`]
}

function init() {
    renderStartScreen()
};

function nextQuestion() {
if(currentQuestion < questions.length -1) {
    document.getElementById('questionCards').innerHTML= "";
    renderQuiz();
    currentQuestion++;
    showQuestion();
}else {
    currentQuestion = 4;
    renderEndScreen();
}
incProgress()
};

function renderEndScreen() {
let goal = document.getElementById('questionCards');
goal.innerHTML = "";
goal.innerHTML += `<div class="card-body p-4 text-center flex-column justify-content-center d-flex ">
<img class="result-img" src="./img/brain result.png" alt="">
<p class="card-text"> COMPLETE <br>HTML QUIZ</p>
<p class="card-text"><small class="result-text">YOUR SCORE 1/10</small></p>
</div>
<button onclick="restartQuiz()" type="button " class="btn btn-primary btn-lg mb-2 ">RETRY</button>`
};

function restartQuiz() {
  let progress = document.getElementById('progress');
    currentQuestion = 0;
    progress.innerHTML = ""
    progress.style.width ='1%'
    renderQuiz();
    showQuestion();
   
}

function renderQuiz() {
    let renderQuiz = document.getElementById('questionCards');
    renderQuiz.innerHTML = "";
    renderQuiz.innerHTML += /*html*/`<h5 id="question-headline" class="mb-4"></h5>
    <div id="answer-result-1" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_1')"><button type="button" class="btn btn-primary ">A</button></div>  <span id="answer_1"></span>
        </div>
      </div>
      <div id="answer-result-2" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_2')"><button type="button" class="btn btn-primary ">B</button></div>  <span id="answer_2"></span>
        </div>
      </div>
      <div id="answer-result-3" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_3')"><button type="button" class="btn btn-primary ">C</button></div> <span id="answer_3"></span>
        </div>
      </div>
      <div id="answer-result-4" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_4')"><button type="button" class="btn btn-primary ">D</button></div>  <span id="answer_4"></span>
        </div>
      </div>
      <div class="ms-14"><button id="button_name" onclick="nextQuestion()" type="button " class="btn btn-primary btn-lg mb-2 "></button></div>`
};


function renderStartScreen() {
    let startScreen = document.getElementById('questionCards');
    startScreen.innerHTML = "";
    startScreen.innerHTML = `  <div class="card-body p-4 text-center flex-column justify-content-center d-flex ">
    <p class="card-text">Welcome to The Awesome HTML Quiz</p>
    <p class="card-text"><small class="text-body-secondary">Ready for the Challange?</small></p>
  </div>
  <div onclick="startQuiz()" class="ms-4"><button type="button " class="btn btn-primary btn-lg mb-2 ">Start Quiz</button></div>`
};


function startQuiz() {
    renderQuiz();
    showQuestion();
};


function incProgress() {
    let progress = document.getElementById('progress');
    if ( currentQuestion == 1) {
        progress.innerHTML = "25%"
        progress.style.width = '25%'
    }if ( currentQuestion == 2) {
        progress.innerHTML = "50%"
        progress.style.width = '50%'
    }if ( currentQuestion == 3) {
        progress.innerHTML = "75%"
        progress.style.width = '75%'
    }if ( currentQuestion == 4) {
        progress.innerHTML = "100%"
        progress.style.width = '100%'
    }
}


function answer(selectedAnswer){
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selectedAnswer.slice(-1); // letzte ziffer von answer_x (x= 1,2,3) sprich hier kommt  1,2,3 oder 4 raus
  let targetElement = document.getElementById(selectedAnswer);
  let parentDiv = targetElement.parentNode;
  if(selectedQuestionNumber == question['right_answer']){ // ziffer wird gleich gersettu mit rigght answer und wenn gleich ist wird richtig ausgegeben
    parentDiv.classList.add('bg-success');
    
  }else {
    parentDiv.classList.add('bg-danger');
  }
  
}


