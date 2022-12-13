const ator = document.getElementById("ator");
const img = document.querySelectorAll("#ator img");

let idx = 0;

function carrossel(){
    idx ++;

    if(idx > ator.length - 1){
        idx = 0;
    }

    ator.style.transform = 'translateX(${-idx = 500}px)';
}

setInterval(carrossel, 1800);