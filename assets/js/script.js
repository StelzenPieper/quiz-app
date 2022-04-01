//query Selector BOOKMARK
const bookmark = document.querySelector('[data-js="bookmark"]');

//query Selector SHOW-ANSWER Button
const showAnswerBtn = document.querySelector('[data-js="showAnswerBtn"]');

//query Selector SHOW-ANSWER
const showAnswer = document.querySelector(".card__answer");

//query Selector HIDE-ANSWER Button
const hideAnswerBtn = document.querySelector('[data-js="hideAnswerBtn"]');


//EventListener BOOKMARK-CLICK
bookmark.addEventListener('click', () => {
    bookmark.classList.toggle("bookmarked");
})

//EventListener SHOW-ANSWER Button
showAnswerBtn.addEventListener('click', () => {
    showAnswer.classList.toggle("card__showanswer");
    showAnswerBtn.classList.toggle("btn__answer--hide");
    hideAnswerBtn.classList.toggle("btn__answer--show");
})


//EventListener HIDE-ANSWER Button
hideAnswerBtn.addEventListener('click', () => {
    showAnswer.classList.toggle("card__showanswer");
    showAnswerBtn.classList.toggle("btn__answer--hide");
    hideAnswerBtn.classList.toggle("btn__answer--show");
})