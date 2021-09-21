const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => +item);

console.log(solution(input));

function solution(arr) {
    let newArr = [];
    let sum = 0;
    let compare = Number.MAX_SAFE_INTEGER;
    let answer = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }

    for(let j = 0; j < newArr.length; j++) {
        if(compare > Math.abs(100 - newArr[j])) {
            compare = Math.abs(100 - newArr[j]);
            answer = newArr[j];
        } else if(compare === Math.abs(100 - newArr[j])) {
            if(newArr[j] > newArr[j - 1]) {
                answer = newArr[j]
            } else answer = newArr[j - 1];
        }
    }
    return answer;
}