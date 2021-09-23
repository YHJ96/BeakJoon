const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split(' ').map((item) => +item);
const inputChoice = input[3].split(' ').map((item) => +item);

console.log(solution(inputArray, inputChoice));

// 시간 실패
function solution(arr, choice) {
    let result = Array(choice.length).fill(0);
    for(let x of arr) {
        if(choice.includes(x)) {
            result[choice.indexOf(x)] += 1;
        }
    }
    return result.join(' ');
}