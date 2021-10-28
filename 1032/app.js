const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(input) {
    let result = '';
    for (let i = 0; i < input[0].length; i++) {
        let compare = input[0][i];
        let flag = true;
        for (let j = 0; j < input.length; j++) {
            if (compare !== input[j][i]) {
                flag = false;
                break;
            }
        }
        if (flag) result += compare;
        else result += "?";
    }
    return result;
}

console.log(solution(inputArray));