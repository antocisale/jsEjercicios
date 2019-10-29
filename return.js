/*************************************
 * hacer una funcion que reciba una frase y devuelva el numero de vocales que tiene la misma
 * 
 * ****************************************/

 const cuentaVocales = (frase)=>{
    let v = frase.match(/[aeiou]/gi);
    return v ===null ? 0: v.length;
 }
 cuentaVocales("un elefante se balanceaba sobre la tela de una arania")

 /** OPCION 2*/
const cuentaVocales =(dicho) =>{
    let dichoMin=dicho.toLowerCase(); /*convierto letras a minusculas*/
    let vocal="aeiou"; /*marca las letras que quiero encontrar*/
    let cuentaVocal= 0; /*el numero inicial de la cantidad de vocales que tengo*/
    for(i=0;i<dichoMin.length; i++){  /*loop para revisar cada i desde el inicio del string hasta el ultimo caracter*/
        if(vocal.indexOf(dichoMin[i])!= -1){ /*el index of busca si cada caracter del string aeiou esta en la frase
                                             si el caracter es diferente (-1), no se hace nada; si coincide algo
                                             de cada vocal, se suma uno al cuentaVocales*/
            cuentaVocal += 1;
        }
    }
    return cuentaVocal; /*devuelve el total de vocales contadas*/
}
cuentaVocales("un elefante se balanceaba sobre la tela de una arania");


/*********************************************************************
 * Hacer una funcion que tome, primero, una frase y luego pida un caracter para remover la frase ingresada
 * Observaciones: validar que el caracter ingresado sea solo uno. Si es mas de uno tirar un error
 **********************************************************************/





 const fraseElim =(frase)=>{
    let caracter = prompt("decime un caracter");
    let fraseSinCaracter;
    if(caracter.length<=1){
        for(let i=0;i<frase.length;i++){
            if(frase[i]==caracter){
                caracter = new RegExp(caracter,'g'); /*crea un objeto como expresion regular, de tipo global. 
                                                        Con esto identifica todos los caracteres, no solo el 
                                                        primero que encuentra asi*/
                fraseSinCaracter = frase.replace(caracter,"");
             } 
        } 
     }else{
        throw "Error, se debe colocar un solo caracter"
    }
    return fraseSinCaracter;
 }

 fraseElim("hola como estas");


