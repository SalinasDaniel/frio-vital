$(document).ready(function() {

    var width = $(window).width();
    if (width > 767) {

        var scroll = $(window).scrollTop();
        $('.limit').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('.limit').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if (scroll != 0) {
                $('.logo-contact').css({
                    width: '100%',

                });
                $('.contact').css({
                    paddingTop: '3%',
                    paddingLeft: '38%'
                });

                $('.log').css({
                    width: '8%'
                });
            } else {
                $('.logo-contact').css({
                    width: '50%'
                });
                $('.contact').css({
                    paddingTop: '8%',
                    paddingLeft: '0%'
                });

                $('.log').css({
                    width: '13%'
                });
            }
        });
    }
});