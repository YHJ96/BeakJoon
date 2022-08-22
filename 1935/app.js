const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
for (let idx in input) {
  if (idx === "1") input[idx] = input[idx].trim();
  else input[idx] = Number(input[idx].trim());
}

function solution(arr) {
  const [n, target, ...num] = arr;
  const alphabet = {};
  const stack = [];
  let idx = 0;
  for (let char of target) {
    const asc = char.charCodeAt();
    // 아스키코드가 알파벳 대문자인지 확인
    if (asc >= 65 && asc <= 91) {
      stack.push(char);
      if (!alphabet[char]) alphabet[char] = num[idx++];
    } else {
      // 후위 연산을 위한 숫자를 정제
      const items = [stack.pop(), stack.pop()];
      // 만약 알파벳이면 숫자로 치환
      if (alphabet[items[0]]) items[0] = alphabet[items[0]];
      if (alphabet[items[1]]) items[1] = alphabet[items[1]];
      // 연산자에 따라 결과를 stack에 반영
      if (char === '+') stack.push(parseFloat((items[1] + items[0]).toFixed(2)));
      if (char === '-') stack.push(parseFloat((items[1] - items[0]).toFixed(2)));
      if (char === '*') stack.push(parseFloat((items[1] * items[0]).toFixed(2)));
      if (char === '/') stack.push(parseFloat((items[1] / items[0]).toFixed(2)));
    }
  }
  // 정답 정제
  return stack[0].toFixed(2);
}

console.log(solution(input));