type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"
type C = IsString<'Hello'>; // "yes"


function TestFunc<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}


const obj = {
    name: '밍큐',
    age: 31
}


console.log('result', TestFunc(obj, 'age'))

