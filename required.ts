type LooseRequired<T> = {
    [P in keyof (T & Required<T>)]: T[P];
};

type Example = {
    name?: string;
    age?: number;
    active?: boolean;
}

type RequiredExample = LooseRequired<Example>;

const exampleObject: Example = {

}

const exampleObject2: RequiredExample = {
    name: '키키',
    age: 32,
    active: true
}