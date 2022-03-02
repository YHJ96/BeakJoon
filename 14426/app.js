const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n] = input[0].split(' ').map((item) => +item);
const word = [];
const arr = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim();
    if(i <= n) word.push(inputValue);
    else arr.push(inputValue);
}

// 해당 접두사 단어가 문자열로 이루어진 배열중에서 있는지 확인하는 함수
function wordSearch(target, word) {
    for(let item of word) {
        // 단어에 포함되면서 해당 자리가 제일 앞에서 부터 시작하는지 체크
        const check = item.indexOf(target);
        // 한개라도 포함되어 있으면 return true를 반환
        if(check === 0) return true;
    }
    // 한개도 만족하지 않는 다면 false를 반환
    return false;
}


function solution(arr, word) {
    let answer = 0;
    // 모든 접두사 단어를 순회하면서 실행
    for(let item of arr) {
        // 만약 접두사가 포함되어 있으면 answer + 1
        if(wordSearch(item, word)) answer += 1;
    }
    return answer;
}

console.log(solution(arr, word));