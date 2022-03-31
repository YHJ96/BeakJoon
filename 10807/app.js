const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const inputArray = [input[1].split(" ").map((item) => +item), +input[2]];

function solution(arr) {
    let answer = 0;
    // 구조분해할당을 이용해서 배열과 타켓넘버로 나눔
    const [number, target] = arr;
    // 배열의 요소를 순회시작
    for(let item of number) {
        // 배열의 요소가 target과 값이 같으면 answer 1증가
        if(item === target) answer += 1;
    }
    return answer;
}

console.log(solution(inputArray));