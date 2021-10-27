const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(input[1]));

function solution(str) {
    let answer = 0;
    let count = 0n;
    let result = [];
    // Hash 암호화 하기 위해 인덱스 지정
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let x of str) {
        // index를 찾아서 result에 반환
        result.push(alphabet.indexOf(x) + 1);
    }
    for(let x of result) {
        // 제곱근
        answer = BigInt(answer) + BigInt(x) * BigInt(31n ** count);
        count += 1n;
    }
    // n이 뒤에 생기므로 문자열로 반환
    return (answer % 1234567891n).toString();
} 