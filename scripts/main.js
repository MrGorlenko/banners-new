$(document).ready(function(){

    $('.modal__close').on('click', function(){
    
        $(".modal").removeClass('modal_active');
    
    })

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

                $('#mar-dynamic-mobile').css('z-index', 'initial');
                $('#mar-video').css('z-index', '-100');

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

                $('#mar-video').css('z-index', 'initial');

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

                $('#mar-dynamic-mobile').css('z-index', 'initial');
                $('#mar-video').css('z-index', '-100');

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

                $('#mar-dynamic-mobile').css('z-index', 'initial');
                $('#mar-video').css('z-index', '-100');

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

                $('#mar-dynamic-mobile').css('z-index', 'initial');
                $('#mar-video').css('z-index', '-100');

            } else {
                $('.page_5').css('opacity', '0');
            }
		}


    });


    $('#proc-1').on('click', function(){

        $('#proc-1').addClass('page3__item_active');        
        $('#proc-2').removeClass('page3__item_active');  
        $('#proc-3').removeClass('page3__item_active'); 
        $('#proc-4').removeClass('page3__item_active');  

        $('.page3__pic_1').removeClass('page3__pic_none');
        $('.page3__pic_2').addClass('page3__pic_none');
        $('.page3__pic_3').addClass('page3__pic_none');
        $('.page3__pic_4').addClass('page3__pic_none');
    })

    $('#proc-2').on('click', function(){

        $('#proc-1').removeClass('page3__item_active');  
        $('#proc-2').addClass('page3__item_active');  
        $('#proc-3').removeClass('page3__item_active'); 
        $('#proc-4').removeClass('page3__item_active');  


        $('.page3__pic_1').addClass('page3__pic_none');
        $('.page3__pic_2').removeClass('page3__pic_none');
        $('.page3__pic_3').addClass('page3__pic_none');
        $('.page3__pic_4').addClass('page3__pic_none');
    })

    $('#proc-3').on('click', function(){

        $('#proc-1').removeClass('page3__item_active');  
        $('#proc-3').addClass('page3__item_active'); 
        $('#proc-2').removeClass('page3__item_active'); 
        $('#proc-4').removeClass('page3__item_active');  


        $('.page3__pic_1').addClass('page3__pic_none');
        $('.page3__pic_2').addClass('page3__pic_none');
        $('.page3__pic_3').removeClass('page3__pic_none');
        $('.page3__pic_4').addClass('page3__pic_none');
    })

    $('#proc-4').on('click', function(){

        $('#proc-4').addClass('page3__item_active');  
        $('#proc-2').removeClass('page3__item_active'); 
        $('#proc-1').removeClass('page3__item_active');  
        $('#proc-3').removeClass('page3__item_active'); 


        $('.page3__pic_1').addClass('page3__pic_none');
        $('.page3__pic_2').addClass('page3__pic_none');
        $('.page3__pic_3').addClass('page3__pic_none');
        $('.page3__pic_4').removeClass('page3__pic_none');
    })


    $('.marquee__item').addClass('marquee_top');
    $('.marquee__item_mobile').addClass('marquee_left');
    

    stepVal = [10, 35, 50, 90, 100, 135, 155, 170, 190, 220, 230, 250, 270, 290, 310, 320, 350, 365, 400];
    stepVal1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    $('.box').each(function() {
    $(this).on('input', 'input[type="range"]', function() {
        $(this).prev($("#price")).val(stepVal[this.value]);
    });
    $(this).on('blur', $("#price"), function() {
    var textVal = $(this).val();
    var closestVal = stepVal.reduce(function(prev, curr) {
      return (Math.abs(curr - textVal) < Math.abs(prev - textVal) ? curr : prev);
    });
    
    $(this).val(closestVal);
    $(this).next('input[type=range]').val(stepVal.indexOf(closestVal));
  });
});

