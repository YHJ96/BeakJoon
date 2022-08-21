const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = Number(input[0]);
input[1] = input[1].split(' ').map(Number);

function solution(arr) {
  let answer = 'y';
  let [n, codes, word] = arr;
  // 객체 초기화
  const count = {}
  const compare = {};
  // codes의 요소만큼 순회시작
  for(const code of codes) {
    let char = '';
    // 해당 코드에 따라서 char 정제
    if (code === 0) char = " ";
    else if (code <= 26) char = (String.fromCharCode(code + 64));
    else char = String.fromCharCode(code + 70);
    // 객체에 개수를 등록
    if (!compare[char]) compare[char] = 1;
    else compare[char] += 1;
  }
  // 원본 문자열의 요소만큼 순회기작
  for(const char of word) {
    // 객체에 개수를 등록
    if(!count[char]) count[char] = 1;
    else count[char] += 1;
  }

  for(const key in compare) {
    // 원본 문자열과 비교 문자열의 개수와 값이 없으면 'n' return
    if (compare[key] !== count[key]) return 'n';
  }
  return answer;
}

console.log(solution(input));