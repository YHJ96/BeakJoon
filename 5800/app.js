const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split(' ').map((item) => +item);
    inputValue.shift();
    inputArray.push(inputValue);
}

function mathStats(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const minus = [];
    arr.sort((a,b) => b-a);
    for(let i = 0; i < arr.length; i++) {
        if(i+1 === arr.length) break;
        const sum = arr[i] - arr[i+1];
        minus.push(sum);
    }
    const maxMinus = Math.max(...minus);
    return [max, min, maxMinus];
}

function solution(arr) {
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        const [max, min, maxMinus] = mathStats(arr[i]);
        const result = `Class ${i+1}\nMax ${max}, Min ${min}, Largest gap ${maxMinus}` + '\n'
    answer += result
    }
    return answer.trim();
}

console.log(solution(inputArray));