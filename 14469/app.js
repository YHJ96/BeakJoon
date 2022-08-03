const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index, array) => array[index] = item.split(' ').map(Number));

function solution(arr) {
    const [[n], ...cows] = arr;
    let answer = 0;
    // 정렬 시작
    cows.sort((a, b) => {
        // 도착시간이 같으면 걸리는 시간만큼 오름차순 정렬
        if (a[0] === b[0]) return a[1] = b[1];
        // 아닐경우 출발시간으로 오름차순 정렬
        return a[0] - b[0];
    });
    cows.forEach((item) => {
        const [arrive, time] = item;
        // answer이 작을 경우 arrive + time 대입
        if (answer <= arrive + time) answer = arrive + time;
        // 아닌경우 + 시간
        else answer += time;
    });
    return answer;
}

console.log(solution(input));