const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

console.log(solution(input));

function solution(arr) {
    // 가장 시간이 짧은 순서를 위해 올림차순 정렬
    arr.sort((a,b) => a - b);
    // 총 시간의 합
    let answer = 0;
    // 인덱스 - 1 만큼을 전부 더해줘야함
    for(let i = 0; i < arr.length; i++) {
        for(j = 0; j < i + 1; j++) {
            // 인덱스가 0일 때는 예외처리 
            if(i === 0) {
                answer += arr[i];
            } else answer += arr[j];
        }
    }
    return answer;
}