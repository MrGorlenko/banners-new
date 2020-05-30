$(document).ready(function(){

    var i = 0;

    $('#burger').on('click', function(){
        i += 1;


        if (i%2!=0){
            $('.modal-menu').addClass('modal-menu_active');
            $('.burger__first').addClass('first-axe');
            $('.burger__second').addClass('second-axe');
        }
        else{
            $('.modal-menu').removeClass('modal-menu_active');
            $('.burger__first').removeClass('first-axe');
            $('.burger__second').removeClass('second-axe');
        }
    })

    $('#myMenu-mobile').on('click', function(){
        i = 0;
        $('.modal-menu').removeClass('modal-menu_active');
        $('.burger__first').removeClass('first-axe');
        $('.burger__second').removeClass('second-axe');
    })

})