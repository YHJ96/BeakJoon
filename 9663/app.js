const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
  let answer = 0;
  // 좌표 확인을 위한 초기화 배열
  const col = [];
  const leftToRightDiagonal = [];
  const rightToLeftDiagonal = [];
  // 깊이 우선 탐색 함수 생성
  function dfs(y) {
    // n만큼 도착하면 정지
    if (y === n) answer++;
    // x 축 좌표 탐색 시작
    for (let x = 0; x < n; x++) {
      // 예외 처리
      if (col[x] || leftToRightDiagonal[y + x] || rightToLeftDiagonal[y - x + n - 1]) continue;
      // 방문 처리
      col[x] = 1;
      leftToRightDiagonal[y + x] = 1;
      // 좌표를 - 해주기 때문에 좌표가 0이 나오지 않기 위해서 n-1만큼을 더해준다. n-1인 이유는 인덱스가 0부터 시작하기 때문이다.
      rightToLeftDiagonal[y - x + n - 1] = 1;
      // 다음 y 좌표 방문 처리
      dfs(y + 1);
      // 방문 해제
      col[x] = 0;
      leftToRightDiagonal[y + x] = 0;
      rightToLeftDiagonal[y - x + n - 1] = 0;
    }
  }
  // y축 0부터 탐색시작
  dfs(0);
  return answer;
}

console.log(solution(input));