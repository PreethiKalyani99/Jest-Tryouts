test.only('test 1', () => {
    expect(true).toBe(true);
});
    
test('test 2', () => {
    expect('A').toBe('A');
});

test.only('test 3', ()=>{
    expect(54+95).toBeGreaterThan(100);
});