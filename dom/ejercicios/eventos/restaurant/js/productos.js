class Producto {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}

try {
    module.exports = Producto;
} catch (e) {}