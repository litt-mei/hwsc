window.onload = function() {
    var user = $1('.form .username');
    var pass = $1('.form .password');
    var log_in = $1('.form .log_in');
    var sign = $1('.form .sign')
        // console.log(sign)

    log_in.onclick = function() {
        var us = user.value;
        var pa = pass.value;
        if (!us || !pa) {
            alert('用户密码不能为空，请输入信息');
            return;
        }

        $.ajax({
            url: '../data/user.php',
            type: 'post',
            dataType: 'text',
            data: {
                username: us,
                password: pa,
                request_type: 'login'
            },
            success: function(result) {
                result = eval('(' + result + ')')

                if (result.error == 2) {
                    alert('请先注册')
                } else if (result.error == 1) {
                    alert('密码或用户名错误')
                } else if (result.error == 0) {
                    location.href = './index.html'
                    localStorage.setItem('username', us);
                    // localStorage.setItem('password', pa);
                }
            },
            error: function(err) {
                console.log(err)
            }
        })


        // if (getCookie('username')) {
        //     user.value = getCookie('username');
        //     pass.value = getCookie('password')
        // }


    }
    sign.onclick = function() {
        console.log(1)
        var us = user.value;
        var pa = pass.value;
        if (!us || !pa) {
            alert('用户密码不能为空，请输入信息');
            return;
        }

        $.ajax({
            url: '../data/user.php',
            type: 'post',
            dataType: 'json',
            data: {
                username: us,
                password: pa,
                request_type: 'signin'
            },
            success: function(result) {
                // result = eval('(' + result + ')')

                if (result.error == 0) {
                    alert('注册成功, 请登录')
                    $('.form .username').val('')
                    $('.form .password').val('')
                        // location.href = './index.html'
                        // localStorage.setItem('username', us);
                        // localStorage.setItem('password', pa);
                }
            },
            error: function(err) {
                console.log(err)
            }
        })

        // location.href = '../index.html'
    }

}