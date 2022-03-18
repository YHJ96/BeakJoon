const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split('');
    inputArray.push(inputValue);
}


function solution(board) {
    let xAxis = 0;
    let yAxis = 0;
    const colBoard = [];
    // 보드의 세로값을 추출해서 새로운 배열을 만든다.
    for(let i = 0; i < board.length; i++) {
        const item = [];
        for(let j = 0; j < board.length; j++) {
            item.push(board[j][i]);
        }
        colBoard.push(item);
    }
    for(let x of board) {
        // X를 기준으로 문자열을 나눈다.
        const item = x.join("").split("X");
        for(let value of item) {
            // 구역의 자리가 2 이상이면 xAxis에 + 1
            if(value.indexOf("..") !== -1) xAxis += 1
        }
    }
    for(let x of colBoard) {
        const item = x.join("").split("X");
        for(let value of item) {
            // 구역의 자리가 2 이상이면 yAxis에 + 1
            if(value.indexOf("..") !== -1) yAxis += 1
        }
    }
    // 정답 정제
    let answer = `${xAxis} ${yAxis}`;
    return answer;
}

console.log(solution(inputArray));