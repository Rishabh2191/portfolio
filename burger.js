burger = document.querySelector('.burger');
header = document.querySelector('.header');
nav = document.querySelector('.nav');
contact = document.querySelector('.contact-btn');

burger.addEventListener('click', ()=>{
    nav.classList.toggle('v-nav');
    contact.classList.toggle('v-nav');
    header.classList.toggle('h-nav');
})
