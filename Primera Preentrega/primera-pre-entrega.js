let saldo = 15000;
let retiroHecho = false;
const salir = true;
let ultimaTransaccion = "El ultimo retiro de efectivo fue de: "

const pinNumber = parseInt(prompt("Ingrese el pin:"));

function retirarDinero(retiroCantidad) {
    if ((retiroCantidad >= 1000 && retiroCantidad <= 10000) && retiroHecho == false && saldo >= retiroCantidad) {
        saldo = saldo - retiroCantidad;

        retiroHecho = true;
        
        alert("Transaccion realizada");
    }
    else if (retiroHecho = true) {
        alert("Ya se efectuo un retiro de efectivo el dia de hoy");
    }
    else {
        alert("Cantidad incorrecta o ya se afectuo un retiro");
    }
}

if (pinNumber === 1234) {
    while(salir){
        let opcion = parseInt(prompt("Seleccione una opción: \n 1-Retiro \n 2-Consultar Saldo \n 3-Consultar ultima transacción hecha \n 4-Salir"));
    
        switch (opcion) {
            case 1:
                const retiroCantidad = parseInt(prompt("Ingrese la cantidad a retirar 'Maximo 10000 y minimo 1000:'"));
                
                ultimaTransaccion = ultimaTransaccion + retiroCantidad;

                retirarDinero(retiroCantidad);
                break;
            case 2:
                    alert("Saldo disponible: " + saldo);
                break;
            case 3:
                alert(ultimaTransaccion);
                break;
            case 4:
                salir = false;
                break;
            default:
                alert("Opción incorrecta");
                break;
        }
    }
}
else {
    alert("pin incorrecto");
}
