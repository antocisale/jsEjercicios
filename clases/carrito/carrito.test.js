const FreeShop = require('./carrito'),
    Producto = FreeShop.Producto,
    Perfume = FreeShop.Perfume,
    Auricular = FreeShop.Auricular,
    Chocolate = FreeShop.Chocolate,
    productos = FreeShop.productos;

beforeEach(() => {
    productos.lista = [];
});
    
test ("validar que el perfume que carguemos tenga todo lo de clases",()=>{
    const perfumeVerano = new Perfume("Channel", 3000, 20);
    expect(perfumeVerano.tipoProd).toBe("perfume");
    expect(perfumeVerano instanceof Producto).toBe(true)
});

test ("validar que el chocolate creado sea chocolate y no perfume", ()=>{
    const chocolateNegro = new Chocolate(70,false,"negro",null, "Savoy", 100, 40);
    expect (chocolateNegro instanceof Chocolate).toBe(true);
    expect (chocolateNegro instanceof Perfume).toBe(false)
});

test ("agregar 3 productos al array de lista y que su largo sea 3",()=>{
    const chocolateNegro = new Chocolate(70, false, "negro", null, "Savoy",100,40, 1);
    const perfumeVerano = new Perfume("Channel",3000,20,2);
    const auricular = new Auricular(false,"cerrado", "sony", 2018, 5, 3);
    expect(productos.lista).toHaveLength(3);
});

test ("agrego un chocolate con mani y que lo tome", ()=>{
    const chocoMani = new Chocolate(50, false, "con mani", "mani","milka",40,0,5);
    expect(chocoMani.extras).toBe("mani")
});

test ("agrego un chocolate con clavos y me de error", ()=>{
    
    expect(()=>{const chocoClavos = new Chocolate(50,true, "con clavos","clavos", "milka",40,0,5);}).toThrow("Error")
});

