let impostoINSS;
let impostoIR;

let salario = 4000.00;

if (salario <= 1556.94) {
    impostoINSS = salario * 0.08;
} else if (salario <= 2594.92) {
    impostoINSS = salario * 0.09;
} else if (salario <= 5089.82) {
    impostoINSS = salario * 0.11;
} else {
    impostoINSS = 570.88;
};

let salarioBase = salario - impostoINSS;

if (salarioBase <= 1903.98) {
    impostoIR = 0;
} else if (salarioBase <= 2826.65) {
    impostoIR = (salarioBase * 0.075) - 148.80;
} else if (salarioBase <= 3751.05) {
    impostoIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    impostoIR = (salarioBase * 0.225) - 636.13;
} else {
    impostoIR = (salarioBase * 0.275) - 869.36
};

console.log('Salário Líquido é: ' + (salarioBase - impostoIR));