alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = Math.floor(Math.random() * 30) + 1; // Gera um número aleatório entre 1 e 30
let tentativas = 0;

while (true) {
  let chute = parseInt(prompt('Escolha um número entre 1 e 30:'));
  tentativas++;
  if (tentativas === 15){
    alert('Você perdeu, você teve muitas tentativas')
  }else{
    alert(`Você ainda tem ${15 - tentativas} tentaivas restantes`)
  }

  if (chute === numeroSecreto) {
    alert(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas.`);
    break;
  } else if (chute < numeroSecreto) {
    alert('O número secreto é maior.');
  } else {
    alert('O número secreto é menor.');
  }
}
