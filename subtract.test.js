const { TestScheduler } = require('jest');
const sub = require('./subtract');

test('testing subtract', ()=>{
    expect(sub(90,30)).toBe(60);
})