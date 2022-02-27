const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(s) {
    let answer = '';
    // 문자열을 담을 공간 선언
    let compare = [];
    // 전체 문자열 탐색시작
    for(let i = 0; i < s.length; i++) {
        // 문자열이 '<' 일 경우
        if(s[i] === '<') {
            // compare에 문자열이 남아있는지 확인
            if(compare.length !== 0) {
                // 문자열이 있을 경우 배열을 문자열로 바꾼다음 공백 기준으로 단어를 나눔
                const reverseWord = compare.join('').split(' ');
                // 공백 기준으로 나눈 단어를 뒤집어서 answer에 더하고 공백을 추가해줌
                for(let i = 0; i < reverseWord.length; i++) {
                    const word = reverseWord[i].split('').reverse().join('');
                    answer += word;
                    // 문자열 마지막 문자에는 공백을 추가하지 않기 위해 예외처리
                    if(i !== reverseWord.length - 1) answer += ' ';
                }
                // 배열 초기화
                compare = [];
            }
            compare.push(s[i]);
            // 문자열이 '>'일 경우
        } else if(s[i] === '>') {
            compare.push(s[i]);
            // 문자열 그대로를 answer에 더함
            answer += compare.join('');
            // 배열 초기화
            compare = [];
            // 문자열이 괄호가 아닐경우 compare에 push
        } else compare.push(s[i]);
    }
    // compare에 단어가 남아있다면 마지막 단어이므로 예외처리
    if(compare.length !== 0) {
       const restWord = compare.join('').split(' ');
       for(let i = 0; i < restWord.length; i++) {
           const word = restWord[i].split('').reverse().join('');
           answer += word;
           if(i !== restWord.length - 1) answer += ' ';
       }
    }
    return answer;
}

console.log(solution(input));