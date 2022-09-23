/*
Questão 4
1. Crie um arquivo Questao_04.js
1.1. Crie uma Classe Aluno
1.1.1. A classe deverá possuir as propriedades:
1.1.1.1. primeiroNome, segundoNome, primeiraNota, segundaNota
1.1.2. A classe deverá possuir os métodos
1.1.2.1. nomeCompleto: primeiroNome + segundoNome
1.1.2.2. media: (primeiraNota * 0,6) + (segundaNota * 0,4)
1.1.2.3. situacao: se media > 6 “Aprovado”, senão “Reprovado”
1.2. Crie um array que contenha 5 objetos Aluno
1.3. Crie uma função que percorra o array e mostre: Nome completo, Média e Situação do aluno.
1.4. Crie a página Questao_04.html para hospedar e executar o arquivo Questao_04.js
1.5. Mostre os dados de, no mínimo, 3 alunos
*/

class aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return this.primeiraNota * 0.6 + this.segundaNota * 0.4;
  }

  situacao() {
    if (this.media() > 0.6)
      return 'Aprovado';
    else
      return 'Reprovado';
  }
}


let alunos = [
  new aluno('André', 'Silva', 6, 7),
  new aluno('Bruno', 'Silva', 4, 8.5),
  new aluno('Carlos', 'Silva', 3, 9.3),
  new aluno('Débora', 'Silva', 2, 1.5),
  new aluno('Eric', 'Silva', 9, 4.5)
];

for (let i = 0; i < alunos.length; i++) {
  /* Crie uma função que percorra o array e mostre: Nome completo, Média e Situação do aluno. */
  alert(alunos[i].nomeCompleto() + "\nMedia: " + alunos[i].media() + "\nSituação: " + alunos[i].situacao());

}