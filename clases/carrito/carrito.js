/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 * 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */
class Producto {
    constructor(tipoProd, marca, precio, descuentos, id) {
        this.tipoProd = tipoProd;
        this.marca = marca;
        this.precio = precio;
        this.descuentos = descuentos;
        this.id = id;
        productos.agregar(this);
    }
}
class Perfume extends Producto {
    constructor(marca, precio, descuentos, id) {
        super("perfume", marca, precio, descuentos, id);
    }
}
class Chocolate extends Producto {
    constructor(porcentaje, leche, tipo, extras, marca, precio, descuentos, id) {
        super("chocolate", marca, precio, descuentos, id);
        this.porcentaje = porcentaje;
        this.leche = leche;
        this.tipo = tipo;
        this.extras = extras;
    }
    //extrasPosibles["almendras", "mani", "pasas", null];


}

class Auricular extends Producto {
    constructor(wireless = false, tipo, marca, precio, descuentos, id) {
        super("auriculares", marca, precio, descuentos, id);
        this.wireless = wireless;
        this.tipo = tipo;

    }
}

const productos = {
    lista: [],
    agregar: function (producto) {
        this.lista.push(producto)
    },
    modificar: function (id, dataProducto) {
        for (let producto of this.lista) {
            if (producto.id == id) {
                // ["titulo", "precio"]
                let misKeys = Object.keys(dataProducto);
                for (let key of misKeys) {
                    producto[key] = dataProducto[key];
                }
            }
        }
    },
    borrar: function (id) {
        const index = this.lista.findIndex(producto => {
            return producto.id == id;
        });
        if (index == -1) {
            throw "Error: El id buscado no existe";
        }
        this.lista.splice(index, 1);
    }
};

const carrito = {
    lista: [],
    agregar: function (id, cantidad) {
        const producto = productos.lista.find((producto) => {
            return producto.id == id;
        });
        producto.cantidad = cantidad;
        this.lista.push(producto);
    },
    borrar: function (id) {
        let index = this.lista.findIndex((producto) => {
            return producto.id == id;
        });
        if (index == -1) {
            throw "Error: Producto no existe en carrito";
        }
        this.lista.splice(index, 1);
    },
    sumarPrecio: function () {
        let total = 0;
        for (let producto of this.lista) {
            total += parseFloat(producto.precio * producto.cantidad);
        }
        return total;
    }
};

module.exports = {
    productos,
    carrito,
    Producto,
    Perfume,
    Chocolate,
    Auricular
};
