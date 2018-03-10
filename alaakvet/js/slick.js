$(document).ready(function(e){
    $('.slider').slick({
      slidesToShow:1,
      infinite:true,
      autoplay: true,
      autoplaySpeed:3000,
      dots: true,
      arrows: true,
      pauseOnHover:false,
      fade:true
    });
    $('.slider').on('swipe', function(event, slick, direction, currentSlide, nextSlide){
      if($(slick).currentSlide == 'left'){
        console.log("hola");
      }else{
        console.log("adios");
      }

  });
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log( $(this).attr('class') );
    console.log( $(slick));

 		   var tween = TweenMax.fromTo($(".slidermask"), 1.5,
      {
        y:-200,
     	},
     	{
        opacity:1,
 			   scale: 1,
 			   x:0,
         ease:Bounce.easeOut, y:0
 		   });
    });

});
