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

        localStorage.setItem('username', us);
        localStorage.setItem('password', pa);

        // if (getCookie('username')) {
        //     user.value = getCookie('username');
        //     pass.value = getCookie('password')
        // }

        location.href = '../index.html'
    }
    sign.onclick = function() {
        console.log(1)
        var us = user.value;
        var pa = pass.value;
        if (!us || !pa) {
            alert('用户密码不能为空，请输入信息');
            return;
        }

        location.href = '../index.html'
    }

}