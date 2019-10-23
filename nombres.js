/********************
 * hacer un array que se llame "nombres"
 * pedirle al usuario que ingrese 5 nombres
 * imprimirlos en el orden ingresado
 * imprimirlos en el orden inverso
 ****************************** */


OPCION 1:

let names=[];
let pregunta;
for (i=0; i<5; i++){
    pregunta=prompt('ingresa un nombre');
    names[i]=pregunta;
    console.log(names);
   
}
if(i==5){
    console.log(names.reverse())
}


OPCION 2:

let names=[];
for (i=0; i<5; i++){
    names[i]=prompt('ingresa un nombre');
    console.log(names);
   
}
if(i==5){
    console.log(`${names[4]}, ${names[3]}, ${names[2]}, ${names[1]}, ${names[0]}`)
}


OPCION 3:

let names=[];
let namesRev="";
for (i=0; i<5; i++){
    names[i]=prompt('ingresa un nombre');
    console.log(names);
   
}

for(i=4;i>=0;i--){
    namesRev+=names[i];
    console.log(namesRev);
}
 

OPCION 4:

const names=[]
for (i=0; i<5; i++){
    names[i]=prompt('ingresa un nombre');
    console.log(names[i]);
   
}



OPCION 5
let names=[]
for (i=0; i<5; i++){
    let pregunta =prompt('ingresa un nombre');
    names.push(pregunta); /*el ultimo coso escrito va al final*/
   console.log(names);
   names.unshift(pregunta); /*ordena el ultimo al reves*/
   console.log(names);
}
