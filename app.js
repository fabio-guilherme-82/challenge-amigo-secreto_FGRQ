let nomes = [];

let resultado = document.getElementById("resultado");

function adicionarAmigo(){
    let digiteUmNome = document.getElementById ("amigo").value;
    if (digiteUmNome == ""){
        alert ("Erro! O campo está vazio. Digite os nomes de seus amigos para começar-mos.")
        return
    } 

    nomes.push(digiteUmNome);
    document.getElementById("amigo").value ="";

    let listaDeNomes = "<ul>";
    for (let i = 0; i < nomes.length; i++) {
        listaDeNomes += `<li>${nomes[i]}</li>`;
    }
    listaDeNomes += "</ul>";
    resultado.innerHTML = listaDeNomes;
}

function sortearAmigo() {
    if (nomes.length < 2){
        resultado.innerHTML += `Digite pelo menos 2 amigos.`
    }else {
        let aleatorio = Math.floor(Math.random() * nomes.length);
        let nomeSorteado = nomes[aleatorio];
        resultado.innerHTML = `🎉🎉 Parabéns!!  O Nome Sorteado foi: <strong>${nomeSorteado}</strong>`
    }
}

function reiniciar() {
    document.getElementById("amigo").value = "";
    resultado.innerHTML = "";
    nomes =[];
}