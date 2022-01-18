const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = +input[i];
    inputArray.push(item);
}

// 선택 정렬을 사용했지만 n^2의 시간복잡도로 인하여 시간초과
/*
function solution(arr) {
    let answer = arr;
    for(let i = 0; i < arr.length; i++) {
        let idx = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > arr[idx]) idx = j;
        }
        const [acc, curr] = [arr[i], arr[idx]];
        arr[idx] = acc;
        arr[i] = curr;
    }
    return answer.join(' ');
}
*/

// Js의 sort정렬은 퀵정렬 기반의 정렬로 더 발전된 정렬을 사용하여 nlogn을 보장하는것으로 암 나중에 힙정렬이나 기수정렬로 한번 풀어보기.
function solution(arr) {
    arr.sort((a,b) => b-a);
    return arr.join('\n');
}

console.log(solution(inputArray));