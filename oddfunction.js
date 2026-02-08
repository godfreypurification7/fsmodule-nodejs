function oddFunction(array) {
    return array.filter((n) => n % 2 !== 0);
}

function runOddFunction() {
    const array = [8, 7, 6, 5, 4, 3, 2, 1];
    console.log(oddFunction(array));
}
runOddFunction();