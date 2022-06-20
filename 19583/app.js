const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ');
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    // 구조 분해 할당으로 변수 초기화
    const [info, ...chattings] = arr;
    // 시간 정제 시작
    const times = info.map((item) => {
        // ':'을 기준으로 문자열을 배열로 나눈 다음에 number로 치환
        const [hour, min] = item.split(':').map(Number);
        // 비교를 쉽게 하기 위해서 분으로 치환
        return hour * 60 + min;
    });
    // 중복제거를 위한 자료구조 Set
    let distance = new Set();
    // chattings의 요소만큼 순회시작
    for(let chat of chattings) {
        const [time, id] = chat;
        const [hour, min] = time.split(':').map(Number);
        const [start, end, finish] = times;
        // 채팅창의 현재 시간을 분으로 치환
        const total = hour * 60 + min;
        // 현재 시간이 start보다 작거나 같으면 등록
        if (total <= start) distance.add(id);
        // 현재 시간이 end와 finish 사이에 있으며 자료구조 Set에 존재하면 실행
        else if (total >= end && total <= finish && distance.has(id)) {
            // answer += 1
            answer += 1
            // 예외처리 제거를 하지 않으면 채팅창으로 중복가능성
            distance.delete(id);
        };
    }
    return answer;
}

console.log(solution(inputArray));