const questions = [
    {
        question:"Las habilidades sociales son:",
        answers:[
            {text: "La cantidad de amigos que tenemos", correct: false},
            {text: "La capacidad para desenvolvernos en distintas situaciones sociales", correct: true},
            {text: "La capacidad de bailar en una fiesta", correct: false},
            {text: "Poder ser el centro de atención en una reunión", correct: false},
        ]
    },
    {
        question:"En la comunicación es importante, tener en cuenta:",
        answers:[
            {text: "Cómo estás vestido", correct: false},
            {text: "El olor de la boca", correct: false},
            {text: "El tono de voz, la posición del cuerpo, la distancia con el otro y la mirada hacia el hablante", correct: true},
        ]
    },
    {
        question:"Si alguien no te está escuchando activamente puedes:",
        answers:[
            {text: "Seguir hablando, en algún momento te prestara atención", correct: false},
            {text: "Molestarte, te está faltando el respeto", correct: false},
            {text: "Preguntarle qué le pasa. Decirle si prefieren hablar otro día u ofrecer hablar de otra cosa", correct: true},
        ]
    },
    {
        question:"La empatía es un don que se tiene de nacimiento:",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"Lo mejor para comenzar una conversación son preguntas cerradas",
        answers:[
            {text: "Verdadero", correct: false},
            {text: "Falso", correct: true},
        ]
    },
    {
        question:"Señala cuál de las respuestas es de escucha activa. Tu compañero de tenis se da un golpe con la raqueta y se queja amargamente. Tú le respondes:",
        answers:[
            {text: "Es sólo un pequeño golpe", correct: false},
            {text: "¿Te duele mucho?", correct: true},
            {text: "Tampoco es para tanto", correct: false},
        ]
    },
    {
        question:"Al comenzar una conversación es bueno evitar realizar preguntas demasiado íntimas",
        answers:[
            {text: "Verdadero", correct: true},
            {text: "Falso", correct: false},
        ]
    },
    {
        question:"Estás en una conversación que se silencia. ¿Cuál es la mejor opción?",
        answers:[
            {text: "Te pones ansioso y decides irte", correct: false},
            {text: "Piensas que la otra persona está molesta y decides confrontarla", correct: false},
            {text: "Piensas que el silencio es parte de una conversación, y le dices: Nos quedamos callados, ¿te molestó algo que te dije?", correct: true},
        ]
    },
    {
        question:"Ayer te molestaste, y le gritaste a una amiga para que se fuera de tu casa. Selecciona cuál es la mejor respuesta:",
        answers:[
            {text: "Prefieres no decirle nada, no quieres sentirte débil ante ella", correct: false},
            {text: "La buscas y le dices: amiga, acabo de darme cuenta que tal vez mi comportamiento de antes pudo molestarte, fui un tanto grosera, perdona, estaba un poco ansiosa", correct: true},
            {text: "La buscas y le dices: amiga, soy la peor persona del mundo. No sirvo para nada. Discúlpame. No merezco que me hables", correct: false},
        ]
    },
    {
        question:"¿Cuáles de los siguientes pensamientos son pensamientos asertivos?",
        answers:[
            {text: "No debo decirle palabras lindas porque ellos ya saben cuándo han hecho algo bien y notarán lo que pienso", correct: false},
            {text: "Los demás no pueden leer la mente y conocer lo que pienso. Unas palabras sinceras servirán para comunicarles lo que pienso y siento", correct: true},
            {text: "Me siento raro haciendo cumplidos", correct: false},
        ]
    },
    {
        question:"Me encuentro molesto por el ruido que hace un compañero. Identifica cuál es el pensamiento racional",
        answers:[
            {text: "El no debería comportarse así. Es un imbécil", correct: false},
            {text: "Si le digo lo que siento, se molestará y no me hablará más", correct: false},
            {text: "Me molesta que haga ruido, y es lógico. ¿Cuál es la mejor forma para solicitar que haga silencio?", correct: true},
        ]
    },
    {
        question:"¿Cuándo el otro está molesto, se te acerca y te insulta, que no deberías hacer:",
        answers:[
            {text: "Darle un tiempo para que se calme, y tú también puedas pensar cuál es la mejor forma de tratar el problema", correct: false},
            {text: "Ponerlo en su lugar con un solo grito o golpe", correct: true},
        ]
    },
    {
        question:"Selecciona la respuesta correcta. El pedir un cambio de comportamiento es:",
        answers:[
            {text: "Un derecho asertivo", correct: true},
            {text: "Un deber del otro", correct: false},
            {text: "Una exigencia", correct: false},
        ]
    },
    {
        question:"Cuando queremos pedir algo, ¿cuál sería la recomendación?",
        answers:[
            {text: "Repetir y clarificar lo que pedimos si vemos que hay algún malentendido", correct: false},
            {text: "Explica claramente lo que quieres", correct: false},
            {text: "Sé amable, asertivo, breve y directo", correct: false},
            {text: "Todas las anteriores", correct: true},
        ]
    },
    {
        question:"Estás en una parrillada, el compañero que tienes al lado está fumando, su humo te está molestando. ¿Cuál sería la mejor forma de pedirle un cambio de comportamiento?",
        answers:[
            {text: "Prefieres no decirle nada, igual las otras cosas te gustan", correct: false},
            {text: "Le dices: El humo del cigarrillo me molesta, ¿podrías por favor apagarlo o fumar en otra parte?", correct: true},
            {text: "Le dices: Te vas a morir de cáncer y me vas a matar a mí. ¡Apaga el cigarro!", correct: false},
        ]
    },
    {
        question:"Estás en una reunión y quieren que pruebes un cigarro. A ti no te gusta el cigarro, selecciona la respuesta más asertiva",
        answers:[
            {text: "Decides probarlo para que te dejen tranquila", correct: false},
            {text: "Te molestas y te vas de la reunión", correct: false},
            {text: "Le dices: No, no me gusta el cigarrillo", correct: true},
        ]
    },
    {
        question:"Tienes varias semanas trabajando muy fuerte y quieres ese fin de semana ver solamente películas en tu casa. Tus amigos te escriben para salir, ¿cuál es la respuesta más asertiva?",
        answers:[
            {text: "Les dices: Gracias por la invitación, me encanta salir con ustedes, pero este fin de semana quiero quedarme en la casa descansando, podemos cuadrar para otro momento", correct: true},
            {text: "No le contestas el teléfono para no escucharlos", correct: false},
            {text: "Sales para no decepcionarlo, a pesar que quieres quedarte en tu casa relajándote", correct: false},
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
        questionElement.innerHTML = `¡Felicidades! Has demostrado tener muy buenos conocimientos sobre Habilidades Sociales, tu puntaje es ${score} de ${questions.length}. ¡Recuerda que siempre podremos ayudarte!`;
        nextButton.innerHTML = "Jugar de Nuevo";
        nextButton.style.display = 'block';
        backButton.style.display = 'block';
        confetti();
        } else {
        questionElement.innerHTML = `Aunque no gané, estoy feliz por la oportunidad de participar y poner a prueba mis conocimientos sobre Habilidades Sociales. ¡Recuerda que siempre podremos ayudarte accediendo al módulo!`;
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