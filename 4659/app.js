const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].trim();
    inputArray.push(item);
}

// 단어가 발음하기 좋은 단어인지 확인하는 함수
function isWord(s) {
    // 모음을 모아놓은 배열선언
    const compare = ['a','e','i','o','u'];
    // 만약단어에 모음이 없다면 false 하나라도 있다면 true
    const find = compare.every((item) => !s.includes(item));
    let count1 = 0;
    let count2 = 0;
    // 단어 비교 초기화
    let char = s[0];
    // 단어에 모음이 하나도 없다면 return false
    if(find) return false;
    // 단어 탐색시작
    for(let i = 0; i < s.length; i++) {
        // 단어의 모음과 자음이 연속해서 3개라면 return false
        if(count1 === 3 || count2 === 3) return false;
        // 단어가 모음에 포함된다면 자음비교를 0으로 하고 모음비교 1증가
        if(compare.includes(s[i])) {
            count2 = 0;
            count1++;
        // 단어가 자음에 포함된다면 모음비교를 0으로 하고 자음비교 1증가
        } else {
            count1 = 0;
            count2++;
        }
        // i가 0일때는 비교할 대상이없으므로 진행
        if(i === 0) continue;
        // 만약 단어가 'e'와'o'가아닌 단어가 연속되게 나타나면 false
        if(char === s[i] && char !== 'e' && char !== 'o') return false;
        // 비교할 단어로 바꿔주기
        else char = s[i];
    }
    // 마지막자리에 모음과 자음이 연속된 3개가 올수도 있으므로 체크
    if(count1 === 3 || count2 === 3) return false;
    return true;
}

function solution(arr) {
    let answer = [];
    // 배열요소별 순회시작
    for(let item of arr) {
        if(item === 'end') continue;
        const isChecked = isWord(item);
        if(isChecked) answer.push(`<${item}> is acceptable.`);
        else answer.push(`<${item}> is not acceptable.`);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));