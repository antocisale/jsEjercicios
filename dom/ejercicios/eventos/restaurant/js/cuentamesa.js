try{
    const listaProductos = require('./listaproductos');
    const ProductoMesa = require('./productoMesa'),
    mesasActivas = require('./mesasactivas.js/');
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
        };
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
    let mesaAModificar = elegirMesa();
    let listaDeMesas = document.querySelectorAll("#tablaMesasActivas>tr>td");
    for(let mesa of listaDeMesas){
        if(mesa.id == mesaAModificar){
            mesa.nextSibling.innerHTML =`$ ${nuevoValor}`}
        };
};


let botonAgregarAMesa = document.querySelector("#agregarAMesa");
botonAgregarAMesa.addEventListener("click", () => {
    let mesaElegida = elegirMesa();
    let mesabuscada = mesasActivas.lista.findIndex((mesasactivas)=>{
        return mesasactivas.id == mesaElegida;
    });
    let listaproductos = document.querySelectorAll("#tablaCargaProductos > tr");
    //por mesa, agarra Cuenta, y ahi
    // loop de todo el array de productos para que pushee
    for(let producto of listaproductos){
    mesasActivas.lista[mesabuscada].cuenta.agregar(producto.cells[0].id,
        producto.cells[1].childNodes[0].value);
        producto.cells[1].childNodes[0].value = "";
    }
});

const elegirMesa = () =>{
    let selectorDeMesa = document.querySelector("#mesaCargaCuenta").selectedOptions;
    for(let i=0; i<selectorDeMesa.length;i++){
    return selectorDeMesa[i].value;
}};

try {
    module.exports = {Cuenta, actualizarCuentaHTML};
} catch (e) {}