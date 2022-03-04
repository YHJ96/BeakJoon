const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].trim();
    if(i === 0) inputArray.push(inputValue.split(" ").map((item) => +item));
    else if(i === 1) continue;
    else inputArray.push(+inputValue);
}

function solution(arr) {
    // 구조분해할당을 이용해서 arr의 요소들을 나누기
    const [ [curr, target], ...num] = arr;
    let answer = [];
    // 해당채널과 목표채널의 절대값을 구해서 answer에 push
    answer.push(Math.abs(curr - target));
    // 즐겨찾기의 채널들의 요소를 순회
    for(let x of num) {
        // 즐겨찾기 채널과 목표 채널의 절대값을 구해서 변수에 넣기 
        const abs = Math.abs(target - x);
        // 절대값에서 + 1 한 값을 넣기 버튼을 한번 누르는과정 때문에 + 1
        answer.push(abs + 1);
    }
    // 정답 정제 (최솟값 구하기)
    return Math.min(...answer);
}

console.log(solution(inputArray));