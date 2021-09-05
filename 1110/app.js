const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    let newNum = [...n.toString()];
    let result = 0;
    let answer = 0;

    if(Number(n) === 0) {
        answer += 1;
    }

    while(result !== Number(n)) {
        if(newNum.length === 1) {
            result = Number(newNum[0] + newNum[0]);
            newNum = newNum[0] + newNum[0];
            answer++;
        } else {
            let add = [];
            add.push(Number(newNum[0]) + Number(newNum[1]));
            add = [...add.toString()];
            if(add.length === 1) {
                result = Number(newNum[1] + add[0]);
                newNum = newNum[1] + add[0];
                answer++;
            } else if(add.length === 2) {
                result = Number(newNum[1] + add[1]);
                newNum = newNum[1] + add[1];
                answer++;
            }
        }
    }
    console.log(answer);
}