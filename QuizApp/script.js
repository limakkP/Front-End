const quizData = [
    {
        question: '2+2=?',
        a:'17',
        b:'10',
        c:'4',
        d:'5',
        correct:'c'
    }, {
        question: '5+5=?',
        a: '7',
        b: '8',
        c: '9',
        d: '10',
        correct: 'd'
    }, {
        question: '4+4=?',
        a: '2',
        b: '4',
        c: '6',
        d: '8',
        correct: 'd'
    }, {
        question: '6+6=?',
        a: '4',
        b: '12',
        c: '8',
        d: '6',
        correct: 'b'
    }, {
        question: '10+10=?',
        a: '10',
        b: '40',
        c: '30',
        d: '20',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});