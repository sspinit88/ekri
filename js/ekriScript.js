
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

    let formStar = $('.reviewsForm');
    let btnStar = $('.reviewsBtn');
    let over = $('.over');
    let close = $('.closeReviewsForm');

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

/*Рейтинг в отзыве*/
$(function() {
    $('#example').barrating({
        theme: 'css-stars',
        initialRating: 5
    });
});

/*Плавающий aside*/
$(function() {

// Размеры вьюпорта
    function getViewport() {

        let viewPortWidth;

        if (typeof $(window).outerWidth() !== 'undefined') {
            viewPortWidth = $(window).outerWidth();
        }

        return {
            width: viewPortWidth,
        };
    }
    console.log(getViewport().width);
// Задержка выполнения функции
    function delay () {
        let a = 0;
        return function (b, c){
            clearTimeout(a);
            a = setTimeout(b, c);
        }
    }
    /*Получаю плавающий блок*/
    let $asideCh = $('.leftAside>ul');
    /*Получаю родительский блок, относительно плавающего*/
    let $aside = $('.leftAside');
    /*Получаем верхнюю координату плавающего блока*/
    let $asideChTop = $asideCh.offset().top;
    /*Получаем верхнюю координату, относительно плавающего*/
    let $asideTop = $aside.offset().top;
//        console.log($asideTop + ' ' + '-' + ' ' + '$asideTop');
    /*Высота плавающего*/
    let $asideChHeight = $asideCh.outerHeight();
    /*Высота родительского*/
    let $asideHeight = $aside.outerHeight();
//        console.log($asideHeight + ' ' + '-' + ' ' + '$asideHeight');
    /*Ширина плавающего*/
    let $asideChWidth = $asideCh.outerWidth();
    /*Начальная координата блока, перед которым плавающий должен остановиться.*/
    let $stopTop = $('.footer').offset().top - 30;
//        console.log($stopTop + ' ' + '-' + ' ' + '$stopTop');
    /*точка остановки*/
    let stopPoint = $stopTop - $asideChHeight;
//        console.log(stopPoint + ' ' + '-' + ' ' + 'stopPoint');
    /**/
    let topInStop = $asideHeight - $asideChHeight - 10;

    // Задержка выполнения функции
    let delayer = delay();

    // Ширина вьюпорта
    let viewportWidth;

    // Размер вьюпорта
    let setViewport = function () {
        viewportWidth = getViewport().width;
    };

    // Позиционирование плавающего блока
    let setStateFixedBlock = function () {

        if (viewportWidth < 1000) {
            $asideCh.css({
                'position':'static',
            });
            return;
        }

        let $totalTop = $(this).scrollTop();
        let $stopTopNew = $('.footer').offset().top - 30;
        let stopPointNew = $stopTopNew - $asideChHeight;
        let $asideTopNew = $aside.offset().top;

        let $asideHeightNew = $aside.outerHeight();
        let topInStopNew = $asideHeightNew - $asideChHeight - 10;

        if( stopPointNew !== stopPoint ||
            $asideTopNew !== $asideTop ||
            topInStopNew !== topInStop ){
            stopPoint = stopPointNew;
            $asideTop = $asideTopNew;
            topInStop = topInStopNew;
        }

        if($totalTop > stopPoint){
            $asideCh.css({
                'position':'absolute',
                'top': topInStop,
                'width': $asideChWidth,
            });
        }
        else if($totalTop >= $asideTop){
            $asideCh.css({
                'position':'fixed',
                'top':'0px',
                'width': $asideChWidth,
            });
        }
        else {
            $asideCh.css({
                'position':'static',
            });
        }
    };

    setViewport();
    $(window).resize(function () {
        delayer(function() {
            setViewport();
            setStateFixedBlock();
        }, 100);
    });

    $(window).on('scroll', function () {
        setStateFixedBlock();
    }); // scroll


}); // ready
