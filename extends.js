"use strict";
function TestFunc(obj, key) {
    return obj[key];
}
const obj = {
    name: '밍큐',
    age: 31
};
console.log('result', TestFunc(obj, 'age'));
