$(function(){$(".searchBar").click(function(){$(this).addClass("active")}),$(".alertBtn").on("click",function(){var c=$(".alertWrap"),i=$(this).index();console.log(i),c.removeClass("active").eq(i-1).addClass("active").on("click",function(){$(this).removeClass("active")})}),$(".actionSheetBtn").on("click",function(){$(".actionSheetWrap").addClass("active").on("click",function(){$(this).removeClass("active")})}),$(".navLeft").on("click",function(){window.history.back()})});