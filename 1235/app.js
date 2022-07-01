const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input[0] = +input[0];

function solution(arr) {
    const [n, ...phone] = arr;
    // 중복 확인을 위한 자료구조 Set
    const isChecked = new Set();
    for(let i = 0; i < phone[0].length; i++) {
        for(let num of phone) {
            // 문자를 뒤집기
            const item = [...num].reverse().join('');
            // Set에 해당 요소 0 ~ i 만큼 추출한 요소 넣기
            isChecked.add(item.slice(0, i));
        }
        // 중복 체크
        if (isChecked.size === phone.length) return i;
        else isChecked.clear();
    }
    // for문의 요소에 걸리지 않았다면 해당 요소 내보내기
    return phone[0].length;
}

console.log(solution(input));