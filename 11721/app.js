const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    // 10개씩 끊어서 출력하기 위해 자료구조 Queue사용을 위해서 문자열요소들을 배열로 전환
    s = [...s];
    let answer = [];
    // s의 요소가 남아있지 않을때 까지 진행
    while(s.length) {
        let str = '';
        // 10개씩 단어를 끊어서 출력하기 위해 range를 10으로 지정
        for(let i = 0; i < 10; i++) {
            // 제일 앞에 있는 요소를 뺴줌
            const word = s.shift();
            // 만약 요소가 남아 있지않다면 break로 for문 탈출
            if(word === undefined) break;
            // 추출한 요소를 str에 더해줌
            str += word;
        }
        // answer배열에 push
        answer.push(str);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(input));