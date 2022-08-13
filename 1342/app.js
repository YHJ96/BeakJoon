const fs = require("fs");
const filePath = process.platform === 'linux' ?'/dev/stdin' : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let answer = 0;
  let result = new Set();
  let ch = Array.from({length : str.length}, () => 0);
  let tmp = Array.from({length : str.length}, () => 0);
  // 깊이 우선 탐색 함수 생성
  function dfs(l) {
    if(l === str.length) result.add(tmp.slice().join(''));
    else {
      for(let i = 0; i < str.length; i++) {
        // 방문안한 요소 방문
        if(ch[i] === 0) {
          // 방문 처리
          ch[i] = 1;
          // tmp에 넣기
          tmp[l] = str[i];
          // 다음 요소 방문
          dfs(l+1);
          // 백트래킹하면서 방문 해제
          ch[i] = 0;
        }
      }
    }
  }
  // 백트래킹 시작
  dfs(0);
  // 순열의 결과의 요소만큼 순회시작
  for(let item of result) {
    let flag = true;
    // 단어의 요소만큼 순회 시작
    for(let i = 0; i < item.length - 1; i++) {
      // 옆의 단어가 같으면 정지
      if (item[i] === item[i + 1]) {
        flag = false;
        break;
      }
    }
    // 단어가 모두 다르면 answer + 1
    if (flag) answer += 1;
  }
  return answer;
}

console.log(solution(input));