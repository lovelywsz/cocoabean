$(function() {
    $('.searchBar').click(function(){
        $(this).addClass('active');
        //$(this).toggleClass('active');
    });
    $('.alertBtn').on('click', function(){
        var $dialogWrap = $('.alertWrap');
        var index = $(this).index();
        console.log(index);
        $dialogWrap.removeClass('active').eq(index).addClass('active')
        .on('click',function(){
            $(this).removeClass('active');
        });
    });
    $('.actionSheetBtn').on('click', function(){
        $('.actionSheet')
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