
const questions = [
    {
        question : "What’s the heaviest organ in the human body?",
        answers: [
            {text: "Brain", correct: false },
            {text: "Liver", correct: true },
            {text: "Skin", correct: false },
            {text: "Heart", correct: false },
        ]
    },
    {
        question : "What is the only food that cannot go bad?",
        answers: [
            {text: "Dark chocolate", correct: false },
            {text: "Peanut butter", correct: false },
            {text: "Canned tuna", correct: false },
            {text: "Honey", correct: true },
        ]
    },
    {
        question : "What element does the chemical symbol Au stand for?",
        answers: [
            {text: "Silver", correct: false },
            {text: "Magnesium", correct: false },
            {text: "Salt", correct: false },
            {text: "Gold", correct: true },
        ]
    },
    {
        question : "In what country do more than half of people believe in elves?",
        answers: [
            {text: "Norway", correct: false },
            {text: "Iceland", correct: true },
            {text: "Russia", correct: false },
            {text: "Holland", correct: false },
        ]
    },
    {
        question : "What sport has been played on the moon?",
        answers: [
            {text: "Golf", correct: true },
            {text: "Soccer", correct: false },
            {text: "Cricket", correct: false },
            {text: "Bocce ball", correct: false },
        ]
    },
    {
        question : "Who among the following wrote Sanskrit grammar?",
        answers: [
            {text: "Kalidasa", correct: false },
            {text: "Charak", correct: false },
            {text: "Panini", correct: true },
            {text: "Aryabhatt", correct: false },
        ]
    },
    {
        question : "MS-Word is an example of _____",
        answers: [
            {text: "An operating system", correct: false },
            {text: "A processing device", correct: false },
            {text: "Application software", correct: true },
            {text: "An input device", correct: false },
        ]
    },
    {
        question : "Ctrl, Shift and Alt are called .......... keys.",
        answers: [
            {text: "modifier", correct: true },
            {text: "function", correct: false },
            {text: "alphanumeric", correct: false },
            {text: "adjustment", correct: false },
        ]
    },
    {
        question : "Which foreign country is closest to Andaman Islands?",
        answers: [
            {text: "Sri Lanka", correct: false },
            {text: "Myanmar", correct: true },
            {text: "Indonesia", correct: false },
            {text: "Pakistan", correct: false },
        ]
    },
    {
        question : "The blue colour of the clear sky is due to",
        answers: [
            {text: "Diffraction of light", correct: false },
            {text: "Reflection of light", correct: false },
            {text: "Refraction of light", correct: false },
            {text: "Dispersion of light", correct: true },
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from (answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scrored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handelNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
