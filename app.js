const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    var nombre = document.getElementById("amigo").value.trim();
    
    if (nombre == "") {
        alert("Por favor, escribe un nombre antes de agregar.");
        return;
    }
    
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Ya no quedan amigos por sortear.");
        return;
    }
    
    var indice = Math.floor(Math.random() * amigos.length);
    var amigoSorteado = amigos.splice(indice, 1)[0];
    
    alert("El amigo elegido es: " + amigoSorteado);
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (var i = 0; i < amigos.length; i++) {
        var item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
