
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

/*--Поле загрузки файлов-*/
$(document).ready( function() {
    $(".tenderForm__upload input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").val(filename);
    });
});

/*Работа с формой "Пригласить на тендр"*/
$(function () {

    var formOn = $('.tenderForm');

    $('.btnTender').on('click', function () {
        $('.over').fadeIn(500);
        formOn.fadeIn(500);
        $('html, body').animate({
            scrollTop: formOn.offset().top},500);
        return false;
    });// .on
    $('.closeForm').on('click', function () {
        $('.over').fadeOut(500);
        formOn.fadeOut(500);
    });// .on

}); // fu()

/*Работа с формой "Оставить отзыв"*/
$(function () {

    var formStar = $('.reviewsForm');
    var btnStar = $('.reviewsBtn');
    var over = $('.over');
    var close = $('.closeReviewsForm');

    btnStar.on('click', function () {
        over.fadeIn(500);
        formStar.css('display','flex');
        $('html, body').animate({
            scrollTop: formStar.offset().top-10+'px'},500);
        return false;
    }); // btnStar
    close.on('click', function () {
        over.fadeOut(500);
        formStar.fadeOut(500);
    }); // close

}); // fu()

/*рейтинг в отзыве*/
$(function() {
    $('#example').barrating({
        theme: 'css-stars',
        initialRating: 5
    });
});

/*Валидация формы*/
/*
$(".tenderForm").validate({
    rules: {
        mail: {
            required: true,
            email:true
        },
        name:{
            required: true,
            minlength: 3
        },        name:{
            required: true,
            minlength: 3
        },
        tel:{
            required: true,
            digits: true
        }
    },
    messages:{
        mail:{
            required: 'Поле обязательно для заполнения.',
            email: 'Введите корректный E-mail.'
        },
        name:{
            required: 'Поле обязательно для заполнения.',
            minlength: 'Длина имени должна бать не менее трех символов'
        },
        tel:{
            required: 'Поле обязательно для заполнения.'
        }
    },
    focusCleanUp: true
});
 */