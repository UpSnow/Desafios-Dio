const prompt = require('prompt-sync')();

function calculoPartidasRankeadas(vitorias, derrotas) {
    const total = vitorias - derrotas;
    return total;

}
function calcularNivel(calculoPartidasRankeadas) {
    if (calculoPartidasRankeadas <= 10) {
        return "Ferro";
    }
    else if (calculoPartidasRankeadas <= 20) {
        return "Bronze";
    }
    else if (calculoPartidasRankeadas <= 50) {
        return "Prata";
    }
    else if (calculoPartidasRankeadas <= 80) {
        return "Ouro";
    }
    else if (calculoPartidasRankeadas <= 90) {
        return "diamante";
    }
    else if (calculoPartidasRankeadas <= 100) {
        return "lendario";
    }
    else if (calculoPartidasRankeadas >= 101) {
        return "Imortal";
    }


}
let continuar = true;
while (continuar) {

    let vitorias = Number(prompt("Digite o número de vitórias: "));
    let derrotas = Number(prompt("Digite o número de derrotas: "));


    let saldoVitorias = calculoPartidasRankeadas(vitorias, derrotas);
    let nivel = calcularNivel(saldoVitorias);

    console.log(`\n--- Calculadora de Partidas Rankeadas ---`);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
    
    continuar = prompt("Deseja calcular o nivel de um herói? (s/n) ").toLowerCase();
    
    if (continuar !== 's') {
        continuar = false;
    }
}
;