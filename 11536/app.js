const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];

function solution(arr) {
    let answer = '';
    // 오름차순 배열을 생성
    const increasing = [...arr].sort((a,b) => a.localeCompare(b));
    // 내림차순 배열을 생성
    const decreasing = [...arr].sort((a,b) => b.localeCompare(a));
    // Type 체크
    const increaseCheck = increasing.every((item, index) => item === arr[index]);
    const decreaseCheck = decreasing.every((item, index) => item === arr[index]);
    // 조건에 따라서 정답 정제
    if(increaseCheck) answer = "INCREASING";
    else if(decreaseCheck) answer = "DECREASING";
    else answer = "NEITHER";
    return answer;
}

// fs 모듈 불가능 readline으로 진행
rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    input.shift();
    console.log(solution(input));
    process.exit();
})