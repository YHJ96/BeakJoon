const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = input[i].trim().split(" ").map((item) => +item);
    inputArray.push(item);
}

function solution(arr) {
    let answer = 0;
    // 완전 탐색시작
    for(let i = 0; i < arr.length; i++) {
        let ck = true;
        for(let j = 0; j < arr.length; j++) {
            // i랑 j가 같으면 같은 인자이므로 제외
            if(i === j) continue;
            // 콘도의 거리가 arr[i] 보다 멀고 가격이 비싼곳이 있다면 false
            if(arr[i][0] > arr[j][0] && arr[i][1] >= arr[j][1]) ck = false;
            // 콘도의 가격이 arr[i] 보다 싸면서 거리가 더 가까운곳이 있다면 false
            if(arr[i][1] > arr[j][1] && arr[i][0] >= arr[j][0]) ck = false;
        }
        // 조건에 해당되지 않았으면 후보 콘도
        if(ck) answer += 1;
    }
    return answer;
}

console.log(solution(inputArray));