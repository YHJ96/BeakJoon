const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => parseInt(item));

solution(input[0], input[1]);

function solution(a, b) {
    // 곱셈 공식 사용
    let newB = `${b}`;
    let answerNum = [];
    newB = [...newB];
    newB = newB.map((item, index) => {
        if(index === 0) {
            answerNum.push(Number(item));
            return Number(item) * 100;
        } else if(index === 1) {
            answerNum.push(Number(item));
            return Number(item) * 10;
        } else return Number(item);
    })
    const answerThree = a * newB[2];
    const four = a * newB[1];
    const five = a * newB[0];
    const anwserResult = answerThree + four + five;
    const answerFour = a * answerNum[1];
    const answerFive = a * answerNum[0];
    console.log(answerThree);
    console.log(answerFour);
    console.log(answerFive);
    console.log(anwserResult);
}