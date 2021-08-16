const Number = require('./numbers');
test('testing a number', ()=>{
    expect(Number).toBeGreaterThan(10);
    expect(Number).toBeGreaterThanOrEqual(30);
    expect(Number).toBeLessThan(50);
    expect(Number).toBeLessThanOrEqual(50); 
});