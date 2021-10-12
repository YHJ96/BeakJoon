const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item);
const note = [];
const choice = [];
for(let i = 1; i < input.length; i++) {
    if(i <= n[0]) note.push(input[i].trim());
    else choice.push(input[i].trim());
}
console.log(solution(note, choice));

function solution(note, choice) {
    let result = [];
    let answer = '';
    const myMap = new Map();
    for(let i = 0; i < note.length; i++) {
        myMap.set(`${i + 1}`, note[i]);
        myMap.set(note[i], i + 1);
    }
    for(let x of choice) {
        result.push(myMap.get(x));
    }
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
}