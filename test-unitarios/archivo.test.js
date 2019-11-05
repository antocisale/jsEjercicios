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
test ('cargo tarea "prueba", "descripcion", y "done"', () =>{
    const toDo = [];
    const getTarea = ()=>{
        let nombre = prompt('nombre');
        let description =  prompt('descripcion');
        let done = false;
        toDo.push([nombre,description,done])
    }
    expect(toDo).toContain(["prueba", "descripcion", "true"   
        ])
}
)