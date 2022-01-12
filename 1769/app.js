const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

// 마지막 숫자와 숫자를 만들기위해 재귀가 실행된 횟수를 반환하는 함수
function add(num, count) {
    // 숫자를 문자형태로 반환
    num = String(num);
    // 숫자의 자리의 총합을 계산
    let sum = 0;
    // num의 자리가 일의자리이면 재귀 종료
    if(num.length === 1) return { count, num };
    // 각 자리의 숫자를 더해줌
    for(let item of num) {
        sum += +item;
    }
    // 재귀실행
    return add(sum, count + 1);
}

function solution(n) {
    // 재귀 실행결과를 구조분해할당으로 배정
    let { count, num } = add(n, 0);
    // 3으로 나누어지면 n도 3의 배수
    if(+num % 3 === 0) return count + '\n' + 'YES';
    // 3으로 나누어지지 않으면 n은 3의 배수가 아님
    else return count + '\n' + 'NO';
}

console.log(solution(input));