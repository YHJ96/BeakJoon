const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index, array) => array[index] = item.trim());
input[0] = input[0].split(' ').map(Number);
input[input.length - 1] = +input[input.length - 1];

// Swap 함수 생성
function swapArray(arr) {
  const position = [];
  // 요소를 순회 시작
  for(let i = 0; i < arr.length - 1; i++) {
    // 두 요소를 비교해서 R과 L일 경우에만 position에 push
    if (arr[i][1] === 'R' && arr[i + 1][1] === 'L') {
      position.push([i, i + 1]);
    }
  }
  // position만큼 Swap
  for(let i = 0; i < position.length; i++) {
    const [a, b] = position[i];
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
}

function solution(arr) {
  const answer = [];
  // 구조 분해 할당으로 변수 초기화
  const [[n, m], a, b, count] = arr;
  const ant = [];
  // 요소에 방향을 추가하여 ant에 push
  for(let char of [...a].reverse()) ant.push([char, 'R']);
  for(let char of [...b]) ant.push([char, "L"]);
  // count 만큼 자리 바꾸기 실행
  for(let i = 0; i < count; i++) swapArray(ant);
  // 개미의 이름만 추출
  for(let item of ant) answer.push(item[0]);
  // 정답 정제
  return answer.join('');
}

console.log(solution(input));