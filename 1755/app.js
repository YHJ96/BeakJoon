const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

function solution(arr) {
    let answer = '';
    const num = [];
    for(let i = arr[0]; i <= arr[1]; i++) {
        num.push(i);
    }
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const engilsh = new Map();
    word.forEach((item,index) => {
        engilsh.set(item, index.toString());
        engilsh.set(index.toString(), item);
    });
    const newNum = num.map((item) => {
        const value = [...item.toString()];
        const result = [];
        for(let i = 0; i < value.length; i++) {
            result.push(engilsh.get(value[i]));
        }
        return result.join(' ');
    });
    newNum.sort();
    const sortNum = newNum.map((item) => {
        const value = item.split(' ');
        const result = [];
        for(let i = 0; i < value.length; i++) {
            result.push(engilsh.get(value[i]));
        }
        return +result.join('');
    });
    sortNum.forEach((item, index) => {
        answer += item + ' ';
        if((index + 1) % 10 === 0) answer += '\n';
    });
    return answer;
}

console.log(solution(input));