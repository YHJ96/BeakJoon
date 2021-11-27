const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[1].split(' ').map((item) => +item);
const lang = input[0].split(' ').map((item) => +item)[1];

function solution(lang, arr) {
    let answer = lang;
    // 오름차순 정렬
    arr.sort((a,b) => a-b);
    for(let x of arr) {
        // 길이를 비교해서 짧으면 +1를 해주면서 탐색
        if(answer >= x) answer += 1;
    }
    return answer;
}

console.log(solution(lang, arr));