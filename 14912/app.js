const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

function solution(input) {
    const [n, target] = input;
    let answer = 0;
    const num = [];
    // 1 ~ n 까지의 숫자를 num에 push
    for(let i = 1; i <= n; i++) num.push(i);
    // num의 모든 요소를 순회시작
    num.forEach((item) => {
        // 비교할 숫자를 문자로 바꿔서 자리수만큼 쪼갠뒤 배열로 정제
        const compare = item.toString().split('');
        // compare의 요소들을 탐색 시작
        for(let i = 0; i < compare.length; i++) {
            // 현재 각각의 요소가 문자열이므로 숫자로 바꿔줌
            const value = +compare[i];
            // target과 value가 같다면 answer + 1
            if(value === target) answer += 1;
        }
    });
    return answer;
}

console.log(solution(input));