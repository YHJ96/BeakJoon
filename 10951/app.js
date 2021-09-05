const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push({ A : inputValue[0], B : inputValue[1] });
}

solution(inputArray);

//문제 이상함 lenth - 1 하면안되는데 -1해야 테스트케이스 통과
function solution(numArr) {
    let i = 0;
    while(i < numArr.length - 1) {
        console.log(numArr[i].A + numArr[i].B);
        i++;
    }
};