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
 let chart = [];
 let totalChart =0;

const checkId = (id)=>{
    if(id==undefined){
        let existId = Array.from(listProducts,id =>id.id);
        return Math.max(existId)+1;
    };
    for (let item of listProducts){
        if (item.id == id){
            throw "el Id ya existe";
        }
    }
    return id;
}


const addProduct = (id, title, description, price)=>{
    listProducts.push({
        id: checkId(id),
        title: title,
        description: description,
        price: parseFloat(price)
    })
} 

const modProduct = (id, newTitle, newDesc, newPrice)=>{
    for(let item of listProducts){
        if (item.id == id){
            item.title = newTitle;
            item.description = newDesc;
            item.price = newPrice; 
            return item;
        }
    }
        return "Id no encontrado";
}

const delProduct=(id) =>{
    for (let item of listProducts){
        if (item.id ==id){
            listProducts.splice(item,1);
            return listProducts;
        }
    }
    return "Id no encontrado";
}

const addChart = (id) =>{
    for (let item of listProducts){
        if(item.id == id){
            chart.push(item);
            return chart;
        }
    }
    
}

const delChart = (id) =>{
    for (let item of chart){
        if(item.id==id){
            let chartMod = chart.splice(item,1);
            return chartMod;
        }
    }
}

const modChart = (id,idMod)=>{
    delChart(id);
    addChart(idMod);
    return chart;
}

const sumChart = () =>{
    chart.forEach((item)=>{
        totalChart += item.price;
        return totalChart;
    })
    totalChart= totalChart.toFixed(2)
}

beforeEach(() => {
    listProducts = [];
    chart = [];
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
    addProduct(undefined,"producto 2", "description 2", 44.68);
    expect(listProducts[1]).toStrictEqual({
        id: 2,
        title: "producto 2",
        description: "description 2",
        price: 44.68
        }
    )
 });

 test(`cargar un tercer producto pero que salte error porque id esta duplicado`, ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    expect(()=>{
        addProduct(2,"producto 2", "description 2", 44.68);
    }).toThrow("el Id ya existe");
}
);

test ('modificar un producto ya cargado', ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    modProduct(3, "titulonuevo", "description nueva", 54.24);
    expect(listProducts[2]).toStrictEqual({
        id: 3,
        title: "titulonuevo",
        description: "description nueva",
        price: 54.24
    })
}
);

test ('eliminar un producto ya cargado', ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    delProduct(3);
    expect(listProducts.length).toBe(2)
}
);

test ('agrego un producto al carrito', ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    addChart(3);
    addChart(2);
    expect(chart[0]).toStrictEqual({
        id: 3,
        title: "producto 3",
        description: "description 3",
        price: 67.68
    });
    expect(chart[1]).toStrictEqual({
        id: 2,
        title: "producto 2",
        description: "description 2",
        price: 44.68
    })
}
);

test ('elimino un producto del carrito', ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    addChart(3);
    addChart(2);
    delChart(2);
    expect(chart.length).toBe(1)
}
);

test ('modifico un producto del carrito', ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    addChart(3);
    addChart(2);
    modChart(2,1);
    expect(chart[1]).toStrictEqual({
        id: 1,
        title: "titulo",
        description: "descripcion",
        price: 25.8
    })
}
);

test('el valor total de mi carrito', () =>{
    addProduct(1, "titulo", "descripcion", 25.80);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    addChart(3);
    addChart(2);
    addChart(1);
    addChart(3);
    sumChart();
    expect(totalChart).toBe("205.84")
}
);

test ('modificar un producto y que no lo encuentre', ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    expect(modProduct(4, "titulonuevo", "description nueva", 54.24)).toBe("Id no encontrado")
}
);

test ('elminar un producto y que no lo encuentre', ()=>{
    addProduct(1, "titulo", "descripcion", 25.8);
    addProduct(2,"producto 2", "description 2", 44.68);
    addProduct(3,"producto 3", "description 3", 67.68);
    expect(delProduct(4)).toBe("Id no encontrado")
}
);


