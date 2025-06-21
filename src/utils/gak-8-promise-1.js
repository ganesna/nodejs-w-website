// Promise - Resolve
const doWorkPromise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve([7,4,1]);
    }, 2000)
})

console.log("After promise created");


doWorkPromise.then( (result)=>{
    console.log('Success!', result);
}).catch((error)=>{
    console.log('Error',error);
})

//Promise Reject
const doWorkPromise2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        reject([7,4,1]);
    }, 2000)
})


doWorkPromise2.then( (result)=>{
    console.log('Success!', result);
}).catch((error)=>{
    console.log('Error',error);
})

