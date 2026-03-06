var lista = document.getElementById("lista2");
document.write("<p> Há "+ lista.children.length + " elementos na segunda lista</p>");
document.write("Texto dentro da segunda lista: " + lista.innerHTML);


for (let i = 0; i < lista.children.length; i++) {
    console.log(lista.children[i]);
}

