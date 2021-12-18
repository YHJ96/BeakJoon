const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(numbers) {
    let answer = "";
    numbers = [...numbers];
    numbers.forEach((item, index) => {
        // 8진법을 10진법으로 전환
        const dex = parseInt(item, 8);
        // 10진법을 2진법으로 전환
        let binary = dex.toString(2);
        // 예외처리
        while (index !== 0 && binary.length < 3) {
            binary = "0" + binary;
        }
        answer += binary;
    });
    return answer;
}

console.log(solution(input[0]));