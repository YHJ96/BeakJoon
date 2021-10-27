const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let inputArray = [];
for (let x of input) {
    inputArray.push(+x);
}
inputArray.pop();

console.log(solution(inputArray));

function solution(arr) {
    let answer = '';
    let result = [];
    // 123456 * 2가 가장 큰 범위 이므로 그 범위안에 속하는 소수를 구하기 위해 배열 초기화
    for (let i = 2; i <= 246912; i++) {
        result[i] = i;
    }

    // 범위 안에 있는 모든 소수 구하기 에라토스테네스의 체 사용
    for (let i = 2; i <= 246912; i++) {
        if (result[i] === 0) continue;
        for (let j = i + i; j <= 246912; j += i) {
            result[j] = 0;
        }
    }
    // 0으로 만든 소수가 아닌 숫자들은 제거
    const filter = result.filter((item) => item !== 0);
    // result에 있는 소수 범위에서 입력값으로 받아온 소수범위만 출력
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < filter.length; j++) {
            if(arr[i] < filter[j] && filter[j] <= arr[i] * 2) {
                count += 1;
            }
        }
        answer += count + '\n';
    }
    return answer.trim();
}

// 1. 에라토스테네스의 체 이용 