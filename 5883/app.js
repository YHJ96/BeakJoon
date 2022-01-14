const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1 ; i < input.length; i++) {
    inputArray.push(+input[i].trim());
}

function solution(inputArray) {
    // 중복제거를 위해서 Set함수에 inputArray의 인자를 넣음
    let mySet = new Set([...inputArray]);
    const answer = [];
    // Set의 요소마다 실행
    mySet.forEach((item) => {
        // Set의 값을 뺀 배열을 선언
        const filterNum = inputArray.filter((value) => item !== value);
        // max를 구하기 위해 변수 초기화
        let max = Number.MIN_SAFE_INTEGER;
        // 연속된 숫자 개수 확인
        let count = 0;
        // filterNum 탐색시작
        for(let i = 0; i < filterNum.length; i++) {
            // filterNum의 현재 요소와 다음요소가 같고 마지막 자리가 아니라면 count 1실행
            if(filterNum[i] === filterNum[i+1] && i !== filterNum.length - 1) count += 1;
            // 요소가 같지 않으면 max에 숫자넣고 count 초기화
            else {
                max = Math.max(max, count);
                count = 0;
            }
        }
        // 제일 처음 숫자는 인자는 2개여도 1로 계산되기 때문에 1을 더해줌
        answer.push(max + 1);
    });
    // 정답 정제
    return Math.max(...answer);
}

console.log(solution(inputArray));