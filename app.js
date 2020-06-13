$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/*Difuminado de la primer pagina*/
$(document).ready(function () {
    $(window).scroll(function () {
        $('.imagenfondo').css("opacity", 1 - $(window).scrollTop() / 500)
        $('.contenedor').css("opacity", 1)
    })
})

/*Focus de la barra*/
$('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1200);
    event.preventDefault();
});

/*Boton para el top*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});