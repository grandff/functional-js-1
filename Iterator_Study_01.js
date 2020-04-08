const log = console.log;


/*
    기존과 달라진 ES6에서의 리스트 순회
    - for i++ => for of
*/

// es5 리스트 순회
const list = [1,2,3];
for (var i=0; i<list.length; i++){
    log("es5 list :: " + list[i]);
}

const str = 'abc';
for(var i=0; i<str.length; i++){
    log("es5 list2 :: " + str[i]);
}

// es6 리스트 순회
for(const a of list){
    log("es6 list :: " + a);
}

for(const a of str){
    log("es6 list2 :: " + a);
}

/*
    이터러블 / 이터레이터 
    - 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
    - 이터레이터 : {value, done} 객체를 리턴하는 next()를 가진 값
    - 이터러블 / 이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 한 규약
*/

/*
    1. Array를 통해 알아보는 이터레이터    
*/
log('Arr ---------------- start');
// 1-1. Array는 키로 접근해서 값을 조회할 수 있음
const arr = [1, 2, 3];
for(const a of arr) log("Arr test :: " + a);

// 1-2. 이터레이터를 활용해 Array 값을 조회할 수 있음
let iterator = arr[Symbol.iterator]();
log("array iterator :: " + iterator.next().value);                                  // 1
log("array iterator :: " + iterator.next().value);                                  // 2
log("array iterator :: " + iterator.next().value);                                  // 3
log("array iterator :: " + iterator.next().value + ", " + iterator.next().done);    // undefined, done is true

// 1-3. next를 호출하고 나면 for 루프를 돌려도 이전 값은 나오지 않음(set, map도 이와 동일)
let iter1 = arr[Symbol.iterator]();
iter1.next();
for(const a of iter1) log("iter1 :: " + a);         // 2, 3. 1은 안나옴

log('Arr ---------------- end');

/*
    2. Set을 통해 알아보는 이터레이터    
*/
log('Set ---------------- start');
// 2-1. Array처럼 조회 가능
const set = new Set([1,2,3]);
for(const a of set) log(a);

// 2-2. Symbole iterator를 활용해 값 조회 가능
let iter2 = set[Symbol.iterator]();
log("set iterator :: " + iter2.next().value);                               // 1
log("set iterator :: " + iter2.next().value);                               // 2
log("set iterator :: " + iter2.next().value);                               // 3
log("set iterator :: " + iter2.next().value + ", " + iter2.next().done);    // undefined, true

log('Set ---------------- end');

/*
    3. Map을 통해 알아보는 이터레이터
*/
log('Map ---------------- start');
// 3-1. Array나 Set처럼 key로는 조회가 안됨
const map = new Map([['a',1], ['b',2], ['c', 3]]);
for (const a of map) log(a);        // value가 아닌 하나의 array가 리턴됨

// 3-2. Map 형태를 조회하려면 keys, values, entries를 사용해야함
let mapKey = map.keys();
log("map keys :: " + mapKey.next().value);

// 3-3. 이터레이터 자신을 리턴할 수 있음
let mapIter = map.values();
let mapIter2 = mapIter[Symbol.iterator]();
log("self iter :: " + mapIter2.next().value);

log('Map ---------------- end');
