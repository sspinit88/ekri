
/*headerMenu*/
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