const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i += 3) {
  const n = +input[i];
  const s1 = input[i+1].trim();
  const s2 = input[i+2].trim();
  inputArray.push([n, s1, s2]);
}

// 오셀로 재배치 회수를 구하는 함수 생성
function countOthello(arr) {
  let [n, s1, s2] = arr;
  let count = 0;
  // 자료구조 Map 선언
  const compare = new Map([['W', 0], ['B', 0]]);
  // 문자열의 요소만큼 반복 시작
  for(let i = 0; i < s1.length; i++) {
    // 문자가 같으면 continue
    if (s1[i] === s2[i]) continue;
    // 문자의 개수에 따라 Map 요소 증가
    if (s1[i] === 'W') compare.set('W', compare.get('W') + 1);
    if (s1[i] === 'B') compare.set('B', compare.get('B') + 1);
  }
  // 짝이 맞지 않은 수는 뒤집기
  count += Math.abs(compare.get('W') - compare.get('B'));
  // 짝이 맞는 수를 더하기
  count += Math.min(compare.get('W'), compare.get('B'));
  return count;
}

function solution(arr) {
  const answer = [];
  // arr의 요소만큼 순회시작
  for(let x of arr) {
    const item = countOthello(x);
    // item을 answer push
    answer.push(item);
  }
  // 정답 정제
  return answer.join('\n');
}

console.log(solution(inputArray));