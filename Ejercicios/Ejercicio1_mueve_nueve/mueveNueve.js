
function devolverNumero(minimo,maximo){
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return  parseInt(Math.random() * ((maximo+1)-minimo)+ minimo);
}

function cargarNumeros(){
   let lista = new Set();
let cantidad = 9;

    for (let i = 0; i < cantidad; i++) {
        do{
            let aleatorio = devolverNumero(1,9); 
            lista.add(aleatorio);
        }while(lista.size < cantidad);
        let array = [...lista];
        document.getElementById("cuadro"+(i+1)).textContent = array[i];
}
}
window.onload = function() {
    cargarNumeros();
}