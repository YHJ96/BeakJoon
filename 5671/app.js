const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].trim().split(" ").map((item) => +item);
    inputArray.push(inputValue);
}

// 숫자가 겹치는지 확인하는 함수
function serachNum(arr) {
    let answer = 0;
    // 숫자의 시작과 끝을 구조분해 할당으로 받기
    const [start, end] = arr;
    const floor = [];
    for(let i = start; i <= end; i++) {
        // 층의 호수를 floor 함수에 push
        floor.push(i);
    }
    // floor의 요소만큼 순회
    for(let x of floor) {
        // 문자열로 바꾼뒤 각각의 요소로 나눠서 배열로 변환
        const item = x.toString().split('');
        // filter 메소드를 이용해서 중복체크
        const ck = item.filter((value, index) => item.indexOf(value) === index); 
        // 만약에 중복된 숫자가 없으면 answer + 1
        if(item.length === ck.length) answer += 1;
    }
    return answer;
}

function solution(arr) {
    let answer = [];
    // arr의 요소만큼 순회
    for(let x of arr) {
        const item = serachNum(x);
        answer.push(item); 
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));