$(document).ready(function(e){
    var $sliderWrap = $('.slider-wrap');
    var $sliderImg = $('.img-slide-main');
    var $slider = $('.slidermask');
    var $flecha =('.icono-down');
    var $cuerpo = ('html,body');
    TweenLite.set($sliderWrap,{opacity:0,x:200,y:-200});
    TweenLite.set($slider, {opacity:0, x:-100, y:-100});
    TweenLite.set($flecha, {opacity:0});
      var tl = new TimelineLite();
      tl
        .to($sliderWrap,5,{opacity:1,x:0,y:0})
        .to($slider, 6, {opacity:1},1)
        .to($slider,1,{x:0},2)
        .to($slider,1,{y:-50},3)
        .to($slider,1.5,{ease:Bounce.easeOut, y:0});
        TweenLite.delayedCall(6,flecha);
        function flecha() {
        var tween = TweenMax.fromTo($flecha, 2,
     		  {
     			 scale: 1,
         	 bottom: 20
       	  },
     		  {
           opacity:1,
     			 scale: 3,
         	 bottom: 50,
     	     repeat: -1, /* Aka infinite amount of repeats */
         	 yoyo: true /* Make it go back and forth */
     		  });

          $($flecha).on('mouseenter', function(event){
            tween.pause();
          });
          $($flecha).on('mouseleave', function(event){
            tween.play();
          });

          $($flecha).on('click', function(event){
            $('html,body').animate({
            scrollTop: $('#barra').offset().top},
            'slow');
          });
      }

});
