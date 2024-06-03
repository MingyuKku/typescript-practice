type Path = `/${string}`;


const returnPath = (path: Path) => {
    return path;
}


// console.log('테스트1', returnPath('/discover'));



type Routes = '/users' | '/users/:id' | '/products' | '/products/:id';

type Tests = Extract<Routes, `/${string}/:id`> // "/users/:id" | "/products/:id"


type Top = 't-shirt' | 'shirts' | 'jacket';
type Bottom = 'jeans' | 'skirt' | 'slacks';

type Qutfit = `${Top} width ${Bottom}`;
// "t-shirt width jeans" | "t-shirt width skirt" | "t-shirt width slacks" | "shirts width jeans" | "shirts width skirt" | "shirts width slacks" | "jacket width jeans" | "jacket width skirt" | "jacket width slacks"


type FirstType = 'user' | 'post' | 'comment';
type SecondType = 'Id' | 'Name';

type ObjectOfKeys = Record<`${FirstType}${SecondType}`, string>;
// 위 타입은 아래 타입과 같다
// type ObjectOfKeys = {
//     userId: string;
//     userName: string;
//     postId: string;
//     postName: string;
//     commentId: string;
//     commentName: string;
// }


type Events = 'log_in' | 'log_out' | 'sign_up';

type ObjectOfKeys2 = Record<Uppercase<Events>, string>;
// type ObjectOfKeys2 = {
//     LOG_IN: string;
//     LOG_OUT: string;
//     SIGN_UP: string;
// }
