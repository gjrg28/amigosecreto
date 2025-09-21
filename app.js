// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []



function agregarAmigo(){
    let nombreDelAmigo = document.getElementById('amigo').value;

    if(nombreDelAmigo === null || nombreDelAmigo === ""){
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(nombreDelAmigo);
        console.log("Amigo agregado:", nombreDelAmigo);
        console.log("Lista actual de amigos:", amigos);
    }
    
    actualizaListaAmigos();
    limpiarCaja();
   
    
}
 
function limpiarCaja(){
    document.getElementById('amigo').value = '';

}   

function actualizaListaAmigos (){
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach ((nombreDelAmigo) => {
        let li = document.createElement("li");
        li.textContent = nombreDelAmigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Ingresa un amigo");
    
        return;
    }
    let indice = Math.floor(Math.random()* amigos.length);
    let seleccionado = amigos[indice];

    let listaSeleccionado = document.getElementById("resultado");
    listaSeleccionado.innerHTML="";
    let li = document.createElement ("li");
    li.textContent = "El ganador es: " + seleccionado;
    listaSeleccionado.appendChild(li);
}