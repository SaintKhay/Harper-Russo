'use strict';

const displayFaqAnswer = document.querySelectorAll('.questions-container');
const btnScroll = document.querySelector('.header-btn');
const sectionArticle = document.querySelector('.article-section');
const link = document.querySelectorAll('.links');

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

btnScroll.addEventListener('click', function (e) {
  e.preventDefault();
  sectionArticle.scrollIntoView({ behavior: 'smooth' });

  console.log(sectionArticle.getBoundingClientRect());
  console.log(btnScroll.getBoundingClientRect());
});

//Page Navigation

document.querySelectorAll('.links').forEach(element =>
  element.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  })
);
