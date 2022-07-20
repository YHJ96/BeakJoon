const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map(Number);

function solution(arr) {
    // 구조 분해 할당으로 변수 초기화
    const [start, target] = arr;
    // queue 초기화
    const queue = [ [start, 1] ];
    // queue에 요소가 없을 때 까지 실헹
    while(queue.length) {
        const [current, detph] = queue.shift();
        // current가 target이랑 같다면 return detph
        if (current === target) return detph;
        // target보다 크면 실행을 안하도록 예외처리 (detpeh + 1)
        if (current * 2 <= target) queue.push([current * 2, detph + 1]);
        if (current * 10 + 1 <= target) queue.push([current*10+1, detph + 1]);
    }
    // 요소가 없을 경우
    return -1;
}

console.log(solution(input));