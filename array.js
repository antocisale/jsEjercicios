/************
 * crear array vacio
 * funcion para llenar array pidiendo por prompt
 * hacer una funcion que muestre el alert el ultimo valor agregado en la pantalla
 * hacer una funcion para imprimir la lista de valores en el array del console log
 *
 */

let array =[]
const listAsk = () =>{
  for (i=0; i<5; i++){
    let datos=prompt("deci una palabra");
      array.push(datos); 
  }
};
const listInfo = () =>{
    alert(array[array.length - 1])
};
const listPrint = () => {
    console.log(array);
};
listAsk();
listInfo();
listPrint();


version oficial:
const array =[]
const listAsk = () =>{
      let datos=prompt("deci una palabra");
      array.push(datos); 
};
const listInfo = () =>{
    let ultimo = array[array.lenght-1];
};
const listPrint = () => {
    console.log(array);
};
listAsk();
listInfo();
listPrint();


//// otra
const array =[]
const listAsk = () =>{
      array.push(prompt('Decime algo')); 
};