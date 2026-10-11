const numbers = [1,3,4,5,6,8,9];

function evenNum(numbers){
    let output =[];
    for(const num of numbers){
        if(num %2 !== 0){
            console.log(num);
            output.push(num);
        }
    }
    return output;
}

const result = evenNum(numbers);

console.log(result);