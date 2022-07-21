const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];

for (let i = 0; i < input.length; i++) {
  const inputValue = input[i].split(' ').map(Number);
  inputArray.push(inputValue);
}

// 행이 빙고인지 체크하는 함수
function rowCheck(board) {
  let result = 0;
  for(let i = 0; i < board.length; i++) {
    let count = 0;
    for(let j = 0; j < board[0].length; j++) if (board[i][j] === 0) count += 1;
    if (count === 5) result += 1;
  }
  return result;
}

// 열이 빙고인지 체크하는 함수
function colCheck(board) {
  let result = 0;
  for(let i = 0; i < board[0].length; i++) {
    let count = 0;
    for(let j = 0; j < board.length; j++) if (board[j][i] === 0) count += 1;
    if (count === 5) result += 1;
  }  
  return result;
}

// 오른쪽에서 왼쪽으로 대각선 빙고 체크
function leftDiagonal(board) {
  let count = 0;
  for(let i = 0; i < 5; i++) {
    if (board[i][board.length - 1 - i] === 0) count += 1;
  }
  if (count === 5) return 1;
  return 0;
}

// 왼쪽에서 오른쪽으로 대각선 빙고 체크
function rightDiagonal(board) {
  let count = 0;
  for(let i = 0; i < 5; i++) {
    if (board[i][i] === 0) count += 1;
  }
  if (count === 5) return 1;
  return 0;
}

function solution(arr) {
  let answer = 0;
  // 구조분해 할당으로 변수 초기화
  const [one, two, three, four, five, ...number] = arr;
  const call = [];
  const board = [one, two, three, four, five];
  // number의 2차원 배열을 1차원 배열로 치환
  for(let target of number) call.push(...target);
  // 빙고를 부르는 요소만큼 순회 시작
  for(let n = 0; n < call.length; n++) {
    // 숫자 += 1
    answer += 1;
    // board 완전 탐색 시작
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        // 해당 숫자를 0으로 방문처리
        if (board[i][j] === call[n]) board[i][j] = 0;
        const sum = rowCheck(board) + colCheck(board) + leftDiagonal(board) + rightDiagonal(board);
        // 3 이상이면 빙고이므로 정답 출력
        if (sum >= 3) return answer;
      }
    }
  }
}

console.log(solution(inputArray));