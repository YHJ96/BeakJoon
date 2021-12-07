const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let count = -1;
const clothes = [];
for(let x of input) {
    const item = x.trim();
    if(!isNaN(+item)) {
        count++;
        clothes[count] = []; 
    } else {
        clothes[count].push(item);
    }
}

function checkClothes(arr) {
    let answer = 1;
    let clothesHash = new Map();
    for(let x of arr) {
        const tag = x.split(' ')[1];
        if(!clothesHash.has(tag)) clothesHash.set(tag, 1);
        else clothesHash.set(tag, clothesHash.get(tag) + 1);
    }
    clothesHash.forEach((item) => {
        answer *= item + 1;
    });
    return answer - 1;
}

function solution(clothes) {
    let answer = '';
    for(let x of clothes) {
        answer += checkClothes(x) + '\n';
    }
    return answer.trim();
}

console.log(solution(clothes));