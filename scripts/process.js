$(document).ready(function(){
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
})