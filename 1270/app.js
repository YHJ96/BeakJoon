const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

// JS는 입력값 문제로 해결 불가능

// 땅의 제일 큰 숫자를 확인하는 함수 생성
function checkMap(s) {
    let maxValue = 0;
    let maxIndex = 0;
    // 입력값 정제
    const land = s.split(' ').map((item) => +item);
    const landMax = new Map();
    // 인덱스 1번 부터 인자를 순회하면서 있으면 + 1 없으면 1 를 넣어줌
    for(let i = 1; i < land.length; i++) {
        if(landMax.has(land[i])) {
            landMax.set(land[i], landMax.get(land[i]) + 1);
        } else landMax.set(land[i], 1);
    }
    // 최빈값을 찾고 인덱스 반환
    landMax.forEach((item, index) => {
        if(item > maxValue) {
            maxValue = item;
            maxIndex = index;
        } 
    });
    // 과반수가 되는지 확인
    if(maxValue >= parseInt(land[0] / 2) + 1) return maxIndex;
    else return 'SYJKGW';
}

function solution(arr) {
    let answer = '';
    // 정답 출력
    for(let x of arr) {
        answer += checkMap(x) + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));