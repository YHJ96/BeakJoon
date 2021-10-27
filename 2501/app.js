const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input[0], input[1]));

function solution(num, n) {
    // 모든 약수를 answer에 넣기 위해 빈 배열 선언
    const answer = [];
    // 1부터 num까지 모든 약수를 구하기 위해 반복문 사용
    for(let i = 1; i <= num; i++) {
        // 나머지가 0이면 약수
        if(num % i === 0) {
            answer.push(i);
        }
    }
    // n번쨰를 출력해야 하는데 n - 1이랑 answer의 길이가 같으면 0 예외처리
    if(answer.length <= n - 1) return 0;
    // n번째 숫자 출력
    return answer[n - 1];
} 