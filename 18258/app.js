const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

// JavaScript는 리스트 개념이 없기 때문에 객체를 이용하여 Queue를 만들어서 사용
// 생성자 함수로 Queue를 만들고 메소드를 프로토타입으로 생성
function Queue() {
    this.store = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.size = function () {
    // 객체에 키가 tail의 이름으로 생성된게 없으면 0 반환 
    if(this.store[this.tail] === undefined) {
        return 0; 
    }
    // array.length처럼 + 1로 길이를 확인
    else return this.tail - this.head + 1;
}

Queue.prototype.push = function (value) {
    // size가 0이면 head의 이름으로 키를 생성하고 값은 넣음
    if(this.size() === 0) this.store[this.head] = value;
    // size가 1이 아니면 tail에 +1 증가시킨뒤 값을 넣음 
    else {
        this.tail += 1;
        this.store[this.tail] = value;
    }
}

Queue.prototype.pop = function () {
    // array의 메소드인 pop처럼 pop의 값을 반환하기 위해서 popItem 변수선언
    let popItem;
    if(this.size() === 0) return -1;
    // head와 tail 같다면 아이템이 마지막 값 그래서 head와 tail을 디폴트값으로 초기화
    else if(this.head === this.tail) {
        popItem = this.store[this.head];
        delete this.store[this.head];
        this.head = 0;
        this.tail = 0;
    } else {
        popItem = this.store[this.head];
        delete this.store[this.head];
        this.head += 1;
    }
    return popItem;
}

Queue.prototype.empty = function () {
    if(this.size() === 0) return 1;
    else return 0;
}

Queue.prototype.front = function () {
    if(this.size() === 0) return -1;
    else return this.store[this.head];
}

Queue.prototype.back = function () {
    if(this.size() === 0) return -1;
    else return this.store[this.tail];
}

console.log(solution(inputArray));

function solution(arr) {
    const queue = new Queue();
    let answer = '';
    const result = [];
    for(let x of arr) {
        if(x.includes('push')) {
            // x는 문자열이므로 띄어쓰기를 기준으로 문자열을 정제
            const value = x.split(' ');
            queue.push(+value[1]);
        } else if(x === 'pop') {
            const value = queue.pop();
            result.push(value);
        } else if(x === 'size') result.push(queue.size());
        else if(x === 'empty') result.push(queue.empty());
        else if(x === 'front') result.push(queue.front());
        else if(x === 'back') result.push(queue.back());
    }
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trimEnd();
}