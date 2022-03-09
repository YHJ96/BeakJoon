const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(s) {
    const answer = [];
    // 문자열을 3부분으로 나누기 위해서 모든 요소 별로 실행
    for(let i = 0; i < s.length - 2; i++) {
        for(let j = i + 1; j < s.length - 1; j++) {
            for(let k = j + 1; k < s.length; k++) {
                // 문자열 기준으로 나눈다음 뒤집고 다시 문자열로 치환
                const one = [...s.substring(0, j)].reverse().join('');
                const two = [...s.substring(j, k)].reverse().join('');
                const three = [...s.substring(k, s.length)].reverse().join('');
                // 완성된 문자열을 answer에 push
                answer.push(one + two + three);
            }
        }
    }
    // 사전순서 오름차순 정렬
    answer.sort();
    // 정답 정제
    return answer[0];
}

console.log(solution(input));