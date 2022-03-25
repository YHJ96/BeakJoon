const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

// 단어를 공백에 따라서 뒤집는 함수
function reverseString(s) {
    const arr = s.split(" ").reverse();
    return arr.join(" ");
}

function solution(arr) {
    const answer = [];
    // 배열의 요소만큼 진행
    arr.forEach((item, index) => {
        const reverseStr = reverseString(item);
        // 문자열을 정제한뒤 answer push
        const value = `Case #${index + 1}: ${reverseStr}`;
        answer.push(value);
    });
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));