//Esto que sigue sirve para que se ejecute cuando se termine de cargar todo, garantizando su funcionamiento
var fecha;
function escribeFecha(){
  // Esto va a poner la hora
  fecha = new Date();
  $('#horas').text(fecha.getHours());
  $('#minutos').text(fecha.getMinutes());
  $('#segundos').text(fecha.getSeconds());
}

$(document).ready(function(){
  escribeFecha();
  setInterval(function(){
    escribeFecha();
    console.info('Escribiendo Fecha');
  }, 1000);


});
