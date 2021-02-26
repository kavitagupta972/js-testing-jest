const { TestScheduler } = require('jest');
const div = require('./division');

test('division of two numbers', ()=>{
    expect(div(50,10)).toBe(5);
});