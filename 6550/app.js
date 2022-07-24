const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => item.split(' '));

// 부분 문자열을 찾는 함수 생성
function isCheck(a, b) {
    let count = 0;
    let isTrue = false;
    // b의 요소만큼 순회시작
    for(let i = 0; i < b.length; i++) {
        // a의 요소와 b의 요소가 같다면 카운트증가
        if (a[count] == b[i]) count++;
        // count가 a의 길이와 같다면 부분문자열
        if (count === a.length) {
            isTrue = true;
            break;
        }
    }
    if (isTrue) return "Yes";
    return "No";
}

function solution(input) {
    const answer = [];
    // input의 요소만큼 순회 시작
    for(let str of input) {
        const [str1, str2] = str;
        const item = isCheck(str1, str2);
        answer.push(item);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(input));