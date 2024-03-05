const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject ("P1 Fail"),3000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P2 Fail"),2000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P3 Fail"),1000);
})

Promise.any([p1,p2,p3])
.then( res =>{
    console.log(res);
})
.catch( err => {
    console.error(err);
    console.log(err.errors);
})

// It gives result of first settled success
