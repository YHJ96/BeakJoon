const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(n) {
    const arr = [];
    const choice = [];
    // 1~n까지의 카드를 정렬한다.
    for(let i = 1; i <= n; i++) arr.push(i);
    while(arr.length !== 1) {
        // 버릴 카드 지정
        const item1 = arr.shift();
        // 카드를 뽑고 다시 순서뒤로 보낼 카드 지정
        const item2 = arr.shift();
        choice.push(item1);
        arr.push(item2);
    }
    // 정답 정제
    const answer = `${choice.join(' ')} ${arr[0]}`;
    return answer;
}

console.log(solution(input));