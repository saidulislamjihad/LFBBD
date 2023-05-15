//About Slider
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

//Customer Slider
$('.customer-items-wrap').owlCarousel({
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
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});

//Testimonial Slider
$('.testimonial-items-wrap').owlCarousel({
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

//Case Study Slider
$('.case-study-items-wrap').owlCarousel({
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

//Product Count
 $(".qtyminus").on("click",function(){
    var now = $(".qty").val();
    if ($.isNumeric(now)){
        if (parseInt(now) -1 > 0)
        { now--;}
        $(".qty").val(now);
    }
})            
$(".qtyplus").on("click",function(){
    var now = $(".qty").val();
    if ($.isNumeric(now)){
        if(parseInt(now) < 10 ){
            $(".qty").val(parseInt(now)+1);
        }
        
    }
});