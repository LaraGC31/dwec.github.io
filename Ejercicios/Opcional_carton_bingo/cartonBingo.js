
function devolverNumero(minimo,maximo){
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return  parseInt(Math.random() * ((maximo+1)-minimo)+ minimo);
}
function dato(){
    let lista = new Set();
let cantidad = 27;

    do{
        let aleatorio = devolverNumero(1,90); 
        lista.add(aleatorio);
    }while(lista.size < cantidad);

    return [...lista];
}
function boton(i){
    let id = i.target.id;
       
   
    for (let i = 0; i < cantidad; i++) {
       
        if(id <= 3){
            document.getElementById((i+1)).textContent = array[i]; 
        }
    }
}
function dato(){
    let h = document.getElementsByClassName("carga");
    for(let i = 1; i < h.length; i++){
        let id = h.target.id;

   let lista = new Set();
let cantidad = 27;

    for (let i = 0; i < cantidad; i++) {
        do{
            let aleatorio = devolverNumero(1,90); 
            lista.add(aleatorio);
        }while(lista.size < cantidad);
        let array = [...lista];
        if(id <= 3){
            document.getElementById((i+1)).textContent = array[i]; 
        }
    }
        
    }
}


window.onload = function(){
    document.getElementById("boton").addEventListener("click",dato);
}
