const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}
console.log(solution(inputArray));

// nCr문제 조합문제
function solution(arr) {
    let result = [];
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        const item = combination(arr[i][1], arr[i][0]);
        result.push(Math.round(item));
    }
    for(let x of result) {
        answer += x + '\n';
    }
    return answer;
}

// 조합 알고리즘 nCr
function combination(n, r) {
    let total = 1;
    let choice = 1;
    let math = 1;
    for(let i = 1; i <= n; i++) {
        total *= i;
    }
    for(let j = 1; j <= r; j++) {
        choice *= j;
    }
    for(let k = 1; k <= n - r; k++) {
        math *= k;
    }
    let answer = total / (choice * math);
    return answer;
}