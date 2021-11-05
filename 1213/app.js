const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(s) {
    let answer = '';
    let resultArr = [];
    const sH = new Map();
    const compare = [];
    let center = '';
    let count = 0;

    // 알파벳의 개수를 확인한다.
    for(let x of s) {
        if(sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }

    sH.forEach((item, index) => {
        // 팰린드롬은 홀수를 가진 알파벳이 2개이상이면 불가능
        if(item % 2 === 1) {
            count++;
            center = index;
        }
    });
    // 홀수 2개 이상 예외처리
    if(count > 1) return `I'm Sorry Hansoo`;

    // Map에 들어있는 오브젝트 index를 compare에 푸쉬
    sH.forEach((item, index) => compare.push(index));
    // 사전순으로 정렬순서가 먼저오는 펠린드롬을 체크
    compare.sort();
    for(let i = 0; i < compare.length; i++) {
        let num = sH.get(compare[i]);
        // 인자의 개수만큼 resultArr에 푸쉬
        for(let j = 0; j < parseInt(num / 2); j++) {
            resultArr.push(compare[i]);
        }
    }
    // 배열 복사를 한뒤 거꾸로 뒤집어줌
    let reResultArr = resultArr.slice().reverse();
    // 홀수가 없을 경우
    if(center.length === 0) answer += resultArr.join('') + reResultArr.join('');
    // 홀수가 있을 경우
    else answer += resultArr.join('') + center + reResultArr.join('');
    return answer;
}

console.log(solution(input[0]));