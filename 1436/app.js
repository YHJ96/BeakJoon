const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

console.log(solution(input));

function solution(num) {
    // 666번 이 처음이므로 초기화를 665
    let count  = 665;
    
    // num === 0 이면 멈춤
    while(num !== 0) {
        // 숫자를 1씩 증가
        count += 1;
        // count를 문자열로 바꾸고 includes메소드 이용 666 찾으묜 num - 1 빼주기
        if(count.toString().includes('666')) {
            num -= 1;
        }
    }
    return count;
}

// 1. 처음에는 접근을 단순하게 666 1666 2666 ... 6666 이런식으로 했음.
// 2. 666 1666 ... 5666 6661 이런식으로 증가함.