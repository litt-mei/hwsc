$(function() {
    $.ajax({
        url: '../data/index_data.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function(json) {
            main2_listData(json)
        },
        error: function(err) {
            console.log(err)
        }
    })

    function main2_listData(data) {
        let result = '';

        for (let i = 0, len = data.length; i < len; i++) {
            result += `<li>
                        <img src=${data[i].img_url} alt="">
                        <p>${data[i].name}</p>
                        <span>${data[i].title}</span>
                        <i>${data[i].price}</i>
                        <a href="./product.html" class="mlist_a"></a>
                        </li>`
        }

        $('.main2_list').append(result)
    }
})