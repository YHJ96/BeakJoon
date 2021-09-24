const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(num) {
    let arr = [];
    // 인자별 제곱근 반환
    for(let x of num) {
        arr.push(x ** 2);
    }
    // 인자의 모든 수를 더해줌
    arr = arr.reduce((acc, curr) => acc + curr);
    // 모든수를 더해준 값과 10을 나눠준 나머지를 구함
    const answer = arr % 10;
    return answer;
}