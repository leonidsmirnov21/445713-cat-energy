var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var before = document.querySelector('.example-slider__item--before');
var after = document.querySelector('.example-slider__item--after');
var scaleMobile = document.querySelector('.example-slider__scale-inner');
var beforeButton = document.querySelector('.example-slider__scale-before');
var afterButton = document.querySelector('.example-slider__scale-after');

afterButton.addEventListener('click', function() {
  before.classList.add('example-slider__item--none');
  after.classList.remove('example-slider__item--none');
  scaleMobile.classList.add('example-slider__scale-inner--right');
});

beforeButton.addEventListener('click', function() {
  after.classList.add('example-slider__item--none');
  before.classList.remove('example-slider__item--none');
  scaleMobile.classList.remove('example-slider__scale-inner--right');
});
