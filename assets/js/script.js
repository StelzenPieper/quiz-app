import Quizcard from "../components/quizcards/quizcards.js";



const cardElements = document.querySelectorAll('[data-js="quiz-card"]');

cardElements.forEach((cardElement) => {
    Quizcard(cardElement);
});

console.log("cardElement", cardElements);



