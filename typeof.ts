interface Person {
    first: string;
    last: string;
}

const p: Person = {
    first: '쟌',
    last: '슨빌'
}


const v = typeof p;
type t = typeof p;


const first = p['first'];
type First = Person['first']
