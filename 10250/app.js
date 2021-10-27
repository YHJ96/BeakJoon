const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => item.trim().split(' ').map((item) => +item));
console.log(solution(input));

function solution(arr) {
    let result = [];
    let answer = '';
    for(let x of arr) {
        // 방번호를 알아내기 위한 공식 n번째 순서에서 총층을 나눈뒤 올림 해준다.
        let roomNum = Math.ceil(x[2] / x[0]);
        let floor = x[2];
        while(true) {
            // 층을 알아내기 위해 floor가 x보다 크면 빼주고 아니면 반복문 중단
            if(floor > x[0]) floor -= x[0];
            else break;
        }
        if(roomNum < 10) {
            // 9이하의 방은 앞에 0을 붙혀준다.
            roomNum = '0' + roomNum;
            result.push(floor + roomNum);
        } else {
            // 문자열로 더해야 되기 때문에 명식적 문자열 변환사용
            roomNum = roomNum.toString();
            result.push(floor + roomNum);
        }
    }
    // 결과값 정제
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
} 