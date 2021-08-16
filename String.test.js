const string = require('./string');
test('testing a string', ()=>{
    expect(string).toMatch('Top of the Morning');
});