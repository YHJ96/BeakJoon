const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) inputArray.push(input[i].trim());

function solution(arr) {
  let answer = [];
  const people = {};
  // arr의 요소만큼 순회시작
  for(const item of arr) {
    // 요소가 있으면 += 1 없으면 1로 초기화
    if (!people[item]) people[item] = 1;
    else people[item] += 1;
  }
  // people의 요소만큼 순회시작
  for(let idx in people) {
    // 값이 홀수이면 answer에 push
    if (people[idx] % 2 !== 0) answer.push(idx); 
  }
  // 정답 정제
  return answer.join('\n');
}

console.log(solution(inputArray));