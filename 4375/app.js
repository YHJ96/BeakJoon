const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => +item);

function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let result = 1;
        // 무한루프 실행
        while (true) {
            // 숫자의 나머지가 arr의 요소로 나누었을때 나머지가 0일때까지 반복문 수행
            if (count % arr[i] == 0) {
                // 해당 숫자를 찾았을경우 answer 배열에 push
                answer.push(result);
                break;
            } else {
                // 아닐경우 1로 이루어진 숫자이므로 해당 숫자에서 10을 곱하고 더하기 1
                count = (count * 10) + 1;
                // 나머지 정리를 이용하여 시간향상
                count %= arr[i];
                // 아닐경우 result에 더하기 1
                result += 1;
            }
        }
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(input));