const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

// 팰린드롬 확인 함수
function isPalindrome(str) {
    // 문자열을 배열로 만든 뒤 뒤집고 문자열로 치환
    const compare = [...str].reverse().join('');
    // 뒤집은 문자와 같으면 팰린드롬
    if (str === compare) return "Yes";
    else return "No";
}

function solution(arr) {
    const answer = [];
    // 요소만큼 순회시작
    for(let x of arr) {
        const item = x.toLowerCase();
        answer.push(isPalindrome(item.trim()));
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(input));