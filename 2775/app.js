const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i += 2) {
    inputArray.push([+input[i], +input[i+1]]);
}
console.log(solution(inputArray));

function solution(arr) {
    const result = [];
    for(let x of arr) {
        // 0층 사람의 수를 넣기 위해 지정
        let people = [];
        let sum = Array(x[1]).fill(0);
        let count = 0;
        for(let i = 1; i <= x[1]; i++) {
            // 0 층의 사람수 초기화
            people.push(i);
        }
        // 층수만큼 반복
        while(count !== x[0]) {
            count += 1;
            // n층 n호 까지 사람수를 더해줌
            for(let i = 0; i < people.length; i++) {
                for(let j = 0; j <= i; j++) {
                    sum[i] += people[j];
                }
            }
            // n층 n호의 결과를 위해서 people에 넣기
            people = sum;
            // sum 모든 인자 0으로 초기화
            sum = Array(x[1]).fill(0);
        }
        result.push(people);
    }
    // 정답정제
    let answer = '';
    for(let x of result) {
        const item = x[x.length - 1];
        answer += item + '\n';
    }
    return answer.trim();
}