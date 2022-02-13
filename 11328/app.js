const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input =fs.readFileSync(filePath).toString().trim().split('\n').map((item) => item.trim());

function solution(input) {
    const [s1, s2] = input;
    let answer = 0;
    const compare = Array.from({length : 2}, () => Array.from({length : 26}, () => 0));
    for(let i = 0; i < s1.length; i++) {
        const idx = s1.codePointAt(i) - 97;
        compare[0][idx]++;
    }
    for(let i = 0; i < s2.length; i++) {
        const idx = s2.codePointAt(i) - 97;
        compare[1][idx]++;
    }
    for(let i = 0; i < 26; i++) answer += Math.abs(compare[0][i] - compare[1][i]);
    return answer;
} 

console.log(solution(input));