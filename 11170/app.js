const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].split(' ').map((item) => +item);
    inputArray.push(item);
}

// 숫자들의 0의 개수를 세는 함수
function findZero(arr) {
    let answer = 0;
    // 배열의 시작과 끝으로 분할할당
    const [start, end] = arr;
    const num = [];
    // num의 변수에 숫자의 범위을 지정
    for(let i = start; i <= end; i++) {
        num.push(i);
    }
    // 배열로 나누기 위해 문자열로 바꾼뒤 숫자로 다시 치환
    num.forEach((item) => {
        const value = item.toString().split('').map((item) => +item);
        // 0의 개수를 찾기
        for(let x of value) {
            if(x === 0) answer += 1;
        }
    });
    return answer;
}

function solution(arr) {
    let answer = '';
    // 배열의 인자를 넘겨줌
    for(let x of arr) {
        const item = findZero(x);
        // 정답 정제
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));