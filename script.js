"use strict";
let indice = 13;
let soma = 0;
let k = 0;
while (k < indice) {
    k = k + 1;
    soma = soma + k;
}
// Resultado = 91
console.log(soma);
function fibonacci(n) {
    if (n <= 1) {
        return "O número não é válido para o fibonacci";
    }
    let fib1 = 0;
    let fib2 = 1;
    if (n === fib1 || n === fib2) {
        return `O número ${n} percente a sequência de fibonacci`;
    }
    let proximoFib = fib1 + fib2;
    while (proximoFib <= n) {
        if (proximoFib === n) {
            return `O número ${n} percente a sequência de fibonacci`;
        }
        fib1 = fib2;
        fib2 = proximoFib;
        proximoFib = fib1 + fib2;
    }
    return `O número ${n} não pertence à sequência de Fibonacci.`;
}
// Pertence ao fibonacci
console.log(fibonacci(5));
// Não pertence
console.log(fibonacci(4));
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};
const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
const percentualPorEstado = Object.entries(faturamento).map(([estado, valor]) => {
    const percentual = (valor / faturamentoTotal) * 100;
    return { estado, percentual: percentual.toFixed(2) };
});
/*
SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98%
*/
percentualPorEstado.forEach(({ estado, percentual }) => {
    console.log(`${estado}: ${percentual}%`);
});
function inverteCaracteres(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}
console.log(inverteCaracteres("Texto"));
