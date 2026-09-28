const titulo1 = document.getElementById("rojo");
titulo1.innerHTML = "Adiós"; 

const titulo2 = document.getElementById("naranja");
titulo2.style.color = "orange";

const titulo3 = document.getElementById("click");
titulo3.addEventListener("click", () => {
    titulo3.style.color = "brown";
});

const imagen = document.getElementById("imagen");
const boton = document.getElementById("boton"); 

    boton.addEventListener ("click", () => {
    imagen.style.width = "200px";
});