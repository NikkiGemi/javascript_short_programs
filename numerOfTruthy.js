//return number of truthy in an array

const array = ['', null, 'hello', NaN, 'oreo', undefined];
function countTruthy () {
    let count = 0;
    for(let value of array) {
        if(value) count++
    }
    console.log("truthy is", count)
}
countTruthy();