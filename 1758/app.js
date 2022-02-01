const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = +input[i];
    inputArray.push(item);
}

function solution(arr) {
    let answer = 0;
    // 받을 팁을 큰 순서대로 내림차순 정렬
    arr.sort((a,b) => b-a);
    // arr의 요소와 배정받은 자리수 - 1 이므로 index를 빼준 요소를 반환하는 새로운 배열 생성
    arr = arr.map((item, index) => item - index);
    // arr 탐색시작
    for(let tip of arr) {
        // tip이 0보다 큰수만 answer에 더해줌
        if(tip > 0) answer += tip;
    }
    return answer;
}

console.log(solution(inputArray));