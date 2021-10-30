const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(name) {
    name.sort();
    let answer = '';
    const myMap = new Map();
    for(let x of name) {
        if(myMap.has(x[0])) {
            myMap.set(x[0], myMap.get(x[0]) + 1);
        } else myMap.set(x[0], 1);
    }
    myMap.forEach((item, index) => {
        if(myMap.get(index) >= 5) answer += index;
    })
    if(answer.length === 0) answer = 'PREDAJA';
    return answer;
}

console.log(solution(inputArray));