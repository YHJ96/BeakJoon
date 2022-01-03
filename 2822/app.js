const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((item) => +item);

function solution(arr) {
    let sum = 0;
    const findIndex = new Map();
    const index = [];
    // Map함수에 각자의 자리 인덱스를 저장
    arr.forEach((item, index) => {
        findIndex.set(item, index + 1);
    });
    // 내림차순 정렬
    arr.sort((a,b) => b-a);
    // 점수의 상위 5개의 더하고 인덱스를 기록
    for(let i = 0; i < 5; i++) {
        sum += arr[i];
        index.push(findIndex.get(arr[i]));
    }
    // 인덱스를 오름차순 정렬
    index.sort((a,b) => a-b);
    // 정답 정제
    const answer = sum + '\n' + index.join(' ');
    return answer;
}

console.log(solution(input));