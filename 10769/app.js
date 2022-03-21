const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0];

function solution(s) {
    const emoji = [":-)", ":-("];
    const answer = [];
    for(let i = 0; i < emoji.length; i++) {
        // 이모지의 모양처럼 문자열을 나눈뒤 문자열 A로 치환한다.
        const word = s.split(emoji[i]).join("A");
        // A의 요소의 개수만 추출한다.
        const n = [...word].filter((item) => item === 'A').length;
        answer.push(n);
    }
    // happy와 sad의 개수를 비교해서 정답 정제
    if(answer[0] === 0 && answer[1] === 0) return "none";
    else if(answer[0] - answer[1] > 0) return "happy";
    else if(answer[0] - answer[1] < 0) return "sad";
    else return "unsure";
}

console.log(solution(input));