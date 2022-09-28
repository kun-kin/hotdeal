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

    $('#birthday').datepicker();

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

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

    $(".main-nav__branding").mouseover(function() {
        $(this).addClass('hover');
    });
    $(".main-nav__branding").mouseout(function() {
        $(this).removeClass('hover');
    });




    //filter search
    $(".filter .filter__title").click(function() {
        $(this).parents('.filter').children('.filter__body').slideToggle();
        $(this).parents('.filter').toggleClass('collasped');
    });

    // //price range
    // $("#slider-range").slider({
    //     range: true,
    //     min: 130,
    //     max: 500,
    //     values: [130, 250],
    //     slide: function(event, ui) {
    //         $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    //     }
    // });
    // $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    //     " - $" + $("#slider-range").slider("values", 1));


    //set time countdown
    var timer2 = "24:5:30:30";
    var interval = setInterval(function() {
        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var day = parseInt(timer[0], 10);
        var hour = parseInt(timer[1], 10);
        var minutes = parseInt(timer[2], 10);
        var seconds = parseInt(timer[3], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('.time-countdown').html(day + ' Ngày ' + hour + ':' + minutes + ':' + seconds);
        timer2 = day + ':' + hour + ':' + minutes + ':' + seconds;
    }, 1000);


    //content-well-detail
    $(".product-well .btn--view-more").click(function() {
        $(this).parents('.product-well').toggleClass('expanded');
    });

    $(".panel-title").click(function() {
        var map_id = $(this).attr("data-map-id");
        $(".product-map").addClass("hidden");
        $(map_id).removeClass("hidden");
    });


    //toggle-menu
    $(".toggle-nav").click(function() {
        $('.wrapper').addClass('hd-menu-open');
        $('body').addClass('ov-hidden');
    });
    $(".toggle-nav--remove").click(function() {
        $('.wrapper').removeClass('hd-menu-open');
        $('body').removeClass('ov-hidden');
    });
    $(document).mouseup(function(e) {
        if ($(e.target).closest(".hd-menu-container").length ===
            0) {
            $('.wrapper').removeClass('hd-menu-open');
            $('body').removeClass('ov-hidden');
        }
    });


    //footer
    $("li>.menu__heading").click(function() {
        $(this).toggleClass('expanded');
        $(this).parent('li').children('.menu__listing').toggleClass('expanded');
    });

    $(".category-header-filter-button").click(function() {
        $('body').addClass('state-filter ov-hidden');
    });
    $(".context-sidebar .context-close").click(function() {
        $('body').removeClass('state-filter ov-hidden');
    });




});