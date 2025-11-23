const prompt = require("prompt-sync")();

function calcularNivel(xp) {
    if (xp <= 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

const quantidadeHerois = Number(prompt("Quantos heróis deseja cadastrar? "));

for (let i = 1; i <= quantidadeHerois; i++) {

    console.log(`\n--- Herói ${i} ---`);

    const nome = prompt("Digite o nome do herói: ");
    const xp = Number(prompt("Digite a quantidade de XP: "));

    const nivel = calcularNivel(xp);

    console.log(`➡ O Herói de nome ${nome} está no nível de: ${nivel}`);
}
