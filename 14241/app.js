const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[1].split(' ').map((item) => +item);

function solution(num) {
    let answer = 0;
    // 내림차순 정렬 시작
    num.sort((a,b) => b-a);
    while(true) {
        // 배열에서 한개의 숫자를 추출
        const num1 = num.pop();
        // 배열에서 한개의 숫자를 추출
        const num2 = num.pop();
        // 점수 계산을 위한 값
        const sum = num1 * num2;
        // num에 인자가 남아있지 않는다면 점수계산하고 정지
        if(num.length === 0) {
            answer += sum;
            break;
        // num에 인자나 남아있다면 점수를 계산하고 다시 배열의 뒤에 넣어주기
        } else {
            const add = num1 + num2;
            answer += sum;
            num.push(add);
        }
    }
    return answer;
}

console.log(solution(input));