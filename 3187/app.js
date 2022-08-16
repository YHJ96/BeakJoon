const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
  const inputValue = input[i].trim().split('');
  inputArray.push(inputValue);
}

function solution(board) {
  let answer = [0, 0];
  const n = board.length;
  const m = board[0].length;
  // 4방 탐색 좌표 초기화
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  // 깊이 우선 탐색 함수 생성
  function dfs(y, x, count) {
    // 해당 양과 늑대 찾기
    if (board[y][x] === 'k') count[0]++;
    if (board[y][x] === 'v') count[1]++;
    // 방문 처리
    board[y][x] = '#';
    // 4방 탐색 시작
    for(let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      // 예외 처리
      if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] === '#') continue;
      dfs(ny, nx, count);
    }
    return count;
  }
  // 완전 탐색 시작
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      // 카운트 배열 초기화
      const count = [0, 0];
      if (board[i][j] === 'v' || board[i][j] === 'k') {
        dfs(i, j, count);
        const [sheep, wolf] = count;
        // 양이 늑대 보다 많으면 + sheep 아니면 + wolf
        if (sheep > wolf) answer[0] += sheep;
        else answer[1] += wolf;
      }
    }
  }
  // 정답 정제
  return answer.join(' ');
}

console.log(solution(inputArray));