// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


const numbers = [2,5,6,7,8];

function make_avg(numbers, size){
    let sum = 0;
    for (const number of numbers){
        sum = sum + number;
    }
    return sum / size;
}

console.log(make_avg(numbers, numbers.length));