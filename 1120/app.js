const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0].split(' ');

function solution(input) {
    const [a, b] = input;
    // 제일큰 상수로 초기화
    let answer = Number.MAX_SAFE_INTEGER;
    // 길이 차이별로 비교시작 반복분을 1번이라도 실행시키기 위해서 + 1
    for(let i = 0; i < b.length - a.length + 1; i++) {
        let num = 0;
        // 단어가 일치하는지 검색 시작
        for(let j = 0; j < a.length; j++) {
            // b의 단어가 a와 같지 않다면 +1
            if(b[i+j] !== a[j]) num += 1;
        }
        // 최솟값으로 바꿔줌
        answer = Math.min(answer, num);
    }
    return answer;
}

console.log(solution(input));