//Declaremos un array vacío llamado amigos.
let amigos = [];

//Llamamos un evento al botón "Agregar amigo" que llame a la función agregarAmigo().
//Validamos que el campo de texto no esté vacío.

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
//validar que no ingrese valores numericos  
  if (nombreAmigo.trim() === "") {
    alert("Escribe un nombre, por favor");
    } else if (!/^[a-zA-Z\s]+$/.test(nombreAmigo)) {
        alert("El nombre no debe contener números");
      } else {
            //Agregamos el nombre del amigo al array de amigos.
            amigos.push(nombreAmigo);
            //Limpiamos el campo de texto.
            document.querySelector("#amigo").value = "";
            mostrarListaAmigo();
            }
}

//Actualicemos la lista de amigos en el HTML.
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    //Creamos un elemento de lista por cada amigo en el array.
    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

//Llamamos un evento al botón "Sortear amigo" que llame a la función sortearAmigo().
//Validamos que haya al menos un amigo en la lista.
function sortearAmigo() {
    //Obtenemos la cantidad de amigos en la lista.
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
        alert("Esribe un nombre antes de sortear, por favor");
          } else {
                    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
                    let resultadoHTML = document.querySelector("#resultado");
                    resultadoHTML.innerHTML = "El amigo secreto es: " + amigos[indiceAmigo];
                }
}