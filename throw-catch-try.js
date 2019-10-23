try{
    console.log(1);
    addlert("hola!"); //* esto esta mal escrito, por eso sale un error*//
    console.log(2);
}catch (err){
    console.log("error");
}

try{
    if (typeof c == 'undefined'){ 
        throw 500;
    }
}catch (err){
    console.log('An error ocurred with number: ${err}') /*el numero del error lo saca del throw*/
}



/****************************
 * 1. pedir un dia de la semana pro prompt al usuario en texto( ej: lunes)
 * 2. devolver el numero del dia (ej:2)
 * 3. en caso de que el dia ingresado no exista, tirar un error y agarrarlo, e imprimirlo
 ******************************/
try{
 let dia = prompt('decime un dia de la semana');
 dia = dia.toLowerCase();
 switch(dia){
    case "lunes":
         console.log(1);
         break;
    case "martes":
        console.log(2);
        break;
    case "miércoles":
    case "miercoles":
        console.log(3);
        break;
    case "jueves":
        console.log(4);
        break;
    case "viernes":
        console.log(5);
        break;
    case "sábado":
    case "sabado":
        console.log(6);
        break;
    case "domingo":
        console.log(7);
        break;
    default:
            throw "No Existe el Dia Ingresado";
    }
} catch (err){
    console.warn(err);
    console.warn( "Error en 500 / error en lo que yo quiera llamarlo");  /* asi puedo llamarlo y darme cuenta
                                                                de donde esta el error*/
} finally{
    console.log("proceso de switch terminado en xx segundos");
}

console.log("este es un mensaje suelto");
/**************** importante ************************
el try tiene que cerrar antes que el catch
el error debe cubrir toda la funcion para revisarla completa.
si quiero 2 opciones para un mismo console.log, tengo que ponerlos como en el caso del miercoles y del sabado
el try puede tener variables dentro.
el console.warn muestra un error en amarillo, como para que le prestemos atencion

La gracia del try y catch es que, en caso de que haya error, 
se sigue ejecutando el codigo siguiente sin drama. -- en este caso, si no estuviera el try catch, 
el console.log del mensaje suelto no se mostraria

el finally es muy copado para que si o si se muestra, independientemente de si el try y catch estaba bien o no
*************************************************** */