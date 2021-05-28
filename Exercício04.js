// 4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
//     a) números de 1 a 100  
//     b) quando chegar no número 50 interrompa a instrução e pare o loop 
//     c) quando chegar no número 50 pule a instrução 

//LETRA A

for(let i = 1; i <=100; i++){
    console.log(i)
}

//LETRA B

for(let i = 1; i <=100; i++){ //FOR é uma estrutura de repetição que faz o computador fazer uma repetição pra a gente 
    if(i === 51){
        break //Para interromper a instrução
    }
    console.log(i)
}

//LETRA C

for(let i = 1; i <=100; i++){
    if (i === 50){
        continue
    }
    console.log(i)
}

