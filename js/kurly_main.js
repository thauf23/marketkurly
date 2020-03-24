$(function(){
    // ready

    //header_top
    $('.li_center').on('mouseenter',function(){
        $('.service_center').css({
            display: 'block'
        });
    });
    $('.li_center').on('mouseleave',function(){
        $('.service_center').css({
            display: 'none'
        });
    });


    // end
});