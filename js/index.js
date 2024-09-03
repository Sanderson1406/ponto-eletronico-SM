const diaSemana= document.getElementById("dia-semana");
const diaMesAno= document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
diaSemana.textContent = getWeekDay();
horaMinSeg.textContent = getCurrentHour();
diaMesAno.textContent = getCurrentDate();

const btnBaterPonto= document.getElementById("dialog-ponto");
dialogPonto.showModal();

const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
});

function getCurrentDate() {
    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();
    if (dia < 10) {
        dia = "0" + dia
    }
    return dia + "/" + (parseInt(mes) + 1) + "/" + date.getFullTear();
}

function getCurrentHour() {
    const hour = new Date();
    return hour.getHours() + ":" + hour.getMinutes() + ":" + hour.getSeconds();
}

function getWeekDay() {
    const dia = new Date();
    let days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feria", "Quinta-Feira", "Sexta-Feria", "Sabado"]
    return days[dia.getDay()]
}

btnBaterPonto.addEventListener("click", registertById())

function register() {
    alert("Bater ponto")
}