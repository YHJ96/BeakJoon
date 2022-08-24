const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = input[0].split(" ").map(Number);
input.forEach((item, index, array) => {
  if (index === 0) return;
  array[index] = item.trim();
});

function solution(arr) {
  const [[n,m], ...items] = arr;
  let answer = 0;
  const board = [];
  // row 좌표와 col 좌표를 변수에 초기화
  const row = ['row', [0, 1], [0, -1]];
  const col = ['col', [1, 0], [-1, 0]];
  // board를 요소를 배열로 치환하여 board push
  for(const item of items) board.push([...item]);
  // 깊이 우선 탐색 함수 생성
  function dfs(y, x, type) {
    let flag = "";
    // type 확인
    if (type[0] === "row") flag = '-';
    if (type[0] === "col") flag = '|';
    // 방문 처리
    board[y][x] = "x";
    // 탐색 시작
    for(let i = 1; i < 3; i++) {
      const ny = y + type[i][0];
      const nx = x + type[i][1];
      // 예외 처리
      if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] !== flag) continue;
      // 다음 좌표 방문
      dfs(ny, nx, type);
    }
  }
  // 보드 완전 탐색 시작
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      // 해당 좌표가 -일 경우
      if (board[i][j] === "-") {
        answer += 1;
        dfs(i, j, row);
      }
      // 해당 좌표가 |일 경우
      if (board[i][j] === '|') {
        answer += 1;
        dfs(i, j, col);
      }
    }
  }
  return answer;
}

console.log(solution(input));