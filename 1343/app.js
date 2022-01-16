const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    let answer = '';
    const word = s.split('.');
    const polyomino = ['AAAA', 'BB'];
    for(let i = 0; i < word.length; i++) {
        const item = word[i];
        if(item !== '') {
            if(item.length % 2 !== 0) {
                return -1;
            } else {
                const aCount = parseInt(item.length / 4);
                const bCount = parseInt((item.length % 4) / 2);
                for(let j = 0; j < aCount; j++) answer += polyomino[0];
                for(let k = 0; k < bCount; k++) answer += polyomino[1];
                if(i !== word.length - 1) answer += '.';
            }
        } else {
            if(i !== word.length - 1) answer += '.';
        }
    }
    return answer;
}

console.log(solution(input));