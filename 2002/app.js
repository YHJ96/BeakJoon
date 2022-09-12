const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input[0] = +input[0];

function solution(arr) {
  let answer = 0;
  const [n, ...cars] = arr;
  // 2개의 변수를 출발과 끝점의 자동차로 초기화하고 reverse로 뒤집는다. (pop)으로 복잡도 내리기 위함
  const start = cars.slice(0, n).reverse();
  const end = cars.slice(n, cars.length).reverse();
  // end의 요소가 없을 떄 까지 반복 실행
  while (end.length) {
    const startItem = start.pop();
    const endItem = end.pop();
    // 두개의 요소가 다르며 end에 포함되어 있을 경우 조건식
    if (startItem !== endItem && end.includes(startItem)) {
      // answer + 1
      answer++;
      // start에 push
      start.push(startItem);
      continue;
    }
    // 드모르간 공식으로 조건식 정리 완료
    if (!(startItem === endItem || end.includes(startItem))) end.push(endItem);
  }
  return answer;
}

console.log(solution(input));
