$(function() {
    $('.searchBar').click(function(){
        $(this).addClass('active');
        //$(this).toggleClass('active');
    });
    $('.alertBtn').on('click', function(){
        var $alertWrap = $('.alertWrap');
        var index = $(this).index();
        console.log(index);
        $alertWrap.removeClass('active').eq(index-1).addClass('active')
        .on('click',function(){
            $(this).removeClass('active');
        });
    });
    $('.toastBtn').on('click', function(){
        var $toastWrap = $('.toastWrap');
        var index = $(this).index();
        console.log(index);
        $toastWrap.removeClass('active').eq(index-1).addClass('active')
        setTimeout(function(){
            $toastWrap.removeClass('active')
        },2000)
    });
    $('.actionSheetBtn').on('click', function(){
        $('.actionSheetWrap')
        .addClass('active')
        .on('click', function(){
            $(this).removeClass('active');
        });
    });
    $('.navLeft').on('click', function() {
        //window.location.href = '../page/index.html' ;
        window.history.back();
    })
})