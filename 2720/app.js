const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// 동전의 개수를 최소로 하게 만드는 함수 생성
function coinCount(target) {
    const result = [0, 0, 0, 0];
    // 동전의 가격을 초기화
    const coin = [25, 10, 5, 1];
    // 4개의 동전의 요소만큼 순회
    for(let i = 0; i < 4; i++) {
        // 가격과 동전을 나누고 정수화
        const count = parseInt(target / coin[i]);
        // result의 i번째 인덱스에 동전의 개수 할당
        result[i] = count;
        // 나머지값을 나눠줌
        target %= coin[i];
    }
    return result;
}

function solution(arr) {
    let answer = [];
    // 구조 분해 할당으로 배열 변수 초기화
    const [n, ...coins] = arr;
    // 해당 배열의 요소만큼 순회시작
    for(let coin of coins) {
        // 개수 할당
        const count = coinCount(coin);
        // answer에 push
        answer.push(count);
    }
    // 정답 정제
    return answer.map((item) => item.join(' ')).join('\n');
}

console.log(solution(input));