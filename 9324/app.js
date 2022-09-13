const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input[0] = +input[0];

// 미해결
function codeParser(code) {
  let result = "OK";
  const key = [3];
  const hash = new Map();
  while (true) {
    const item = key[key.length - 1] + 4;
    if (key[key.length - 1] > 100000) break;
    key.push(item);
  }

  for (let char of code) {
    if (hash.has(char)) hash.set(char, hash.get(char) + 1);
    else hash.set(char, 1);
  }

  hash.forEach((item) => {
    if (key.includes(item)) {
      result = "FAKE";
      return;
    }
  });
  console.log(key);
  return result;
}

function solution(arr) {
  let answer = [];
  const [n, ...codes] = arr;
  for (let i = 0; i < codes.length; i++) {
    const item = codeParser(codes[i]);
    answer.push(item);
  }
  return answer.join("\n");
}

console.log(solution(input));
