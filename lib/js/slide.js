$(document).ready(function() {
    $('.list-deal').slick({
        loop: true,
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // banner slide
    $('.promo-slide__list').slick({
        loop: true,
        dots: true,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });

    //slide 
    $('.cycle-slideshow').slick({
        loop: true,
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,

    });


    //
    $('.gallery__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.gallery__thumbnails'
    });
    $('.gallery__thumbnails').slick({
        loop: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery__image',
        dots: false,
        arrows: true,
        // centerMode: true,
        focusOnSelect: true
    });


    //
    $('.product--slide__inner').slick({
        loop: true,
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});