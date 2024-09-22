const calculate = () => {
    const numberInput = document.getElementById('numberInput').value; // obtener el número ingresado por el usuario

    if (numberInput < 1 || numberInput > 20) {
        document.getElementById('output').innerText = "Número fuera del rango (debe estar entre 1 y 20)";
        return; // salir de la función si el número está fuera del rango
    }

    let output = ''; 

    output += `Tabla de multiplicar del ${numberInput}:<br>`;
    for (let i = 1; i <= numberInput; i++) {
        output += `${i} x ${numberInput} = ${numberInput * i}<br>`;
    }

    output += `Factoriales:<br>`;
    for (let i = 1; i <= numberInput; i++) {
        output += `El factorial de ${i} es: ${factorial(i)}<br>`;
    }

    document.getElementById('output').innerHTML = output;
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
