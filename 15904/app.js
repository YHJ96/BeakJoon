const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(s) {
    // U C P C 순서대로 확인이 필요
    let answer = 'I love UCPC';
    let compare = ['U','C','P','C'];
    let n = 0;
    for(let x of s) {
        // 문자열에 compare 인자가있으면 다음 인덱스로 진행
        if(x === compare[n]) n += 1;
        if(n === 4) break;
    }
    // 끝까지 다 돌면 UCPC약어 불가능
    if(n !== 4) answer = 'I hate UCPC';
    return answer;
}
console.log(solution(input[0]));