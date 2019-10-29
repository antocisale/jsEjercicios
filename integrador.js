/***********************************************
 * 
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 5. Hacer una función para borrar personas por mail.
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/


let listaPersonas = [];
const personaCheck = (param1) => {
    if (listaPersonas.indexOf(nombre) == -1){
}

const guardarPersona = ()=>{
    let persona =[]; /*array vacio para incluir datos de cada persona*/
    let nombre = prompt('decime tu nombre');
    let edad = prompt ('decime tu edad');
    let mail = prompt ('decime tu mail');

    persona.push(nombre,edad,mail); /*pushea a persona los 3 datos*/
    listaPersonas.push(persona); /*pushea persona a la lista general, la lista general se va armando con cada lista persona*/
  
    personaCheck(nombre);
}
 guardarPersona (); /*cada vez que escribo encuesta me va a pedir estos datos y los va a pushear a la lista*/
 









 let general=[]
 const datos=()=>{
   let lista=[];
   let nombre=prompt("Nombre");
   let edad=prompt("Edad");
   let email=prompt("Email");
   lista.push(nombre,edad,email);
   general.push(lista)
 }
 datos();
 let persona = [`${nombre}, ${edad}, ${mail}`];
 for (i=0; i<listaPersonas.length; i++){
     if(listaPersonas[i]==false){
        listaPersonas[i].push(`${persona}`);
    }
 }

 


/*undefined*/
 let nombre = prompt('decime tu nombre');
 let edad = prompt ('decime tu edad');
 let mail = prompt ('decime tu mail');
 let arrayGral = [];
 let persona = [];
 let union;
 const encuesta = (nombre, edad, mail)=>{
    for (let i=0; i<arrayGral; i++){
        persona = [`${nombre}, ${edad}, ${mail}`];
        union = arrayGral.push(persona);
        arrayGral[i]++;
        return arrayGral;
    }
 }
 encuesta (nombre, edad, mail);