const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is the largest desert in the world?",
        answers: [
            {text: "Gobi", correct: false},
            {text: "Kalahari", correct: false},
            {text: "Saharaa", correct: false},
            {text: "Antarictica", correct: true},
        ]
    },
    {
    question: "which is the smallest continent in the world?",
    answers: [
        {text: "Asia", correct: false},
        {text: "Australia", correct: true},
        {text: "Arctica", correct: false},
        {text: "Africa", correct: false},
    ]
}
];
const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();

}
  
function showQuestion(){
     resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.foreach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer());
    });
}

function resetState(){

    nextButton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct")
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerbuttons.children).foreach(button => {
          if (button.dataset.correct === "true") {
            button.classList.add("correct");
          }     
          button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showscore(){
        resetState();
        questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else {
        showscore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
    });
startQuiz();

