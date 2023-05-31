window.alert("Projeto usando Condições (If, else if e else)")

const text = document.getElementById("res");
const img = document.getElementById("img");
const date = new Date();
const newDateHours = date.getHours();

if (newDateHours >= 1 && newDateHours <= 5) {
    text.innerHTML = `Agora são as ${newDateHours} horas da madrugada!`
    img.innerHTML = "<img src='/img/dawn.png'>"
    document.body.style.background = "#3F675F"

}else if (newDateHours <= 12) {
    text.innerHTML = `Agora são as ${newDateHours} horas da manhã!`
    img.innerHTML = "<img src='/img/morning.png'>"
    document.body.style.background = "#FFE3C7"

}else if (newDateHours <= 18) {
    text.innerHTML = `Agora são as ${newDateHours} horas da tarde!`
    img.innerHTML = "<img src='/img/afternoon.png'>"
    document.body.style.background = "#D8B382"

}else if (newDateHours <= 24) {
    text.innerHTML = `Agora são as ${newDateHours} horas da noite!`
    img.innerHTML = "<img src='/img/evening.png'>"
    document.body.style.background = "#216998"
}

