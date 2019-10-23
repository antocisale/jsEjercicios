let nombre = prompt("¿Cual es tu nombre?")
let edad = prompt("¿Cuantos años tenes?")
let local = prompt("¿Donde vivis?")
let profesion = prompt("¿Cual es tu profesion?")
let comida = prompt("Cual es tu comida favorita?")
alert("Tu nombre es " + nombre + ", tenes " + edad + " años, vivis en " + local + ", tu profesion es " + profesion + ", y te encanta comer " + comida);

let nombre = prompt("¿Cual es tu nombre?")
let edad = prompt("¿En que año naciste?")
let local = prompt("¿Donde vivis?")
let profesion = prompt("¿Cual es tu profesion?")
let comida = prompt("Cual es tu comida favorita?")
alert("Tu nombre es " + nombre + ", tenes o " + (2019 - edad) + " o " + ((2019 - edad) - 1) + " años, vivis en " + local + ", tu profesion es " + profesion + ", y te encanta comer " + comida);

let radio = prompt("Decime un radio")
alert("El area de la circunferencia es " + (Math.PI * (radio * radio)) + " y la circunferencia es " + (radio * 2))

let radio = prompt("Decime un radio")
alert("El area de la circunferencia es " + (Math.PI * (Math.pow(radio, 2))) + " y la circunferencia es " + (radio * 2))



console.log("Estoy afuera");
let queres = confirm("Queres entrar?");
if (queres) { alert("Bienvenido!") }

console.log("Estoy afuera");
let persona = "Homero";
if (persona = "Homero") { console.log("No podes entrar") } else { console.log("vos si entras") }

console.log("Estoy afuera");
let persona = prompt("Tu nombre");
if (persona == "Juanca") {
    console.log("Juanca entra al vip")
} else if (persona != "Homero") {
    console.log("Entre")
} else {
    console.log("no podes entrar")
}

let color = prompt("Elegi un color");
if (color == "azul") {
    alert("que lindo color!");
} else if (color == "verde") {
    alert("zafa");
} else if (color == "amarillo") {
    alert("y... puede servir")
} else {
    alert("Ese color tenias que elegir?");
}

let pelo = prompt("Como tenes el pelo?");
if (pelo == "corto") {
    alert("Rapate");
}
else if (pelo == "medio") {
    alert("cortar puntas");
}
else if (pelo == "largo") {
    alert("cortar");
}
else {
    alert("consultalo con tu peluquero amigo, yo no te puedo ayudar")
};




let lapiz = prompt("Color de Lapiz");
let lapizNegro = confirm("tenes un lapiz negro?");

if (lapiz == "azul" &&
    lapizNegro) {
    alert("Buenisimo!");
}
else if (lapiz == "verde" || lapizNegro) {
    alert("estamos bien");
}
else {
    alert("pucha que lastima")
}




// opcion pillina de como resolver el ejercicio //
let pelo = prompt("Como tenes el pelo?");
let barba = confirm("tenes barba?")
if (pelo == "corto") {
    if (barba) {
        alert("solo afeitate, ya tenes el pelo corto");
    }
    else {
        alert("Rapate");
    }
}
else if (pelo == "medio") {
    if (barba) {
        alert("tenemos una promo de corte y barba buenisima");
    }
    else {
        alert("cortar puntas");
    }
}
else if (pelo == "largo") {
    if (barba) {
        alert("la promo de pelos largos y corte de barba es para vos");
    }
    else {
        alert("cortar");
    }
}
else if (barba) {
    alert("solo afeitate");
}
else {
    alert("para que viniste a la peluqueria?");
}




// La opcion que teniamos que usar de verdad //
let pelo = prompt("Como tenes el pelo?");
let barba = confirm("tenes barba?");
pelo = pelo.toLowerCase;
if (pelo == "corto" && barba) { //las primeras condiciones que se tienen que cumplir son las dobles, asi si son falsas pasa a las siguientes//
    alert("solo afeitate, ya tenes el pelo corto");
}
else if (pelo == "largo" && barba) {
    alert("la promo de pelos largos y corte de barba es para vos");
}
else if (pelo == "medio" && barba) {
    alert("tenemos una promo de corte y barba buenisima");
}
else if (barba) {
    alert("con una afeitada sola estas bien");
}
else if (pelo == "corto") {
    alert("Rapate, el pelo corto ya no se usa");
}
else if (pelo == "medio") {
    alert("si cortamos las puntas ya vas a estar bien");
}
else if (pelo == "largo") {
    alert("dejanos que te cortemos el pelo");
}
else {
    alert("para que viniste a la peluqueria?");
};




let pelo = prompt("Como tenes el pelo?");
let barba = confirm("tenes barba?");
pelo = pelo.toLowerCase;
if ((pelo == "largo" || pelo == "medio") && barba) { //primer condicion, se compara entre los 2 pelos //
    alert("corte y barba");
}
else if (barba) {  // ya el pelo no necesita condicion  especial, no importa el tipo de pelo, solo importa que tenga barba, o no. Si el pelo es corto, o verde, o es pelado, pero tiene barba... solo se ejecuta la barba//
    alert("barba");
}
else if (pelo == "corto") {
    alert("Rapate");
}
else if (pelo == "medio") {
    alert("si cortamos las puntas");
}
else if (pelo == "largo") {
    alert("dejanos que te cortemos el pelo");
}
else {
    alert("para que viniste a la peluqueria?");
};




let hora = prompt("Que hora es?");
if (hora >= 6 && hora <= 14) {
    alert("Buenos dias");
}
else if (hora >= 15 && hora <= 19) {
    alert("Buenas tardes");
}
else if (
    (hora >= 20 && hora <= 23)
    || (hora >= 0 && hora <= 5)
) {
    alert("Buenas noches");
}
else {
    alert("Decime una hora de verdad!");
}


/*usando template strings - string literal*/
let hora = prompt("Que hora es?");
if (hora >= 6 && hora <= 14) {
    alert("Buenos dias");
}
else {
    let horario;
    if (hora >= 15 && hora <= 19) {
        horario = "tardes";
    }
    else if (
        (hora >= 20 && hora <= 23)
        || (hora >= 0 && hora <= 5)
    ) {
        horario = "noches";
    }


    alert(`Buenas ${horario}`);
}


/*loops - hago que variable entre si cumple condicion, y 
se termina de ejecutar cuando se cumpla la condicion*/
let i = 0
while (i < 10)/*mientras que pase esto*/ 
    { /*va a pasar lo que este adentro de la llave*/
    console.log("Accion");
    i++;
}

let i = 10
while (i > 0) {
    console.log(i)
    i--;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    let numero;   /* importante, se tiene que declarar la variable
                antes de las condiciones, sino no toma el template strings */
    if (i % 2 == 0) {
        numero = "par";
    } else {
        numero = "impar";
    }
    console.log(i + ` es ${numero}`); // opcion 2: console.log(`El numero ${i} es ${numero}`)
}