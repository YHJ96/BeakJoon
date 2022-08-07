const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  const plates = [...str];
  let answer = 0;
  while(plates.length) {
    // 그릇의 첫 번째 요소를 배열에서 빼준다.
    const plate = plates.shift();
    // 그릇의 첫 번째 요소와 두 번째 요소를 비교해서 같으면 포개진 그릇이므로 + 5
    if (plate === plates[0]) answer += 5;
    // 포개지지 않으면 + 10
    else answer += 10;
  }
  return answer;
}

console.log(solution(input));