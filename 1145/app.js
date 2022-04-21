const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map(Number);

function solution(arr) {
    let answer = 0;
    // 모든 가능성의 수를 구하기 위해서 모든 수를 곱함
    const times = arr.reduce((acc, curr) => acc * curr);
    // 배수 찾기 시작을 위해 반복문 2부터 times까지 시작
    for(let i = 2; i <= times; i++) {
        // 해당 조건에 맞는 배수의 개수를 세는 변수 초기화
        let count = 0;
        // 반복문 탈출을 위한 flag 변수
        let flag = false;
        // arr의 요소만큼 순회 시작
        for(let num of arr) {
            // num이 i의 약수일 경우 count += 1
            if(i % num === 0) count += 1;
            // 약수가 3개일 경우 정지
            if(count === 3) {
                answer = i;
                flag = true;
                break
            } 
        }
        if(flag) break;
    }
    return answer;
}

console.log(solution(input));