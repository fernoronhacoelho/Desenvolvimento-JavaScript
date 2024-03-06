var data = new Date();

var mes = data.getMonth()+1;

console.log(mes)

var outono = 3;
var inverno = 6;
var primavera = 9;
var verao = 12;

var cor;

//outono
if((mes>=outono)&&(mes <inverno)){
    cor = "#ac0dd5d";
}
//inverno
else if((mes>=inverno)&&(mes < primavera)){
    cor = "#9dbce3"
}
//primavera
else if((mes >=primavera) && (mes < verao)){
    cor = "#ffd6ef";
}
//verao
else if((mes == 12) || ((mes>=1)&&(mes<outono))){
    cor = "#fdf080";
}

document.body.style.backgroundColor = cor;