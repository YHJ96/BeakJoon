const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

// 생성자 함수로 덱 생성
function deck() {
    this.data = [];
}

// unshift보다 성능이 좋아서 사용함
deck.prototype.push_front = function(value) {
    this.data.splice(0, 0, value);
}

deck.prototype.push_back = function(value) {
    this.data.push(value);
}

deck.prototype.pop_front = function() {
    if(this.data.length === 0) return -1;
    else return this.data.shift();
}

deck.prototype.pop_back = function() {
    if(this.data.length === 0) return -1;
    else return this.data.pop();
}

deck.prototype.size = function() {
    return this.data.length;
}

deck.prototype.empty = function() {
    if(this.data.length === 0) return 1;
    else return 0;
}

deck.prototype.front = function() {
    if(this.data.length === 0) return -1;
    else return this.data[0];
}

deck.prototype.back = function() {
    if(this.data.length === 0) return -1;
    else return this.data[this.data.length - 1];
}

function solution(arr) {
    let answer = '';
    const result = [];
    // 인스턴스 생성
    const myDeck = new deck();
    for(let x of arr) {
        // 문자열을 공백으로 나눠줌
        const item = x.split(' ');
        if(item[0] === 'push_front') {
            myDeck.push_front(item[1]);
        } else if(item[0] === 'push_back') {
            myDeck.push_back(item[1]);
        } else if(item[0] === 'pop_front') {
            result.push(myDeck.pop_front());
        } else if(item[0] === 'pop_back') {
            result.push(myDeck.pop_back());
        } else if(item[0] === 'size') {
            result.push(myDeck.size());
        } else if(item[0] === 'empty') {
            result.push(myDeck.empty());
        } else if(item[0] === 'front') {
            result.push(myDeck.front());
        } else if(item[0] === 'back') {
            result.push(myDeck.back());
        }
    }
    // 문제 출력조건
    for(let x of result) {
        answer += x + '\n';
    }
    return answer;
}

console.log(solution(inputArray)); 