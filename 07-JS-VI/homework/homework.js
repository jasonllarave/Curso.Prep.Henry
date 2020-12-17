// No cambie ninguno de los nombres de las funciones

function  invocarCallback ( cb )  {
  // Invoca la devolución de llamada `cb`
  cb ( ) ;
}

function  sumarArray ( numeros ,  cb )  {
  // Suma todos los números enteros (int / integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Primera opcion
  // var numeros = [1,2,3,4,5]
  // var suma = 0;
  // para (var i = 0; i <numeros.length; i ++) {
  // suma = suma + numeros [i];
  //}
  // cb (suma);

  // Segunda opcion
  var  sumaTotal  =  numeros . reducir ( función ( acc ,  curr )  {
    return  acc  +  curr ;
  } , 0 ) ;
  cb ( sumaTotal ) ;
}

función  paraCada ( matriz ,  cb )  {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  // array.forEach (function (el, index) {
  // cb (el);
  //});
  para ( var  i  =  0 ;  i  <  array . longitud ;  i ++ )  {
    cb ( matriz [ i ] ) ;
  }
}

 mapa de funciones ( matriz ,  cb )  {
  // Crea un nuevo arreglo
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por` cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // var matriz = [1,2,3,4,5]
  // función cb (e) {console.log (e)}
  // nuevoarray = []
  // var nuevoArray = [];
  // para (var i = 0; i <array.length; i ++) {
  // nuevoArray.push (cb (array [i]));
  // nuevoArray [i] = cb (matriz [i]);
  //}
  var  nuevoArray  =  matriz . mapa ( función ( el )  {
    return  cb ( el ) ;
  } ) ;
  return  nuevoArray ;
}

// No modificar nada debajo de esta línea
// --------------------------------

módulo . exportaciones  =  {
  invocarCallback ,
  sumarArray ,
  forEach ,
  mapa ,
} ;

Un callback (llamada de vuelta) es una función
 que recibe como argumento otra función y la ejecuta.