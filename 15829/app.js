const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(input[1]));

function solution(str) {
    let answer = 0;
    let count = 0n;
    let result = [];
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let x of str) {
        result.push(alphabet.indexOf(x) + 1);
    }
    for(let x of result) {
        answer = BigInt(answer) + BigInt(x) * BigInt(31n ** count);
        count += 1n;
    }
    return (answer % 1234567891n).toString();
}