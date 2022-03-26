const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split(" ").map((item) => +item);
    inputArray.push(inputValue);
}

function solution(arr) {
    // 각각의 사람들이 가지고 있는 카드를 내림차순 정렬
    arr.forEach((item) => item.sort((a,b) => b-a));
    const answer = [];
    // 사람의 점수를 알 수 있게 하기 위한 배열 초기화
    const people = Array.from({ length: arr.length }, () => 0);
    // 모든 회차의 카드 정보
    const rank = [];
    // 카드의 개수만큼 반복문 시작
    for(let i = 0; i < arr[0].length; i++) {
        const num = [];
        // 사람의 인원만큼 해당 회차의 카드 추출
        for(let j = 0; j < arr.length; j++) {
            const item = arr[j][i];
            num.push(item);
        }
        rank.push(num);
    }
    // 각 회차의 카드를 순회함
    rank.forEach((item) => {
        // 각 회차의 최대값을 초기화
        const max = Math.max(...item);
        // 각 회차의 인원의 카드가 최대값이랑 동일하면 해당 인원의 점수를 + 1
        item.forEach((value, index) => {
            if(value === max) people[index] += 1;
        });
    });
    // 최대의 점수를 초기화
    const max = Math.max(...people);
    // 최대의 점수가 맞으면 answer에 index + 1 해서 넣어줌 0번 인덱스부터 시작함으로
    people.forEach((item, index) => {
        if(item === max) answer.push(index + 1);
    });
    // 정답 정제
    return answer.join(" ");
}

console.log(solution(inputArray));