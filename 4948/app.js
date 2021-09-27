const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let inputArray = [];
for (let x of input) {
    inputArray.push(+x);
}
inputArray.pop();

console.log(solution(inputArray));

function solution(arr) {
    let answer = '';
    let result = [];
    for (let i = 2; i <= 246912; i++) {
        result[i] = i;
    }
    for (let i = 2; i <= 246912; i++) {
        if (result[i] === 0) continue;
        for (let j = i + i; j <= 246912; j += i) {
            result[j] = 0;
        }
    }
    const filter = result.filter((item) => item !== 0);
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < filter.length; j++) {
            if(arr[i] < filter[j] && filter[j] <= arr[i] * 2) {
                count += 1;
            }
        }
        answer += count + '\n';
    }
    return answer.trim();
}