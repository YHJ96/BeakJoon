const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(s) {
    let answer = "";
    // 문자열의 요소만큼 순회한다.
    for(let char of s) {
        // 문자를 아스키 코드로 바꾼다.
        const asc = char.codePointAt();
        // 아스키 코드가 97 보다 작으면 대문자이므로 소문자로 바꾸고 answer에 더해준다.
        if (asc < 97) answer += char.toLowerCase();
        // 아스키 코드가 97 이상이면 소문자이므로 대문자로 바꾸고 answer에 더해준다.
        else answer += char.toUpperCase();
    }
    return answer;
}

console.log(solution(input));