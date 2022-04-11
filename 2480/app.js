const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((item) => +item);

function solution(dice) {
    let answer = 0;
    // Map 함수를 선언
    let check = new Map();
    // 주사위의 눈의 개수를 확인
    for(let num of dice) {
        if(check.has(num)) check.set(num, check.get(num) + 1);
        else check.set(num, 1);
    }
    check = [...check];
    // 정렬 시작
    check.sort((a,b) => {
        // 빈도 수가 많은 수대로 정렬
        if(a[1] !== b[1]) return b[1] - a[1];
        // 만약 빈도 수가 같다면 눈금의 크기가 큰걸로 정렬
        else return b[0] - a[0];
    });
    // 주사위 조건문 빈도수에 따라서 달라짐 (정답 정제)
    if(check[0][1] === 3) {
        answer += (10000 + (check[0][0] * 1000));
    } else if(check[0][1] === 2) {
        answer += (1000 + (check[0][0] * 100));
    } else answer += check[0][0] * 100;
    return answer;
}

console.log(solution(input));