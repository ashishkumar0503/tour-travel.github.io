let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

var fromP = document.querySelector('#fromPlace');
var toP = document.querySelector('#toPlace');
var people = document.querySelector('#guests');
var leaving = document.querySelector('#leaving');
var returning = document.querySelector('#returning');

function book(){
  if(fromP.value == '' || toP.value == '' || people.value == '' || leaving.value == '' || returning.value == ''){
    alert("Please fill out all the fields");
  } 
  else {
    alert("Your booking has been done successfully");
  }
};

let email = document.querySelector("#emailText");

function subscribe(){
  if(email.value == ''){
    alert("Please provide email");
  } else{
    alert("Subscribed successfully");
  }
};

function bookNow(){
  if(fromP == " " || toP == " " || people == " ") {
    alert("Please fill out all the fields.");
  } else {
    alert("Booking successfully done...");
  }
};

var typed = new Typed(".auto-input", {
    strings: ["WORTHWHILE", "WANDERLUST", "EXCITING", "TO TRAVEL TO LIVE"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

function canSubmit(){
    var pwd = document.forms[0].txtPassword.value
    var cpwd = document.forms[0].txtConfirmPassword.value
    if(pwd == cpwd){
        alert("Account Created Successfully");
        return true;
    }
    else{
        alert("Please make sure that Password and Confirm Password are same..!!");
        return false;
    }
};

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


var swiperCard = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});