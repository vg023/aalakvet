$(document).ready(function(e){

var scale_tween = new TweenMax.fromTo('#section2', 1, {
  y:-500,
  scale:0,
  opacity:0,
  ease: Linear.easeNone
},
{
  y:0,
  scale:1,
  opacity:1
});
var scale_tween2 = new TweenMax.fromTo('#section1', 1, {
  x:-500,
  scale:0,
  opacity:0,
  ease: Linear.easeNone
},
{
  x:0,
  scale:1,
  opacity:1
});


var controller = new ScrollMagic.Controller();

var escena1 = new ScrollMagic.Scene({
  triggerElement: '#section2',
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
