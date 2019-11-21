const local = require('./ropa'),
    Superior = local.Superior,
    Inferior = local.Inferior,
    Calzado = local.Calzado;


test ('crear una pollera que se pueda abotonar', () =>{
    const pollera = new Inferior("pollera", 28, "azul", true);
    expect(pollera.abotonar()).toBe("se puede abotonar")
});

test ('crear una camisa que al abotonar tire error',()=>{
    const camisa = new Superior("camisa", 3, "azul", "algodon", false);
    expect (()=>{camisa.abotonar()}).toThrow("no tiene botones para abotonar")
})

test ('crear una remera de seda que no se pueda lavar en lavarropas', ()=>{
    const remera = new Superior("remera",2,"azul","seda",false);
    expect (()=>{remera.lavarEnLavarropas()}).toThrow("no podes lavar en lavarropas")
})

test ('probar que no me pueda calzar una pollera', ()=>{
    const pollera = new Superior("pollera", 28, "azul", "jean");
    expect (()=>{pollera.calzar()}).toThrow("error, no se puede calzar")
});

/*test ('no puedo lavar un sweater de lana en el lavarropas', ()=>{
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
});*/