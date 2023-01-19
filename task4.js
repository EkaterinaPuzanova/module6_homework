function printNumberSetInterval(valueStart, valueEnd) {

    if (valueEnd < valueStart) return console.log('Введены некорректные данные');

    const TOTAL_PRINT = valueEnd - valueStart + 1;

    // Создаем массив значений, которые нужно вывести в консоль
    const arrItems = [];
    for (let i = valueStart; i <= valueEnd; i++) {
        arrItems.push(i);
    }

    // Функция, которая выводит в консоль первый эл-т в массиве, и после - удаляет его из массива
    const printNumber = function(arr) {
        console.log(arr[0]);
        arr.shift();
    }

    const intervalId = setInterval(printNumber, 1000, arrItems);
    
    setTimeout(function(){
        clearInterval(intervalId)
    }, (TOTAL_PRINT + 1) * 1000)


}

//ПРИМЕР
//printNumberSetInterval(5, 15);