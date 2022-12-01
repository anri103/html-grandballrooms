// Preloader
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
});

// AOS
AOS.init({
    duration: 1200,
})

// fullwidth-nav-swiper
const swiper1 = new Swiper('#fullwidth-nav-swiper', {
    speed: 1200,
    parallax: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});

const swiper2 = new Swiper('#kitchen-nav-swiper', {
    speed: 1200,
    parallax: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});

// GLightbox

const lightboxGallery1 = GLightbox({
    selector: '.gallery1'
});

const lightboxGallery2 = GLightbox({
    selector: '.gallery2'
});

const lightboxGallery3 = GLightbox({
    selector: '.gallery3'
});

const lightboxGallery4 = GLightbox({
    selector: '.gallery4'
});

const lightboxGallery5 = GLightbox({
    selector: '.gallery5'
});

const lightboxGallery6 = GLightbox({
    selector: '.gallery6'
});

const lightboxGallery7 = GLightbox({
    selector: '.gallery7'
});

const lightboxGallery8 = GLightbox({
    selector: '.gallery8'
});