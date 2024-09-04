const questions = [
    {
        question:"¿Los TCA pueden pasar desapercibidos?",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"El TCA es una enfermedad psicológica",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"¿Cuáles son los principales trastornos del comportamiento alimentario?",
        answers:[
            {text: "Vigorexia y Ortorexia", correct: false},
            {text: "Bulimia, Pica y atracón", correct: false},
            {text: "Atracón, Bulimia y Anorexia", correct: true},
        ]
    },
    {
        question:"Uno de los síntomas de los TCA es el miedo a engordar",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Uno de los síntomas de tener un TCA es la sensación de pérdida de control a la hora de comer",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Las consecuencias de los TCA pueden ser:",
        answers:[
            {text: "Sociales y emocionales", correct: false},
            {text: "Físicas y psicologicas", correct: false},
            {text: "Físicas y educativas", correct: false},
            {text: "Todas las anteriores", correct: true},
        ]
    },
    {
        question:"¿Los TCA generan consecuencias físicas?",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"¿El miedo a comer es una consecuencia de un TCA?",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"La pérdida de pelo es una consecuencia del TCA",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"¿Los medicamentos antidepresivos son los únicos tratamientos para recuperarse de los TCA?",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"¿Las consecuencias de los TCA se relacionan con verse más bonito y estar saludable?",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"Cuando detectas que tú u otra persona padece un TCA, debes en primer lugar consultar con un ___________ o  ____________",
        answers:[
            {text: "Adulto o especialista", correct: true},
            {text: "Otro amigo y maestro", correct: false},
            {text: "Internet o libros", correct: false},
        ]
    },
    {
        question:"Si un amigo sufre un TCA debes ignorarlo y no ayudarlo",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"¿Para tratar los TCA debes dejar de comer y no contarle a nadie?",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"Para recuperarse de un TCA se requiere el apoyo nutricional y psicológico",
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
        questionElement.innerHTML = `¡Felicidades! Has demostrado tener muy buenos conocimientos sobre los TCA, tu puntaje es ${score} de ${questions.length}. ¡Recuerda que siempre podremos ayudarte!`;
        nextButton.innerHTML = "Jugar de Nuevo";
        nextButton.style.display = 'block';
        backButton.style.display = 'block';
        confetti();
        } else {
        questionElement.innerHTML = `Aunque no gané, estoy feliz por la oportunidad de participar y poner a prueba mis conocimientos sobre los TCA. ¡Recuerda que siempre podremos ayudarte accediendo al módulo!`;
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