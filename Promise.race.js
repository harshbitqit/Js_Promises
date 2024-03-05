const p1 = new Promise ((resolve,reject)=>{
    setTimeout(()=> resolve("P1 Success"),3000);
})

const p2 = new Promise((resolv,reject)=> {
    setTimeout(() => reject("P2 Fail"),1000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P3 Success"),2000);
})

Promise.race([p1,p2,p3])
.then( res => {
    console.log(res);
})
.catch(
    err => {
        console.error(err);
    }
)

// It will give the result of first settled promise irrespective of reoslve / rejected
// Settled means it can be rejected as well as resolved 