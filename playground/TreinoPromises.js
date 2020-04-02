const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve([2,3,4])
       // reject('Things are wrong')
    },2000)
})

doWorkPromise.then((result) =>{
    console.log('Success', result)
}).catch((err) =>{
    console.log('Este é o erro:', err)
})



