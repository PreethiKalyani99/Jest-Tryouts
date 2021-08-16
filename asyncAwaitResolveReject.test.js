function fetchData(){
    return new Promise((resolve)=>{
      resolve('peanut butter');
    })
}
  
function fetchDataReject(){
    return new Promise((reject)=>{
      reject(new Error('Wrong!'));
    })
}
  
test('the data is', async () => {
    const res = fetchData();
    await res.then(()=> expect(res).resolves.toBe('peanut butter'));
});