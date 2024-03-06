//laços de repetição (iteradores)

//for -> para
//for(valorDeInicio; condicaoDeParada; condicaoDeIncremento){};

for(let i=0; i<5;i++){
    console.log(i);
}

//while -> enquanto

var i=0;
while(i<5){
    console.log(i);
    i++;
}

//do while -> Faça...enquanto

var i = 0 
do{
    console.log(i);
    i++;
}
while(i<5);

listaNumeros = [1,2,3,4] //array
for(i of listaNumeros){
    console.log(i);
}
for(i in listaNumeros){
    console.log(i);
}