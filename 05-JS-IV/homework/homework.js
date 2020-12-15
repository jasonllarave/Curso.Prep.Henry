// No cambies los nombres de las funciones.

función  crearGato ( nombre ,  edad )  {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (función) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var  obj  =  {
    nombre : nombre ,
    edad : edad ,
    miau : function ( )  {
      devuelve  '¡Miau!' ;
    }
  } ;
  return  obj ;
}


función  agregarPropiedad ( objeto ,  propiedad )  {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "propiedad" (una cadena / string)
  // Tu código: 
  objeto [ propiedad ]  =  nulo ;
  devolver  objeto ;
}

function  invocarMetodo ( objeto ,  metodo )  {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("devuelto")
  // Tu código:
  objeto [ metodo ] ( ) ;
}

function  multiplicarNumeroDesconocidoPorCinco ( objetoMisterioso )  {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  // var ojbMisterioso = {
  // numeroMisterioso: 4;
  //}
  var  result  =  objetoMisterioso . numeroMisterioso * 5 ;

  devolver  resultado ;
}

function  eliminarPropiedad ( objeto ,  propiedad )  {
  // Elimina la propiedad "propiedad" de "objeto"
  // Devuelve el objeto
  // Tu código:
  eliminar  objeto [ propiedad ] ;

  devolver  objeto ;
}

function  nuevoUsuario ( nombre ,  email ,  contraseña )  {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var  obj  =  {
    nombre : nombre ,
    correo electrónico : correo electrónico ,
    contraseña : contraseña
  } ;

  return  obj ;
}

function  tieneEmail ( usuario )  {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if ( usuario [ 'email' ] )  {  
    devuelve  verdadero ;
  }  más  {
    devolver  falso ;
  }
}


function  tienePropiedad ( objeto ,  propiedad )  {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( objeto [ propiedad ] )  {
      devuelve  verdadero ;
    }  más  {
        devolver  falso ;
  }
  // devuelve objeto.hasOwnProperty (propiedad);
}

function  verificarPassword ( usuario ,  contraseña )  {
  // Comprueba si la "contraseña" enviada coincide con la propiedad "contraseña" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  return  usuario [ 'contraseña' ]  ===  contraseña ;
}

function  actualizarPassword ( usuario ,  nuevaPassword )  {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario . contraseña  =  nuevaPassword ;
  return  usuario ;
}

función  agregarAmigo ( usuario ,  nuevoAmigo )  {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  // var user = {
  // amigos: ['Pedro', 'Sebastian']
  //}
  usuario . amigos . empujar ( nuevoAmigo ) ;

  return  usuario ;
}

function  pasarUsuarioAPremium ( usuarios )  {
  // "usuarios" es un arreglo de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Definir cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  para ( var  i  =  0 ;  i  <  usuarios . longitud ;  i ++ )  {
    usuarios [ i ] . esPremium  =  verdadero ;
  }
  devolver  usuarios ;
}

function  sumarLikesDeUsuario ( usuario )  {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int / integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  // var usuario = {
  // publicaciones: [{
  // Me gusta: 4
  //}]
  //};
  var  suma  =  0 ;

  for ( var  i  =  0 ;  i  <  usuario . posts . length ;  i ++ )  {
    suma  =  suma  +  usuario . publicaciones [ i ] . le gusta ;
  }

  return  suma ;

}

function  agregarMetodoCalculoDescuento ( producto )  {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto [precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento () -> 20 - (20 * 0.2)
  // Tu código:
  // var product = {
  // precio: 10,
  // porcentajeDeDescuento: 5,
  // calcularPrecioDescuento:
  //};
  producto . calcularPrecioDescuento  =  function ( )  {
    devuelve  esto . precio  -  (  este . precio * este . porcentajeDeDescuento  ) ;
  } ;
  devolver  producto ;
}

// No modificar nada debajo de esta línea
// --------------------------------

módulo . exportaciones  =  {
  crearGato ,
  agregarPropiedad ,
  invocarMetodo ,
  multiplicarNumeroDesconocidoPorCinco ,
  eliminarPropiedad ,
  nuevoUsuario ,
  tieneEmail ,
  tienePropiedad ,
  verificarPassword ,
  actualizarPassword ,
  agregarAmigo ,
  pasarUsuarioAPremium ,
  sumarLikesDeUsuario ,
  agregarMetodoCalculoDescuento
} ;

Un objeto: 
es una colección de propiedades, y una 
propiedad es una asociación entre un 
nombre (o clave) y un valor. 

una propiedad:
es una asociación
 entre un nombre (o clave) y un valor.

 Los métodos:
 sirven para hacer acciones como una ventana emergente,
  modificar las propiedades de un objeto, añadir elementos a una lista, quitarlos, 
  transformar un string en un número entero o decimal,

   bucle for: 
   ofrecen una forma rápida 
  y sencilla de hacer algo repetidamente

  notacion por corchetes
  nombre_propiedad es una cadena. La cadena no tiene que 
  ser un identificador válido; puede 
  tener cualquier valor, por ejemplo 
  "1foo", "!bar!", o incluso " " (un espacio).

  Notación por punto:
  propiedad debe ser un identificador válido 
  de JavaScript, esto es, una secuencia alfanumérica de caracteres, 
  incluyendo también el guión bajo ("_") y el signo dolar ("$"), 
  que no puede comenzar por un número. 
  Por ejemplo, objeto.$1 es válido,
   mientras que objeto.1 no lo es.