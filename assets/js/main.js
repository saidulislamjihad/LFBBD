//Product Slider
$('.about-award-wrap').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});
