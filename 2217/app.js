const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => +item);
console.log(solution(input));
function solution(n) {
    // 숫자 오름차순 정렬
    n.sort((a, b) => a - b);
    // 변수 최소값 초기화
    let answer = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n.length; i++) {
        // 로프의 크기 * 개수 만큼 증가 그러므로 전체 로프수에서 앞에서부터 체크하고 
        // 체크당했으면 그 로프도 빼기 그래서 answer보다 크면 입력
        if (answer < n[i] * (n.length - i)) answer = n[i] * (n.length - i);
    }
    return answer;
} 