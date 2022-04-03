const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [ screen, width ] = input[0].split(" ").map((item) => +item);
const inputArray = [];
for(let i = 2; i < input.length; i++) {
    inputArray.push(+input[i]);
}

function solution(width, apple) {
    let answer = 0;
    let left = 1;
    // 배열의 요소만큼 탐색 시작
    for(let item of apple) {
        // 사과의 위치가 left보다 작다면
        if(item < left) {
            // answer에 바구니가 있는 위치와 item의 거리를 뺴주고 더한다.
            answer += left - item;
            // 바구니 위치를 item으로 전환
            left = item;
        // 사과의 위치가 width를 더한 값 보다 크다면 (-1은 이동위치는 3칸이면 실제 2번을 이동하기 때문에 예외처리)
        } else if(item > left + width - 1) {
            // 사과의 위치에서 바구니의 크기와 바구니의 위치를 구해준다.
            answer += item - (left + width - 1);
            // 바구니 위치를 전환 -1 을 계산식에서 해줌으로 + 1
            left = item - width + 1;
        }
    }
    return answer;
}

console.log(solution(width, inputArray));