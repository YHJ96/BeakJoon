const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i += 3) {
    const inputValue = input.slice(i, i + 3);
    inputArray.push(inputValue);
}

// A의 집합의 원소가 B의 집합의 원소보다 큰 경우를 찾는 함수
function serachCount(arr) {
    let count = 0;
    let [n, a, b] = arr;
    // 집합 정렬 오름차순 정렬
    a = a.split(' ').map(Number).sort((a,b) => a-b);
    b = b.split(' ').map(Number).sort((a,b) => a-b);
    // A의 요소 완전탐색
    for(let i = 0; i < a.length; i++) {
        // B의 요소 완전탐색을 진행하면서 A의 원소가 B의 원소보다 클 경우 count += 1
        for(let j = 0; j < b.length; j++) if (a[i] > b[j]) count += 1;
    }
    return count;
}

function solution(arr) {
    let answer = [];
    // arr의 요소만큼 반복 진행
    for(let i = 0; i < arr.length; i++) {
        // 카운트의 개수를 할당
        const item = serachCount(arr[i]);
        // answer에 push
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));