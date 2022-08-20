const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

function solution(arr) {
    let answer = [];
    // arr의 요소가 없을 때 까지 반복문 수행
    while (arr.length) {
        let count = 0;
        // arr의 첫 번째 요소를 배열로 치환
        const item = [...arr.shift()];
        const stack = [];
        // 문자열의 요소만큼 순회 시작
        for (let char of item) {
            // char가 "}"이고 stack의 요소가 없으면 뒤집어서 push
            if (char === "}") {
                if (stack.length === 0) {
                    count += 1;
                    stack.push('{');
                } else {
                    // 짝이 맞으면 pop
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }
        count += stack.length / 2;
        answer.push(count);
    }
    // map을 이용해서 정답 정제
    answer = answer.map((item, index) => {
        return `${index + 1}. ${item}`;
    });
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(input));