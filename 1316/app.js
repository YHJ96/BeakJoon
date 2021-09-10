const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

solution(inputArray);

function solution(s) {
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        const word = s[i];
        let prevWord = word[0];
        let bool = true;
        for(let j = 1; j < word.length; j++) {
            if(prevWord === word[j]) continue;
            if(word.slice(j).includes(prevWord)) {
                bool = false;
                break;
            } else prevWord = word[j];
        }
        if(bool) answer += 1;
    }
    console.log(answer);
}