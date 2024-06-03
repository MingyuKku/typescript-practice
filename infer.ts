type UnboxPromise<T> = T extends Promise<infer U> ? U : T;


type Unboxed = UnboxPromise<typeof testPromise>; // number


const testPromise = new Promise((resolve, reject) => {
    resolve('하하')
})


function test() {
    testPromise
    .then(res => {
        console.log('헤헤', res)
    })
}

test()

