const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    inputArray.push(input[i].trim());
}

solution(inputArray);

function solution(arr) {
    const newArr = arr.sort((a, b) => {
        if(a.length === b.length) {
            return a.localeCompare(b);
        } else return a.length - b.length;
    });
    const filterArr = newArr.filter((item, index) => newArr.indexOf(item) === index);
    let answer = '';
    for(let x of filterArr) {
        answer += x + '\n';
    }
    console.log(answer);
}