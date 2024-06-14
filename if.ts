interface Example2 {
    name: string;
    age: number;
    id: number;
    organisationId: string;
    groupId: string;
}


type OnlyIdKeys<T> = {
    [K in keyof T as K extends `${string}${'id' | 'Id'}` ? K : never]: T[K];
}

type IdKey<T> = {
    [K in keyof T]: K extends `${string}${'id' | 'Id'}` ? K : never;
}[keyof T];

// IdKey<Example2>
// 위 코드의 결과는
// {
//     name: never;
//     age: never;
//     id: "id";
//     organisationId: "organisationId";
//     groupId: "groupId";
// }


const dsdsd: IdKey<Example2> = 'id'

// const testObj: OnlyIdKeys<Example2> = {
const testObj: Pick<Example2, IdKey<Example2>> = {
    id: 1,
    organisationId: 'ds',
    groupId: 'ridk',
}