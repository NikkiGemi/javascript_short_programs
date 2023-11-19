//show stars
function showStars(arg) {
    for(let i = 1; i <=arg; i++) {
        let pattern = '';
        for(let count=0; count <i; count++ ) {
            pattern += '*'
        }
        console.log(pattern)
    }
}
showStars(5)