const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputValue.shift();
    inputArray.push(inputValue);
}

solution(inputArray);

function solution(grade) {
    // 평균 구하기
    let answer = '';
    // 학생의 점수 합 구하기
    const avg = grade.map((item) => {
        return item.reduce((acc, curr) => acc + curr) / item.length;
    });
    for(let i = 0; i < grade.length; i++) {
        // 평균 보다 낮은 인원 뺴고 나눠주기 
        let people = grade[i].filter((item) => avg[i] < item).length / grade[i].length * 100;
        people = people.toFixed(3);
        answer += `${people}%\n`;
    }
    console.log(answer);
}