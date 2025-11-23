const prompt = require("prompt-sync")();
const ataques = {
    Guerreiro: "Espada",
    Mago: "Magia",
    Monge: "Artes Marciais",
    Ninja: "Shuriken"
};
class personagem {
    constructor(nome, idade, tipoPersonagem) {
        this.nome = nome;
        this.idade = idade;
        this.tipoPersonagem = tipoPersonagem;
    }
    ataque() {
        if (this.tipoPersonagem === "Guerreiro") {
            console.log(`${this.tipoPersonagem} atacou usando ${ataques.Guerreiro}`);
        } else if (this.tipoPersonagem === "Mago") {
            console.log(`${this.tipoPersonagem} atacou usando ${ataques.Mago} `);
        } else if (this.tipoPersonagem === "Monge") {
            console.log(`${this.tipoPersonagem} atacou usando artes ${ataques.Monge} `);
        } else if (this.tipoPersonagem === "Ninja") {
            console.log(`${this.tipoPersonagem} atacou usando  ${ataques.Ninja}`);
        }
    } 
}  
let quantidadePersonagens = Number(prompt("Quantos personagens deseja criar? "));
for (let i = 1; i <= quantidadePersonagens; i++) {

    console.log(`\n--- Personagem ${i} ---`);
    let nome = prompt("Digite o nome do personagem: ");
    let idade = prompt("Digite a idade do personagem: ");
    let tipoPersonagem = prompt("Digite o tipo do personagem (Guerreiro, Mago, Monge, Ninja): ").toLowerCase();

    const meuPersonagem = new personagem(nome, idade, tipoPersonagem);
    meuPersonagem.ataque();
}


