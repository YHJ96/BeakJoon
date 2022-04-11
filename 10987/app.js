const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(s) {
    let answer = 0;
    // 모음을 target 함수로 초기화한다.
    const target = ['a', 'e', 'i', 'o', 'u'];
    // for - of 문을 이용해서 요소 전체를 순회 시작
    for(let char of s) {
        // 만약 target 배열에 요소가 있으면 answer +1
        if(target.includes(char)) answer += 1;
    }
    return answer;
}

console.log(solution(input));