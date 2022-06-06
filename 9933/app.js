const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
    let answer = [];
    let target = "";
    const [n, ...str] = arr;
    // str의 요소만큼 순회시작
    for(let word of str) {
        // 단어를 뒤집고 문자열로 치환
        const reverseWord = [...word].reverse().join('');
        // 뒤집은 단어가 str에 존재하는 경우 target에 할당
        if(str.includes(reverseWord)) target = reverseWord; 
    }
    // 가운데 문자를 추출하기 위한 정제
    const idx = Math.floor(target.length / 2);
    answer.push(target.length);
    answer.push(target[idx]);
    // 정답 정제
    return answer.join(" ");
}

console.log(solution(input));