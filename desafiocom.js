
let jugadores = parseInt(prompt("Ingrese la cantidad de jugadores"));



for (let i = 0; i < jugadores; i++){
    console.log("Ingrese los datos del jugador nª", i+1);

    let nombres = prompt("Ingrese nombre del jugdador");
    let edad = prompt("Ingrese la edad del jugador");
    console.log("Registrando jugador.")
    console.log("Registrando jugador..")
    console.log("Registrando jugador...")
    if(edad >= 18){

    console.log("Bienvenido/a", nombres, "se ha registrado correctamente como el jugador nª: ", i+1);
    }
    else{
        console.log("No pueden ingresar menores de edad");
    }
}
