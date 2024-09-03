// Add Loading Screen 
setTimeout(function () {

  $("#loading-wrapper").fadeToggle();

}, 3000); 

// make navbar sticky
window.addEventListener('scroll', function(){

  let header = this.document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);

})

// Toggle humberger icon 

let btn = document.querySelector(".humberger");
let links = document.querySelector(".show");
let heroSection = document.querySelector(".hero");


btn.addEventListener('click', function() {

  links.classList.toggle("show");
  heroSection.style.paddingTop = "350px";

});

// Scroll To Top 
let scrollBtn = document.querySelector(".scroll-to-top");

window.onscroll = function () {

  if (this.scrollY > 1000) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

};

scrollBtn.addEventListener('click', function() {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })

});



