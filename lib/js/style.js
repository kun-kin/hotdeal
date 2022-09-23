$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header-navigation.sticky-header').addClass('affix');
        // $('.header').addClass('header-sticky');
        // $('.contacthotel').slideUp();
        // $('.header-middle').addClass('animated');
    } else {
        $('.header-navigation.sticky-header').removeClass('affix');
        // $('.header').removeClass('header-sticky');
        // $('.contacthotel').slideDown();
        // $('.header-middle').removeClass('animated');
    }
});
/* back to top */
var btn = $('.scrollup');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('activate');
    } else {
        btn.removeClass('activate');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});

$(document).ready(function() {

    // $('#dateto').datepicker();

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    // });




    $('.list-deal').slick({
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

    //price ranger
    $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    //select-picker
    // $('#category-search').picker({ search: true });

    $(".branding__item.multicolumns ").mouseover(function() {
        $(this).addClass('nav-active');
    });
    $(".branding__item.multicolumns").mouseout(function() {
        $(this).removeClass('nav-active');
    });

    $(".affix .main-nav__branding").mouseover(function() {
        $(this).addClass('hover');
    });
    $(".affix .main-nav__branding").mouseout(function() {
        $(this).removeClass('hover');
    });
    // $(".affix .main-nav__branding").hover(function() {
    //     $(this).toggleClass('hover');
    // });


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

    });

    //filter search
    $(".filter .filter__title").click(function() {
        $(this).parents('.filter').children('.filter__body').slideToggle();
        $(this).parents('.filter').toggleClass('collasped');
    });

    //price range
    $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

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

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

});