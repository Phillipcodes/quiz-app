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
      "button_name": "Ergebnis"
    }
  ];

  let questionsJS = [
    {
      "question": "Was ist die Abkürzung für JavaScript?",
      "answer_1": "Java Standard Markup Language",
      "answer_2": "JavaScript and Text Markup Language",
      "answer_3": "Java System Markup Language",
      "answer_4": "JavaScript Object Notation",
      "right_answer": 4,
      "button_name": "Nächste Frage"
    },
    {
      "question": "Wer hat JavaScript erfunden?",
      "answer_1": "Tim Berners-Lee",
      "answer_2": "Brendan Eich",
      "answer_3": "Bill Gates",
      "answer_4": "Mark Zuckerberg",
      "right_answer": 2,
      "button_name": "Nächste Frage"
    },
    {
      "question": "Wann wurde JavaScript veröffentlicht?",
      "answer_1": "1989",
      "answer_2": "1993",
      "answer_3": "1995",
      "answer_4": "2001",
      "right_answer": 3,
      "button_name": "Nächste Frage"
    },
    {
      "question": "Was bedeutet 'DOM' in JavaScript?",
      "answer_1": "Document Object Model",
      "answer_2": "Data Object Model",
      "answer_3": "Digital Output Method",
      "answer_4": "Document Oriented Middleware",
      "right_answer": 1,
      "button_name": "Ergebnis"
    }
  ];


let currentQuestion = 0;  //zeigt den index an an welcher stelle das array grad ist
let score = 0
let questionField = 1;


function showQuestion() {
   let question = questions[currentQuestion] // sagt question jetzt das es das array questions ist and der stelle currenQuestion 
  document.getElementById('question-headline').innerHTML = question[`question`]
  document.getElementById('answer_1').innerHTML = question[`answer_1`]
  document.getElementById('answer_2').innerHTML = question[`answer_2`]
  document.getElementById('answer_3').innerHTML = question[`answer_3`]
  document.getElementById('answer_4').innerHTML = question[`answer_4`]
  document.getElementById('button_name').innerHTML =question[`button_name`]
}

function showJsquestions() {
  let JsQuestion = questionsJS[currentQuestion] // sagt question jetzt das es das array questions ist and der stelle currenQuestion 
  document.getElementById('question-headline').innerHTML = JsQuestion[`question`];
  document.getElementById('answer_1').innerHTML = JsQuestion[`answer_1`];
  document.getElementById('answer_2').innerHTML = JsQuestion[`answer_2`];
  document.getElementById('answer_3').innerHTML = JsQuestion[`answer_3`];
  document.getElementById('answer_4').innerHTML = JsQuestion[`answer_4`];
  document.getElementById('button_name').innerHTML = JsQuestion[`button_name`]
}

function init() {
    renderStartScreen()
};

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    if (questionField === 1) { 
      document.getElementById('questionCards').innerHTML = "";
      renderQuiz();
      currentQuestion++;
      showQuestion();
    } else {
      document.getElementById('questionCards').innerHTML = "";
      renderQuiz();
      currentQuestion++;
      showJsquestions();
    }
  } else {
    currentQuestion = 4;
    renderEndScreen();
  }

  incProgress();
}
function renderEndScreen() {
let goal = document.getElementById('questionCards');
goal.innerHTML = "";
goal.innerHTML += `<div class="card-body p-4 text-center flex-column justify-content-center d-flex ">
<img class="result-img" src="./img/brain result.png" alt="">
<p class="card-text"> COMPLETE <br>HTML QUIZ</p>
<p class="card-text"><small class="result-text">YOUR SCORE ${score}/4</small></p>
</div>
<button onclick="restartQuiz()" type="button " class="btn btn-primary btn-lg mb-2 ">RETRY</button>`
};

function restartQuiz() {
  let progress = document.getElementById('progress');
    score = 0
    currentQuestion = 0;
    progress.innerHTML = ""
    progress.style.width ='1%'
    renderQuiz();
   if(questionField === 1) {
    showQuestion();
   }else {
    showJsquestions();
   }
   
}

function renderQuiz() {
    let renderQuiz = document.getElementById('questionCards');
    renderQuiz.innerHTML = "";
    renderQuiz.innerHTML += /*html*/`<h5 id="question-headline" class="mb-4"></h5>
    <div id="answer-result-1" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_1')"><button type="button" id=button-a class="btn btn-primary  ">A</button></div>  <span id="answer_1"></span>
        </div>
      </div>
      <div id="answer-result-2" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_2')"><button type="button" id=button-b class="btn btn-primary ">B</button></div>  <span id="answer_2"></span>
        </div>
      </div>
      <div id="answer-result-3" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_3')"><button type="button" id=button-c class="btn btn-primary ">C</button></div> <span id="answer_3"></span>
        </div>
      </div>
      <div id="answer-result-4" class="card mb-4 quiz-hover">
        <div class="card-body p-1">
           <div onclick="answer('answer_4')"><button type="button" id=button-d class="btn btn-primary ">D</button></div>  <span id="answer_4"></span>
        </div>
      </div>
      <div class="ms-14"><button id="button_name" onclick="nextQuestion()" type="button " class="btn btn-primary btn-lg mb-2 disabled "></button></div>`
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
  if(questionField === 1) {
    renderQuiz();
    showQuestion();
  }else {
  renderQuiz();
  showJsquestions();
  }

   
}

function incProgress() {
    let progress = document.getElementById('progress'); // schaut welche frage aktuell dran ist in dem sie currentQuestion vergleicht und added dann ein style zur progress bar um den progress anzuzeigen
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
  let question = questionField === 1 ? questions[currentQuestion] : questionsJS[currentQuestion]; // wenn questionfield eins ist wird die erste bedingung question[curreQuestion] ausgführt wenn questonField nicht eins ist wird die JS fragen ausgeführt für die richrigen antworten
  let selectedQuestionNumber = selectedAnswer.slice(-1); // letzte ziffer von answer_x (x= 1,2,3) sprich hier kommt  1,2,3 oder 4 raus
  let targetElement = document.getElementById(selectedAnswer); // targeElement ist jetzt gleich selectedAnswer
  let parentDiv = targetElement.parentNode; //  targetElement hat jettzt die eigenschaft etwas dem eltern div hinzuzufügen
  let idOfRightAnswer = `answer_${question['right_answer']}`; // idOfRightAnswer ist jett answer_+ die varialbe der right answer die druch selectedAnswer.splice herrausgenommen wird und hier wieder eingefügt wird
  
  if(selectedQuestionNumber == question['right_answer']){ // ziffer wird gleich gersettu mit rigght answer und wenn gleich ist wird richtig ausgegeben
    parentDiv.classList.add('bg-success');
    score++
    
  }else {
    parentDiv.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
  }
  document.getElementById('button_name').classList.remove('disabled');
  disableButtons()
}

function disableButtons() {
  let disableAll = document.querySelectorAll('#button-a, #button-b, #button-c, #button-d');
  disableAll.forEach(elementDisable => {
    elementDisable.parentNode.classList.add('disabled');
  });
}

function loadHTMLQuestions() {
 questionField = 1
 currentQuestion = 0;
 document.getElementById('html-button').classList.remove('color-grey')
 document.getElementById('js-button').classList.add('color-grey')
 renderQuiz();
 showQuestion();
}

function loadJSQuestions() {
let effect = document.getElementById('js-button')
questionField = 2
currentQuestion = 0;
effect.classList.remove('color-grey');
document.getElementById('html-button').classList.add('color-grey')
renderQuiz()
showJsquestions();
}