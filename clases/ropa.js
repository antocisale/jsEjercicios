/**
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * 
 * Crear varios tipos distintos de ropa.
 */

 class Ropa {
     constructor (nombre, tipo, talle, color, boton, material){
         this.nombre = nombre;
         this.tipo = tipo;
         this.talle = talle;
         this.color = color;
         this.boton = boton;
         this.material = material;
     }
    calzar (){
         if (this.tipo != "calzado"){
             throw "error, no se puede calzar";
         }
         return true;
     }
    lavarEnLavarropas (){
         if ((this.material == "lana") || (this.material == "seda")){
             throw "no podes lavar en lavarropas"
         }
         return true;
     }
    abotonar (){
        if (this.boton == true){
            return "se puede abotonar"
        }
        throw "no tiene botones para abotonar";
    }
    tipoTalle (){
        if (this.tipo == "superior"){
            switch(this.talle){
                case 1, 2:
                    return "talle chico";
                  
                case 3: 
                    return "talle mediano";
                    
                case 4, 5:
                    return "talle grande";
                    
                default:
                    throw "talle incorrecto" 
            }        
        } else if(this.tipo == "inferior"){
            if (this.talle <= 27){
                return "talle chico";
            }else if (this.talle >= 28){
                return "talle grande";
            }
        }else{
            throw "es calzado, no podes ver que tipo de talle tiene!"
        }

    }
 }




 module.exports={
     Ropa,
 }