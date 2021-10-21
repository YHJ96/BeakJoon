const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    const minArr = [];
    const yAxis = arr.length;
    const xAxis = arr[0].length;
    // 8 * 8 체스판은 고정이므로 미리 생성
    const white = [
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW'
    ];

    const black = [
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB'
    ];

    function whiteCheck(y, x) {
        let counter = 0;
        // 흰색 체스판 체크  white를 x,y만큼 자르면서 탐색
        for (let i = y; i < y + 8; i++) {
            for (let j = x; j < x + 8; j++) {
                if (arr[i][j] !== white[i - y][j - x]) counter++;
            }
        }
        return counter;
    }

    function blackCheck(y, x) {
        let counter = 0;
        // 검은색 체스판 체크  white를 x,y만큼 자르면서 탐색
        for (let i = y; i < y + 8; i++) {
            for (let j = x; j < x + 8; j++) {
                if (arr[i][j] !== black[i - y][j - x]) counter++;
            }
        }
        return counter;
    }

    for (let i = 0; i + 7 < yAxis; i++) {
        // 8칸씩 짜르기 위해서 2중 포문
        for (let j = 0; j + 7 < xAxis; j++) {
            minArr.push(whiteCheck(i, j));
            minArr.push(blackCheck(i, j));
        }
    }
    return Math.min(...minArr);
}

console.log(solution(inputArray));