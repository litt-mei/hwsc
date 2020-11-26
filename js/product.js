$(function() {
    let product_id = localStorage.getItem('product')

    $.ajax({
        url: '../data/message.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            for (let i = 0, len = json.length; i < len; i++) {
                if (json[i].id == product_id) {
                    $('.full_title').html(json[i].full_title)
                    $('.f').html(json[i].price)
                }
            }
        },
        error: function(err) {
            console.log(err)
        }
    })

    $('.plus1').click(() => {
        console.log(1)
        let num = $('input.amount1').val()
        num++
        $('input.amount1').val(num)
    })

    $('.minus1').click(() => {
        let num = $('input.amount1').val()
        if (num > 1) {
            num--
            $('input.amount1').val(num)
        }
    })

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