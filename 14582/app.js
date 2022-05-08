const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    inputArray.push(input[i].split(" ").map(Number));
}

function solution(arr) {
    let answer = "No";
    let count1 = 0, count2 = 0;
    let isChecked = false;
    for(let i = 0; i < 9; i++) {
    // 구조분해할당으로 team1과 team2로 나눈다.
    const [team1, team2] = arr;
    // i번째 초가 끝났을 경우
    count1 += team1[i];
    // 1팀이 이기고 있으면 isChecked = true
    if(count1 > count2) isChecked = true;
    // i번째 말이 끝났을 경우
    count2 += team2[i];
    // 1팀이 이기고 있으면 isChecked = ture
    if(count1 > count2) isChecked = true;
    }
    // 최종 카운트가 2팀이 높고 한번이라도 1팀이 이기고 있었을 경우 역전패
    if(count2 > count1 && isChecked) {
        answer = "Yes";
        return answer;
    } else return "No";
}

console.log(solution(inputArray));