const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push({ A: inputValue[0], B: inputValue[1] });
}

solution(Number(input[0]), inputArray);

// for문안에 그냥 console.log로 출력하니 에러나서 한 곳에 모아서 console.log로 보내봤더니 성공
function solution(n, numArr) {
    let answer = '';
    for(let i = 0; i < n; i++) {
        if(i === n - 1) answer += (numArr[i].A + numArr[i].B);
        else answer += (numArr[i].A + numArr[i].B) + '\n';
    }
    console.log(answer);
}