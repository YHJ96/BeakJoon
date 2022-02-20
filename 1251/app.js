const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    let answer = [];
    // 단어를 3개로 나누기 위한 모든 경우의수 시작 무조건 한개이상은 가지고 있어야함으로 1부터 시작
    for(let i = 1; i < s.length - 1; i++) {
        // i + 1 부터 시작
        for(let j = i + 1; j < s.length; j++) {
            const item = [];
            // 단어를 3등분으로 나누고 단어의 배열을 거꾸로 한뒤 다시 문자열로 치환
            item[0] = [...s.substring(0, i)].reverse().join('');
            item[1] = [...s.substring(i, j)].reverse().join('');
            item[2] = [...s.substring(j, s.length)].reverse().join('');
            // item의 단어의 요소를 문자열로 치환
            answer.push(item.join(''));
        }
    }
    // 사전순 올림차순 정렬
    answer.sort();
    // 정답 정제
    return answer[0];
}

console.log(solution(input));