const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');

function solution(start, end) {
    let answer =  0;
    let numArr = [];
    let count = 0;
    // 1 ~ n 까지의 반복 수열 만들기
    while(true) {
        for(let i = 0; i < count; i++) {
            numArr.push(count);
        }
        if(count === Math.ceil(end / 2)) break;
        count += 1;
    }
    // start 부터 end 까지의 합을 구하기
    for(let i = start; i <= end; i++) {
        // 1부터 시작함으로 인덱스 0번이 첫번째 그러므로 - 1
        answer += numArr[i - 1];
    }
    return answer;
}

console.log(solution(+input[0], +input[1]));