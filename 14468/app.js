const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let answer = 0;
  // 완전 탐색 시작
  for(let i = 0; i < str.length - 1; i++) {
    const target = str[i];
    const check = new Set();
    for(let j = i + 1; j < str.length; j++) {
      // 해당 요소가 탐색하는 요소와 같으면 실행
      if (str[j] === target) {
        // 현재 check에 있는 요소만큼 순회시작
        check.forEach((item) => {
          // check에 있는 요소가 해당 소의 뒤에 있으면 answer + 1
          for(let k = j + 1; k < str.length; k++) {
            if (str[k] === item) answer += 1;
          }
        });
        // 자료구조 set에 요소 대입
      } else check.add(str[j])
    }
  }
  return answer;
}

console.log(solution(input));