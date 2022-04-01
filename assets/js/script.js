import Quizcard from "../components/quizcards/quizcards.js";

const cardElements = document.querySelectorAll('[data-js="quiz-card"]');

cardElements.forEach((cardElement) => {
    Quizcard(cardElement);
});

//import Navigation from "../components/nav/nav.js";


import Navigation from "../components/nav/nav.js";

Navigation();





