try{
const Producto = require('./productos');
}catch(e){};

const listaProductos = {
    lista: [],

    agregar: function (producto, precio, id) {
        if (id == undefined) {
            id = this.lista.length + 1;
        }
        let productoNuevo = new Producto(producto, precio, id);
        this.lista.push(productoNuevo);
        this.agregarProductoAlHTML(productoNuevo);
        this.agregarProductoParaCuentaMesa(productoNuevo);
    },

    eliminar: function (producto) {
        let index = this.lista.findIndex((productosDeLista) => {
            return productosDeLista.id === producto
        });
        this.lista.splice(index, 1);
    },

    addBotonEliminar: function () {
        let newBotonEliminar = document.createElement("button");
        newBotonEliminar.innerHTML = "Eliminar";
        newBotonEliminar.classList.add("eliminar");
        newBotonEliminar.addEventListener("click", () => {
            newBotonEliminar.parentElement.parentElement.remove();
        });
        return newBotonEliminar;
    },

    agregarProductoAlHTML: function (producto) {
        let list = document.querySelector("#tablaMenu");

        let productoNuevo = document.createElement("tr");
        productoNuevo.classList.add("filas");

        let productoNuevoId = document.createElement("td");
        productoNuevoId.innerHTML = producto.id;

        let productoNuevoNombre = document.createElement("td");
        productoNuevoNombre.innerHTML = producto.producto;

        let productoNuevoPrecio = document.createElement("td");
        productoNuevoPrecio.innerHTML = `$ ${producto.precio}`;

        let productoNuevoBotonEliminar = document.createElement("td");
        let botonEliminar = this.addBotonEliminar();
        productoNuevoBotonEliminar.appendChild(botonEliminar);

        productoNuevo.appendChild(productoNuevoId);
        productoNuevo.appendChild(productoNuevoNombre);
        productoNuevo.appendChild(productoNuevoPrecio);
        productoNuevo.appendChild(productoNuevoBotonEliminar);
        list.appendChild(productoNuevo);
    },
    
    agregarProductoParaCuentaMesa: function(producto){
        let list = document.querySelector("#tablaCargaProductos");
    
        let productoNuevo = document.createElement("tr");
        productoNuevo.classList.add("filas");
    
        let productoNuevoNombre = document.createElement("td");
        productoNuevoNombre.innerHTML = producto.producto;
    
        let productoNuevoCantidad = document.createElement("td");
        let cantidad = document.createElement("input");
        cantidad.setAttribute("type", "text");
        productoNuevoCantidad.appendChild(cantidad);
    
        productoNuevo.appendChild(productoNuevoNombre);
        productoNuevo.appendChild(productoNuevoCantidad);
        list.appendChild(productoNuevo)
    }


};

let botonAgregarProducto = document.querySelector("#agregarProducto");
botonAgregarProducto.addEventListener("click", () => {
    listaProductos.agregar(document.querySelector("#txtProducto").value,
        document.querySelector("#productoPrecio").value);
    document.querySelector("#txtProducto").value = "";
    document.querySelector("#productoPrecio").value = "";
});



try {
    module.exports = listaProductos;
} catch (e) {};