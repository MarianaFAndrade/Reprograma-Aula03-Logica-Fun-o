//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

//Eu vou criar como função o recebimento de 2 números, numero1 e numero2
//Após a divisão deles, eu vou pegar o resto dessa soma, 
//imprimir no console e dizer se esse número derivado do resto é par

//Massssssss não faz sentido porque se a gente parar pra pensar se eu dividir o número 3 por 3 ele da 1 pra cada, 
//mas o resultado dessa divisão (0) vai me dizer que o número 1 que é resultado dessa divisão é par, o que não é

//Eu não consegui fazer ele dividir por exemplo 14/3 ficando um número inteiro 4 e sobrando o resto, ele só fica c número decimal

function divisao (numero1, numero2) {
    if (numero1 % numero2 === 0){
        console.log('Par')
    }
    return numero1 / numero2
    
}
console.log(divisao(15,15))


