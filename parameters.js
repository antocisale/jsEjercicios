/********
 * escribir una funcion que reciba como parametro un numero e imprima ese numero al reves
 * pista: buscar como transformar strings en arrays**/


 
  const miLista=(numero = prompt('escribi un numero'))=>{
  
   let miArray = Array.from(String(numero));
    console.log(miArray.reverse());
 }
 miLista();


 let miString = parseInt(numero);
 let miArray= Array.from(Number(miString));