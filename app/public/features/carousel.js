// alpine init
document.addEventListener('alpine:init', () => {
    Alpine.data('carousel', () => ({
        items: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg'],

        init() {
            // basic
            const swiper1 = new window.Swiper('#slider1', {
                navigation: {
                    nextEl: '.swiper-button-next-ex1',
                    prevEl: '.swiper-button-prev-ex1',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            // Autoplay
            const swiper2 = new window.Swiper('#slider2', {
                navigation: {
                    nextEl: '.swiper-button-next-ex2',
                    prevEl: '.swiper-button-prev-ex2',
                },
                autoplay: {
                    delay: 2000,
                },
            });
            // vertical
            const swiper3 = new window.Swiper('#slider3', {
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 2000,
                },
            });
            // Loop
            const swiper4 = new window.Swiper('#slider4', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.swiper-button-next-ex4',
                    prevEl: '.swiper-button-prev-ex4',
                },
            });
            // Multiple Slides
            const swiper5 = new window.Swiper('#slider5', {
                navigation: {
                    nextEl: '.swiper-button-next-ex5',
                    prevEl: '.swiper-button-prev-ex5',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
            });
        },
    }));
});
