function isPrimeNumber(num) {

    if (num > 1000) return console.log('данные неверны');
    if (num <= 1) return console.log('простыми или составными бывают только натуральные числа больше 1');

    let i = 2;
    //ищем первое значение, на которое делится нацело заданный аргумент(т.е. пока остаток от деления не будет равен 0)
    while (num % i != 0) {
        i++;
    }

    console.log((i === num) ? `${num} - простое` : `${num} - составное`);
    
}

// ПРИМЕР
// isPrimeNumber(-1);
// isPrimeNumber(0);
// isPrimeNumber(1);
// isPrimeNumber(2);
// isPrimeNumber(3);
// isPrimeNumber(9);
// isPrimeNumber(1000);
// isPrimeNumber(1001);