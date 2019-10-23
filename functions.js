let a=1;
const miFuncion = () =>{
    //Arrow function
    a+=2;
};


/*******
 * 1. hacer una funcion llamada "saludo"
 * 2. cada vez que llamo la funcion me pide un nombre;
 * 3. toma ese nombre y me dice "hola <nombre>" en un alert
 */

 const saludo = () =>{
     let name= prompt('cual es tu nombre?'); /*aca la variable solo funciona dentro de la funcion,
                                            no fuera de ella. Las variables solo funcionan en 
                                            las llaves que tienen cerca*/
     alert(`Hola ${name}`)
 }
 saludo();



let name = prompt('cual es tu nombre?'); /*aca la variable esta declarada antes de la funcion, entonces
                                        se declara de antemano, y solo se ejecuta la funcion cuando es llamada
                                        (en este caso, el alert es el que se ejecuta solo cuando lo llamo, no
                                        de primera)*/
 const saludo = () =>{
       alert(`Hola ${name}`)
}
saludo();



let name = prompt('cual es tu nombre?');
 const saludo = () =>{
       alert(`Hola ${name}`)
};
saludo();

/**************************** 
 * Hacer una funcion para elevar un numero al cuadrado, 
 * pidiendo el vlor por prompt y mostrandolo por alert
 * 
*******************************/
const cuadrado = () =>{
    let numero = prompt('dame un valor');
    /*let resultado = Math.pow(`${numero}`,2);
    alert(resultado);*/
    alert(Math.pow(`${numero}`,2));
};
cuadrado()