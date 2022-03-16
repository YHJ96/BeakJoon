const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const egg = input.shift().split(" ").map((item) => +item)[0];
input = input.map((item) => +item);

function solution(egg, arr) {
    // 가격을 오름차순으로 정렬
    arr.sort((a,b) => a-b);
    let answer = [];
    // 만약에 달걀이 더 많으면 arr의 길이가 같게 바꿔줌
    if(egg > arr.length) egg = arr.length;
    let index = arr.length - 1;
    for(let i = 1; i <= egg; i++) {
        // 달걀의 개수와 처음 인덱스부터 매칭
        const item = arr[index] * i;
        // answer에 target과 sum을 push한다음에 index를 1씩 낮춰줌
        answer.push({ target: arr[index--], sum: item });
    }
    // 합으로 내림차순 정렬
    answer.sort((a,b) => b.sum - a.sum);
    // 정답 정제
    return `${answer[0].target} ${answer[0].sum}`;
}

console.log(solution(egg, input));