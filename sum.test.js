const { TestScheduler } = require('jest');
const sum = require('./sum');


test('check sum', ()=>{
    expect(sum(2,3)).toBe(5);
})