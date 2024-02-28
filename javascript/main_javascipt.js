
// =============> Header scroll here
window.addEventListener (`scroll`, function (){
    const header = document.querySelector(`header`);
    header.classList.toggle(`sticky`, window.scrollY > 100);
})




// =============> hamburger here
    //----Humburger click and remove navLinks;
    const navLinks = document.querySelector(`.menuLinks`);
    const hamburger = document.querySelector (`.hamburger`);

    hamburger.addEventListener (`click`, () =>{
        navLinks.classList.toggle(`nav_links_open`);
        hamburger.classList.toggle(`hamburger_open`);
    });

    //----Nav item click and remove navLinks;
                navLinks.addEventListener (`click`, () =>{
                    navLinks.classList.remove(`nav_links_open`);
                    hamburger.classList.remove(`hamburger_open`);
                });






$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    
    });
    


    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:20,
    //     responsiveClass:true,
    //     autoplay:true,
    //     smartSpeed:2000,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:2,
    //             nav:false
    //         },
    //         1000:{
    //             items:2,
    //             nav:true,
    //             loop:false
    //         }
    //     }
    // })








    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // animateOut: 'fadeOut',
    responsiveClass:true,
    autoplay:true,
    //autoplayTimeout:2000,
    smartSpeed:2000,
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
            items:2,
            nav:true
        }
    }
})