const diaSemana= document.getElementById("dia-semana");
const diaMesAno= document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
diaSemana.textContent = "Domingo poha";
diaMesAno.textContent = getCurrentDate();

function getCurrentDate() {
    const date = new Data();
    const dia = date.getDate();
    const mes = date.getMonth();
    return (parseInt(dia)) + "/" + (parseInt(mes) + 1) + "/" + date.getFullTear();
}


console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
