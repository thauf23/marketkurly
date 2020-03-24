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
    var tarGat;
    var vegetableP = 'img/main/icon/vegetable_p.png',
        vegetableB = 'img/main/icon/vegetable_b.png';
    var fruitP = 'img/main/icon/fruit_p.png',
        fruitB = 'img/main/icon/fruit_b.png';
    
    // var iconB = ['img/main/icon/vegetable_b.png',
    //             'img/main/icon/fruit_b.png' ]

    $('.header_2depth ul li').on({
        mouseenter: iconMouseIn,
        // mouseleave: iconMouseout
    });
    function iconMouseIn(e){
        var iconP = ['img/main/icon/vegetable_p.png',
                    'img/main/icon/fruit_p.png' ];
        var tarGat = e.target;
        for(var i = 0; i<iconP.length; i++){
            if( $(tarGat).eq(i) == iconP[i]){
                $(tarGat).find('img').attr('src',iconP[i]);
            }
            i=0;
        }
    };
    // function iconMouseIn(e){
    //     e.preventDefault();
        
    //     // var iconP = ['img/main/icon/vegetable_p.png',
    //     //             'img/main/icon/fruit_p.png' ];
    //     // var vegetableP = 'img/main/icon/vegetable_p.png';
    //     $(this).find('img').attr('src',vegetableP);
    //     $(tarGat).find('img').attr('src',fruitP);
    // };
    // function iconMouseout(e){
    //     e.preventDefault();
    //     $(this).find('img').attr('src',vegetableP);
    //     // $(this).find('img').attr('src',fruitB);
    // };
    // end
});