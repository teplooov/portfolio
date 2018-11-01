
function resize() {
    var menu = $('header .headerInner .menu');
    var header = $('header');
    var widthHead = header.width();
    if (widthHead < 1170) {
        menu.css({'display':'none'});
        header.addClass('mobile');
    } else {
        menu.css({'display':'flex'});
        header.removeClass('mobile');
    }
}
resize();

$(window).resize(function() {
    resize();
});

$('.hamburger').click(function(){
    element = $('.menu');
    display = element.css('display');
    if(display == 'none')
        $('.menu').slideDown(400);
    if(display == 'block')
        $('.menu').slideUp(400);
});
$('.hamburger').click(function(){
    element = $('.hamburger_nav');
    display = element.css('display');
    if(display == 'none')
        $('.menu').slideDown(400);
});

$('.menu a').click(function(){
    var header = $('header');
    var widthHead = header.width();
    if(widthHead < 1170)
        $('.menu').slideUp(400);
});