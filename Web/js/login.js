$(function(){
    $('#login').click(function(){
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');
    });
});