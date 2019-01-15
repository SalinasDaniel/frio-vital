$(document).ready(function() {
    var scroll = $(window).scrollTop();
    $('.limit').text(scroll);
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        $('.limit').text(scroll);
        /*Cambia el color del div cuando es distinto a 0*/
        if (scroll != 0) {
            $('.logo-contact').css({
                width: '100%',
                paddingTop: '3%'
            });
        } else {
            $('.logo-contact').css({
                width: '50%'
            });
        }
    });
});