function calcularIMC(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    let altura = parseFloat(document.getElementById("altura").value.replace(",", "."));

      if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerText = "Preencha todos os campos corretamente.";
        return;
    }


    let imc = peso / (altura * altura);

    let classificacao = "";

     if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc <= 24.9) {
        classificacao = "Peso ideal";
    } else if (imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    document.getElementById("resultado").innerText = `Olá, ${nome}! O seu IMC é ${imc.toFixed(2)}. E você está classificado como: ${classificacao}.`;
}

let botao = document.getElementById("btn");

botao.addEventListener("click", calcularIMC); {
}