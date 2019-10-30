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
 ***************************** 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 
 * 
 * 5. Hacer una función para borrar personas por mail.
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/


let listaPersonas = [];
 /*array vacio para incluir datos de cada persona*/
const personaCheck = (nombre) => {
    let buscaPersonas = listaPersonas.find((persona)=>{ /**dentro del array listaPersonas va a buscar cada persona 
                                                        (los arrays con variables dentro),        y va a buscar */
        if (persona[0] == nombre){
            throw "Error - ese nombre ya existe en nuestros registros";
        } ;
    });
}

const guardarPersona = ()=>{
    let persona =[];
    let nombre = prompt('decime tu nombre');
    let edad = prompt ('decime tu edad');
    let mail = prompt ('decime tu mail');
    personaCheck(nombre); /**esto puede estar tambien arriba, debajo de nombre */

    persona.push(nombre,edad,mail); /*pushea a persona los 3 datos*/
    listaPersonas.push(persona); /*pushea persona a la lista general, la lista general se va armando con cada lista persona*/
      
}
 guardarPersona (); /*cada vez que escribo encuesta me va a pedir estos datos y los va a pushear a la lista*/

 const showLista = () =>{
     let verLista = confirm('Queres ver la lista completa?');
        if(verLista == true){
            console.log(listaPersonas);
        }
 }
 
 /*version con for de ejercicio de busqueda, pero por cada array persona salta el error de busqueda*/
const buscaMail = ()=>{
    let esta = false; /**booleano para revisar que si todo el for se ejecuta, 
                    y no se encuentra lo que busco, salte el error */
    let correoABuscar = prompt("ingresa un mail para buscarlo en nuestra lista");
    for (i=0; i<listaPersonas.length; i++){
        if(listaPersonas[i][2] == correoABuscar){
            console.log(listaPersonas[i][0]);
            i=listaPersonas.length;
            esta=true;
        } 
    }
    if(esta==false){
        console.log('No existe persona en nuestra lista con ese mail')
    }
}

const borraPersona = ()=>{
    let correoABuscar = prompt("ingresa un mail para buscarlo en nuestra lista");
    for (i=0; i<listaPersonas.length; i++){
        if(correoABuscar == listaPersonas[i][2]){
            confirm("queres eliminar la persona?")
            if(true){
                let listaPersonasElim = listaPersonas.splice(i,1);
            }
        }
    }
}

const buscaNombre =()=>{



}

const cambiaNombre = () =>{
    let correoABuscar = prompt("ingresa un mail para buscarlo en nuestra lista");
    for (i=0; i<listaPersonas.length; i++){
        if(correoABuscar == listaPersonas[i][2]){
            confirm("queres cambiar el nombre?")
            if(true){
            let nombreMod = prompt('Que nombre pongo?')
            let nombreCambiado = listaPersonas.splice(listaPersonas.findIndex(nombre => nombreMod,1); 
                
                
            
            }
        }
    }
}































































/*version con find de ejercicio de busqueda, pero por cada array persona salta el error de busqueda*/
let buscaCorreo = listaPersonas.find((persona)=>{ 
    if (persona[2] == correoABuscar){
        console.log(persona[0]);
    }
});
if (buscaCorreo == undefined){
    alert('Error, mail no encontrado');
};









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