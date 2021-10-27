const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const length = input[0].split(' ')
const tree = input[1].split(' ').map((item) => +item);

console.log(solution(+length[1], tree));

function solution(length, tree) {
    let start = 0;
    // Math.max 사용하면 시간초과 출력
    let end = Number.MIN_SAFE_INTEGER;
    for(let x of tree) {
        if(end < x) end = x;
    }
    let answer = 0;
    // 이분 탐색 실행
    while(start <= end) {
        let total = 0;
        // 중간점 내림
        let mid = Math.floor((start + end) / 2)
        for(let x of tree) {
            // 인자가 mid 중간값 나무의 길이 보다 크면 total에 mid만큼 뺴고 넣기
            if(x > mid) total += x - mid;
        }
        // tatal이 총 길이보다 작으면 end점을 중간 앞부터 진행
        if(total < length) end = mid - 1;
        else {
            answer = mid;
            // tatal이 총 길이보다 크면 start점을 중간 뒤부터 진행
            start = mid + 1;
        }
    }
    return answer;
} 