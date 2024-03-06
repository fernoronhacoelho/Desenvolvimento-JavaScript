var hora = 9
var minutos = 15
var total_entrevistas = 0
var saida = 17
var entrevistados = [
    "José da Silva",
    "Antônio de Sá",
    "Felipe Augusto",
    "Carla Moreira",
    "Pedro Malta",
    "Maria Sousa",
    "Marta da Silva",
    "Fausto Augusto",
    "Silvio Sávio",
    "Maísa Silva",
    "Lucas Lopes",
    "Zenildo Santos",
    "Bruno Lucas",
    "Luana Melho",
    "Felipe Santos",
    "Flávio Miguel",
    "Lauro Maria",
    "Juca dos Santos",
    "Luciana Carla",
    "Felipe Silva",
    "André Manuel",
    "Pedro Parker",
    "Ana Maria",
    "Thiago Melo"
]

//ordenar
entrevistados.sort();

//horas
for(i = hora; i< saida; i++)
{   
    if((i==12)||(i==13)){
        continue;
    }
    //minutos
    for(j = 0; j < 60; j+=minutos){
        total_entrevistas++;
        if(j==0){
            console.log("Entrevista ", total_entrevistas, "=>", i,":",j+"0", entrevistados[total_entrevistas -1]);
        }
        else{
            console.log("Entrevista ", total_entrevistas, "=>", i,":",j, entrevistados[total_entrevistas -1]);
        }
    }
}