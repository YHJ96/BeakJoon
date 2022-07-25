const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
inputArray.push(input[0].split(' ').map(Number));
for(let i = 1; i < input.length; i++) {
  const inputValue = input[i].trim();
  inputArray.push(inputValue);
}

function solution(arr) {
  let hamming = '';
  let count = 0;
  const [[n,m], ...dna] = arr;
  // dna 완전 탐색시작 
  for(let i = 0; i < m; i++) {
    // 변수 초기화
    const item = {A: 0, T: 0, G: 0, C: 0};
    // DNA 값을 키로 갖는 값을 + 1
    for(let j = 0; j < n; j++) item[dna[j][i]]++;
    // 배열로 치환
    const conut = Object.entries(item);
    // 카운트가 크면 오름차순 정렬 만약 카운트가 같으면 사전순 정렬 시작
    conut.sort((a,b) => {
      if (a[1] === b[1]) return a[0].localeCompare(b[0]);
      return b[1] - a[1];
    });
    // DNA 추가
    hamming += conut[0][0];
  }
  // DNA의 총 개수만큼 순회하면서 각 DNA와 해밍 DNA를 비교하여 자리의 요소의 값이 다르면 + 1
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(hamming[j] !== dna[i][j]) count += 1;
    }
  }
  const answer = [hamming, count];
  // 정답 정제
  return answer.join('\n')
}

console.log(solution(inputArray));