const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
  const inputValue = input[i].trim().split(' ');
  inputArray.push(inputValue);
}

// 타이핑 함수 생성
function count(arr) {
  const [str, target] = arr;
  // target의 문자를 x로 치환하여 변수에 할당
  const newStr = str.split(target).join("x");
  // 타이핑 개수
  return newStr.length;
}

function solution(arr) {
  let answer = [];
  // arr의 요소만큼 순회 시작
  for(let i = 0; i < arr.length; i++) {
    const item = count(arr[i]);
  // answer에 item push
    answer.push(item);
  }
  // 정답 정제
  return answer.join('\n');
}

console.log(solution(inputArray));