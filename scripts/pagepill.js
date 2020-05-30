$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        menu: '#myMenu',
        animateAnchor: true,
        scrollingSpeed: 300,
        easing: 'swing',
        

        afterLoad: function(anchorLink, firstPage){
			if(anchorLink == 'firstPage'){
                $('#myMenu').css('z-index', '9000');
                $('#body').addClass('body_1');
                $('#body').removeClass('body_2');
                $('#body').removeClass('body_3');
                $('#body').removeClass('body_4');
                $('#body').removeClass('body_5');

                $('.marquee').addClass('marquee_none');

                $('.page_1').css('opacity', '1');

                /* LOGO LINE */
                $('.logo__line').addClass('logo__line_1');
                $('.logo__line').removeClass('logo__line_2');
                $('.logo__line').removeClass('logo__line_3');
                $('.logo__line').removeClass('logo__line_4');
                $('.logo__line').removeClass('logo__line_5');
                /* LOGO LINE */

            } else {
                $('.page_1').css('opacity', '0');
            }

			if(anchorLink == 'secondPage'){
                $('#myMenu').css('z-index', '0');
                $('#body').removeClass('body_1');
                $('#body').addClass('body_2');
                $('#body').removeClass('body_3');
                $('#body').removeClass('body_4');
                $('#body').removeClass('body_5');

                $('.marquee').removeClass('marquee_none');
                $('.marquee').css('z-index', 'initial');
                $('.marquee__item').css('left', 'initial');
                $('.marquee__item1').css('left', 'initial');
                $('.marquee__item_mobile').css('left', 'initial');


                $('.page_2').css('opacity', '1');

                /* LOGO LINE */
                $('.logo__line').removeClass('logo__line_1');
                $('.logo__line').addClass('logo__line_2');
                $('.logo__line').removeClass('logo__line_3');
                $('.logo__line').removeClass('logo__line_4');
                $('.logo__line').removeClass('logo__line_5');
                /* LOGO LINE */

            } else {
                $('.page_2').css('opacity', '0');
            }

            if(anchorLink == 'thirdPage'){
                $('#myMenu').css('z-index', '9000');
                $('#body').removeClass('body_1');
                $('#body').removeClass('body_2');
                $('#body').addClass('body_3');
                $('#body').removeClass('body_4');
                $('#body').removeClass('body_5');

                $('.marquee').addClass('marquee_none');
                $('.marquee').css('z-index', '-1');
                $('.marquee__item').css('left', '30%');
                $('.marquee__item1').css('left', '30%');
                $('.marquee__item_mobile').css('left', '30%');

                $('.page_3').css('opacity', '1');

                /* LOGO LINE */
                $('.logo__line').removeClass('logo__line_1');
                $('.logo__line').removeClass('logo__line_2');
                $('.logo__line').addClass('logo__line_3');
                $('.logo__line').removeClass('logo__line_4');
                $('.logo__line').removeClass('logo__line_5');
                /* LOGO LINE */

            } else {
                $('.page_3').css('opacity', '0');
            }
            if(anchorLink == 'fourthPage'){
                $('#myMenu').css('z-index', '9000');
                $('#body').removeClass('body_1');
                $('#body').removeClass('body_2');
                $('#body').removeClass('body_3');
                $('#body').addClass('body_4');
                $('#body').removeClass('body_5');

                $('.page_4').css('opacity', '1');

                $('.marquee__item').css('left', '30%');
                $('.marquee__item1').css('left', '30%');
                $('.marquee__item_mobile').css('left', '30%');

                /* LOGO LINE */
                $('.logo__line').removeClass('logo__line_1');
                $('.logo__line').removeClass('logo__line_2');
                $('.logo__line').removeClass('logo__line_3');
                $('.logo__line').addClass('logo__line_4');
                $('.logo__line').removeClass('logo__line_5');
                /* LOGO LINE */

            } else {
                $('.page_4').css('opacity', '0');
            }

			if(anchorLink == 'fifthPage'){
                $('#myMenu').css('z-index', '9000');
                $('#body').removeClass('body_1');
                $('#body').removeClass('body_2');
                $('#body').removeClass('body_3');
                $('#body').removeClass('body_4');
                $('#body').addClass('body_5');

                $('.page_5').css('opacity', '1');

                $('.marquee__item').css('left', '30%');
                $('.marquee__item1').css('left', '30%');
                $('.marquee__item_mobile').css('left', '30%');

                /* LOGO LINE */
                $('.logo__line').removeClass('logo__line_1');
                $('.logo__line').removeClass('logo__line_2');
                $('.logo__line').removeClass('logo__line_3');
                $('.logo__line').removeClass('logo__line_4');
                $('.logo__line').addClass('logo__line_5');
                /* LOGO LINE */

            } else {
                $('.page_5').css('opacity', '0');
            }
		}


    });
});