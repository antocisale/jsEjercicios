try {
    const Mesa = require('./mesas.js');
} catch(e){}

const mesasActivas = {
    lista: [],
    
    checkNro: function(mesa){
        mesa.id=parseInt(mesa.id);
        if (mesa.id === NaN){ //A CONTROLAR DESPUES
            throw "el Id de la mesa debe ser un número"
        }
    },

    chequear: function(mesa){
        this.checkNro(mesa);
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id === mesa.id});
        if (index > -1){
            alert("mesa ocupada");
            throw "mesa ocupada"
        }
    },

    agregar: function(mesa){
        let mesaNueva = new Mesa(mesa);
        this.chequear(mesaNueva);
        this.lista.push(mesaNueva);
        this.agregarMesaAlHTML(mesaNueva);
    },

    eliminar: function(mesa){    //PENDIENTE INCLUIR FX A BOTON
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id === mesa.id});
        this.lista.splice(index,1);
    },

    addBotonCerrar: function(){  //PENDIENTE CREACION DE MODAL
        let newBotonCerrar = document.createElement("button");
        newBotonCerrar.innerHTML = "Cerrar";
        newBotonCerrar.classList.add("cerrar");
        return newBotonCerrar;
    },

    addBotonEliminar: function(){
        let newBotonEliminar = document.createElement("button");
        newBotonEliminar.innerHTML = "Eliminar";
        newBotonEliminar.classList.add("eliminar");
        newBotonEliminar.addEventListener("click",()=>{
            newBotonEliminar.parentElement.parentElement.remove();
        });
        return newBotonEliminar;
    },

    agregarMesaAlHTML: function(mesa){
        let list = document.querySelector("#tablaMesasActivas");
        let mesaNueva = document.createElement("tr");
        mesaNueva.classList.add("filas");

        let mesaNuevaNro = document.createElement("td");
        mesaNuevaNro.innerHTML = mesa.id;
        mesaNuevaNro.id=`${mesa.id}`;
        
        let mesaNuevaCuenta = document.createElement("td");
        mesaNuevaCuenta.innerHTML = `$ ${mesa.cuenta.precio}`;

        let mesaNuevaBotonCerrar = document.createElement("td");
        let botonCerrar = this.addBotonCerrar();
        mesaNuevaBotonCerrar.appendChild(botonCerrar);

        let mesaNuevaBotonEliminar = document.createElement("td");
        let botonEliminar = this.addBotonEliminar();
        mesaNuevaBotonEliminar.appendChild(botonEliminar);

        mesaNueva.appendChild(mesaNuevaNro);
        mesaNueva.appendChild(mesaNuevaCuenta);
        mesaNueva.appendChild(mesaNuevaBotonCerrar);
        mesaNueva.appendChild(mesaNuevaBotonEliminar);
        list.appendChild(mesaNueva);
        selectorDeMesasActivas(mesaNuevaNro.id);
    }
};

let botonAgregarMesa = document.querySelector("#agregarMesa");
botonAgregarMesa.addEventListener("click", ()=>{
    mesasActivas.agregar(document.querySelector("#txtMesa").value);
    return document.querySelector("#txtMesa").value ="";
});

const selectorDeMesasActivas = (mesa)=>{
    let selector = document.querySelector("#mesaCargaCuenta");
    let elemLista = document.createElement("option");
        elemLista.innerHTML=mesa;
        elemLista.id = mesa;
        selector.appendChild(elemLista);
}

try {
    module.exports = mesasActivas;
} catch (e) {}
