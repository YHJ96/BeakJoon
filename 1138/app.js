const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for (let item of input) {
    const inputValue = item.split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    const [[n], people] = arr;
    let answer = Array.from({ length: n }, () => 0);
    // 순서가 1부터 시작함으로 i = 1
    for (let i = 1; i < n + 1; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            // 변수가 카운트랑 같고 빈 배열이면 순서 넣어주기
            if (count === people[i - 1] && answer[j] === 0) {
                answer[j] = i;
                break;
            }
            // 배열이 비어있을 경우에 count += 1
            else if (answer[j] === 0) count += 1;
        }
    }
    // 정답 정제
    return answer.join(' ');
}

console.log(solution(inputArray));