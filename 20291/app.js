const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let x of input) {
    const item = x.trim();
    inputArray.push(item);
}

function solution(arr) {
    let answer = '';
    const result = [];
    // 확장자를 확인할 해쉬테이블 생성
    const textHash = new Map();
    arr.forEach((item) => {
        // 배열의 인자를 .을 기준으로 나눠서 확장자명만 추출
        const text = item.split('.')[1];
        // Map함수에 있으면 1을 더하고 없으면 새로 지정
        if(!textHash.has(text)) textHash.set(text, 1);
        else textHash.set(text, textHash.get(text) + 1);
    });
    textHash.forEach((value, key) => {
        // 확장자명의 이름과 개수를 저장
        result.push([key, value]);
    });
    result.sort((a,b) => {
        // 사전순 정렬
        return a[0].localeCompare(b[0]);
    });
    // 정답 정제
    for(let item of result) {
        const [name, count] = item;
        answer += `${name} ${count}` + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));