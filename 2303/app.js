const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = input[i].split(' ').map((item) => +item);
    inputArray.push(item);
}

// 각 숫자자리의 합을 구해서 일의자리수를 추출하는 함수
function serachNum(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    // 5개중 3개를 뽑는경우이므로 3중 포문
    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = i + 1; j < arr.length - 1; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                // 3개를 뽑는 가지의수를 더하기
                const sum = arr[i] + arr[j] + arr[k];
                // 일의 자리수를 추출하기위해 sum에서 % 10으로 나머지구해서 최대값 반환
                answer = Math.max(sum % 10, answer);
            }
        }
    }
    return answer;
}

function solution(arr) {
    // 정수 초기화
    let answer = Number.MIN_SAFE_INTEGER;
    let result = [];
    for(let x of arr) {
        // 결과를 출력하고 result에 저장
        const item = serachNum(x);
        result.push(item);
    }
    // 가장큰수 추출
    const max = Math.max(...result);
    // 가장큰수의 인덱스를 추출하여 + 1
    result.forEach((item, index) => {
        if(item === max) answer = Math.max(answer, index + 1);
    });
    return answer;
}

console.log(solution(inputArray));