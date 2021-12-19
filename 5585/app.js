const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(money) {
    // 거스름돈의 종류
    const coin = [500, 100, 50, 10, 5, 1];
    // 최소 갯수
    let answer = 0;
    let i = 0;
    // 줘야할 거스름 돈 절대값으로 구하기
    money = Math.abs(money - 1000);
    while(coin.length !== i) {
        // 줘야할 거스름돈이 없을 경우 정지
        if(money === 0) break;
        else {
            // 정수형으로 갯수 출력
            const count = parseInt(money / coin[i]);
            // 거스름돈 개수 더해주기
            answer += count;
            // 나머지 값을 money에 대입하고 i증가
            money %= coin[i++];
        }
    }
    return answer;
}

console.log(solution(input));
