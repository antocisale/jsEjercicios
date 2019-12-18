try{
    const listaProductos = require('./listaproductos');
    const ProductoMesa = require('./productoMesa');
}catch(e){};


class Cuenta{
    constructor(){
        this.lista = [];
        this.precio = 0;
    }
    agregar(idProducto, cantidad) { //OJO - ME FALTA IDENTIFICAR LA MESA DONDE VA!!!
        for(let producto of this.lista) {
            if(producto.producto.id == idProducto){
                producto.cantidad += cantidad;
                return true;
            }
        }
        let productoEncontrado = listaProductos.lista.find(producto =>{
            return producto.id == idProducto;
        });
        const productoEnMesa = new ProductoMesa(productoEncontrado, cantidad);
        this.lista.push(productoEnMesa);
        this.obtenerCuentaTotal();
    }
    obtenerCuentaTotal(){
        this.precio =  this.lista.reduce((acumulador, productoEnMesa) => {
            return acumulador += productoEnMesa.cantidad * productoEnMesa.producto.precio;
        }, 0);
        return actualizarCuentaHTML(this.precio);
    }

};

const actualizarCuentaHTML=(nuevoValor)=>{
    let mesaID = document.querySelector("#mesaCargaCuenta").value;
    let mesaAModificar = document.querySelector(`#mesa-numero-${mesaID}`);
    mesaAModificar.nextElementSibling.innerHTML = nuevoValor;
};


// A MODIFICAR - NECESITO QUE ME IDENTIFIQUE LA MESA!
let botonAgregarAMesa = document.querySelector("#agregarAMesa");
botonAgregarAMesa.addEventListener("click", () => {
    listaProductoslis.agregar(document.querySelector("#txtProducto").value)

});


try {
    module.exports = {Cuenta, actualizarCuentaHTML};
 } catch (e) {}