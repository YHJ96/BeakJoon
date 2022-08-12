const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map(Number);

function solution(drink) {
  // 음료수를 오름차순 정렬
  drink.sort((a,b) => a-b);
  // 제일 용량이 큰 음료수를 변수에 담아준다.
  const item = drink.pop();
  // reduce를 사용하여 음료수의 총 용량 구하기
  const answer = drink.reduce((acc, curr) => acc + (curr / 2), item);
  return answer;
}

console.log(solution(input));