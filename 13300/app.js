const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].trim().split(' ').map((item) => +item);
    inputArray.push(item);
}

function solution(arr) {
    let answer = 0;
    const k = arr[0][1];
    // 학생을 담을 빈 배열을 초기화
    const student = Array.from({length : 6}, () => Array.from({length : 2}, () => 0));
    for(let i = 1; i < arr.length; i++) {
        // y는 학년 x는 성별로 배열 구조분해할당
        const [x, y] = arr[i];
        student[y - 1][x]++;
    }
    for(let i = 0; i <student.length; i++) {
        // 방을 배정할 숫자
        let wcnt = parseInt(student[i][0] / k);
        let mcnt = parseInt(student[i][1] / k);
        // 만약 나머지가 0이 아니라면 방을 하나 추가
        if(student[i][0] % k !== 0) wcnt += 1;
        if(student[i][1] % k !== 0) mcnt += 1;
        answer += wcnt + mcnt;
    }
    return answer;
}

console.table(solution(inputArray));