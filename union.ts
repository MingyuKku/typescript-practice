interface Square {
    kind: 'square'
    size: number;
}

interface Rectangle {
    kind: 'rectangle'
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
    if (shape.kind === 'square') { // Square타입
         return shape.size * shape.size;
    } else { // Rectangle 타입
        return shape.width * shape.height;
    }
}


type Test = 'a' | 'b' | 'c';
type TO = Exclude<Test, 'a'> // 'b' | 'c'


type T1 = Exclude<string | number | (() => void), Function> // string | number


type Routes2 = '/' | '/about' | '/admin' | '/admin/users';

type Tests3 = {
    [K in Routes2]: K;
}
// type Tests3 = {
//     "/": "/";
//     "/about": "/about";
//     "/admin": "/admin";
//     "/admin/users": "/admin/users";
// }