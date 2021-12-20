const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const A = input[1].split(' ').map((item) => +item);
const B = input[2].split(' ').map((item) => +item);

function solution(A, B) {
    let answer = 0;
    // A를 오름차순 정렬
    A.sort((a,b) => a-b);
    // B를 내림차순 정렬
    B.sort((a,b) => b-a);
    // 모든 인자에서 제일 작은수를 구해서 answer에 더하기
    A.forEach((item, index) => {
        const sum = item * B[index];
        answer += sum;
    });
    return answer;
}

console.log(solution(A, B));