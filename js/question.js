let menuEl = document.querySelector('.question');
let answerCardEl;

function dropDownMenu(event) {
    let answerEl = document.querySelectorAll('.question__answer');
    let answerHeaderEl = document.querySelectorAll('.question__answer-header');
    let arrowDownEl = document.querySelectorAll('.question__answer-arrow-down');
    let arrowUpEl = document.querySelectorAll('.question__answer-arrow-up');
    let textEl = document.querySelectorAll('.question__answer-card-text');

    console.log(event.target)
    for(let i = 0; i < answerEl.length; i++) {
        if(event.target !== menuEl && event.target == answerEl[i]) {
            answerCardEl = answerEl[i].parentElement.children[i + 1];
            answerCardEl.classList.toggle('question_active');
        }

        else if(event.target !== menuEl && event.target == answerHeaderEl[i]) {
            answerCardEl = answerHeaderEl[i].parentElement;
            answerCardEl.classList.toggle('question_active');
        }

        else if(event.target !== menuEl && event.target == arrowDownEl[i]) {
            answerCardEl = arrowDownEl[i].parentElement;
            answerCardEl.classList.toggle('question_active');
        }

        else if(event.target !== menuEl && event.target == arrowUpEl[i]) {
            answerCardEl = arrowUpEl[i].parentElement;
            answerCardEl.classList.toggle('question_active');
        }

        else if(event.target !== menuEl && event.target == textEl[i]) {
            answerCardEl = textEl[i].parentElement.parentElement;
            answerCardEl.classList.toggle('question_active');
        }
    }
}

function menuElListener(event) {
    dropDownMenu(event);
  }
menuEl.addEventListener('click', menuElListener);