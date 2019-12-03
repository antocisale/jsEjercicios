/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */

let libro ={
    nombre: "titulo",
    autor: "nombre del autor",
    anio: 1999,
    ISBN: 12462288477365261,
    reviews:[
        {
            nombre: "nombre del reviewer",
            review: "toda la review",
            valoracion: parseInt(2),
        },
        {
            nombre: "nombre del  2",
            review: "toda la review 2",
            valoracion: parseInt(5),
        },
        {
            nombre: "nombre del  3",
            review: "toda la review 3",
            valoracion: parseInt(4),
        },
    ],
    get info(){
        return `${this.nombre} escrito por ${this.autor} - ISBN ${this.ISBN}. Año ${this.anio}`
    },
    get promReview(){//opcion A//
        let prom = 0;
        this.reviews.forEach((item)=>{
                prom += item.valoracion;
        });
        let promedio = Math.round((prom/this.reviews.length)*10)/10; //va afuera porque sino lo ejecuta cada vez que se ejecuta forEach//
        return promedio;
    },
    _promReview: function(){//opcion B//
        let prom = 0;
        this.reviews.forEach((item)=>{
                prom += item.valoracion;
        });
        let promedio = Math.round((prom/this.reviews.length)*10)/10; //va afuera porque sino lo ejecuta cada vez que se ejecuta forEach//
        return promedio;
    },
    __promReview: function(){
        let suma= this.reviews.reduce((acumulador, review) => {
            return review.valoracion +acumulador;
        }, 0); //valor inicial del acumulador//
        let prom = Math.round((suma/this.reviews.length)*10)/10;
        return prom;
      
    },
    agregaReview: function(nombre, review, valoracion){
        if((valoracion>=1) &&(valoracion <=5)){
            this.reviews.push({
                nombre,
                review,
                valoracion
            })
        }else{
            throw "la valoracion debe estar entre 1 y 5";
        }
    },
 };




module.exports ={
    libro,
 }