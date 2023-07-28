

/*CREDIT: Chris Coyier https://css-tricks.com/sticky-smooth-active-nav/*/
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
  
    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (
        (section.offsetTop <= fromTop || section.offsetTop - fromTop <= 10) &&
        section.offsetTop + section.offsetHeight > fromTop
        
      ) {
        link.classList.add("current");
      } 
      else {
        link.classList.remove("current");
      }
    });
  });


/*CREDIT: Alleto Trigo https://alletotrigo.com/blog/css-animations-scroll/*/
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// CREDIT: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
let i = 0;
let txt = "Hi, I'm Lisa! Welcome to my portfolio.";
let speed = 50;
let welcomeBanner = document.getElementById("welcome-banner");

function typeWriter() {
  if (i < txt.length) {
    if(i === 0){
      welcomeBanner.innerHTML += '<span id="emphasis">';
      welcomeBanner = document.getElementById("emphasis");
     
    }
    welcomeBanner.innerHTML += txt.charAt(i);
    if(i === 12){
      document.getElementById("welcome-banner").innerHTML += '</span><br/>';
      welcomeBanner = document.getElementById("welcome-banner");
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
    typeWriter(); // Call the function immediately on startup
}; 


function openNav() {
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";
};

function closeNav() {
  console.log("closed")
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

const openButton = document.getElementById('openbtn');
openButton.addEventListener('click', openNav);

const closeButton = document.getElementById('closebtn');
closeButton.addEventListener('click', closeNav);

 // Get the button element
 var backToTopBtn = document.getElementById("backToTopBtn");

 // Show the button when the user scrolls down 200px from the top of the document
 window.onscroll = function () {
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
     backToTopBtn.style.display = "block";
   } else {
     backToTopBtn.style.display = "none";
   }
 };

 // Scroll back to the top when the button is clicked
 backToTopBtn.addEventListener("click", function () {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
 });