
function validateNumber () {
   let value_input = document.querySelector('#input-field').value; // obtenemos el valor del input
   let response = /^\d+$/.test(value_input) ? expandedForm(value_input) : 'Solo ingresa números';

   /*
      validamos con una expresion regular para saber si solo numeros enteros se estan ingresando,
      nos falta llamar a nuestra funcion
   */

   document.querySelector('#response').innerHTML = response; // En la etiqueta span mostrarmos el valor de response
}


function expandedForm ( num ) {
   let array = String(num).split(''); // convertimos en string el número que llega y se separan los elementos

   return array
      .reverse() // invertimos los elementos del array
      .map( (x, i) => x+'0'.repeat(i)) /* creamos un nuevo array agregando 0 a cada uno de los elementos dependiendo su posición, para 
      ir formando, las unidades, decenas, centenas, etc. */
      .map( x => /^0*$/.test(x) ? x.replace(x, '') : x) // si x tiene solo ceros, los reemplazamos con vacio, en caso contrario, solo se devuelve el valor
      .reverse() // invertimos nuevamente el array
      .filter( x => x).join(' + '); // regresamos un nuevo array con los elementos unidos con un +
}