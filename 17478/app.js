const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString();

function solution(n) {
    let answer = [];
    let l = 0;
    let count = 0;
    let underBar = "";
    // 첫 번쨰 재귀 스택
    function first() {
        if(l === n) return;
        let underBar = '';
        for(let i = 0; i < count; i++) underBar += '_';
        const str1 = `${underBar}"재귀함수가 뭔가요?"`;
        const str2 = `${underBar}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
        const str3 = `${underBar}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
        const str4 = `${underBar}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
        answer.push(str1, str2, str3, str4);
        l += 1;
        count += 4;
        first();
    }
    // 두 번쨰 재귀 스택
    function second() {
        if(l === -1) return;
        let underBar = '';
        for(let i = 0; i <count; i++) underBar += '_';
        const str = `${underBar}라고 답변하였지.`;
        answer.push(str);
        l -= 1;
        count -= 4;
        second();
    }
    // 배열에 정제 순서대로 실행
    answer.push(`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`);
    first();
    for(let i = 0; i < count; i++) underBar += '_';
    const str1 = `${underBar}"재귀함수가 뭔가요?"`;
    const str2 = `${underBar}"재귀함수는 자기 자신을 호출하는 함수라네"`;
    answer.push(str1, str2);
    second();
    // 정답 정제
    return answer.join("\n");
}

console.table(solution(input));