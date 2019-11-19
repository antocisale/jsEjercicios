const local = require('./ropa'),
    Ropa = local.Ropa;

test ('probar que no me pueda calzar una pollera', ()=>{
    const pollera = new Ropa("pollera", "inferior", "30", "jean", true);
    expect (()=>{pollera.calzar()}).toThrow("error, no se puede calzar")
});

test ('no puedo lavar un sweater de lana en el lavarropas', ()=>{
    const sweater = new Ropa("sweater", "cuello V", 30, "azul", true, "lana");
    expect (()=>{sweater.lavarEnLavarropas()}).toThrow("no podes lavar en lavarropas")
});

test ('me puedo abotonar una camisa con botones, y no unas zapatillas', ()=>{
    const camisa = new Ropa("camisa", "manga larga", 28,"blanca", true, "algodon");
    const zapatillas = new Ropa ("zapatillas", "calzado", 38, "blancas", false, "lona");
    expect (camisa.abotonar()).toBe("se puede abotonar");
    expect (()=>{zapatillas.abotonar()}).toThrow("no tiene botones para abotonar")
});

test ('si remera es talle 1 o 2 es talle chico, 3 es talle mediano, 4 y 5 son talles grandes', ()=>{
    const remera = new Ropa("remera", "superior", 2, "blanca", false, "algodon");
    const pollera = new Ropa("pollera", "inferior", "30", "jean", true);
    const zapatillas = new Ropa ("zapatillas", "calzado", 38, "blancas", false, "lona");
    expect (remera.tipoTalle()).toBe("talle chico");
    expect (pollera.tipoTalle()).toBe("talle grande");
    expect (()=>{zapatillas.tipoTalle()}).toThrow("es calzado, no podes ver que tipo de talle tiene!")
});