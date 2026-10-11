function numOfElements (number){
    const len = number.length;
    return len;
}
const num = numOfElements ([1,3,54,6,7,85,5])

console.log(num);


function isIt(num, ok){
    if(ok === true){
        const result =num * 5;
        return result;
    }else{
        const result = num * 1;
        return result;
    }
}

const done = isIt(3, false);

console.log(done);