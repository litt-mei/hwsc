$(function() {
    $.ajax({
        url: '../data/message.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function(json) {
            main2_listData(json);
        },
        error: function(err) {
            console.log(err);
        }
    })

    function main2_listData(data) {
        let result = '';

        for (let i = 0, len = data.length; i < len; i++) {
            result += `
           <li id= '${data[i].id}'>
                <img src=${data[i].img_url} alt="">
                <i>${data[i].name}</i>
                <a href="#" class="money">${data[i].price}起</a>
                <a href="#" class="more">多款可选</a>
                <span>2229人评价 98%好评</span>
            </li>
           `
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
})