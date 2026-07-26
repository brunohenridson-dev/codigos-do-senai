let carros = ["bmw","byd","mercedez","fiat","toyota"];
let textarea = document.getElementById('texto');
let campoResposta = document.getElementById('digitar')
let indiceAtual = 0;
function percorrerLista(){
for(let i = indiceAtual; i<carros.length; i++){
    if (carros[i] === "bmw"){
       textarea.value = `encontrei o carro: ${carros[i]}. quer continuar?`
        indiceAtual = i + 1;
       return;
    } else{
        textarea.value += `passou por ${carros[i]}`;
    }
}
textarea.value += "\nfim da lista.";
}

function enviarcomando(){
    let resposta = campoResposta.value.trim().toLowerCase();
    if (resposta === "sim"){
        percorrerLista();
    
    }else if (resposta === "nao"){
        textarea.value = "execução interrompida";
    }else {
        textarea.value = ("digite sim ou não");
    }
}
percorrerLista();
