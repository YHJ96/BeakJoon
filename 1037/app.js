const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

console.log(solution(input));

function solution(arr) {
    let numArr = arr.sort((a, b) => a-b);
    // 약수의 개수가 전부 들어오기 때문에 일단 sort정렬로 오름차순 정렬을 한다.
    let answer = numArr[0] * numArr[arr.length - 1];
    // 양수 A를 출력함으로 정렬을 한뒤 배열의 첫번째 인자와 마지막 인자를 곱하면 양수 A를 구할 수 있다.
    return answer;
}

/*
문제 해석
1. 약수의 개수가 전부다 들어오며 또한 1과 양수 A의 값은 들어오지 않는다.
*/