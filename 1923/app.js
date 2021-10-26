const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => +item);

function solution(n, item) {
    let matrix = [];
    let num = n ** 2;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let target = '';
    let answer = '';
    for(let i = 0; i < n; i++) {
        matrix.push([]);
    }
    while(startRow <= endRow && startCol <= endCol) {
        for(let i = startRow; i <= endRow; i++) {
            matrix[i][startCol] = num;
            num--
        }
        startCol++;
    
        for(let i = startCol; i <= endCol; i++) {
            matrix[endRow][i] = num;
            num--;
        }
        endRow--;
    
        for(let i = endRow; i >= startRow; i--) {
            matrix[i][endCol] = num;
            num--;
        }
        endCol--;
    
        for(let i = endCol; i >= startCol; i--) {
            matrix[startRow][i] = num;
            num--;
        }
        startRow++;
    }
    for(let y = 0; y < n; y++) {
        for(let x = 0; x < n; x++) {
            if(matrix[y][x] === item) target = `${y + 1} ${x + 1}`; 
        }
    }
    for(let x of matrix) {
        const value = x.join(' ') + '\n';
        answer += value;
    }
    return answer.trim() + '\n' + target;
}
console.log(solution(input[0], input[1]));