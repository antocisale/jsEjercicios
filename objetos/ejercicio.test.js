/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/modificar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 */

 let listProducts = [];

const searchBigProd = ()=>{
    listProducts.find((id))=>{
        return 
    })
}


const addProduct = (id, title, description, price)=>{
    listProducts.push({
        id: searchBigProd(id),
        title: title,
        description: description,
        price: parseFloat(price)
    })
} 


beforeEach(() => {
    listProducts = [];
  });

 test(`cargar productos nuevos`, ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    expect(listProducts[0]).toStrictEqual({
        id: 1,
        title: "titulo",
        description: "descripcion",
        price: 25.8
        }
    )
 });

 test(`cargar un segundo producto en el que el id se agregue solo`, ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct( ,"producto 2", "description 2", 44.68);
    expect(listProducts[1]).toStrictEqual({
        id: 2,
        title: "producto 2",
        description: "description 2",
        price: 44.68
        }
    )
 });