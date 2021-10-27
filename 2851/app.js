const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => +item);

console.log(solution(input));

function solution(arr) {
    // 합의 모든 경우의 수를 담는 배열
    let newArr = [];
    let sum = 0;
    // 절대값으로 대소 크기 비교하기 위해 초기화
    let compare = Number.MAX_SAFE_INTEGER;
    let answer = 0;

    // 더하는 모든 경우의 수를 newArr에 넣기
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }

    for(let j = 0; j < newArr.length; j++) {
        // 절대값이 compare보다 작으면 compare에 그 절대값을 넣고 answer에 숫자를 넣음
        if(compare > Math.abs(100 - newArr[j])) {
            compare = Math.abs(100 - newArr[j]);
            answer = newArr[j];
            // 절대값이 서로 같으면 더 큰수 출력
        } else if(compare === Math.abs(100 - newArr[j])) {
            if(newArr[j] > newArr[j - 1]) {
                answer = newArr[j]
            } else answer = newArr[j - 1];
        }
    }
    return answer;
} 