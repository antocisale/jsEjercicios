const libreria = require('./libros'),
    libros = libreria.libro;

 test ('el promedio de las reviews es de 3.7', ()=>{

    expect(libros.promReview).toBe(3.7);
 }
 );
 test ('el promedio de las reviews es de 3.7', ()=>{

   expect(libros._promReview()).toBe(3.7);
}
)