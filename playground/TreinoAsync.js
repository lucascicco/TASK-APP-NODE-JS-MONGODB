const add = (a,b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(a < 0 || b < 0){
                reject('Numbers must be over 0')
            }
                resolve(a+b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum1 = await add(1,99)
    const sum2 = await add(sum1,50)
    const sum3 = await add(sum2,3)
    return sum3
}

doWork().then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})
