const array = require('./array');
test('checking if an element is present in the array or not', ()=>{
    expect(array).toContain('three');
});