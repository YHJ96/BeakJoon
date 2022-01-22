const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

// 월별 1일의 날짜를 찾는 함수
function serachDay(lastMonthDay, countDay) {
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    // 저번월의 1일의 날짜를 받아옴
    const start = days.indexOf(lastMonthDay);
    // 해당월이 총 요일과 일주일인 7의 나머지를 구함
    const end = countDay % 7;
    let idx = start + end;
    // idx가 7일 경우 7을 빼서 인덱스의 처음으로 돌아감
    if(idx > 6) idx -= 7;
    // 날짜 반환
    return days[idx];
}

function solution(date) {
    const [month, day] = date;
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const countDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 1월 1일이 월요일이므로 초기화
    const monthsOneDay = ['MON'];
    // 각각의 월의 1일을 구함
    for(let i = 0; i < countDays.length - 1; i++) {
        const item = serachDay(monthsOneDay[monthsOneDay.length - 1], countDays[i]);
        monthsOneDay.push(item);
    }
    // while문 제어하기 위한 변수
    let count = 0;
    // 해당월의 1일로 idx 초기화
    let idx = days.indexOf(monthsOneDay[month - 1]);
    // 0번 인덱스 부터 시작하므로 day - 1에서 정지
    while(count !== day - 1) {
        idx++;
        count++;
        // idx가 7이 되는 순간에 idx 0으로 초기화
        if(idx === days.length) idx = 0;
    }
    return days[idx];
}

console.log(solution(input));