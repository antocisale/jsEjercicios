/********
 * escribir una funcion que reciba como parametro un numero e imprima ese numero al reves
 * pista: buscar como transformar strings en arrays**/



const miLista = (numero = prompt('escribi un numero')) => {

   let miArray = Array.from(String(numero));
   console.log(miArray.reverse());
}
miLista();



/* OPCION CORRECTA*/

const reverseNumber = (numberToReverse) => {
   numberToReverse = numberToReverse.toString() /*convierte a string*/
      .split(" ") /*del string, usa estos caracteres para separar el string a un array*/
      .reverse() /*lo da vuelta*/
      .toString(); /*lo convierto a string*/
   console.log(numberToReverse);

}
reverseNumber(45628); /*el numero que yo ponga aca es el que va a ser el "number to reverse"*/

/********************************************************************************************
 * Escribir una funcion que reciba una palabra e imprima sus letras ordenadas alfabeticamente
 *********************************************************************************************/

const ordPalabra = (palabra) => {
   palabra = palabra.split("")
      .sort()
      .join(""); /**une sin separadores el array, si no se pone nada en () lo une con comas */
   console.log(palabra);
}
ordPalabra("prueba");

const ordPalabra = (palabra) => {
   palabra = palabra.split("")
      .sort()
      .toString(""); /**lo une con comas entre cada letra */
   console.log(palabra);
}
ordPalabra("prueba");


/*********************************************************************************************
 * escribir una funcion que reciba una frase e imprima la misma con la primera letra de cada palabra en mayusculas
 ***********************************************************************************************/

const mayusFrase = (frase) => {
   frase = frase.toLowerCase()
      .split(" ")
      .map(v => v[0].toUpperCase() + v.substr(1))
      .join(" ");
   console.log(frase);
}
mayusFrase("hola como estas")

/************************************************************************************************
 * escribir una funcion que reciba una frase e imprima la palabra mas larga de la misma
 ************************************************************************************************/

const bigPalabra = (frase) =>{
   let word = frase.split(" ");
   let largo = 0;
   let palabra = null;
   word.forEach((word)=>{
      if(largo < word.length){
         largo = word.length;
         palabra = word;}
   } )
   return palabra;
}

bigPalabra("un elefante se balanceaba sobre la tela de una arania");

///VERSION 2///

function longer(str) {
   let length = 0, longestWord = "";
   let text = str.split(" ");
   for(let i = 0 ; i < text.length; i++)
     {
       if(text[i].length > length){
           length = text[i].length;
           longestWord = text[i];
        }
 
     }
 
   return longestWord;
 };
 
 longer("Ah ok estoy buscando la palabras mas larga que exista en google, pongamos Otorrinolaringologo.")

///////VERSION 3//////////
 const funcion = (frase) => {                /*Planteo mi función*/
   frase = frase.split(" ");               /*Convierte al string en array*/
   var cero = 0;                           /*Comparo valores*/
   var strValor="";
   for (var i = 0; i<frase.length; i++){
       if (frase[i].length > cero){
           cero = frase[i].length;
       strValor=frase[i];
       }
   }
return strValor;
}
console.log (funcion(la mejor frase del mundo mundial))

