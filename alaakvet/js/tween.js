$(document).ready(function(e){
    var $sliderWrap = $('.slider-wrap');
    var $sliderImg = $('.img-slide-main');
    var $slider = $('.slidermask');
    TweenLite.set($sliderWrap,{opacity:0,x:200,y:-200});
    TweenLite.set($slider, {opacity:0, x:-100, y:-100});
      var tl = new TimelineLite();
      tl
        .to($sliderWrap,5,{opacity:1,x:0,y:0})
        .to($slider, 6, {opacity:1},1)
        .to($slider,1,{x:0},2)
        .to($slider,1,{y:-50},3)
        .to($slider,1.5,{ease:Bounce.easeOut, y:0});


});
