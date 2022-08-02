const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => item.split(' ').map(Number));

function solution(arr) {
  let answer = [];
  const isCheck = {};
  const [[n], ...ranks] = arr;
  // 점수에 따라 정렬
  ranks.sort((a,b) => b[2] - a[2]);
  // ranks의 요소만큼 순회시작
  for(let i = 0; i < ranks.length; i++) {
    // answer의 요소가 3개면 정지
    if (answer.length === 3) break;
    const [country, student, score] = ranks[i];
    // 현재 나라의 정보가 IsCheck에 없으면 등록
    if (!isCheck[country]) isCheck[country] = 1;
    // 현재 나라의 정보가 IsCheck에 있으면 + 1
    else isCheck[country]++;
    // 현재 나라의 개수가 3이상이면 continue
    if (isCheck[country] >= 3) continue;
    answer.push([country, student].join(' '));
  }
  // 정답 정제
  return answer.join('\n');
}

console.log(solution(input));