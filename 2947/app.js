const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

function solution(arr) {
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(j === arr.length) break;
            if(arr[j] > arr[j+1]) {
                const [acc, curr] = [arr[j], arr[j+1]];
                arr[j] = curr;
                arr[j+1] = acc;
                answer += arr.join(' ') + '\n';
            }
        }
    }
    return answer.trim();
}

console.log(solution(input));