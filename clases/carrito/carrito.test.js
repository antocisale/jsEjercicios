const FreeShop = require('./carrito'),
    Producto = FreeShop.Producto,
    Perfume = FreeShop.Perfume,
    Auricular = FreeShop.Auricular,
    Chocolate = FreeShop.Chocolate,
    carrito = FreeShop.carrito,
    productos = FreeShop.productos;

beforeEach(() => {
    productos.lista.splice(0);
});

test("validar que el perfume que carguemos tenga todo lo de clases", () => {
    const perfumeVerano = new Perfume("Channel", 3000, 20);
    expect(perfumeVerano.tipoProd).toBe("perfume");
    expect(perfumeVerano instanceof Producto).toBe(true)
});

test("validar que el chocolate creado sea chocolate y no perfume", () => {
    const chocolateNegro = new Chocolate(70, false, "negro", null, "Savoy", 100, 40);
    expect(chocolateNegro instanceof Chocolate).toBe(true);
    expect(chocolateNegro instanceof Perfume).toBe(false)
});

test("agregar 3 productos al array de lista y que su largo sea 3", () => {
    const chocolateNegro = new Chocolate(70, true, "con leche", "almendras", "milka", 50, 0, 3);
    const perfumeVerano = new Perfume("Channel", 3000, 20, 2);
    const auricular = new Auricular(false, "cerrados", "sony", 2018, 5, 3);
    expect(productos.lista.length).toBe(3);
});

test("agrego un chocolate con mani y que lo tome", () => {
    const chocoMani = new Chocolate(50, false, "con mani", "mani", "milka", 40, 0, 5);
    expect(chocoMani.extras).toBe("mani")
});

test("agrego un chocolate con clavos y me de error", () => {

    expect(() => { const chocoClavos = new Chocolate(50, true, "con clavos", "clavos", "milka", 40, 0, 5); }).toThrow("Error")
});

test("agrego un auricular intermedio y salta error", () => {
    expect(() => { const auriIntermedio = new Auricular(false, "intermedio", "una marca", 300, 2, 4) }).toThrow("Error")
});

test("agrego un perfume y veo su descripcion", () => {
    const perfumeVerano = new Perfume("channel", 3000, 5, 10);
    expect(productos.lista[0]["info"]).toBe("Este es un perfume marca channel. Su costo es de $3000 y tiene un descuento del 5%. Su ID es 10")
});

test("agrego un chocolate y veo su descripcion", () => {
    const chocoMani = new Chocolate(50, false, "con mani", "mani", "milka", 40, 0, 5);
    expect(chocoMani.info).toBe("Este es un chocolate marca milka. Tiene 50% de cacao, y no tiene leche. Viene con mani.  Su costo es de $40 y tiene un descuento del 0%.")
});

test("agrego un auricular y veo su descripcion", () => {
    const auricular = new Auricular(true, "abiertos", "sony", 1000, 2, 50);
    expect(auricular.info).toBe("Estos son auriculares abiertos marca sony y son wireless. Su precio es de $1000, y tiene un descuento del 2%. Su id es 50.")
});

test("agrego un perfume de $3000 con 10% de descuento y el total del carrito es $2700", () => {
    const perfume = new Perfume("channel", 3000, 10, 3);
    carrito.agregar(3, 1);
    expect(carrito.sumarPrecio()).toBe(2700)
});

test("agrego 2 perfumes de $3000 con un 10% de descuento cada uno y un chocolate sin descuento de $50. el total es $5450", () => {
    const perfume = new Perfume("channel", 3000, 10, 3);
    const chocolate = new Chocolate(60, true, "con leche", null, "milka", 50, 0, 54);
    carrito.agregar(3, 2);
    carrito.agregar(54, 1);
    expect(carrito.sumarPrecio()).toBe(5450)
});

test("agrego 2 perfumes y un chocolate y me tira el carrito", () => {
    const perfume = new Perfume("channel", 3000, 10, 3);
    const chocolate = new Chocolate(60, true, "con leche", null, "milka", 50, 0, 54);
    carrito.agregar(3, 2);
    carrito.agregar(54, 1);
    carrito.mostrar();
});