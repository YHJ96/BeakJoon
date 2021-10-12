const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item);
const note = [];
const choice = [];
for(let i = 1; i < input.length; i++) {
    if(i <= n[0]) note.push(input[i].trim());
    else choice.push(input[i].trim());
}
console.log(solution(note, choice));

function solution(note, choice) {
    let result = [];
    let answer = '';
    // Map함수로 Obj 만들기
    const myMap = new Map();
    // index + 1 의 키와 note의 인덱스 값을 지니고 note의 값의 키와 index + 1 값을 가지는 객체 생성
    for(let i = 0; i < note.length; i++) {
        myMap.set(`${i + 1}`, note[i]);
        myMap.set(note[i], i + 1);
    }
    // choice에 해당되는 키의 값을 result에 넣기
    for(let x of choice) {
        result.push(myMap.get(x));
    }
    // 정답출력 정제
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
}