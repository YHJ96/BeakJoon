const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

console.log(solution(input));
// 실패 테스트 케이스 다시 수정 (괄호를 하나로 보고 풀어야할꺼 같음) 미해결
function solution(arr) {
    let answer = [];
    for (let x of arr) {
        if (x.indexOf('(') > x.indexOf(')') || x.indexOf('[') > x.indexOf(']')) {
            answer.push('no');
            continue;
        } else if(x.indexOf('(') === -1 || x.indexOf(')') === -1 || x.indexOf('[') === -1 || x.indexOf(']') === -1) {
            answer.push('yes');
            continue;
        } 
        const item = x.trim();
        const small = [];
        const large = [];
        for (let value of item) {
            if(value === '(') small.push('X');
            else if(value === ')') {
                if(small.length === 0) {
                    small.push('X');
                    break;
                } else small.pop();
            }
            else if(value === '[') large.push('X');
            else if(value === ']') {
                if(large.length === 0) {
                    large.push('X');
                    break;
                } else large.pop();
            }
        }
        if(small.length !== 0 || large.length !== 0) answer.push('no');
        else answer.push('yes');
    }
    return answer;
}