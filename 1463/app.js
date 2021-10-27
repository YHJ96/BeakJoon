const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(num) {
    // DP사용 index 0,1 지정
    let arr = [0, 0];
    for(let i = 2; i < num + 1; i++) {
        // 탐색시작 기본값으로 인자에 1를 더함
        arr[i] = arr[i - 1] + 1;
        // 2로 나눠지면 i / 2 로 나눠주고 1을 더하고 최솟값인지 판별
        if(i % 2 === 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
        // 3로 나눠지면 i / 2 로 나눠주고 1을 더하고 최솟값인지 판별
        if(i % 3 === 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }
    return arr[num];
}

console.log(solution(+input[0]));