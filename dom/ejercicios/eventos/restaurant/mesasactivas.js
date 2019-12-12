const mesa = require('./mesas.js');

const mesasActivas = {
    lista: [],
    
    checkNro (mesa){
        if (typeof mesa.id != "number"){
            throw "el Id de la mesa debe ser un número"
        }
    },

    chequear (mesa){
        this.checkNro(mesa);
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id === mesa.id});
        if (index > -1){
            throw "mesa ocupada"
        }
    },

    agregar(mesa){
        this.chequear(mesa);
        this.lista.push(mesa);
    },

    eliminar(mesa){
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id === mesa.id});
        this.lista.splice(index,1);
    }

}

module.exports = mesasActivas;