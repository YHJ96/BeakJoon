const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push(inputValue);
}
inputArray = inputArray.flat();

solution(inputArray)

function solution(n) {
    let max = 1;
    let index = 0;
    for(let i = 0; i < n.length; i++) {
        if(max < n[i]) {
            max = n[i];
            index = i + 1;
        }
    }
    console.log(max);
    console.log(index);
}