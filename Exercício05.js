// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function calculadora (operador, numero01, numero02){
    
    switch (operador){
    case 'Soma':
        return numero01 + numero02;
        break
    case 'Multiplicação':
        return numero01 * numero02;
        break
    case 'Divisão':
        return numero01 / numero02;
        break
    case 'Subtração':
        return numero01 - numero02;
    default:
        return 'Digite uma entrada válida'
    }
}
console.log(calculadora('Subtração', 12, 100))