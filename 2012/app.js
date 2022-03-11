const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = input.map((item) => +item);

function solution(arr) {
    let answer = 0;
    // 오름차순 정렬
    arr.sort((a,b) => a-b);
    for(let i = 0; i < arr.length; i++) {
        // index의 시작이 0 이므로 등수로 하기 위해서 1을 더한뒤 arr의 요소값을 빼줘서 answer에 더해줌
        answer += Math.abs((i+1) - arr[i]);
    }
    return answer;
}

console.log(solution(input));