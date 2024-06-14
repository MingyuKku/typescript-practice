const returnWhatIPassIn = <T extends string>(t: T) => {
    return t;
}

returnWhatIPassIn('하하')
// returnWhatIPassIn(123)
// returnWhatIPassIn(true)


type CreateDataShape<TData, TError = unknown> = {
    data: TData;
    error: TError; // 기본값은 undefined
}


class Component<T> {
    private props: T;

    constructor(props: T) {
        this.props = props;
    }

    getProps = () => this.props;
}

const component = new Component(['a', 'b', 'c']); // Component<string[]>
const component2 = new Component({
    a: 'a',
    b: 'b',
    c: 'c'
});
// Component<{
//     a: string;
//     b: string;
//     c: string;
// }>

interface Obj {
    content: string[];
    createAt: string;
    id: number;
}
let objj: Obj = {
    content: ['하하'],
    createAt: '2024-06-09',
    id: 23
};

const component3 = new Component(objj); // Component<Obj>



type GetParametersAndRetureType<T extends (...args: any) => any> = {
    params: Parameters<T>;
    returnValue: ReturnType<T>;
}

type Maybe<T extends {}> = T;

type NumberType = Maybe<number>;
// type TestNull = Maybe<null>;
// type TestUndefined = Maybe<undefined>;

type NonEmptyArray<T> = [T, ...Array<T>];

type StringArray = NonEmptyArray<string>;

const testAry:StringArray = ['a', 'b'];
// const testAry2:StringArray = []; // 에러 발생

interface TestData {
    name: string;
    age: number;
    gender: number;
}

const data: TestData[] = [
    {
        name: '사라',
        age: 33,
        gender: 2,
    },
    {
        name: '길동',
        age: 32,
        gender: 1,
    },
    {
        name: '호호',
        age: 32,
        gender: 1,
    },
    {
        name: '재수',
        age: 24,
        gender: 1,
    },
]


const kk = 'age';
const age32 = data.reduce((prev: Record<string, any>, cur: TestData) => {

    const key = cur[kk];

    if (!prev[key]) {
        prev[key] = [];
    }

    prev[key].push(cur);

    return prev;
}, {})

// console.log('결과', age32)
// console.log('결과2', Object.values(age32))



interface Item {
    name: string;
    price: number;
}

const items: Item[] = [
    { name: 'Apple', price: 1.2 },
    { name: 'Banana', price: 0.8 },
    { name: 'Orange', price: 1.5 }
];


const sum = items.reduce((prev, cur) => {
    
    return prev + cur.price;
    // console.log('prev', prev)
    // console.log('cur', cur)
}, 0)


// console.log('헤헤', sum)


interface Category {
    id: number;
    name: string;
    parentId: number | null;
}

const categories: Category[] = [
    { id: 1, name: 'Electronics', parentId: null },
    { id: 2, name: 'Laptops', parentId: 1 },
    { id: 3, name: 'Smartphones', parentId: 1 },
    { id: 4, name: 'Clothing', parentId: null },
    { id: 5, name: 'Men', parentId: 4 },
    { id: 6, name: 'Women', parentId: 4 }
];

const numbers: number[] = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.reduce((prev: number[], cur) => {

    if (!prev.includes(cur)) prev.push(cur);
    
    return prev;
}, []);

// console.log(uniqueNumbers);



const nestedArray: any[] = [1, [2, [3, 4], 5], 6, [7,[[[8]]]]];

const flattenArray = (arr: any[]): any[] => {
    const result = arr.reduce((acc: any[], cur: any) => {

        if (Array.isArray(cur)) {
            // cur의 값이 배열이 아닐때까지 재귀함수를 호출하게 됨
            // flattenArray의 실행 결과로 단일 배열이 반환되기에 이것을 스프레드 연산자로 기존 acc값에 푸쉬
            acc.push(...flattenArray(cur));
            // acc = acc.concat(flattenArray(cur)); // 이렇게 해도 동일한 결과가 출력!
        } else {
            // console.log('순수', cur)
            acc.push(cur);
        }
        
        return acc;
    }, []);

    return result;
};

const flatArray = flattenArray(nestedArray);


const fetchData = async <T>(url: string) => {
    const data: T = await fetch(url).then(res => res.json());
    return data;
}


interface TestData {
    time: string;
    name: string;
    id: number;
}

const res = fetchData<TestData>('/products');



const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey): TObj[TKey] => {
    return obj[key];
}

const obj10 = {
    a: 1,
    b: 'some-thing',
    c: true,
}

const numberResult = getValue(obj10, 'a'); // number
const stringResult = getValue(obj10, 'b'); // string
const booleanResult = getValue(obj10, 'c'); // boolean