function sum(num1) {

    return function(num2) {
        console.log(num1 + num2);
    };
    
}

//ПРИМЕР
// sum(2)(3);
// sum(6)(9);