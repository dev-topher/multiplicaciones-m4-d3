// importar el módulo readline-sync para leer la entrada del usuario desde la línea de comandos
const readlineSync = require('readline-sync');

const calculate = () => {
    // solicitar al usuario que ingrese un número entre 1 y 20
    const numberInput = readlineSync.questionInt('Ingrese un número entre 1 y 20: ');

    // validar si el número ingresado está dentro del rango permitido (1 a 20)
    if (numberInput < 1 || numberInput > 20) {
        console.log("Número fuera del rango (debe estar entre 1 y 20)");
        return; // salir de la función si el número está fuera del rango
    }

    console.log(`Tabla de multiplicar del ${numberInput}:`);
    for (let i = 1; i <= numberInput; i++) {
        console.log(`${i} x ${numberInput} = ${numberInput * i}`);
    }

    console.log(`Factoriales:`);
    for (let i = 1; i <= numberInput; i++) {
        console.log(`El factorial de ${i} es: ${factorial(i)}`);
    }
};

// función para calcular el factorial de un número dado
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1; // el factorial de 0 y 1 es 1
    } else {
        let result = 1; // inicializar el resultado del factorial como 1
        // bucle para calcular el factorial
        for (let i = 2; i <= n; i++) {
            result *= i; // multiplicar el resultado actual por 'i'
        }
        return result; // devolver el resultado del factorial
    }
};

calculate();