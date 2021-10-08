const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => BigInt(item));
input.shift();
console.log(solution(input));

function solution(n) {
    let answer = [];
    const myMap = new Map();
    for(let x of n) {
        if(myMap.has(x) === false) myMap.set(x, 1);
        else myMap.set(x, myMap.get(x) + 1);
    }
    myMap.forEach((item, index) => {
        answer.push([index, item]);
    })
    answer.sort((a,b) => b[1] - a[1]);
    return answer[0][0].toString();
}