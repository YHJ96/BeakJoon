const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();
const inputArray = [];
for(let i = 0; i < input.length; i+= 2) {
    const page = +input[i];
    const print = input[i + 1].split(',').map((item) => item.split('-').map(Number));
    inputArray.push([page, print]);
}

// 프린트 페이지의 개수를 출력하는 함수
function countPrint(arr) {
    // 중복 제거를 위한 자료구조 Set 사용
    let count = new Set();
    // 구조 분해 할당으로 변수 초기화
    const [page, print] = arr;
    for(let range of print) {
        // 페이지 번호만 들어왔을 경우 예외처리 (page 보다 작거나 같아야한다.)
        if (range.length === 1 && range[0] <= page) {
            count.add(range[0]);
            continue;
        };
        // 구간을 변수 초기화
        let [start, end] = range;
        // page를 넘어가면 end를 page로 대입
        if (end > page) end = page;
        // page 보다 출력이 크거나 end 보다 큰 경우 예외처리
        if (start > page || start > end) continue;
        // 페이지 add
        for(let i = start; i <= end; i++) count.add(i);
    }
    return count.size;
}

function solution(arr) {
    let answer = [];
    // arr의 요소만큼 순회시작
    for(let x of arr) {
        const item = countPrint(x);
        // item을 push
        answer.push(item);
    }
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));