$('.box').each(function() {
    $(this).on('input', 'input[type="range"]', function() {
        $(this).prev($('#amount')).val(stepVal1[this.value]);
    });
    $(this).on('blur', $('#amount'), function() {
    var textVal = $(this).val();
    var closestVal = stepVal.reduce(function(prev, curr) {
      return (Math.abs(curr - textVal) < Math.abs(prev - textVal) ? curr : prev);
    });
    
    $(this).val(closestVal);
    $(this).next('input[type=range]').val(stepVal.indexOf(closestVal));
  });
});


function addSpaces(nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + " " + "$2");
    }
    return x1 + x2;
};

jQuery(".fcalcp5_vedyshiy").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    animate: true,
    slide: function (event, ui) {
        if (ui.value == 50000) { jQuery(".fcalcp5_vedyshiy_rez").html("<span>0</span>"); }
        else jQuery(".fcalcp5_vedyshiy_rez").html("<span class='runner__label'>" + addSpaces(ui.value) + "</span>");
        crachet();
    },
    stop: function (event, ui) {
    }
});

jQuery(".fcalcp5_decor").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    animate: true,
    slide: function (event, ui) {
        if (ui.value == 15000) { jQuery(".fcalcp5_decor_rez").html("<span>0</span>"); }
        else jQuery(".fcalcp5_decor_rez").html("<span class='runner__label'>" + addSpaces(ui.value) + "</span>");
        crachet();
    },
    stop: function (event, ui) {
    }
});

jQuery(".fcalcp5_html").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    animate: true,
    slide: function (event, ui) {
        if (ui.value == 15000) { jQuery(".fcalcp5_html_rez").html("<span>0</span>"); }
        else jQuery(".fcalcp5_html_rez").html("<span class='runner__label'>" + addSpaces(ui.value) + "</span>");
        crachet();
    },
    stop: function (event, ui) {
    }
});

function crachet() {
    var summa = parseInt(jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, "")) + parseInt(jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, "")) + parseInt(jQuery(".fcalcp5_html_rez span").text().replace(/\s+/g, ""));
    var sum_static = parseInt(jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, "")),
    sum_dinam = parseInt(jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, "")),
    sum_html = parseInt(jQuery(".fcalcp5_html_rez span").text().replace(/\s+/g, "")),
    sum_static_pay = 0,
    sum_dinam_pay = 0,
    sum_html_pay = 0,
    sum_static_sale = '',
    sum_dinam_sale = ''
    if ( sum_static < 30 ){
        sum_static_pay = sum_static * 1500
    }else if(sum_static >= 30 && sum_static < 100){
        sum_static_pay = sum_static * 1400
        sum_static_sale = ' - 7 %'
    }else if(sum_static >= 100){
        sum_static_pay = sum_static * 1300
        sum_static_sale = ' - 14 %'
    }
    if ( sum_dinam < 30 ){
        sum_dinam_pay = sum_dinam * 4000
    }else if(sum_dinam >= 30 && sum_dinam < 100){
        sum_dinam_pay = sum_dinam * 3800
        sum_dinam_sale = ' - 5 %'
    }else if(sum_dinam >= 100){
        sum_dinam_pay = sum_dinam * 3600
        sum_dinam_sale = ' - 10 %'
    }
    if ( sum_html < 30 ){
        sum_html_pay = sum_html * 2000
    }else if(sum_html >= 30 && sum_html < 100){
        sum_html_pay = sum_html * 2000
    }else if(sum_html >= 100){
        sum_html_pay = sum_html * 2000
    }
    sum = sum_static_pay + sum_dinam_pay + sum_html_pay
    jQuery(".fcalcp9 ").html("<span>" + addSpaces(sum) + " ₽</span>");
    jQuery(".summarize__banners ").html("<span>" + addSpaces(summa) + " баннеров</span>");
    jQuery(".summarize__line_static ").html("<span>Статичный баннер: " + addSpaces(sum_static) + addSpaces(sum_static_sale) + "</span>");
    jQuery(".summarize__line_dinam ").html("<span>Динамичный баннер: " + addSpaces(sum_dinam) + addSpaces(sum_dinam_sale) + "</span>");
    jQuery(".summarize__line_html ").html("<span>Перевод в HTML: " + addSpaces(sum_html) + "</span>");

    $(".form input[name='static']").val(sum_static);
    $(".form input[name='dynamic']").val(sum_dinam);
    $(".form input[name='html']").val(sum_html);

}



