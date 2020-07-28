

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-button-wrap");
    let links = menu.find("burger-menu_link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');
$(document).ready(function(){
    $(".review-slider").owlCarousel({
        items: 3,
        loop:true,
        nav: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
                autoHeight:true,
                margin:20,
                animateIn: true,
            },
            480:{
                items:1
            },
            767:{
                items:1
            },
            991:{
                items:3,
                nav: true,
                autoHeight:false,
            }
        }
    });
});
$(document).ready(function(){
    $(".tariffs-slider").owlCarousel({
        items: 1,
        loop:true,
        margin: 10,
        nav: false,
    });
});
$(document).ready(function(){
    $(".guarantee-slider").owlCarousel({
        items: 1,
        loop:true,
        margin: 10,
        nav: true,
        dots:false
    });
});
