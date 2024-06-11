interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}


type Tests4 = {
    [K in keyof Attributes]: () => Attributes[K];
}
// type Tests4 = {
//     firstName: () => string;
//     lastName: () => string;
//     age: () => number;
// }


type Tests5 = {
    [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
}
// type Tests5 = {
//     getFirstName: () => string;
//     getLastName: () => string;
//     getAge: () => number;
// }



type Routes3 = 
| {
    route: '/',
    search: {
        page: string;
        perPage: string;
    }
}
| { route: '/about', search: {} }
| { route: '/admin', search: {} }
| { route: '/admin/users', search: {} }


type Tests6 = {
    [R in Routes3 as R['route']]: R['search'];
}


type Person2 = {
    firstName: string;
    lastName: string;
    age: number;
}

type RemappedPerson = {
    [K in keyof Person2 as `new_${K}`]: Person2[K];
}

type StringKeysOnly<T> = {
    [K in keyof T as K extends string ? (T[K] extends string ? `new_${K}` : never) : never]: T[K]; 
}

type RemappedPerson2 = StringKeysOnly<Person>;

// type Tests6 = {
//     "/": {
//         page: string;
//         perPage: string;
//     };
//     "/about": {};
//     "/admin": {};
//     "/admin/users": {};
// }

interface Values {
    email: string;
    firstName: string;
    lastName: string;
}


type ValuesAsUnionOfTuples = {
    [K in keyof Values]: [ K, Values[K] ];
};
// 위 타입은 다음과 같다
// type ValuesAsUnionOfTuples = {
//     email: ["email", string];
//     firstName: ["firstName", string];
//     lastName: ["lastName", string];
// }


type ValuesAsUnionOfTuples2 = ValuesAsUnionOfTuples[keyof Values];
// 위 타입은 다음과 같다
// ["firstName", string] | ["lastName", string] | ["email", string]


interface FruitMap {
    apple: 'red';
    banana: 'yellow';
    orange: 'orange';
}

type TransformedFruit = {
    [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
}[keyof FruitMap];

// 위 타입은 아래와 같다
// "orange:orange" | "apple:red" | "banana:yellow"


type Fruit = 
| {
    name: 'apple',
    color: 'red'
}
| {
    name: 'banana',
    color: 'yellow'
}
| {
    name: 'orange',
    color: 'orange'
}

type TransformedFruit2 = {
    [K in Fruit as K['name']]: `${K['name']}:${K['color']}`;
};
// type TransformedFruit2 = {
//     apple: "apple:red";
//     banana: "banana:yellow";
//     orange: "orange:orange";
// }

type TransformedFruit3 = TransformedFruit2[Fruit['name']]
// "orange:orange" | "apple:red" | "banana:yellow"


type TestObj2 = {
    kakaka: '하하하' | '히히히';
    hahaha: '후후후' | '헤헤헤';
}

type REWD = TestObj2[keyof TestObj2]
// type REWD = "하하하" | "히히히" | "후후후" | "헤헤헤"