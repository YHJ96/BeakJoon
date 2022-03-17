const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => item.trim());
const inputArray = [];
while(true) {
    const n = +input[0];
    if(n === 0) break;
    const ret = [];
    for(let i = 0; i <= n; i++) {
        ret.push(input.shift());
    }
    inputArray.push(ret);
}

// 사전순 정렬중에 제일 작은 문자열을 반환하는 함수
function serachWord(arr) {
    arr.shift();
    // arr를 map을 이용해서 요소들의 문자열을 모두 소문자로 바꿈
    const find = arr.map(item => {
        return item.toLowerCase();
    });
    find.sort();
    // 초기화
    const word = find[0];
    // arr의 모든 요소를 탐색중에 word와 같은 요소가 있으면 그 요소를 반환
    for(let x of arr) {
        const item = x.toLowerCase();
        if(item === word) return x; 
    }
}

function solution(arr) {
    let answer = [];
    for(let x of arr) {
        const item = serachWord(x);
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));;