/*
Instruções
Com os conceitos aprendidos, crie um programa de calculadora que:
- receba dois valores, que devem ser salvos em variáveis;
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos
aritméticos;
- com os dois valores e o operador definido, o programa deve fazer a operação e
retornar o resultado;
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma
desenvolvido por MarcosLemos-dev
*/
console.log("Welcome to Programiz!");

console.log('bem vindo(a) , vamos usar a calculadora!!! ');

let operador = prompt('Entre com um destes operadores mateamaticos ( +, -, * ou / ): ');


let num1 = parseFloat(prompt('digite o primeiro numero: '));
let num2 = parseFloat(prompt('digite o segundo numero: '));

let result , resto;


if (operador == '+') {
    soma();
}
else if (operador == '-') {
    subtracao();
}
else if (operador == '*') {
    multiplicacao();
}
else if (operador == '/') {
    divisao();
}
else {
    console.log('operação invalida resultado 0(zero)');
}

// display the result
//console.log(`${num1} ${operador} ${num2} = ${result}`);
console.log('fim da calculadora')
//fim da calculadora 
// bloco das funcoes 
function soma(numero1,numero2){
     result = num1 + num2;
     console.log(`${num1} ${operador} ${num2} = ${result}`);
    return  result
}
function subtracao(numero1,numero2){
     result = num1 - num2;
     console.log(`${num1} ${operador} ${num2} = ${result}`);
    return  result
}
function multiplicacao(numero1,numero2){
     result = num1 * num2;
     console.log(`${num1} ${operador} ${num2} = ${result}`);
     
    return  result
}
function divisao(numero1,numero2){
     result = num1 / num2;
     resto = num1 % num2;
     //console.log("1º numero",num1,"/","2º numero",num2, "o resultado  da divisão:",result);
     console.log(`${num1} ${operador} ${num2} = ${result}`);
     console.log("o resto da divisão",resto);
    return  result;
    
}