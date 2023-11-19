//show prime numbers upto a given limit
function showPrime(arg) {
    for (i=1; i <=arg; i++) {
        let isPrime = true;
        for (count=1;count<=i;count++) {
            if (i%count === 0 && (count !== 1) && (count !== i)) isPrime=false;
        }
        if(isPrime) console.log(i);
    }
}

console.log(showPrime(20))
