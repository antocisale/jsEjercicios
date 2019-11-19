/***********************************************
 * Crear un objeto "receta" que tenga una lista 
 * de ingredientes con su cantidad, y un 
 * metodo que muestre un texto de 
 * las cantidades. Por ejemplo:
 * - La receta <nombre> lleva 2 tazas de harina,
 * 5 gramos de levadura, etc...
 */

 const receta = {
     _ingredientes: [
         {
            ingrediente: "harina",
            cantidad: 2,
            medida: "tazas",
         },
         {
            ingrediente: "levadura",
            cantidad: 5,
            medida: "gramos",
         }
     ],
    get ingredientes (){
        for (let i=0; i<this._ingredientes.length; i++){
            console.log(`${this._ingredientes[i].cantidad} ${this._ingredientes[i].medida} de ${this._ingredientes[i].ingrediente}`);
        }
    }
 }