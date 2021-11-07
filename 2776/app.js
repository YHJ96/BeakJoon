const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const noteOne = input[2].split(' ').map((item) => item.trim());
const noteTwo = input[4].split(' ').map((item) => item.trim()); 

// 해결실패 테스트케이스 문제인지 아직 모르겠음
function solution(noteOne, noteTwo) {
    const answer = Array.from({ length : noteOne.length }, () => 0);
    const noteHash = new Set();
    
    for(let x of noteOne) {
        noteHash.add(x)
    }

    noteTwo.forEach((item, index) => {
        if(noteHash.has(item)) answer[index] = 1;
        else answer[index] = 0;
    });

    return answer.join('\n');
}

console.log(solution(noteOne, noteTwo));