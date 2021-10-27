const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push({ A : inputValue[0], B : inputValue[1] });
}

solution(inputArray);

function solution(arr) {
    // 사각형중 3점이 주어질 경우 1점 구하기 
    let x = 0;
    let y = 0;
    if(arr[0].A === arr[1].A) {
        x = arr[2].A;
    } else if(arr[0].A === arr[2].A) {
        x = arr[1].A;
    } else x = arr[0].A;

    if(arr[0].B === arr[1].B) {
        y = arr[2].B;
    } else if(arr[0].B === arr[2].B) {
        y = arr[1].B;
    } else y = arr[0].B;

    console.log(x, y);
} 