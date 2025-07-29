tamanhoFonte=16
function mudarFonte(parametro){
    if (parametro==="+"){
        tamanhoFonte += 2
    }else{
        tamanhoFonte -=2
    }
    const elemento=document.querySelector('html')
    elemento.style.fontSize=tamanhoFonte + "px";
}


let modoAtivo=false;

function modoMonocromatico(){

    if (!modoAtivo){
        document.documentElement.classList.add("monocromatico");
        modoAtivo=true;
    } else{
        document.documentElement.classList.remove("monocromatico");
        modoAtivo=false;
    }
}