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
    // 최적의 조건은 price를 coin이 제일 큰 동전으로 나눠진 나머지를 다음 큰동전과 비교하는 것
    let answer = 0;
    coin.sort((a,b) => b-a);
    for(let x of coin) {
        if(price === 0) break;
        if(price >= x) {
            // 나눈 값을 정수형으로 받는다.
            answer += parseInt(price / x);
            // 값에 x로 나눈 나머지를 넣는다.
            price %= x;
        }
    }
    return answer;
} 