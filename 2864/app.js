const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ');

function solution(input) {
    let answer = [];
    // 최대와 최소의 합의 숫자를 구하기 위해 반복문 2번실행
    for(let i = 0; i < 2; i++) {
        // 문자열 요소만큼 배열로 만들고 정수로 형변환
        let a = input[0].split('').map((item) => +item);
        let b = input[1].split('').map((item) => +item);
        // 최소값을 구하기위해 처음 실행 하였을때 조건문
        if(i === 0) {
            // 2개의 배열을 돌면서 6의 자리를 5로 바꿔줌
            for(let j = 0; j < a.length; j++) {
                if(a[j] === 6) a[j] = 5; 
            }
            for(let k = 0; k < b.length; k++) {
                if(b[k] === 6) b[k] = 5;
            }
            // join을 쓰게되면 문자열이므로 형변환
            const num1 = +a.join('');
            const num2 = +b.join('');
            answer.push(num1 + num2);
            // 최대값을 구하기위한 반복문
        } else {
            // 2개의 배열을 돌면서 5의 자리를 6으로 바꿔줌
            for(let j = 0; j < a.length; j++) {
                if(a[j] === 5) a[j] = 6; 
            }
            for(let k = 0; k < b.length; k++) {
                if(b[k] === 5) b[k] = 6;
            }
            const num1 = +a.join('');
            const num2 = +b.join('');
            answer.push(num1 + num2);
        }
    }
    // 정답 정제
    return answer.join(' ');
}

console.log(solution(input));