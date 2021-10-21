const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

function solution(n) {
    // n을 문자열로 바꾸고 자리수마다 나눠준다.
    let newNum = [...n.toString()];
    let compare = 0;
    let answer = 0;

    // 0 예외처리
    if(Number(n) === 0) {
        answer += 1;
    }

    // compare이랑 n이랑 같아지면 정지
    while(compare !== Number(n)) {
        // newNum의 자리수가 한자리 숫자일 경우
        if(newNum.length === 1) {
            // 각자리수 더하기
            compare = Number(newNum[0] + newNum[0]);
            newNum = newNum[0] + newNum[0];
            answer++;
            // newNum의 자리수가 두자리 숫자일 경우
        } else {
            let add = [];
            // 자리수의 합을 먼저 구하기
            add.push(Number(newNum[0]) + Number(newNum[1]));
            add = [...add.toString()];
            // 자리수의 합이 한자리 숫자일 경우
            if(add.length === 1) {
                compare = Number(newNum[1] + add[0]);
                newNum = newNum[1] + add[0];
                answer++;
                // 자리수의 합이 두자리 숫자일 경우
            } else if(add.length === 2) {
                compare = Number(newNum[1] + add[1]);
                newNum = newNum[1] + add[1];
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(input)); 