const questions = [
    {
        question:"¿La salud mental se basa en sentirse siempre alegre?",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"¿El alegrarse por un regalo muy anhelado es un sentimiento de placer?",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Tomar decisiones bien pensadas es parte del elemento mental",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"El bienestar físico puede afectar en nuestra salud mental, pero no es lo único que afecta a la salud mental",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"El estar siempre molesto con los demás es un sentimiento de...",
        answers:[
            {text: "Alegría", correct: false},
            {text: "Ira", correct: true},
            {text: "Miedo", correct: false},
        ]
    },
    {
        question:"Cuando nos sentimos tristes estamos decaídos",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Una reacción de sorpresa no siempre es por algo que nos gusta",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Sentirse excluido es una característica del rechazo",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"La alegría es peligrosa porque no nos permite ver el peligro",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"La tristeza nos ayuda a reconocer lo que perdimos, a querer mejorar y a buscar sanar",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"Sentirte insatisfecho contigo mismo corresponde a tener una autoaceptación baja",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Para ser feliz hay que trabajar en uno mismo",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Nuestra felicidad depende de lo que los demás hagan con nuestra vida",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"El amor propio implica ser egoísta o narcisista y no tener una actitud de cuidado y respeto hacia uno mismo para resaltar entre las personas",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"Las personas que se quieren a sí, reconocen sus atributos y cuando hacen cosas que no les gustan se tratan con respeto y buscan mejorarlo",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    backButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    if (score>= 8){
        questionElement.innerHTML = `¡Felicidades! Has demostrado tener muy buenos conocimientos sobre el Bienestar Emocional, tu puntaje es ${score} de ${questions.length}. ¡Recuerda que siempre podremos ayudarte!`;
        nextButton.innerHTML = "Jugar de Nuevo";
        nextButton.style.display = 'block';
        backButton.style.display = 'block';
        confetti();
        } else {
        questionElement.innerHTML = `Aunque no gané, estoy feliz por la oportunidad de participar y poner a prueba mis conocimientos sobre el Bienestar Emocional. ¡Recuerda que siempre podremos ayudarte accediendo al módulo!`;
        nextButton.innerHTML = "Jugar de Nuevo";
        nextButton.style.display = 'block';
        backButton.style.display = 'block';
        confetti();
        }
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();