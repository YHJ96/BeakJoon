const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    const inputValue = input[i].trim().split('');
    inputArray.push(inputValue);
}

solution(inputArray);

function solution(arr) {
    const answer = [];
    for(let i = 0; i < arr.length; i++) {
        // )와 (의 갯수를 구함
        let right = arr[i].filter((item) => item === ')');
        let left = arr[i].filter((item) => item === '(');
        let count = [];
        // 예외사항 처리
        if(arr[i][0] === ')') {
            answer.push('NO');
            continue;
        } else if(right.length !== left.length) {
            answer.push('NO');
            continue;
        }

        // 탐색 시작 
        for(let j = 0; j < arr[i].length; j++) {
            // ( 일경우 stack push
            if(arr[i][j] === '(') count.push('O');
            // ) 만날경우 stack pop
            else count.pop();
        }
        if(count.length > 0) {
            answer.push('NO');
            count = [];
        } else {
            answer.push('YES');
            count = [];
        }
    }
    for(let x of answer) {
        console.log(x);
    }
}