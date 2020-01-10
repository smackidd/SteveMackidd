/* Navbar JavaScript animation has been adapted from this Youtube tutorial
https://www.youtube.com/watch?v=gXkqy0b4M5g */

const navbarSlide = ()=>{
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar li');
  
  
  burger.addEventListener('click', () => {
    //toggle navbar
    navbar.classList.toggle('burger-active');
    burger.classList.toggle('toggle');
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.3}s`;
      }
    });
    
    
  });
}

//the navbarOpaque function makes the navbar opaque on scroll
//this code has been adapted from the above code, mixed with code from here:
//https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
const navbarOpaque = ()=>{
  const navbar = document.querySelector('nav');
  const sticky = navbar.offsetTop;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
      navbar.classList.add('navbar-opaque')
    } else {
      navbar.classList.remove('navbar-opaque');
    }
    
  })
}

//fade in the boxes in experience.html
const boxFade = ()=>{
  
  const boxes = document.querySelectorAll('.experience div');
  
  
  window.addEventListener('load', () => {
    
    //animate boxes
    boxes.forEach((box, index) => {
      
      box.style.animation = `boxFadeIn 2.0s ease forwards ${index/3}s`;
      box.style.display = `initial`;
    });
    
    
  });
}

/*home title fade in*/
const homeFade = ()=>{
  
  const boxes = document.querySelectorAll('.home div');
  
  
  window.addEventListener('load', () => {
    
    //animate boxes
    boxes.forEach((box, index) => {
      
      box.style.animation = `boxFadeIn 2.0s ease forwards ${index/3}s`;
      box.style.display = `initial`;
    });
    
    
  });
}

navbarSlide();
navbarOpaque();
boxFade();