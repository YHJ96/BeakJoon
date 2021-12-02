const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split(' ').map((item) => +item);
    inputValue.shift();
    inputArray.push(inputValue);
}

// 성적을 출력하는 함수 생성
function mathStats(arr) {
    // 성적의 최소값 구하기
    const min = Math.min(...arr);
    // 성적의 최대값 구하기
    const max = Math.max(...arr);
    const minus = [];
    // 내림차순 정렬
    arr.sort((a,b) => b-a);
    // 성적과 성적간의 차이 구하기
    for(let i = 0; i < arr.length; i++) {
        // length범위 예외처리
        if(i+1 === arr.length) break;
        // 성적과 성적간의 차이 구하기
        const sum = arr[i] - arr[i+1];
        minus.push(sum);
    }
    // 성적차이중 제일 큰 값 구하기
    const maxMinus = Math.max(...minus);
    return [max, min, maxMinus];
}

function solution(arr) {
    let answer = '';
    // 정답 정제
    for(let i = 0; i < arr.length; i++) {
        const [max, min, maxMinus] = mathStats(arr[i]);
        const result = `Class ${i+1}\nMax ${max}, Min ${min}, Largest gap ${maxMinus}` + '\n'
    answer += result
    }
    return answer.trim();
}

console.log(solution(inputArray));