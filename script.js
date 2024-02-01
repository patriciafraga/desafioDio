//Classificador de nível de heroi
const nivel = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante",
];
let nomeHeroi = prompt("Olá, qual o nome do heroi?");
let nivelDigitado = [];

let xp = prompt("Qual é a xp do heroi?");

if (xp < 1000) {
  nivelDigitado = nivel[0];
} else if (xp <= 2000) {
  nivelnivelDigitado = nivel[1];
} else if (xp <= 5000) {
  nivelnivelDigitado = nivel[2];
} else if (xp <= 7000) {
  nivelnivelDigitado = nivel[3];
} else if (xp <= 8000) {
  nivelnivelDigitado = nivel[4];
} else if (xp <= 9000) {
  nivelnivelDigitado = nivel[5];
} else if (xp <= 10000) {
  nivelnivelDigitado = nivel[6];
} else {
  nivelDigitado = nivel[7];
}

alert(`O Herói de nome ${nomeHeroi} está no nível ${nivelDigitado}`);
