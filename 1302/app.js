const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    let answer = [];
    let max = 0;
    // Map함수 사용
    const bH = new Map();
    for(let x of arr) {
        // Map안에 키가없으면 1로 초기화 있으면 값 + 1
        if(bH.has(x)) bH.set(x, bH.get(x) + 1);
        else bH.set(x, 1);
    }
    // 최대값 찾기
    bH.forEach((item, index) => {
        if(max <= item) {
            max = item;
        }
    });
    // 중복체크
    bH.forEach((item, index) => {
        if(item === max) answer.push(index);
    });
    // 오름차순 정렬
    answer.sort();
    return answer[0];
}

console.log(solution(inputArray));