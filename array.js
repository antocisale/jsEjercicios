/************
 * crear array vacio
 * funcion para llenar array pidiendo por prompt
 * hacer una funcion que muestre el alert el ultimo valor agregado en la pantalla
 * hacer una funcion para imprimir la lista de valores en el array del console log
 *
 */
let datos=""
let array =[]
const listAsk = () =>{
  for (i=0; i<5; i++){
      datos=prompt("deci una palabra");
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