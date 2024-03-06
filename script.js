var titulo = document.getElementById("logo");
titulo.innerHTML = <b><i>Meu site</i></b>
console.log(titulo.innerText);

//getElementsByTagName
var paragrafos = document.getElementByTagName("p");
console.log(paragrafos[0]);
//getElementByClassName
var textos = document.getElementsbyClassName("texto");
textos[0].style.color = "red";
//querySelectorAll
var topo = document.querySelectorAll("header")[0];
topo.style.backgroundColor = 'yellow';
