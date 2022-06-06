const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    if(i === 0) inputArray.push(input[i].split(' ').map(Number));
    else inputArray.push(input[i].split(''));
}

/*
dy = [1, 0, -1 ,0] dx = [0, 1, 0, -1]로 실행하면 시간초과 배열의 자료구조 때문에 좌우탐색 보다 상하탐색이 더욱더 시간이 빠름
자료구조 공부하기
*/

function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    // 중복 체크를 위한 자료구조 Set 생성
    let distinct = new Set(); 
    // 구조분해할당으로 2차원 배열의 좌표와 좌표의 아이템 요소들을 초기화
    const [ [n, m], ...boardItem] = arr;
    // 4방 탐색 좌표 초기화
    const dy = [0, 0, -1 ,1];
    const dx = [-1, 1, 0, 0];
    // 보드 생성
    const board = [];
    // board에 요소 push
    for(let item of boardItem) board.push(item);
    // 좌표평면에서 (0,0)에서 시작함으로 초기화를 위해 첫 번째 요소 추가
    distinct.add(board[0][0]);
    // 깊이 우선 탐색 실행
    function DFS(y, x, count) {
        // 최대값을 구하기 위해 비교
        answer = Math.max(answer, count);
        // 좌표평면 4방 탐색 시작
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 백트래킹 예외처리
            if(ny >= 0 && ny < n && nx >= 0 && nx < m && (!distinct.has(board[ny][nx]))) {
                // 좌표에 요소를 추가하기
                distinct.add(board[ny][nx]);
                // 요소를 더해줌
                DFS(ny, nx, count + 1);
                // 중복된 요소면 되돌아가면서 요소 삭제
                distinct.delete(board[ny][nx]);
            }
        }
    }
    DFS(0, 0, 1);
    return answer;
}

console.log(solution(inputArray));