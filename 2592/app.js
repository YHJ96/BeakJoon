const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((item) => +item);

function solution(arr) {
    let answer = [];
    // 배열의 전체 숫자의 합을 구한다.
    const sum = arr.reduce((acc, curr) => acc + curr);
    // arr의 길이로 나눠줘서 평군을 구함
    const avg = sum / arr.length;
    const check = new Map();
    let max = Number.MIN_SAFE_INTEGER;
    let num = 0;
    for(let item of arr) {
        // Map함수에 해당 키가 없으면 추가하고 없으면 값에 +1를 함
        if(!check.has(item)) check.set(item, 1);
        else check.set(item, check.get(item) + 1);
    }
    // Map함수의 전체 요소를 순회
    check.forEach((item, index) => {
        // 만약 item값이 max보다 크면 실행
        if(item > max) {
            max = item;
            num = index;
        }
    });
    answer.push(avg, num);
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(input));