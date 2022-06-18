const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputArray = [];
for (let i = 0; i < input.length; i++) {
  if (i === 0) inputArray.push(input[i].split(" ").map(Number));
  else inputArray.push(input[i].trim());
}

function solution(arr) {
  const [[n, m], ...students] = arr;
  // 자료구조 Map 초기화
  const studentHash = new Map();
  // 정렬을 위한 변수 초기화
  let idx = 0;
  // students의 요소만큼 순회시작
  for (let student of students) {
    // 요소가 Map에 존재할 경우 idx 재할당
    if (studentHash.has(student)) studentHash.set(student, idx++);
    // 요소가 없을 경우 Map에 등록
    else studentHash.set(student, idx++);
  }
  // Map은 이터레이터이므로 Array로 변환
  let answer = Array.from(studentHash.entries());
  // idx 기준으로 오름차순 정렬
  answer.sort((a, b) => a[1] - b[1]);
  // 배열 n이후 삭제
  answer.splice(n, answer.length);
  // 배열의 요소안의 학번만 추출
  answer = answer.map((item) => item[0]);
  // 정답 정제
  return answer.join("\n");
}

console.log(solution(inputArray));
