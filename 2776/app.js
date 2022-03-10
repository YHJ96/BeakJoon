const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
input.shift();
let cnt = [];
for(let i = 0; i < input.length; i++) {
    if(i % 2 === 1) {
        const inputValue = input[i].split(" ").map((item) => +item);
        cnt.push(inputValue);
    }
    if(cnt.length === 2) {
        inputArray.push(cnt);
        cnt = [];
    }
}
// 테스트 케이스가 N개임

// 두개의 배열중 첫번 째의 요소인 배열에 포함되어 있는지 확인하는 함수
function serachNum(arr) {
    let answer = [];
    // 구조분해할당으로 arr 배열을 나누기
    const [one, two] = arr;
    // set 함수로 중복제거
    const ck = new Set();
    // one의 모든 요소를 ck에 등록
    one.forEach((item) => ck.add(item));
    // ck에 요소가 없으면 0을 push하고 있으면 1을 push
    two.forEach((item) => {
        if(ck.has(item)) answer.push(1);
        else answer.push(0);
    });
    // 요소 정제
    return answer.join("\n");
}

function solution(arr) {
    const answer = [];
    // arr의 요소만큼 요소에 대하여 실행
    for(let x of arr) {
        const item = serachNum(x);
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));