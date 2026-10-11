function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum+number;    
    }
    return sum;
}

const numbers = [1,2,3,4];
const sum = sumOfNumber(numbers);



console.log(sum);