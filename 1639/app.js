const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let answer = 0;
  // 요소 순회 시작
  for (let i = 0; i < str.length; i++) {
    // 부분 문자열을 위한 초기화 변수
    let compare = str[i];
    for (let j = i + 1; j < str.length; j++) {
      // 문자열을 더함
      compare += str[j];
      // 문자열의 길이가 짝수가 아니면 continue
      if (compare.length % 2 !== 0) continue;
      // 문자열을 절반을 기준으로 나눈 뒤 양 방향의 값을 모두 더해줌
      const head = compare.slice(0, compare.length / 2).split('').map(Number).reduce((acc, curr) => acc + curr, 0);
      const tail = compare.slice(compare.length / 2, compare.length).split('').map(Number).reduce((acc, curr) => acc + curr, 0);
      // 값이 같다면 answer가 비교하면 큰 수 할당
      if (head === tail) answer = Math.max(answer, compare.length);
    }
  }
  return answer;
}

console.log(solution(input));