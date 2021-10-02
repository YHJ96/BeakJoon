const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(+input[i]);
}
console.log(solution(inputArray));

function solution(n) {
    // 인자가 하나만 들어오는 경우 예외처리
    if(n.length === 1) {
        return n[0] + '\n' + n[0] + '\n' + n[0] + '\n' + 0; 
    }
    // 최빈값 비교를 위해 빈 배열 선언
    const compare = [];
    // Map함수로 인자를 키 배열에 인자가 중복된 횟수를 값으로 갖는다.
    const myMap = new Map();
    // 중앙값과 길이를 위해서 올림차순 정렬
    n.sort((a,b) => a - b); 
    // 반올림한 평균
    const avg = Math.round(n.reduce((acc,curr) => acc + curr) / n.length);
    // 길이
    const length = n[n.length - 1] - n[0];
    // 중앙값 
    const mid = n[Math.floor(n.length / 2)];
    // 최빈값 결과
    let mode = 0;
    for(let x of n) {
        // 키로 갖는 인자가 없으면 키값과 1추가
        if(myMap.has(x) === false) myMap.set(x, 1);
        // 키로 갖는 인자가 있으면 그 키에 해당되는 인자 1 증가
        else myMap.set(x, myMap.get(x) + 1);
    }
    // 배열을 탐색하면서 인덱스와 아이템으로 compare에 넣어줌으로 해당 숫자가 몇번 나왔는지 알 수 있다.
    myMap.forEach((item, index) => compare.push([index, item]));
    // 최빈값을 찾기 위해 정렬
    compare.sort((a,b) => b[1] - a[1]);
    // 문제의 예외처리
    if(compare[0][1] === compare[1][1]) mode = compare[1][0];
    else mode = compare[0][0];
    const answer = avg + '\n' + mid + '\n' + mode + '\n' + length;
    return answer;
}