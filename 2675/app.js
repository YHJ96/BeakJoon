const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].split(' ');
    inputArray.push({ n : Number(inputValue[0]), s : inputValue[1].trim() })
}

solution(inputArray);

function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        let answer = '';
        for(let j = 0; j < arr[i].s.length; j++) {
            for(let k = 0; k < arr[i].n; k++) {
                answer += arr[i].s[j];
            }
        }
        console.log(answer);
    }
}