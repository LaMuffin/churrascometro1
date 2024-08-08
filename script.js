// carne - 400 g por pessoa + de 6 horas - 650 g
// cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// refrigerante/agua - 1000 ml por pessoa + 6 horas - 1500 ml

// criancas valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<h2 class="result-info"> Voce vai precisar de:</h2>`

    resultado.innerHTML += `
    <div class="result-block">
        <p>${qdtTotalCarne / 1000} Kg de Carne</p>
    </div>
    `

    resultado.innerHTML += `
    <div class="result-block">
        <p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>
    </div>
    `
    resultado.innerHTML += `
    <div class="result-block">
        <p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas Pet's 2l de Refri ou Suco</p>
    </div>
    </br>
    </br>
    </br>
    `
}

function carnePP(duracao) {
    if (duracao >= 6) {
            return 650;
    }   else {
            return 400;        
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
            return 2000;
    }   else {
            return 1200;        
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
            return 1500;
    }   else {
            return 1000;        
    }
}