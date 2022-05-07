const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

function solution(arr) {
    const [ red, brown ] = arr;
    let answer = [];
    // 전체의 좌표 개수를 구한다.
    const all = red + brown;
    // 약수들을 넣을 변수 초기화
    const divisor = [];
    // 전체 좌표의 개수부터 1 까지 반복문 실행 
    for(let i = all; i >= 1; i--) {
        // 만약 전체 개수의 i의 약수면 조건문 실행
        if(all % i === 0) {
            // i로 나눈 몫
            const num = all / i;
            // 몫이 i 보다 크거나 같으면 divisor에 push
            if(num <= i) divisor.push(i);
        };
    }
    // divesor의 요소들을 탐색
    for(let x of divisor) {
        // y 좌표를 초기화
        const y = all / x;
        // x 좌표 + y 좌표의 전체 외곽의 수를 더해주고 꼭지점 4개를 빼준다. ( 중복의 이유 )
        const count = (2 * y) + (2 * x) - 4;
        // count과 brown과 같으면 answer에 좌표 push
        if(count === red) answer.push(x, y);
    }
    return answer;
}

console.log(solution(input));