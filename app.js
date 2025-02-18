const quizData = [
  {
    question: "How old was Tom Cruise in 2024?",
    a: "20",
    b: "35",
    c: "60",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programing language in 2025?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of US?",
    a: "Ronald Regan",
    b: "Donald Trump",
    c: "Dolly Parton",
    d: "Cher",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notification",
    d: "Helicopters Terminal Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "1993",
    correct: "b",
  },
];

const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

const btnEl = document.querySelector("#btn");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

btnEl.addEventListener("click", () => {
  currentQuiz++;

  loadQuiz();
});
