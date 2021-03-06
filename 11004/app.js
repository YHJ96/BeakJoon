const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split(' ').map((item) => +item);
const n = input[0].split(' ').map((item) => +item)[1];

function solution(arr, n) {
    // 오름차순 정렬
    arr.sort((a,b) => a-b);
    // n 번쨰 숫자 출력 인덱스는 0 부터 시작
    const answer = arr[n - 1];
    return answer;
}

console.log(solution(inputArray, n));