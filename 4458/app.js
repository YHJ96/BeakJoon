const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
    let answer = [];
    const [n, ...str] = arr;
    // 문자열의 요소만큼 반복 수행
    for(let i = 0; i < str.length; i++) {
        // 문자열의 각각의 요소를 배열의 요소로 만듬
        const newStr = [...str[i]];
        // 앞에 요소를 뺸 뒤에 대문자로 바꿔줌
        const first = newStr.shift().toUpperCase();
        // 배열 맨 앞에 대문자로 바꿔준 요소를 넣어줌
        newStr.unshift(first);
        // answer에 newStr를 문자열로 치환한뒤 push
        answer.push(newStr.join(''));
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(input));