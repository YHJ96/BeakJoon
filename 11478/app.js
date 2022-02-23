const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    // 중복체크를 위해서 Set함수 선언
    const answer = new Set();
    let word = '';
    // 문자열 자르기 시작
    for(let i = 0; i < s.length; i++) {
        // 한개씩 자르면서 출력
        for(let j = i; j < s.length; j++) {
            word += s[j];
            answer.add(word);
        }
        // word 초기화
        word = '';
    }
    // 중복안된 단어들의 총개수 (정답 정제)
    return answer.size;
}

console.log(solution(input));