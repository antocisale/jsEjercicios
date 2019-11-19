const libreria = require('./libros'),
    libros = libreria.libro;


beforeEach(() => {
    });

 test ('el promedio de las reviews es de 3.7', ()=>{

    expect(libros.promReview).toBe(3.7);
 }
 );
 test ('el promedio de las reviews es de 3.7', ()=>{

   expect(libros._promReview()).toBe(3.7);
}
);
test ('el promedio de las reviews es de 3.7', ()=>{

   expect(libros.__promReview()).toBe(3.7);
}
);
test ('agregar review con valoracion entre 1 y 5', ()=>{
   libros.agregaReview("reviewer 5", "desc 5", 3);
   expect (libros.reviews.length).toBe(4);
});

test('tira error al poner una review que sea superior a 5', ()=>{
   expect (()=>{libros.agregaReview("reviewe 6", "desc 6", 7)}).toThrow("la valoracion debe estar entre 1 y 5");
});


/*{
   let total = this.reviews.valoracion.reduce((a,b)=>a+b);
   let prom = total/this.reviews.length;
   return prom;
},

for (let i=0; i<this.reviews.length; i++){
   let total = this.reviews[i].valoracion.reduce((a,b)=>a+b);
   return total;
    }
    let prom = total/this.reviews.length;
    return prom;
},

  
let suma=0;
this.reviews.reduce((valor, acc)=>{
    suma= valor + acc;
});
suma = suma/this.reviews.length;
return suma;*/