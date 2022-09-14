// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = Object.keys(objeto).map(function(ele){
    return [ele, objeto[ele]]
  })
  return array;
}
console.log(deObjetoAmatriz(objeto={D: 1, G: 3, R: 5}))

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
    {
    if(objeto.hasOwnProperty(string[i])){
      objeto[string[i]] += 1
    }else{
      objeto[string[i]] = 1
    }
  }
  return objeto;
}
console.log(numberOfCharacters("antartica"))


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minusculas = ""
  let mayusculasAdelante = "";
  for(var i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayusculasAdelante += s[i]
  }else minusculas += s[i]
}
  return mayusculasAdelante + minusculas;
}
console.log(capToFront("soyHENRY"))


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var otra = []
  var reverso = str.split(" ").reverse().join(" ")
  for(var i = 0; i < reverso.length; i++){
      otra.unshift(reverso[i])
  }
return otra.join("");
} 
// video de david con lo q yo quería hacer https://www.youtube.com/watch?v=RQDdPrkbdWA&t=777s&ab_channel=TelodigoenC%C3%B3digo


console.log(asAmirror("The Henry Challenge"))

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // https://www.youtube.com/watch?v=QV0a0pB5aCI&t=381s&ab_channel=TelodigoenC%C3%B3digo 
}
console.log(capicua(989))


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //var nueva = cadena.split(" ").filter(function(ele){
  //  if(cadena[ele] !== "a" || cadena[ele] !== "b" || cadena[ele] !== "c")return ele
  //});
  //return nueva;
  var nueva = cadena.split("").filter(function(ele){
    if(ele !== "a" && ele !== "b" && ele !== "c")return ele
  });
  return nueva.join("");
}
console.log(deleteAbc("Hola como va"))

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //https://www.youtube.com/watch?v=fbJy_sUvuLg&ab_channel=TelodigoenC%C3%B3digo 
}
console.log(sortArray(["hola", "hasta", "va", "casaa", "oy", ]))

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = [];
  for(var i = 0; i < arreglo1.length; i++){
    for(var j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j])nuevoArray.push(arreglo1[i])
    }
  }
  return nuevoArray
}
console.log(buscoInterseccion([2,3,4], [4,2,4]))



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

