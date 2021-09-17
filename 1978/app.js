const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

console.log(solution(input));

function solution(arr) {
    let compare = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) compare.push(arr[i]);
        for(let j = 2; j < arr[i]; j++) {
            if(arr[i] % j === 0) {
                compare.push(arr[i]);
                break;
            }
        }
    }
    let answer = arr.length - compare.length;
    return answer;
}