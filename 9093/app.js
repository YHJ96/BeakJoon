const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = input[i].trim();
    inputArray.push(item);
}

// 단어를 뒤집는 함수 생성
function wordReverse(s) {
    let answer = [];
    // 단어를 공백기준으로 나눔
    const word = s.split(' ');
    for(let i = 0; i < word.length; i++) {
        // 단어를 배열에 넣고 뒤집기
        const item = [...word[i]].reverse();
        // 뒤집은 단어를 answer에 넣기
        answer.push(item.join(''));
    }
    // 단어를 문자열로 생성
    return answer.join(' ');
}

function solution(arr) {
    let answer = '';
    for(let x of arr) {
        // 단어를 wordReverse함수에 넣기
        const item = wordReverse(x);
        answer += item + '\n';
    }
    // 정답 정제
    return answer.trim();
}

console.log(solution(inputArray));