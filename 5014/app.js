const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(arr) {
    // 구조분해할당으로 변수 초기화
    const [floor, start, target, up, down] = arr;
    // 배열을 -1로 초기화
    let answer = Array.from({ length : floor + 1 }, () => -1);
    const queue = [];
    // 초기값 설정
    answer[start] = 0;
    queue.push(start);
    // queue에 요소가 없을 때 까지 실행
    while(queue.length !== 0) {
        const cur = queue.shift();
        // 올라가고 내려가는 경우의 수 2개 진행
        for(let sum of [cur + up, cur - down]) {
            // 예외처리
            if(sum > floor || sum <= 0 || answer[sum] !== -1) continue;
            // depth를 설정하고 queue에 요소 push
            answer[sum] = answer[cur] + 1;
            queue.push(sum);
        }
    }
    // 예외 처리
    if(answer[target] === -1) return "use the stairs";
    // 정답 정제
    return answer[target];
}

console.log(solution(input));