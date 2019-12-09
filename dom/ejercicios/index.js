/**
         * Crear un input de tipo checkbox.
         * Escribir una funcion "toggleChecked" que 
         * cambie el estado de clickeado a sin 
         * clickear o viceversa.
         */
        const toggleChecked = () => {
            let check = document.querySelector("#box1");
            check.checked ? check.checked = false : check.checked = true;
        };
        // 02
        /**
         * Dado el siguiente HTML
         * cambiar el atributo name a miExInput
         */
        const changeName = () => {
            let input = document.querySelector("#miInput");
            console.log(input.name);
            input.name = "miExInput";
            console.log(input.name);
        };

        const changeName2 = () =>{
            let input = document.querySelector("#miInput");
            console.log(input.name);
            input.setAttribute("name","miExinput");
            console.log(input.name);
        }
        // 03
        /**
         * Escribir un HTML con un div.
         * Luego, por ID, modificar el contenido del DIV
         * agregando una lista de 5 elementos.
         * Una vez agregada la lista, agregar 
         * programaticamente un numero a cada elemento
         * 
         * por ejemplo, si son 5 elementos deberia verse:
         * 1
         * 2
         * 3
         * 4
         * 5
         */
        const changeDiv = () => {
            let miDiv = document.querySelector("#miDiv");
            miDiv.insertAdjacentHTML("beforeend", "<ul><li></li><li></li><li></li><li></li><li></li></ul>");
            addInfo();
        };

        const addInfo = () => {
            let li = document.getElementsByTagName("li");
            let valor = 0;
            for (let item of li) {
                valor++;
                item.innerHTML = valor;
            }
        };
        //VERSION 2
        const cambio = () => {
            let info = document.getElementById("hola");
            let lista = "<ul>";
            for (i = 1; i < 6; i++) {
                lista += "<li>" + i + "</li>";
            }
            if (i == 6) {
                lista += "</ul>"
            }
            info.innerHTML = lista;
        };

        //04
        /**
         * Escribir una funcion que se llame changeTitle.
         * Para esto deberemos tener dos elementos,
         * un input, y un h1. 
         * Debemos tomar el valor del input y ponerlo como 
         * el title. Si ya existe texto, reemplazarlo.
         */
        const changeTitle = () => {
            let inputValue = document.querySelector("#myButton");
            let h1Value = document.querySelector("#myH1");
            h1Value.textContent = inputValue.value;
            inputValue.value == "ya me cambié" ? inputValue.value = "Soy un título" : inputValue.value =
                "ya me cambié";
        }