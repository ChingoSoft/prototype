const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        prevEl: ".prev",
        nextEl: ".next"
    },

    loop: true,
    breakpoints{
    600{
        slidesPerView: 1
    }
});

const heroSwipe = new Swiper(".hero-slider", {
    // slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
   autoplay: {
    delay: 3000,
},
    effect: 'fade',
    
    loop: true

});
