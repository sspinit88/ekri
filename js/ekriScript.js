
/*--headerMenu--*/
$(function () {
    var elem =$('.headerMenu__li');
    elem.hover(
        function () {
            $(this).find('.subMenu').stop(true).fadeIn(500);
            $(this).find('.headerMenu__link').addClass('headerMenu__link--active');

        },
        function () {
            $(this).find('.subMenu').stop(true).fadeOut(300);
            $(this).find('.headerMenu__link').removeClass('headerMenu__link--active');
        }
    ); // hover
}); // fu()



/*--mainSlider--*/
$(document).ready(function () {
    $('.mainSlider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1700,
        fade: true,
        zIndex: 10,
        arrows: false,
        // responsive: [
        //      {
        //          breakpoint: 1000,
        //          settings: {
        //              infinite: true,
        //              dots: false,
        //              arrows: false
        //          }
        //      }
        //  ]
    });
});

/*--mainFriendsSlider--*/
$(document).ready(function () {
    $('.mainFriendsSlider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 10000,
        fade: false,
        zIndex: 10,
        arrows: false
        // responsive: [
        //      {
        //          breakpoint: 1000,
        //          settings: {
        //              infinite: true,
        //              dots: false,
        //              arrows: false
        //          }
        //      }
        //  ]
    });
});