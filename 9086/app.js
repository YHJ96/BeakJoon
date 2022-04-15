const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

// 단어의 앞과 뒤를 배열로 담아 반환하는 함수
function serachWord(s) {
    return [s[0], s[s.length - 1]];
}

function solution(arr) {
    let answer = [];
    for(let x of arr) {
        // 배열의 값을 문자열로 치환
        const item = serachWord(x).join('');
        answer.push(item);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));