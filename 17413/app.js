const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    s = [...s];
    let answer = '';
    let tag = [];
    let word = [];
    for(let i = 0; i < s.length; i++) {
        const item = s[i];
        if((item === '<' || tag[0] === '<') && item !== '>') {
            tag.push(item);
            if(word.length !== 0) {
                answer += word.reverse().join('');
                word = [];
            }
        } else if(item === '>') {
            tag.push(item);
            answer += tag.join('');
            tag = [];
        } else {
            word.push(item);
            if(i === s.length - 1) answer += word.reverse().join('');
        }
    }
    return answer;
}

console.log(solution(input));