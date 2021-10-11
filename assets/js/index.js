const kArtistsQuestions = [
  {
    title: "How many solo albums did DPR IAN  has released?",
    options: ["3", "6", "1", "10"],
    correctAnswer: "1",
  },
  {
    title: "How many members did Big Bang group had in 2018?",
    options: ["2", "4", "1", "5"],
    correctAnswer: "4",
  },
  {
    title: "How many members did History band had?",
    options: ["1", "3", "4", "5"],
    correctAnswer: "5",
  },
];

// let count = movieQuestions.length * 5;
let count = 5;

const constructOptions = function (options) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "options-container");

  for (let i = 0; i < options.length; i++) {
    // get the current option from array
    const option = options[i];

    // create my button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option-item");
    optionButton.textContent = option;

    // append to optionsContainer
    optionsContainer.appendChild(optionButton);
  }

  return optionsContainer;
};

const constructQuestionContainer = function (question) {
  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");

  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question");
  questionH2.textContent = question.title;

  // construct options div
  const options = constructOptions(question.options);

  // appending h2 and options div to container div
  questionContainer.append(questionH2, options);

  return questionContainer;
};

// render question container
const renderQuestionContainer = function () {
  // get the current question
  const currentQuestion = kArtistsQuestions[0];

  // construct the HTML for the question container
  const questionContainer = constructQuestionContainer(currentQuestion);

  // append the container to the document
  document.getElementById("main-container").appendChild(questionContainer);
};

const removeStartContainer = function () {
  // target start container
  const startContainer = document.getElementById("start-container");
  // remove from document
  startContainer.remove();
};
const startTimer = function () {
  // declare the timer tick function
  const timerTick = function () {
    // check if the countdown has reached 0
    if (count >= 0) {
      // render the countdown time in the document
      document.getElementById("countdown").textContent = count;
      count -= 1;
    } else {
      // render game over container
      console.log("GAME OVER");
      clearInterval(timer);
    }
  };

  // declare the timer
  const timer = setInterval(timerTick, 1000);
};

// function to execute when start button is called
const startQuiz = function () {
  // remove start container
  removeStartContainer();

  // render question container
  renderQuestionContainer();

  //start timer
  startTimer();
};

// target the start quiz button
const startButton = document.getElementById("start-quiz");

// add a click event listener and start quiz
startButton.addEventListener("click", startQuiz);
