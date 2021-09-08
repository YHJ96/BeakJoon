const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split('');

solution(input);

function solution(s) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let index = [];
    for(let i = 0; i < alphabet.length; i++) {
        index.push(s.indexOf(alphabet[i]));
    }
    index = index.join(' ');
    console.log(index);
}