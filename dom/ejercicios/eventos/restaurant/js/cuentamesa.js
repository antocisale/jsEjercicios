try{
    const listaProductos = require('./listaproductos');
    const ProductoMesa = require('./productoMesa');
}catch(e){};


class Cuenta{
    constructor(){
        this.lista = [];
        this.precio = 0;
    }
    agregar(idProducto, cantidad) {
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
        this.obtenerCuentaTotal();/// NECESITO VER COMO ACTUALIZO EL PRECIO AUTOMATICAMENTE EN EL DOM
    }
    obtenerCuentaTotal(){
        this.precio =  this.lista.reduce((acumulador, productoEnMesa) => {
            return acumulador += productoEnMesa.cantidad * productoEnMesa.producto.precio;
        }, 0);
        return this.precio;
    }
};

try {
    module.exports = Cuenta;
 } catch (e) {}