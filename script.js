const quizData = [
  {
    question: "Which formula represents Newton’s Second Law?",
    choices: ["F = ma", "E = mc²", "P = IV", "W = mg"],
    answer: "F = ma"
  },
  {
    question: "What is the pH of a neutral solution?",
    choices: ["0", "7", "14", "10"],
    answer: "7"
  },
  {
    question: "Where does photosynthesis occur in plant cells?",
    choices: ["Nucleus", "Mitochondria", "Chloroplast", "Cytoplasm"],
    answer: "Chloroplast"
  }
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("startBtn");
const notesEl = document.getElementById("notes");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");

startBtn.addEventListener("click", () => {
  notesEl.classList.add("hidden");
  loadQuestion();
});

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  questionEl.classList.remove("hidden");
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      if (choice === q.answer) score++;
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showScore();
      }
    };
    choicesEl.appendChild(btn);
  });
}

function showScore() {
  questionEl.classList.add("hidden");
  choicesEl.classList.add("hidden");
  scoreEl.classList.remove("hidden");
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

