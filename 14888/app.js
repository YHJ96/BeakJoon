const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];

for (let item of input) inputArray.push(item.split(" ").map(Number));

function solution(arr) {
  const [[n], num, items] = arr;
  const result = [];
  const cases = [];
  const oprations = [];
  // 기호의 개수만큼 순회 시작
  for (let i = 0; i < 4; i++) {
    // 기호의 개수 만큼 push 반복
    for (let j = 0; j < items[i]; j++) {
      if (i === 0) oprations.push("+");
      if (i === 1) oprations.push("-");
      if (i === 2) oprations.push("*");
      if (i === 3) oprations.push("/");
    }
  }
  const temp = [];
  const visited = Array.from({ length: oprations.length }, () => 0);
  // 백 트래킹 함수 생성 완료
  function dfs(l) {
    // 예외 처리
    if (l === oprations.length) return cases.push(temp.slice());
    for (let i = 0; i < oprations.length; i++) {
      if (visited[i] === 1) continue;
      // 방문 처리
      visited[i] = 1;
      // 요소 등록
      temp[l] = oprations[i];
      // depth 진행
      dfs(l + 1);
      // 방문 해제
      visited[i] = 0;
    }
  }
  // 백 트래킹 시작
  dfs(0);
  // 완전 탐색 시작
  for (let i = 0; i < cases.length; i++) {
    const items = [...num].reverse();
    for (let j = 0; j < cases[i].length; j++) {
      const num1 = items.pop();
      const num2 = items.pop();
      // 연산의 기호에 따라 계산 정제
      if (cases[i][j] === "+") items.push(num1 + num2);
      if (cases[i][j] === "-") items.push(num1 - num2);
      if (cases[i][j] === "*") items.push(num1 * num2);
      if (cases[i][j] === "/") items.push(parseInt(num1 / num2));
      // 마지막 연산 push
      if (j === cases[i].length - 1) result.push(items.pop());
    }
  }
  // 정답 정제
  const max = Math.max(...result);
  const min = Math.min(...result);
  return [max, min].join("\n");
}

console.log(solution(inputArray));
