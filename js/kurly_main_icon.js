$(function(){
    // ready
    // var imgSrcTargat;
    // var imgSrcChange;
    //header_bottom
    // $('.header_bugur').on('mouseenter',function(){
    //     imgSrcChange = 'img/main/icon/menu_p.png';
    //     $(this).find('img').attr('src',imgSrcChange);
    // });
    // $('.header_bugur').on('mouseleave',function(){
    //     imgSrcChange = 'img/main/icon/menu_b.png';
    //     $(this).find('img').attr('src',imgSrcChange);
    //     console.log(imgSrcChange)
    // });    

    //header_bottom
    var bugurPchange = 'img/main/icon/menu_p.png';
    var bugurBchange = 'img/main/icon/menu_b.png';
    
    $('.header_bugur').on({
        mouseenter: navMouseIn,
        mouseleave: navMouseout
    });
    function navMouseIn(e){
        e.preventDefault();
        $(this).find('img').attr('src',bugurPchange);
    };
    function navMouseout(e){
        e.preventDefault();
        $(this).find('img').attr('src',bugurBchange);
    };

    // header_2depth
    const colorPurple = '_p';
    const colorBlack = '_b';
    var iconSrc; 
    
    $('.header_2depth ul li').on({
        mouseenter: iconMouseIn,
        mouseleave: iconMouseout
    });
    function iconMouseIn(e){
        e.preventDefault();
        var iconSrc = $(this).find('.icon_change img').attr('src');
        var imgChangeP = iconSrc.replace(colorBlack,colorPurple);
        $(this).find('.icon_change img').attr('src',imgChangeP);
    };
    function iconMouseout(e){
        e.preventDefault();
        var iconSrc = $(this).find('.icon_change img').attr('src');
        var imgChangeB= iconSrc.replace(colorPurple,colorBlack);
        $(this).find('.icon_change img').attr('src',imgChangeB);
    };
    
    // end
});