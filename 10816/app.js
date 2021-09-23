const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split(' ').map((item) => +item);
const inputChoice = input[3].split(' ').map((item) => +item);

console.log(solution(inputArray, inputChoice));

// 시간 초과
function solution(arr, choice) {
    let result = Array(choice.length).fill(0);
    for(let i = 0; i < choice.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(choice[i] === arr[j]) {
                result[i] += 1;
            }
        }
    }
    let answer = '';
    for(let x of result) {
        answer += x + ' ';
    }
    return answer;
}