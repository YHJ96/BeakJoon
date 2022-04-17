const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let item of input) {
    inputArray.push(item.trim());
}

function solution(arr) {
    let answer = 1;
    // 구조분해할당으로 문자열과 타켓문자열로 나눔
    const [s, target] = arr;
    // 숫자를 담는 배열 초기화
    const number = ['0','1','2','3','4','5','6','7','8','9'];
    // 숫자를 제외한 요소의 배열을 반환하고 문자열로 치환
    const filterString = [...s].filter((item) => !number.includes(item)).join('');
    // 문자열에 타켓 문자열이 존재하지 않으면 answer을 0으로 변경
    if(filterString.indexOf(target) === - 1) answer = 0;
    return answer; 
}

console.log(solution(inputArray));