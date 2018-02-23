$(document).ready(function(e){
    $('.slider').slick({
      slidesToShow:1,
      infinite:true,
      autoplay: true,
      autoplaySpeed:2000,
      dots: true,
      arrows: true,
      pauseOnHover:false,
      fade:true
    });
    $('.slider').on('swipe', function(event, slick, direction){
      // left
     
  });
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log( $(this).attr('class') );
    console.log( $(slick));
    var tween = TweenMax.fromTo($(".img-slide-main"), 2,
      {
        x:-200,
        y:-200
     	},
     	{
/*
       		 x:0,
       		 y:0,
*/
        opacity:1,
 			   scale: 1,
 			   ease: Power2.easeOut, y: 0
 		   });
 		   var tween = TweenMax.fromTo($(".slidermask"), 2.5,
      {
        y:-200,
        x:300
     	},
     	{
/*
       		 x:0,
       		 y:0,
*/
        opacity:1,
 			   scale: 1,
 			   y:0,
 			   x:0
 		   });
    });
     		  
});
