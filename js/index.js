$(function() {
    var local = localStorage.getItem('username');
    if (local) {
        console.log(local)
        $('.login_second span').html('欢迎回来 ' + local);
    }

    $.ajax({
        url: '../data/message.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function(json) {
            main2_listData(json);
        },
        error: function(err) {
            console.log(err)
        }
    })

    function main2_listData(data) {
        let result = '';

        for (let i = 0, len = 8; i < len; i++) {
            result += `<li id='${data[i].id}'>
                            <img src=${data[i].img_url} alt="">
                            <p>${data[i].name}</p>
                            <span>${data[i].title}</span>
                            <i>${data[i].price}</i>
                        </li>`
        }

        $('.main2_list').append(result)
        $('.main2_list').click(function(e) {
            let id;
            if (e.target.tagName != 'LI') {
                id = $(e.target).parent().attr('id')
            } else {
                id = $(e.target).attr('id')
            }

            localStorage.setItem('product', id)
            window.open('product.html')
        })
    }

    // $.ajax({
    //     url: '../data/index_data.json',
    //     type: 'get',
    //     dataType: 'json',
    //     cache: false,
    //     success: function(json) {
    //         b_listData(json)
    //     },
    //     error: function(err) {
    //         console.log(err)
    //     }
    // })

    // function b_listData(data) {
    //     let result = '',

    //         for (let i = 0, len = data.length; i < len; i++) {
    //             result += `
    //          <li>
    //             <img src=${data[i].img_url} alt="">${data[i].name}
    //          </li>
    //         `
    //         }
    //     $('.l_list').append(result);
    // }
})