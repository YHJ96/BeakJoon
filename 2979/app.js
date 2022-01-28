const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].split(' ').map((item) => +item);
    inputArray.push(item);
}

function solution(arr) {
    let answer = 0;
    // 트럭의 주차 요금 금액 정제
    const [one, two, three] = arr[0];
    // 시간이 1 ~ 100 시간 까지가 범위이므로 초기화
    const times = Array.from({length : 100}, () => 0);
    for(let i = 1; i < arr.length; i++) {
        // 각각의 트럭 시간 추출
        const [start, end] = arr[i];
        // 트럭이 몇대인지 확인
        for(let j = start; j < end; j++) {
            times[j]++;
        }
    }
    // times를 탐색하면서 요금 계산
    for(let i = 0; i < times.length; i++) {
        // times가 0이 아닐경우 실행
        if(times[i] !== 0) {
            // 요금계산
            if(times[i] === 1) answer += one;
            else if(times[i] === 2) answer += 2 * two;
            else if(times[i] === 3) answer += 3 * three;
        }
    }
    return answer;
}

console.log(solution(inputArray));