const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function searchNum(s) {
    let answer = '';
    // length를 끝까지 가기 위해 추출
    s += ' ';
    // 문자열에서 숫자형태 추출
    const check = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < s.length; i++) {
        if (check.includes(s[i])) {
            answer += s[i];
            if (!check.includes(s[i + 1])) answer += ' ';
        }
    }
    // 100자리까지 들어올 수 있으므로 Bigint
    return answer.trim().split(' ').map((item) => BigInt(item));
}

function solution(arr) {
    let answer = '';
    let result = [];
    // item을 전부 reslut에 추가
    for (let x of arr) {
        const item = searchNum(x);
        result.push(...item);
    }
    // sort 정렬 올림차순
    result.sort((a,b) => {
        if(a - b > 0n) return 1;
        if(a - b === 0n) return 0;
        if(a - b < 0n) return -1;
    });
    // 정답 정제
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));