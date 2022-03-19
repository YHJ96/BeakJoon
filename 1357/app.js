const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(" ");

function solution(n) {
    // 2개의 숫자를 구조분해할당으로 배치
    const [ first, second ] = n;
    // n1과 n2는 현재 문자열로 되어있으므로 각각의 배열의 요소로 나눈뒤 뒤집고 문자열로 치환한뒤 다시 숫자형으로 만든다.
    const n1 = Number([...first].reverse().join(''));
    const n2 = Number([...second].reverse().join(''));
    // n1 + n2 를 해준뒤 배열의 요소를 나눈뒤 뒤집고 문자열로 치환한뒤 숫자형으로 만든다.
    const answer = Number([...(n1 + n2).toString()].reverse().join(''));
    return answer;
}

console.log(solution(input));