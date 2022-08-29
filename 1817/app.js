const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.forEach((item, index, array) => {
  array[index] = item.split(" ").map(Number);
});

function solution(arr) {
  // 예외 처리
  if (arr[0][0] === 0) return 0;
  let [[n, weight], [...num]] = arr;
  let answer = 0;
  let box = weight;
  // num의 요소가 없을 때 까지 반복 수행
  while (num.length) {
    // 제일 위 요소를 선택
    const item = num.pop();
    box -= item;
    // box의 무게를 초과하면
    if (box < 0) {
      // item push
      num.push(item);
      // 박스 초기화
      box = weight;
      answer += 1;
    }
  }
  // 박스의 무게가 원본의 무게랑 다르다면 + 1
  if (box !== weight) answer += 1;
  return answer;
}

console.log(solution(input));
