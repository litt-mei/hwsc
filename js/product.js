$(function() {
    var s1 = $('.i_list .s1');
    var s2 = $('.i_list .s2');
    var lis = $('.list_u li');
    var ul = $('.list_u');
    var width = ul.css('width');
    // var p_top = $('.p_m');

    s1.click(() => {
        $('.list_u').scrollLeft(60);
    });

    s2.click(() => {
        console.log(2)
    })

    // $(window).scroll(() => {
    //     var stop = $('body').scrollTop()

    //     if (stop >= 90) {
    //         t = $(p_top).css('position');
    //         t.top = 0;
    //     } else {
    //         $(p_top).css('position') = 'static';
    //     }
    // })


})