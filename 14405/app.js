const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    let answer = "YES";
    // 바꿀수 있는 단어를 초기화
    const compare = ['pi', 'ka', 'chu'];
    // 단어의 요소마다 반복문 실행
    for(let item of compare) {
        // 단어마다 문장을 나누고 나눈 공간에 'A'를 마킹 (kpia 이런경우 마킹을 안하면 pi가 지워지면서 ka도 지워지기 떄문)
        s = s.split(item).join('A');
    }
    // 문장을 배열의 요소로 각각 나눈뒤 A가 아닌것만 추출
    const ck = [...s].filter((item) => item !== 'A');
    // 만약 문장에 요소가 남아있을경우 answer를 No로 바꿔줌
    if(ck.length) answer = 'NO';
    return answer;
}

console.log(solution(input));   