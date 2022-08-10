const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index, array) => {
  array[index] = item.split(' ').map(Number);
});

function solution(arr) {
  const [[n, target], score] = arr;
  // 오름차순 정렬
  score.sort((a,b) => b-a);
  // 정답 정제
  return score[target - 1];
}

console.log(solution(input));