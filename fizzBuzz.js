//fizzbuzz
//divisble by 3, then Fizz
//divisible by 5, then Buzz
//divisible by both then FizzBuzz
//none then display the number itself
// if not number, then display "not a number"

function fizzBuzz(inputNum) {
    if (typeof inputNum !== 'number') return NaN;
    if (inputNum%3 === 0 && inputNum%5 === 0) return 'FizzBuzz';
    if (inputNum%3 === 0) return 'Fizz';
    if (inputNum%5 === 0) return 'Buzz';
    return inputNum;
}
console.log(fizzBuzz("15"))