const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n');

// 하노의 이동순서 재귀호출
function hanoi(a, b, n, arr) {
    // 탈출 조건
    if(n == 1) {
        arr.push([a, b]);
        return;
    }
    // n-1개의 원판을 기둥 a에서 기둥 6-a-b로 옮김 6인이유는 1,2,3타일의 합
    hanoi(a, 6-a-b, n -1, arr);
    // n번 원판을 기둥 a에서 기둥 b으로 옮긴걸 출력
    arr.push([a, b]);
    // n-1개의 원판을 기둥  6-a-b에서 기둥 b로 옮김
    hanoi(6-a-b, b, n-1, arr);
}

function solution(n) {
    let answer = [];
    let result = [];
    // 재귀실행
    hanoi(1, 3, n, result);
    answer.push(result.length);
    // 정답 정제
    for(let item of result) {
        answer.push(item.join(' '));
    }
    return answer.join('\n');
}

console.log(solution(input));