const fs =  require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(s) {
    let answer = [];
    // 문자열을 '-' 기준으로 단어를 나눈다.
    const word = s.split('-');
    // 단어의 첫 번째 문자를 answer에 push
    word.forEach((item) => answer.push(item[0]));
    // 정답 정제
    return answer.join("");
}

console.log(solution(input));