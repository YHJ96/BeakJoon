const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0];

solution(input);

function solution(s) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    s = s.toLowerCase();
    s = [...s];
    let index = Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j <alphabet.length; j++) {
            if(s[i] === alphabet[j]) {
                index[j] += 1;
            }
        }
    }
    const max = Math.max(...index);
    const compare = index.filter((item) => max === item);
    if(compare.length !== 1) return console.log('?');
    index = index.indexOf(max);
    console.log(alphabet[index].toUpperCase());
}