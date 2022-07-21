const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    let compare = 0;
    const [[n,m], ...country] = arr;
    // 올림차순 정렬 시작
    country.sort((a,b) => {
        const [indexA, goldA, silverA, bronzeA] = a;
        const [indexB, goldB, silverB, bronzeB] = b;
        // 금,은매달이 같으면 동매달로 비교
        if (goldA === goldB && silverA === silverB) return bronzeB - bronzeA;
        // 금매달이 같으면 은매달로 비교
        if (goldA === goldB) return silverB - silverA;
        // 금매달 비교
        return goldB - goldA;
    });
    // 나라의 요소만큼 순회 시작
    for(let i = 0; i < country.length; i++) {
        // 끝까지 순회가 되는경우 예외처리
        if (i === country.length - 1) return answer + 1;
        // 구조 분해 할당으로 변수 초기화
        const [index1, gold1, silver1, bronze1] = country[i];
        const [index2, gold2, silver2, bronze2] = country[i+1];
        // 해당 나라를 찾으면 종료
        if (index1 === m) return answer + 1;
        // 만약에 모든 매달이 같으면 등수가 중복
        if (gold1 === gold2 && silver1 === silver2 && bronze1 === bronze2) {
            compare += 1;
            continue;
        };
        answer += (1 + compare);
        // compare 초기화
        compare = 0;
    }
}

console.log(solution(inputArray));