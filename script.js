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

  // console.log(sectionArticle.getBoundingClientRect());
  // console.log(btnScroll.getBoundingClientRect());
});

//Page Navigation

document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('links')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Sticky Navigation

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('nav-sticky');
    document.body.style.paddingTop = `-${navHeight}px`;
  } else {
    nav.classList.remove('nav-sticky');
    document.body.style.paddingTop = `0px`;
  }
};

const hearderObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
hearderObs.observe(header);

//Reveal Section
const sectionAll = document.querySelectorAll('.section');

const sectionObserver = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
  });
};

const revealSection = new IntersectionObserver(sectionObserver, {
  root: null,
  threshold: 0.15,
});

sectionAll.forEach(el => {
  revealSection.observe(el);
  el.classList.add('section--hidden');
});

//Faq questions Toggle

document.querySelector('.faq-all').addEventListener('click', function (e) {
  e.preventDefault();

  const container = e.target.closest('.questions-container');

  if (!container) return;
  console.log(e.target);

  if (container.classList.contains('questions-container')) {
    const answer = container.querySelector('.faq-answer');
    const openIcon = container.querySelector('.open-icon');
    const closeIcon = container.querySelector('.close-icon');

    answer.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }
});

//Slider

const slide = function () {
  const carouselSlides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = carouselSlides.length;

  //Functions
  const createDots = function () {
    carouselSlides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}" ></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add('dots__dot--active');
  };

  const goToSlides = function (slide) {
    carouselSlides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlides(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlides(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    goToSlides(0);
    activateDot(0);
  };
  init();

  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      goToSlides(curSlide);
      activateDot(curSlide);
    }
  });
};
slide();
