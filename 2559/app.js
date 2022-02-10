const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 0 ; i < input.length; i++) {
    const item = input[i].trim().split(' ').map((item) => +item);
    inputArray.push(item);
}
const k = inputArray[0][1];
const arr = inputArray[1];

function solution(k, arr) {
    const compare = Array.from({length : 100001}, () => 0);
    let answer = [];
    // 구간합 구하기 i - 1의 이유는 i가 0부터 시작하기 때문에 i = 1로 하고 탐색시작
    for(let i = 1; i <= arr.length; i++) {
        compare[i] = compare[i - 1] + arr[i - 1];
    }
    // 구간의 합 구하기
    for(let i = k; i <= arr.length; i++) {
        const item = compare[i] - compare[i - k];
        answer.push(item);
    }
    // 정답 정제
    return Math.max(...answer);
}

console.log(solution(k, arr));