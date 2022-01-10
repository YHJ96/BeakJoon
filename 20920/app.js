const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift().split(' ')[1];
const inputArray = [];
for (let i = 0; i < input.length; i++) {
    const item = input[i].trim();
    inputArray.push(item);
}

function solution(n, arr) {
    // 단어의 길이가 n이상인 글자만 추출
    arr = arr.filter((item) => item.length + 1 > n);
    // 단어의 빈도수를 확인하기 위해서 사용
    const wordMap = new Map();
    // Map에 없으면 새롭게 등록하고 있으면 1을 더해줌
    for (let x of arr) {
        if (!wordMap.has(x)) wordMap.set(x, 1);
        else wordMap.set(x, wordMap.get(x) + 1);
    }
    // Map의 키값을 배열로 전개
    const answer = [...wordMap.keys()];
    // 정렬시작
    answer.sort((a, b) => {
        // 단어의 빈도수가 많은거 부터 우선순위
        if (wordMap.get(a) !== wordMap.get(b)) {
            return wordMap.get(b) - wordMap.get(a);
            // 단어의 빈도수가 같다면 단어의 길이가 긴 순서부터 우선순위
        } else {
            if (a.length !== b.length) return b.length - a.length;
            // 단어의 길이와 빈도수가 같다면 사전순 정렬
            else return a.localeCompare(b);
        }
    });
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(n, inputArray));