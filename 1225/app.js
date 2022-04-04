const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(num) {
    let answer = 0;
    // 각 문자열로 들어온 숫자 2개를 구조분해할당으로 나눈다.
    const [a, b] = num;
    // a의 요소만큼 반복문 실행
    for(let itemA of a) {
        // b의 요소만큼 반복문 실행
        for(let itemB of b) {
            // itemA와 itemB의 곱을 구한다. (itemA와 itemB는 현재 문자형식이므로 숫자형으로 바꾼다.)
            const times = Number(itemA) * Number(itemB);
            answer += times;
        }
    }
    return answer;
}

console.log(solution(input));