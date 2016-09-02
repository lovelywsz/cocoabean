
$(function() {
    $('.navLeft').on('click', function() {
        window.history.back();
        //window.location.href = '../index.html' ;
    })
    $('.searchBar').click(function(){
        $(this).addClass('active');
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
        console.log("dfdf");
        $('.actionSheet')
        .addClass('active')
        .on('click', function(){
            $(this).removeClass('active');
        });
    });
})
