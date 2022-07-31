const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const inputArray = [];
input.shift();
for (let i = 0; i < input.length; i += +input[i] + 1) {
    const inputValue = input.slice(i, i + +input[i] + 1);
    inputArray.push(inputValue);
}
// 팰린드롬을 확인 하는 함수 생성
function isPalindrome(arr) {
    const [n, ...words] = arr;
    const password = [];
    // 완전 탐색 시작
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            // 같은 단어면 continue
            if (i === j) continue;
            // 비밀번호 조합
            password.push(words[i] + words[j]);
        }
    }
    // 팰린드롬 검색 시작
    for (let word of password) {
        const reverse = [...word].reverse().join('');
        // 팰린드롬이면 return
        if (reverse === word) return word;
    }
    // 존재하지 않을 경우 return 0
    return 0;
}

function solution(arr) {
    const answer = [];
    // arr 요소만큼 순회시작
    for (let x of arr) {
        const item = isPalindrome(x);
        // item push
        answer.push(item);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));