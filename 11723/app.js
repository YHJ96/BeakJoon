const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => item.trim());
console.log(solution(input));

function solution(arr) {
    const mySet = new Set();
    let result = [];
    let answer = '';
    for(let x of arr) {
        const item = x.split(' ');
        if(item[0] === 'add') mySet.add(item[1]);
        else if(item[0] === 'check') {
            if(mySet.has(item[1])) result.push(1);
            else result.push(0);
        } else if(item[0] === 'remove') mySet.delete(item[1]);
        else if(item[0] === 'toggle') {
            if(mySet.has(item[1])) mySet.delete(item[1]);
            else mySet.add(item[1]);
        } else if(item[0] === 'all') {
            const allItem = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
            for(let value of allItem) {
                mySet.add(value);
            }
        } else if(item[0] === 'empty') mySet.clear();
    }
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
}