function stop(){
    let globalSum = parseInt(jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, "")) + parseInt(jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, "")) + parseInt(jQuery(".fcalcp5_html_rez span").text().replace(/\s+/g, ""));
    return globalSum
}


    $('#order-btn').on('click', function(event){
        if (stop() < 10){
            alert('Необходимо заказать минимум 10 баннеров!');
        }
        else {
            $(".modal").addClass('modal_active');
        }
    })



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

        $('.video').css('z-index', '-1')
        $('#mar-dynamic-mobile').css('z-index', 'initial');
        $('#mar-html').css('z-index', '-100');
        $('#mar-video').css('z-index', '-100');
    })

    toggle2.on('click', function(){
        $('#mar-static').addClass('marquee_none');
        $('#mar-dynamic').removeClass('marquee_none');
        $('#mar-html').addClass('marquee_none');
        $('#mar-html_label').addClass('marquee_none');
        $('#mar-video').addClass('marquee_none');

        $('#mar-static-mobile').addClass('marquee_none');
        $('#mar-dynamic-mobile').removeClass('marquee_none');

        $('.video').css('z-index', '900')
        $('#mar-dynamic-mobile').css('z-index', '12000');
        $('#mar-html').css('z-index', '-100');
        $('#mar-video').css('z-index', '-100');
    })

    toggle3.on('click', function(){
        $('#mar-static').addClass('marquee_none');
        $('#mar-dynamic').addClass('marquee_none');
        $('#mar-html').removeClass('marquee_none');
        $('#mar-html_label').removeClass('marquee_none');
        $('#mar-video').addClass('marquee_none');

        $('#mar-static-mobile').addClass('marquee_none');
        $('#mar-dynamic-mobile').addClass('marquee_none');


        $('.video').css('z-index', '-1')
        $('#mar-dynamic-mobile').css('z-index', 'initial');
        $('#mar-html').css('z-index', 'initial');
        $('#mar-video').css('z-index', '-100');
    })

    toggle4.on('click', function(){
        $('#mar-static').addClass('marquee_none');
        $('#mar-dynamic').addClass('marquee_none');
        $('#mar-html').addClass('marquee_none');
        $('#mar-html_label').addClass('marquee_none');
        $('#mar-video').removeClass('marquee_none');

        $('#mar-static-mobile').addClass('marquee_none');
        $('#mar-dynamic-mobile').addClass('marquee_none');

        $('.video').css('z-index', '-1')
        $('#mar-dynamic-mobile').css('z-index', 'initial');
        $('#mar-html').css('z-index', '-100');
        $('#mar-video').css('z-index', 'initial');
    })


    $('.video_1').on('click', function(event){
        $('.video_modal_1').addClass('video_modal_active');
    })

    $('.video_2').on('click', function(event){
        $('.video_modal_2').addClass('video_modal_active');
    })

    $('.video_3').on('click', function(event){
        $('.video_modal_3').addClass('video_modal_active');
    })

    $('.video_4').on('click', function(event){
        $('.video_modal_4').addClass('video_modal_active');
    })

    $('.video_5').on('click', function(event){
        $('.video_modal_5').addClass('video_modal_active');
    })

    $('.video_6').on('click', function(event){
        $('.video_modal_6').addClass('video_modal_active');
    })

    $('.video_7').on('click', function(event){
        $('.video_modal_7').addClass('video_modal_active');
    })

    $('.video_8').on('click', function(event){
        $('.video_modal_8').addClass('video_modal_active');
    })

    $('.video_9').on('click', function(event){
        $('.video_modal_9').addClass('video_modal_active');
    })

    $('.video_10').on('click', function(event){
        $('.video_modal_10').addClass('video_modal_active');
    })

    $('.video_modal-close').on('click', function(event){
        $('.video_modal').removeClass('video_modal_active');
    })

})
    