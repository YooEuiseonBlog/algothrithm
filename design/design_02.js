function onGeoOk(position) {
    const API_KEY = "34f03c607cbd5ac6878b951a96d17bef";
     const lat = position.coords.latitude;
     const lon = position.coords.longitude;
     
     const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&lang=kr&appid="+API_KEY+"&units=metric";
     fetch(url)
       .then((response) => response.json())
       .then((data) => {
         const weather = document.querySelector("#weather span:nth-child(2n)");
         const city = document.querySelector("#weather span:last-child");
         //city.innerText = data.name;
         weather.innerHTML = data.weather[0].description +'/'+ data.main.temp;
         
         // 날씨에 따른 배경화면 변경
            let weatherinfo = data.weather[0].main;
   
         if (weatherinfo == "Rain") {
              document.body.style.background = "url(${url}/img/raining.png) no-repeat center center fixed",
              document.body.style.backgroundSize = "cover";
              document.body.style.color = "#ffffff";
         } else if (weatherinfo == "Clouds") {
              document.body.style.background = "url(${url}/img/구름.gif) no-repeat center center fixed",
              document.body.style.backgroundSize = "cover";
              document.body.style.color = "#4d4d4d";
         } else if (weatherinfo == "Clear") {
                document.body.style.background = "url(${url}/img/blueblue.gif) no-repeat center center fixed";
               document.body.style.backgroundSize = "cover";
               document.body.style.color = "#4d4d4d";
         } else {
              document.body.style.background = "url(${url}/img/bluesky.png) no-repeat center center fixed",
              document.body.style.backgroundSize = "cover";
              document.body.style.color = "#4d4d4d";
         }
         
         //cody temp 단계 설정
         var temp = data.main.temp;
         if(temp<=4) {
            temp = 1;
         }else if(temp>4&&temp<=8){
            temp = 2;            
         }else if(temp>8&&temp<=11){
            temp = 3;            
         }else if(temp>11&&temp<=16){
            temp = 4;            
         }else if(temp>16&&temp<=19){
            temp = 5;            
         }else if(temp>19&&temp<=22){
            temp = 6;            
         }else if(temp>22&&temp<=27){
            temp = 7;            
         }else if(temp>28){
            temp = 8;            
         }
         $(".main_codylink").attr("href","/cody/main_cody?temp="+temp);//cody_href
       });
   }
   
   function onGeoError() {
     alert("위치를 찾을 수 없습니다. ");
   }
   
   navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
   
   const weather = document.querySelector('#weather');
   const submenu = document.querySelector('.submenu');
   
   
   function mouseenter(e) {
     submenu.style.visibility = "visible"
   }
   
   function dbmouse(e) {
    submenu.style.visibility = "hidden"
   }
   
   weather.addEventListener("click",mouseenter)
   weather.addEventListener("dbclick",dbmouse)
   
   
     // ============================================== 스크롤 이벤트 ==================================================
        
     $(document).ready(function () {
       fullset();
       quickClick();
     });
     
     function fullset() {
       var pageindex = $("#fullpage > .fullsection").size(); 
       for (var i = 1; i <= pageindex; i++) {
         $("#fullpage > .quick > ul").append("<li></li>");
       }
       $("#fullpage .quick ul :first-child").addClass("on");
   
       $(window).bind("mousewheel", function (event) {
         var page = $(".quick ul li.on");
         if ($("body").find("#fullpage:animated").length >= 1) return false;
         //마우스 휠을 위로
         if (event.originalEvent.wheelDelta >= 0) {
           var before = page.index();
           if (page.index() >= 0)
             page.prev().addClass("on").siblings(".on").removeClass("on");
           var pagelength = 0;
           for (var i = 1; i < before; i++) {
             pagelength += $(".full" + i).height();
           }
           if (page.index() > 0) {
             page = page.index() - 1;
             $("#fullpage").animate({ top: -pagelength + "px" }, 1000, "swing");
           }
         } else {
           var nextPage = parseInt(page.index() + 1); //다음페이지번호
           var lastPageNum = parseInt($(".quick ul li").size()); //마지막 페이지번호
   
           if (page.index() <= $(".quick ul li").size() - 1) {
             page.next().addClass("on").siblings(".on").removeClass("on");
           }
   
           if (nextPage < lastPageNum) {
             //마지막 페이지가 아닐때만 animate !
             var pagelength = 170;
             for (var i = 1; i < nextPage + 1; i++) {
               //총 페이지 길이 구하기
               //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
               pagelength += $(".full" + i).height();
             }
             $("#fullpage").animate({ top: -pagelength + "px" }, 1000, "swing");
           }
         }
       });
       
       $(window).resize(function () {
         var resizeindex = $(".quick ul li.on").index() + 1;
   
         var pagelength = 0;
         for (var i = 1; i < resizeindex; i++) {
           //총 페이지 길이 구하기
           pagelength += $(".full" + i).height();
         }
   
         $("#fullpage").animate({ top: -pagelength + "px" }, 0);
       });
     }
     
     
     // 사이드 퀵버튼 클릭 이동
     function quickClick() {
       $(".quick li").click(function () {
         var gnbindex = $(this).index() + 1;
         var length = 0;
         for (var i = 1; i < gnbindex; i++) {
           length += $(".full" + i).height();
         }
         if ($("body").find("#fullpage:animated").length >= 1) return false;
         $(this).addClass("on").siblings("li").removeClass("on");
   
         $("#fullpage").animate({ top: -length + "px" }, 800, "swing");
         return false;
       });
     }
     // ============================================== 스크롤 이벤트 끝 ==================================================
   
     // =============================================두번째 화면 마우스 이벤트 =================================================
   
     var $l = $(".left");
     var $r = $(".right");
   
   
     $l.mouseenter(function () {
       $(".container").addClass("left-is-hovered");
     }).mouseleave(function () {
       $(".container").removeClass("left-is-hovered");
       
     });
   
     $r.mouseenter(function () {
       $(".container").addClass("right-is-hovered");
     }).mouseleave(function () {
       $(".container").removeClass("right-is-hovered");
       
     });
    
   
     // =============================================두번째 화면 마우스 이벤트 =================================================
   