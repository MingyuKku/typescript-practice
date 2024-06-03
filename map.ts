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
