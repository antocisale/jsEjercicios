/***********************************************
 * 
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.  (OK)
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).  (OK)
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.  (OK)
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.   (OK)
 ***************************** 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 
 * 
 * 5. Hacer una función para borrar personas por mail.  (OK)
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.   (OK)
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.   (OK)
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/


const listaPersonas = []; /*la necesitamos para toda la aplicacion, por eso la ponemos afuera. 
                            va con const para no sobreescribirla*/
 /*array vacio para incluir datos de cada persona*/
const personaCheck = (nombre) => {
    let buscaPersonas = listaPersonas.find((persona)=>{ /**dentro del array listaPersonas va a buscar cada persona 
                                                        (los arrays con variables dentro),        y va a buscar */
        if (persona[0] == nombre){
            throw "Error - ese nombre ya existe en nuestros registros";
        } ;
    });
    /**opcion 2:
     * for (let i=0; i<listaPersonas.length; i++){
     *      if(listaPersonas[i][0]== nombre){ -- no es necesario poner el let de persona. 
     *          throw "El nombre ya existe";
     *       }
     * }
     */
}

const guardarPersona = ()=>{
    let persona =[];
    let nombre = prompt('decime tu nombre');
    let edad = prompt ('decime tu edad');
    let mail = prompt ('decime tu mail');
    personaCheck(nombre); /**esto puede estar tambien arriba, debajo de nombre */

    persona.push(nombre,edad,mail); /*pushea a persona los 3 datos*/
    listaPersonas.push(persona); /*pushea persona a la lista general, la lista general se va armando con cada lista persona*/
    
    /*OPCION 2: listaPersonas.push([nombre,edad,mail]) - no necesito ponerle un nombre, solo poniendolo asi esta bien*/
}
 guardarPersona (); /*cada vez que escribo encuesta me va a pedir estos datos y los va a pushear a la lista*/

 const showLista = () =>{ /**opcion 2: const get listaPersonas =()=>{ return listaPersonas;}(esto puede servir
                            para cambiar el nombre de la constante*/
     let verLista = confirm('Queres ver la lista completa?');
        if(verLista == true){
            console.log(listaPersonas);
        }
 }
 

const buscaMail = ()=>{ /**hay una opcion para unir el buscaMail con el nombreCheck - para reutilizar el codigo */
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
/**OPCION 2:
 * const deletePersonaByEmail = (email) =>{
 *      let index = listaPersonas.findIndex((listaPersonas)=>{ - de cada index de mi array lo va a revisar
 *          return persona[2]== mail; - que devuelva la persona 2 si la necesito - esta parte del index se puede
 *          sacar en una nueva funcion y usarla en cada una de las funciones que la necesitan - 
 *      });
 *      if (index >-1){
 *          personas.splice(index,1)}; - a partir de este elemento elimino X elementos
 * };
 */


/** se llama JS DOC o DOCBLOCK, sirve para entender de que va la funcion
 * 
 * @param {*} parteNombre 
 * @returns array|boolean
 * @throws Error
 */
const buscaNombre =(parteNombre)=>{  /*en general para buscar algo, 
                                    en el nombre  de la variable se usa get - Ej: getNombre*/
    for(i=0;i<listaPersonas.length; i++){
        if(listaPersonas[i][0].indexOf(parteNombre)!= -1){ /**busca posicion del string. 
                                                            index of devuelve siempre -1 cuando no encuentra nada  */
            return listaPersonas[i];
           }
    } 
    
}

/*return false - siempre cuando el for loopea y no encuentra nada, 
es una buea practica ponerlo abajo, como que si no funciona se retorna false*/


const cambiaNombre = (mail, nombreMod) =>{
    for (i=0; i<listaPersonas.length; i++){
        if(mail == listaPersonas[i][2]){
            confirm("queres cambiar el nombre?")
            if(true){
            listaPersonas[i][0]=nombreMod;
            i=listaPersonas.length;
            }
        }
    }
}


const cambiaEdad = (mail, edadMod) =>{
    for (i=0; i<listaPersonas.length; i++){
        if(mail == listaPersonas[i][2]){
            confirm("queres cambiar la edad?")
            if(true){
            listaPersonas[i][1]=edadMod;
            i=listaPersonas.length;
            }
        }
    }
}













const cambiaNombre = (mail, nombre) =>{
    for (i=0; i<listaPersonas.length; i++){
        if(mail == listaPersonas[i][2]){
            confirm("queres cambiar el nombre?")
            if(true){
            let nombreMod = prompt('Que nombre pongo?')
            listaPersonas[i][0]=nombreMod;
            }
        }
    }
}
cambiaNombre(, nombreMod)






























































/*version con find de ejercicio de busqueda, pero por cada array persona salta el error de busqueda*/
let buscaCorreo = listaPersonas.find((persona)=>{ 
    if (persona[2] == correoABuscar){
        console.log(persona[0]);
    }
});
if (buscaCorreo == undefined){
    alert('Error, mail no encontrado');
};


