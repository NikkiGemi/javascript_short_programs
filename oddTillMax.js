//display even odd numbers till the number passed as argument
function showNums(inputNum) {
    for (let i=0; i<=inputNum; i++) {
        console.log(i, i%2 === 0 ? 'EVEN' : 'ODD')
    }
}

showNums(13)