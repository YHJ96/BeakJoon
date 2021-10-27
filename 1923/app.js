const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => +item);

function solution(n, item) {
    let matrix = [];
    let num = n ** 2;
    // x축 y축 초기화
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
        // 아래방향부터 탐색
        for(let i = startRow; i <= endRow; i++) {
            matrix[i][startCol] = num;
            num--
        }
        startCol++;
        // 오른쪽방향 탐색
        for(let i = startCol; i <= endCol; i++) {
            matrix[endRow][i] = num;
            num--;
        }
        endRow--;
        // 위쪽방향 탐색
        for(let i = endRow; i >= startRow; i--) {
            matrix[i][endCol] = num;
            num--;
        }
        endCol--;
        // 왼쪽방향 탐색
        for(let i = endCol; i >= startCol; i--) {
            matrix[startRow][i] = num;
            num--;
        }
        startRow++;
    }
    // 2차원 완전탐색으로 타켓 찾기
    for(let y = 0; y < n; y++) {
        for(let x = 0; x < n; x++) {
            if(matrix[y][x] === item) {
                target = `${y + 1} ${x + 1}`;
                break;
            } 
        }
    }
    // 문자 정제
    for(let x of matrix) {
        const value = x.join(' ') + '\n';
        answer += value;
    }
    return answer.trim() + '\n' + target;
}
console.log(solution(input[0], input[1])); 