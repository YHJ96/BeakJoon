const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(n) {
    // set함수로 중복제거
    const mySet = new Set(n);
    let result = [];
    // set의 인자를 result에 넣기
    for(let x of mySet) {
        result.push(x);
    }
    // 오름차순 정렬
    result.sort((a,b) => a-b);
    // 공백 넣어서 출력
    return result.join(' ');
}