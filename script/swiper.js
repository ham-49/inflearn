if(matchMedia("screen and (max-width: 480px)").matches){
  console.log("mobile");
 var swiper = new Swiper(".mySwiper", {});
      var swiper = new Swiper(".mySwiper02", {
        slidesPerView:2, //한번에 보여줄 슬라이드 수
        spaceBetween:30, //간격
        autoplay:{
          delay:3000, 
          disableOnInteraction:true, 
          pauseOnMouseEnter: true,
        },
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}else if(matchMedia("screen and (min-width: 768px)").matches){
  console.log("desktop");
  var swiper = new Swiper(".mySwiper", {});
      var swiper = new Swiper(".mySwiper02", {
        slidesPerView:4, //한번에 보여줄 슬라이드 수
        spaceBetween:30, //간격
        autoplay:{
          delay:3000, 
          disableOnInteraction:true, 
          pauseOnMouseEnter: true,
        },
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  });
};
/* 크기 변할때 자동 새로고침 */
window.onresize = function(){
  document.location.reload();
};
