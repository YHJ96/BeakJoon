const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].trim();
    inputArray.push(item);
}

function solution(board) {
    let answer = 0;
    // 완전탐색 시작
    for(let i = 0; i < board.length; i++) {
        // [0, 0]이 흰색으로 시작 0포함 짝수일경우 흰색시작
        if(i % 2 === 0) {
            // x축 검색시작
            for(let j = 0; j < board[i].length; j++) {
                // 말판이 흰색이고 말이 올려져 있으면 answer +1
                if(j % 2 === 0 && board[i][j] === 'F') answer += 1;
            }
        } else {
            // 말판이 검은색으로 시작
            if(i % 2 !== 0) {
                // x축 검색시작
                for(let j = 0; j < board[i].length; j++) {
                    // 말판이 흰색이고 말이 올려져 있으면 answer +1
                    if(j % 2 !== 0 && board[i][j] === 'F') answer += 1; 
                }
            }
        }
    }
    return answer;
}

console.log(solution(inputArray));