$(function(){$(".searchBar").click(function(){$(this).addClass("active")}),$(".alertBtn").on("click",function(){var t=$(".alertWrap"),c=$(this).index();console.log(c),t.removeClass("active").eq(c-1).addClass("active").on("click",function(){$(this).removeClass("active")})}),$(".toastBtn").on("click",function(){var t=$(".toastWrap"),c=$(this).index();console.log(c),t.removeClass("active").eq(c-1).addClass("active"),setTimeout(function(){t.removeClass("active")},2e3)}),$(".actionSheetBtn").on("click",function(){$(".actionSheetWrap").addClass("active").on("click",function(){$(this).removeClass("active")})}),$(".navLeft").on("click",function(){window.history.back()})});