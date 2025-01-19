const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  
  const options = document.querySelectorAll(".option");
  options.forEach((button, index) => {
    button.textContent = question.options[index];
    button.disabled = false;  // Enable buttons for the next question
  });

  document.getElementById("next-btn").style.display = "none"; // Hide next button initially
}

function checkAnswer(selectedOptionIndex) {
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
  if (selectedOptionIndex === correctAnswerIndex) {
    score++;
  }

  // Disable all options after answering
  const options = document.querySelectorAll(".option");
  options.forEach(button => {
    button.disabled = true;
  });

  document.getElementById("next-btn").style.display = "block"; // Show the next button
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = `Your score: ${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
  loadQuestion();
}

// Initialize the quiz
loadQuestion();
