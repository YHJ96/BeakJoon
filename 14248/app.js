const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];

for (let item of input) {
  const inputValue = item.split(" ").map(Number);
  inputArray.push(inputValue);
}

function solution(arr) {
  const [[n], stone, [s]] = arr;
  let answer = 0;
  const visited = Array.from({ length: n + 1 }, () => 0);
  const queue = [s];
  visited[s] = 1;
  // 너비 우선 탐색 시작
  while (queue.length) {
    const current = queue.shift();
    // 돌의 범위를 지정하고 해당 방향으로 왼쪽으로 이동하며 예외처리
    if (
      1 <= current - stone[current - 1] &&
      !visited[current - stone[current - 1]]
    ) {
      // 방문 처리
      visited[current - stone[current - 1]] = 1;
      // 방문 진행
      queue.push(current - stone[current - 1]);
    }

    // 돌의 범위를 지정하고 해당 방향으로 오른쪽으로 이동하며 예외처리
    if (
      current + stone[current - 1] <= n &&
      !visited[current + stone[current - 1]]
    ) {
      // 방문 처리
      visited[current + stone[current - 1]] = 1;
      // 방문 진행
      queue.push(current + stone[current - 1]);
    }
  }
  for (let isCheck of visited) {
    if (isCheck === 1) answer += 1;
  }
  return answer;
}

console.log(solution(inputArray));
