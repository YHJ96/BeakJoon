const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const length = input[0].split(' ')
const tree = input[1].split(' ').map((item) => +item);

console.log(solution(+length[1], tree));

function solution(length, tree) {
    let start = 0;
    let end = Number.MIN_SAFE_INTEGER;
    for(let x of tree) {
        if(end < x) end = x;
    }
    let answer = 0;
    while(start <= end) {
        let total = 0;
        let mid = Math.floor((start + end) / 2)
        for(let x of tree) {
            if(x > mid) total += x - mid;
        }
        if(total < length) end = mid - 1;
        else {
            answer = mid;
            start = mid + 1;
        }
    }
    return answer;
}