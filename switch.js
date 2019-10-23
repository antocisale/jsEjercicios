/***************** 
 * pedir un mes del anio por prompt en numeros (ej:12)
 * devolver el mes del anio en texto (ej: "diciembre")
 * hacer 2 veces: una con switch y una con if else
********************/

let mes=prompt('elegi un numero del 1 al 12');
mes=parseInt(mes);
switch (mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    default:
        console.log("Diciembre");
}

OPCION 2:


let mes=prompt('elegi un numero del 1 al 12');
mes=parseInt(mes);
if (mes==1){
    console.log("Enero");
}
else if (mes==2){
    console.log("Febrero");
}
else if (mes==3){
    console.log("Marzo");
}
else if (mes==4){
    console.log("Abril");
}
else if (mes==5){
    console.log("Mayo");
}
else if (mes==6){
    console.log("Junio");
}
else if (mes==7){
    console.log("Julio");
}
else if (mes==8){
    console.log("Agosto");
}
else if (mes==9){
    console.log("Septiembre");
}
else if (mes==10){
    console.log("Octubre");
}
else if (mes==11){
    console.log("Noviembre");
}
else{
    console.log("Diciembre");
}