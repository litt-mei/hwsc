$(function() {
    var s1 = $('.i_list .s1');
    var s2 = $('.i_list .s2');
    var lis = $('.list_u li');
    var ul = $('.list_u');
    var width = ul.css('width');


    s1.click(() => {
        $('.list_u').scrollLeft(60);
    });

    s2.click(() => {
        console.log(2)
    })
})