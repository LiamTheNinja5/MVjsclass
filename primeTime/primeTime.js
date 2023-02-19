let x = 1;
let y = 10;
let primes = [];

// Find all prime numbers between x and y
function test() {
    if (!(Number.isInteger(x)) || !(Number.isInteger(y)) || x <= 0 || y <= 0 || y <= x) {
        display("error");
    } else {
        // check if number is prime if prime add to primes array
        for (let j = x; j < y; j++) {
            let prime = isPrimeNumber(j);
            if (prime) {
                primes.push(j)
            }
        }
    }

    display(primes);
    primes = [];
}

// Display the given message 
function display(Message) {
    console.log(Message);
    alert(Message);
}

// Check if a number is prime
function isPrimeNumber(num) {
    if (num == 1) return false;
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return true;
}
