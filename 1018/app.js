const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

console.log(solution(inputArray));

function solution(arr) {
    const minArr = [];
    const yAxis = arr.length;
    const xAxis = arr[0].length;
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

        for (let i = y; i < y + 8; i++)
            for (let j = x; j < x + 8; j++)
                if (arr[i][j] !== white[i - y][j - x]) counter++;

        return counter;
    }

    function blackCheck(y, x) {
        let counter = 0;

        for (let i = y; i < y + 8; i++)
            for (let j = x; j < x + 8; j++)
                if (arr[i][j] !== black[i - y][j - x]) counter++;

        return counter;
    }

    for (let i = 0; i + 7 < yAxis; i++) {
        for (let j = 0; j + 7 < xAxis; j++) {
            minArr.push(whiteCheck(i, j));
            minArr.push(blackCheck(i, j));
        }
    }
    return Math.min(...minArr);
}