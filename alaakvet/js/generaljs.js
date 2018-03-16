$(document).ready(function(e){
var seccion2 = $('#section2');
var serviConte =  $('.servicio-conte');
var serviTitulo = $('.servicio-titulo');
serviConte.hide();
serviTitulo.on("click",function(e){
  $(this).closest('.servicios').find($(serviConte)).fadeToggle("slow");
  $(this).parent().siblings().find($(serviConte)).fadeOut('fast');
});

});
