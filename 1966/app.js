const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = [];
const word = [];
for(let i = 1; i <= +input[0] * 2; i++) {
    const item = input[i].split(' ').map((item) => +item);
    if(i % 2 === 0) word.push(item);
    else num.push(item);
}

// 문서의 중요도 순서와 문서의 위치를 계산할 함수 생성
function print(num, word) {
    // 문서가 빠지면 count + 1
    let count = 0;
    while(true) {
        // word 안에 있는 중요도가 제일 높은것만 빠지므로 매 턴마다 최고값 체크
        const max = Math.max(...word);
        // 첫번 째 인자가 중요도가 제일 높고 num의 위치와 일치하면 함수 중단
        if(word[0] === max && num === 0) {
            count += 1;
            break;
            // 첫번 쨰 인자가 중요도가 제일 높지 않지만 num의 위치일 경우 앞에서 뺴고 뒤로 다시 넣기
        } else if(word[0] !== max && num === 0) {
            const value = word.shift();
            word.push(value);
            // num의 위치를 배열 마지막 인덱스 값으로 보냄
            num = word.length - 1;
            // 첫번 째 인자가 중요도가 제일 높지만 num의 위치가 아닐경우 빼기
        } else if(word[0] === max) {
            word.shift();
            // num 위치를 -1 해서 위치조정
            num -= 1;
            count += 1;
            // 첫번 쨰 인자가 중요도가 제일 높지 않고 num의 위치가 아닐경우 앞에서 뺴고 뒤로 다시 넣기
        } else if(word[0] !== max) {
            const value = word.shift();
            word.push(value);
            // num 위치를 -1 해서 위치 조정
            num -= 1;
        }
    }
    return count;
}

function solution(numArr, wordArr) {
    let answer = '';
    // 반복문 시작 초기화
    let n = 0;
    // numArr의 길이 보다 크거나 같으면 반복문 중단
    while(n < numArr.length) {
        const item = print(numArr[n][1], wordArr[n]);
        // 연산 끝나고 answer에 정답폼 출력
        answer += item + '\n';
        n += 1;
    }
    return answer.trim();
}

console.log(solution(num, word)); 