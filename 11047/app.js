const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let price = input[0].split(' ').map((item) => +item);
price = price[1];
const coin = [];
for(let i = 1; i < input.length; i++) {
    coin.push(+input[i]);
}

console.log(solution(price, coin));

function solution(price, coin) {
    let answer = 0;
    coin.sort((a,b) => b-a);
    for(let x of coin) {
        if(price === 0) break;
        if(price >= x) {
            answer += parseInt(price / x);
            price %= x;
        }
    }
    return answer;
}