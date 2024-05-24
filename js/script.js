let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const top = window.scrollY;
        const height = section.offsetHeight;
        const offset = section.offsetTop - 150;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            currentSectionId = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  loop: true,
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;
  
