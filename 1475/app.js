const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(arr) {
    let answer = 0;
    // 숫자의 개수를 알기위해서 Map생성
    const numberHash = new Map();
    // 문자열마다 나눠서 배열로 만들고 순회시작 item이 9라면 6으로 치환 나머지는 숫자형으로 치환
    const number = arr.split('').map((item) => {
        if(item === '9') return 6;
        else return +item;
    });
    // Map에 개수를 셋팅
    for(let x of number) {
        if(!numberHash.has(x)) numberHash.set(x, 1);
        else numberHash.set(x, numberHash.get(x) + 1);
    }
    // 6을 나누기 2를 해준뒤 홀수인경우 그수보다 많아야함으로 반올림
    numberHash.set(6, Math.round(numberHash.get(6) / 2));
    numberHash.forEach((item) => {
        // 최대값 출력
        if(!Number.isNaN(item)) answer = Math.max(answer, item);
    });
    return answer;
}

console.log(solution(input));