const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(n) {
    let answer = 0;
    // '4'와 '7'만 포함되어야 한다.
    const target = ['4','7'];
    while(n !== 0) {
        // n의 값을 스프레드 연산자를 사용하기 위해 문자열로 바꾼뒤 배열에 담는다.
        const numArr = [...n.toString()];
        // 모든 숫자가 target에 포함된 내용인지 확인한다.
        const check = numArr.every((item) => target.includes(item));
        if(check) {
            answer = n;
            break;
        } else n--;
    }
    return answer;
}

console.log(solution(input));