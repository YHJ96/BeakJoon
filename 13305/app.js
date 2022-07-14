const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

// int 범위를 벗어나기 때문에 BigInt을 사용해야 100점
function solution(arr) {
    const [[n], distance, price] = arr;
    let answer = 0n;
    // 가격을 첫 번째 초기화
    let min = BigInt(price[0]);
    // 마지막 요소는 순회할 필요가 없으므로 n - 1
    for(let i = 0; i < n - 1; i++) {
        // 다음 요소와 비교하면서 최소값 측정
        if (min > BigInt(price[i])) min = BigInt(price[i]);
        // answer에 거리와 가격만큼 곱하기
        answer += BigInt(distance[i]) * min;
    }
    // 정답 정제
    return answer.toString();
}

console.log(solution(inputArray));