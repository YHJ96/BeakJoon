const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[1];
input = input.split(' ').map((item) => +item);

function solution(arr) {
    const result = [];
    // 2중 반복문을 돌면서 숫자와 전체 배열의 숫자의 차의 절대값을 구하고 result에 넣기.
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = 0; j < arr.length; j++) {
            // 절대값을 구함
            const abs = Math.abs(arr[i] - arr[j]);
            sum += abs;
        }
        result.push(sum);
    }
    // 차가 제일 작은수를 검색
    const min = Math.min(...result);
    const idx = [];
    // arr에서 제일 작은수의 인덱스만 추출
    result.forEach((item, index) => {
        if(item === min) idx.push(index);
    });
    // 정답 초기화
    let answer = arr[idx[0]];
    // 반복문을 돌면서 제일 작은숫자 추출
    for(let x of idx) {
        answer = Math.min(arr[x], answer);
    }
    return answer;
}

console.log(solution(input));