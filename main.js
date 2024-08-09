/*
 - imc = peso / altura²(metros)
  

  Menor que 18.5 = abaixo do peso
  até 24,9 = peso normal
  25 a 29,9 = sobrepeso
  30 a 34,9 = Obesidade grau 1
  35 a 39,9 = Obesidade grau 2
  40 ou mais = Obesidade grau 3

-  A aplicação deve coletar o peso e altura
- deve mostrar o IMC
- deve mostrar a categoria de IMC


// Transformar número quebrado com 2 casas decimais e trocas ponto por vígula
// toFixed() espera receber quantas casa decimais deve mostrar
// replace() espera receber o que deve ser trocado 
const number = 234.9012390219012;
console.log(number.toFixed(2).replace('.', ','))
*/

// const weight = prompt("Digite sua peso");
// const heigth = prompt("Digite seu altura");
// Number(weight);
// Number(heigth);
// const imc = (weight / (heigth * heigth)).toFixed(2);

// if (imc < 18.5) {
//   alert(imc + " Abaixo do peso");
// } else if (imc >= 18.5 && imc <= 24.9) {
//   alert(imc + " Peso normal");
// } else if (imc >= 25 && imc <= 29.9) {
//   alert(imc + " Sobrepeso");
// } else if (imc >= 30 && imc <= 34.9) {
//   alert(imc + " Obesidade grau I");
// } else if (imc >= 35 && 39.9) {
//   alert(imc + " Obesidade grau II");
// } else if (imc >= 40) {
//   alert(imc + " Obesidade grau III");
// }
