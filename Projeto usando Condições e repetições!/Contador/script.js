window.alert("Projeto usando Condições e repetições!")

document.getElementById("calc").addEventListener("click", (e) =>{

    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let step = document.getElementById("step");
    let res = document.getElementById("res");

    let msg = 'Erro:\n'

    if(start.value == ''){
        msg += "- Preencha o campo INICIO\n"
    }
     if(end.value == ''){
        msg += "- Preencha o campo FIM\n"
    }
     if(step.value == ''){
        msg += "- Preencha o campo PASSO\n"
    }

    if(msg != 'Erro:\n'){
        alert(msg)
        res.innerHTML = "Impossivel contar!"
    }else{
        res.innerHTML = "Contando: "
        let i = Number(start.value);
        let f = Number(end.value);
        let p = Number(step.value);

        console.log(i)

        for(let c = i; c <= f; c += p){
            res.innerHTML += `\u{1F449} ${c}`
            console.log(c)
        }
    }
        


    
});

