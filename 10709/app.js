const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

function solution(arr) {
    const answer = Array.from({ length : arr.length }, () => Array.from({ length: arr[0].length }, () => 0));
    const board = [];
    // board에 요소 입력
    for(let item of arr) board.push(item);
    // 완전 탐색을 하면서 구름과 구름이 아닌 부분을 나눠줌
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === '.') answer[i][j] = -1;
            if(board[i][j] === 'c') answer[i][j] = 0;
        }
    }
    // 완전 탐색 시작
    for(let i = 0; i < board.length; i++) {
        // 카운트 변수 초기화
        let count = -1;
        for(let j = 0; j < board[i].length; j++) {
            // 구름을 만나면 0으로 count초기화
            if(answer[i][j] === 0) count = 0;
            // 첫 구름을 만났다면 칸 마다 +1
            if(count !== -1) {
                answer[i][j] = count;
                count++;
            }
        }
    }
    // 정답 정제
    return answer.map((item) => item.join(" ")).join("\n");
}

console.table(solution(input));