const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

// 단어를 비교하는 함수 생성
function compareWord(str) {
    let flag = true;
    // 구조 분해 할당으로 변수 초기화
    const [str1, str2] = str.split(' ');
    const strHash1 = new Map();
    const strHash2 = new Map();
    // Map에 요소만큼 순회하면서 등록
    for (let i = 0; i < str1.length; i++) {
        if (strHash1.has(str1[i])) strHash1.set(str1[i], strHash1.get(str1[i]) + 1);
        else strHash1.set(str1[i], 1);
        if (strHash2.has(str2[i])) strHash2.set(str2[i], strHash2.get(str2[i]) + 1);
        else strHash2.set(str2[i], 1);
    }
    // 요소와 요소끼리 다른 값이 있으면 false
    strHash1.forEach((item, index) => {
        const compore = strHash2.get(index);
        if (compore !== item) return flag = false;
    });
    return flag;
}

function solution(arr) {
    const answer = [];
    // arr 요소만큼 순회시작
    for (let str of arr) {
        if (compareWord(str)) answer.push("Possible");
        else answer.push("Impossible");
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(input))