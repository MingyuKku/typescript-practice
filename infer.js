var testPromise = new Promise(function (resolve, reject) {
    resolve('하하');
});
function test() {
    testPromise
        .then(function (res) {
        console.log('헤헤', res);
    });
}
test();
