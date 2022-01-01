const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].split(' ').map((item) => +item);
    inputArray.push(item);
}

// 3번째 숫자 찾기
function findNum(arr) {
    // 내림차순 정렬
    arr.sort((a,b) => b-a);
    // 분할할당으로 3번째 값 추출
    const [one, two, three] = arr;
    return three;
}

function solution(arr) {
    let answer = '';
    // 배열의 요소를 findNum에 전달
    for(let x of arr) {
        const item = findNum(x);
        // 정답 정제
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));