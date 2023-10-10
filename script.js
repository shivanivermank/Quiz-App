const questions=[
    {
        question:"Which type of Javascript langauge is ? ",
        answer:[
            {text:"Object-Oriented" ,correct:false},
            {text:"Object-Based" ,correct:true},
            {text:"Assembly language" ,correct:false},
            {text:"High level" ,correct:false},
        ]
    },
    {
        question:"The function and var are known as? ",
        answer:[
            {text:"Keywords" ,correct:false},
            {text:"data type" ,correct:false},
            {text:"Declaration statements" ,correct:true},
            {text:"Prototype" ,correct:false},
        ] 
    },
    {
        question:"which of the following type of a variable is volatile? ",
        answer:[
            {text:"Mutable" ,correct:true},
            {text:"Dynamic variable" ,correct:false},
            {text:"volatile variable" ,correct:false},
            {text:"Immutable variable" ,correct:false},
        ]  
    },
    {
        question:"which of the following number object function returns the value of the number? ",
        answer:[
            {text:"toString()" ,correct:false},
            {text:"valueof()" ,correct:true},
            {text:" toLocalstring()" ,correct:false},
            {text:"toprecision()" ,correct:false},
        ]   
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");
let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +  " ." + currentQuestion.
    question;


   currentQuestion.answer.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct=answer.correct;
     }
     button.addEventListener("click",selectAnswer);

   });
}

function resetState(){
    nextButton.style.display='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;

    });
    nextButton.style.display ='block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}


  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
  };

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
