/*
Crie um arquivo Questao_03.js
    No arquivo, declare alguma(s) estrutura(s)(exemplo: variável) para:
    - Receber a string “João da Silva” (nome de um aluno);
    - Receber um inteiro 7 (primeira nota do aluno);
    - Receber um real 8.5 (segunda nota do aluno);
    - Receber o valor da multiplicação da primeira nota do aluno por 0.6;
    - Receber o valor da multiplicação da segunda nota do aluno por 0.4;
    - Receber a soma destas últimas variáveis.
    - Crie uma mensagem de alerta para informar o nome e as notas individuais do aluno.
    - Crie uma mensagem de alerta para informar a nota total do aluno
    - Mostre os dados de, no mínimo, 3 alunos
    Crie a página Questao_03.html e mostre o resultado.
*/

let nomes = ["João da Silva", "Maria da Silva", "Cleber da Silva"];
let notas1 = [7, 8, 9];
let notas2 = [8.5, 8.25, 7.3];

for (let i = 0; i < nomes.length; i++) {

  let nota1Ponderada = notas1[i] * 0.6;

  let nota2Ponderada = notas2[i] * 0.4;

  let notaFinal = nota1Ponderada + nota2Ponderada;

  alert("Nome do aluno: " + nomes[i] + "\nNota 1: " + notas1[i] + "\nNota 2: " + notas2[i]);

  alert("Nome do aluno: " + nomes[i] + "\nNota final: " + notaFinal);
}