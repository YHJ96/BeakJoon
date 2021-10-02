const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let num = input[1].split(' ').map((item) => +item);

console.log(solution(num));

function solution(num) {
    let answer = '';
    // 정답을 넣어 주는 빈 배열 선언
    const result = [];
    // Set함수로 중복제거
    const mySet = new Set(num);
    // 중복제거한 인자를 filter에 넣고 오름차순 정렬하여 index를 출력하면 자기보다 큰수가 몇개 있는지 알 수 있음
    const filter = [...mySet].sort((a,b) => a - b);
    // obj 정제를 위해 Map함수로 정제
    const myMap = new Map();
    // Map함수에 키와 값을 생성
    for(let index in filter) {
        myMap.set(filter[index], index);
    }
    // 중복제거를 하였으니 그에 해당되는 키에 대한 값을 가져와서 result에 정제
    for(let x of num) {
        result.push(myMap.get(x));
    }
    // 출력값 정제
    for(let x of result) {
        answer += x + ' ';
    }
    return answer;
}