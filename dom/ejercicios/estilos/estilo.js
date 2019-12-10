// 001
/**
 * Escribir una funcion que nos permita pasarle un elemento 
 * y un color, y  le cambie el color de fondo al elemento.
 */
const changeClass = () =>{
    let encabezado1 = document.querySelector("#encabezado1");
    if (encabezado1.classList.contains("fondo-1")){
        encabezado1.classList.add("fondo-2");
        encabezado1.classList.remove("fondo-1");
    }else{
        encabezado1.classList.add("fondo-1");
        encabezado1.classList.remove("fondo-2");
    }
};

const changeColor = (element, color = undefined) =>{
    
    if (color == undefined){
        let red = Math.random()*256;
        let green = Math.random()*256;
        let blue = Math.random()*256;
        color = `rgb(${red}, ${green}, ${blue})`;
    }
    element.style.background = color;
    
}

 //002 
/**
  * Modificar la funcion previa para que, si no se recibe
  * un color por parametro, se busque un color de forma
  * azarosamente.
  */

  // 003
/**
   * Crear una lista con varios elementos.
   * Crear una funcion que asigne la clase
   * "active" a uno de estos elementos seleccionados.
   * Ademas al mismo tiempo tiene que eliminar
   * la clase "active" del resto de los elementos.
   * Asignarle algun estilo para diferenciar la clase
   * "active" de cuando no se encuentra la misma.
   */
const activar = (elemento) =>{
    let lista = document.querySelector("#list").children;
    let element = document.querySelector(elemento);
    for (let item of lista){
        if (item.classList.contains("active")){
                item.classList.remove("active");
                item.classList.add("inactive");
            }
    };
    element.classList.add("active");
};

// 004

/**
 * Crear una funcion para aumentar tamaño 
 * de un titulo y otra para reducirlo.
 */

const titleSize = (tituloSel) =>{
    let titulo = document.querySelector(tituloSel);
    titulo.style.fontSize <"150px" ? titulo.style.fontSize = "300px" : titulo.style.fontSize = "100px";
}

const titleSize2 = (title, size) =>{
    let titulo = document.querySelector(title);
    titulo.style.fontSize = size;
}

const increaseTitle = (titulo) => { 
    let title = document.querySelector(titulo);
    let fontSize = getComputedStyle(title).getPropertyValue("font-size"); //tambien puede ser .fontSize
    fontSize= parseFloat(fontSize);
    title.style.fontSize = fontSize + 10 + "px";
}

const decreaseTitle = (titulo) => { 
    let title = document.querySelector(titulo);
    let fontSize = getComputedStyle(title).getPropertyValue("font-size");
    fontSize= parseFloat(fontSize);
    title.style.fontSize = fontSize - 10 + "px";
}
 // 005
/**
  * Crear una lista que contenga imagenes, de las 
  * cuales se va a mostrar solo una.
  * Crear una funcion que me permita ir cambiando
  * de imagen cada vez que la ejecuto, segun el orden
  * en que estan declaradas.
  */ 

let index = 0;
const changeImg = () =>{
    let galleryImg = document.querySelectorAll("#gallery > li"); //hago como que son children
    galleryImg[index].style.display ="none";
    index++;
    if(index == galleryImg.length){
        index= 0;
    }
    galleryImg[index].style.display ="block";
} 