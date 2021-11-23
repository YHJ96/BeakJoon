const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for (let i = 0; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    let answer = '';
    // 정렬시작
    arr.sort((a, b) => {
        // 문자열 길이가 작은순서대로 오름차순 정렬
        if(a.length < b.length) {
            return a.length - b.length;
        }
        // 문자열 길이가 같다면 예외처리
        if(a.length === b.length) {
            // 문자열 안에 있는 숫자들의 합이 작은순대로 오름차순 정렬
            const A = a.replace(/[a-z]/gi, "0").split('').map((item) => +item).reduce((acc, curr) => acc + curr);
            const B = b.replace(/[a-z]/gi, "0").split('').map((item) => +item).reduce((acc, curr) => acc + curr);
            // 숫자도 같으면 사전순으로 정렬
            if(A === B) {
                return a.localeCompare(b);
            }
            return A - B;
        }
    });
    // 정답 정제
    for(let x of arr) {
        answer += x + '\n';
    }
    return answer.trim();
}
console.log(solution(inputArray));