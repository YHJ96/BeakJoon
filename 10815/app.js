const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = input[1].trim().split(' ').map((item) => +item);
const checkNum = input[3].trim().split(' ').map((item) => +item);

function solution(num, checkNum) {
    let answer = '';
    // num을 저장할 객체 Map함수로 생성
    let numHash = new Map();
    for(let x of num) {
        // Map 객체에 인자가 없으면 추가
        if(!numHash.has(x)) numHash.set(x, 1);
    }
    // Map안에 일치하는 숫자 확인
    for(let x of checkNum) {
        // 기본값 설정
        let isCheck = 0;
        // Map안에 인자가 있으면 1로 isCheck 재할당
        if(numHash.has(x)) isCheck = 1;
        answer += isCheck + ' ';
    }
    return answer;
}

console.log(solution(num, checkNum));