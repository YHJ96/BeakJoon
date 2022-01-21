// fs 모듈로 해결 불가능 readline 사용

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    const inputArray = [];
    let item = [];
    for (let i = 0; i < input.length; i++) {
        item.push(input[i]);
        // 문자열을 3개길이로 쪼갠뒤 item 초기화
        if ((i + 1) % 3 === 0) {
            inputArray.push(item.join(''));
            item = [];
        }
    }

    function solution(arr) {
        // 초기값 선언
        const answer = [13, 13, 13, 13];
        // 중복체크를 위해 선언
        const duplicateCheck = new Set([...arr]);
        // 중복된 요소가 있으면 return 함수종료
        if (arr.length !== duplicateCheck.size) return 'GRESKA';
        for (let x of arr) {
            const item = x[0];
            // 중복이 없으므로 문자열의 앞만 추출하여 빼주기
            switch (item) {
                case 'P': {
                    answer[0] -= 1;
                    break;
                } case 'K': {
                    answer[1] -= 1;
                    break;
                } case 'H': {
                    answer[2] -= 1;
                    break;
                } case 'T': {
                    answer[3] -= 1;
                    break;
                }
            }
        }
        // 정답 정제
        return answer.join(' ');
    }

    console.log(solution(inputArray));
    
    rl.close();
}).on("close", function () {
    process.exit();
});