const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
    let answer = '';
    // 구조분해할당으로 각각의 요소를 배열에 넣기
    const target = [..."CAMBRIDGE"];
    for(let char of str) {
        // 해당 문자가 target에 있다면 continue
        if (target.includes(char)) continue;
        // 해당 문자가 없으면 answer에 더하기
        answer += char;
    }
    return answer;
}

console.log(solution(input));