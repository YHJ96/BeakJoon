const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let item of input) {
    const value = item.trim();
    inputArray.push(value);
}

function solution(arr) {
    let answer = '';
    let max = Number.MIN_SAFE_INTEGER;
    // 문자열을 세로로 읽기 위해서 반복문 수행전에 문자열중 최대의 길이를 알기 위해 배열 순회
    for(let item of arr) {
        // 문자열의 길이의 최대값을 추출
        max = Math.max(max, item.length);
    }
    // 문자열의 최대길이만큼 순회시작
    for(let i = 0; i < max; i++) {
        // arr에 있는 요소까지 반복 시작
        for(let j = 0; j < arr.length; j++) {
            // 만약에 문자열의 인덱스에 인자가 없으면 continue로 반복문 실행 하지 않기
            if(arr[j][i] === undefined) continue;
            // 문자열 추출
            else answer += arr[j][i];
        }
    }
    return answer;
};

console.log(solution(inputArray));