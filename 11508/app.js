// 모듈이 fs 모듈이 불가능

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const inputArray = [];
// for (let i = 1; i < input.length; i++) {
//     const item = +input[i].trim();
//     inputArray.push(item);
// }
// 
// function solution(num) {
//     num.sort((a, b) => b - a);
//     let answer = 0;
//     while (num.length) {
//         if (num.length >= 3) {
//             const item = num.splice(0, 3);
//             const min = Math.min(...item);
//             const sum = item.reduce((acc,curr) => acc + curr) - min;
//             answer += sum;
//         } else {
//             const item = num.splice(0);
//             const sum = item.reduce((acc,curr) => acc + curr);
//             answer += sum;
//         }
//     }
//     return answer;
// }
// 
// console.log(solution(inputArray));


// 직접 입력받는 readline만 가능

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    input.shift();
    input = input.map((item) => +item);
    solution(input);
    process.exit();
});

function solution(num) {
    // 오름차순 정렬
    num.sort((a, b) => b - a);
    let answer = 0;
    // 배열의 인자가 0인경우 반복문 정지
    while (num.length) {
        // 남아있는 인자가 3보다 큰 경우
        if (num.length >= 3) {
            // 3개를 삭제 하고 item 상수에 할당
            const item = num.splice(0, 3);
            // 최솟값 구하기
            const min = Math.min(...item);
            // 2+1이므로 제일 작은것을 빼줌
            const sum = item.reduce((acc,curr) => acc + curr) - min;
            // 정답폼에 더하기
            answer += sum;
        } else {
            // 인자가 3개보다 작으므로 전체 삭제
            const item = num.splice(0);
            // 전체를 더해주기
            const sum = item.reduce((acc,curr) => acc + curr);
            answer += sum;
        }
    }
    console.log(answer);
}