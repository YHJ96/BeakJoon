const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    let answer = '';
    // .을 기준으로 문자열을 나누어 배열로 넣어줌
    const word = s.split('.');
    // 폴리오미노로 사용할 요소 2가지를 지정
    const polyomino = ['AAAA', 'BB'];
    // .을 기준으로 나눈 배열 전체 요소만큼 반복
    for(let i = 0; i < word.length; i++) {
        const item = word[i];
        // .으로 나눠서 ''이것인 경우 .이 연속된 형태이므로 체크
        if(item !== '') {
            // '' 즉 빈문자열이 아닌 문자열중에서 홀수이면 폴리오미노를 세울수 없음 return으로 함수 종료
            if(item.length % 2 !== 0) {
                return -1;
            } else {
                // 사전순으로 나열 해야함으로 A가 먼저 와야함 aCount와 bCount로 나누어서 단어 나열
                const aCount = parseInt(item.length / 4);
                const bCount = parseInt((item.length % 4) / 2);
                // 카운트만큼 반복
                for(let j = 0; j < aCount; j++) answer += polyomino[0];
                for(let k = 0; k < bCount; k++) answer += polyomino[1];
                // 마지막 문자열이 아니면 .을 기준으로 나누었기 때문에 다시 넣어줌
                if(i !== word.length - 1) answer += '.';
            }
        } else {
            // '' 빈문자열이 오면 . 대입 마지막문자열은 제외
            if(i !== word.length - 1) answer += '.';
        }
    }
    return answer;
}

console.log(solution(input));