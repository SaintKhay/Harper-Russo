'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const displayFaqAnswer = document.querySelectorAll('.questions-container');
const btnScroll = document.querySelector('.header-btn');
const sectionArticle = document.querySelector('.article-section');
const link = document.querySelectorAll('.links');
const testimonial = document.querySelector('.testimonial-section');
const carousel = [...document.querySelectorAll('.carousel')];

btnScroll.addEventListener('click', function (e) {
  e.preventDefault();
  sectionArticle.scrollIntoView({ behavior: 'smooth' });

  console.log(sectionArticle.getBoundingClientRect());
  console.log(btnScroll.getBoundingClientRect());
});

//Page Navigation

document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains('links')) {
    const id = e.target.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Sticky Navigation
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('nav-sticky');
  } else {
    nav.classList.remove('nav-sticky');
  }
};

const hearderObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '90px',
});
hearderObs.observe(header);

//Faq questions Toggle

document.querySelector('.faq-all').addEventListener('click', function (e) {
  e.preventDefault();

  const container = e.target.closest('.questions-container');
  console.log(container);
  if (!container) return;

  if (e.target.classList.contains('questions-container')) {
    const answer = container.querySelector('.faq-answer');
    const openIcon = container.querySelector('.open-icon');
    const closeIcon = container.querySelector('.close-icon');

    console.log(answer.classList);
    answer.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }
});

// //Testimonial scroll
let currentIndex = 0;

//Initially show the first testimonial
carousel[currentIndex].classList.add('carousel-active');

const dots = document.querySelectorAll('.dot');
//Events

testimonial.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.btn__testimonial');
  if (!clicked) return;

  //Remove active class from current
  carousel.forEach(c => c.classList.remove('carousel-active'));
  dots.forEach(d => d.classList.remove('dot--fill'));

  //Checks if the correct button was clicked and displays the next testimonial
  if (clicked.classList.contains('btn__testimonial')) {
    if (clicked.classList.contains('btn--left')) {
      currentIndex--;
      if (currentIndex < 0) currentIndex = carousel.length - 1;
    } else currentIndex++;

    if (currentIndex < carousel.length) {
    } else {
      currentIndex = 0;
    }
    dots[currentIndex].classList.add('dot--fill');
    carousel[currentIndex].classList.add('carousel-active');
  }
});
