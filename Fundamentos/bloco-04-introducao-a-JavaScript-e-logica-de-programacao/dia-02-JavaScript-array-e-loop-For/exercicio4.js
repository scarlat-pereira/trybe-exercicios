let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let mediaAritmetica = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

mediaAritmetica = result / numbers.length

console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}