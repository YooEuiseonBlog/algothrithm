$(function(){
    fullset;
    quickClick;
});

function fullset() {
    var pageindex = $("#fullpage>.fullsection").size();
    //fullpage 안에 섹션이 (.fullsection) 몇 개인지 확인하기
    for (var i=1; i<=pageindex; i++) {
        $('#fullpage.quick>ul').append("<li></li>");
    }
    $('#fullpage .quick ul :first-child').addClass("on");
    // 일단 화면이 로드 되었을 때는 퀵버튼 1번째에 불이 들어온다.
    //마우스 휠 이벤트
    $(window).on(
        "mousewheel", function(event) {
            var page = $('.quick ul li.on');
            alert(page.index()+1); // 현재 on되어있는 페이지 번호 
           if($('body').find('#fullpage:animated').length>=1)
           return false; 
           //마우스 휠을 위로
           if(event.wheelDelta >=0) {
               var before = page.index();
               if(before>=0) {
                   page.prev().addClass("on").siblings(".on")
                   .removeClass("on");//퀵버튼 옮기기
               }
               var pagelength = 0;
               for(var i=1; i < before; i++) {
                   pagelength += $(".full"+i).height();
               }
               if(before > 0) {
                   //첫번째 페이지가 아닐 때(index는 0부터 시작임)
                   page = before -1;
                   $("#fullpage"). animate({
                    top : -pagelength + "px"
                   }, 1000, "swing");
               }else {
                   alert("첫 번째 페이지입니다.");
               }
           }else {
               //마우스 휠을 아래로
               var nextPage= parseInt(page.index()+1); // 다음페이지번호
               var lastPageNum = parseInt($(".quick ul li").size()); // 마지막페이지  번호
               // 현재페이지 번호 <= (마지막 페이지 번호 - 1)
               // 이럴 때 퀵버튼 옮기기
               if(page.index() <= $(".quick ul li").size() - 1) {
                   page.next().addClass("on").siblings(".on").removeClass("on");
               }

               if(last)
           }
           
        }
    );
}