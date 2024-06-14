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



type GetDataValue<T> = T extends { data: infer T2 } ? T2 : never;

type Test1 = GetDataValue<{ data: 'hello' }>; // "hello"
type Test2 = GetDataValue<{ data: { name: 'hello' } }>; // { name: 'hello' }
type Test3 = GetDataValue<{ data: { name: 'hello', age: 20 } }>; // { name: 'hello', age: 20 }


interface MyComplexInterface<Event, Context, Name, Point> {
    getEvent: () => Event;
    getContext: () => Context;
    getName: () => Name;
    getPoint: () => Point;
}


type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint> ? TPoint : never;

type Examplee = MyComplexInterface<
    'click',
    'window',
    'my-event',
    { x: 12; y: 14 }
>

type Testt = GetPoint<Examplee>
// 위 Testt 타입은
// { x: 12; y: 14; }


type Names = [
    'Junsuk Park',
    'Bill Evans',
    'Stan Getz',
];

type GetSurname<T> = T extends `${infer FirstName} ${infer LastName}` ? LastName : never;

type LastName = GetSurname<Names[0]>; // "Park"


interface RData {
    title: string;
}
const getServerSideProps = async () => {
    const data = await fetch('/~~~');
    const json: RData = await data.json();

    return {
        props: {
            json: json
        }
    }
}

type InferPropsFromServerSideFunction<T> = T extends () => Promise<infer R> ? R : never; 
// type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: infer TData }> ? TData : never; 


type TestT = InferPropsFromServerSideFunction<typeof getServerSideProps>
// 위 TestT의 타입은 { json: RData }


type GetReturnType<T> = T extends (...args: any) => infer R ? R : never;

const parser1 = {
    parse: () => 1
}
const parser2 = () => '123';
const parser3 = {
    extract: () => true
};

type GetParserResult<T> = T extends { parse: () => infer TResult } ?
    TResult :
        T extends () => infer TResult ?
            TResult :
                T extends { extract: () => infer TResult } ?
                    TResult :
                        never;


type Dsd = GetParserResult<typeof parser1>; // number
type Dsd2 = GetParserResult<typeof parser2>; // string
type Dsd3 = GetParserResult<typeof parser3>; // boolean