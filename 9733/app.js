const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].split(' ');
    for(let j = 0; j < item.length; j++) {
        const value = item[j].trim();
        inputArray.push(value);
    }
}

function solution(arr) {
    let answer = '';
    const workMap = new Map();
    // 모든일의 가지수를 저장
    const total = arr.length;
    // 꿀벌의 일 순서 출력 형태
    const answerFrom = ['Re', 'Pt', 'Cc', 'Ea', 'Tb', 'Cm', 'Ex', 'Total'];
    // Map함수에 키가 있다면 + 1을 하고 없으면 1로 세팅
    for(let x of arr) {
        if(!workMap.has(x)) workMap.set(x, 1);
        else workMap.set(x, workMap.get(x) + 1);
    }
    // 2번째 자리수 반올림으로 백분율 구하기
    workMap.forEach((item, index) => {
        const divide = (item / total).toFixed(2);
        workMap.set(index, [item, divide]);
    });
    workMap.set('Total', [total, '1.00']);
    // 정답 정제
    for(let x of answerFrom) {
        if(!workMap.has(x)) answer += `${x} 0 0.00` + '\n';
        else answer += `${x} ${workMap.get(x).join(' ')}` + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));