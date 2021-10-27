console.log(solution());

function solution() {
    let count = 1;
    let compare = [];
    let result = [];
    let answer = '';
    while(true) {
        // 각 자리수의 합
        let sum = [...count.toString()].map((item) => +item).reduce((acc, curr) => acc + curr);
        // 10000보다 작은 생성자가 있는 수를 전부 검색
        let selfNum = count + sum;
        // 10000보다 크면 정지
        if(selfNum >= 10000) break;
        // 셀프넘버가 아닌것을 저장
        compare.push(selfNum);
        count += 1;
    }
    for(let i = 1; i <= 9993; i++) {
        result.push(i);
    }
    // result에 compare에 없는 숫자만 저장 (셀프넘버)
    result = result.filter((item) => !compare.includes(item));
    // 출력값 정제
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
}

// 1. 문제에러 10000보다 작거나 같은 셀프넘버라고 되어있지만 정답은 9993까지의 셀프넘버이다. 