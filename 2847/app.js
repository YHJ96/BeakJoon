const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(arr) {
    let answer = 0;
    // 구조 분해 할당으로 변수 초기화
    const [n, ...num] = arr;
    // 배열 num의 요소만큼 순회 시작
    for(let i = 0; i < n; i++) {
        // i번째 인덱스 부터 0번 인덱스 까지 순회시작 내림차순 점수 확인
        for(let j = i; j > 0; j--) {
            // 바로 직전의 인덱스가 현재 인덱스 값과 같거나 크면 조건문 실행
            if(num[j-1] >= num[j]) {
                // 최소값을 구해야함으로 직전값은 현재값의 - 1 값을 가져야한다.
                const count = num[j-1] - (num[j] - 1);
                // 직전 인덱스에 해당 값 할당
                num[j-1] = num[j] - 1;
                answer += count;
            }
        }
    }
    return answer;
}

console.log(solution(input));