const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img')

//Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter and image size

let counter = 1;
const size = carouselImages[0].clientWidth;

//Move each image

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners

nextBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})