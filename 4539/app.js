const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((item) => +item);
input.shift();

// 자리수 -1 부분까지 반올림 시작
function searchNum(num) {
    let answer = '';
    // 배열로 만들어 주기 위해서 문자열로한뒤 배열로 전개
    const check = [...num.toString()];
    // 배열의 길이가 1이면 num을 return
    if(check.length === 1) return num;
    // check에 요소가 하나도 없을 떄 까지 실행
    while(check.length) {
        // 현재 문자열이므로 +로 암묵적 형변환
        const item = +check.pop();
        // 다음 비교 대상을 위해서 index 지정 
        const index = check.length - 1;
        if(check.length !== 1) {
            // 반올림대상의 숫자를 비교하고 5이상이면 check배열의 마지막 length의 요소를 더하기 1
            if(item >= 5) check[index] = +check[index] + 1;
            // 그 문자열 0을 더해주기
            answer += '0';
            // 마지막 자리에 실행
        } else {
            // 요소의 마지막이기 때문에 자리수 한칸이 모자르기 때문에 0을 더해줌
            answer += '0';
            // 마지막 요소를 숫자로 치환
            const lenghtCheck = +check.pop();
            // 반올림할 대상이면 실행 만약 마지막 자리수 변형이 올경우 01를 더해줌
            if(item >= 5) {
                if(lenghtCheck + 1 !== 10) answer += lenghtCheck + 1;
                else answer += '01';
            } else answer += lenghtCheck;
        }
    }
    // 첫 자리부터 시작했으므로 배열로 전환뒤 뒤집어준 다음 다시 문자열로 치환
    return [...answer].reverse().join('');
}

function solution(arr) {
    let answer = '';
    // 배열의 요소만큼 반복
    for(let x of arr) {
        const item = searchNum(x);
        // 정답 정제
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(input));