$(function() {
    var local = localStorage.getItem('username');
    if (local) {
        $('.right .r_one').html('欢迎回来' + local);
    }




    let goodsData;


    $.ajax({
        url: '../data/user.php',
        type: 'post',
        dataType: 'json',
        data: {
            username: localStorage.getItem('username'),
            request_type: 'getInfo'
        },
        success: function(result) {
            // console.log(result)
            render_cart(result)
        },
        error: function(err) {
            console.log(err)
        }
    })

    let myajax = $.ajax({
        url: '../data/message.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function(json) {
            goodsData = json
        },
        error: function(err) {
            console.log(err)
        }
    })



    function render_cart(data) {
        $.when(myajax).done(function() {
            let temp = '';
            let total_price = 0;
            let goodsList = '';
            // console.log(goodsData)
            for (let i = 0, len = data.length; i < len; i++) {
                for (let j = 0, lenj = goodsData.length; j < lenj; j++) {
                    if (data[i].product_id == goodsData[j].id) {
                        temp += `
                        <div class="goods_list" total_price=${parseInt(goodsData[j].price.substring(1)) * parseInt(data[i].product_amount)} price=${goodsData[j].price.substring(1)}>
                            <input type="checkbox">
                            <img src=${goodsData[j].img_url} alt="" class="goods_img">
                            <p class="describe">
                                ${goodsData[j].full_title}
                            </p>
                            <p class="price">${goodsData[j].price}</p>
                            <p class="amount_module">
                                <span class="minus">-</span>
                                <input type="number" class="amount deal" value=${data[i].product_amount} min="1"></input>
                                <span class="plus">+</span>
                            </p>
                            <p class="total_price">￥${parseInt(goodsData[j].price.substring(1)) * parseInt(data[i].product_amount) }</p>
                            <div class="delete">
                                删除
                                <span id="delete_confirm">
                                    <p>您确定要删除该商品?</p>
                                    <div class="confirm_button">
                                        <span class="yes">是</span>
                                        <span class="no">否</span>
                                    </div>
                                </span>
                            </div> 
                                
                        </div>
                        `
                    }
                }

            }
            $('.my_cart').append(temp)

        })


        $('.my_cart').on('click', '.goods_list .amount_module .minus', function(e) {
            let num = $(e.target).next().val()
            if (num > 1) {
                num -= 1
                $(e.target).next().val(num)

                let single_price = $(e.target).parent().parent().attr('price')
                let new_total = parseInt(single_price) * parseInt(num)
                $(e.target).parent().next().html('¥ ' + new_total)

            }
        })

        $('.my_cart').on('click', '.goods_list .amount_module .plus', function(e) {
            let num = $(e.target).prev().val()
            num = parseInt(num) + 1
            $(e.target).prev().val(num)

            let single_price = $(e.target).parent().parent().attr('price')
            let new_total = parseInt(single_price) * parseInt(num)

            $(e.target).parent().next().html('¥ ' + new_total)
        })
    }





})