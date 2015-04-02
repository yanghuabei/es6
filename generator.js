"use strict"

function* helloGenerator() {
    yield 'hello';
    yield 'world';
    return 'haha';
}

let generator = helloGenerator();

const print = input => console.log(input);

print(generator.next());
print(generator.next());
print(generator.next());
print(generator.next());

print('-----------------------------');

debugger;

function * f() {
    console.log('lazy run1');
}

let lazyRun = f();
print('还没执行哦！');
print(lazyRun.next());
