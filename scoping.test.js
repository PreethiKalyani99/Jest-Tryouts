beforeAll(()=>{
    console.log("1. before all");
});

beforeEach(()=>{
    console.log("2. before each");
});

afterEach(()=>{
    console.log("3. after each");
});

afterAll(()=>{
    console.log("4. after all")
});

test('adding 2 numbers', ()=>{
    expect((1 + 2)).toBe(3);
    console.log('test 1');
});

describe('describe', ()=>{
    test('dividing 2 numbers', ()=>{
        expect(6 / 2).toBeLessThan(5);
        console.log('test 2');
    })
});