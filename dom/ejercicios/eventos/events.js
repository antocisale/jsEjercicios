// 001 
/**
 * Crear un TODO list, que tenga
 * 1. un input para agregar nuevos TODO
 * 2. Este input debe tener un button para poder
 *    agregar el TODO desde el input
 * 3. un button por cada TODO de la lista
 *  para borrar el mismo.
 * 4. Un checkbox, antes del texto de cada TODO,
 *  que me permita tachar el elemento de la lista
 *  como resuelto. 
 */

const addDelButton = () =>{
    let newButton = document.createElement("input");
    newButton.setAttribute("type", "button");
    newButton.value = "borrar";
    newButton.addEventListener("click",()=>{
        newButton.parentElement.remove();
    });
    return newButton;

};

const addLiCheck = () =>{
    let newCheck = document.createElement("input");
    newCheck.setAttribute("type","checkbox");
    newCheck.addEventListener("change", ()=>{
        if (newCheck.checked){
            newCheck.nextSibling.classList.add("done");
        }else{
        newCheck.nextSibling.classList.toggle("done");}
    });
    return newCheck;
};

const addTarea = () =>{
    let toDo = document.querySelector("#tarea").value;
    let newTarea = document.createElement("span");
    newTarea.innerHTML = toDo;
    return newTarea;
}
const addToDo = () =>{

    let list = document.querySelector("#lista");

    let newButton = addDelButton();
    let newTarea = addTarea();
    let newCheck = addLiCheck();
    
    let newToDo = document.createElement("li");
    
    newToDo.appendChild(newCheck);
    newToDo.appendChild(newTarea);
    newToDo.appendChild(newButton);
    
    list.appendChild(newToDo);
};

const button = document.querySelector("#boton");
button.addEventListener("click", addToDo);

 // 002
/**
 * Tomar el input del ejercicio anterior y hacer que 
 * cambie sus bordes de color y de ancho cuando 
 * hacemos foco(focus, hacemos click en el recuadro) en el, 
 * y que esos mismos bordes y color vuelvan al 
 * estado anterior cuando sacamos el foco (blur).
 */
let textArea = document.querySelector("#tarea");
textArea.addEventListener("focus",()=>{
textArea.classList.add("focused");
    });
textArea.addEventListener("blur",()=>{
        textArea.classList.add("blurred");
        textArea.classList.remove("focused");
    });