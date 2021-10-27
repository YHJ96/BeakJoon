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
    // 문자열 길이만큼 이어붙히기
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