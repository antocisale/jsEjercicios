const getDia = (dia) =>{
    switch (dia){
        case "lunes": 
            return 1;
        case "martes":
            return 2;
        case "miercoles": 
            return 3;
        case "jueves": 
            return 4;
        case "viernes": 
            return 5;
        case "sabado": 
            return 6;
        case "domingo": 
            return 7;
        default:
            throw "coloca un dia correcto";
    }
}

test ('le paso "lunes" y tira 1', () => {
    expect(getDia("lunes")).toBe(1);
    });

test ('le paso "demango" y tira error',() =>{
    expect(()=>{
        getDia("demango");  
        }).toThrow("coloca un dia correcto")
    } );


const getSeconds= (number)=>{
    let seconds = parseInt(number)*60;

    if(seconds<0){
        let secondsNeg = seconds*-1;
        return secondsNeg;
    }else if (isNaN(number)){
        throw "coloca un numero";
    }
    else{
        return seconds;
    }
}

test ("le paso 1 minuto y me devuelve 60 segundos", () =>{
    expect(getSeconds(1)).toBe(60)
});

test ("le paso -5 y me devuelve 300 segundos", () =>{
    expect(getSeconds(-5)).toBe(300)
});

test ('le paso "hola" me devuelve error', () => {
    expect(()=>{
        getSeconds("hola");
        }).toThrow("coloca un numero")
});


/**************************************************
 * Hacer una serie de funciones para un TODO list.
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.
 */

    let toDo = [];
    let done=false;
    const addTarea = (nombre, description, done)=>{
        if (done==undefined){
            done=false;
        }
        toDo.push([nombre,description,done])
        return toDo;
    }
  
    const searcher = (tarea) =>{
        let tareaError = -1
        for(let i = 0; i < toDo.length; i++){
                if(toDo[i][0] == tarea){
                    return i;
                }
            }
            return tareaError;
        };
    const searchTarea = (tarea) =>{
        let index = searcher(tarea);
        if (index > -1){
            return toDo[index];
        }
    }
    const editTarea = (tarea, newTarea, newDescription) =>{
        let index = searcher(tarea);
        if (index > -1){
            toDo[index][0] = newTarea;
            toDo[index][1] = newDescription;
            return toDo[index];
        }
    }

test ('cargo tarea "prueba", "descripcion", y "done"', () =>{
    expect(addTarea("prueba", "descripcion", false)).toContainEqual(["prueba", "descripcion", false 
        ], )
}
)

test ('cargo tarea "prueba 2", "descripcion 2", y "true"', () =>{
    expect(addTarea("prueba 2", "descripcion 2", true)).toContainEqual(["prueba 2", "descripcion 2", true 
        ], )
}
)

test ('cargo tarea "prueba 3", "descripcion 3" sin informacion de si esta hecha o no', () =>{
    expect(addTarea("prueba 3", "descripcion 3")).toContainEqual(["prueba 3", "descripcion 3", false 
        ], )
}
)

test ('busco tarea "prueba 3" y me devuelve el array completo', () =>{
    addTarea("prueba 3", "descripcion 3", false);
    expect(searchTarea("prueba 3")).toEqual(["prueba 3", "descripcion 3", false 
        ], )
}
)

test ('busco tarea "pruebas" y me devuelve error', () =>{
    addTarea("prueba 3", "description 2", true);
    expect(searchTarea("pruebas")).toBe(-1)
}
)

test ('busco tarea "prueba 3" y edito nombre a "pruebaChange" y descripcion a "descriptionChange"', () =>{
    addTarea("prueba 3", "description 2", true);
    expect(editTarea("prueba 3", "pruebaChange", "pruebaDescription"))
        .toContainEqual("pruebaChange", "pruebaDescription", false)
}
)
beforeEach(()=>{
    toDo=[]
})