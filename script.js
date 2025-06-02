'use strict';
// const displayFaqAnswer = document.querySelectorAll('.questions-container');

// displayFaqAnswer.addEventListener('click', () => {
//   const faqAnswer = document.querySelector('.faq-answer');
//   faqAnswer.forEach(ans => ans.classList.toggle('hidden'));
// });

const displayFaqAnswer = document.querySelectorAll('.questions-container');

displayFaqAnswer.forEach(container => {
  container.addEventListener('click', () => {
    const answer = container.querySelector('.faq-answer');

    const openIcon = container.querySelector('.open-icon');
    const closeIcon = container.querySelector('.close-icon');
    answer.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
});
