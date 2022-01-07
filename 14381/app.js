const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => +item);

// 0~9 까지의 숫자가 전부 있는지 확인하는 함수
function searchAllNum(num) {
    let answer = 1;
    // 정수 0이 들어오면 계산 불가
    if(num === 0) return 'INSOMNIA';
    // 중복 제거를 위한 Set함수
    let ck = new Set();
    while(true) {
        // 문자열로 바꾼뒤 사용
        const item = (num * answer++).toString();
        // 10개가 모두 탐색되었을 경우
        if(ck.size === 10) {
            // answer에 item과 - num을 하여 대입 (문자 - 숫자) 암묵적 변환 
            answer = item - num;
            break;
        }
        // 10개가 없을 경우 각각의 인자를 Set함수에 저장
        for(let x of item) ck.add(x);
    }
    return answer;
}

function solution(arr) {
    let answer = '';
    // 인덱스 지정
    let index = 1;
    // arr의 숫자를 순회
    for(let x of arr) {
        const item = searchAllNum(x);
        // 정답 정제
        answer += `Case #${index++}: ${item}` + '\n';
    }
    return answer.trim();
}

console.log(solution(input));