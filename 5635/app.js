const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].trim().split(' ');
    const [ name, age, month, year ] = inputValue;
    inputArray.push([name, +age, +month, +year]);
}

function solution(arr) {
    let answer = '';
    arr.sort((a,b) => {
        if(a[3] !== b[3]) return a[3] - b[3];
        else {
            if(a[2] !== b[2]) return a[2] - b[2];
            else {
                return a[1] - b[1];
            }
        }
    });
    answer += arr[arr.length - 1][0];
    answer += '\n';
    answer += arr[0][0];
    return answer;
}

console.log(solution(inputArray));