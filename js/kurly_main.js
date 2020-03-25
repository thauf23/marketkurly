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

     
    //header_bottom
    $('.header_bottom nav ul li:first').on('mouseenter',function(){
        $('.header_2depth').toggleClass('depth_2_open');
    });
    $('.header_bottom .header_2depth li').on('mouseleave',function(){
        $('.header_2depth').toggleClass('depth_2_open');
    });

    $('.header_2depth ul li').on({
        mouseenter: iconMouseIn,
        // mouseleave: iconMouseout
    });
    function iconMouseIn(){
        //header_2depth height
        var h2Depth = $('.header_2depth ul').outerHeight();
        $('.header_2depth ul li div').css({
            height: h2Depth,
            width:0
        }).hide();
        //$(this).find('div').toggleClass('depth_3_open');
        // $('.header_2depth ul li div').css({width:0}).hide();
        $(this).find('div').show().animate({
            width: 100+'%'
        },400)
    };
    //  function iconMouseout(){
    //     $(this).find('div').toggleClass('depth_3_open');
    // };

    // end
});