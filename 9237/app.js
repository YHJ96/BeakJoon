const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

function solution(arr) {
    // 초대하기까지 최단날을 측정하기 위해서 내림차순 정렬을 한다.
    arr.sort((a,b) => b-a);
    for(let i = 0; i < arr.length; i++) {
        // 심는 날이 걸리는 1과 묘목이 자라는 시간을 더한다.
        arr[i] += i + 1;
    }
    // 제일 큰수를 찾는다.
    const answer = Math.max(...arr);
    // 다음날에 방문하기 때문에 정답에 1을 더해준다.
    return answer + 1;
}

console.log(solution(input));