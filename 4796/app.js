const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();
const inputArray = [];
for(let i = 0 ; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

// 휴가 계산 함수
function checkDate(arr) {
    let answer = 0;
    // P일중 L일을 사용가능하며 V가 휴가의 총일
    const [L,P,V] = arr;
    // 휴가중 몇번 사용한지 계산
    const date = parseInt(V / P);
    // 사용하고 남은 요일 계산
    const remainder = V % P;
    // L일을 사용할수 있으므로 date에 곱한값 넣어주기
    answer = date * L;
    // 나머지요일이 L일 보다 크면 L일 더하기
    if(remainder > L) answer += L;
    // 아닐경우 나머지 요일 더하기
    else answer += remainder;
    return answer;
}

function solution(arr) {
    let answer = '';
    let count = 0;
    // 테스트 케이스 입력값 정제
    for(let x of arr) {
      const item = checkDate(x);
      count++;
      answer += `Case ${count}: ${item}` + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray))