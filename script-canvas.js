var canvas = document.getElementById("desenho");

var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var altura=100;
var largura=100;

//anima desenho

function animacao (){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillReact(x,y,largura++,altura++);
}

setInterval(animacao, 10);