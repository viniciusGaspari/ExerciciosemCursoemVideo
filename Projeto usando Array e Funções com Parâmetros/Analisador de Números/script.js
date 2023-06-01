const input = document.getElementById("number");
const select = document.getElementById("select");
const res = document.getElementById("res");

let values = [];

function isNumber(n){

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true;

    } else {

        return false;

    }
}

function inList(n, l) {

    if (l.indexOf(Number(n)) == -1) {

        return true;

    } else {
        
        return false;

    }
}

function create() {

    if(isNumber(input.value) && inList(input.value, values)) {
        
        values.push(Number(input.value));

        const option = document.createElement("option");
        option.value = `n${Number(input.value)}`;
        option.innerText = `Valor ${Number(input.value)} adicionado`;
        console.log(select);
        select.appendChild(option);


    }else {
        alert("Valor inválido ou já encontrado na lista.")
        
    }
    res.innerHTML = '';
    input.value = '';
    input.focus();
}

function analize() {

    if (values.length == 0) {

        alert("Adicione valores antes de finalizar")

    } else {

        let total = values.length;
        let bigger = values[0];
        let smaller = values[0];
        let average = 0;
        let plus = 0;

        for (let pos in values) {

            plus += values[pos];

            if(values[pos] > bigger) {

                bigger = values[pos];

            }

            if (values[pos] < smaller) {

                smaller = values[pos];

            }

        }

        average = plus / total;


        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${bigger}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${smaller}</p>`;
        res.innerHTML += `<p>Somando todos os valores temos ${plus}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${average}</p>`;

    }

}