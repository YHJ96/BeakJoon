const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, first, second] = fs.readFileSync(filePath).toString().trim().split('\n');
first = first.split(' ').map((item) => +item);
second = second.split(' ').map((item) => +item);

function solution(first, second) {
    let hashNum = new Map();
    // 첫번째 인자를 순회하면서 해쉬테이블 설정
    for(let x of first) {
        if(!hashNum.has(x)) hashNum.set(x, 1);
        else hashNum.set(x, hashNum.get(x) + 1);
    }
    // 두번째 인자를 순회하면서 해쉬테이블 설정
    for(let x of second) {
        if(!hashNum.has(x)) hashNum.set(x, 1);
        else hashNum.set(x, hashNum.get(x) + 1);
    }
    // 중복숫자를 넣을 공간
    const mutiNum = [];
    // 중복된 숫자를 해쉬테이블에서 검색
    hashNum.forEach((item, index) => {
        if(item > 1) mutiNum.push(index);
    });
    let answer = 0;
    // 각각의 차집합의 개수 절대값으로 answer에 더해주기
    answer += Math.abs(first.length - mutiNum.length);
    answer += Math.abs(second.length - mutiNum.length);
    return answer;
}

console.log(solution(first, second));