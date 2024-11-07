
function calculadora(){
    let uno = document.getElementsByClassName("uno");
    let calcular = document.getElementById("calcular");
         for(let b of uno){ 
        b.addEventListener("click",function(){
            let id = this.id;
            if(id === "="){
              let n = eval(calcular.textContent);
               let m = Math.round(n*10)/10;
               calcular.textContent = m;
            }else if(id === "C"){
                calcular.textContent = "";
            }else if(id === "CE"){
                calcular.textContent =  calcular.textContent.slice(0,-1);
        }else{
                calcular.textContent += b.id;
            }
        });
    }
    
}


window.onload = function(){
calculadora();
}