const questions = [
    {
        question:"¿Para qué sirve alimentarse?",
        answers:[
            {text: "Para engordar, vernos jóvenes y con energía", correct: false},
            {text: "Para protegernos contra las enfermedades, desarrollarnos adecuadamente y tener calidad de vida", correct: true},
            {text: "Para no sentir hambre", correct: false},
            {text: "Para curar enfermedades", correct: false},
        ]
    },
    {
        question:"¿La alimentación y la nutrición son lo mismo?",
        answers:[
            {text: "Sí", correct: false},
            {text: "No", correct: true},
        ]
    },
    {
        question:"¿Cuáles son los macronutrientes?",
        answers:[
            {text: "Vegetales, granos y carnes", correct: false},
            {text: "Carbohidratos, Proteínas y Grasas", correct: true},
            {text: "Leche, harinas, carnes y frutas", correct: false},
            {text: "Carnes, verduras, aceites y azúcar", correct: false},
        ]
    },
    {
        question:"¿Cuántos grupos de alimentos existen en Venezuela?",
        answers:[
            {text: "3", correct: false},
            {text: "8", correct: false},
            {text: "5", correct: true},
            {text: "7", correct: false},
        ]
    },
    {
        question:"El grupo de la azúcar, la miel y el papelón, es un grupo opcional en nuestra dieta alimenticia.",
        answers:[
            {text: "Sí", correct: true},
            {text: "No", correct: false},
        ]
    },
    {
        question:"¿Qué tipos de alimentos debemos comer menos?",
        answers:[
            {text: "Carne, pescado y pollo", correct: false},
            {text: "Huevo, aguacate y frutos secos", correct: false},
            {text: "Pan, papas y arepas", correct: false},
            {text: "Dulces, refrescos y frituras", correct: true},
        ]
    },
    {
        question:"A la semana hay que comer:",
        answers:[
            {text: "Carne roja toda las semana", correct: false},
            {text: "Proteína, Carbohidratos y Grasas", correct: true},
            {text: "Consumir más proteínas que carbohidratos", correct: false},
            {text: "Consumir más carbohidratos y grasas que proteínas", correct: false},
        ]
    },
    {
        question:"¿Cuántas comidas se deben hacer al día?",
        answers:[
            {text: "Sólo 3 comidas", correct: false},
            {text: "De 3 a 5 comidas", correct: true},
            {text: "7 comidas", correct: false},
            {text: "De 1 a 3 comidas", correct: false},
        ]
    },
    {
        question:"¿El plato ideal debemos dividirlo en…?",
        answers:[
            {text: "3 partes", correct: true},
            {text: "5 partes", correct: false},
            {text: "2 partes", correct: false},
            {text: "4 partes", correct: false},
        ]
    },
    {
        question:"¿Los carbohidratos engordan y son dañinos para la salud?",
        answers:[
            {text: "Sí, se deben dejar de comer para bajar de peso y prevenir enfermedades a largo plazo", correct: false},
            {text: "No, los carbohidratos son muy importantes para nuestra alimentación porque nos aportan energía y son los que más tenemos que consumir.", correct: true},
        ]
    },
    {
        question:"¿Cuál de los siguientes alimentos contienen grasas adecuadas y saludables?",
        answers:[
            {text: "Papa y cambur", correct: false},
            {text: "Brócoli y galletas", correct: false},
            {text: "Aguacate y aceite de oliva", correct: true},
            {text: "Mantequilla y margarina", correct: false},
        ]
    },
    {
        question:"Se debe ayunar por muchas horas para bajar de peso",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"El huevo es un alimento poco valorado debido a su contenido de colesterol y grasas",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"Si no recuerdo lo que comí ¿tengo una alimentación consciente?",
        answers:[
            {text: "Sí", correct: false},
            {text: "No", correct: true},
        ]
    },
    {
        question:"Sí como viendo televisión ¿tengo una alimentación consciente?",
        answers:[
            {text: "Sí", correct: false},
            {text: "No", correct: true},
        ]
    },
    {
        question:"Cuando como conscientemente me doy cuenta de que estar satisfecho",
        answers:[
            {text: "Sí", correct: true},
            {text: "No", correct: false},
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
    if (score>= 10){
    questionElement.innerHTML = `¡Felicidades! Has demostrado tener muy buenos conocimientos sobre la Alimentación Saludable, tu puntaje es ${score} de ${questions.length}. ¡Recuerda que siempre podremos ayudarte!`;
    nextButton.innerHTML = "Jugar de Nuevo";
    nextButton.style.display = 'block';
    backButton.style.display = 'block';
    confetti();
    } else {
    questionElement.innerHTML = `bueeee, tu puntaje es ${score} de ${questions.length}. ¡Recuerda que siempre podremos ayudarte!`;
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