const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
const target = input[0].trim();
for(let i = 2; i < input.length; i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

// 반지안에 단어가 있는지 확인하는 함수
function searchWord(s, target) {
    // 반지안에 단어가 포함되어 있으면 true 반환
    if(s.includes(target)) return true;
    else {
        // 반지는 원형이므로 배열로 자료구조 Deck 이용
        const compare = [...s];
        // 반지의 전체 글자 순회
        for(let i = 0; i < s.length; i++) {
            // 반지의 단어의 앞을 추출
            const item = compare.shift();
            // 반지의 제일 앞의 단어를 뒤로 push
            compare.push(item);
            // 배열을 문자열로 만들고 단어가 포함되어있는지 확인
            if(compare.join('').includes(target)) return true;
        }
        return false;
    }
}

function solution(arr, target) {
    let answer = 0;
    // 배열의 요소들을 순회
    for(let item of arr) {
        // target이 반지에 있으면 answer + 1
        if(searchWord(item, target)) answer += 1;
    }
    return answer;
}

console.log(solution(inputArray, target));