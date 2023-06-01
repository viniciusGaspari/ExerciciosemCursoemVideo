function create() {

    let input = document.getElementById("number").value;

    
    if (input == '' ) {

        alert("Insere número da tabuada")

    }else {

        let number = Number(input)
        select.innerHTML = '';

        for(let t = 1; t <= 10; t++){

            const select = document.getElementById("select");
            const option = document.createElement("option");

            option.text = `${number} x ${t} = ${number*t}`
            option.value = `n${t}`

            select.appendChild(option);

        }   
    }
}