

var navbar = document.getElementById("side-nav_icon");
var navitem = document.getElementById("side-nav");
var closing = document.getElementById("closing");
var navLinks = document.querySelectorAll(".itemds li a"); 


navbar.addEventListener("click", function() {
    navitem.style.right = "0";
});


closing.addEventListener("click", function() {
    navitem.style.right = "-50%";
});


navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navitem.style.right = "-50%";
    });
});



const text = "Full Stack Developer !!";
let index = 0;
const typingSpeed = 100; // Typing speed in milliseconds
const eraseSpeed = 50; // Erasing speed
const delayBetweenCycles = 1000; // Delay before restarting the typing

function type() {
  if (index < text.length) {
    document.querySelector('.home-role').innerHTML += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenCycles); // Start erasing after delay
  }
}

function erase() {
  if (index > 0) {
    document.querySelector('.home-role').innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(erase, eraseSpeed);
  } else {
    setTimeout(type, delayBetweenCycles); // Restart typing after delay
  }
}

window.onload = function() {
  type(); // Start typing on page load
};

