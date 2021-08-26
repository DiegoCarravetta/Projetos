/*
Data de entrega: 27/08

Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel
e tesoura (Jokenpô) com você.

O programa tem que:
1) Permitir que eu decida quantas rodadas iremos fazer;
2) Ler a minha escolha (pedra, papel ou tesoura);
3) Decidir de forma aleatória a decisão do computador;
4) Mostrar quantas rodadas cada jogador ganhou;
5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
6) Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa;
*/

console.log ("JO-KEN-PÔ!");

let jogar1 = 0

while (jogar1 != 2) {

  // 1) Permitir que eu decida quantas rodadas iremos fazer;
  let rodadas1 = prompt ("\nPrepare-se, você está preste a me enfrentar no famoso jogo japonês JO-KEN-PÔ?\n\nMe diga humano, quantas vezes iremos duelar?")
  console.log ();

  let opcoes1 = ["Pedra", "Papel", "Tesoura"];

  let contador1 = 0;

  let vitoria1 = 0, vitoria2 = 0, derrota1 = 0, derrota2 = 0;

  while (contador1 < rodadas1) {
  
    // 2) Ler a minha escolha (pedra, papel ou tesoura);
    let escolha1 = prompt ("[1] Pedra\n[2] Papel\n[3] Tesoura\nDas opções acima (1, 2 ou 3), escolha sua opção e me enfrente:");
    escolha1 = escolha1 - 1;

    // 3) Decidir de forma aleatória a decisão do computador;
    let computador1 = Math.floor (Math.random () * 3);
    
    console.log (`\nHumano, você escolheu ${opcoes1 [escolha1]} e eu escolhi ${opcoes1 [computador1]}\n`);

    let resultado1 = escolha1 - computador1;

    if (resultado1 == -1 || resultado1 == 2) {
      console.log ("Humano, você perdeu\n");
      derrota1 = derrota1 + 1;
      vitoria2 = vitoria2 + 1;
      
      // 4) Mostrar quantas rodadas cada jogador ganhou;
      console.log (`Até o momento você perdeu ${derrota1} vez(es) e eu ganhei ${vitoria2} vez(es)`);
    }
  
    else if (resultado1 == -2 || resultado1 == 1) {
      console.log ("Humano, você venceu\n");
      vitoria1 = vitoria1 + 1;
      derrota2 = derrota2 + 1;
      
      // 4) Mostrar quantas rodadas cada jogador ganhou;
      console.log (`Até o momento você venceu ${vitoria1} vez(es) e eu perdi ${derrota2} vez(es)`);
    }

    else {
      console.log ("Empatamos!");
    }  
  
    contador1 = contador1 + 1;
  }

  // 5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
  if (vitoria1 > vitoria2) {
    console.log ("\nHumano, você foi o grande vencedor");
  }

  // 5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
  else if (vitoria1 < vitoria2) {
    console.log ("\nEu fui o grande vencedor");
  }

  // 5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
  else {
    console.log ("\nNão houveram vencedores");
  }

  // 6) Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa;
  jogar1 = prompt ("\n[1] Jogar novamente\n[2] Não quero mais jogar\nDas opções acima (1 ou 2) escolha sua opção e me enfrente:");
}
 console.log ("\nAté a próxima!")