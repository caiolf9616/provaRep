let numero = Number(prompt("Insira um número inteiro positivo:"))


if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número inteiro positivo.")
} else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    
    let fibonacci = [0, 1];
    for (let i = 2; i <= numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    
    if (numero == 0) {
        fibonacci = [0];
    } else if (numero == 1) {
        fibonacci = [0, 1]
    } else {
        fibonacci = fibonacci.slice(0, numero + 1)
    }

    console.log(`Fatorial de ${numero}: ${fatorial}`)
    console.log(`Sequência de Fibonacci até ${numero}: ${fibonacci}`)
}
