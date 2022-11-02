$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

    var lastScrollTop = 0;
    
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.header').addClass("white");
            if($(this).scrollTop() > 300) {
                if (!$(".header").hasClass("over")) {
                    $('.header').addClass("head_top");
                }
            }
        } else {
            $('.header').removeClass("head_top");
            if($(this).scrollTop() == 0) {
                $('.header').removeClass("white");
            }
        }
        lastScrollTop = st;
    });

    $(".modal_menu_nav_item_top").click(function() {
        if($(this).parent().hasClass("active")) {
            $(".modal_menu_nav_item").removeClass('active');
            $(this).parent().removeClass("active");
        } else {
            $(".modal_menu_nav_item").removeClass('active');
            $(this).parent().addClass("active");
        }
    });

    $(".header_block_top_right_burger").click(function() {
        $(".modal_menu").addClass("active");
        $("body").addClass("scroll");
    });

    $(".modal_menu_top_close").click(function() {
        $(".modal_menu").removeClass("active");
        $("body").removeClass("scroll");
    });

    const inViewport = (elem) => {
        let allElements = document.getElementsByClassName(elem);
        let windowHeight = window.innerHeight;
        const elems = () => {
            for (let i = 0; i < allElements.length; i++) {  
                let viewportOffset = allElements[i].getBoundingClientRect();
                let top = viewportOffset.top;
                if(top < windowHeight) { 
                    allElements[i].classList.add('animation');
                } else{
                    allElements[i].classList.remove('in-viewport');
                }
            }
        }
        elems();
        window.addEventListener('scroll', elems);
    }

    inViewport("anime");

    $(".footer_desk_list_item_call").click(function() {
        $(".modal_form").addClass("active");
    });

    $(".modal_form_close").click(function() {
        $(".modal_form").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(document).mouseup(function(e) {
        var container = $(".modal_form");
        var containerTwo = $(".modal_search");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".modal_form").removeClass("active");
        }
        if (!containerTwo.is(e.target) && containerTwo.has(e.target).length === 0) {
            $(".modal_search").removeClass("active");
        }
    });

    // $(document).click(function(e) {
    //     var container = $(".modal_search");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         $(".modal_search").removeClass("active");
    //     }
    // });

    $(".header_block_top_search").click(function() {
        $(".modal_search").addClass("active");
    });

    $(".modal_search_close").click(function() {
        $(".modal_search").removeClass("active");
    })

    $(".header").hover(function() {
        if ($(window).width() > 1199) {
            $(this).toggleClass("over");
            var scroll = $(window).scrollTop();
            if(scroll > 50) {
                $(this).addClass("white");
            } else {
                $(this).toggleClass("white");
            }
        }
    });

    $(".header_block_bottom_item").hover(function() {
        $(".header").toggleClass("pseudo");
    });

    $(".header_block_bottom_item_body_text_item ul li").hover(function() {
        var attr = $(this).attr("data-target");
        $(".header_block_bottom_item_body_text_item ul li").removeClass("active");
        $(".header_block_bottom_item_body_images_wrap").removeClass("active");
        $(this).addClass("active");
        $(`.${attr}`).addClass("active");
    });
 
    $('.main_slider_mob').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    $('.main_slider_desk').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    $('.fashion_block').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        fade: true,
        accesibility: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        cssEase: 'linear',
        prevArrow: $('.fashion_block_item_text_top_left'),
        nextArrow: $('.fashion_block_item_text_top_right')
    });

    var countFashion = $(".fashion_block_item").length;

    $(".fashion_block_item_text_top_count").text("1/" + countFashion);

    $('.fashion_block').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.fashion_block_item_text_top_count').html(currentSlide+1 + "/" + countFashion);
    });

    $(".footer_mob_list_item_top").click(function() {
        if($(this).parent().hasClass("active")) {
            $(".footer_mob_list_item").removeClass('active');
            $(this).parent().removeClass("active");
        } else {
            $(".footer_mob_list_item").removeClass('active');
            $(this).parent().addClass("active");
        }
    });

});