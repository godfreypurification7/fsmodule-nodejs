function filterOddNumber(array) {
    return array.filter(n => n % 2 === 0);
}

function aFunction() {
    const array = [6, 5, 4, 3, 2, 1];
    console.log(filterOddNumber(array));
}

aFunction();
