export default function Quizcard(cardElement) {
  const quizCardBtn = cardElement.querySelector('[data-js="card-Btn"]');

  const cardAnswer = cardElement.querySelector('[data-js="show-answer"]');

  const bookmark = cardElement.querySelector('[data-js="bookmark"]');

  let showAnswer = false;

  quizCardBtn.addEventListener("click", () => {
    showAnswer = !showAnswer;

    if (!showAnswer) {
      quizCardBtn.textContent = "SHOW ANSWER";
      cardAnswer.classList.toggle("hide");
    } else {
      quizCardBtn.textContent = "HIDE ANSWER";
      cardAnswer.classList.toggle("hide");
    }
  });

  //EventListener BOOKMARK-CLICK
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmarked");
  });
}
