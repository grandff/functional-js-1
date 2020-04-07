const http = require('http');

const server = http.createServer((request, response) => {
    response.end("hello world");
});

server.listen(3000);

const log = console.log

/*
    고차 함수
    - 함수를 값으로 다루는 함수

    ex) 함수를 인자로 받아서 실행하는 함수를 생성해 확인하기    
*/
// apply1
const apply1 = f => f(1);
const add2 = a => a + 2;
log("apply1 :: " + apply1(add2));          // add2라는 함수를 받아서 실행함
log("apply1 input func :: " + apply1(a => a - 1));    // 직접 함수를 넘겨서 실행할수도 있음

// times
const times = (f, n) => {
    log("times on");
    let i = -1;
    while(++i < n) f(i);
    log("times off");
}
times(log, 3);              // 0~2 까지 출력 (3번 루프)
times(a => log(a+10), 3);   // 10부터 시작해서 12까지 출력 (3번 루프)




/*
    ex) 함수를 만들어서 리턴하는 함수 (클로저를 만들어서 리턴함)    
*/
// addMaker
const addMaker = a => b => a+b;     // addMaker 상수는 a를 계속 기억하고 있음. 이걸 클로저라고 부른다 함..
const add10 = addMaker(10);
log("addMaker + 5 :: " + add10(5));                      // 10 + 5 = 15
log("addMaker + 10 :: " + add10(10));                     // 10 + 10 = 10
