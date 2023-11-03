
const boton = document.getElementById("btnResumen");
const borrar = document.getElementById("btnBorrar");
const selector = document.getElementById("inputSelector");

boton.addEventListener("click", sumar);

function sumar(){
    let cantidad = document.getElementById("inputCantidad");
 
    const total = document.getElementById("totalPagar");
    

    switch(selector.value){
        case "1": total.textContent = "Total a pagar: $ " + (cantidad.value * 200 * 0.2);; break;
        case "2": total.textContent = "Total a pagar: $ " + (cantidad.value * 200 * 0.5);; break;
        case "3": total.textContent = "Total a pagar: $ " + (cantidad.value * 200 * 0.85); break;
        default: total.textContent = "Total a pagar: $ " + (cantidad.value * 200);
    }
}

borrar.addEventListener("click", reiniciar);

function reiniciar(){
    const total = document.getElementById("totalPagar");
    total.textContent = "Total a pagar: $ ";
    let cantidad = document.getElementById("inputCantidad");
    cantidad.value = 0;
}