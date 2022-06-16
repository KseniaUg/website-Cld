const burger = document.querySelector('.nav__burger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');

if (burger) burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navigation.classList.toggle('active');
  body.classList.toggle('body-static');
});




const accordion__top =  document.querySelector('.accordion__top');
const bottom = document.querySelector('.accordion__bottom');

accordion__top.addEventListener('click', () => {
  accordion__top.classList.toggle('ui-state-active');
  bottom.classList.toggle('ui-state-active');
})



$(function () {
  $(".accordion__list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  });
});

const searchOpen = document.querySelector('.search__btn');
const search =  document.querySelector('.search');
const searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click', () => {
  search.classList.add('search--open');
  searchOpen.classList.add('search--close')
});

searchClose.addEventListener('click', () => {
  search.classList.remove('search--open');
  searchOpen.classList.remove('search--close')

});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pag',
    clickable: true,
  },
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(btn => {
        btn.classList.remove('tabs-nav__btn--active')
    })
  e.currentTarget.classList.add('tabs-nav__btn--active');


  tabsItem.forEach(element => {
    element.classList.remove('tabs-item--active');
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')
  })
  })
});






