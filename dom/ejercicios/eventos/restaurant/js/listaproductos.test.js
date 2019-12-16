const listaproductos = require('./listaproductos'),
    Producto = require('./productos');

test('agrego un producto a la lista',()=>{
    listaproductos.agregar(1,"cafe",20);
    expect(listaproductos.lista.length).toBe(1);
    expect(lista.productos.lista[0]).toStrictEqual({
        "id":1,
        "producto":"cafe",
        "precio":20
    })
});