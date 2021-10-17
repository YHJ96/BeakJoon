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
        let roomNum = Math.ceil(x[2] / x[0]);
        let floor = x[2];
        while(true) {
            if(floor > x[0]) floor -= x[0];
            else break;
        }
        if(roomNum < 10) {
            roomNum = '0' + roomNum;
            result.push(floor + roomNum);
        } else {
            roomNum = roomNum.toString();
            result.push(floor + roomNum);
        }
    }
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
}