let amigos = [];
let sorteados = new Set();

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    if (sorteados.size === amigos.length) {
        alert("Todos os amigos já foram sorteados. Limpe a lista para reiniciar.");
        return;
    }
    
    let amigoSorteado;
    do {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteado];
    } while (sorteados.has(amigoSorteado));
    
    sorteados.add(amigoSorteado);
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

function limparLista() {
    amigos = [];
    sorteados.clear();
    atualizarListaAmigos();
    document.getElementById("resultado").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.querySelector(".button-container");
    const limparButton = document.createElement("button");
    limparButton.textContent = "Limpar Lista";
    limparButton.className = "button-clear";
    limparButton.style.display = "block";
    limparButton.style.margin = "20px auto";
    limparButton.onclick = limparLista;
    buttonContainer.appendChild(limparButton);
});
