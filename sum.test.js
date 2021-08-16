const sum = require("./sum").Sum;
const mul = require("./sum").Multiplication;
test('adds 1 + 2 to equal 3 ', () =>{
    expect(sum(1 , 2)).toBe(3);
});

test('multiply two numbers', ()=>{
  expect(mul(5,6)).toBe(30);
})
