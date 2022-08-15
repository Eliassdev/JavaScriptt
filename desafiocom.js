
let jugadores = parseInt(prompt("Ingrese la cantidad de jugadores"));



for (let i = 0; i < jugadores; i++){

    let nombres = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");

    if(edad >= 18){

    console.log("Bienvenido/a", nombres);
    }
    else{
        console.log("No pueden ingresar menores de edad");
    }
}
