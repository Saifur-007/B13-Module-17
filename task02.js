// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function findNum(a){
    if(a %2 == 0){
        oddNum = a * 2;
        return oddNum;
    }else{
        evenNum = a / 2;
        return evenNum;
    }
}

console.log(findNum(11));