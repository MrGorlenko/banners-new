
$(document).ready(function(){
    var toggle1 = $('#toggle-1'),
    toggle2 = $('#toggle-2'),
    toggle3 = $('#toggle-3'),
    toggle4 = $('#toggle-4');

    toggle1.on('click', function(){
        $(this).addClass('toggle__item_active');
        toggle2.removeClass('toggle__item_active');
        toggle3.removeClass('toggle__item_active');
        toggle4.removeClass('toggle__item_active');
    })

    toggle2.on('click', function(){
        $(this).addClass('toggle__item_active');
        toggle1.removeClass('toggle__item_active');
        toggle3.removeClass('toggle__item_active');
        toggle4.removeClass('toggle__item_active');
    })

    toggle3.on('click', function(){
        $(this).addClass('toggle__item_active');
        toggle2.removeClass('toggle__item_active');
        toggle1.removeClass('toggle__item_active');
        toggle4.removeClass('toggle__item_active');
    })

    toggle4.on('click', function(){
        $(this).addClass('toggle__item_active');
        toggle2.removeClass('toggle__item_active');
        toggle3.removeClass('toggle__item_active');
        toggle1.removeClass('toggle__item_active');
    })





    toggle1.on('click', function(){
        $('#mar-static').removeClass('marquee_none');
        $('#mar-dynamic').addClass('marquee_none');
        $('#mar-html').addClass('marquee_none');
        $('#mar-html_label').addClass('marquee_none');
        $('#mar-video').addClass('marquee_none');

        $('#mar-static-mobile').removeClass('marquee_none');
        $('#mar-dynamic-mobile').addClass('marquee_none');
    })

    toggle2.on('click', function(){
        $('#mar-static').addClass('marquee_none');
        $('#mar-dynamic').removeClass('marquee_none');
        $('#mar-html').addClass('marquee_none');
        $('#mar-html_label').addClass('marquee_none');
        $('#mar-video').addClass('marquee_none');

        $('#mar-static-mobile').addClass('marquee_none');
        $('#mar-dynamic-mobile').removeClass('marquee_none');
    })

    toggle3.on('click', function(){
        $('#mar-static').addClass('marquee_none');
        $('#mar-dynamic').addClass('marquee_none');
        $('#mar-html').removeClass('marquee_none');
        $('#mar-html_label').removeClass('marquee_none');
        $('#mar-video').addClass('marquee_none');

        $('#mar-static-mobile').addClass('marquee_none');
        $('#mar-dynamic-mobile').addClass('marquee_none');
    })

    toggle4.on('click', function(){
        $('#mar-static').addClass('marquee_none');
        $('#mar-dynamic').addClass('marquee_none');
        $('#mar-html').addClass('marquee_none');
        $('#mar-html_label').addClass('marquee_none');
        $('#mar-video').removeClass('marquee_none');

        $('#mar-static-mobile').addClass('marquee_none');
        $('#mar-dynamic-mobile').addClass('marquee_none');
    })
})
