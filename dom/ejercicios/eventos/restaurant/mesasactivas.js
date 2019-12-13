const mesa = require('./mesas.js');

const mesasActivas = {
    lista: [],
    
    checkNro: function(mesa){
        if (typeof mesa.id != "number"){
            throw "el Id de la mesa debe ser un número"
        }
    },

    chequear: function(mesa){
        this.checkNro(mesa);
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id === mesa.id});
        if (index > -1){
            throw "mesa ocupada"
        }
    },

    agregar: function(mesa){
        this.chequear(mesa);
        this.lista.push(mesa);
        this.agregarMesaAlHTML(mesa);
    },

    eliminar: function(mesa){
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id === mesa.id});
        this.lista.splice(index,1);
    },

    addBotonCerrar: function(){
        let newBotonCerrar = document.createElement("button");
        newBotonCerrar.innerHTML = "Cerrar";
        newBotonCerrar.classList.add("cerrar"); // tengo que crear un MODAL
        return newBotonCerrar;
    },

    addBotonEliminar: function(){
        let newBotonEliminar = document.createElement("button");
        newBotonEliminar.innerHTML = "Eliminar";
        newBotonEliminar.classList.add("eliminar");
        return newBotonBorrar;
    },

    agregarMesaAlHTML: function(mesa){
        let list = document.querySelector("#tabla");
        let botonCerrar = this.addBotonCerrar();
        let botonBorrar = this.addBotonBorrar();
        
        let mesaNueva = document.createElement("tr");
        let mesaNuevaNro = document.createElement("td");
        let mesaNuevaCuenta = document.createElement("td");
        let mesaNuevaBotonCerrar = document.createElement("td");
        let mesaNuevaBotonEliminar = document.createElement("td");
        
    }
};

let boton = document.querySelector("#agregar");
let id = document.querySelector("#txtMesa").value;
boton.addEventListener("click", mesasActivas.agregar(id))

try {
    module.exports = mesasActivas;
 } catch (e) {}
