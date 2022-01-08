const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    let answer = '';
    // 알파벳 배열 지정
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // 알파벳의 개수를 찾기 위해서 Map함수 지정
    const sHash = new Map();
    // Map함수에 알파벳 기본값 지정
    for(let x of alphabet) {
        sHash.set(x, 0);
    }
    // 문자열 인자마다 1씩 더해주기
    for(let x of s) {
        sHash.set(x, sHash.get(x) + 1);
    }
    // 정답 정제
    sHash.forEach((item) => {
        answer += item + ' ';
    });
    return answer.trim();
}

console.log(solution(input));