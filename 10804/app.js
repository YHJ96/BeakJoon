const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => item.split(' ').map(Number));

function solution(arr) {
    let answer = [];
    // 배열을 1 ~ 20으로 초기화
    for(let i = 1; i <= 20; i++) answer.push(i);
    // arr의 요소만큼 순회시작
    for(let range of arr) {
        // 구조 분해 할당으로 구간을 설정
        const [ start, end ] = range;
        // 배열을 3개로 나눠서 mid만 뒤집어서 초기화
        const front = answer.slice(0, start - 1);
        const mid = answer.slice(start - 1, end).reverse();
        const tail = answer.slice(end, answer.length);
        // 배열을 합쳐주는 연산 수행
        answer = [...front, ...mid, ...tail];
    }
    // 정답 정제
    return answer.join(' ');
}

console.log(solution(input));