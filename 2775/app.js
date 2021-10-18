const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i += 2) {
    inputArray.push([+input[i], +input[i+1]]);
}
console.log(solution(inputArray));

function solution(arr) {
    const result = [];
    for(let x of arr) {
        let people = [];
        let sum = Array(x[1]).fill(0);
        let count = 0;
        for(let i = 1; i <= x[1]; i++) {
            people.push(i);
        }
        while(count !== x[0]) {
            count += 1;
            for(let i = 0; i < people.length; i++) {
                for(let j = 0; j <= i; j++) {
                    sum[i] += people[j];
                }
            }
            people = sum;
            sum = Array(x[1]).fill(0);
        }
        result.push(people);
    }
    let answer = '';
    for(let x of result) {
        const item = x[x.length - 1];
        answer += item + '\n';
    }
    return answer.trim();
}