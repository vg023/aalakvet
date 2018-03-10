$(document).ready(function(e){

var scale_tween = new TweenMax.fromTo('#section2', 10, {
  y:-300,
  scale:0,
  opacity:0
},
{
  y:0,
  scale:1,
  opacity:1
});
var scale_tween2 = new TweenMax.fromTo('.jumbotron', 1, {
  x:-300,
  y:-400,
  scale:0,
  opacity:0,
  ease: Linear.easeNone
},
{
  x:0,
  y:0,
  scale:1,
  opacity:1
});


var controller = new ScrollMagic.Controller();

var escena1 = new ScrollMagic.Scene({
  triggerElement: '#section2',
  duration:'45%',
  reverse:true
})
.setTween(scale_tween)
.addTo(controller);
var escena2 = new ScrollMagic.Scene({
  triggerElement: 'nav',
  reverse:true
})
.setTween(scale_tween2)
.addTo(controller);

});
