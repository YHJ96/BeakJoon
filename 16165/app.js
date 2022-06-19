const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [info, ...input1] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const input2 = input1.splice(input1.length - (2 * m), input1.length);
const inputArray1 = [];
// 입력 정제
for(let i = 0; i < input1.length; i++) {
    const inputValue = [input1[i]];
    const num = +input1[i];
    if (!isNaN(num)) {
        inputValue.pop();
        for(let j = i + 1; j <= i + num; j++) inputValue.push(input1[j]);
        i += num;
    }
    inputArray1.push(inputValue);
}

function solution(arr1, arr2) {
    let answer = [];
    // 자료구조 Map 선언
    const teams = new Map();
    const quizs = [];
    // 2개씩 요소를 나눠서 정제
    for(let i = 0; i < arr1.length; i += 2) teams.set(arr1[i][0], arr1[i+1].sort((a,b) => a.localeCompare(b)));
    // 2개씩 요소를 나눠서 정제
    for(let i = 0; i < arr2.length; i += 2) {
        const quiz = [arr2[i], Number(arr2[i + 1])];
        quizs.push(quiz);
    }
    // quizs의 요소만큼 순회시작
    quizs.forEach((item) => {
        // 구조 분해 할당으로 질문과 질문의 타입을 초기화
        const [ question, type ] = item;
        // 질문이 true일 경우 실행
        if (type) {
            // teams의 요소만큼 순회
            teams.forEach((item, index) => {
                // 팀에 해당되는 맴버가 있으면 answer에 넣어주고 더이상 실행하지 않기 위해서 return으로 종료
                if (item.includes(question)){
                    answer.push(index);
                    return;
                } 
            });
        }
        // 질문이 false일 경우
        else {
            // 자료구조 Map에서 해당 팀의 팀원들을 변수 result에 초기화
            const result = teams.get(question);
            // answer에 스프레이드 연산자를 이용해서 전부 넣어주기
            answer.push(...result);
        }
    });
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray1, input2));