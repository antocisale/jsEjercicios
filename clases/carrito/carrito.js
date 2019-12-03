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
    get info() {
        return `Este es un ${this.tipoProd} marca ${this.marca}. Su costo es de $${this.precio} y tiene un descuento del ${this.descuentos}%. Su ID es ${this.id}`
    }
}
class Chocolate extends Producto {
    constructor(porcentaje, leche, tipo, extras, marca, precio, descuentos, id) {
        super("chocolate", marca, precio, descuentos, id);
        let extrasPosibles = ["almendras", "mani", "pasas", null];
        this.porcentaje = porcentaje;
        this.leche = leche;
        this.tipo = tipo;
        let extra = extrasPosibles.indexOf(extras);
        if (extra > -1) {
            this.extras = extras;
        } else { throw "Error" };
    }
    get leche() {
        return this._leche;
    }
    set leche(leche) {
        if (leche == false) {
            return this._leche = "no tiene leche";
        } return this._leche = "tiene leche";
    }
    get info() {
        return `Este es un ${this.tipoProd} marca ${this.marca}. Tiene ${this.porcentaje}% de cacao, y ${this.leche}. Viene con ${this.extras}.  Su costo es de $${this.precio} y tiene un descuento del ${this.descuentos}%.`
    }
}

class Auricular extends Producto {
    constructor(wireless, tipo, marca, precio, descuentos, id) {
        super("auriculares", marca, precio, descuentos, id);
        let tipoAuris = ["cerrados", "abiertos"];
        this.wireless = wireless;
        let tipoAuri = tipoAuris.indexOf(tipo);
        if (tipoAuri > -1) {
            this.tipo = tipo;
        } else { throw "Error" }
    }
    get wireless() {
        return this._wireless;
    }
    set wireless(wireless) {
        if (wireless == false) {
            return this._wireless = "tienen cables";
        } return this._wireless = "son wireless"
    }

    get info() {
        return `Estos son ${this.tipoProd} ${this.tipo} marca ${this.marca} y ${this._wireless}. Su precio es de $${this.precio}, y tiene un descuento del ${this.descuentos}%. Su id es ${this.id}.`
    }
}

const productos = {
    lista: [],
    agregar: function (producto) {
        this.lista.push(producto)
    },
    mostrar: function () {
        for (let i = 0; i < this.lista.length; i++) {
            return console.log(this.lista[i].info);
        }
    },
    /*     modificar: function (id, dataProducto) {
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
        }, */
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
    mostrar: function () {
        for (let producto of this.lista) {
            console.log(producto.tipoProd, producto.marca, producto.cantidad)
        }
    },
    /*     borrar: function (id) {
            let index = this.lista.findIndex((producto) => {
                return producto.id == id;
            });
            if (index == -1) {
                throw "Error: Producto no existe en carrito";
            }
            this.lista.splice(index, 1);
        }, */
    sumarPrecio: function () {
        let total = 0;
        for (let producto of this.lista) {
            if (producto.descuentos > 0) {
                let dto = producto.descuentos / 100;
                let valor = producto.precio - (producto.precio * dto);
                total += valor;
            } else if (producto.descuentos == 0) {
                total += parseFloat(producto.precio);
            }
        }
        return total;
    },
    descuento: function () {

    }
};


module.exports = {
    productos,
    carrito,
    Producto,
    Perfume,
    Chocolate,
    Auricular,

};
