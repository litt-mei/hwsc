$(function() {
    var local = localStorage.getItem('username');
    if (local) {
        $('.right .r_one').html('欢迎回来' + local);
    }

})