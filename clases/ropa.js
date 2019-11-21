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
class Indumentaria {
    constructor (tipo){
        this.tipo = tipo;
    }
}

 class Ropa extends Indumentaria {
     constructor (tipo, boton,color, material){
         super("vestimenta");
         this.tipo = tipo;   
         this.boton = boton;
         this.color = color;
         this.material = material;
     }

    abotonar (){
        if (this.boton == true){
            return "se puede abotonar";
        }
        throw "no tiene botones para abotonar";
    }
    lavarEnLavarropas (){
        if ((this.material == "lana") || (this.material == "seda")){
            throw "no podes lavar en lavarropas";
        }
        return true;
    }
 }

 class Inferior extends Ropa{
     constructor(nombre, talle, color, boton, material){
        super("inferior", boton, color, material);
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.boton = boton;
        this.material = material;
     }
     tipoTalle (){
            if (this.talle <= 27){
                return "talle chico";
            }else if (this.talle >= 28){
                return "talle grande";
            }
     }
}

class Superior extends Ropa{
    constructor (nombre, talle, color, material,boton){
        super("superior", boton, material);
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.material = material;
        this.boton = boton;
    }

    tipoTalle(){
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
    } 
    

}

 class Calzado extends Indumentaria{
     constructor(cordones, modelo){
         super("calzado");
         this.cordones = cordones;
         this.modelo = modelo;
     }
     calzar (){
        if (this.cordones != true){
            if (this.modelo != "ojota"){
                return "uso el cierre o engancho los zapatos";
            }    
        }
        return "ato los cordones";
    }
 }




 module.exports={
     Superior,
     Inferior,
     Calzado,
 }