const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index, array) => {
    array[index] = item.split(' ').map(Number);
});

function solution(arr) {
    let answer = 0;
    const [[n, k], [...plan]] = arr;
    const plans = [];
    const tmp = Array.from({ length: n }, () => 0);
    const visited = Array.from({ length: n }, () => false);
    // 깊이 우선 탐색 함수 생성
    function dfs(l) {
        // l이 n이면 tmp에 push
        if (l === n) plans.push(tmp.slice());
        else {
            // 백트래킹 순열 시작
            for (let i = 0; i < n; i++) {
                if (visited[i] !== false) continue;
                visited[i] = true;
                tmp[l] = plan[i];
                dfs(l + 1);
                visited[i] = false;
            }
        }
    }
    // 깊이 우선 탐색 시작
    dfs(0);
    for (let plan of plans) {
        let score = 500;
        // break가 걸렸는지 확인 하는 변수 선언
        let flag = true;
        for (let num of plan) {
            score += num - k;
            // 500 조건 확인
            if (score < 500) {
                flag = false;
                break;
            }
        }
        // break가 안걸렸다는 뜻으로 answer + 1
        if (flag) answer += 1;
    }
    return answer;
}

console.log(solution(input));