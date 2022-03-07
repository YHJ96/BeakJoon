const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const inputArray = [];

// 자리수가 정수 범위를 넘어가기 때문에 애초에 Bigint로 받는다.
for(let i = 0; i < input.length; i++) {
    const item = input[i].trim().split(" ").map((item) => BigInt(item));
    inputArray.push(item);
}

function solution(arr) {
    const target = arr[0][1];
    const p = arr[0][2];
    const num = arr[1];
    // 만약 배열의 길이가 등수에 올라갈 수 있는 점수의 개수와 같으면 실행
    if(BigInt(num.length) === p) {
        // num의 모든 요소가 target보다 크거나 같다면 true
        const ck = num.every((item) => item >= target);
        // 랭킹에 점수 올리기 불가능 return -1
        if(ck) return -1;
    }
    // Bigint 정렬
    num.sort((a,b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
        else return 0;
    });
    // 만약 p의 개수보다 length가 크면 실행
    if(BigInt(num.length) > p) {
        // 맨뒤의 점수를 빼줌
        num.pop();
        // 맨뒤에 점수를 넣어줌
        num.push(target);
        // 내림차순 정렬
        num.sort((a,b) => {
            if(a > b) return -1;
            else if(a < b) return 1;
            else return 0;
        });
        // p의 개수가 length보다 작을경우
    } else {
        // 맨뒤에 점수를 넣어줌
        num.push(target);
        // 내림차순 정렬
        num.sort((a,b) => {
            if(a > b) return -1;
            else if(a < b) return 1;
            else return 0;
        });
    }
    // num에서 처음으로 발견한 숫자의 인덱스를 반환
    const answer = num.indexOf(target);
    // 인덱스는 0 부터 시작함으로 + 1
    return answer + 1;
}

console.log(solution(inputArray));