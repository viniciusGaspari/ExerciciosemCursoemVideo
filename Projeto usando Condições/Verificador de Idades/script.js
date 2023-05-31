//alert("Projeto usando Condições (If, else if e else)")

document.getElementById("verify").addEventListener("click", (e) => {


    const inputYear = document.getElementById("year")
    const selectedRadio = document.getElementsByName("sex");

    const text = document.getElementById("text");
    const img = document.getElementById("img");

    const date = new Date()
    let dateYear = date.getFullYear()
    let dateYearResult = (dateYear) - (inputYear.value);

    let msg = '';

    if(inputYear.value == ''){
        msg += `- Preencha o ANO DE NASCIMENTO\n`
        msg += `- E certificasse de colocar o seu SEXO`
    }

    if(msg != ''){
        alert(msg)
        text.innerHTML = "Faltando dados!"

    }else if (selectedRadio[0].checked && dateYearResult <= 12) {
        text.innerHTML = `Você é criança e tem ${dateYearResult} anos`
        img.innerHTML = "<img src='/img/kidBoy.png'>"

    }else if (selectedRadio[1].checked && dateYearResult <= 12){
        text.innerHTML = `Você é criança e tem ${dateYearResult} anos`
        img.innerHTML = "<img src='/img/kidGirl.png'>"

    }else if (selectedRadio[0].checked && dateYearResult <= 19){
        text.innerHTML = `Você é um jovem e tem ${dateYearResult} anos`
        img.innerHTML = `<img src='/img/teenagerBoy.png'>`

    }else if (selectedRadio[1].checked && dateYearResult <= 19){
        text.innerHTML = `Você é uma jovem e tem ${dateYearResult} anos`
        img.innerHTML = `<img src='/img/teenagerGirl.png'>`

    }else if (selectedRadio[0].checked && dateYearResult <= 59){
        text.innerHTML = `Você é um adulto e tem ${dateYearResult} anos`
        img.innerHTML = `<img src='/img/adultMan.png'>`

    }else if (selectedRadio[1].checked && dateYearResult <= 59){
        text.innerHTML = `Você é uma adulta e tem ${dateYearResult} anos`
        img.innerHTML = `<img src='/img/adultWoman.png'>`

    }else if (selectedRadio[0].checked && dateYearResult <= 120){
        text.innerHTML = `Você é um idoso e tem ${dateYearResult} anos`
        img.innerHTML = `<img src='/img/oldMan.png'>`

    }else if (selectedRadio[1].checked && dateYearResult <= 120){
        text.innerHTML = `Você é uma idoso e tem ${dateYearResult} anos`
        img.innerHTML = `<img src='/img/oldWoman.png'>`
    }else if (dateYearResult >= 121){
        alert("Não existe essa idade. O título da pessoa mais velha a ter vivido pertence a Jeanne Louise Calment, que viveu durou 122 anos e 164 dias, de acordo com o Livro dos Recordes do Guinness. (7 de fev. de 2023)")
    }
        
    
});
