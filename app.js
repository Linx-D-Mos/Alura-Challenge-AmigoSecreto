let array = []
let lista = document.getElementById('listaAmigos');
let input = document.getElementById('amigo');
function mostrarArray() {
    lista.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.innerText = array[i];
        lista.appendChild(li);
    }
}
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Por favor ingresa el amigo a sortear');
    } else {
        array.push(amigo);
        mostrarArray();
        input.value = '';
    }

}
function numeroRandom(numeroMaximo) {
    let numero = Math.floor(Math.random() * numeroMaximo) + 1;
    return numero;
}
function sortearAmigo() {

    let numeroMaximo = array.length;
    if (numeroMaximo < 3) {
        alert('Por favor ingresa al menos 3 amigos para poder sortear');
    } else {
        let amigo = numeroRandom(numeroMaximo);
        console.log(amigo);
        for (let i = 0; i < array.length; i++) {
            if (amigo === i) {
                lista.innerHTML = '';
                document.getElementById('resultado').innerHTML = `El amigo secreto es ${array[i]}`;
            }
        }
    }

}