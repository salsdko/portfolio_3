//서브메뉴 -한개 나오는 메뉴 (css에서 서브에 display를 none으로 둬야 새로고침시 서브메뉴가 보이지 않는다)

// $("nav > ul.gnb > li").mouseover(function(){
//     $(this).find("ul.sub").stop().slideDown(200);
// });
// $("nav > ul.gnb > li").mouseout(function(){
//     $(this).find("ul.sub").stop().slideUp(200);
// });


//메뉴부분 브라우저 전체

$("nav > ul > li").mouseover(function(){
    $(".nav_bg, ul.sub").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
    $(".nav_bg, ul.sub").stop().slideUp(200);
});





// 탑버튼
$(function(){

    $('.go_top').click(function(e){
       e.preventDefault();
       $('html,body').stop().animate({scrollTop:0},300); 
    });

});

