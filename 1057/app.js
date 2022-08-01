const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(arr) {
  const [n, a1, a2] = arr;
  let answer = 0;
  let game = Array.from({ length: n }, () => 0);
  let result = [];
  game[a1 - 1] = 1;
  game[a2 - 1] = 1;
  // game의 길이가 1인 경우까지 반복문 실행
  while(game.length !== 1) {
    // 라운드 += 1
    answer += 1;
    // 홀수 체크 변수
    let flag = -1
    // 길이가 홀수라면 flag에 배열의 마지막 값을 대입
    if (game.length % 2 !== 0) flag = game.pop();
    // 게임의 요소의 반 만큼 순회시작
    for(let i = 0; i < game.length - 1; i += 2) {
      const left = game[i];
      const right = game[i + 1];
      // 두개가 모두 ture이면 return
      if (left && right) return answer;
      // 둘중에 한개라도 ture이면 해당 값 result에 push
      if (left) result.push(left);
      if (right) result.push(right);
      // result에 left push
      if (left === 0 && right === 0) result.push(left);
    }
    // flag의 값이 -1 아니라면 flag push
    if (flag !== -1) result.push(flag);
    // game에 result 대입
    game = result;
    // result 초기화
    result = [];
  }
}

console.log(solution(input));