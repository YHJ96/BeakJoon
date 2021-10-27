const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

console.log(solution(inputArray));

function solution(arr) {
    // arr length 만큼 빈배열 선언하고 1로 초기값 (순위)
    let result = Array(arr.length).fill(1);
    // 반복문으로 완전 탐색
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // 키와 몸무게가 i 보다 작으면 result의 j 번째 값을 1 증가
            if(arr[i][0] > arr[j][0] && arr[i][1] > arr[j][1]) {
                result[j] += 1;
            // 키와 몸무게가 j 보다 작으면 result의 i 번째 값을 1 증가
            } else if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
                result[i] += 1;
            }
        }
    }
    // 문자열 출력값 만들기
    let answer = '';
    for(let x of result) {
        answer += x + ' ';
    }
    return answer;
} 