function res() {
  var navItems = document.querySelector(".nav-items");
  var mobileOne = document.querySelector(".mobile1");
  var mobileTwo = document.querySelector(".mobile2");
  var mobileThree = document.querySelector(".mobile3");
  navItems.classList.toggle("active");
  mobileOne.classList.toggle("active");
  mobileTwo.classList.toggle("disable");
  mobileThree.classList.toggle("active");
}

function toggleMood() {
  var lightMood = document.querySelector(".light-mood");
  var header = document.querySelector("header");
  var body = document.querySelector("body");
  var package1 = document.querySelector(".package1");
  var package2 = document.querySelector(".package2");
  var about = document.querySelector(".about");
  lightMood.classList.toggle("active");
  header.classList.toggle("toggle");
  body.classList.toggle("active");
  package1.classList.toggle("toggle");
  package2.classList.toggle("toggle");
  about.classList.toggle("toggle");
}

window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  const scrollTop = document.querySelector('.scroll-top');
  header.classList.toggle('active', window.scrollY>80);
  scrollTop.classList.toggle('active', window.scrollY>80);
})

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function btnDown(){
  document.body.scrollTop = 400;
  document.documentElement.scrollTop = 400;
}

function formShow1(){
  const curtain1 = document.querySelector(".form-curtain1");
  curtain1.classList.add('disable');
}
function formShow2(){
  const curtain2 = document.querySelector(".form-curtain2");
  curtain2.classList.add('disable');
}