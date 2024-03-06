var hora = 9
var minutos = 15
var total_entrevistas = 0
var saida = 17

for(i = hora; i< saida; i++)
{
    //minutos
    for(j = 0; j < 60; j+=minutos){
        if((i<12)||(i>=14)){
            total_entrevistas++;
            console.log("Entrevista ", total_entrevistas, "=>", i,":",j);
        }
        else{
            continue;
        }
    }
}