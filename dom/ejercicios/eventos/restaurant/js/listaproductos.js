try {
    const Producto = require('./productos');
} catch(e){}

const listaproductos = {
    lista: [],

    agregar: function(id, producto, precio){
        let productoNuevo = new Producto(id,producto,precio);
        this.lista.push(productoNuevo);
    }
};



try{
module.exports = listaproductos;
}catch(e){};


