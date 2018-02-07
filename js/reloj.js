//Esto que sigue sirve para que se ejecute cuando se termine de cargar todo, garantizando su funcionamiento
var fecha;
var temas = [
  'https://bootswatch.com/4/flatly/bootstrap.css',
  'https://bootswatch.com/4/superhero/bootstrap.css'
];
function escribeFecha(){
  // Esto va a poner la hora
  fecha = new Date();
  $('#horas').text(fecha.getHours());
  $('#minutos').text(fecha.getMinutes());
  $('#segundos').text(fecha.getSeconds());

  // Día es de 6 hasta las 18:00
  if(
  fecha.getHours() >= 6 &&
  fecha.getHours() <= 18
  ){
    $('#tema').attr('href', temas[0] );
  }else{
    $('#tema').attr('href', temas[1] );
  }
}


$(document).ready(function(){
  escribeFecha();
  setInterval(function(){
    escribeFecha();
    console.info('Escribiendo Fecha');
  }, 1000);


});
